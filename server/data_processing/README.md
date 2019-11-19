# Creating an annotated corpus
This module contains the code necessary for extracting and labeling a corpus with semantic data. 

## Known limitations
Please note the following:

- There are many cases in which BPE tokenization and spacy's built in tokenization do not align. To remedy this, contractions that would break the BPE tokenization (defined by Spacy's hard coded exceptions in `spacy.lang.en.TOKENIZER_EXCEPTIONS` and `spacy.lang.tokenizer_exceptions.BASE_EXCEPTIONS`) are instead decomposed into the full words the contractions represent.
- Large corpus files require a LOT of hard drive space to store all the attentions and representations at every layer for every head. When tackling a corpus the size of the Wizard of Oz (207kb), make sure you have at least 9GB of free space. For the validation set of WikiText-2 (1.1MB), you will need 47GB.

## Getting Started
The raw Wizard of Oz text used to create the annotated corpus can be found [here](http://www.gutenberg.org/ebooks/55). A small version of Wikipedia (WikiText-2) can be found [here](https://blog.einstein.ai/the-wikitext-long-term-dependency-language-modeling-dataset/).

### Environment 
Because this module depends on code written in other parts of this repo, we will need to make those files available to the PYTHONPATH. There are several ways to do this, but the easiest way is to do the following:

1. `conda activate exbert` (Assuming you have taken the time to sort out the conda dependencies)
2. `cd server`
3. `pip install -e .`

This essentially makes this repository a local pip package, allowing you access to all packages inside of `server/` whenever the conda environment is active. For instance, if writing your own scripts or running a jupyter notebook, the top level `utils/token_processing` module will be available as `import utils.token_processing as tp`.

### Overview
To create your own dataset from scratch, you will need a large text file whose contents are in English. This repo currently does not support other languages.

1. Run `python create_corpus.py -f <FNAME>.txt -o <OUTDIR>`. This will create, in `<OUTDIR>`, the following files:
    - `embeddings/` - A folder containing the `<FNAME>.hdf5` file and all the `<layer_**>.faiss` files needed to index into the embeddings. NOTE: These files can be quite large
    - `headContext/` - A folder containing the `<FNAME>.hdf5` file and all the `<layer_**>.faiss` files needed to index into the head embeddings/context. NOTE: These files can be quite large

If you want to overwrite existing files in the output directory, add the `--force` flag onto the `create_corpus.py` command above.

### Running the individual scripts
2. Run `python create_hdf5.py -f <FNAME>.txt -o <OUTDIR>`
3. Run `python create_faiss.py -d <OUTDIR>`. This will assume the creation of the `embeddings` and `headContexts` folders inside of `<OUTDIR>`

You will then need to link these corpora into your application. In the `config.py` file, change the `RESOURCE_DIR` to point at `<OUTDIIR>`. 