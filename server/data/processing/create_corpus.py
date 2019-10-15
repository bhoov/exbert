import sentence_extracting
import create_hdf5
import create_faiss
import argparse
from pathlib import Path

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--file', help="Path to .txt file to analyze and annotate")
    parser.add_argument("-o", "--outdir", help="Path of directory in which to store the analyzed sentences (.pckl), .hdf5, and .faiss files")
    parser.add_argument("--force", action="store_true", help="If given, overwrite existing hdf5 files.")

    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()

    unique_sent_pckl = sentence_extracting.main(args.file, args.outdir)
    create_hdf5.main(unique_sent_pckl, args.outdir, args.force)
    create_faiss.main(args.outdir)
