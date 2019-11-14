"""Defines the important metadata to extract for each token.

If adding more metadata, modify the definitions in `to_spacy_meta` and `meta_to_hdf5`
"""
import h5py
import numpy as np
import spacy
import config
from transformers.tokenization_bert import BertTokenizer
from .f import flatten_, assoc, memoize, GetAttr


# NOTE: If you want to change anything that is extracted from the SPACY token, change the functions below.
# ====================================================================================================
def simplify_spacy_token(t):
    """Extract important information from spacy token into a simple dictionary"""
    def check_ent(tok):
        OUT_OF_ENT = 2
        NO_ENT_DEFINED = 0
        return tok.ent_iob != OUT_OF_ENT and tok.ent_iob != NO_ENT_DEFINED

    return {
        "token": t.text,
        "pos": t.pos_,
        "dep": t.dep_,
        "norm": t.norm_,
        "tag": t.tag_,
        "lemma": t.lemma_,
        "head": t.head,
        "is_ent": check_ent(t),
    }

def null_token_filler(token_text):
    return {
        "token": token_text,
        "pos": None,
        "dep": None,
        "norm": None,
        "tag": None,
        "lemma": None,
        "head": None,
        "is_ent": None,
    }

token_dtype = [
        ("token", h5py.special_dtype(vlen=str)),
        ("pos", h5py.special_dtype(vlen=str)),
        ("dep", h5py.special_dtype(vlen=str)),
        ("norm", h5py.special_dtype(vlen=str)),
        ("tag", h5py.special_dtype(vlen=str)),
        ("lemma", h5py.special_dtype(vlen=str)),
        ("head", h5py.special_dtype(vlen=str)),
        ("is_ent", np.bool_),
    ]
# ====================================================================================================


@memoize
def get_bpe(bpe_pretrained_name_or_path):
    return BertTokenizer.from_pretrained(bpe_pretrained_name_or_path)


@memoize
def get_spacy(spacy_name):
    return spacy.load(spacy_name)


class TokenAligner:
    def __init__(
        self,
        bpe_pretrained_name_or_path="bert-base-uncased",
        spacy_name="en_core_web_sm",
    ):
        """Create a wrapper around a sentence such that the spacy and BPE tokens can be aligned"""
        self.bpe = get_bpe(bpe_pretrained_name_or_path)
        self.nlp = get_spacy(spacy_name)

    def fix_sentence(self, s):
        return " ".join(self.to_spacy(s))

    def to_spacy(self, s):
        """Convert a sentence to spacy tokens. 
        
        Note that all contractions are removed in lieu of the word they shorten by taking the 'norm' of the word as defined by spacy.
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
        s = self.fix_sentence(s)
        s = self.to_bpe_text(s)
        return s

    def to_bpe_text(self, s):
        """Convert a sentence to bpe tokens"""
        return self.bpe.tokenize(s)

    def to_spacy_meta(self, s):
        """Convert a sentence to spacy tokens with important metadata"""
        doc = self.nlp(s)
        out = [simplify_spacy_token(t) for t in doc]
        return out

    def meta_to_hdf5(self, meta):
        out_dtype = np.dtype(token_dtype)

        out = [tuple([m[d[0]] for d in token_dtype]) for m in meta]
        return np.array(out, dtype=out_dtype)

    def meta_hdf5_to_obj(self, meta_hdf5):
        assert len(meta_hdf5) != 0

        keys = meta_hdf5[0].dtype.names
        out = {k: [] for k in keys}

        for m in meta_hdf5:
            for k in m.dtype.names:
                out[k].append(m[k])
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

        bpe_tokens = self.to_bpe(meta_token["norm"])

        # print(bpe_tokens)
        return [assoc("token", b, meta_token) for b in bpe_tokens]

    def bpe_from_spacy_meta(self, spacy_meta):
        out = flatten_([self.bpe_from_meta_single(sm) for sm in spacy_meta])
        return out

    def to_bpe_meta(self, s):
        """Convert a sentence to bpe tokens with metadata
        
        Removes all known contractions from input sentence `s`
        """
        bpe = self.to_bpe(s)
        spacy_meta = self.to_spacy_meta(s)
        return self.bpe_from_spacy_meta(spacy_meta)

    def to_bpe_meta_from_tokens(self, sentence, bpe_tokens):
        """Get the normal BPE metadata, and add nulls wherever a special_token appears"""
        bpe_meta = self.to_bpe_meta(sentence)

        new_bpe_meta = []
        j = 0
        for i, b in enumerate(bpe_tokens):
            if b in self.bpe.all_special_tokens:
                new_bpe_meta.append(null_token_filler(b))
            else:
                new_bpe_meta.append(bpe_meta[j])
                j += 1

        return new_bpe_meta

    def to_bpe_hdf5(self, s):
        """Format the metadata of a BPE tokenized setence into hdf5 format"""
        meta = self.to_bpe_meta(s)
        return self.meta_to_hdf5(meta)

    def to_bpe_hdf5_by_col(self, s):
        h5_info = self.to_bpe_hdf5(s)
        return self.meta_hdf5_to_obj(h5_info)

    def meta_tokenize(self, s):
        return self.to_bpe_meta(s)


# [String] -> [String]
def remove_CLS_SEP(toks):
    return [t for t in toks if t not in set(["[CLS]", "[SEP]"])]


# torch.Tensor -> np.Array
def process_hidden_tensors(t):
    """Embeddings are returned from the BERT model in a non-ideal embedding shape:
        - unnecessary batch dimension
        - Undesired second sentence "[SEP]".
    
    Drop the unnecessary information and just return what we need for the first sentence
    """
    # Drop unnecessary batch dim and second sent
    t = t.squeeze(0)[:-1]

    # Drop second sentence sep ??
    t = t[1:-1]

    # Convert to numpy
    return t.data.numpy()


# np.Array -> np.Array
def normalize(a):
    """Divide each head by its norm"""
    norms = np.linalg.norm(a, axis=-1, keepdims=True)
    return a / norms


# np.Array:<a,b,c,d> -> np.Array<a,b,c*d>
def reshape(a):
    """Combine the last two dimensions of a numpy array"""
    all_head_size = a.shape[-2] * a.shape[-1]
    new_shape = a.shape[:-2] + (all_head_size,)
    return a.reshape(new_shape)


aligner = TokenAligner(bpe_pretrained_name_or_path=config.BERT_VERSION)
