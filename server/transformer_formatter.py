from typing import List, Iterable, Tuple
from functools import partial
import numpy as np
import torch
import json

from spacyface.simple_spacy_token import SimpleSpacyToken
from utils.token_processing import fix_byte_spaces
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
    """The embeddings have n_layers + 1, indicating the final output embedding."""

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
        topk_words: List[List[str]],
        topk_probs: List[List[float]]
    ):
        assert len(tokens) > 0, "Cannot have an empty token output!"

        modified_embeddings = flatten_batch(embeddings)
        modified_att = flatten_batch(att)
        modified_contexts = flatten_batch(contexts)

        self.sentence = sentence
        self.tokens = tokens
        self.special_tokens_mask = special_tokens_mask
        self.embeddings = modified_embeddings
        self.attentions = modified_att
        self.raw_contexts = modified_contexts
        self.topk_words = topk_words
        self.topk_probs = topk_probs

        self.n_layers = len(contexts) # With +1 for buffer layer at the beginning
        _, self.__len, self.n_heads, self.hidden_dim = contexts[0].shape

    @property
    def contexts(self):
        """Combine the head and the context dimension as it is passed forward in the model"""
        return squeeze_contexts(self.raw_contexts)

    @property
    def normed_embeddings(self):
        ens = tuple([torch.norm(e, dim=-1) for e in self.embeddings])
        normed_es = tuple([e / en.unsqueeze(-1) for e, en in zip(self.embeddings, ens)])
        return normed_es

    @property
    def normed_contexts(self):
        """Normalize each by head"""
        cs = self.raw_contexts
        cns = tuple([torch.norm(c, dim=-1) for c in cs])
        normed_cs = tuple([c / cn.unsqueeze(-1) for c, cn in zip(cs, cns)])
        squeezed_normed_cs = squeeze_contexts(normed_cs)
        return squeezed_normed_cs
    
    def to_json(self, layer:int, ndigits=5):
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

        def to_resp(tok: SimpleSpacyToken, embeddings: List[float], contexts: List[float], topk_words, topk_probs):
            return {
                "text": tok.token,
                "bpe_token": tok.token,
                "bpe_pos": tok.pos,
                "bpe_dep": tok.dep,
                "bpe_is_ent": tok.is_ent,
                "embeddings": nested_rounder(embeddings),
                "contexts": nested_rounder(contexts),
                "topk_words": topk_words,
                "topk_probs": nested_rounder(topk_probs)
            }

        side_info = [to_resp(t, e, c, w, p) for t,e,c,w,p in zip(
                                                                self.tokens, 
                                                                tolist(self.embeddings[layer]), 
                                                                tolist(self.contexts[layer]),
                                                                self.topk_words,
                                                                self.topk_probs)]

        out = {"aa": {
            "att": nested_rounder(tolist(self.attentions[layer])),
            "left": side_info,
            "right": side_info
        }}

        return out

    def display_tokens(self, tokens):
        return fix_byte_spaces(tokens)

    def to_hdf5_meta(self):
        """Output metadata information to store as hdf5 metadata for a group"""
        token_dtype = self.tokens[0].hdf5_token_dtype
        out = {k: np.array([t[k] for t in self.tokens], dtype=np.dtype(dtype)) for k, dtype in token_dtype}
        out['sentence'] = self.sentence
        return out

    def to_hdf5_content(self, do_norm=True):
        """Return dictionary of {attentions, embeddings, contexts} formatted as array for hdf5 file"""

        def get_embeds(c): 
            if do_norm: return c.normed_embeddings
            return c.embeddings

        def get_contexts(c):
            if do_norm: return c.normed_contexts
            return c.contexts

        embeddings = to_numpy(get_embeds(self))
        contexts = to_numpy(get_contexts(self))
        atts = to_numpy(self.attentions)

        return {
            "embeddings": embeddings,
            "contexts": contexts,
            "attentions": atts
        }

    @property
    def searchable_embeddings(self):
        return np.array(list(map(to_searchable, self.embeddings)))

    @property
    def searchable_contexts(self):
        return np.array(list(map(to_searchable, self.contexts)))

    def __repr__(self):
        lim = 50
        if len(self.sentence) > lim: s = self.sentence[:lim - 3] + "..."
        else: s = self.sentence[:lim]

        return f"TransformerOutput({s})"

    def __len__(self):
        return self.__len
        
def to_numpy(x): 
    """Embeddings, contexts, and attentions are stored as torch.Tensors in a tuple. Convert this to a numpy array
    for storage in hdf5"""
    return np.array([x_.detach().numpy() for x_ in x])

def to_searchable(t: Tuple[torch.Tensor]):
    return t.detach().numpy().astype(np.float32)