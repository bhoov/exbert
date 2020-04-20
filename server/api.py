"""Defines the API requests for every route in the model

There are 3 kinds of typings:
- Abstract :: These are inheritable base classes for the other responses
- Payloads :: These are passed in the body of POST requests from the frontend
- Response :: These are returned from a route in the backend
"""
from pydantic import BaseModel
from typing import *

# ABSTRACT
class HashableBaseModel(BaseModel):
    def __hash__(self):
        return hash(self.json())

class HashableResponseModel(HashableBaseModel):
    status: int = 200

# REQUESTING
class MaskUpdatePayload(HashableBaseModel):
    model: str
    tokens: List[str]
    sentence: str
    mask: List[int]
    layer: int
    request_hash: Optional[str] = None

class QueryNearestPayload(HashableBaseModel):
    model:str
    corpus: str
    embedding:List[float]
    layer:int
    heads:List[int]
    k:int

# RESPONDING
class ModelDetailPayload(BaseModel):
    nlayers: int
    nheads: int

class ModelDetailResponse(HashableResponseModel):
    payload: ModelDetailPayload

class FullSingleTokenInfo(HashableBaseModel):
    text: str
    topk_words: List[str]
    topk_probs: List[float]

class AttentionMetaResult(HashableBaseModel):
    att: List[List[List[float]]]
    left: List[FullSingleTokenInfo]
    right: List[FullSingleTokenInfo]

class FormattedAttentionResponse(HashableBaseModel):
    aa: AttentionMetaResult

    @classmethod
    def from_transformer_output(cls, details):
        aa = details['aa']
        meta_result = AttentionMetaResult(att=aa['att'], left=aa['left'], right=aa['right'])
        out = cls(aa=meta_result)
        return out

class AttentionResponse(HashableResponseModel):
    payload: FormattedAttentionResponse

    @classmethod
    def from_transformer_output(cls, details, status=200):
        payload = FormattedAttentionResponse.from_transformer_output(details)
        out = cls(payload=payload, status=status)
        return out