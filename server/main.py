import argparse
import numpy as np
import connexion
from flask_cors import CORS
from flask import render_template, redirect, send_from_directory

import utils.path_fixes as pf
import config
from utils.f import ifnone

from data_processing import Indexes, ContextIndexes, CorpusDataWrapper, ConvenienceCorpus
from transformer_details import from_pretrained


app = connexion.FlaskApp(__name__, static_folder="client/dist", specification_dir=".")
flask_app = app.app
CORS(flask_app)

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("--debug", action="store_true", help=" Debug mode")
parser.add_argument("--port", default=5555, help="Port to run the app. ")

# NOTE: Connexion runs all global code twice. We need to load the info on the second pass of the app instantiating, not the first.
class FaissLoader:
    def __init__(self):
        self.embedding_faiss = None
        self.context_faiss = None
        self.corpus = None

    def load_info(self):
        """Allow values to have default NONE, load all at once after first load of flask"""
        self.embedding_faiss = Indexes(config.EMBEDDING_FAISS)
        self.context_faiss = ContextIndexes(config.CONTEXT_FAISS)
        self.corpus = CorpusDataWrapper(config.CORPUS)

faiss_loader = FaissLoader()

# Flask main routes
@app.route("/")
def hello_world():
    return redirect("client/exBERT.html")

# send everything from client as static content
@app.route("/client/<path:path>")
def send_static_client(path):
    """ serves all files from ./client/ to ``/client/<path:path>``

    :param path: path from api call
    """
    return send_from_directory(str(pf.CLIENT_DIST), path)


# ======================================================================
## INITIALIZATION OF MODEL ##
# ======================================================================
details_data = from_pretrained(config.MODEL_VERSION)

# ======================================================================
## CONNEXION API ##
# ======================================================================
def get_attention_and_meta(**request):
    sentence = request["sentence"]
    layer = int(request["layer"])
    deets = details_data.att_from_sentence(sentence)

    return deets.to_old_json(layer + 1) # CHANGE +1 WHEN FRONTEND FIXED


def update_masked_attention(**request):
    """
    Return attention information from tokens and mask indices.

    Object: {"a" : {"sentence":__, "mask_inds"}, "b" : {...}}
    """
    payload = request["payload"]
    tokens = payload["tokens"]
    sentence = payload["sentence"]
    mask = payload["mask"]
    layer = int(payload["layer"])

    MASK = details_data.aligner.mask_token
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else ifnone(MASK, t) for (i, t) in enumerate(toks)
    ]

    tokens_a = mask_tokens(tokens, mask)

    deets = details_data.att_from_tokens(tokens, sentence)
    out = deets.to_old_json(layer + 1) # CHANGE THIS
    return out


def woz_nearest_embedding_search(**request):
    """Return the token text and the metadata in JSON"""
    q = np.array(request["embedding"]).reshape((1, -1)).astype(np.float32)
    layer = int(request["layer"])
    heads = list(map(int, list(set(request["heads"]))))
    k = int(request["k"])

    layer = layer # CHANGE THIS

    nearest_dists, nearest_idxs = faiss_loader.embedding_faiss.search(layer, q, k)

    out = faiss_loader.corpus.find2d(nearest_idxs)[0]

    return_obj = [o.to_json(layer, heads) for o in out]
    return return_obj


def woz_nearest_context_search(**request):
    """Return the token text and the metadata in JSON"""
    q = np.array(request["context"]).reshape((1, -1)).astype(np.float32)
    layer = int(request["layer"])
    heads = list(map(int, list(set(request["heads"]))))
    k = int(request["k"])

    layer = layer + 1 # CHANGE THIS

    nearest_dists, nearest_idxs = faiss_loader.context_faiss.search(layer, heads, q, k)

    out = faiss_loader.corpus.find2d(nearest_idxs)[0]
    return_obj = [o.to_json(layer, heads) for o in out]

    return return_obj

app.add_api("swagger.yaml")

# Setup code
if __name__ != "__main__":
    print("SETTING UP")
    faiss_loader.load_info()
    print("AFTER SETUP")

# Then deploy app
else:
    args, _ = parser.parse_known_args()
    print("Initiating app")
    app.run(port=args.port, use_reloader=False, debug=args.debug)
