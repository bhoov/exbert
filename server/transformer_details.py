"""
Utilities for interfacing with the attentions from the front end.
This file is adapted from Jesse Vig's tool at https://github.com/jessevig/bertviz
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

from utils.f import delegates

# Parse input for model
def parse_inputs(inputs, mask_attentions=False):
    """Parse the output from `tokenizer.prepare_for_model` to the desired attention mask from special tokens
    
    Args:
        - inputs: The output of `tokenizer.prepare_for_model`. 
            A dict with keys: {'special_token_mask', 'token_type_ids', 'input_ids'}
        - mask_attentions: Flag indicating whether to mask the attentions or not
        
    Returns:
        Dict with keys: {'input_ids', 'token_type_ids', 'attention_mask'}
        
    Usage:
        
        s = "test sentence"
        
        # from raw sentence to tokens
        tokens = tokenizer.tokenize(s)

        # From tokens to ids
        ids = tokenizer.convert_tokens_to_ids(tokens)

        # From ids to input
        inputs = tokenizer.prepare_for_model(ids, return_tensors='pt')

        # Parse the input. Optionally mask the special tokens from the analysis. 
        parsed_input = parse_inputs(inputs)

        # Run the model
        out = model(**parse_inputs(inputs))
    """

    out = inputs.copy()
    out.pop("special_tokens_mask", None)

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
        parsed_input = parse_inputs(inputs, **kwargs)
        output = self.model(**parsed_input)
        return self.format_model_output(inputs, orig_sentence, output)

    def format_model_output(self, inputs, sentence:str, output):
        """Convert model output to the desired format.
        
        Formatter additionally needs access to the tokens and the original sentence
        """
        _, _, hidden_state, attentions, contexts = output

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

    def display_tokens(self, toks: List[str]) -> List[str]:
        """Convert the tokens to the strings we want to display to the user.
        
        Models like GPT-2 and Roberta want to override this method to handle the unicode that replaces spaces
        """
        return toks

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


def fix_byte_spaces(toks: List[str]) -> List[str]:
        return [t.replace("\u0120", " ") for t in toks]