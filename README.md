# exBERT

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

### A Visual Analysis Tool to Explore Learned Representations in Transformers Models
by Ben Hoover, Hendrik Strobelt, Sebastian Gehrmann <br/>
from IBM Research and Harvard NLP

Link to pre-paper and demo: [exbert.net](http://exbert.net)


<div style='text-align:center;'>

<img src="client/src/img/exbert_teaser_V2.png">

<div style='font-size:70%;'>An overview of the different components of the tool. The token ``escape'' is selected and masked at 0-[all]. The results from a corpus search by token embedding are shown and summarized in (d-g). Users can enter a sentence in (a) and modify the attention view through selections in (b). Self attention is displayed in (c). The blue matrices show the attention of a head (column) to a token (row). Tokens and heads that are selected in (c) can be searched over the annotated corpus (shown: Wizard of Oz) with results presented in (d). Every token in (d) displays its linguistic metadata on hover. A colored summary of the matched token (black highlight) and its context is shown in (e), which can be expanded or collapsed with the buttons above it. The histograms in (f) and (g) summarize the metadata of the results in (d) for the matched token and the token of max attention, respectively.</div>

</div>

### Version 0.9

- [Overview](#overview)
- [Install and Getting Started](#install-and-getting-started)
- [Running locally](#running-locally)


## Overview

exBERT is a tool that enables users to explore the learned attention weights and contextual representations of different [huggingface](https://huggingface.co/) Transformer models. Input a sentence, and exBERT will pass the tokenized input through the specified model, visualizing attentions as curved lines and allowing the embeddings to be searchable across an annotated corpus, if available. 

Features:
- Support for many of the common Transformer models (e.g., BERT, GPT2, DistilBERT, DistilGPT2, Roberta, ALBERT, )
- Toggle visibility of the attentions to the `[CLS]` and `[SEP]` tokens that often assume the functionality of a `no-operation` of a particular head.
- For masked language models, interactively mask particular tokens and observe how this affects the attention patterns 
- Observe what a model would predict at (bidirectional models) or following (autoregressive models) a particular token
- View the attention patterns of single heads or any linear combination of heads
- Search for the contextual representation of any token at the output of any layer across a corpus annotated by that model
- Discover linguistic features (e.g., Part of Speech, Dependencies, Entities) learned by particular heads. 

Limitations:
- exBERT does not visualize the attention between pairs of input sequences. All inputs are assumed to come from a single sequence. 
- Has only been developed to support English


## Install and Getting Started

Support for visualizing the attentions only is available out of the box. This minimal visualization is available with select deployed models on Huggingface's model page [here](https://huggingface.co/exbert). 

Significant preprocessing needs to be performed to allow corpus searching. Please see the [instructions here](https://github.com/bhoov/exbert/tree/master/server/data_processing)

### Makefile (recommended)
Simply run `make env` from the root directory

### Manually
1. From the root of this project, create a new conda directory with `conda env create -f environment.yml`. This will create an environment named `exbert`. 
2. (optional) Intstall development dependencies with `conda env update -f environment-dev.yml`
3. Activate this environment with `conda activate exbert`
4. `pip install -e server/transformers`
5. `pip install -e server/spacyface`
6. `pip install -e server`
7. Install English support for spaCy `python -m spacy download en_core_web_sm`

## Running Locally

Out of the box configuration is the same as the demo at [www.exbert.net].

```bash
conda activate exbert
python server/main.py
```

### Setting up your own model

Limitations:
- The model architecture must be supported by the `AutoModelWithLMHead`
- Corpus searching support is only available for English
- Searching by context requires tweaking of the actual architecture code to extract this information. If your architecture has not been modified to support this extraction, it will not run.

1. *Save your pretrained huggingface model* according to the naming conventions specified in the `modeling_auto.py` of the original Transformers repo (as of v2.8):

```
The model class to instantiate is selected as the first pattern matching
        in the `pretrained_model_name_or_path` string (in the following order):
            - contains `t5`: T5Model (T5 model)
            - contains `distilbert`: DistilBertModel (DistilBERT model)
            - contains `albert`: AlbertModel (ALBERT model)
            - contains `camembert`: CamembertModel (CamemBERT model)
            - contains `xlm-roberta`: XLMRobertaModel (XLM-RoBERTa model)
            - contains `roberta`: RobertaModel (RoBERTa model)
            - contains `bert`: BertModel (Bert model)
            - contains `openai-gpt`: OpenAIGPTModel (OpenAI GPT model)
            - contains `gpt2`: GPT2Model (OpenAI GPT-2 model)
            - contains `transfo-xl`: TransfoXLModel (Transformer-XL model)
            - contains `xlnet`: XLNetModel (XLNet model)
            - contains `xlm`: XLMModel (XLM model)
            - contains `ctrl`: CTRLModel (Salesforce CTRL model)
```

2. *Create the reference corpus*. Instructions [here](./server/data_processing/README.md). **Warning**: Depending on the number of layers and size of the hidden dimension in the model, this step could take many gigabytes on your computer to store the hidden representations and attentions at every layer. 

3. Run `python server/main.py --model PATH_TO_MODEL --kind {bidirectional | autoregressive} --corpus PATH_TO_CORPUS`, selecting bidirectional if your model was trained with masking (e.g., BERT) and autoregressive otherwise (e.g., GPT2). `PATH_TO_CORPUS` should be the name of the directory containing `data.hdf5`, `embedding_faiss/` and `context_faiss`.

Because exBERT lazy-loads the large annotated corpus and models, the first call to search across the corpus will be slow.

### Compiling the frontend

```bash
cd client/src
npm install #installs all necessary node packages
npm run build #This will create the static files living in `client/dist`. 
```

You can run a client server that automatically recompiles the frontend with `npm run watch` rather than `npm run build`. After making a change, you should be able to refresh the browser window to see your most recent changes.

Because the backend has to load in a lot of data for inference, we do not allow auto-backend refresh on every saved change.

## Acknowledgements
This project was inspired in part by the original [BertViz by Jesse Vig](https://github.com/jessevig/bertviz).

## Notes on SubRepo Usage
This project makes use of two public pip repositories (`transformers` and `spacyface`), both of which needed modification as this project was being developed. The `git-subrepo` tool was used to achieve this workflow with a forked repository of both transformers and spacyface. However, this introduces the following steps when setting up the environment:

1. From the `transformers/` directory, run `pip install -e .`
2. Repeat for the `spacyface/` directory.

## Debugging
- If you get a `No module named '_swigfaiss'` error, check that `libomp` is installed on your system. If you are on a mac, this is as simple as `brew install libomp`.
