from pathlib import Path
from data_processing import CorpusDataWrapper, Indexes, ContextIndexes
from config import CORPORA

class ConvenienceCorpus:
    def __init__(self, base_dir):
        bd = Path(base_dir)
        self.base_dir = bd
        self.model_name = bd.parent.name
        self.corpus_name = bd.name
        self.name = f"{self.model_name}_{self.corpus_name}"

        self.corpus_f = bd / 'data.hdf5'
        self.embedding_dir = bd / 'embedding_faiss'
        self.context_dir = bd / 'context_faiss'

        self.corpus = CorpusDataWrapper(self.corpus_f, self.name)
        self.embedding_faiss = Indexes(self.embedding_dir)
        self.context_faiss = ContextIndexes(self.context_dir)

    @classmethod
    def from_model(cls, model_name:str, corpus_name:str):
        base_dir = Path(CORPORA) / model_name / corpus_name
        return cls(base_dir)