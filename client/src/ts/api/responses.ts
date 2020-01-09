import * as tp from '../etc/types'

/**
 * All responses will contain a "status" member. The meaning of the number is detailed below
 * 
 * - 405: Requested model did not exist
 * - 406: Requested corpus did not exist
 */
interface BaseResponse {
    status: number
}

export interface ModelDetailResponse extends BaseResponse {
    payload: tp.ModelInfo
}

export interface AttentionDetailsResponse extends BaseResponse {
    payload: tp.AttentionResponse
}

export interface NearestNeighborResponse extends BaseResponse {
    payload: tp.FaissSearchResults[]
}