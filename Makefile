ENV_NAME="exbert"

env:
	( bash -c " \
		conda init && conda env create -f environment.yml; \
		source ${HOME}/anaconda3/bin/activate $(ENV_NAME); which -a python; \
		pip install -e server/spacyface; \
		pip install -e server/transformers; \
		pip install -e server; \
		python -m spacy download en_core_web_sm;" )