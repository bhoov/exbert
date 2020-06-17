#!/bin/bash
# Hacky script used to generate corpora and models needed for deployed model

# WARNING: Do not call this as an absolute path. Instead, simply run `. create_corpora.sh`

SCRIPT_DIR="./"
SERVER_DIR="$SCRIPT_DIR/../server/"
WOZ_NAME="woz"
WIKI_NAME="wiki"
CORPORA="$WOZ_NAME $WIKI_NAME"
# MODELS="bert-base-cased gpt2 distilgpt2 roberta-base distilroberta-base distilbert-base-uncased"
MODELS="gpt2 distilgpt2"
OUT_DIR="./$SERVER_DIR/corpora"
RAW_TEXT_DIR="./$SERVER_DIR/raw_data"
PYTHON_SCRIPT="./$SERVER_DIR/data_processing/create_corpus.py"

# Download the models on the first run. Uncomment to download the wizard of oz and Wikipedia data
# mkdir -p $RAW_TEXT_DIR
# WOZURL="https://ibm.box.com/shared/static/uchx6xdvb1ghhrv3ztxk9dvyvfxy31ce.txt"
# WIKIURL="https://ibm.box.com/shared/static/3rfbn3v3h6wpjalwob1pl0geppzx9746.txt"
# 
# wget -O "$RAW_TEXT_DIR/$WOZ_NAME.txt" -L $WOZURL
# wget -O "$RAW_TEXT_DIR/$WIKI_NAME.txt" -L $WIKIURL

# Create the corpus
mkdir -p "$OUT_DIR"
for model in $MODELS; do
    for corpus in $CORPORA; do
	CORPUSFILE="$RAW_TEXT_DIR/$corpus.txt"
	python $PYTHON_SCRIPT -f $CORPUSFILE -o $OUT_DIR -m $model -n $corpus --force
    done
done
