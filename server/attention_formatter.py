from typing import List
from functools import partial
import numpy as np
import json
from collections import defaultdict
from copy import deepcopy

# from utils.token_processing import aligner, null_filler
# from utils.aligner import BertAligner
from utils.token_processing import aligner
from utils.gen_utils import zip_dicts, map_nlist, check_zippable, zip_dicts


def combine_pos_dicts(attention_info, meta_info):
    """Zip the arrays associated with the keys in two dictionaries"""
    check_zippable(attention_info, meta_info)
    new_dict = zip_dicts(meta_info, attention_info)
    return new_dict


def keep_aa(attentions):
    """ Last minute change: transfer over the network is very slow. Need to drop keys from the JSON to make rendering faster """
    aa = attentions["aa"]
    out = {"aa": aa}
    return out


def in_side_select_layer(fsti, layer):
    """ Select only the layer of interest from the return object

    fst = "FullSingleTokenInfo[]"
    """

    new_side = []

    for f in fsti:
        new_side_obj = {}
        for k, v in f.items():
            if k == "embeddings" or k == "contexts":
                v = f[k][layer]
            new_side_obj[k] = v
        new_side.append(new_side_obj)

    return new_side


def minimize_aa(attentions, layer, text_info_formatter):
    """ Last minute change: Need to additionally only return the attentions for a particular layer

    Assume "AttentionMetaResult". Also drops the key and query.

    attentions: The attentions returned by the model
    layer: The layer to analyze
    text_info_formatter: How to parse the 'left' and 'right' sides by layer
    """
    aa = attentions["aa"]

    # When updating the masked attentions, we don't have to modfiy the contexts and the embeddings
    new_left = text_info_formatter(aa["left"], layer)
    new_right = text_info_formatter(aa["right"], layer)

    new_aa = {"att": aa["att"][layer], "left": new_left, "right": new_right}

    out = {"aa": new_aa}

    return out


def get_bpe_token_meta(sentence, bpe_tokens=None):
    """Align the token information in the sentence with the bpe_tokens (if provided). Otherwise, recreate the bpe tokens
    """
    if bpe_tokens is None:
        bpe_meta = aligner.to_bpe_meta(sentence)
    else:
        bpe_meta = aligner.to_bpe_meta_from_tokens(sentence, bpe_tokens)

    bpe_tokens = [c["token"] for c in bpe_meta]
    bpe_pos_info = [c["pos"] for c in bpe_meta]
    bpe_dep_info = [c["dep"] for c in bpe_meta]
    bpe_ent_info = [c["is_ent"] for c in bpe_meta]

    out = {
        "bpe_tokens": bpe_tokens,
        "bpe_pos": bpe_pos_info,
        "bpe_dep": bpe_dep_info,
        "bpe_is_ent": bpe_ent_info,
    }

    return out


def add_token_info(attention, tokens_a, sent_a, tokens_b, sent_b):
    """Given the base attention response, add information about the 
    """
    token_info = {
        "a": get_bpe_token_meta(sent_a, bpe_tokens=tokens_a),
        "b": get_bpe_token_meta(sent_b, bpe_tokens=tokens_b),
    }

    # Get all tokens from the token_info
    all_tokens = {}
    for k in token_info["a"].keys():
        copied_token_a = deepcopy(token_info["a"][k])
        copied_token_a.extend(token_info["b"][k])
        all_tokens[k] = copied_token_a
    token_info["all"] = all_tokens

    for k in attention.keys():
        ltext = attention[k]["left"]["text"]
        rtext = attention[k]["right"]["text"]

        if k == "all":
            new_left = combine_pos_dicts(attention[k]["left"], token_info[k])  # BREAKS
            new_right = combine_pos_dicts(attention[k]["right"], token_info[k])
        else:
            new_left = combine_pos_dicts(attention[k]["left"], token_info[k[0]])
            new_right = combine_pos_dicts(attention[k]["right"], token_info[k[1]])

        attention[k]["left"] = new_left
        attention[k]["right"] = new_right

    return attention


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


def embeddings_to_dict(embeddings, slice_a, slice_b):
    """Add keys "all", "a", "b" to embeds_dict"""
    embeds_dict = defaultdict(list)
    embeds_dict["all"].append(embeddings.tolist())
    embeds_dict["a"].append(embeddings[slice_a].tolist())
    a = embeds_dict["a"]
    embeds_dict["b"].append(embeddings[slice_b].tolist())
    return embeds_dict


class FormattedAttention:
    def __init__(
        self,
        tokens_a: List[str],
        tokens_b: List[str],
        query: np.ndarray,
        key: np.ndarray,
        att: np.ndarray,
        embeddings: np.ndarray = None,
        contexts: np.ndarray = None,
        ndigits=5,
    ):
        self.tokens_a = tokens_a
        self.tokens_b = tokens_b
        self.query = query
        self.key = key
        self.att = att
        self.embeddings = embeddings
        self.contexts = contexts
        # Definitely rounded here!

    def to_json(self, sentence_a, sentence_b=""):
        """Compute representation of the attention to pass to the d3 visualization

        Args:
        tokens_a: tokens in sentence A
        tokens_b: tokens in sentence B
        query_vectors: numpy array, [num_layers, batch_size, num_heads, seq_len, vector_size]
        key_vectors: numpy array, [num_layers, batch_size, num_heads, seq_len, vector_size]
        atts: numpy array, attention
            [num_layers, batch_size, num_heads, seq_len, seq_len]

        Returns:
        Dictionary of query/key representations with the structure:
        {
            'all': All attention (source = AB, target = AB)
            'aa': Sentence A self-attention (source = A, target = A)
            'bb': Sentence B self-attention (source = B, target = B)
            'ab': Sentence A -> Sentence B attention (source = A, target = B)
            'ba': Sentence B -> Sentence A attention (source = B, target = A)
        }
        and each sub-dictionary has structure:
        {
            'left': 
                {
                    'text': 
                    'embeddings': 
                    'contexts': 
                }
            'right': 
                {
                    'text': 
                    'embeddings': 
                    'contexts': 
                }
            'queries': list of query vector arrays, one for each layer. Each is nested list, shape (num_heads, source_seq_len, vector_size)
            'keys': list of key vector arrays, one for each layer. Each is nested list, shape (num_heads, target_seq_len, vector_size)
            'att': list of inter attentions matrices, one for each layer. Each is of shape [num_heads, source_seq_len, target_seq_len]
        }
        """

        tokens_a = self.tokens_a
        tokens_b = self.tokens_b

        key_vectors_dict = defaultdict(list)
        query_vectors_dict = defaultdict(list)
        atts_dict = defaultdict(list)

        # Positions corresponding to sentence A in input
        slice_a = slice(0, len(self.tokens_a))

        # Position corresponding to sentence B in input
        slice_b = slice(len(self.tokens_a), len(self.tokens_a) + len(self.tokens_b))
        num_layers = len(self.query)

        for layer in range(num_layers):
            # assume batch_size=1; shape = [num_heads, source_seq_len, target_seq_len]
            att = self.att[layer][0]

            # Append A->A attention for layer, across all heads
            atts_dict["aa"].append(att[:, slice_a, slice_a].tolist())

        # Create attentions record
        attentions = {
            "aa": {
                "att": atts_dict["aa"],
                "left": {"text": tokens_a},
                "right": {"text": tokens_a},
            }
        }

        # Add tokens + embeddings + contexts to attentions record (left & right)
        if self.embeddings is not None:
            embeds_dict = embeddings_to_dict(self.embeddings, slice_a, slice_b)

            for k in attentions.keys():
                if k == "all":
                    attentions[k]["left"]["embeddings"] = embeds_dict["all"][0]
                    attentions[k]["right"]["embeddings"] = embeds_dict["all"][0]
                else:
                    attentions[k]["left"]["embeddings"] = embeds_dict[k[0]][0]
                    attentions[k]["right"]["embeddings"] = embeds_dict[k[1]][0]

        if self.contexts is not None:
            context_dict = embeddings_to_dict(self.contexts, slice_a, slice_b)

            for k in attentions.keys():
                if k == "all":
                    attentions[k]["left"]["contexts"] = context_dict["all"][0]
                    attentions[k]["right"]["contexts"] = context_dict["all"][0]
                else:
                    attentions[k]["left"]["contexts"] = context_dict[k[0]][0]
                    attentions[k]["right"]["contexts"] = context_dict[k[1]][0]

        minimized_attentions = round_return_value(attentions)
        out = add_token_info(
                minimized_attentions, self.tokens_a, sentence_a, self.tokens_b, sentence_b
            )
        return out
