import numpy as np

SEP = '[SEP]'
CLS = '[CLS]'
MASK = '[MASK]'

def drop_bad_inds(arr, left_drop, right_drop):
    """Given the 4d array returned by attentions of shape (n_layer, n_head, n_left_text, n_right_text),
        return that array modified to drop ind1 from n_left_text and ind2 from n_right_text
    """
    # print("Length of left drop: ", len(left_drop))
    # print("Length of right drop: ", len(left_drop))
    print("Shape of arr: ", arr.shape)
    arr = arr[:, :, ~left_drop, :]

    # Keys and queries don't match in the final dimension
    if arr.shape[-1] == len(right_drop):
        arr = arr[:, :, :, ~right_drop]

    return arr

def strip_attention(attention):
    """Given an attention output of the BERT model, 
    return the same object without CLS and SEP token weightings

    NOTE: Not currently fixing key and query
    """
    attention_out = {}

    # Iterate through sentence combinations
    # Need queries, keys, att, left_text, right_text
    for i, (k, v) in enumerate(attention.items()):
        stripped_resp = {}

        left_tokens = np.array(v['left_text'])
        right_tokens = np.array(v['right_text'])
        att = np.array(v['att'])
        # key = np.array(v['keys'])
        # quer = np.array(v['queries'])

        left_drop = (left_tokens == CLS) | (left_tokens == SEP)
        right_drop = (right_tokens == CLS) | (right_tokens == SEP)
        
        att_out = drop_bad_inds(att, left_drop, right_drop)
        # key_out = drop_bad_inds(key, left_drop, right_drop)
        # quer_out = drop_bad_inds(quer, left_drop, right_drop)
        left_out = left_tokens[~left_drop]
        right_out = right_tokens[~right_drop]

        # assert att_out.shape[:3] == key_out.shape[:3] == quer_out.shape[:3]
        assert att_out.shape[2] == len(left_out)
        assert att_out.shape[3] == len(right_out)

        stripped_resp['att'] = att_out.tolist()
        stripped_resp['keys'] = v['keys']
        stripped_resp['queries'] = v['queries']
        stripped_resp['left_text'] = left_out.tolist()
        stripped_resp['right_text'] = right_out.tolist()

        attention_out[k] = stripped_resp

    return attention_out

def mask_attention(deets, maskA, maskB):
    """Deets have form:

        tokens_a, tokens_b, query_tensor.data.numpy(), key_tensor.data.numpy(), attn_tensor.data.numpy()

    Take the first two in tuple and mask according to maskA and maskB which are lists of indices to mask
    """

    tokens_a = np.array(deets[0])
    tokens_a[maskA] = MASK
    tokens_a.tolist()

    tokens_b = np.array(deets[1])
    tokens_b[maskb] = MASK
    tokens_b.tolist()

    deets[0] = tokens_a.tolist()
    deets[1] = tokens_b.tolist()

    return deets