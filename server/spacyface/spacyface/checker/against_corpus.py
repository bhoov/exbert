"""This module provides a a means to test an aligner against a desired corpus"""

from pathlib import Path
import argparse
from spacyface.utils.sentence_extracting import extract_chars
from spacyface import *


def check_against_corpus(alnr, corpus_name, hard_assert=True):
    """Go through every sentence of the corpus and see if the meta tokenization is different than base transformer tokenization

    Args:
        alnr: Aligner
        corpus_name: Name of text file to parse
        hard_assert: If True, break on first error. Otherwise, print error msg and continue
    """
    src = open(corpus_name)
    chunk_gen = extract_chars(src, 100000)
    for c, chunk in enumerate(chunk_gen):
        doc = alnr.spacy_nlp(chunk)
        sents = [sent.text for sent in doc.sents]
        for i, sent in enumerate(sents):
            if i % 100 == 0: print(f"Chunk {c}. Sentence {i}")
            alnr.check_tokenization(sent, hard_assert)

    src.close()
