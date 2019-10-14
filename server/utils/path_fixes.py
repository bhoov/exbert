from pathlib import Path
import os

FAISS_LAYER_PATTERN = 'layer_*.faiss'
LAYER_TEMPLATE = 'layer_{:02d}.faiss' 

ROOT_DIR = Path(os.path.abspath(__file__)).parent.parent.parent
DATA_DIR = ROOT_DIR / 'server' / 'data'
DATASET_DIR = Path.home() / 'Datasets'
ROOT_DIR = Path(os.path.abspath(__file__)).parent.parent.parent
WIKI_PATH = DATASET_DIR / 'wikipedia'

# ==============================================================
# WIZARD OF OZ 
# (should I put this into a dictionary? That would make more sense...)
# ==============================================================
WOZ_DIR = DATA_DIR / 'woz'
WOZ_PATH = WOZ_DIR / 'wizard-of-oz.txt'

## EMBEDDINGS
WOZ_EMBEDDINGS = WOZ_DIR / 'embeddings'
WOZ_HDF5 = WOZ_EMBEDDINGS / 'combined.hdf5'
WOZ_LAYER_TEMPLATE = WOZ_EMBEDDINGS / LAYER_TEMPLATE

## HEAD INFO
WOZ_CONTEXT = WOZ_DIR / 'headContext'
WOZ_CONTEXT_HDF5 = WOZ_CONTEXT / 'combined.hdf5'
WOZ_CONTEXT_LAYER_TEMPLATE = WOZ_CONTEXT / LAYER_TEMPLATE

# SERVING STATIC FILES
CLIENT_DIST = ROOT_DIR / 'client' / 'dist'