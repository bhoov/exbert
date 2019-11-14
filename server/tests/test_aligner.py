from aligner import (
    BertAligner,
    RobertaAligner,
    GPT2Aligner,
    DistilBertAligner
)

def any_upper(toks):
    for t in toks:
        has_upper = any([t_.isupper() for t_ in t])
        if has_upper: return has_upper
    return False

def aligner_assert(aligner, s):
    mtokens = [m['token'] for m in aligner.meta_tokenize(s)]
    tokens = aligner.tokenize(s)
    model_id_tokens = aligner.convert_ids_to_tokens(aligner.encode(s))
    print(model_id_tokens)
    assert tokens == mtokens, f"{tokens} \n {mtokens}"
    
def sentence_tester_(aligner):
    """Given an aligner, run a series of tests to make sure the tokenizations line up."""
    s = ['the LIFE', 
        'the LIFEST', 
        'the LIFESTPHSESDF', 
        'the LI FE ST',
        "I can't understand for the LIFE of me why we Aren't going home",
         "There is nothing I can say or do... that will <MAKE> me do what YOU want!!",
         "This ain't going to mess me up, Ain't it?",
         "It's tonsa fun in the whatve whatve-you-done U.K."
    ]
    
    for s_ in s:
        aligner_assert(aligner, s_)

def test_bert_aligners():
    bert_names = ['bert-base-uncased', 'bert-base-cased']

    for n in bert_names:
        a = BertAligner.from_pretrained(n)
        sentence_tester_(a)

def test_gpt_aligners():
    names = ['gpt2']

    for n in names:
        a = GPT2Aligner.from_pretrained(n)
        sentence_tester_(a)

def test_roberta_aligners():
    names = ['roberta-base']

    for n in names:
        a = RobertaAligner.from_pretrained(n)
        sentence_tester_(a)

def test_distilbert_aligners():
    names = ['distilbert-base-uncased']

    for n in names:
        a = DistilBertAligner.from_pretrained(n)
        sentence_tester_(a)