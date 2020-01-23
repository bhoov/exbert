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
- [Components](#components)
- [Install and Getting Started](#install-and-getting-started)
- [Development](#development)





## Overview

exBERT is a tool that enables users to explore what and how transformers learn to model languages. The tool comes equipped with a pretrained base version of BERT, a state of the art architecture based on transformers. To explore what this architecture has learned, you can input any sentence to the model and the tool will parse the sentence into tokens suitable for BERT (using the BPE tokenizer) and pass these tokens through the model. The attentions and ensuing word embeddings of each encoder are then extracted and displayed for interaction.

To ease interpretability of language features, several key features of BERT have been disabled:

1.  The attentions toward [CLS] and [SEP] tokens have been zeroed. The [CLS] token is typically useful in classification tasks where the entire sentence needs to have an embedding to summarize it, and the [SEP] has been shown to be a no-op for heads that haven't learned anything.
2.  BERT is able to concatenate two sections of text for training (separated by the [SEP] token mentioned above), and attention patterns can be learned between the two sentences. This enables BERT to apply to a wide range of applications. However, the intention of this tool is to focus on self-attention - that is, the attention of the words in a sentence to other words in the same sentence - and the functionality to look at attention between different words has been dropped.

Even though BERT is able to analyze large chunks of paragraph at once, this tool primarily focuses on language features within one sentence and thus only searches across a corpus that has been split by sentence.

Importantly, BERT's ability to mask particular tokens (by using the [MASK] token in place of the original token) has been preserved. 

## Components

![components](client/src/img/annotated_instructions2.png)


### 1) The Attention Explorer


#### 1a) Sentence Input

Type in any english sentence you want to analyze in the ensuing visualization. Just note that the longer the sentence, the longer the visualization will require to initialize.


#### 1b) Threshold Slider

The Threshold Slider is used to control how much attention is displayed in the main attention graph. For each word, show the largest attentions until X amount of the total attention has been displayed. At 1, all the attention connections are shown. At 0, nothing is shown. Use this if you are only interested in seeing what each word is most interested in.


#### 1c) Layer Selection

Choose the layer of BERT to analyze


#### 1d) Head Selector

Display the selected heads, with the option to select all or none. For convenience, interaction has been added to the Attention Summary Boxes that allows you to select or deselect heads from the visualization itself.


#### 1e) Attention Summary Boxes

Every row represents the total attention to a token, and every column represents a different head. By looking down a column, you can see how strongly any particular head is activated at a particular head/layer. By hovering over any column, you can see that attentions that belong to just that head in the main graph. By selecting a column, you can select or deselect that head. This will both remove the effect of that head on the overall visualization and indicate which heads you are interested in searching over in the corpus.

The left side indicates how much total attention each head is going out of each word. The right side indicates the total attention from each head going into each word.


#### 1f) Attention Graph

This central display shows how tokens attend to other tokens in the same sentence. By hovering over any token, you can see only the attentions going into or out of that particular word. By single clicking on it, you can freeze the view of that particular token and explore how the heads interact with only that token's attention. This also indicates which embedding / headlist you are interested in searching the corpus for. By double clicking on the token, you can mask that token, which passes all the tokens back to BERT with the [MASK] token replacing the token you just double clicked. This often changes quite a few of the attentions and will rerender the attention graph. You can then continue to explore the attentions and select tokens and head as usual.


### 2) Corpus Explorer

Right now, the only available corpus to search is the Wizard of Oz (WoZ). This corpus has been split into sentences, parsed for language features such as part of speech (POS), dependency (DEP), and entity information using SPACY, merged into the BERT tokenization scheme, stored into an HDF5 file, and indexed by FAISS for quick lookup. This same procedure will need to be applied to other corpora to be searched.


#### 2a) Search Buttons:

There are two buttons to perform a search of the available corpus: Search by Head and Search by Embedding. 

To search by embedding, the embedding of the selected token and the layer at which to compare embeddings are passed to the backend. The processed corpus is searched for the words that are nearest to the embedding (by inner product search) at that particular layer and displayed in the Corpus Explorer.

To search by head, the selected layer, the selected heads, and the concatenated head vector for the selected token are passed to the backend. The head vector is then set to 0 at all indices that are from one of the unselected heads. This vector is then searched across the corpus by inner product.

Note that the term "inner product" is used. Since the embeddings and the head vectors are normalized, this is equivalent to performing a cosine-similarity search.


#### 2b) Histogram Information

There are two different histograms of information that are displayed: the Metadata histogram (in purple) and the positional histogram (in black). By selecting the dropdown underneath the Metadata histogram, you can change the displayed matrix in the Corpus controller.


#### 2c) Corpus Metadata Matrix control buttons

The control buttons allow you to see a certain amount of context on either side of the matched word. The arrows add context one word to the left or right, whereas the red X deletes a context from the left or right. The blue refresh symbol is used to adjust the heights of each cell to correspond to the height of it's sentence, which is important when the browser window has been resized in some way.


#### 2d) Corpus Metadata Matrix

The metadata matrix is an array of colors that summarize the metadata information of the corresponding sentence to its right. By hovering over any cell, you will be able to see what that particular color represents. There are unfortunately too many values for POS and DEP to give each a unique color that is distinct from all other colors, so some colors may overlap. Black cells indicate that you have reached a sentence boundary. 


#### 2e) Corpus Explorer

This display shows all words most closely matching the selected token / layer / head information indicated in the Attention Explorer. Matched words have a thick red border. Hovering over any word will give you its POS and DEP information, the amount of attention the matched word is paying to that word, and will read ENTITY if that word was determined to be an entity in the original corpus.

## Install and Getting Started

Note: This code has possible OS dependencies as it was developed exclusively on MacOS.

### Setting up the Environment
1. From the root of this project, create a new conda directory with `conda env create -f environment.yml`. This will create an environment named `exbert`. 
2. Activate this environment with `conda activate exbert`. At this point, if you want to install the development dependencies, you can do so with `conda env update -f environment-dev.yml`
3. You will need to install spacy's `en_core_web_sm` as well. To do this, run: `python -m spacy download en_core_web_sm`


### Generating Example Data

please see the [instructions here](https://github.com/bhoov/exbert/tree/master/server/data_processing)


### Running Locally
Starting the backend:

```bash
conda activate exbert
python server/main.py
```

### Notes on setting up conda
If setting up conda for the first time, we recommend downloading Miniconda with the following curl command:

```
curl 'https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh'
```

Promptly refresh your shell environment and run `conda update conda` to be able to install from the `conda env create` command above.


## Development

If you want to make custom changes to the code, these are some hints to get you started. 

### Use as package
Some find it useful to expose the code inside `server` for development in an environment like Jupyter Notebooks. From the root folder with the `exbert` environment active:

```bash
conda env update -f environment-dev.yml
pip install -e ./server
```

Now the `exbert` environment should allow the server code to be accessible in any folder so long as there are no additional module name clashes in the environment.

### Compiling the frontend

```bash
cd client/src
npm install #installs all necessary node packages
npm run build #This will create the static files living in `client/dist`. 
```

## Running a development environment
You can run a client server that automatically recompiles the frontend with `npm run ww`. After making a change, you should be able to refresh the browser window to see your most recent changes.

Because the backend has to load in a lot of data for inference, we do not allow auto-backend refresh on every saved change in flask even though the framework supports it.

### Uploading your own model locally
Uploading your own model consists of the following steps:

1. *Save your pretrained huggingface model* according to the naming conventions specified in the "modeling_auto.py" of the original transformers repo:

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

Right now, only BERT, RoBERTa, GPT2, and DistilBERT are supported for context searching. You can use the rest without the context searching as desired.

2. *Create the reference corpus*. **Warning**: Depending on the number of layers and size of the hidden dimension in the model, this step could take many gigabytes on your computer to store the hidden representations and attentions at every layer.

## Notes on SubRepo Usage
This project makes use of two public pip repositories (`transformers` and `spacyface`), both of which needed modification as this project was being developed. The `git-subrepo` tool was used to achieve this workflow with a forked repository of both transformers and spacyface. However, this introduces the following steps when setting up the environment:

1. From the `transformers/` directory, run `pip install -e .`
2. Repeat for the `spacyface/` directory.

## Acknowledgements
This project was inspired in part by the original [BertViz by Jesse Vig](https://github.com/jessevig/bertviz).

## Debugging
- If you get a `No module named '_swigfaiss'` error, check that `libomp` is installed on your system. If you are on a mac, this is as simple as `brew install libomp`.
