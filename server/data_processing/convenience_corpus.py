from pathlib import Path
from .corpus_data_wrapper import CorpusDataWrapper
from .index_wrapper import Indexes, ContextIndexes
from config import CORPORA
from utils.f import memoize, delegates, GetAttr
from typing import *

def get_dir_names(path: Path) -> List[str]:
    available = [g.name for g in filter(lambda g: g.is_dir(), path.glob("*"))]
    return available

@memoize
def from_base_dir(base_dir:str, name:Optional[str]=None):
    return ConvenienceCorpus.from_base_dir(base_dir,name=name)

@memoize
def from_model(model_name, corpus_name):
    """Get the convenience corpus wrapper for a model and a corpus"""
    return ConvenienceCorpus.from_model_corpus(model_name, corpus_name)

def files_available(base_dir, glob_pattern="*.faiss"):
    """Determine whether the base_dir contains indexed files"""
    if not base_dir.exists() or len(list(base_dir.glob(glob_pattern))) == 0:
        return False

    return True

class ConvenienceCorpus():
    def __init__(self, corpus_f:Union[str, Path], embedding_dir:Union[str, Path], context_dir:Union[str, Path], name:Optional[str]=None):
        self.corpus_f = Path(corpus_f)
        self.embedding_dir = Path(embedding_dir)
        self.context_dir = Path(context_dir)
        self.base_dir = self.corpus_f.parent
        self.name = name

        if not self.corpus_f.exists(): 
            raise FileNotFoundError("Main HDF5 file does not exist")

        self.embeddings_available = files_available(self.embedding_dir)
        self.contexts_available = files_available(self.context_dir)
        self.corpus = CorpusDataWrapper(self.corpus_f, self.name)
        self.embedding_faiss = Indexes(self.embedding_dir,self.name)
        self.context_faiss = ContextIndexes(self.context_dir,self.name)

    @classmethod
    def from_base_dir(cls, base_dir:Union[str, Path], name:Optional[str]=None):
        bd = Path(base_dir)
        model_dir = bd.parent

        corpus_f = bd / 'data.hdf5'
        embedding_dir = bd / 'embedding_faiss'
        context_dir = bd / 'context_faiss'

        if name is None:
            model_name = model_dir.name
            corpus_name = bd.name
            name = f"{model_name}_{corpus_name}"

        return cls(corpus_f, embedding_dir, context_dir, name)

    @classmethod
    def from_model_corpus(cls, model_name:str, corpus_name:str):
        """Get the convenience corpus wrapper for a model and a corpus according to the default 
        exbert directory structure 
        """

        model_dir = Path(CORPORA) / model_name
        available = get_dir_names(model_dir)
        if not model_dir.exists() or len(available) == 0:
            raise FileNotFoundError("There are no corpora present for this model")

        base_dir = model_dir / corpus_name

        if not base_dir.exists(): 
            raise FileNotFoundError(f"Desired corpus '{corpus_name}' not available")

        return cls.from_base_dir(base_dir)

    def search_embeddings(self, layer, query, k):
        D, I = self.embedding_faiss.search(layer, query, k)
        return self.corpus.find2d(I)[0]

    def search_contexts(self, layer, heads, query, k):
        D, I = self.context_faiss.search(layer, heads, query, k)
        return self.corpus.find2d(I)[0]

    def get_available_corpora(self):
        """Get what other corpora are in the folder above the base dir (default organization)"""
        return get_dir_names(self.base_dir.parent)

    def __repr__(self):
        return f"ConvenienceCorpus({self.name})"