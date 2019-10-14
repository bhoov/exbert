# Processing
This module contains the code necessary for extracting and labeling a corpus with semantic data. It unfortunately only works for simple input texts, as there are many cases in which BPE tokenization and spacy's built in tokenization do not align.

Note that some creation scripts may be broken. Stay tuned for a more robust implementation of corpus annotation.

## Getting Started
The raw Wizard of Oz text used to create the annotated corpus can be found [here](http://www.gutenberg.org/ebooks/55).

## Procedure
1. Run `python sentence_extracting.py -f <FNAME.txt> -o <output directory>`
2. Run `python create_hdf5.py -f <FNAME.pckl> -o <output directory>`
3. Run `python create_faiss.py -f <FNAME.hdf5> -o <output directory>`

Then in the `main.py` file, change the `WozFaissWrapper.load_info()` method to point at the correct paths.

Again, this workflow will be improved.

You will then need to link these corpora into your application 