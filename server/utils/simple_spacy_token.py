import h5py
import numpy as np
from spacy.tokens.token import Token as SpacyToken
from typing import Union

class SimpleSpacyToken():

    hdf5_token_dtype = [
        ("token", h5py.special_dtype(vlen=str)),
        ("pos", h5py.special_dtype(vlen=str)),
        ("dep", h5py.special_dtype(vlen=str)),
        ("norm", h5py.special_dtype(vlen=str)),
        ("tag", h5py.special_dtype(vlen=str)),
        ("lemma", h5py.special_dtype(vlen=str)),
        ("head", h5py.special_dtype(vlen=str)),
        ("is_ent", np.bool_),
    ]

    def __init__(self, t:Union[SpacyToken, str]):
        """Create a simplified version of a spacy token"""
        self._orig_token = t

        if type(t) == SpacyToken:
            self.token = t.text
            self.pos = t.pos_
            self.dep = t.dep_
            self.norm = t.norm_
            self.tag = t.tag_
            self.lemma = t.lemma_
            self.head = t.head
            self.is_ent = self.check_ent(t)

        elif type(t) == str:
            self.token = t
            self.pos = None
            self.dep = None
            self.norm = None
            self.tag = None
            self.lemma = None
            self.head = None
            self.is_ent = None

        else:
            raise ValueError("Expected input of SpacyToken or str")

    def check_ent(self, tok):
        OUT_OF_ENT = 2
        NO_ENT_DEFINED = 0
        return tok.ent_iob != OUT_OF_ENT and tok.ent_iob != NO_ENT_DEFINED

    def assoc(self, key, value):
        """Set the key to the value, returning a new instance of SimpleSpacyTokens"""
        out = SimpleSpacyToken(self._orig_token)
        out[key] = value
        return out

    def __getitem__(self, key):
        return self.__dict__[key]

    def __setitem__(self, key, value):
        """Return a copy of self if an item is set through the dictionary access"""
        self.__dict__[key] = value

    def keys(self):
        return [k for k in self.__dict__.keys() if not k.startswith('_')]

    def values(self):
        return [v for k, v in self.__dict__.items() if not k.startswith('_')]

    def items(self):
        return [(k, v) for k,v in self.__dict__.items() if not k.startswith('_')]

    def __repr__(self):
        return f"SimpleSpacyToken: {self.items()}"