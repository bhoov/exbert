import faiss
import numpy as np
import utils.path_fixes as pf
from pathlib import Path
from data_processing.corpus_data_wrapper import CorpusDataWrapper
from functools import partial
import argparse

FAISS_LAYER_PATTERN = 'layer_*.faiss'
LAYER_TEMPLATE = 'layer_{:02d}.faiss' 
NHEADS = 12

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--directory", help="Path to the directory that contains the 'embeddings' and 'headContext' folders")
    
    args = parser.parse_args()
    return args

def train_indexes(ce:CorpusDataWrapper, stepsize=100):
    """
    
    Parameters:
    ===========
    - corpus_embedding: Wrapper around HDF5 file for easy access to data
    - stepsize: How many sentences to train with at once
    """
    NUM_LAYERS = ce.n_layers + 1 # want to account for the input layer, which for attentions + contexts is all value 0
    
    embedding_indexes = [faiss.IndexFlatIP(ce.embedding_dim) for i in range(NUM_LAYERS)]
    context_indexes = [faiss.IndexFlatIP(ce.embedding_dim) for i in range(NUM_LAYERS)]

    for ix in range(0, len(ce), stepsize):
        cdata = ce[ix:ix+stepsize]

        embeddings = np.concatenate([c.embeddings for c in cdata], axis=1)
        contexts = np.concatenate([c.contexts for c in cdata], axis=1)

        for i in range(NUM_LAYERS):
            embedding_indexes[i].add(embeddings[i])
            context_indexes[i].add(contexts[i])
            
    return embedding_indexes, context_indexes

def save_indexes(idxs, outdir, base_name=LAYER_TEMPLATE):
    """Save the faiss index into a file for each index in idxs"""

    base_dir = Path(outdir)
    if not base_dir.exists(): base_dir.mkdir(exist_ok=True, parents=True)

    out_name = str(base_dir / base_name)
    for i, idx in enumerate(idxs):
        name = out_name.format(i)
        print(f"Saving to {name}")
        faiss.write_index(idx, name)

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

def main(basedir):
    base = Path(basedir)
    h5_fname = base / 'data.hdf5'
    corpus = CorpusDataWrapper(h5_fname, "woz_tst")
    embedding_faiss, context_faiss = train_indexes(corpus)

    context_faiss_dir = base / "context_faiss"
    embedding_faiss_dir = base / "embedding_faiss"
    save_indexes(embedding_faiss, embedding_faiss_dir)
    save_indexes(context_faiss, context_faiss_dir)

if __name__ == "__main__":
    # Creating the indices for both the context and embeddings
    args = parse_args()

    main(args.directory)