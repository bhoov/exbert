"""
This file stores the main configuration variables to run a server.
"""
from pathlib import Path
import utils.path_fixes as pf
import os

# Static: Assumes this config file is stored in the server folder
ROOT = Path(os.path.abspath(__file__)).parent
DATA = ROOT / "data"

BERT_VERSION = "bert-base-uncased" # Currently only supports "bert-base-uncased"

EMBEDDING_CORPUS = DATA / "woz" / "embeddings" / "embeddings.hdf5"
CONTEXT_CORPUS = DATA / "woz" / "headContext" / "contexts.hdf5"

EMBEDDING_FAISS = DATA / "woz" / "embeddings"
CONTEXT_FAISS = DATA / "woz" / "headContext"