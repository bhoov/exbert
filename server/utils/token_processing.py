import h5py
import numpy as np
import spacy
from pytorch_pretrained_bert import BertTokenizer
from .gen_utils import BPE_SPECIAL_TOKS

# To Config
bert_model = 'bert-base-uncased'

bpe = BertTokenizer.from_pretrained(bert_model)
nlp = spacy.load('en_core_web_sm')

def spacy_tokenize(s):
    """Convert a single sentence to spacy tokens only"""
    doc = nlp(s)
    tokens = [t.text.lower() for t in doc]
    return tokens

def get_spacy_metadata(s):
    """Get all metadata out of sentence according to spacy.

    output:
    =======
        - list(tuples) containing:
            - POS : part of speech
            - dep : dependency
            - is_ent : Boolean indicating whether or not current token is an entity
    """
    doc = nlp(s)
    ents = [e.text for e in doc.ents]
    out = []

    for t in doc:
        if t.text in ents:
            is_ent = True
        else:
            is_ent = False

        out.append({"text": t.text,
                    "pos": t.pos_,
                    "dep": t.dep_,
                    "is_ent": is_ent})
        
    return out


# Move back to hdf5 file. Make new function
def get_spacy_hdf5_meta(s):
    """Get all metadata out of sentence according to spacy to store in hdf5 file.

    output:
    =======
        - list(tuples) containing:
            - POS : part of speech
            - dep : dependency
            - is_ent : Boolean indicating whether or not current token is an entity
    """
    doc = nlp(s)
    ents = [e.text for e in doc.ents]
    out_dtype = np.dtype([
        ('token', h5py.special_dtype(vlen=str)),
        ('POS', h5py.special_dtype(vlen=str)),
        ('dep', h5py.special_dtype(vlen=str)),
        ('is_ent', np.bool_)
    ])
    out = []
    for t in doc:
        if t.text in ents:
            is_ent = True
        else:
            is_ent = False
        out.append((t.text, t.pos_, t.dep_, is_ent))
        
    return np.array(out, dtype=out_dtype)

def bpe_tokenize(s):
    """Tokenize according to bert's tokenizer, BPE"""
    tokens = bpe.tokenize(s)
    return tokens

def combine_tokens_meta(bpe_toks:list, spacy_toks:list, spacy_meta:list):
    """Combine two lists of functions and transform metadata accordingly. Duplicate POS info
    whenever tokenization doesn't align

    If the bpe_toks contain [CLS] or [SEP], etc, fill in their values with None
    
    Input:
    ======
        bpe_toks : Tokens of bpe tokenizer
        spacy_toks : Tokens output by spacy tokenizer
        spacy_meta : list for meta information desired to be transformed
        
    NOTE: The tokenizations have some subtle differences in how they handle some punctuation
        and contractions. Namely, "o'clock" cannot be handled and there is naive "Mr." and "Mrs."
        handler
    """
    meta_list = []

    null_filler = lambda txt: {"text": txt,
                "pos": None,
                "dep": None,
                "is_ent": False}

    j = -1 # Must start at -1 because we increment j first thing in the for loop
    prev_tok = ""
    for bt in bpe_toks:
        is_bpe_special = bt in BPE_SPECIAL_TOKS
        is_partial = bt[:2] == "##"
        follows_contraction = prev_tok == "'"
        is_second_dash = (bt == "-") and (prev_tok == "-")
        part_of_mr = (prev_tok.lower() in set(['mr', 'mrs'])) and (bt == '.')
        if is_partial or follows_contraction or is_second_dash or part_of_mr:
            pass
        elif is_bpe_special:
            meta_list.append(null_filler(bt))
        else:
            j += 1
            
        if not is_bpe_special:
            try:
                meta_list.append(spacy_meta[j])
            except IndexError:
                print(bpe_toks)
                print(spacy_toks)
                print(j)
                
                raise
            
        prev_tok = bt

    return meta_list


# [String] -> [String]
def clean_tokens(toks):
    return [t for t in toks if t not in set(['[CLS]', '[SEP]'])]

# String -> String -> (String, String)
def process_tokens(ta, tb):
    """Drop tokens from bpe that we don't care about"""
    ta_out = clean_tokens(ta)
    tb_out = clean_tokens(tb)
    return ta_out, tb_out

# torch.Tensor -> np.Array
def process_hidden_tensors(t):
    """Embeddings are returned from the BERT model in a non-ideal embedding. Drop the unnecessary information and just return what we need"""
    # Drop unnecessary batch dim and second sent
    t = t.squeeze(0)[:-1]

    # Drop second sentence sep
    t = t[1:-1]

    # Convert to numpy
    return t.data.numpy()

# Path -> [String]
def read_pckl(path):
    """Reads list of sentences from pickle object"""
    with open(path, 'rb') as f:
        return pickle.load(f)
    
# np.Array -> np.Array
def normalize(a):
    """Divide each head by its """
    norms = np.linalg.norm(a, axis=-1, keepdims=True)
    return a / norms

# np.Array:<a,b,c,d> -> np.Array<a,b,c*d>
def reshape(a):
    all_head_size = a.shape[-2] * a.shape[-1]
    new_shape = a.shape[:-2] + (all_head_size,)
    return a.reshape(new_shape)