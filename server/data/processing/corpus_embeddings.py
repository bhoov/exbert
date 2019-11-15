import h5py
import numpy as np
from functools import partial
from utils.gen_utils import map_nlist, vround
import regex as re

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

class SearchResult:
    """A wrapper around the HDF5 file storage information allowing easy access to information about each item.
    
    Includes method to send this information to the frontend
    """
    def __init__(self, ds, index):
        """Represents returned from the refmap of the CorpusEmbedding class"""
        self.ds = ds
        self.index = index

    def __len__(self):
        return len(self.tokens)

    @property
    def embedding(self):
        return self.ds[:, self.index, :]

    @property
    def token(self):
        return self.ds.attrs['b_tokens'][self.index]

    @property
    def pos(self):
        return self.ds.attrs['b_pos'][self.index]

    @property
    def dep(self):
        return self.ds.attrs['b_dep'][self.index]
    
    @property
    def is_ent(self):
        return bool(self.ds.attrs['b_is_ent'][self.index])

    @property
    def tokens(self):
        return self.ds.attrs['b_tokens']

    @property
    def embeddings(self):
        return self.ds

    @property
    def poss(self):
        return self.ds.attrs['b_pos']

    @property
    def deps(self):
        return self.ds.attrs['b_dep']

    @property
    def is_ents(self):
        return self.ds.attrs['b_is_ent']

    @property
    def sentence(self):
        return self.ds.attrs['sentence']

    def to_obj(self):
        obj = {
            "token": self.token,
            "pos": self.pos,
            "dep": self.dep,
            "index": self.index,
            "is_ent": self.is_ent,
            "tokens": self.tokens.tolist(),
            "all_pos": self.poss.tolist(),
            "deps": self.deps.tolist(),
            "is_ents": self.is_ents.tolist(),
            "sentence":  self.sentence,
        }

        return obj

    def to_json(self):
        """
        Output:
            {
                sentence: str
                index: number
                match: str
                tokens: List[
                    { token: string
                    , pos: string
                    , dep: string
                    , is_ent: boolean
                    }
                ]
            }
        """
        keys = [
            "token",
            "pos",
            "dep",
            "is_ent"
        ]

        token_arr = []

        for i, tok_info in enumerate(zip_len_check(
            self.tokens.tolist(), 
            [p.lower() for p in self.poss.tolist()], 
            [d.lower() for d in self.deps.tolist()], 
            self.is_ents.tolist())):
            
            obj = {k: v for (k, v) in zip_len_check(keys, tok_info)}

            if i == self.index:
                obj['is_match'] = True
            else:
                obj['is_match'] = False
            
            token_arr.append(obj) 

        obj = {
            "sentence": self.sentence,
            "index": self.index,
            "match": self.token,
            "tokens": token_arr,
        }

        return obj
    
    def __repr__(self):
        return f"{self.token}: [{self.pos}, {self.dep}, {self.is_ent}]"

class AttentionSearchResult(SearchResult):
    def __init__(self, ds, index, ds_attn):
        super().__init__(ds, index)
        self.ds_attn = ds_attn

    @property
    def all_attentions(self):
        """Return all attentions, including [CLS] and [SEP]"""
        return self.ds_attn[:] # Converts to numpy array

    @property
    def simple_attentions(self):
        """Return attentions, excluding [CLS] and [SEP]"""
        return self.all_attentions[:, :, 1:-1, 1:-1]

    @property
    def attentions_out(self):
        """Note that the reported attentions include the information from the CLS and SEP."""
        output = self.all_attentions[:, :, self.index, :]
        return output

    @property
    def attentions_in(self):
        """Note that the reported attentions include the information from the CLS and SEP."""
        new_attention = self.all_attentions.transpose((0,1,3,2))

        output = new_attention[:, :, self.index, :]
        return output

    def _calc_offset_single(self, attention):
        curr_idx = self.index
        max_atts = np.argmax(attention)
        return max_atts - curr_idx

    def _select_from_attention(self, layer, heads):
        if type(heads) is int:
            heads = [heads]

        # Select layer and heads
        modified_attentions = self.simple_attentions[layer, heads].mean(0)
        attentions_out = modified_attentions
        attentions_in = modified_attentions.transpose()

        return attentions_out, attentions_in

    def to_json(self, layer, heads, top_k=5, ndigits=4):
        """Convert token information and attention to return to frontend
        
        Require layer, heads, and top_k to convert the attention into value to return to frontend.
        
        Output:
            {
                sentence: str
                index: number
                match: str
                matched_att: {
                    in: { att: number[]
                        , offset_to_max: number
                        , loc_of_max: float 
                        }
                    out: { att: number[]
                        , offset_to_max: number
                        , loc_of_max: float 
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

        # Iterate through the following
        tokens = self.tokens.tolist()
        poss = [p.lower() for p in self.poss.tolist()]
        deps = [d.lower() for d in self.deps.tolist()]
        ents = self.is_ents.tolist()
        attentions_out, attentions_in = self._select_from_attention(layer, heads)

        for i, tok_info in enumerate(zip_len_check( 
            tokens
            , poss
            , deps
            , ents
            , attentions_out.tolist()
            , attentions_in.tolist())):

            # Perform rounding of attentions
            rounder = partial(round, ndigits=ndigits)
            att_out = map_nlist(rounder, tok_info[-2])
            att_in = map_nlist(rounder, tok_info[-1])

            obj = {k: v for (k, v) in zip_len_check(keys, tok_info)}

            if i == self.index:
                obj['is_match'] = True
                matched_attentions = {
                    "in": {
                        "att": att_in,
                        "offset_to_max": self._calc_offset_single(att_in).item(),
                        # "loc_of_max": np.argmax(att_in),
                    },
                    "out": {
                        "att": att_out,
                        "offset_to_max": self._calc_offset_single(att_out).item(),
                        # "loc_of_max": np.argmax(att_out),
                    }
                }

            else:
                obj['is_match'] = False
            
            token_arr.append(obj) 

        obj = {
            "sentence": self.sentence,
            "index": self.index,
            "match": self.token,
            "matched_att": matched_attentions,
            "tokens": token_arr,
        }

        return obj

    
class CorpusEmbeddings:
    """A wrapper for both the token embeddings and the head context.
    
    This class allows access into an HDF5 file designed according to the data/processing module's contents as if it were
    and in memory dictionary.
    """

    def __init__(self, fname, name="WoZ embeddings"):
        """Open an hdf5 file of the format designed and provide easy access to its contents"""
                
        # For iterating through the dataset
        self.__curr = 0
        
        self.__name = name
        self.data = h5py.File(fname, 'r')
        self.embeddings = self.data['embeddings']

        main_keys = list(filter(lambda x: x.isdigit(), list(self.embeddings.keys())))
        self.__len = len(main_keys)
        assert self.__len > 0, "Cannot process an empty file"

        self.embedding_dim = self[0].shape[-1]
        self.n_layers = self[0].shape[0]
        self.refmap, self.total_vectors = self._init_vector_map()
        
    def __del__(self):
        try:
            self.data.close()
        
        # If run as a script, won't be able to close because of an import error
        except ImportError:
            pass
        
    def __iter__(self):
        return self
    
    def __len__(self):
        return self.__len
    
    def __next__(self):
        if self.__curr >= self.__len:
            self.__curr = 0
            raise StopIteration
            
        out = self[self.__curr]
        self.__curr += 1
        return out
    
    def __getitem__(self, idx):
        """Index into the embeddings"""
        if isinstance(idx, slice):
            
            start = idx.start or 0
            step = idx.step or 1
            stop = idx.stop or (self.__len - 1)
            stop = min(stop, self.__len)
            
            i = start
            out = []
            while i < stop:
                out.append(self[i])
                i += step
            
            return np.concatenate(out, axis=1)
        
        elif isinstance(idx, int):
            key = main_key.format(idx)
            return self.embeddings[key]
        
        else:
            raise NotImplementedError(f"Value of type {type(idx)} is not supported for indexing")
    
    def __repr__(self):
        return f"{self.__name}: containing {self.__len} items"
    
    def _init_vector_map(self):
        """Create main hashmap for all vectors to get their metadata.
        
        TODO Initialization is a little slow... Should this be stored in a separate hdf5 file?
        
        This doesn't change. Check for special hdf5 file and see if it exists already. If it does, open it. 
        If not, create it
        """
        refmap = {}
        print("Initializing reference map for embedding vector...")
        n_vec = 0
        for z, embed_grp in enumerate(self):
            for i in range(embed_grp.shape[1]):
                refs = SearchResult(embed_grp, i)
                refmap[n_vec] = refs
                n_vec += 1
        
        return refmap, n_vec
    
    def extract(self, layer):
        """Extract embeddings from a particular layer from the dataset
        
        For all examples
        """
        embeddings = []
        for i, embeds in enumerate(self):
            embeddings.append(embeds[layer])
            
        out = np.vstack(embeddings)
        return out

    def find(self, vec_num):
        """Find a vector's metadata (by id) in the hdf5 file. Needed to find sentence info and other attr"""
        return self.refmap[vec_num]
    
    def find2d(self, idxs):
        """Find a vector's metadata in the hdf5 file. Needed to find sentence info and other attr"""
        out = [[self.refmap[i] for i in idx] for idx in idxs]
        return np.array(out)
    
    def grab(self, training_idx, layer, token_num):
        """Find a vector in the hdf5 file by indexing with the above parameters"""
        return self[training_idx][layer, token_num]

class AttentionCorpusEmbeddings(CorpusEmbeddings):
    """
    An extension of the CorpusEmbeddings for the HDF5 file designed to also contain metadata for the attention to every other token
    in an input sentence
    """

    def _init_vector_map(self):
        refmap = {}
        print("Initializing reference map for embedding vector...")
        n_vec = 0
        for z, embed_grp in enumerate(self):
            for i in range(embed_grp.shape[1]):
                attn_meta_key = embed_grp.attrs['attn_ref']
                refs = AttentionSearchResult(embed_grp, i, self.embeddings[attn_meta_key])
                refmap[n_vec] = refs
                n_vec += 1
        
        return refmap, n_vec


if __name__ == "__main__":
    import utils.path_fixes as pf
    ce = CorpusEmbeddings(str(pf.WOZ_HDF5))
    print("Testing CorpusEmbeddings")
    print(ce.total_vectors)
    ce.data.close()
