"""
Describes the structure of a language token represented by Spacy-extracted metadata

"""
import h5py
import numpy as np
from spacy.tokens.token import Token as SpacyToken
from typing import Union, List, Tuple


def check_ent(tok: SpacyToken):
    """Check whether token is an entity

    Default Spacy Token does not assume what kind of entity you are looking for, but
    provides the following denotations:

        0: No entity tag is set
        1: inside an entity
        2: outside an entity
        3: Token begins an entity
    
    Args:
        tok: The Spacy Token

    Returns:
        Boolean indicating whether or not token is an entity    
    """
    OUT_OF_ENT = 2
    NO_ENT_DEFINED = 0
    return tok.ent_iob != OUT_OF_ENT and tok.ent_iob != NO_ENT_DEFINED

class SimpleSpacyToken():
    """A wrapper around a Spacy token to extract desired information

    This class implements a basic functional dictionary-like wrapper around the spacy token to 
    make it easy to mutate and export attributes without directly changing state. Any attribute
    that is not prefixed by '_' is considered a key of this class.

    The design allows for the token to have no metadata by simply passing a `str` into
    the constructor.

    Attributes:
        token: str
        pos: str
        dep: str
        norm: str
        tag: str
        lemma: str
        head: str
        is_ent: bool

    Notes:
        If exporting to an HDF5 file, make sure to define what hdf5 datatype that attribute 
        represents by changing the corresponding tuple in 'hdf5_token_dtype'
    """

    # Define how each attribute is stored in an hdf5 file 
    # Names MUST match attributes of this class
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
        """Create a simplified version of a spacy token
        
        Args:
            t: A string or Spacy Token object to wrap

        Raises:
            ValueError: If input is not of type SpacyToken or str
        """
        self._orig_token = t

        if type(t) == SpacyToken:
            self.token = t.text
            self.pos = t.pos_
            self.dep = t.dep_
            self.norm = t.norm_
            self.tag = t.tag_
            self.lemma = t.lemma_
            self.head = t.head
            self.is_ent = check_ent(t)

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

    def pick(self, keys:List[str]):
        """Return subset of the attributes specified in 'keys' as a simple dictioniary
        
        Args:
            keys: List of keys to extract

        Returns:
            Dictionary of only k in keys

        Raises:
            KeyError: If k in 'keys' is not an attribute

        """
        return {k: self[k] for k in keys}

    def assoc(self, key:str, value):
        """Set the 'key' to the 'value', returning a new instance of this class.
        
        Args:
            key: Key that receives the value
            value: Value to assign to the key

        Returns:
            A new instance of this class with the modified key:value pair
        """
        out = SimpleSpacyToken(self._orig_token)
        out[key] = value
        return out

    def __getitem__(self, key):
        """Access the key from this objects dictionary"""
        return self.__dict__[key]

    def __setitem__(self, key, value):
        """Assign, in place, the value to the key"""
        self.__dict__[key] = value

    def keys(self) -> List[str]:
        """Return a list of all attributes that don't start with '_'"""
        return [k for k in self.__dict__.keys() if not k.startswith('_')]

    def values(self) -> List:
        """Return a list of all values whose keys don't start with '_'"""
        
        return [v for _, v in self.__dict__.items() if not k.startswith('_')]

    def items(self) -> List[Tuple]:
        """Return a list of all items whose keys don't start with '_'"""
        return [(k, v) for k,v in self.__dict__.items() if not k.startswith('_')]

    def __repr__(self):
        return f"SimpleSpacyToken: {self.items()}"