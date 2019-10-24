"""Sentence Extractor

This script contains the logic that allows the user to process and filter
sentences of the original corpus. By default, this considers a minimum sentence
length, and removes newlines and multiple spaces in a row.

Configuration for existing functionality is at the top of the file. Feel free to
add new processing and/or filter functions. The "process_line" and "filter_line"
functions contain the pipeline for processing the scripts as needed.

"""
import regex as re
import argparse
from pathlib import Path
from functools import partial

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
def replace_newlines(s):
    return re.sub(r"\n+", r" ", s)

# String -> String
def replace_multispace(s):
    return re.sub(r"\s+", r" ", s)

def is_short_sentence(s, min_len=8):
    return len(s.split(' ')) < min_len

def contains_char(char, s):
    return char in s

# ============================================================
#                  Compilation functions   
# ============================================================
def process_line(line):
    s = replace_multispace(replace_newlines(line))
    return s

def filter_line(line):
    fails = is_short_sentence(line, MIN_LINE_LENGTH)

    return not fails

# ============================================================
#                      Main Logic   
# ============================================================

def read_outcomes(chars):
    if chars == '': raise StopIteration
    line = process_line(chars)
    if filter_line(line): return line
    return None

def get_chars(n, f):
    """Extract `n` chars from opened file `f`"""
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
    while True:
        try: 
            line = reader(f)
        except StopIteration:
            break

        if line is not None: 
            yield line


def extract_chars(infile, n=10000):
    reader = partial(get_chars, n)
    src = open(infile, 'r')
    return read_on(reader, src)
    src.close()


def extract_lines(infile):
    """Given a file, yield the processed lines from that file"""
    src = open(infile, 'r')
    return read_on(get_line, src)
    src.close()


def extract_sentences_to_file(infile, outfile):
    out = open(outfile, 'x')

    linegen = extract_lines(infile)
    
    for line in linegen:
        out.write(line + "\n")

    out.close()

def main(infile, outdir):
    outfname = Path(infile).stem + '.txt'
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    outfile = outdir / outfname
    out_path = extract_sentences_to_file(infile, outfile)

    return out_path

if __name__ == "__main__":
    args = parse_args()
    main(args.file, args.outdir)