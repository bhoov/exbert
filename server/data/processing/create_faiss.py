import faiss
import numpy as np
import utils.path_fixes as pf
from pathlib import Path
from data.processing.woz_embeddings import CorpusEmbeddings
from functools import partial

def train_indexes(ce:CorpusEmbeddings, stepsize=100):
    """
    
    Parameters:
    ===========
    - corpus_embedding: Wrapper around HDF5 file for easy access to data
    - stepsize: How many sentences to train with at once
    """
    
    indexes = [faiss.IndexFlatIP(ce.embedding_dim) for i in range(ce.n_layers)]

    for ix in range(0, len(ce), stepsize):
        cdata = ce[ix:ix+stepsize]
        # print(ix)
        # print(cdata.shape)
        for i in range(ce.n_layers):
            indexes[i].add(cdata[i])
            
    return indexes

def save_indexes(idxs, base_name=str(pf.WOZ_LAYER_TEMPLATE)):
    for i, idx in enumerate(idxs):
        faiss.write_index(idx, base_name.format(i))

class Indexes:
    def __init__(self, folder):
        self.base_dir = Path(folder)
        self.indexes = [None] * 12 # Initialize empty list
        self.__init_indexes()
        
    def __getitem__(self, v):
        """Slices currently not allowed"""
        return self.indexes[v]
    
    def __init_indexes(self):
        for fname in self.base_dir.glob(pf.FAISS_LAYER_PATTERN):
            print(fname)
            idx = fname.stem.split('_')[-1]
            self.indexes[int(idx)] = faiss.read_index(str(fname))

    def search(self, layer, query, k):
        """Search a given layer for the query vector. Return k results"""
        return self[layer].search(query, k)


def create_mask(head_size, n_heads, selected_heads):
    mask = np.zeros(n_heads)
    for h in selected_heads:
        mask[int(h)] = 1
        
    return np.repeat(mask, head_size)

default_masks = {
    'bert-base-uncased': partial(create_mask, 64, 12)
}

base_mask = default_masks['bert-base-uncased']

class ContextIndexes(Indexes):
    # Int -> [Int] -> np.Array -> Int -> (np.Array(),  )
    def search(self, layer:int, heads:list, query:np.ndarray, k:int):
        """Search the embeddings for the context layer, masking by selected heads"""
        assert max(heads) < 12 # Heads should be indexed by 0
        assert min(heads) >= 0
        
        unique_heads = list(set(heads))
        mask_vector = base_mask(unique_heads)
        mask_vector = mask_vector.reshape(query.shape)

        new_query = (query * mask_vector).astype(np.float32)
        # print(new_query.dtype)

        return self[layer].search(new_query, k)

if __name__ == "__main__":
    ce = CorpusEmbeddings(str(pf.WOZ_HDF5))
    indexes = train_indexes(ce)
    # save_indexes(indexes)
    wi = Indexes(str(pf.WOZ_EMBEDDINGS))
    print(wi)
    q = np.random.randn(1, 768).astype(np.float32)
    D, I = wi.search(0, q, 5)
    print(ce.find2d(I))