"""
Utilities for interfacing with the attentions from the front end.
"""
import torch
from typing import *
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
    AutoConfig,
    AutoModelWithLMHead,
    AutoTokenizer,
)

from utils.f import delegates, pick, memoize

def get_details(mname):
    return ModelDetails(mname)

@memoize
def get_model_tok(mname):
    conf = AutoConfig.from_pretrained(mname, output_attentions=True, output_past=False, output_additional_info=True, output_hidden_states=True)
    tok = auto_aligner(mname, config=conf)
    model = AutoModelWithLMHead.from_pretrained(mname, config=conf)
    return model, tok

class ModelDetails:
    """Wraps a transformer model and tokenizer to prepare inputs to the frontend visualization"""
    def __init__(self, mname):
        self.mname = mname
        self.model, self.aligner = get_model_tok(self.mname)
        self.model.eval()
        self.config = self.model.config

    def att_from_sentence(self, s: str, mask_attentions=False) -> TransformerOutputFormatter:
        """Get formatted attention from a single sentence input"""
        tokens = self.aligner.tokenize(s)
        return self.att_from_tokens(tokens, s, add_special_tokens=True, mask_attentions=mask_attentions)

    def att_from_tokens(
        self, tokens: List[str], orig_sentence:str, add_special_tokens=False, mask_attentions=False, topk=5
    ) -> TransformerOutputFormatter:
        """Get formatted attention from a list of tokens, using the original sentence for getting Spacy Metadata"""
        ids = self.aligner.convert_tokens_to_ids(tokens)

        # For GPT2 models, add the beginning of sentence token to the input. Note that this will work on all models but XLM
        if 'gpt' in self.mname and add_special_tokens:
            bost = self.aligner.bos_token_id
            ids.insert(0, bost)

        inputs = self.aligner.prepare_for_model(ids, add_special_tokens=add_special_tokens, return_tensors="pt")
        parsed_input = self.parse_inputs(inputs, mask_attentions=mask_attentions)
        in_ids = parsed_input['input_ids']

        if 't5' in self.mname:
            output = self.model(input_ids=in_ids, decoder_input_ids=in_ids, attention_mask=parsed_input['attention_mask'])
        else:
            output = self.model(input_ids=in_ids, attention_mask=parsed_input['attention_mask'])

        tokens = self.view_ids(inputs["input_ids"])

        return self.format_model_output(inputs, orig_sentence, output, topk=topk)

    def format_model_output(self, inputs, sentence:str, output, topk=5):
        """Convert model output to the desired format.

        Formatter additionally needs access to the tokens and the original sentence
        """
        record = self.select_outputs(output)

        words, probs = self.logits2words(record['logits'], topk)

        tokens = self.view_ids(inputs["input_ids"])
        toks = self.aligner.meta_from_tokens(sentence, tokens, perform_check=False)

        formatted_output = TransformerOutputFormatter(
            sentence,
            toks,
            inputs["special_tokens_mask"],
            record['attentions'],
            record['hidden_state'],
            record['contexts'],
            words,
            probs.tolist()
        )
        return formatted_output 

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

        return {
            "logits": logits,
            "hidden_state": hidden_state,
            "attentions": attentions,
            "contexts": contexts
        }

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