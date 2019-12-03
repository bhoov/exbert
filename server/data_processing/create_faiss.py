from pathlib import Path
import faiss
import numpy as np
from data_processing.corpus_data_wrapper import CorpusDataWrapper
from data_processing.index_wrapper import LAYER_TEMPLATE
import argparse


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
        list_contexts = [c.contexts for c in cdata]
        lc_shapes = [c.shape for c in list_contexts]

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

def main(basedir):
    base = Path(basedir)
    h5_fname = base / 'data.hdf5'
    corpus = CorpusDataWrapper(h5_fname)
    embedding_faiss, context_faiss = train_indexes(corpus)

    context_faiss_dir = base / "context_faiss"
    embedding_faiss_dir = base / "embedding_faiss"
    save_indexes(embedding_faiss, embedding_faiss_dir)
    save_indexes(context_faiss, context_faiss_dir)

if __name__ == "__main__":
    # Creating the indices for both the context and embeddings
    args = parse_args()

    main(args.directory)
