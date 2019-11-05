import argparse
import numpy as np
import connexion
from flask_cors import CORS
from flask import render_template, redirect, send_from_directory


from pytorch_pretrained_bert import BertModel, BertTokenizer

import config

from attention_formatter import (
    add_token_info,
    minimize_aa,
    keep_aa,
    in_side_select_layer,
)

from attention_details import AttentionDetailsData
from data.processing.create_faiss import Indexes, ContextIndexes
from data.processing.corpus_embeddings import (
    CorpusEmbeddings,
    AttentionCorpusEmbeddings,
)
from utils.token_processing import aligner
from utils.mask_att import strip_attention
import utils.path_fixes as pf

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
        self.embedding_corpus = None
        self.context_corpus = None

    def load_info(self):
        """Allow values to have default NONE, load all at once after first load of flask"""
        self.embedding_faiss = Indexes(config.EMBEDDING_FAISS)
        self.context_faiss = ContextIndexes(config.CONTEXT_FAISS)
        self.embedding_corpus = AttentionCorpusEmbeddings(config.EMBEDDING_CORPUS)
        self.context_corpus = AttentionCorpusEmbeddings(config.CONTEXT_CORPUS)


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
model = BertModel.from_pretrained(config.BERT_VERSION)
details_data = AttentionDetailsData(model, aligner)

p_file = "_store/simple.pckl"

# ======================================================================
## CONNEXION API ##
# ======================================================================
def get_attention_and_meta(**request):
    sent_a = request["sentenceA"]
    sent_b = request["sentenceB"]
    layer = int(request["layer"])
    deets = details_data.get_data(sent_a, sent_b)
    attentions_and_meta = deets.to_json(sent_a, sent_b)

    return minimize_aa(keep_aa(attentions_and_meta), layer, in_side_select_layer)


def update_masked_attention(**request):
    """
    Return attention information from tokens and mask indices.

    Object: {"a" : {"sentence":__, "mask_inds"}, "b" : {...}}
    """
    payload = request["payload"]
    a = payload["tokensA"]  # NAME OF VARIABLE IS IMPORTANT. See eval statement below.
    b = payload["tokensB"]  # NAME OF VARIABLE IS IMPORTANT. See eval statement below.
    sent_a = payload["sentenceA"]
    sent_b = payload["sentenceB"]
    mask_a = payload["maskA"]
    mask_b = payload["maskB"]
    layer = int(payload["layer"])

    MASK = "[MASK]"
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else MASK for (i, t) in enumerate(toks)
    ]

    tokens_a = mask_tokens(a, mask_a)
    tokens_b = mask_tokens(b, mask_b)

    deets = details_data.get_data_from_tokens(tokens_a, tokens_b)
    attentions_and_meta = deets.to_json(sent_a, sent_b)

    out = minimize_aa(keep_aa(attentions_and_meta), layer, in_side_select_layer)

    return out


def woz_nearest_embedding_search(**request):
    """Return the token text and the metadata in JSON"""
    q = np.array(request["embedding"]).reshape((1, -1)).astype(np.float32)
    layer = int(request["layer"])
    heads = list(map(int, list(set(request["heads"]))))
    k = int(request["k"])

    nearest_dists, nearest_idxs = faiss_loader.embedding_faiss.search(layer, q, k)

    out = faiss_loader.embedding_corpus.find2d(nearest_idxs)[0]

    return_obj = [o.to_json(layer, heads) for o in out]
    return return_obj


def woz_nearest_context_search(**request):
    """Return the token text and the metadata in JSON"""
    q = np.array(request["context"]).reshape((1, -1)).astype(np.float32)
    layer = int(request["layer"])
    heads = list(map(int, list(set(request["heads"]))))
    k = int(request["k"])

    nearest_dists, nearest_idxs = faiss_loader.context_faiss.search(layer, heads, q, k)

    out = faiss_loader.context_corpus.find2d(nearest_idxs)[0]

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
