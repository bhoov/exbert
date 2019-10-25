"""
This file stores the main configuration variables to run a server.
"""
from pathlib import Path
import utils.path_fixes as pf
import os

ROOT = Path(os.path.abspath(__file__)).parent
DATA = ROOT / "data"

# Change this to indicate what data is loaded for searching
RESOURCE_DIR = DATA / "woz" 

# Below are DEFAULTS. Change only if you changed the way embeddings and contexts are stored and created
EMBEDDING_CORPUS = RESOURCE_DIR / "embeddings" / "embeddings.hdf5"
CONTEXT_CORPUS = RESOURCE_DIR / "headContext" / "contexts.hdf5"
EMBEDDING_FAISS = RESOURCE_DIR / "embeddings"
CONTEXT_FAISS = RESOURCE_DIR / "headContext"

BERT_VERSION = "bert-base-uncased" # Currently only supports "bert-base-uncased"