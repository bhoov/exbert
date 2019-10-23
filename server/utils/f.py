"""General programming utils, inclined toward functional programming.

If ever a function changes its input in place, it is denoted by a trailing `_`
"""

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