import numpy as np
import torch
import h5py
import pickle
import argparse
from pathlib import Path
from pytorch_pretrained_bert import BertTokenizer, BertModel

from utils.token_processing import (
    spacy_tokenize,
    get_spacy_hdf5_meta,
    bpe_tokenize,
    combine_tokens_meta,
    process_tokens,
    process_hidden_tensors,
    normalize,
    reshape
)

bert_model = "bert-base-uncased"

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", help="Path to .pckl file of unique sentences from a corpus.")
    parser.add_argument("-o", "--outdir", help="Path of directory in which to store the analyzed sentences as a .hdf5")
    parser.add_argument("--force", action="store_true", help="If given, overwrite existing hdf5 files. If absent, nothing will be done if the correct file in the output directory already exists")
    
    args = parser.parse_args()
    return args


# Path -> [String]
def read_pckl(path):
    """Reads list of sentences from pickle object"""
    with open(path, 'rb') as f:
        return pickle.load(f)

# np.ndarray x -> int k -> np.ndarray:[x.shape[0], k]
def top_attentions(x, k):
    pass

class InfoContainer:
    def __init__(self, zvec, attention):
        self.zvec = zvec
        self.attention = attention

class ExtractorOutput(InfoContainer):
    def __init__(self, tokens, zvec, attention):
        super().__init__(zvec, attention)
        self.tokens = tokens

class Extractor:
    def __init__(self, model, tokenizer):
        self.model = model
        self.tokenizer = tokenizer
        self.model.eval()
        
    @classmethod
    def from_pretrained(cls, model_type=bert_model):
        return cls(BertModel.from_pretrained(model_type), BertTokenizer.from_pretrained(model_type))
    
    # a -> b
    def __call__(self, s):
        return self.get(s)
    
    def get(self, sentence):
        """ String -> ([String] tokens, np.Array([[[Number]]]):<nLayers, len(tokens), H>)
        
        H can either be the hidden dimension, or in the case of contexts, h * nHeads
        (for bert-base-uncased, nLayers=12; h=64; nHeads=12)
        """
        tokens_a, tokens_b, info = self._get_from_sentences(sentence, "")
        
        # List of length 12, containing tensors of size <1, len(ta) + len(tb), H>
        tokens_a, tokens_b = process_tokens(tokens_a, tokens_b)
        info_out = map(process_hidden_tensors, info.zvec)
        proc_info_out = self._renorm(np.array(list(info_out)))
        proc_attention = np.stack([a.data.numpy() for a in info.attention]).squeeze(1)
        output = ExtractorOutput(tokens_a, proc_info_out, proc_attention)
        return output

    def _get_from_sentences(self, sentence_a, sentence_b):
        """ String -> String -> (String, String, [Tensor([[Number]])]:<nLayers <len(tokens), H>>)
        
        The standard form of passing information to the BERT model, where there are two sentence inputs. 
        
        """
        tokens_tensor, token_type_tensor, tokens_a, tokens_b = self._get_inputs(sentence_a, sentence_b)
        info = self._get_from_tokens(tokens_tensor, token_type_tensor)
        return tokens_a, tokens_b, info

    def _get_inputs(self, sentence_a, sentence_b):
        """ String -> String -> (Tensor([Number]), Tensor([Number]), [String], [String])
        
        Convert the two sentences into the tokens needed to pass to BertModel.
        """
        tokens_a = self.tokenizer.tokenize(sentence_a)
        tokens_b = self.tokenizer.tokenize(sentence_b)
        tokens_a_delim = ['[CLS]'] + tokens_a + ['[SEP]']
        tokens_b_delim = tokens_b + ['[SEP]']
        token_ids = self.tokenizer.convert_tokens_to_ids(tokens_a_delim + tokens_b_delim)
        tokens_tensor = torch.tensor([token_ids])
        token_type_tensor = torch.LongTensor([[0] * len(tokens_a_delim) + [1] * len(tokens_b_delim)])
        return tokens_tensor, token_type_tensor, tokens_a_delim, tokens_b_delim
    
    
    def _get_from_tokens(self, tokens_tensor, token_type_tensor):
        """ String -> ([String] tokens, np.Array([[[Number]]]):<nLayers, len(tokens), H>)
        
        H can either be the hidden dimension, or in the case of contexts, h * nHeads
        (for bert-base-uncased, nLayers=12; h=64; nHeads=12, hiddenDimension=768)
        """
        raise NotImplementedError("Must implement how to extract information from model")
        
    def _renorm(self):
        """Process the tensors (e.g. normalize and reshape as necessary) before returning type
        needed for hdf5 file.
        """
        raise NotImplementedError()

class EmbeddingExtractor(Extractor):
    """Class that gets the embeddings out of the model"""
    
    def _get_from_tokens(self, tokens_tensor, token_type_tensor):
        """ String -> ([String] tokens, np.Array([[[Number]]]):<nLayers, len(tokens), H>)
        (e.g. nLayers=12; H=768)
        """
        encoded_layers, _, attn_data = self.model(tokens_tensor, token_type_ids=token_type_tensor)
        attention = [a['attn_probs'][:, :, :-1, :-1] for a in attn_data] # Drop the last '[SEP]' in every attention
        output = InfoContainer(encoded_layers, attention)
        return output
    
    def _renorm(self, embeds):
        """ np.Array -> np.Array"""
        return normalize(embeds)
        
class HeadContextExtractor(Extractor):
    def _get_from_tokens(self, tokens_tensor, token_type_tensor):
        """String -> ([String] tokens, np.Array([[[Number]]]):<nLayers, len(tokens), h * nHeads>)
        (e.g. nLayers=12; h=64; nHeads=12)
        """
        _, _, attn_data = self.model(tokens_tensor, token_type_ids=token_type_tensor)
        context_layers = [a['context_layer'] for a in attn_data]
        attention = [a['attn_probs'][:, :, :-1, :-1] for a in attn_data] # Drop the last '[SEP]' in every attention
        output = InfoContainer(context_layers, attention)
        
        return output
    
    def _renorm(self, contexts):
        """ np.Array -> np.Array """
        return reshape(normalize(contexts))
    
def sentences_to_hdf5(extractor, fname, sentences, print_every=50, groupname='embeddings', clear_file=False):
    """Main function that saves all processed sentences to an HDF5 file"""
    f = h5py.File(fname, 'a')
    if clear_file: f.clear()
    grp = f.create_group(groupname)

    N = len(sentences)
    main_key = r"{:0" + str(len(str(N))) + "}"
    suppl_attn_key = r"{:0" + str(len(str(N))) + "}_attn"
    
    for i, s in enumerate(sentences):
        if ((i + 1) % print_every) == 0:
            print(i + 1, '/', N)
        
        # b_tokens, embeds = extractor(s)
        ext_out = extractor(s)
        b_tokens, embeds, attn = ext_out.tokens, ext_out.zvec, ext_out.attention

        s_tokens = spacy_tokenize(s)
        s_meta = get_spacy_hdf5_meta(s)
        
        s_pos = [s[1] for s in s_meta]
        s_dep = [s[2] for s in s_meta]
        s_is_ent = [s[3] for s in s_meta]
        
        try:
            b_pos = combine_tokens_meta(b_tokens, s_tokens, s_pos)
        except IndexError:
            print(i)
            print(s)
            raise
            
        b_dep = combine_tokens_meta(b_tokens, s_tokens, s_dep)
        b_is_ent = combine_tokens_meta(b_tokens, s_tokens, s_is_ent)
        
        assert len(b_is_ent) == len(b_tokens)
        
        idx = main_key.format(i)
        supp_idx = suppl_attn_key.format(i)

        ds = grp.create_dataset(idx, data=embeds)
        ds_attn = grp.create_dataset(supp_idx, data=attn)

        ds.attrs['b_tokens'] = b_tokens
        ds.attrs['s_tokens'] = s_tokens
        ds.attrs['s_pos'] = s_pos
        ds.attrs['s_dep'] = s_dep
        ds.attrs['s_is_ent'] = s_is_ent
        ds.attrs['b_pos'] = b_pos
        ds.attrs['b_dep'] = b_dep
        ds.attrs['b_is_ent'] = b_is_ent
        ds.attrs['b_is_ent'] = b_is_ent
        ds.attrs['sentence'] = s
        ds.attrs['attn_ref'] = supp_idx
        
    return f

if __name__ == "__main__":
    args = parse_args()
    sentences = read_pckl(args.file)

    outdir = Path(args.outdir)

    embedding_dir = outdir / 'embeddings'
    embedding_dir.mkdir(exist_ok=True)
    embedding_outfile = "embeddings" + '.hdf5'
    embedding_outpath = embedding_dir / embedding_outfile
    print(f"Extracting embeddings into {embedding_outpath}")
    embedding_extractor = EmbeddingExtractor.from_pretrained(bert_model)
    sentences_to_hdf5(embedding_extractor, str(embedding_outpath), sentences, clear_file=args.force)

    context_dir = outdir / 'headContext'
    context_dir.mkdir(exist_ok=True)
    context_outfile =  "contexts" + '.hdf5'
    context_outpath = context_dir / context_outfile
    print(f"Extracting head context into {context_outpath}")
    context_extractor = HeadContextExtractor.from_pretrained(bert_model)
    sentences_to_hdf5(context_extractor, str(context_outpath), sentences, clear_file=args.force)
