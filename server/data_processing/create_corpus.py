import argparse
from pathlib import Path

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('-f', '--file', help="Path to .txt file to analyze and annotate")
    parser.add_argument("-o", "--outdir", help="Path of output directory inside of which to place <model>/<corpus>/ directory containing hdf5 and faiss files")
    parser.add_argument("-n", "--name", default=None, help="Name the corpus with a code name. If not given, default to the name of the provided .txt file")
    parser.add_argument("--force", action="store_true", help="If given, overwrite existing hdf5 and faiss files.")
    parser.add_argument("-m", "--model", default="bert-base-cased", help="Specify the huggingface model to use for attentions")
    parser.add_argument("--nomask", action='store_false', help="INCLUDE attentions from special tokens like [CLS] and [SEP]. By default, ignore these attentions")

    return parser.parse_args()

if __name__ == "__main__":
    from utils.f import ifnone
    import create_hdf5
    import create_faiss

    args = parse_args()

    f = Path(args.file)
    corpus_name = ifnone(args.name, f.stem)
    output_dir = Path(args.outdir) / args.model / corpus_name
    output_dir.mkdir(parents=True, exist_ok=True)

    create_hdf5.main(args.file, output_dir, args.force, args.model, args.nomask)
    create_faiss.main(output_dir)
