import { D3Sel } from "./Util"

/**
 * ATTENTION RESPONSES FROM BACKEND
 *
 * Contain the attentions and embeddings for all combinations of returns from the backend
 */

export type ModelInfo = {
    nlayers: number
    nheads: number
}

type AbstractAttentionResponse<T> = {
    aa: T
}

/**
 * ATTENTION RESULTS FROM BACKEND
 *
 * These are the results that are encased in the 'aa' and 'ab' keys returned
 */
export type AttentionResponse = AbstractAttentionResponse<AttentionMetaResult>
export type AttentionMetaResult = AbstractAttentionResult<FullSingleTokenInfo[]>

export type FullSingleTokenInfo = {
    text: string,
    embeddings: number[],
    contexts: number[],
    bpe_token: string,
    bpe_pos: string,
    bpe_dep: string,
    bpe_is_ent: boolean,
    topk_words: string[],
    topk_probs: number[]
}

interface AbstractAttentionResult<T> {
    att: number[][][],
    left: T,
    right: T,
}

/**
 * SEARCH RESULT TYPES
 */

interface MatchedTokAtt {
    att: number[]
    offset_to_max: number
    loc_of_max: number
}


interface MatchedAttentions {
    in: MatchedTokAtt,
    out: MatchedTokAtt,
}

export interface FaissSearchResults {
    sentence: string
    index: number
    next_index: number
    match: string
    match_plus_1: string
    matched_att: MatchedAttentions
    matched_att_plus_1: MatchedAttentions
    tokens: TokenFaissMatch[]
}

export interface TokenFaissMatch {
    token: string
    pos: string
    dep: string
    is_ent: string
    is_match: boolean
    is_next_word: boolean
    inward: number[]
    outward: number[]
}

/**
 * EVENT TYPES
 */
export interface TokenEvent {
    sel?: D3Sel,
    side: SideOptions,
    ind: number | "null",
}

export interface TokenEmbeddingEvent extends TokenEvent {
    embeddings: number[]
}

export type HeadBoxEvent = {
    side: SideOptions,
    ind: number,
    head: number,
}

/**
 * MISCELLANEOUS TYPES
 */

export type SentenceOptions = "ab" | "ba" | "aa" | "bb" | "all";
export type SideOptions = "left" | "right"
export type SimpleMeta = "pos" | "dep" | "is_ent"
export type TokenOptions = "a" | "b" | "all"

export enum Toggled {
    ADDED = 0,
    REMOVED,
}

export enum NormBy {
    Row = 0,
    Col,
    All
}

export interface AbstractMetaOptions {
    pos: string[],
    dep: string[],
    is_ent: any,
    ents: string[],
}

export interface MetaOptions extends AbstractMetaOptions {
    is_ent: boolean[],
}

export interface ColorMetaOptions extends AbstractMetaOptions {
    is_ent: string[] // Representing hex colors
}

export interface ColorMetaScale {
    pos: (d: string) => string,
    dep: (d: string) => string,
    is_ent: (d: string) => string,
    ents: (d: string) => string,
    offset?: (d: string) => string,
}

export enum ModelKind {
    Bidirectional = "bidirectional",
    Autoregressive = "autoregressive"
}

export interface ModelDescription { 
    name: string
    kind: ModelKind
}

export interface CorporaDescription { 
    code: string
    display: ModelKind
}