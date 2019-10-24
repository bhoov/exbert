import numpy as np
import torch
import h5py
import pickle
import argparse
from pathlib import Path

from utils.token_processing import aligner

from data.processing.extractor import EmbeddingExtractor, HeadContextExtractor
from data.processing.sentence_extracting import extract_chars, extract_lines
from data.processing.corpus_embeddings import main_key, suppl_attn_key

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", help="Path to .pckl file of unique sentences from a corpus.")
    parser.add_argument("-o", "--outdir", help="Path of directory in which to store the analyzed sentences as a .hdf5")
    parser.add_argument("-b", "--bertmodel", default="bert-base-uncased", help="Which pretrained bert model to use, or path to trained model")
    parser.add_argument("--force", action="store_true", help="If given, overwrite existing hdf5 files.")
    
    args = parser.parse_args()
    return args

# Path -> [String]
def read_pckl(path):
    """Reads list of sentences from pickle object"""
    with open(path, 'rb') as f:
        return pickle.load(f)

def sentence_to_hdf5(grp, extractor, sentence, i):
    s = sentence
    ext_out = extractor(s)
    b_tokens, embeds, attn = ext_out.tokens, ext_out.zvec, ext_out.attention

    s_tokens = aligner.to_spacy(s)

    spacy_info = aligner.to_spacy_hdf5_by_col(s)
    bpe_info = aligner.to_bpe_hdf5_by_col(s)
    
    idx = main_key.format(i)
    supp_idx = suppl_attn_key.format(i)

    ds = grp.create_dataset(idx, data=embeds)
    ds_attn = grp.create_dataset(supp_idx, data=attn)

    ds.attrs['sentence'] = s
    ds.attrs['attn_ref'] = supp_idx

    ds.attrs['b_tokens'] = bpe_info['token']
    ds.attrs['b_pos'] = bpe_info['pos']
    ds.attrs['b_dep'] = bpe_info['dep']
    ds.attrs['b_is_ent'] = bpe_info['is_ent']

    ds.attrs['s_tokens'] = spacy_info['token']
    ds.attrs['s_pos'] = spacy_info['pos']
    ds.attrs['s_dep'] = spacy_info['dep']
    ds.attrs['s_is_ent'] = spacy_info['is_ent']

def make_f(outpath, group_name, force):
    f = h5py.File(outpath, 'a')
    if force: f.clear()
    grp = f.create_group(group_name)

    return f, grp


def main(infile, outdir, force, bert_model):
    outdir = Path(outdir)

    embedding_extractor = EmbeddingExtractor.from_pretrained(bert_model)
    embedding_dir = outdir / 'embeddings'
    embedding_dir.mkdir(parents=True, exist_ok=True)
    embedding_outfile = "embeddings" + '.hdf5'
    embedding_outpath = embedding_dir / embedding_outfile
    embed_f, embed_grp = make_f(embedding_outpath, "embeddings", force) # must be called "embeddings" for wrapper to work

    context_extractor = HeadContextExtractor.from_pretrained(bert_model)
    context_dir = outdir / 'headContext'
    context_dir.mkdir(parents=True, exist_ok=True)
    context_outfile =  "contexts" + '.hdf5'
    context_outpath = context_dir / context_outfile
    context_f, context_grp = make_f(context_outpath, "embeddings", force)
    
    print_every = 50
    long_strings = extract_chars(infile, 10000)
    cutoff_sent = ""
    i = 0
    for strip in long_strings:
        sentences = [sent.text for sent in aligner.nlp(strip).sents]
        fixed_sentences = [cutoff_sent + sentences[0]] + sentences[1:-1] 

        # This leads to the possibility that there will be an input that is two sentences long. This is ok.
        cutoff_sent = sentences[-1]
        for s in fixed_sentences:
            if ((i + 1) % print_every) == 0:
                print(f"Starting sentence {i+1}: ")
                print(s)

            try:
                sentence_to_hdf5(embed_grp, embedding_extractor, s, i)
            except:
                print(f"Broken in Embeddings at {i}: {s}")
                raise

            try:
                sentence_to_hdf5(context_grp, context_extractor, s, i)
            except:
                print(f"Broken in Contexts at {i}: {s}")
                raise

            i += 1 # Increment to mark the next sentence
    
    print("FINISHED SUCCESSFULLY")


if __name__ == "__main__":
    args = parse_args()

    main(args.file, args.outdir, args.force, args.bertmodel)