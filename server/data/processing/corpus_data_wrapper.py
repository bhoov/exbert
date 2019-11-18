import h5py
import numpy as np
from functools import partial
from utils.gen_utils import map_nlist, vround
import regex as re
from aligner.simple_spacy_token import SimpleSpacyToken
from data.processing.sentence_data_wrapper import SentenceH5Data, TokenH5Data
from utils.f import ifnone
    
ZERO_BUFFER = 12 # Number of decimal places each index takes
main_key = r"{:0" + str(ZERO_BUFFER) + r"}"

def to_idx(idx:int):
    return main_key.format(idx)

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

class CorpusDataWrapper:
    """A wrapper for both the token embeddings and the head context.
    
    This class allows access into an HDF5 file designed according to the data/processing module's contents as if it were
    and in memory dictionary.
    """

    def __init__(self, fname, name=None):
        """Open an hdf5 file of the format designed and provide easy access to its contents"""
                
        # For iterating through the dataset
        self.__curr = 0
        
        self.__name = ifnone(name, "CorpusData")
        self.data = h5py.File(fname, 'r')

        main_keys = self.data.keys()
        self.__len = len(main_keys)

        assert self.__len > 0, "Cannot process an empty file"

        embeds = self[0].embeddings
        self.embedding_dim = embeds.shape[-1]
        self.n_layers = embeds.shape[0] - 1  # 1 was added for the input layer
        self.refmap, self.total_vectors = self._init_vector_map()
        
    def __del__(self):
        try: self.data.close()

        # If run as a script, won't be able to close because of an import error
        except ImportError: pass
        
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
            
            return out
        
        elif isinstance(idx, int):
            if idx < 0: i = self.__len + idx
            else: i = idx

            key = to_idx(i)
            return SentenceH5Data(self.data[key])
        
        else:
            raise NotImplementedError

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
        for z, sentence in enumerate(self):
            for i in range(len(sentence)):
                refs = TokenH5Data(sentence, i)
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
        return out