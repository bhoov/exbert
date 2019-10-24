import faiss
import numpy as np
import utils.path_fixes as pf
from pathlib import Path
from data.processing.corpus_embeddings import CorpusEmbeddings
from functools import partial
import argparse

FAISS_LAYER_PATTERN = 'layer_*.faiss'
LAYER_TEMPLATE = 'layer_{:02d}.faiss' 
NLAYERS = 12
NHEADS = 12

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--directory", help="Path to the directory that contains the 'embeddings' and 'headContext' folders")
    
    args = parser.parse_args()
    return args

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
        for i in range(ce.n_layers):
            indexes[i].add(cdata[i])
            
    return indexes

def save_indexes(idxs, outdir, base_name=LAYER_TEMPLATE):
    """Save the faiss index into a file for each index in idxs"""

    out_name = str(Path(outdir) / base_name)
    for i, idx in enumerate(idxs):
        faiss.write_index(idx, out_name.format(i))

class Indexes:
    """Wrapper around the faiss indices to make searching for a vector simpler and faster.
    
    Assumes there are files in the folder matching the pattern input
    """
    def __init__(self, folder, pattern=FAISS_LAYER_PATTERN):
        self.base_dir = Path(folder)
        self.indexes = [None] * NLAYERS # Initialize empty list
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
        # print(new_query.dtype)

        return self[layer].search(new_query, k)

def main(basedir):
    base = Path(basedir)

    # embeddings
    embedding_dir = base / 'embeddings'
    embedding_hdf5 = embedding_dir / 'embeddings.hdf5'
    print(f"Creating Embedding faiss files in {embedding_dir} from {embedding_hdf5}")
    embedding_ce = CorpusEmbeddings(str(embedding_hdf5))
    embedding_idxs = train_indexes(embedding_ce)
    save_indexes(embedding_idxs, embedding_dir)

    ## Test embedding search:
    print("Testing embedding idxs:")
    loaded_embedding_idxs = Indexes(embedding_dir)
    q = np.random.randn(1, 768).astype(np.float32)
    D, I = loaded_embedding_idxs.search(0, q, 5)

    print("\n\nShowing a test result from an embedding faiss search")
    print(embedding_ce.find2d(I))

    print("\n" + "=" * 50 + "\n")

    # headContext
    context_dir = base / 'headContext'
    context_hdf5 = context_dir / 'contexts.hdf5'
    print(f"Creating head context faiss files in {context_dir} from {context_hdf5}")
    context_ce = CorpusEmbeddings(str(context_hdf5))
    context_indexes = train_indexes(context_ce)
    save_indexes(context_indexes, context_dir)

    ## Test context search:
    loaded_context_idxs = Indexes(context_dir)
    q = np.random.randn(1, 768).astype(np.float32)
    D, I = loaded_context_idxs.search(0, q, 5)

    print("\n\nShowing a test result from a context faiss search")
    print(context_ce.find2d(I))

if __name__ == "__main__":
    # Creating the indices for both the context and embeddings
    args = parse_args()

    main(args.directory)