
"""
Utilities for interfacing with the attentions from the front end.
This file is adapted from Jesse Vig's tool at https://github.com/jessevig/bertviz
"""

import torch
import json
import os
from collections import defaultdict
from utils.token_processing import reshape
import numpy as np
from typing import List
from functools import partial

from utils.token_processing import (
    combine_tokens_meta, 
    bpe_tokenize, 
    get_spacy_metadata,
    spacy_tokenize,
)
from copy import deepcopy
from utils.gen_utils import BPE_SPECIAL_TOKS, zip_dicts, combine_pos_dicts, map_nlist

def roundReturnValue(attentions, ndigits=5):
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
    new_out = attentions # Modify values to save memory
    new_out['aa']['att'] = map_nlist(rounder, attentions['aa']['att'])
    new_out['aa']['left']['embeddings'] = map_nlist(rounder, attentions['aa']['left']['embeddings'])
    new_out['aa']['left']['contexts'] = map_nlist(rounder, attentions['aa']['left']['contexts'])

    new_out['aa']['right']['embeddings'] = map_nlist(rounder, attentions['aa']['right']['embeddings'])
    new_out['aa']['right']['contexts'] = map_nlist(rounder, attentions['aa']['right']['contexts'])

    return new_out

class FormattedAttention:
    def __init__(self, tokens_a:List[str], tokens_b:List[str], query:np.ndarray, 
                    key:np.ndarray, att:np.ndarray, embeddings:np.ndarray=None, contexts:np.ndarray=None, ndigits=5):
        self.tokens_a = tokens_a
        self.tokens_b = tokens_b
        self.query = query
        self.key = key
        self.att = att
        self.embeddings = embeddings
        self.contexts = contexts
        # Definitely rounded here!

    def to_json(self):
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

        slice_a = slice(0, len(self.tokens_a))  # Positions corresponding to sentence A in input
        slice_b = slice(len(self.tokens_a), len(self.tokens_a) + len(self.tokens_b))  # Position corresponding to sentence B in input
        num_layers = len(self.query)

        for layer in range(num_layers):
            # Process queries and keys
            query_vector = self.query[layer][0] # assume batch_size=1; shape = [num_heads, seq_len, vector_size]
            key_vector = self.key[layer][0] # assume batch_size=1; shape = [num_heads, seq_len, vector_size]
            query_vectors_dict['all'].append(query_vector.tolist())
            key_vectors_dict['all'].append(key_vector.tolist())
            query_vectors_dict['a'].append(query_vector[:, slice_a, :].tolist())
            key_vectors_dict['a'].append(key_vector[:, slice_a, :].tolist())
            query_vectors_dict['b'].append(query_vector[:, slice_b, :].tolist())
            key_vectors_dict['b'].append(key_vector[:, slice_b, :].tolist())
            # Process attention
            att = self.att[layer][0] # assume batch_size=1; shape = [num_heads, source_seq_len, target_seq_len]
            atts_dict['all'].append(att.tolist())
            atts_dict['aa'].append(att[:, slice_a, slice_a].tolist()) # Append A->A attention for layer, across all heads
            atts_dict['bb'].append(att[:, slice_b, slice_b].tolist()) # Append B->B attention for layer, across all heads
            atts_dict['ab'].append(att[:, slice_a, slice_b].tolist()) # Append A->B attention for layer, across all heads
            atts_dict['ba'].append(att[:, slice_b, slice_a].tolist()) # Append B->A attention for layer, across all heads

        attentions =  {
            'all': {
                'queries': query_vectors_dict['all'],
                'keys': key_vectors_dict['all'],
                'att': atts_dict['all'],
                'left': {
                    'text': tokens_a + tokens_b,
                },
                'right': {
                    'text': tokens_a + tokens_b,
                },
            },
            'aa': {
                'queries': query_vectors_dict['a'],
                'keys': key_vectors_dict['a'],
                'att': atts_dict['aa'],
                'left': {
                    'text': tokens_a
                },
                'right': {
                    'text': tokens_a
                },
            },
            'bb': {
                'queries': query_vectors_dict['b'],
                'keys': key_vectors_dict['b'],
                'att': atts_dict['bb'],
                'left': {
                    'text': tokens_b
                },
                'right': {
                    'text': tokens_b
                },
            },
            'ab': {
                'queries': query_vectors_dict['a'],
                'keys': key_vectors_dict['b'],
                'att': atts_dict['ab'],
                'left': {
                    'text': tokens_a
                },
                'right': {
                    'text': tokens_b
                },
            },
            'ba': {
                'queries': query_vectors_dict['b'],
                'keys': key_vectors_dict['a'],
                'att': atts_dict['ba'],
                'left': {
                    'text': tokens_b
                },
                'right': {
                    'text': tokens_a
                },
            }
        }

        if self.embeddings is not None:
            embeds_dict = embeddings_to_dict(self.embeddings, slice_a, slice_b)

            for k in attentions.keys():
                if k == 'all':
                    attentions[k]['left']['embeddings'] = embeds_dict['all'][0]
                    attentions[k]['right']['embeddings'] = embeds_dict['all'][0]
                else:
                    attentions[k]['left']['embeddings'] = embeds_dict[k[0]][0]
                    attentions[k]['right']['embeddings'] = embeds_dict[k[1]][0]

        if self.contexts is not None:
            context_dict = embeddings_to_dict(self.contexts, slice_a, slice_b)

            for k in attentions.keys():
                if k == 'all':
                    attentions[k]['left']['contexts'] = context_dict['all'][0]
                    attentions[k]['right']['contexts'] = context_dict['all'][0]
                else:
                    attentions[k]['left']['contexts'] = context_dict[k[0]][0]
                    attentions[k]['right']['contexts'] = context_dict[k[1]][0]

        return roundReturnValue(attentions)

def embeddings_to_dict(embeddings, slice_a, slice_b):
    embeds_dict = defaultdict(list)
    embeds_dict['all'].append(embeddings.tolist())
    embeds_dict['a'].append(embeddings[slice_a].tolist())
    a = embeds_dict['a']
    embeds_dict['b'].append(embeddings[slice_b].tolist())
    return embeds_dict

def get_token_info(sentence, bpe_tokens=None, include_spacy=False):

    # If None, do the tokenization as normal. Otherwise, pass in CLS and other information
    if bpe_tokens is None:
        bpe_tokens = bpe_tokenize(sentence)

    spacy_meta = get_spacy_metadata(sentence)
    spacy_tokens = [t['text'] for t in spacy_meta]

    combined_tokens = combine_tokens_meta(bpe_tokens, spacy_tokens, spacy_meta)

    bpe_pos_info = [c['pos'] for c in combined_tokens]
    bpe_dep_info = [c['dep'] for c in combined_tokens]
    bpe_ent_info = [c['is_ent'] for c in combined_tokens]

    spacy_pos_info = [s['pos'] for s in spacy_meta]
    spacy_dep_info = [s['dep'] for s in spacy_meta]
    spacy_ent_info = [s['is_ent'] for s in spacy_meta]

    out = {
        'bpe_tokens': bpe_tokens,
        'bpe_pos': bpe_pos_info,
        'bpe_dep': bpe_dep_info,
        'bpe_is_ent': bpe_ent_info,}

    if include_spacy:
        out.update({
            'spacy_tokens': spacy_tokens,
            'spacy_pos': spacy_pos_info,
            'spacy_dep': spacy_dep_info,
            'spacy_is_ent': spacy_ent_info,
        })

    return out

def add_token_info(attention, sent_a, sent_b):
    ab = attention['ab']
    left_text = ab['left']['text']
    right_text = ab['right']['text']

    token_info = {
        'a': get_token_info(
            sent_a,
            bpe_tokens=left_text,
            include_spacy=False),
        'b': get_token_info(
            sent_b,
            bpe_tokens=right_text,
            include_spacy=False),
    }

    all_tokens = {}

    for k in token_info['a'].keys():
        copied_token_a = deepcopy(token_info['a'][k])
        copied_token_a.extend(token_info['b'][k])
        all_tokens[k] = copied_token_a
    
    token_info['all'] = all_tokens

    for k in attention.keys():
        ltext = attention[k]['left']['text']
        rtext = attention[k]['right']['text']

        if k == 'all':
            new_left = combine_pos_dicts(attention[k]['left'], token_info[k])
            new_right = combine_pos_dicts(attention[k]['right'], token_info[k])
        else:
            new_left = combine_pos_dicts(attention[k]['left'], token_info[k[0]])
            new_right = combine_pos_dicts(attention[k]['right'], token_info[k[1]])

        attention[k]['left'] = new_left
        attention[k]['right'] = new_right

    return attention

def fix_dimensions(embedding_layers):
    return torch.stack([layer for layer in embedding_layers]).squeeze(1).transpose(0, 1)

class AttentionDetailsData:
    """Wraps model and tokenizer to format Represents data needed for attention details visualization"""

    def __init__(self, model, tokenizer):
        self.model = model
        self.tokenizer = tokenizer
        self.model.eval()

    @classmethod
    def from_pretrained(cls, model_type='bert-base-uncased'):
        return cls(BertModel.from_pretrained(model_type), BertTokenizer.from_pretrained(model_type))

    # a -> b
    def __call__(self, s):
        return self.get(s)

    # String -> String -> FormattedAttention
    def get_data(self, sentence_a, sentence_b):
        out = self._get_inputs(sentence_a, sentence_b)
        return self._tokens2atts(*out)

    # [String] -> [String] -> FormattedAttention
    def get_data_from_tokens(self, tokens_a, tokens_b):
        out = self._get_inputs_from_tokens(tokens_a, tokens_b)
        return self._tokens2atts(*out)

    def _get_inputs(self, sentence_a, sentence_b):
        tokens_a = self.tokenizer.tokenize(sentence_a)
        tokens_b = self.tokenizer.tokenize(sentence_b)
        tokens_a_delim = ['[CLS]'] + tokens_a + ['[SEP]']
        tokens_b_delim = tokens_b + ['[SEP]']
        return self._get_inputs_from_tokens(tokens_a_delim, tokens_b_delim)

    def _get_inputs_from_tokens(self, tokens_a, tokens_b):
        """ Assumes sentences are already tokenized and tagged with [CLS] and [SEP] """
        token_ids = self.tokenizer.convert_tokens_to_ids(tokens_a + tokens_b)
        tokens_tensor = torch.tensor([token_ids])
        token_type_tensor = torch.LongTensor([[0] * len(tokens_a) + [1] * len(tokens_b)])
        return tokens_tensor, token_type_tensor, tokens_a, tokens_b
    
    # (Tensor[], Tensor[], [String], [String]) -> FormattedAttention
    def _tokens2atts(self, tokens_tensor, token_type_tensor, tokens_a, tokens_b):
        # Encoded layers: (NumLayers, NumTokens, HiddenDim)
        encoded_layers, _, attn_data_list = self.model(tokens_tensor, token_type_ids=token_type_tensor)
        query_tensor = torch.stack([attn_data['query_layer'] for attn_data in attn_data_list])
        key_tensor = torch.stack([attn_data['key_layer'] for attn_data in attn_data_list])
        attn_tensor = torch.stack([attn_data['attn_probs'] for attn_data in attn_data_list])
        context_tensor = torch.stack([attn_data['context_layer'] for attn_data in attn_data_list])

        query = query_tensor.data.numpy()
        key = key_tensor.data.numpy()
        att = attn_tensor.data.numpy()
        context = context_tensor.data.numpy()


        encoded_tensor = torch.stack([layer for layer in encoded_layers]).squeeze(1).transpose(0, 1)
        embeddings = encoded_tensor.data.numpy()
        contexts = reshape(context_tensor.squeeze(1)).transpose(0, 1).data.numpy()

        output = FormattedAttention(tokens_a, tokens_b, query, key, att, embeddings, contexts)
        return output