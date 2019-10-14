import spacy
import regex as re
from pathlib import Path
import pickle
import utils.path_fixes as pf

nlp = spacy.load('en_core_web_sm')

# String -> String
def replace_newlines(s):
    return re.sub(r"\n+", r" ", s)

# String -> String
def replace_multispace(s):
    return re.sub(r"\s+", r" ", s)

# String -> Boolean
def is_short_sentence(s, min_len=8):
    if len(s.split(' ')) < min_len:
        return True
    return False

# String -> Boolean
def has_cannot(s):
    return 'cannot' in s

# String -> Boolean
def has_oclock(s):
    return "o'clock" in s

# String -> Boolean
def has_connected_dash(s):
    end_match = re.findall(r'\w--', s)
    start_match = re.findall(r'--\w', s)
    return len(end_match) > 0 or len(start_match) > 0

# Path -> [String]
def text2sentences(path):
    """Extract the text from the indicated path"""
    with open(path, 'r') as src:
        doc = nlp(src.read())

    sentences = [sent.string.strip() for sent in doc.sents]
    return sentences

# String -> String
def processor(s):
    return replace_multispace(replace_newlines(s))

# String -> Boolean
def filterer(s):
    return not (is_short_sentence(s) or has_cannot(s) or has_oclock(s) or has_connected_dash(s))

# [a] -> [a]
def make_unique(arr):
    """Choose only the unique elements in the array"""
    return list(set(list(arr)))

# Path -> [a] -> _
def save_to(outpath, arr):
    with open(outpath, 'wb') as f:
        pickle.dump(arr, f)

# Path -> [String]
def init_corpus(path):
    sents = text2sentences(path)
    processed_sents = map(processor, sents)
    filtered_sents = filter(filterer, processed_sents)
    unique_sents = make_unique(filtered_sents) 
    return unique_sents

# Path -> Path -> _
def save_init_corpus(in_path, out_path):
    unique_sents = init_corpus(in_path)
    save_to(out_path, unique_sents)
    
if __name__ == "__main__":
    init_corpus(pf.WOZ_PATH)
    
