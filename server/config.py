"""
This file stores the main configuration variables to run a server.
"""
from pathlib import Path
import utils.path_fixes as pf
import os

ROOT = Path(os.path.abspath(__file__)).parent
CORPORA = ROOT / "corpora"

# Change this to indicate what data is loaded for searching
RESOURCE_DIR = CORPORA / "gpt2" / "woz"
MODEL_VERSION = "gpt2"
# RESOURCE_DIR = CORPORA / "woz_bert-base-cased" 
# MODEL_VERSION = "bert-base-cased"

# Below are DEFAULTS. Change only if you changed the way embeddings and contexts are stored and created
CORPUS = RESOURCE_DIR / "data.hdf5"
EMBEDDING_FAISS = RESOURCE_DIR / "embedding_faiss"
CONTEXT_FAISS = RESOURCE_DIR / "context_faiss"