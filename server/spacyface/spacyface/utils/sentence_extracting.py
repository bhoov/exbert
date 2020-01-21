"""Extractor functions to retrieve sentences by character chunks from a file

This script contains the logic that allows the user to process and filter
sentences of the original corpus. By default, this considers a minimum sentence
length, and removes newlines and multiple consecutive spaces.

Configuration for existing functionality is at the top of the file. Feel free to
add new processing and/or filter functions. The "process_line" and "filter_line"
functions contain the pipeline for processing the scripts as needed.

"""
import regex as re
import argparse
from pathlib import Path
from functools import partial
from typing import Union

MIN_LINE_LENGTH = 8 # words

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", help="Path to .txt file to analyze and annotate")
    parser.add_argument("-o", "--outdir", help="Path of directory in which to store the analyzed sentences as a .pckl")


    args = parser.parse_args()
    return args

# ============================================================
#                  Helper functions
# ============================================================
# String -> String
def replace_newlines(s:str) -> str:
    return re.sub(r"\n+", r" ", s)

# String -> String
def replace_multispace(s:str) -> str:
    return re.sub(r"\s+", r" ", s)

def is_short_sentence(s:str, min_len=8) -> str:
    """Returns True if the sentence has less than `min_len` number of words"""
    return len(s.split(' ')) < min_len

def contains_char(char:str, s:str) -> str:
    return char in s

# ============================================================
#                  Compilation functions
# ============================================================

def process_line(line:str) -> str:
    """"Replaces newlines with spaces and removes multiple consecutive spaces from a chunk of file.

    Args:
        line: Chunk of text

    Returns:
        Input that has been stripped of newlines and multiple consecutive spaces.
    """
    s = replace_multispace(replace_newlines(line))
    return s

def filter_line(line:str) -> bool:
    """Returns True if the sentence passes the MIN_LINE_LENGTH configuration

    Redefine this function with desired helper functions, returning true if you want to keep the line
    """
    fails = is_short_sentence(line, MIN_LINE_LENGTH)

    return not fails

# ============================================================
#                      Main Logic
# ============================================================

def read_outcomes(chars:str) -> Union[str, None]:
    """From a chunk of characters, decide whether to return the processed characters or Nothing.

    If the input is the empty string "", raise StopIteration

    Args:
        chars: Chunk of text to process

    Returns:
        The processed chunk of text or nothing if the characters do not pass the filtering

    Raises:
        StopIteration: If the input is the empty string "", raise StopIteration
    """

    if chars == '': raise StopIteration
    line = process_line(chars)
    if filter_line(line): return line
    return None

def get_chars(n:int, f) -> Union[str, None]:
    """Extract `n` chars from opened file `f`

    Args:
        n: Number of characters to read from the opened file
        f: Opened file from the return of `open(fname)`

    Returns:
        The processed chunk of text or nothing if the characters do not pass the filtering

    Raises:
        This function does not raise any errors of its own, but can pass up the StopIteration exception
          from read_outcomes
    """
    chars = f.read(n)
    return read_outcomes(chars)

def get_line(f):
    """Given an open file, get the next line and process it. Handles 3 scenarios:

    1. StopIteration indicates the opened file has reached the end
    2. Return a processed line if it passes the filter
    3. If line does not pass the filter line, return None
    """
    line = f.readline()
    return read_outcomes(line)

def read_on(reader, f):
    """Read from an open file `f` according to the function `reader`

    Args:
        reader: A unary function of signature (f: _io.TextIOWrapper) -> str
        f: An opened file, as returned by `open(fname)`

    Yields:
        A generator that returns lines defined by `reader` until the end of the file is reached.
    """
    while True:
        try:
            line = reader(f)
        except StopIteration:
            break

        if line is not None:
            yield line


def extract_chars(infile, n=10000):
    """Extract `n` characters in batches from opened `infile`"""
    reader = partial(get_chars, n)
    return read_on(reader, infile)

def extract_lines(infile):
    """Given a file, yield the processed lines from that file"""
    with open(infile, 'r') as src:
        return read_on(get_line, src)

def extract_sentences_to_file(infile, outfname:str):
    """Extract sentences from a file into a new file indicated by `outfname`."""
    out = open(outfname, 'x')

    linegen = extract_lines(infile)

    for line in linegen:
        out.write(line + "\n")

    out.close()

def main(infile, outdir):
    """Main function for creating the outdir and saving the processed sentences to that file"""
    outfname = Path(infile).stem + '.txt'
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    outfile = outdir / outfname
    out_path = extract_sentences_to_file(infile, outfile)

    return out_path

if __name__ == "__main__":
    args = parse_args()
    main(args.file, args.outdir)
