from functools import partial
import faiss
import numpy as np
from pathlib import Path
from typing import Iterable, Optional
from utils.f import memoize
from transformers import AutoConfig

@memoize
def get_config(model_name):
    return AutoConfig.from_pretrained(model_name)

FAISS_LAYER_PATTERN = 'layer_*.faiss'
LAYER_TEMPLATE = 'layer_{:02d}.faiss' 

def create_mask(head_size:int , n_heads:int, selected_heads:Iterable[int]):
    """Create a masked vector of size (head_size * n_heads), where 0 indicates we don't care about the contribution of that head 1 indicates that we do care
    
    Parameters:
    -----------
        head_size: Hidden dimension of the heads
        n_heads: Number of heads the model has
        selected_heads: Which heads we don't want to zero out
    """

    mask = np.zeros(n_heads)
    for h in selected_heads:
        mask[int(h)] = 1
        
    return np.repeat(mask, head_size)

class Indexes:
    """Wrapper around the faiss indices to make searching for a vector simpler and faster.
    
    Assumes there are files in the folder matching the pattern input
    """
    def __init__(self, folder, model_name:Optional[str]=None, pattern=FAISS_LAYER_PATTERN):
        self.base_dir = Path(folder)
        self.n_layers = len(list(self.base_dir.glob(pattern))) - 1 # Subtract final output
        self.indexes = [None] * (self.n_layers + 1) # Initialize empty list, adding 1 for input
        self.pattern = pattern
        self.__init_indexes()

        # Extract model name from folder hierarchy
        if model_name is None:
            self.model_name = self.base_dir.parent.parent.stem
        # Use passed in model name
        else:
            self.model_name = model_name

        self.config = get_config(self.model_name)
        self.nheads = self.config.num_attention_heads
        self.hidden_size = self.config.hidden_size
        assert (self.hidden_size % self.nheads) == 0, "Number of heads does not divide cleanly into the hidden size. Aborting"
        self.head_size = int(self.config.hidden_size / self.nheads)

        
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

    def __init__(self, folder, pattern=FAISS_LAYER_PATTERN):
        super().__init__(folder, pattern)

        self.head_mask = partial(create_mask, self.head_size, self.nheads)

    # Int -> [Int] -> np.Array -> Int -> (np.Array(),  )
    def search(self, layer:int, heads:list, query:np.ndarray, k:int):
        """Search the embeddings for the context layer, masking by selected heads"""
        assert max(heads) < self.nheads, "max of selected heads must be less than nheads. Are you indexing by 1 instead of 0?"
        assert min(heads) >= 0, "What is a negative head?"
        
        unique_heads = list(set(heads))
        mask_vector = self.head_mask(unique_heads)
        mask_vector = mask_vector.reshape(query.shape)

        new_query = (query * mask_vector).astype(np.float32)

        return self[layer].search(new_query, k)
