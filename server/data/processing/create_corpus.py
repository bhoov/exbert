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
    parser.add_argument("-b", "--bertmodel", default="bert-base-uncased", help="Specify the bert model to use for attentions (may break if layers and heads != 12, and if required tokenization is different)")

    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()

    create_hdf5.main(args.file, args.outdir, args.force, args.bertmodel)
    create_faiss.main(args.outdir)