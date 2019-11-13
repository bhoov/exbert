import h5py
import numpy as np
import spacy
from spacy.tokens.token import Token as SpacyToken
from spacy.tokens.doc import Doc as SpacyDoc
from typing import List, Iterable, Union
import regex as re

from transformers import (
    BertModel,
    BertTokenizer,
    GPT2Tokenizer,
    GPT2Model,
    RobertaModel,
    RobertaTokenizer,
    DistilBertTokenizer,
    DistilBertModel,
)
from utils.simple_spacy_token import SimpleSpacyToken
from utils.f import flatten_, assoc, memoize, GetAttr, delegates, pick

def doc_to_fixed_tokens(doc: SpacyDoc) -> List[str]:
    """Fix the tokens in a document to not have exceptions"""
    return [fix_token(t, i) for i, t in enumerate(doc)]

def fix_token(tok: SpacyToken, idx:int=-1) -> str:
    """Determine whether a token should be represented by its text or its norm"""
    out = tok.text if tok.text.lower() == tok.norm_ else tok.norm_
    return out

def MakeAligner(pretrained_tokenizer):
    """Create an aligner from the pretrained tokenizers. Some caveats to note:
    
    Usage:
        BrandNewAligner = MakeAligner(BrandNewTokenizer)
    """
    class Aligner(pretrained_tokenizer):
        @delegates(pretrained_tokenizer.__init__)
        def __init__(self, spacy_name="en_core_web_sm", **kwargs):
            super().__init__(**kwargs)
            self.nlp = spacy.load(spacy_name)

        def prep_sentence(self, s: str) -> str:
            """Remove contractions and multiple spaces from input sentence"""
            s = re.sub(r"\s+", r" ", s)
            out = " ".join(self._to_normed_spacy(s))
            return out

        @delegates(pretrained_tokenizer.tokenize)
        def tokenize(self, s: str, **kwargs) -> List[str]:
            s = self.prep_sentence(s)
            return super().tokenize(s, **kwargs)

        def meta_tokenize(self, s: str) -> List:
            """Tokenize the sentence and return the metadata for it according to Spacy
            
            Due to implementation differences, does not provide the exact same API as the 
            PreTrainedTokenizer's `tokenize` function
            """
            meta_info = self._to_spacy_meta(s)
            return self._tokenize_from_spacy_meta(meta_info)

        def _to_normed_spacy(self, s: str) -> List[str]:
            """Return the normalized tokens (i.e., language exceptions replaced by a lowercased version)"""
            doc = self.nlp(s)
            tokens = self._doc_to_fixed_tokens(doc)
            return tokens

        def _to_spacy_meta(self, s: str) -> List: # list of simple spacy tokens...
            """Convert a string into a list of records containing simplified spacy information"""
            doc = self.nlp(s)
            out = [SimpleSpacyToken(t) for t in doc]
            return out

        @delegates(pretrained_tokenizer.tokenize)
        def _raw_tokenize(self, s: str, **kwargs) -> List[str]:
            return super().tokenize(s, **kwargs)

        def _to_raw_spacy(self, s: str) -> List[str]:
            """Return the raw spacy tokens of a string"""
            doc = self.nlp(s)
            tokens = [t.text for t in doc]
            return tokens

        def _tokenize_from_spacy_meta(self, spacy_meta): # Change this for GPT2
            out = [self._tokenize_from_meta_single(sm, i) for i, sm in enumerate(spacy_meta)]
            return flatten_(out)

        def _tokenize_from_meta_single(self, meta_token, idx): # Change this for GPT2
            """Split a single spacy token with metadata into tokenizer tokens

            For GPT2 tokenization, there is a different behavior for the tokenization of a word if it 
            starts the sentence vs if it occurs later in the sentence. 
            """
            BUFFER = "X "

            if idx != 0: 
                s = BUFFER + meta_token["token"] # Add a buffer with guaranteed tokenization of length 1 to input
                offset = 1
            else: 
                s = meta_token["token"]
                offset = 0

            bpe_tokens = self.tokenize(s)
            return [assoc("token", b, meta_token) for b in bpe_tokens[offset:]]

        def _doc_to_fixed_tokens(self, doc):
            """Extract tokens from a document, accounting for exceptions only if needed"""
            tokens = doc_to_fixed_tokens(doc)
            return tokens
        
    return Aligner
        
BertAligner = MakeAligner(BertTokenizer)
GPT2Aligner = MakeAligner(GPT2Tokenizer)
RobertaAligner = MakeAligner(RobertaTokenizer)
DistilBertAligner = MakeAligner(DistilBertTokenizer)