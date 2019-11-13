"""
Utilities for interfacing with the attentions from the front end.
"""
import torch
from transformer_formatter import TransformerOutputFormatter
from utils.token_processing import reshape
from typing import List, Union
from abc import ABC, abstractmethod

from transformers import (
    BertModel,
    BertTokenizer,
    GPT2Tokenizer,
    GPT2Model,
    RobertaModel,
    RobertaTokenizer,
    DistilBertModel,
    DistilBertTokenizer
)

from utils.f import delegates, pick

# Parse input for model
def parse_inputs(inputs, mask_attentions=False):
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

    if mask_attentions:
        out["attention_mask"] = torch.tensor(
            [int(not i) for i in inputs["special_tokens_mask"]]
        ).unsqueeze(0)
    else:
        out["attention_mask"] = torch.tensor(
            [1 for i in inputs["special_tokens_mask"]]
        ).unsqueeze(0)

    return out


class TransformerBaseDetails(ABC):
    """ All API calls will interact with this class to get the hidden states and attentions for any input sentence."""

    def __init__(self, model, tokenizer):
        self.model = model
        self.tokenizer = tokenizer
        self.model.eval()
        self.forward_inputs = ['input_ids', 'token_type_ids', 'attention_mask']

    @classmethod
    def from_pretrained(cls, model_name: str):
        raise NotImplementedError(
            """Inherit from this class and specify the Model and Tokenizer to use"""
        )

    @delegates(parse_inputs)
    def att_from_sentence(self, s: str, **kwargs) -> TransformerOutputFormatter:
        """Get formatted attention from a single sentence input"""
        tokens = self.tokenizer.tokenize(s)
        return self.att_from_tokens(tokens, s)

    @delegates(parse_inputs)
    def att_from_tokens(
        self, tokens: List[str], orig_sentence, **kwargs
    ) -> TransformerOutputFormatter:
        """Get formatted attention from a list of tokens, using the original sentence only for reference if we want to get Parts of Speech"""
        ids = self.tokenizer.convert_tokens_to_ids(tokens)
        inputs = self.tokenizer.prepare_for_model(ids, return_tensors="pt")
        parsed_input = self.format_model_input(inputs, **kwargs)
        output = self.model(**parsed_input)
        return self.format_model_output(inputs, orig_sentence, output)

    def format_model_output(self, inputs, sentence:str, output):
        """Convert model output to the desired format.
        
        Formatter additionally needs access to the tokens and the original sentence
        """
        hidden_state, attentions, contexts = self.get_state_att_contexts(output)

        tokens = self.view_ids(inputs["input_ids"])
        disp_tokens = self.display_tokens(tokens)
        formatted_output = TransformerOutputFormatter(
            sentence,
            disp_tokens,
            inputs["special_tokens_mask"],
            attentions,
            hidden_state,
            contexts,
        )
        return formatted_output

    def get_state_att_contexts(self, output):
        """Extract the desired hidden states as passed by a particular model through the output
        
        In all cases, we care for:
            - hidden state embeddings (tuple of n_layers + 1)
            - attentions (tuple of n_layers)
            - contexts (tuple of n_layers)
        """
        _, _, hidden_state, attentions, contexts = output

        return hidden_state, attentions, contexts

    def display_tokens(self, toks: List[str]) -> List[str]:
        """Convert the tokens to the strings we want to display to the user.
        
        Models like GPT-2 and Roberta want to override this method to handle the unicode that replaces spaces
        """
        return toks

    @delegates(parse_inputs)
    def format_model_input(self, inputs, **kwargs):
        """Parse the input for the model according to what is expected in the forward pass. 
        
        If not otherwise defined, outputs a dict containing the keys:
        
        {'input_ids', 'token_type_ids', 'attention_mask'}
        """
        return pick(self.forward_inputs, parse_inputs(inputs))

    def view_ids(self, ids: Union[List[int], torch.Tensor]) -> List[str]:
        """View what the tokenizer thinks certain ids are"""
        if type(ids) == torch.Tensor:
            # Remove batch dimension
            ids = ids.squeeze(0).tolist() 

        out = self.tokenizer.convert_ids_to_tokens(ids)
        return out


class BertDetails(TransformerBaseDetails):
    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            BertModel.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            BertTokenizer.from_pretrained(model_name),
        )


class GPT2Details(TransformerBaseDetails):
    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            GPT2Model.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            GPT2Tokenizer.from_pretrained(model_name),
        )

    def display_tokens(self, toks: List[str]) -> List[str]:
        """Remove weird space unicode characters"""
        return fix_byte_spaces(toks)

class RobertaDetails(TransformerBaseDetails):

    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            RobertaModel.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            RobertaTokenizer.from_pretrained(model_name),
        )

    def display_tokens(self, toks: List[str]) -> List[str]:
        return fix_byte_spaces(toks)

class DistilBertDetails(TransformerBaseDetails):
    def __init__(self, model, tokenizer):
        super().__init__(model, tokenizer)
        self.forward_inputs = ['input_ids', 'attention_mask']

    @classmethod
    def from_pretrained(cls, model_name: str):
        return cls(
            DistilBertModel.from_pretrained(
                model_name,
                output_attentions=True,
                output_hidden_states=True,
                output_additional_info=True,
            ),
            DistilBertTokenizer.from_pretrained(model_name),
        )

    def get_state_att_contexts(self, output):
        """Extract the desired hidden states as passed by a particular model through the output
        
        In all cases, we care for:
            - hidden state embeddings (tuple of n_layers + 1)
            - attentions (tuple of n_layers)
            - contexts (tuple of n_layers)
        """
        _, hidden_states, attentions, contexts = output

        return hidden_states, attentions, contexts


def fix_byte_spaces(toks: List[str]) -> List[str]:
        return [t.replace("\u0120", " ") for t in toks]