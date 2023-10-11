from typing import *
from pathlib import Path
import argparse
import numpy as np

from fastapi import FastAPI
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.encoders import jsonable_encoder
import uvicorn
from pydantic import BaseModel

import utils.path_fixes as pf
import api

from utils.f import ifnone
import config

from data_processing import from_model, from_base_dir
from transformer_details import get_details

from time import time

import secure

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

secure_headers = secure.Secure()
@app.middleware("http")
async def set_secure_headers(request, call_next):
    response = await call_next(request)
    secure_headers.framework.fastapi(response)
    return response

parser = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("--debug", action="store_true", help=" Debug mode")
parser.add_argument("--port", default=5050, help="Port to run the app. ")
parser.add_argument(
    "--model",
    default=None,
    help="If given, override the backend to use a particular model from local storage. Corpus searching results will only be availbale if annotated. Also requires specifying 'kind'",
)
parser.add_argument(
    "--kind",
    default=None,
    help="One of {'bidirectional', 'autoregressive'}. Required if model provided.",
)
parser.add_argument(
    "--corpus",
    default=None,
    help="Folder containing corpus information as output by `create_corpus.py` (data.hdf5, context_faiss/, embedding_faiss/ subfolders). ",
)
args, _ = parser.parse_known_args()

class ArgConfig:
    def __init__(self, args):
        self.args = args
        self.model = args.model
        self.kind = args.kind
        self.corpus = args.corpus

        if not (self.has_model or self.use_defaults):
            raise ValueError(
                "Either specify both `model` and `kind` or neither to use the defaults"
            )

        if self.has_corpus:
            self.corpus = Path(self.corpus)
            if not self.corpus.exists() or len(list(self.corpus.glob("*"))) == 0:
                raise FileNotFoundError(f"Desired corpus '{self.corpus}' not available")

    @property
    def has_model(self):
        return self.model is not None and self.kind is not None

    @property
    def has_corpus(self):
        return self.corpus is not None

    @property
    def model_name(self):
        if self.has_model:
            return Path(self.model).stem

        return None

    @property
    def use_defaults(self):
        return self.model is None and self.kind is None

    def from_pretrained(self, model_name: str):
        if self.has_model:
            return get_details(self.model)

        return get_details(model_name)


aconf = ArgConfig(args)

#  # Default routing
#  @app.get("/")
#  def hello_world():
#      return RedirectResponse(url="client/exBERT.html")




# ======================================================================
## MAIN API ##
# ======================================================================
@app.get("/api/supported-models")
async def get_supported_models():
    start = time()
    if aconf.has_model:
        return {
            "force": True,
            "descriptions": [{"name": aconf.model_name, "kind": aconf.kind}],
        }

    print(f"Backend took `{time() - start}` seconds")
    return {"force": False, "descriptions": config.SUPPORTED_MODELS}


@app.get("/api/supported-corpora")
async def get_supported_corpora():
    start = time()
    if aconf.has_corpus:
        return [{"code": aconf.corpus.stem, "display": aconf.corpus.stem}]

    print(f"Backend took `{time() - start}` seconds")
    return config.SUPPORTED_CORPORA


@app.get("/api/get-model-details")
async def get_model_details(
    model: str, request_hash=None
):  # -> api.ModelDetailResponse:
    start = time()
    deets = aconf.from_pretrained(model)

    info = deets.model.config
    nlayers = info.num_hidden_layers
    nheads = info.num_attention_heads

    payload_out = {
        "nlayers": nlayers,
        "nheads": nheads,
    }

    print(f"Backend took `{time() - start}` seconds")
    return {
        "status": 200,
        "payload": payload_out,
    }


@app.get("/api/attend-with-meta")
async def get_attentions_and_preds(
    model: str, sentence: str, layer: int, request_hash=None
):  # -> api.AttentionResponse:
    start = time()
    details = aconf.from_pretrained(model)
    print(f"Loading details took: {time() - start} seconds")
    s1 = time()

    deets = details.att_from_sentence(sentence)
    print(f"Computing attentions took: {time() - s1} seconds")
    s2 = time()

    payload_out = deets.to_json(layer)
    print(f"Converting to json took {time() - s2} seconds")

    print(f"{model} -- Payload Out: ", len(payload_out['aa']['right']))

    print(f"Backend took `{time() - start}` seconds")
    return {"status": 200, "payload": payload_out}


@app.post("/api/update-mask")
async def update_masked_attention(
    payload: api.MaskUpdatePayload,
):  # -> api.AttentionResponse:
    """
    Return attention information from tokens and mask indices.

    Object: {"a" : {"sentence":__, "mask_inds"}, "b" : {...}}
    """
    start = time()
    model = payload.model
    try:
        details = aconf.from_pretrained(model)
    except:
        return {"status": 405, "payload": None}
    details = aconf.from_pretrained(model)

    tokens = payload.tokens
    sentence = payload.sentence
    mask = payload.mask
    layer = payload.layer

    # Clip to valid layer
    nlayers = details.config.num_hidden_layers
    layer = min(nlayers - 1, layer)

    MASK = details.aligner.mask_token
    mask_tokens = lambda toks, maskinds: [
        t if i not in maskinds else ifnone(MASK, t) for (i, t) in enumerate(toks)
    ]

    token_inputs = mask_tokens(tokens, mask)

    deets = details.att_from_tokens(token_inputs, sentence)
    payload_out = deets.to_json(layer)
    print(f"Backend took `{time() - start}` seconds")

    return {
        "status": 200,
        "payload": payload_out,
    }


def search_nearest(payload: api.QueryNearestPayload, kind: str):
    """Search annotated corpus by `kind` (either 'embeddings' or 'contexts')"""

    assert (
        kind == "embeddings" or kind == "contexts"
    ), f"Expected `kind` to be 'embeddings' or 'contexts'. Received {kind}"

    model = payload.model
    corpus = payload.corpus
    embedding = payload.embedding
    layer = payload.layer
    heads = payload.heads
    k = payload.k

    try:
        details = aconf.from_pretrained(model)
    except:
        return {"status": 405, "payload": None}

    nlayers = details.config.num_hidden_layers
    layer = min(nlayers - 1, layer)

    try:
        if aconf.has_corpus:
            if '/' in aconf.model:
                # If transformer model is in format `user/model`
                cc = from_base_dir(aconf.corpus,aconf.model)
            else:
                cc = from_base_dir(aconf.corpus)
            
        else:
            model_name = ifnone(aconf.model_name, model)
            cc = from_model(model_name, corpus)
    except FileNotFoundError as e:
        return {"status": 406, "payload": None}

    q = np.array(embedding).reshape((1, -1)).astype(np.float32)
    heads = list(set(heads))

    if kind == "embeddings":
        print("\n\nSEARCHING EMBEDDINGS\n\n")
        out = cc.search_embeddings(layer, q, k)
    elif kind == "contexts":
        print("\n\nSEARCHING CONTEXTS\n\n")
        out = cc.search_contexts(layer, heads, q, k)

    payload_out = [o.to_json(layer, heads) for o in out]

    return {"status": 200, "payload": payload_out}


@app.post("/api/k-nearest-embeddings")
async def nearest_embedding_search(payload: api.QueryNearestPayload):
    """Return the token text and the metadata in JSON"""
    start = time()
    out = search_nearest(payload, "embeddings")
    print(f"Backend took `{time() - start}` seconds")
    return out


@app.post("/api/k-nearest-contexts")
async def nearest_context_search(payload: api.QueryNearestPayload):
    """Return the token text and the metadata in JSON"""
    start = time()
    out = search_nearest(payload, "contexts")
    print(f"Backend took `{time() - start}` seconds")
    return out

# send everything from client as static content
@app.get("/{file_path:path}")
def send_static_client(file_path):
    """ serves all files from ./client/ to ``/client/<path:path>``

    :param path: path from api call
    """
    if file_path == "" or file_path == "index.html":
        f = str(pf.CLIENT_DIST / "exBERT.html")
        return FileResponse(f)
    f = str(pf.CLIENT_DIST / file_path)
    return FileResponse(f)

# Setup code
if __name__ == "__main__":
    print("Initializing as the main script")  # Is never printed
    args, _ = parser.parse_known_args()
    uvicorn.run("main:app", host="127.0.0.1", port=int(args.port), server_header=False)
