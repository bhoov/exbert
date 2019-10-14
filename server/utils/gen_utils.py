BPE_SPECIAL_TOKS = set(["[UNK]", "[SEP]", "[PAD]", "[CLS]", "[MASK]"])

from copy import deepcopy
import numpy as np
from functools import partial

def pad_metadata(text, meta, bad_toks=BPE_SPECIAL_TOKS):
    """Modify the pos list to add None where bad tokens exist"""
    to_insert = []
    for i, t in enumerate(text):
        if t in bad_toks:
            to_insert.append(i)
            
    out = deepcopy(meta)
    
    for idx in to_insert:
        out.insert(idx, None)
        
    return out

def check_key_len(d, length):
    for k, v in d.items():
        if len(v) != length:
            raise ValueError(f"dictionary values are not all of length {length}. Found {len(v)}")

def check_zippable(dict_a, dict_b):
    """Check that the arrays contained in each value of dict_a and b are of identical length"""
    avals = list(dict_a.values())
    bvals = list(dict_b.values())
    
    assert len(avals) > 0
    
    length = len(avals[0])
    check_key_len(dict_a, length)
    check_key_len(dict_b, length)
    
def zip_dicts(dict_a, dict_b):
    """Zip the arrays associated with the keys in two dictionaries"""
    combined = {}
    combined.update(dict_a)
    combined.update(dict_b)
    zipped_vals = zip(*combined.values())
    keys = list(combined.keys())
    
    out = []
    for i, zv in enumerate(zipped_vals):
        obj = {k: v_ for (k,v_) in zip(keys, zv)}
        out.append(obj)

    return out

def combine_pos_dicts(attention_info, meta_info):
    """Zip the arrays associated with the keys in two dictionaries"""
    text = attention_info['text']

    new_meta_info = meta_info

    check_zippable(attention_info, new_meta_info)
    new_dict = zip_dicts(new_meta_info, attention_info)
    return new_dict

def vround(ndigits):
    """Vectorized version of "round" that can be used on numpy arrays. Returns a function that can be used to round digits in a response"""
    return np.vectorize(partial(round, ndigits=ndigits))

def roundTo(arr, ndigits):
    """Round an array to ndigits"""
    f = vround(ndigits)
    return f(arr)
    
def map_nlist(f, nlist):
    new_list=[]
    for i in range(len(nlist)):
        if isinstance(nlist[i],list):
            new_list += [map_nlist(f, nlist[i])]
        else:
            new_list += [f(nlist[i])]
    return new_list
