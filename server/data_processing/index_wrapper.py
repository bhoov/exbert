from functools import partial
import faiss
import numpy as np
from pathlib import Path

FAISS_LAYER_PATTERN = 'layer_*.faiss'
LAYER_TEMPLATE = 'layer_{:02d}.faiss' 
NHEADS = 12

def create_mask(head_size, n_heads, selected_heads):
    """Create a mask that indicates how the size of the head and the number of those heads
    in a transformer model.

    This allows easy masking of heads you don't want to search for
    """
    mask = np.zeros(n_heads)
    for h in selected_heads:
        mask[int(h)] = 1
        
    return np.repeat(mask, head_size)

default_masks = {
    'bert-base-uncased': partial(create_mask, 64, 12)
}

base_mask = default_masks['bert-base-uncased']

class Indexes:
    """Wrapper around the faiss indices to make searching for a vector simpler and faster.
    
    Assumes there are files in the folder matching the pattern input
    """
    def __init__(self, folder, pattern=FAISS_LAYER_PATTERN):
        self.base_dir = Path(folder)
        self.n_layers = len(list(self.base_dir.glob(pattern))) - 1 # Subtract input dimension
        self.indexes = [None] * (self.n_layers + 1) # Initialize empty list, adding 1 for input
        self.pattern = pattern
        self.__init_indexes()
        
    def __getitem__(self, v):
        """Slices not allowed, but index only"""
        return self.indexes[v]
    
    def __init_indexes(self):
        for fname in self.base_dir.glob(self.pattern):
            print(fname)
            idx = fname.stem.split('_')[-1]
            self.indexes[int(idx)] = faiss.read_index(str(fname))

    def search(self, layer, query, k):
        """Search a given layer for the query vector. Return k results"""
        return self[layer].search(query, k)


class ContextIndexes(Indexes):
    """Special index enabling masking of particular heads before searching"""
    # Int -> [Int] -> np.Array -> Int -> (np.Array(),  )
    def search(self, layer:int, heads:list, query:np.ndarray, k:int):
        """Search the embeddings for the context layer, masking by selected heads"""
        assert max(heads) < NHEADS # Heads should be indexed by 0
        assert min(heads) >= 0
        
        unique_heads = list(set(heads))
        mask_vector = base_mask(unique_heads)
        mask_vector = mask_vector.reshape(query.shape)

        new_query = (query * mask_vector).astype(np.float32)

        return self[layer].search(new_query, k)
