"""General programming utils, inclined toward functional programming.

If ever a function changes its input in place, it is denoted by a trailing `_`
"""

import inspect
from itertools import zip_longest

# Can i delegate many?
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

def memoize(f):
    """Memoize a function.
    
    Use lookup table when the same inputs are passed to the function instead of running that function again
    """
    memo = {}
    def helper(x):
        if x not in memo:            
            memo[x] = f(x)
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