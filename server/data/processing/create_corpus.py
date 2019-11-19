import argparse

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--file', help="Path to .txt file to analyze and annotate")
    parser.add_argument("-o", "--outdir", help="Path of directory in which to store the analyzed sentences (.pckl), .hdf5, and .faiss files")
    parser.add_argument("--force", action="store_true", help="If given, overwrite existing hdf5 files.")
    parser.add_argument("-m", "--model", default="bert-base-uncased", help="Specify the huggingface model to use for attentions")
    parser.add_argument("--nomask", action='store_false', help="INCLUDE attentions from special tokens like [CLS] and [SEP]. By default, ignore these attentions")

    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()

    import create_hdf5
    import create_faiss

    create_hdf5.main(args.file, args.outdir, args.force, args.model, args.nomask)
    create_faiss.main(args.outdir)