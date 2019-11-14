from typing import List, Iterable, Tuple
from functools import partial
import numpy as np
import torch
import json

from utils.token_processing import aligner, fix_byte_spaces
from aligner.simple_spacy_token import SimpleSpacyToken
from utils.gen_utils import map_nlist


def round_return_value(attentions, ndigits=5):
    """Rounding must happen right before it's passed back to the frontend because there is a little numerical error that's introduced converting back to lists
    
    attentions: {
        'aa': {
            left.embeddings & contexts
            right.embeddings & contexts
            att
        }
    }
    
    """
    rounder = partial(round, ndigits=ndigits)
    nested_rounder = partial(map_nlist, rounder)
    new_out = attentions  # Modify values to save memory
    new_out["aa"]["att"] = nested_rounder(attentions["aa"]["att"])
    new_out["aa"]["left"]["embeddings"] = nested_rounder(
        attentions["aa"]["left"]["embeddings"]
    )
    new_out["aa"]["left"]["contexts"] = nested_rounder(
        attentions["aa"]["left"]["contexts"]
    )

    new_out["aa"]["right"]["embeddings"] = nested_rounder(
        attentions["aa"]["right"]["embeddings"]
    )
    new_out["aa"]["right"]["contexts"] = nested_rounder(
        attentions["aa"]["right"]["contexts"]
    )

    return new_out

def flatten_batch(x: Tuple[torch.Tensor]) -> Tuple[torch.Tensor]:
    """Remove the batch dimension of every tensor inside the Iterable container `x`"""
    return tuple([x_.squeeze(0) for x_ in x])

def squeeze_contexts(x: Tuple[torch.Tensor]) -> Tuple[torch.Tensor]:
    """Combine the last two dimensions of the context."""
    shape = x[0].shape
    new_shape = shape[:-2] + (-1,)
    return tuple([x_.view(new_shape) for x_ in x])

def add_blank(xs: Tuple[torch.tensor]) -> Tuple[torch.Tensor]:
    """The embeddings have n_layers + 1, indicating the input hidden state."""

    return (torch.zeros_like(xs[0]),) + xs

class TransformerOutputFormatter:
    def __init__(
        self,
        sentence: str,
        tokens: List[SimpleSpacyToken],
        special_tokens_mask: List[int],
        att: Tuple[torch.Tensor], 
        embeddings: Tuple[torch.Tensor],
        contexts: Tuple[torch.Tensor],
    ):

        modified_att = add_blank(flatten_batch(att))
        modified_contexts = add_blank(squeeze_contexts(flatten_batch(contexts)))
        modified_embeddings = flatten_batch(embeddings)

        self.sentence = sentence
        self.tokens = tokens
        self.special_tokens_mask = special_tokens_mask
        self.embeddings = modified_embeddings
        self.attentions = modified_att
        self.contexts = modified_contexts

        # print("Att length: ", len(self.attentions))
        # print("HS length: ", len(self.embeddings))
        # print("Context length: ", len(self.contexts))

        # print("Att shape: ", self.attentions[3].shape)
        # print("HS shape: ", self.embeddings[3].shape)
        # print("Context shape: ", self.contexts[3].shape)
    
    def to_json(self):
        print("Jsoning")
        pass

    def to_old_json(self, layer:int, ndigits=5):
        """The original API expects the following response:

        aa: {
            att: number[][][]
            left: <FullSingleTokenInfo[]>
            right: <FullSingleTokenInfo[]>
        }

        FullSingleTokenInfo:
            {
                text: string
                embeddings: number[]
                contexts: number[]
                bpe_token: string
                bpe_pos: string
                bpe_dep: string
                bpe_is_ent: boolean
            }
        """
        # Convert the embeddings, attentions, and contexts into list. Perform rounding

        rounder = partial(round, ndigits=ndigits)
        nested_rounder = partial(map_nlist, rounder)

        def tolist(tens): return [t.tolist() for t in tens]

        def to_resp(tok: SimpleSpacyToken, embeddings: List[float], contexts: List[float]):
            return {
                "text": tok.token,
                "bpe_token": tok.token,
                "bpe_pos": tok.pos,
                "bpe_dep": tok.dep,
                "bpe_is_ent": tok.is_ent,
                "embeddings": nested_rounder(embeddings),
                "contexts": nested_rounder(contexts),
            }

        # Drop the first value in embeddings
        side_info = [to_resp(t, e, c) for t,e,c in zip(self.tokens, tolist(self.embeddings[layer]), tolist(self.contexts[layer]))]

        out = {"aa": {
            "att": nested_rounder(tolist(self.attentions[layer])),
            "left": side_info,
            "right": side_info
        }}

        print("Shape of attentions:", self.attentions[0].shape)

        return out

    def display_tokens(self, tokens):
        return fix_byte_spaces(tokens)

    def __repr__(self):
        lim = 40
        if len(self.sentence) > lim: s = self.sentence[:lim - 3] + "..."
        else: s = self.sentence[:lim]

        return f"TransformerOutput({s})"
