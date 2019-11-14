from typing import List
from functools import partial
import numpy as np
import json

from utils.token_processing import aligner
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

class TransformerOutputFormatter:
    def __init__(
        self,
        sentence: str,
        tokens: List[str],
        special_tokens_mask: List[int],
        att: np.ndarray,
        embeddings: np.ndarray = None,
        contexts: np.ndarray = None,
        ndigits=5,
    ):
        self.sentence = sentence
        self.tokens = tokens
        self.special_tokens_mask = special_tokens_mask
        self.attentions = att
        self.embeddings = embeddings
        self.contexts = contexts
    
    def to_json(self):
        print("Jsoning")
        pass

    def __repr__(self):
        lim = 40
        if len(self.sentence) > lim: s = self.sentence[:lim - 3] + "..."
        else: s = self.sentence[:lim]

        return f"TransformerOutput({s})"
