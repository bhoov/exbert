"""General programming utils, inclined toward functional programming.

If ever a function changes its input in place, it is denoted by a trailing `_`
"""

import inspect
from itertools import zip_longest
from typing import List, Set, Union, Dict


def ifnone(*xs):
    """Return the first item in 'x' that is not None"""
    for x in xs: 
        if x is not None: return x
    return None

def custom_dir(c, add): return dir(type(c)) + list(c.__dict__.keys()) + add

class GetAttr:
    """Base class for attr accesses in `self._xtra` passed down to `self.default`
    
    Taken from article by Jeremy Howard: https://www.fast.ai/2019/08/06/delegation/

    Usage:

        ```
        class ProductPage(GetAttr):
            def __init__(self, page, price, cost):
                self.page,self.price,self.cost = page,price,cost
                self.default = page
        ```
    """
    @property
    def _xtra(self): return [o for o in dir(self.default) if not o.startswith('_')]
    def __getattr__(self,k):
        if k in self._xtra: return getattr(self.default, k)
        raise AttributeError(k)
    def __dir__(self): return custom_dir(self, self._xtra)

# Can i delegate many different functions?
# Can i add a new docstring to the existing docstring of the delgated function? Or at least point to the function delegated?
def delegates(to=None, keep=False):
    """ Decorator: replace `**kwargs` in signature with params from `to`.
    
    Taken from article by Jeremy Howard: https://www.fast.ai/2019/08/06/delegation/
    """
    
    def _f(f):
        if to is None: to_f,from_f = f.__base__.__init__,f.__init__
        else:          to_f,from_f = to,f
        sig = inspect.signature(from_f)
        sigd = dict(sig.parameters)
        k = sigd.pop('kwargs')
        s2 = {k:v for k,v in inspect.signature(to_f).parameters.items()
              if v.default != inspect.Parameter.empty and k not in sigd}
        sigd.update(s2)
        if keep: sigd['kwargs'] = k
        from_f.__signature__ = sig.replace(parameters=sigd.values())
        return f
    return _f

def pick(keys:Union[List, Set], obj:Dict) -> Dict:
    """ Return a NEW object containing `keys` from the original `obj` """
    return {k: obj[k] for k in keys}

def memoize(f):
    """Memoize a function.
    
    Use lookup table when the same inputs are passed to the function instead of running that function again
    """
    memo = {}
    def helper(*x):
        if x not in memo:            
            memo[x] = f(*x)
        return memo[x]
    return helper

def assoc(k, v, orig):
    """Given an original dictionary orig, return a cloned dictionary with `k` set to `v`"""
    out = orig.copy()
    out[k] = v
    return out

def make_unique(f):
    """The input function will only run and return if it hasn't seen its argument before. 
    
    Otherwise, it will return `None`.
    """
    s = set()
    def helper(x):
        if x in s:
            return None
        s.add(x)
        return f(x)

    return helper

def flatten_(items, seqtypes=(list, tuple)):
    """Flattten an arbitrarily nested list IN PLACE"""
    for i, x in enumerate(items):
        while i < len(items) and isinstance(items[i], seqtypes):
            items[i:i+1] = items[i]
    return items