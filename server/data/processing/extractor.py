import numpy as np
import torch
from pytorch_pretrained_bert import BertTokenizer, BertModel

from utils.token_processing import (
    aligner,
    process_tokens,
    process_hidden_tensors,
    normalize,
    reshape
)

class InfoContainer:
    def __init__(self, zvec, attention):
        self.zvec = zvec
        self.attention = attention

class ExtractorOutput(InfoContainer):
    def __init__(self, tokens, zvec, attention):
        super().__init__(zvec, attention)
        self.tokens = tokens

class Extractor:
    def __init__(self, model, tokenizer, aligner=aligner):
        self.model = model
        self.tokenizer = tokenizer
        self.model.eval()
        self.aligner = aligner
        
    @classmethod
    def from_pretrained(cls, model_type="bert-base-uncased"):
        return cls(BertModel.from_pretrained(model_type), BertTokenizer.from_pretrained(model_type))
    
    # a -> b
    def __call__(self, s):
        """Wrap `get` with a call to the token aligner to remove contractions"""
        s = self.aligner.fix_sentence(s)
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