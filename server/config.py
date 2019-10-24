"""
This file stores the main configuration variables to run a server.
"""
from pathlib import Path
import utils.path_fixes as pf
import os

BERT_VERSION = "bert-base-uncased" # Currently only supports "bert-base-uncased"

# Static: Assumes this config file is stored in the server folder
ROOT = Path(os.path.abspath(__file__)).parent
DATA = ROOT / "data"
RESOURCE_DIR = DATA / "wiki_val" # Change this to change what data is loaded

EMBEDDING_CORPUS = RESOURCE_DIR / "embeddings" / "embeddings.hdf5"
CONTEXT_CORPUS = RESOURCE_DIR / "headContext" / "contexts.hdf5"
EMBEDDING_FAISS = RESOURCE_DIR / "embeddings"
CONTEXT_FAISS = RESOURCE_DIR / "headContext"

BERT_VERSION = "bert-base-uncased" # Currently only supports "bert-base-uncased"