import functools
import random
import string

# For comparing dictionary access time of large strings
def gen_random_char_string(n, base_s=""):
    """Generate a random character string of length n"""
    if n == 0:
        return base_s
    
    c = random.choice(string.ascii_letters)
    return gen_random_char_string(n-1, base_s + c)

def create_dict_w_str_len(key_len, total_len=1000):
    str_keys = list(set([gen_random_char_string(N) for i in range(total_len)]))
    vals = [np.random.randn(N, 768) for i in range(len(str_keys))]
    kv = {k:v for k, v in zip(str_keys, vals)}
    if len(kv) != total_len: 
        print('Uh oh, failed to generate unique values. Trying again.')
        return create_dict_w_str_len(key_len, total_len=total_len)
    return kv

def access_all_keys(D):
    for k in D.keys():
        v = D[k]

# For comparing different tokenizations
def same_len(count, a:tuple):
    """Are a[0] and a[1] the same length?"""
    if len(a[0]) == len(a[1]):
        return count + 1
    return count

def join_bpe(lst:list, s:str):
    """Join words together that are prefaced with '##'. To be used with `reduce` """

    if s[:2] == "##":
        # How to handle situation where first term is double hashed?
        base = lst.pop() # Remove from last position
        new_term = base + s.strip("#")
        return lst + [new_term]
    return lst + [s]

def compare_joined_tokens(sp_tokens, bpe_tokens):
    """ Return list of tuples (spacy tokens, bpe_tokens) to compare tokens"""
    out = []
    for s, b in zip(sp_tokens, bpe_tokens):
        joined_bpe = functools.reduce(join_bpe, b, [])
        
        if s != joined_bpe:
            out.append((s, joined_bpe))
            
    return out

def count_less(count, a):
    """is a[0] shorter than a[1]?"""
    if len(a[0]) < len(a[1]):
        return count + 1
    return count
    
def print_joined_tokens(out):
    for i in range(len(out)):
        sp_joined = " ".join(out[i][0])
        bpe_joined = " ".join(out[i][1])
        print(sp_joined)
        print(bpe_joined)
        print("=="*20)

# Example Usage:
# > ans1 = functools.reduce(count_less, zip(bpe_tokens, sp_tokens), 0)
# > print(ans1)
# > 
# > ans2 = functools.reduce(same_len, zip(sp_tokens, bpe_tokens), 0)
# > print(ans2)