from typing import List, Iterable, Union
import spacy
from spacy.tokens.token import Token as SpacyToken
from spacy.tokens.doc import Doc as SpacyDoc
import torch
import regex as re

from transformers import (
    BertTokenizer,
    GPT2Tokenizer,
    RobertaTokenizer,
    DistilBertTokenizer,
    TransfoXLTokenizer,
    XLNetTokenizer,
    XLMTokenizer,
    AlbertTokenizer,
    CTRLTokenizer,
    T5Tokenizer,
    XLMRobertaTokenizer,
    OpenAIGPTTokenizer,
    XLMRobertaTokenizer,
    AutoTokenizer,
)

from .simple_spacy_token import SimpleSpacyToken
from .utils.f import flatten_, assoc, delegates

def doc_to_fixed_tokens(doc: SpacyDoc) -> List[str]:
    """Fix the tokens in a document to not have exceptions"""
    return [fix_token(t) for t in doc]

def fix_token(tok: SpacyToken) -> str:
    """Determine whether a token should be represented by its text or its norm

    This works to fix most instances EXCEPT when an exception is part of a word with a '-' in it.
    For example, "whatve-you-done" would produce two different tokenizations:

    >>> alnr = BertAligner.from_pretrained('bert-base-uncased')
    >>> s = "whatve-you-dont"
    >>> alnr.tokenize(s) # => ['what', '##ve', '-', 'you', '-', 'don', '##t']
    >>> [t.token for t in alnr.meta_tokenize(s)] # => ['what', 'have', '-', 'you', '-', 'do', 'not']

    In practice, this situation occurs so rarely that it is often not a problem for real sentences to analyze.
    """
    out = tok.text if tok.text.lower() == tok.norm_ else tok.norm_

    return out

def MakeAligner(pretrained_tokenizer, spacy_language_model):
    """Create an aligner from the pretrained tokenizers. Some caveats to note:

    Usage:
        BrandNewHuggingfaceAligner = MakeAligner(BrandNewHuggingfaceTokenizer)
    """
    class Aligner(pretrained_tokenizer):
        @delegates(pretrained_tokenizer.__init__)
        def __init__(self, **kwargs):
            super().__init__(**kwargs)
            self.spacy_nlp = spacy.load(spacy_language_model)
            self.meta_container = SimpleSpacyToken

        def prep_sentence(self, s: str) -> str:
            """Remove contractions and multiple spaces from input sentence"""
            s = re.sub(r"\s+", r" ", s).strip()
            out = " ".join(self._to_normed_spacy(s))
            return out

        @delegates(pretrained_tokenizer.tokenize)
        def tokenize(self, s: str, **kwargs) -> List[str]:
            s = self.prep_sentence(s)
            return super().tokenize(s, **kwargs)

        def meta_tokenize(self, s: str) -> List[SimpleSpacyToken]:
            """Tokenize the sentence and return the metadata for it according to Spacy

            Due to implementation differences, does not provide the exact same API as the
            PreTrainedTokenizer's `tokenize` function
            """
            meta_info = self._to_spacy_meta(self.prep_sentence(s))
            return self._tokenize_from_spacy_meta(meta_info)

        def meta_from_tokens(self, sentence: str, tokens: List[str], perform_check=True) -> List[SimpleSpacyToken]:
            """Convert existing tokens into their metadata, ignoring effects of special tokens from the tokenizer

            NOTE that the sentence MUST be the same sentence that produced the tokens, otherwise,
            an unpredictable error may occur. Or worse, it will act like it works when it in fact doesn't.

            Parameters:
                - sentence: Sentence the tokens came from
                - tokens: Tokenized version of the sentence. Can be post encoding or pre-encoding
                    (where special tokens are added)
                - perform_check: If True, check that the tokens come from the sentence. This slows down processing
                    and should be False if speed is more important than accuracy
            """
            orig_meta = self.meta_tokenize(sentence)

            new_meta = []
            j = 0

            # Unfortunately, this can really slow down predictions.
            if perform_check:
                is_encoded = self.encode(sentence) == self.convert_tokens_to_ids(tokens)
                is_tokenized = self.tokenize(sentence) == tokens
                assert is_encoded or is_tokenized, "Can only take tokens that come from the original sentence!"

            for i, b in enumerate(tokens):
                if b in self.all_special_tokens:
                    new_meta.append(self.meta_container(b))
                else:
                    new_meta.append(orig_meta[j])
                    j += 1

            return new_meta

        def _to_normed_spacy(self, s: str) -> List[str]:
            """Return the normalized tokens (i.e., language exceptions replaced by a lowercased version)"""
            doc = self.spacy_nlp(s)
            tokens = self._doc_to_fixed_tokens(doc)
            return tokens

        def _to_spacy_meta(self, s: str) -> List[SimpleSpacyToken]: # list of simple spacy tokens...
            """Convert a string into a list of records containing simplified spacy information"""
            doc = self.spacy_nlp(s)
            out = [self.meta_container(t) for t in doc]
            return out

        @delegates(pretrained_tokenizer.tokenize)
        def _raw_tokenize(self, s: str, **kwargs) -> List[str]:
            """This bypasses the custom tokenization for the tokenization of the original model."""
            return super().tokenize(s, **kwargs)

        def _to_raw_spacy(self, s: str) -> List[str]:
            """Return the raw spacy tokens of a string"""
            doc = self.spacy_nlp(s)
            tokens = [t.text for t in doc]
            return tokens

        def _tokenize_from_spacy_meta(self, spacy_meta: List[SimpleSpacyToken]) -> List[SimpleSpacyToken]:
            """Convert spacy-tokenized SimpleSpacyTokens into the appropriate tokenizer's tokens"""
            out = [self._tokenize_from_meta_single(sm, i) for i, sm in enumerate(spacy_meta)]
            return flatten_(out)

        def _tokenize_from_meta_single(self, meta_token: SimpleSpacyToken, idx:int) -> List[SimpleSpacyToken]:
            """Split a single spacy token with metadata into tokenizer tokens.

            Because the transformer's tokenizer may split each Spacy-tokenized word into multiple subwords,
            output a list

            For GPT2 tokenization, there is a different behavior for the tokenization of a word if it
            starts the sentence vs if it occurs later in the sentence.
            """
            BUFFER = "X " # GPT tokenization fusses if it thinks the token is the beginning of the sentence

            def choose_norm(t):
                return t['token'] if t['token'].lower() == t['norm'] else t['norm']

            tok = choose_norm(meta_token)

            if idx != 0:
                s = BUFFER + tok # Add a buffer with guaranteed tokenization of length 1 to input
                offset = 1
            else:
                s = tok
                offset = 0

            bpe_tokens = super().tokenize(s) # Can't do `self.tokenize` because it will normalize again

            # Functional version that works with dictionaries
            return [meta_token.assoc("token", b) for b in bpe_tokens[offset:]]

        def _doc_to_fixed_tokens(self, doc: SpacyDoc) -> List[str]:
            """Extract tokens from a document, accounting for exceptions only if needed"""
            tokens = doc_to_fixed_tokens(doc)
            return tokens

        def _maybe_conv_to_token(self, tok_or_str:Union[str, SimpleSpacyToken]):
            """Convert a token to a SimpleSpacy token if a string. Otherwise, return input unmodified

            Args:
                tok_or_str: The token be analyzed

            Returns:
                SimpleSpacyToken. If input was a string, it has been converted to this class.
            """

            if isinstance(tok_or_str, SimpleSpacyToken):
                return tok_or_str
            return SimpleSpacyToken(self.convert_ids_to_tokens([tok_or_str])[0])

        def sentence_to_input(self, sentence:str):
            """Convert sentence to the input needed for a huggingface model

            Args:
                sentence: Sentence to prepare to send into the model

            Returns:
                Tuple of (object that can be directly passed into the model, modified meta tokens)

            Examples:

                >>> alnr = RobertaAligner.from_pretrained('roberta-base')
                >>> model = AutoModel.from_pretrained('roberta-base', output_attentions=True)
                >>> model.eval() # Remove DropOut effect
                >>> model_input, meta_info = alnr.sentence_to_input(sentence)
                >>> last_layer_hidden_state, pooler, atts = model(**model_input)
            """

            meta_tokens = self.meta_tokenize(sentence)
            tokens = [tok.token for tok in meta_tokens]
            ids = self.convert_tokens_to_ids(tokens)
            raw_model_input = self.prepare_for_model(ids, add_special_tokens=True)
            model_input = {k: torch.tensor(v).unsqueeze(0) for k,v in raw_model_input.items() if isinstance(v, List)}

            meta_input = self.prepare_for_model(meta_tokens)['input_ids']
            new_meta = list(map(self._maybe_conv_to_token, meta_input))

            return model_input, new_meta

        def check_tokenization(self, sentence:str, hard_assert=True):
            tokens = self.tokenize(sentence)
            meta_tokens = self.meta_tokenize(sentence)
            mtokens = [m.token for m in meta_tokens]

            error_str = """Meta tokenization did not match expected tokenization!

            EXPECTED:
            {}

            META TOKENS REPORTED:
            {}

            """
            is_fine = mtokens == tokens

            if hard_assert:
                assert is_fine, error_str.format(tokens, mtokens)
            else:
                if not is_fine: print(error_str.format(tokens, mtokens))

    return Aligner

english = "en_core_web_sm"

BertAligner = MakeAligner(BertTokenizer, english)
GPT2Aligner = MakeAligner(GPT2Tokenizer, english)
RobertaAligner = MakeAligner(RobertaTokenizer, english)
DistilBertAligner = MakeAligner(DistilBertTokenizer, english)
TransfoXLAligner = MakeAligner(TransfoXLTokenizer, english)
XLNetAligner = MakeAligner(XLNetTokenizer, english)
XLMAligner = MakeAligner(XLMTokenizer, english)
CTRLAligner = MakeAligner(CTRLTokenizer, english)
AlbertAligner = MakeAligner(AlbertTokenizer, english)
OpenAIGPTAligner= MakeAligner(OpenAIGPTTokenizer, english)
T5Aligner= MakeAligner(T5Tokenizer, english)
XLMRobertaAligner= MakeAligner(XLMRobertaTokenizer, english)
