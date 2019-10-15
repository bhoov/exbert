import argparse

from attention_details import (
    AttentionDetailsData,
    get_token_info,
    add_token_info,
)

from pytorch_pretrained_bert import BertModel, BertTokenizer

from flask import render_template, redirect, send_from_directory
from flask_cors import CORS
from utils.mask_att import strip_attention
import connexion
import os
import pickle
import utils.path_fixes as pf
import numpy as np

from data.processing.create_faiss import Indexes, ContextIndexes
from data.processing.corpus_embeddings import CorpusEmbeddings, AttentionCorpusEmbeddings
from copy import deepcopy

app = connexion.FlaskApp(__name__, static_folder='client/dist', specification_dir='.')
flask_app = app.app
CORS(flask_app)

parser = argparse.ArgumentParser(
    formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("--debug", action='store_true', help=' Debug mode')
parser.add_argument("--port", default=5555, help="Port to run the app. ")

# NOTE: Connexion runs all global code twice. We need to load the info on the second pass of the app instantiating, not the first. 'main' code statement.
# This may not work in deploy
class WozFaissWrapper:
    def __init__(self):
        self.embedding_faiss = None
        self.context_faiss = None
        self.embedding_corpus = None
        self.context_corpus  = None

    def load_info(self):
        """Allow values to have default NONE, load all at once after first load of flask"""
        self.embedding_faiss = Indexes(pf.WOZ_EMBEDDINGS)
        self.context_faiss = ContextIndexes(pf.WOZ_CONTEXT)
        self.embedding_corpus = AttentionCorpusEmbeddings(pf.WOZ_HDF5)
        self.context_corpus  = AttentionCorpusEmbeddings(pf.WOZ_CONTEXT_HDF5)

woz = WozFaissWrapper()

# Flask main routes
@app.route('/')
def hello_world():
    return redirect('client/exBERT.html')

# send everything from client as static content
@app.route('/client/<path:path>')
def send_static_client(path):
    """ serves all files from ./client/ to ``/client/<path:path>``

    :param path: path from api call
    """
    return send_from_directory(str(pf.CLIENT_DIST), path)

#======================================================================
## INITIALIZATION OF MODEL ##
#======================================================================
bert_version = 'bert-base-uncased'
model = BertModel.from_pretrained(bert_version)
tokenizer = BertTokenizer.from_pretrained(bert_version)
details_data = AttentionDetailsData(model, tokenizer)

p_file = "_store/simple.pckl"

def keep_aa(attentions):
    """ Last minute change: transfer over the network is very slow. Need to drop keys from the JSON to make rendering faster """
    aa = attentions['aa']
    out = {'aa': aa}
    return out

def masking_reformat(st, layer):
    """
    'st' = SimpleTokensInfo
    """
    format_matrix = lambda mat: np.array(mat)[:,layer,:].tolist()
    out = {}
    out['text'] = st['text']
    out['embeddings'] = format_matrix(st['embeddings'])
    out['contexts'] = format_matrix(st['contexts'])

    return out

def in_side_select_layer(fsti, layer):
    """

    fst = "FullSingleTokenInfo[]"
    """

    new_side = []

    for f in fsti:
        new_side_obj = {}
        for k, v in f.items():
            if k == 'embeddings' or k == 'contexts':
                v = f[k][layer]
            new_side_obj[k] = v
        new_side.append(new_side_obj)

    return new_side


def minimize_aa(attentions, layer, text_info_formatter):
    """ Last minute change: Need to additionally only return the attentions for a particular layer

    Assume "AttentionMetaResult". Also drops the key and query.

    attentions: The attentions returned by the model
    layer: The layer to analyze
    text_info_formatter: How to parse the 'left' and 'right' sides by layer
    """
    aa = attentions['aa']

    # When updating the masked attentions, we don't have to modfiy the contexts and the embeddings
    new_left = text_info_formatter(aa['left'], layer)
    new_right = text_info_formatter(aa['right'], layer)

    new_aa = {
        'att': aa['att'][layer],
        'left': new_left,
        'right': new_right
    }

    out = {
        'aa': new_aa
    }

    return out

#======================================================================
## CONNEXION API ##
#======================================================================
def get_attention_and_meta(**request):
    sent_a = request['sentenceA']
    sent_b = request['sentenceB']
    layer = int(request['layer'])
    deets = details_data.get_data(sent_a, sent_b)
    attentions_and_meta = add_token_info(deets.to_json(), sent_a, sent_b)

    return minimize_aa(keep_aa(attentions_and_meta), layer, in_side_select_layer)

def update_masked_meta_attention(**request):
    """
    Return attention information from tokens and mask indices.

    Object: {"a" : {"sentence":__, "mask_inds"}, "b" : {...}}
    """
    payload = request['payload']
    a = payload['tokensA'] # NAME OF VARIABLE IS IMPORTANT. See below.
    b = payload['tokensB'] # NAME OF VARIABLE IS IMPORTANT. See below.
    mask_a = payload['maskA']
    mask_b = payload['maskB']
    layer = int(payload['layer'])

    MASK = '[MASK]'
    tokens_a = [t if i not in mask_a else MASK for (i, t) in enumerate(a)]
    tokens_b = [t if i not in mask_b else MASK for (i, t) in enumerate(b)]
    print("tokens_a: ", tokens_a)
    print("tokens_b: ", tokens_b)

    deets = details_data.get_data_from_tokens(tokens_a, tokens_b)
    attentions = deets.to_json()

    print(f"a: {a}")
    print(f"b: {b}")

    for k in attentions:
        if k != 'all':
            attentions[k]['left']['text'] = eval(k[0]) # Calls the 'a' or 'b' from above
            attentions[k]['right']['text'] = eval(k[1])

    out = minimize_aa(keep_aa(attentions), layer, masking_reformat)
    return out

def woz_nearest_embedding_search(**request):
    """Return the token text and the metadata in JSON"""
    q = np.array(request['embedding']).reshape((1, -1)).astype(np.float32)
    layer = int(request['layer'])
    heads = list(map(int, list(set(request['heads']))))
    k = int(request['k'])

    nearest_dists, nearest_idxs = woz.embedding_faiss.search(layer, q, k)

    out = woz.embedding_corpus.find2d(nearest_idxs)[0]

    return_obj = [o.to_json(layer, heads) for o in out]
    return return_obj

def woz_nearest_context_search(**request):
    """Return the token text and the metadata in JSON"""
    q = np.array(request['context']).reshape((1, -1)).astype(np.float32)
    layer = int(request['layer'])
    heads = list(map(int, list(set(request['heads']))))
    k = int(request['k'])

    nearest_dists, nearest_idxs = woz.context_faiss.search(layer, heads, q, k)

    out = woz.context_corpus.find2d(nearest_idxs)[0]

    return_obj = [o.to_json(layer, heads) for o in out]
    return return_obj

app.add_api('swagger.yaml')

# Setup code
if __name__ != '__main__':
    print("SETTING UP")
    woz.load_info()
    print("AFTER SETUP")

# Then deploy app
else:
    args, _ = parser.parse_known_args()
    print("Initiating app")
    app.run(port=args.port, use_reloader=False, debug=args.debug)