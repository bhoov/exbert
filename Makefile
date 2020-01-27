ENV_NAME="exbert"

env:
	conda env create -f ./environment.yml; \
	conda activate $(ENV_NAME); \
	pip install -e server/spacyface; \
	pip install -e server/transformers; \
	pip install -e server; \
