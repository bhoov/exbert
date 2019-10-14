import * as d3 from 'd3'
import 'd3-array'
import * as au from '../etc/arrayUtils'
import * as tf from '@tensorflow/tfjs'
import { TypedArray } from '@tensorflow/tfjs-core/dist/types';

export interface Edge {
    i: number, // Source index
    j: number, // Target index
    v: number, // Value
}

/**
 * Convert data matrix to necessary data array to pass to SVG connections
 */
export function toEdges (data:number[][], cutoffAmt=1) : Edge[] {
    let outArr: Edge[] = [];
    let cutoff: number;
    data.forEach((row, i) => {
        cutoff = cutoffAmt * d3.sum(row);
        let counter = 0;
        const sortedArr:au.SortArray = au.sortWithIndices(row);

        sortedArr.arr.forEach((v,j) => {
            if (counter < cutoff) {
                const obj: Edge = {
                    i: i,
                    j: sortedArr.sortIndices[j],
                    v: v,
                }
                outArr.push(obj);
                counter += v;
            }
            })
        })

    return outArr;
}
/**
 * Class for implementing operations on AttentionGraph implementation. 
 * Closely tied to [[AttentionConnector]]
 */
export class EdgeData {
    readonly tensData:tf.Tensor;

    constructor (public data:number[][]){
        this.tensData = tf.tensor(data);
    }

    min(axis?:number):TypedArray {
        return this.tensData.min(axis).dataSync();
    }

    max(axis?:number):TypedArray{
        return this.tensData.max(axis).dataSync();
    }

    extent(axis?:number):number[][] {
        return d3.zip(this.min(axis), this.max(axis))
    }

    /**
     * Format the data to send to SVG chart.
     * 
     * @param accumulateThresh - A float between 0 and 1, indicating the amount of weight to display. Defaults to 0.7.
     */
    format (accumulateThresh=0.7):Edge[] {
        return toEdges(this.data, accumulateThresh);
    }
}