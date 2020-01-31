import h5py
import numpy as np
from functools import partial
from utils.gen_utils import map_nlist, vround
import regex as re
from spacyface.simple_spacy_token import SimpleSpacyToken

ZERO_BUFFER = 12 # Number of decimal places each index takes
main_key = r"{:0" + str(ZERO_BUFFER) + r"}"
suppl_attn_key = r"{:0" + str(ZERO_BUFFER) + r"}_attn"

def zip_len_check(*iters):
    """Zip iterables with a check that they are all the same length"""
    if len(iters) < 2:
        raise ValueError(f"Expected at least 2 iterables to combine. Got {len(iters)} iterables")
    n = len(iters[0])
    for i in iters:
        n_ = len(i)
        if n_ != n:
            raise ValueError(f"Expected all iterations to have len {n} but found {n_}")

    return zip(*iters)

class SentenceH5Data:
    def __init__(self, grp):
        self.grp = grp

    @property
    def n_layers(self):
        return self.embeddings.shape[0] - 1 # 1 was added at the input, not a hidden layer
        
    @property
    def sentence(self):
        return self.grp.attrs['sentence']

    @property
    def embeddings(self):
        return self.grp['embeddings'][:]

    @property
    def zero_special_embeddings(self):
        out = self.embeddings.copy()
        out[:, self.mask_is_special] = np.zeros(out[:, self.mask_is_special].shape)
        return out
    
    @property
    def contexts(self):
        return self.grp['contexts'][:]
    
    @property
    def zero_special_contexts(self):
        out = self.contexts.copy()
        out[:, self.mask_is_special] = np.zeros(out[:, self.mask_is_special].shape)
        return out

    @property
    def attentions(self):
        """Return all attentions, including [CLS] and [SEP]
        
        Note that if the hdf5 is created with CLS and SEP attentions, it will have CLS and SEP attentions"""
        return self.grp['attentions'][:] # Converts to numpy array

    @property
    def mask_is_special(self):
        return np.logical_or(self.deps == '', self.poss == '')

    @property
    def tokens(self):
        return self.grp.attrs['token']

    @property
    def poss(self):
        return self.grp.attrs['pos']

    @property
    def deps(self):
        return self.grp.attrs['dep']

    @property
    def is_ents(self):
        return self.grp.attrs['is_ent']
    
    @property
    def heads(self):
        """Not the attention heads, but rather the head word of the orig sentence"""
        return self.grp.attrs['head']
    
    @property
    def norms(self):
        return self.grp.attrs['norm']
    
    @property
    def tags(self):
        return self.grp.attrs['tag']
    
    @property
    def lemmas(self):
        return self.grp.attrs['lemma']

    def __len__(self):
        return len(self.tokens)

    def __repr__(self):
        sent_len = 40
        if len(self.sentence) > sent_len: s = self.sentence[:(sent_len - 3)] + '...'
        else: s = self.sentence
        return f"SentenceH5Data({s})"

class TokenH5Data(SentenceH5Data):
    """A wrapper around the HDF5 file storage information allowing easy access to information about each 
    processed sentence.

    Sometimes, and index of -1 is used to represent the entire object in memory
    """
    def __init__(self, grp, index):
        """Represents returned from the refmap of the CorpusEmbedding class"""
        if type(grp) == SentenceH5Data: super().__init__(grp.grp)
        elif type(grp) == h5py._hl.group.Group: super().__init__(grp)
        self.index = index

    @property
    def embedding(self):
        return self.embeddings[:, self.index, :]
    
    @property
    def context(self):
        return self.contexts[:, self.index, :]

    @property
    def attentions_out(self):
        """Access all attention OUT of this token"""
        output = self.attentions[:,:, self.index, :]
        return output

    @property
    def attentions_in(self):
        """Access all attention INTO this token"""
        new_attention = self.attentions.transpose((0,1,3,2))
        return new_attention[:,:, self.index, :]

    def _select_from_attention(self, layer, heads):
        if type(heads) is int:
            heads = [heads]

        # Select layer and heads
        modified_attentions = self.attentions[layer, heads].mean(0)
        attentions_out = modified_attentions
        attentions_in = modified_attentions.transpose()
        return attentions_out, attentions_in

    def _calc_offset_single(self, attention):
        """Get offset to location of max attention"""
        curr_idx = self.index
        max_atts = np.argmax(attention)
        return max_atts - curr_idx

    # Define metadata properties. 
    # Right now, needs manual curation of fields from SimpleSpacyToken. Ideally, this is automated
    
    @property
    def token(self):
        return self.tokens[self.index]

    @property
    def pos(self):
        return self.poss[self.index]

    @property
    def dep(self):
        return self.deps[self.index]
    
    @property
    def is_ent(self):
        return bool(self.is_ents[self.index])

    @property
    def norm(self):
        return self.norms[self.index]
    
    @property
    def head(self):
        return self.heads[self.index]
    
    @property
    def lemma(self):
        return self.lemmas[self.index]
    
    @property
    def tag(self):
        return self.tags[self.index]

    def to_json(self, layer, heads, top_k=5, ndigits=4):
        """
        Convert token information and attention to return to frontend
        
        Require layer, heads, and top_k to convert the attention into value to return to frontend.
        
        Output:
            {
                sentence: str
                index: number
                match: str
                is_match: bool
                is_next_word: bool
                matched_att: {
                    in: { att: number[]
                        , offset_to_max: number
                        , loc_of_max: float 
                        }
                    out: { att: number[]
                        , offset_to_max: number
                        , loc_of_max: float 
                        }
                },
                matched_att_plus_1: {
                    in: { att: number[]
                        , offset_to_max: number
                        }
                    out: { att: number[]
                        , offset_to_max: number
                        }
                }
                tokens: List[
                    { token: string
                    , pos: string
                    , dep: string
                    , is_ent: boolean
                    , inward: number[]
                    , outward: number[]
                    }
                ]
            }
        """
        keys = [
            "token",
            "pos",
            "dep",
            "is_ent",
            "inward",
            "outward",
        ]

        token_arr = []
        matched_attentions = {}
        N = len(self)

        # Iterate through the following
        tokens = self.tokens.tolist()
        poss = [p.lower() for p in self.poss.tolist()]
        deps = [d.lower() for d in self.deps.tolist()]
        ents = self.is_ents.tolist()
        attentions_out, attentions_in = self._select_from_attention(layer, heads)

        matched_att_plus_1 = None
        next_index = None

        for i, tok_info in enumerate(zip_len_check( 
            tokens
            , poss
            , deps
            , ents
            , attentions_out.tolist()
            , attentions_in.tolist())):

            def get_interesting_attentions():
                return {
                    "in": {
                        "att": att_in,
                        "offset_to_max": self._calc_offset_single(att_in).item(),
                        # "loc_of_max": np.argmax(att_in), # Broken
                    },
                    "out": {
                        "att": att_out,
                        "offset_to_max": self._calc_offset_single(att_out).item(),
                        # "loc_of_max": np.argmax(att_out), # Broken
                    }
                }


            # Perform rounding of attentions
            rounder = partial(round, ndigits=ndigits)
            att_out = map_nlist(rounder, tok_info[-2])
            att_in = map_nlist(rounder, tok_info[-1])

            obj = {k: v for (k, v) in zip_len_check(keys, tok_info)}

            IS_LAST_TOKEN = i == (N-1)

            if (i == self.index) or ((i - 1) == self.index):
                interesting_attentions = get_interesting_attentions()

                if i == self.index:
                    obj['is_match'] = True
                    matched_attentions = interesting_attentions

                elif (i-1) == self.index:
                    matched_att_plus_1 = interesting_attentions
                    obj['is_next_word'] = True
                    next_index = i

                # Edge case for final iteration through sentence

            else:
                obj['is_match'] = False
                obj['is_next_word'] = False

            if (IS_LAST_TOKEN and (matched_att_plus_1 is None)):
                print("Saving matched_att_plus_1 to: ", interesting_attentions)
                obj['is_next_word'] = True
                matched_att_plus_1 = get_interesting_attentions()
                next_index = i
            
            token_arr.append(obj) 

        next_token = self.tokens[next_index]

        obj = {
            "sentence": self.sentence,
            "index": self.index,
            "match": self.token,
            "next_index": next_index,
            "match_plus_1": next_token,
            "matched_att": matched_attentions,
            "matched_att_plus_1": matched_att_plus_1,
            "tokens": token_arr,
        }

        return obj
    
    def __repr__(self):
        return f"{self.token}: [{self.pos}, {self.dep}, {self.is_ent}]"