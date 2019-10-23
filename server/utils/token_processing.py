"""Defines the important metadata to extract for each token.

If adding more metadata, modify the definitions in `to_spacy_meta` and `meta_to_hdf5`
"""
import h5py
import numpy as np
import spacy
from pytorch_pretrained_bert import BertTokenizer
from .gen_utils import get_bpe, get_spacy
from .f import flatten_, assoc
bert_model = "bert-base-uncased"



class TokenAligner:
    def __init__(self, bpe_pretrained_name_or_path="bert-base-uncased", spacy_name="en_core_web_sm"):
        """Create a wrapper around a sentence such that the spacy and BPE tokens can be aligned"""
        self.bpe = get_bpe(bpe_pretrained_name_or_path)
        self.nlp = get_spacy(spacy_name)

    def fix_sentence(self, s):
        return " ".join(self.to_spacy(s))
        
    def to_spacy(self, s):
        """Convert a sentence to spacy tokens. 
        
        Note that all contractions are removed in lieu of the word they shorten.
        """
        doc = self.nlp(s)
        tokens = [t.norm_ for t in doc]
        return tokens
    
    def to_spacy_text(self, s):
        """Convert a sentence into the raw tokens as spacy would.
        
        No contraction expansion."""
        doc = self.nlp(s)
        tokens = [t.text for t in doc]
        return tokens
    
    def to_bpe(self, s):
        """Convert a sentence to bpe tokens"""
        return self.bpe.tokenize(s)
    
    def to_spacy_meta(self, s):
        """Convert a sentence to spacy tokens with important metadata"""  
        doc = self.nlp(s)
        ents = [e for e in doc.ents]
        ent_ranges = [list(range(e.start, e.end)) for e in ents]
        
        def assign_ent(idx):
            """Check if the word should be an entity or not"""
            return any([idx in er for er in ent_ranges])
        
        out = []

        for i, t in enumerate(doc):
            is_ent = assign_ent(i)
            out.append({"text": t.text,
                        "pos": t.pos_,
                        "dep": t.dep_,
                        "norm": t.norm_,
                        "is_ent": is_ent})

        return out
    
    def meta_to_hdf5(self, meta):
        out_dtype = np.dtype([
            ('token', h5py.special_dtype(vlen=str)),
            ('POS', h5py.special_dtype(vlen=str)),
            ('dep', h5py.special_dtype(vlen=str)),
            ('norm', h5py.special_dtype(vlen=str)),
            ('is_ent', np.bool_)
        ])
        
        out = [(m['text'], m['pos'], m['dep'], m['norm'], m['is_ent']) for m in meta]
        return np.array(out, dtype=out_dtype)
    
    def meta_hdf5_to_obj(self, meta_hdf5):
        assert len(meta_hdf5) != 0
        print(meta_hdf5)
        
        keys = meta_hdf5[0].dtype.names
        out = {k: [] for k in keys}
        
        for m in meta_hdf5:
            for k in m.dtype.names:
                out[k].append(m[k])

        print(out)
        return out
        
    def to_spacy_hdf5(self, s):
        """Get values for hdf5 store, each row being a tuple of the information desired"""
        meta = self.to_spacy_meta(s)
        return self.meta_to_hdf5(meta)
    
    def to_spacy_hdf5_by_col(self, s):
        """Get values for hdf5 store, organized as a dictionary into the metadata"""
        h5_info = self.to_spacy_hdf5(s)
        return self.meta_hdf5_to_obj(h5_info)
    
    def bpe_from_meta_single(self, meta_token):
        """Split a single spacy token with metadata into bpe tokens"""
        
        bpe_tokens = self.to_bpe(meta_token['norm'])

        return [assoc("text", b, meta_token) for b in bpe_tokens]

    def to_bpe_meta(self, s):
        """Convert a sentence to bpe tokens with metadata
        
        Removes all known contractions from input sentence `s`
        """
        spacy_meta = self.to_spacy_meta(s)
        out = flatten_([self.bpe_from_meta_single(sm) for sm in spacy_meta])
        return out
    
    def to_bpe_hdf5(self, s):
        """Format the metadata of a BPE tokenized setence into hdf5 format"""
        meta = self.to_bpe_meta(s)
        return self.meta_to_hdf5(meta)
    
    def to_bpe_hdf5_by_col(self, s):
        h5_info = self.to_bpe_hdf5(s)
        return self.meta_to_hdf5(h5_info)
        
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