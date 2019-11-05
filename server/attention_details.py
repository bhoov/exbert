"""
Utilities for interfacing with the attentions from the front end.
This file is adapted from Jesse Vig's tool at https://github.com/jessevig/bertviz
"""
import torch
from attention_formatter import FormattedAttention
from utils.token_processing import reshape

class AttentionDetailsData:
    """Wraps model and tokenizer to format Represents data needed for attention details visualization"""

    def __init__(self, model, aligner):
        self.model = model
        self.aligner = aligner
        self.model.eval()

    @classmethod
    def from_pretrained(cls, model_type='bert-base-uncased'):
        return cls(BertModel.from_pretrained(model_type), BertTokenizer.from_pretrained(model_type))

    # a -> b
    def __call__(self, s):
        return self.get(s)

    # String -> String -> FormattedAttention
    def get_data(self, sentence_a, sentence_b):
        out = self._get_inputs(sentence_a, sentence_b)
        return self._tokens2atts(*out)

    # [String] -> [String] -> FormattedAttention
    def get_data_from_tokens(self, tokens_a, tokens_b):
        out = self._get_inputs_from_tokens(tokens_a, tokens_b)
        return self._tokens2atts(*out)

    def _get_inputs(self, sentence_a, sentence_b):
        tokens_a = self.aligner.to_bpe(sentence_a)
        tokens_b = self.aligner.to_bpe(sentence_b)
        tokens_a_delim = ['[CLS]'] + tokens_a + ['[SEP]']
        tokens_b_delim = tokens_b + ['[SEP]']
        return self._get_inputs_from_tokens(tokens_a_delim, tokens_b_delim)

    def _get_inputs_from_tokens(self, tokens_a, tokens_b):
        """ Assumes sentences are already tokenized and tagged with [CLS] and [SEP] """
        token_ids = self.aligner.bpe.convert_tokens_to_ids(tokens_a + tokens_b)
        tokens_tensor = torch.tensor([token_ids])
        token_type_tensor = torch.LongTensor([[0] * len(tokens_a) + [1] * len(tokens_b)])
        return tokens_tensor, token_type_tensor, tokens_a, tokens_b
    
    # (Tensor[], Tensor[], [String], [String]) -> FormattedAttention
    def _tokens2atts(self, tokens_tensor, token_type_tensor, tokens_a, tokens_b):
        # Encoded layers: (NumLayers, NumTokens, HiddenDim)
        encoded_layers, _, attn_data_list = self.model(tokens_tensor, token_type_ids=token_type_tensor)
        query_tensor = torch.stack([attn_data['query_layer'] for attn_data in attn_data_list])
        key_tensor = torch.stack([attn_data['key_layer'] for attn_data in attn_data_list])
        attn_tensor = torch.stack([attn_data['attn_probs'] for attn_data in attn_data_list])
        context_tensor = torch.stack([attn_data['context_layer'] for attn_data in attn_data_list])

        query = query_tensor.data.numpy()
        key = key_tensor.data.numpy()
        att = attn_tensor.data.numpy()
        context = context_tensor.data.numpy()


        encoded_tensor = torch.stack([layer for layer in encoded_layers]).squeeze(1).transpose(0, 1)
        embeddings = encoded_tensor.data.numpy()
        contexts = reshape(context_tensor.squeeze(1)).transpose(0, 1).data.numpy()

        output = FormattedAttention(tokens_a, tokens_b, query, key, att, embeddings, contexts)
        return output