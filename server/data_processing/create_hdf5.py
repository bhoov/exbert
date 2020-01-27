import numpy as np
import torch
import h5py
import pickle
import argparse
from pathlib import Path

from data_processing.sentence_extracting import extract_chars, extract_lines
from data_processing.corpus_data_wrapper import CorpusDataWrapper, to_idx
from transformer_details import from_pretrained

MIN_SENTENCE_CHARLEN = 24

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", help="Path to .pckl file of unique sentences from a corpus.")
    parser.add_argument("-o", "--outdir", help="Path of directory in which to store the analyzed sentences as a .hdf5")
    parser.add_argument("-m", "--model", default="bert-base-cased", help="Which pretrained transformer model to use. See 'transformer_details.py' for supported models")
    parser.add_argument("--nomask", action='store_false', help="By default, ignore attentions to special tokens like '[CLS]' and '[SEP]'. If given, include these attentions")
    parser.add_argument("--force", action="store_true", help="If given, overwrite existing hdf5 files.")

    args = parser.parse_args()
    return args

def main(infile, outdir, force, model_name, mask_attentions):
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    data_outfile = outdir / "data.hdf5"
    f = h5py.File(data_outfile, 'a')
    if force: f.clear()

    extractor = from_pretrained(model_name)

    print_every = 50
    long_strings = extract_chars(infile, 10000)
    cutoff_sent = ""
    i = 0
    for strip in long_strings:
        sentences = [sent.text for sent in extractor.aligner.spacy_nlp(strip).sents]
        fixed_sentences = [cutoff_sent + sentences[0]] + sentences[1:-1]

        # This leads to the possibility that there will be an input that is two sentences long. This is ok.
        cutoff_sent = sentences[-1]
        for s in fixed_sentences:
            if len(s) < MIN_SENTENCE_CHARLEN: continue
            if ((i + 1) % print_every) == 0: print(f"Starting sentence {i+1}: \n", s)

            try:
                out = extractor.att_from_sentence(s, mask_attentions=mask_attentions)

            except Exception as e:
                print(f"Error {e} occured at sentence {i}:\n{s}\n\n Skipping, not creating hdf5 grp")
                continue

            content = out.to_hdf5_content()
            meta = out.to_hdf5_meta()
            grp = f.create_group(to_idx(i))
            for k,v in content.items(): grp.create_dataset(k, data=v)
            for k, v in meta.items(): grp.attrs[k] = v

            i += 1 # Increment to mark the next sentence

    print("FINISHED CORPUS PROCESSING SUCCESSFULLY")

if __name__ == "__main__":
    args = parse_args()

    main(args.file, args.outdir, args.force, args.model, args.nomask)
