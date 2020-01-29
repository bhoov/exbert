"""
Utilities for interfacing with the attentions from the front end.
"""
import torch
from typing import List, Union
from abc import ABC, abstractmethod

from transformer_formatter import TransformerOutputFormatter
from utils.token_processing import reshape
from spacyface import (
    BertAligner,
    GPT2Aligner,
    RobertaAligner,
    DistilBertAligner,
    auto_aligner
)

from transformers import (
    BertForMaskedLM,
    GPT2LMHeadModel,
    RobertaForMaskedLM,
    DistilBertForMaskedLM,
)

from utils.f import delegates, pick, memoize

def get_cls(class_name):
    cls_type = {
        'bert-base-uncased': BertDetails,
        'bert-base-cased': BertDetails,
        'bert-large-uncased': BertDetails,
        'bert-large-cased': BertDetails,
        'gpt2': GPT2Details,
        'gpt2-medium': GPT2Details,
        'gpt2-large': GPT2Details,
        'roberta-base': RobertaDetails,
        'roberta-large': RobertaDetails,
        'roberta-large-mnli': RobertaDetails,
        'roberta-base-openai-detector': RobertaDetails,
        'roberta-large-openai-detector': RobertaDetails,
        'distilbert-base-uncased': DistilBertDetails,
        'distilbert-base-uncased-distilled-squad': DistilBertDetails,
        'distilgpt2': GPT2Details,
        'distilroberta-base': RobertaDetails,
    }
    return cls_type[class_name]

@memoize
def from_pretrained(model_name):
    """Convert model name into appropriate transformer details"""
    try: out = get_cls(model_name).from_pretrained(model_name)
    except KeyError: raise KeyError(f"The model name of '{model_name}' either does not exist or is currently not supported")

    return out


class TransformerBaseDetails(ABC):
    """ All API calls will interact with this class to get the hidden states and attentions for any input sentence."""

    def __init__(self, model, aligner):
        self.model = model
        self.aligner = aligner
        self.model.eval()
        self.forward_inputs = ['input_ids', 'attention_mask']

    @classmethod
    def from_pretrained(cls, model_name: str):
        raise NotImplementedError(
            """Inherit from this class and specify the Model and Aligner to use"""
        )

    def att_from_sentence(self, s: str, mask_attentions=False) -> TransformerOutputFormatter:
        """Get formatted attention from a single sentence input"""
        tokens = self.aligner.tokenize(s)
        return self.att_from_tokens(tokens, s, add_special_tokens=True, mask_attentions=mask_attentions)

    def att_from_tokens(
        self, tokens: List[str], orig_sentence, add_special_tokens=False, mask_attentions=False
    ) -> TransformerOutputFormatter:
        """Get formatted attention from a list of tokens, using the original sentence for getting Spacy Metadata"""
        ids = self.aligner.convert_tokens_to_ids(tokens)

        # For GPT2, add the beginning of sentence token to the input. Note that this will work on all models but XLM
        bost = self.aligner.bos_token_id
        clst = self.aligner.cls_token_id
        if (bost is not None) and (bost != clst) and add_special_tokens:
            ids.insert(0, bost)

        inputs = self.aligner.prepare_for_model(ids, add_special_tokens=add_special_tokens, return_tensors="pt")
        parsed_input = self.format_model_input(inputs, mask_attentions=mask_attentions)
        output = self.model(parsed_input['input_ids'], attention_mask=parsed_input['attention_mask'])
        return self.format_model_output(inputs, orig_sentence, output)

    def format_model_output(self, inputs, sentence:str, output, topk=5):
        """Convert model output to the desired format.

        Formatter additionally needs access to the tokens and the original sentence
        """
        hidden_state, attentions, contexts, logits = self.select_outputs(output)

        words, probs = self.logits2words(logits, topk)

        tokens = self.view_ids(inputs["input_ids"])
        toks = self.aligner.meta_from_tokens(sentence, tokens, perform_check=False)

        formatted_output = TransformerOutputFormatter(
            sentence,
            toks,
            inputs["special_tokens_mask"],
            attentions,
            hidden_state,
            contexts,
            words,
            probs.tolist()
        )
        return formatted_output

    def select_outputs(self, output):
        """Extract the desired hidden states as passed by a particular model through the output

        In all cases, we care for:
            - hidden state embeddings (tuple of n_layers + 1)
            - attentions (tuple of n_layers)
            - contexts (tuple of n_layers)
            - Top predicted words
            - Probabilities of top predicted words
        """
        logits, hidden_state, attentions, contexts = output

        return hidden_state, attentions, contexts, logits

    def format_model_input(self, inputs, mask_attentions=False):
        """Parse the input for the model according to what is expected in the forward pass.

        If not otherwise defined, outputs a dict containing the keys:

        {'input_ids', 'attention_mask'}
        """
        return pick(self.forward_inputs, self.parse_inputs(inputs, mask_attentions=mask_attentions))

    def logits2words(self, logits, topk=5):
        probs, idxs = torch.topk(torch.softmax(logits.squeeze(0), 1), topk)
        words = [self.aligner.convert_ids_to_tokens(i) for i in idxs]
        return words, probs

    def view_ids(self, ids: Union[List[int], torch.Tensor]) -> List[str]:
        """View what the tokenizer thinks certain ids are"""
        if type(ids) == torch.Tensor:
            # Remove batch dimension
            ids = ids.squeeze(0).tolist()

        out = self.aligner.convert_ids_to_tokens(ids)
        return out

    def parse_inputs(self, inputs, mask_attentions=False):
        """Parse the output from `tokenizer.prepare_for_model` to the desired attention mask from special tokens

        Args:
            - inputs: The output of `tokenizer.prepare_for_model`.
                A dict with keys: {'special_token_mask', 'token_type_ids', 'input_ids'}
            - mask_attentions: Flag indicating whether to mask the attentions or not

        Returns:
            Dict with keys: {'input_ids', 'token_type_ids', 'attention_mask', 'special_tokens_mask'}

        Usage:

            ```
            s = "test sentence"

            # from raw sentence to tokens
            tokens = tokenizer.tokenize(s)

            # From tokens to ids
            ids = tokenizer.convert_tokens_to_ids(tokens)

            # From ids to input
            inputs = tokenizer.prepare_for_model(ids, return_tensors='pt')

            # Parse the input. Optionally mask the special tokens from the analysis.
            parsed_input = parse_inputs(inputs)

            # Run the model, pick from this output whatever inputs you want
            from utils.f import pick
            out = model(**pick(['input_ids'], parse_inputs(inputs)))
            ```
        """

        out = inputs.copy()

        # DEFINE SPECIAL TOKENS MASK
        if "special_tokens_mask" not in inputs.keys():
            special_tokens = set([self.aligner.unk_token_id, self.aligner.cls_token_id, self.aligner.sep_token_id, self.aligner.bos_token_id, self.aligner.eos_token_id, self.aligner.pad_token_id])
            in_ids = inputs['input_ids'][0]
            special_tok_mask = [1 if int(i) in special_tokens else 0 for i in in_ids]
            inputs['special_tokens_mask'] = special_tok_mask

        if mask_attentions:
            out["attention_mask"] = torch.tensor(
                [int(not i) for i in inputs.get("special_tokens_mask")]
            ).unsqueeze(0)
        else:
            out["attention_mask"] = torch.tensor(
                [1 for i in inputs.get("special_tokens_mask")]
            ).unsqueeze(0)

        return out


class BertDetails(TransformerBaseDetails):
    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            BertForMaskedLM.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            BertAligner.from_pretrained(model_name),
        )


class GPT2Details(TransformerBaseDetails):
    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            GPT2LMHeadModel.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            GPT2Aligner.from_pretrained(model_name),
        )

    def select_outputs(self, output):
        logits, _ , hidden_states, att, contexts = output
        return hidden_states, att, contexts, logits

class RobertaDetails(TransformerBaseDetails):

    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            RobertaForMaskedLM.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            RobertaAligner.from_pretrained(model_name),
        )

class DistilBertDetails(TransformerBaseDetails):
    def __init__(self, model, aligner):
        super().__init__(model, aligner)
        self.forward_inputs = ['input_ids', 'attention_mask']

    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            DistilBertForMaskedLM.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            DistilBertAligner.from_pretrained(model_name),
        )

    def select_outputs(self, output):
        """Extract the desired hidden states as passed by a particular model through the output

        In all cases, we care for:
            - hidden state embeddings (tuple of n_layers + 1)
            - attentions (tuple of n_layers)
            - contexts (tuple of n_layers)
        """
        logits, hidden_states, attentions, contexts = output

        contexts = tuple([c.permute(0, 2, 1, 3).contiguous() for c in contexts])
        return hidden_states, attentions, contexts, logits