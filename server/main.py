import argparse
import numpy as np
import connexion
from flask_cors import CORS
from flask import render_template, redirect, send_from_directory

import utils.path_fixes as pf
import config
from utils.f import ifnone

from data_processing import from_model
from transformer_details import from_pretrained

app = connexion.FlaskApp(__name__, static_folder="client/dist", specification_dir=".")
flask_app = app.app
CORS(flask_app)

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("--debug", action="store_true", help=" Debug mode")
parser.add_argument("--port", default=5050, help="Port to run the app. ")

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
## CONNEXION API ##
# ======================================================================
def get_model_details(**request):
    model = request['model']
    deets = from_pretrained(model)

    info = deets.model.config
    nlayers = info.num_hidden_layers
    nheads = info.num_attention_heads

    payload_out = {
        "nlayers": nlayers,
        "nheads": nheads,
    }

    return {
        "status": 200,
        "payload": payload_out,
    }

def get_attention_and_meta(**request):
    model = request["model"]
    details = from_pretrained(model)

    sentence = request["sentence"]
    layer = int(request["layer"])

    deets = details.att_from_sentence(sentence)

    payload_out = deets.to_json(layer)

    return {
        "status": 200,
        "payload": payload_out
    }


def update_masked_attention(**request):
    """
    Return attention information from tokens and mask indices.

    Object: {"a" : {"sentence":__, "mask_inds"}, "b" : {...}}
    """
    payload = request["payload"]

    model = payload['model']
    details = from_pretrained(model)

    tokens = payload["tokens"]
    sentence = payload["sentence"]
    mask = payload["mask"]
    layer = int(payload["layer"])

    MASK = details.aligner.mask_token
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else ifnone(MASK, t) for (i, t) in enumerate(toks)
    ]

    token_inputs = mask_tokens(tokens, mask)

    deets = details.att_from_tokens(token_inputs, sentence)
    payload_out = deets.to_json(layer)

    return {
        "status": 200,
        "payload": payload_out,
    }


def nearest_embedding_search(**request):
    """Return the token text and the metadata in JSON"""
    model = request["model"]
    corpus = request["corpus"]

    try:
        details = from_pretrained(model)
    except KeyError as e:
        return {'status': 405, "payload": None}

    try:
        cc = from_model(model, corpus)
    except FileNotFoundError as e:
        return {
            "status": 406,
            "payload": None
        }

    q = np.array(request["embedding"]).reshape((1, -1)).astype(np.float32)
    layer = int(request["layer"])
    heads = list(map(int, list(set(request["heads"]))))
    k = int(request["k"])

    out = cc.search_embeddings(layer, q, k)

    payload_out = [o.to_json(layer, heads) for o in out]

    return {
        "status": 200,
        "payload": payload_out
    }


def nearest_context_search(**request):
    """Return the token text and the metadata in JSON"""
    model = request["model"]
    corpus = request["corpus"]
    print("CORPUS: ", corpus)

    try:
        details = from_pretrained(model)
    except KeyError as e:
        return {'status': 405, "payload": None}

    try:
        cc = from_model(model, corpus)
    except FileNotFoundError as e:
        return {'status': 406, "payload": None}

    q = np.array(request["context"]).reshape((1, -1)).astype(np.float32)
    layer = int(request["layer"])
    heads = list(map(int, list(set(request["heads"]))))
    k = int(request["k"])

    out = cc.search_contexts(layer, heads, q, k)
    payload_out = [o.to_json(layer, heads) for o in out]

    return {
        "status": 200,
        "payload": payload_out,
    }

app.add_api("swagger.yaml")

# Setup code
if __name__ != "__main__":
    print("SETTING UP ENDPOINTS")

# Then deploy app
else:
    args, _ = parser.parse_known_args()
    print("Initiating app")
    app.run(host="localhost", port=args.port, use_reloader=False, debug=args.debug)
