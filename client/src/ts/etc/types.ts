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

export type AttentionResponse = AbstractAttentionResponse<AttentionMetaResult>

/**
 * ATTENTION RESULTS FROM BACKEND
 *
 * These are the results that are encased in the 'aa' and 'ab' keys returned
 */

export type FullSingleTokenInfo = {
    text: string,
    embeddings: number[],
    contexts: number[],
    bpe_token: string,
    bpe_pos: string,
    bpe_dep: string,
    bpe_is_ent: boolean,
}


type AbstractAttentionResult<T> = {
    att: number[][][],
    left: T,
    right: T,
}

export type AttentionMetaResult = AbstractAttentionResult<FullSingleTokenInfo[]>

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
    match: string
    matched_att: MatchedAttentions
    tokens: TokenFaissMatch[]
}

export interface TokenFaissMatch {
    token: string
    pos: string
    dep: string
    is_ent: string
    is_match: boolean
    inward: number[]
    outward: number[]
}

/**
 * EVENT TYPES
 */
export interface TokenEvent {
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
