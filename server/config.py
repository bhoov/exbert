"""
This file stores the main configuration variables to run a server.
"""
from pathlib import Path
import utils.path_fixes as pf
import os

ROOT = Path(os.path.abspath(__file__)).parent

BASEDATA = ROOT / "data"
CORPORA = ROOT / "corpora"
os.environ["PYTORCH_PRETRAINED_BERT_CACHE"] = str(BASEDATA / "hf")

# Change this to indicate what data is loaded for searching
RESOURCE_DIR = CORPORA / "gpt2" / "woz"
MODEL_VERSION = "gpt2"
# RESOURCE_DIR = CORPORA / "woz_bert-base-cased" 
# MODEL_VERSION = "bert-base-cased"

# Below are DEFAULTS. Change only if you changed the way embeddings and contexts are stored and created
CORPUS = RESOURCE_DIR / "data.hdf5"
EMBEDDING_FAISS = RESOURCE_DIR / "embedding_faiss"
CONTEXT_FAISS = RESOURCE_DIR / "context_faiss"

SUPPORTED_MODELS = [
    {"name": "bert-base-cased", "kind": "bidirectional"},
    # {"name": "albert-base-v1", "kind": "bidirectional"},
    {"name": "distilbert-base-uncased", "kind": "bidirectional"},
    {"name": "distilroberta-base", "kind": "bidirectional"},
    {"name": "gpt2", "kind": "autoregressive"},
    {"name": "distilgpt2", "kind": "autoregressive"},
    # {"name": "t5-small", "kind": "bidirectional"},
    #{"name": "bert-base-uncased", "kind": "bidirectional"},
    #{"name": "roberta-base", "kind": "bidirectional"},
    #{"name": "gpt2-medium", "kind": "bidirectional"},
]

SUPPORTED_CORPORA = [
    { "code": "woz", "display": "Wizard of Oz" },
    { "code": "wiki", "display": "Wikipedia" },
]
