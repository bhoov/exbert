import * as _ from 'lodash'
import * as x_ from '../etc/_Tools'
import * as tp from '../etc/types'
import * as tf from '@tensorflow/tfjs'

/**
 * Notes:
 * 
 * - Also encapsulate the CLS/SEP info vs. no CLS/SEP info
 * - When layer format changes from list, drop the index into conf.layer
 */

const bpeTokens = ["[CLS]", "[SEP]"]

function wrapAttentionResponse(r:tp.AttentionResponse, key:tp.SentenceOptions) {
    const currPair = r[key]
    const left = <tp.FullSingleTokenInfo[]>currPair.left
    const right = <tp.FullSingleTokenInfo[]>currPair.right
    const leftZero = x_.findAllIndexes(left.map(t => t.text), (a) => _.includes(bpeTokens, a))
    const rightZero = x_.findAllIndexes(right.map(t => t.text), (a) => _.includes(bpeTokens, a))
    return new AttentionWrapper(r[key].att, [leftZero, rightZero]);
}

function updateFromMask(r:tp.AttentionMetaMaskedResponse, key) {
    const currPair = r[key]
    const leftZero = x_.findAllIndexes(currPair.left.text, (a) => _.includes(bpeTokens, a))
    const rightZero = x_.findAllIndexes(currPair.right.text, (a) => _.includes(bpeTokens, a))
    return new AttentionWrapper(r[key].att, [leftZero, rightZero]);
}

export function makeFromMetaResponse(r:tp.AttentionResponse, isZeroed){
    const key = 'aa' // Change this if backend response changes to be simpler
    const currPair = r[key]
    const left = <tp.FullSingleTokenInfo[]>currPair.left
    const right = <tp.FullSingleTokenInfo[]>currPair.right
    const leftZero = x_.findAllIndexes(left.map(t => t.text), (a) => _.includes(bpeTokens, a))
    const rightZero = x_.findAllIndexes(right.map(t => t.text), (a) => _.includes(bpeTokens, a))
    return new AttentionWrapper(currPair.att, [leftZero, rightZero], isZeroed)
}

export class AttentionWrapper {
    protected _att:number[][][]
    protected _attTensor:tf.Tensor3D
    protected _zeroedAttTensor:tf.Tensor3D

    badToks:[number[], number[]] // Indexes for the CLS and SEP tokens
    isZeroed: boolean
    nLayers = 12;
    nHeads = 12;

    constructor(att:number[][][], badToks:[number[], number[]]=[[],[]], isZeroed=true){
        this.init(att, badToks, isZeroed)
    }

    init(att:number[][][], badToks:[number[], number[]]=[[],[]], isZeroed) {
        this.isZeroed = isZeroed
        this._att = att;
        this._zeroedAttTensor = zeroRowCol(tf.tensor3d(att), badToks[0], badToks[1])
        this._attTensor = tf.tensor3d(att) // If I put this first, buffer modifications change this too.
        this.badToks = badToks;
    }

    updateFromMasking(r:tp.AttentionMetaMaskedResponse, isZeroed){
        const key = 'aa' // Change this if backend response changes to be simpler
        const currPair = r[key]
        const leftZero = x_.findAllIndexes(currPair.left.text, (a) => _.includes(bpeTokens, a))
        const rightZero = x_.findAllIndexes(currPair.right.text, (a) => _.includes(bpeTokens, a))
        this.init(currPair.att, [leftZero, rightZero], isZeroed)
    }

    updateFromNormal(r:tp.AttentionResponse, isZeroed){
        const key = 'aa' // Change this if backend response changes to be simpler
        const currPair = r[key]
        const left = <tp.FullSingleTokenInfo[]>currPair.left
        const right = <tp.FullSingleTokenInfo[]>currPair.right
        const leftZero = x_.findAllIndexes(left.map(t => t.text), (a) => _.includes(bpeTokens, a))
        const rightZero = x_.findAllIndexes(right.map(t => t.text), (a) => _.includes(bpeTokens, a))
        this.init(currPair.att, [leftZero, rightZero], isZeroed)
    }

    get attTensor() {
        const tens = this.isZeroed ? this._zeroedAttTensor : this._attTensor
        return tens
    }

    get att() {
        return this.attTensor.arraySync()
    }

    zeroed(): boolean
    zeroed(val:boolean): this
    zeroed(val?) {
        if (val == null) return this.isZeroed
        this.isZeroed = val
        return this
    }

    toggleZeroing() {
        this.zeroed(!this.zeroed())
    }

    protected _byHeads(heads:number[]):tf.Tensor2D {
        if (heads.length == 0) {
            return tf.zerosLike(this._byHead(0))
        }

        return (<tf.Tensor2D>this.attTensor.gather(heads, 0).sum(0))
    }

    protected _byHead(head:number):tf.Tensor2D {
        return (<tf.Tensor2D>this.attTensor.gather([head], 0).squeeze([0]))
    }

    byHeads(heads:number[]):number[][] {
        return this._byHeads(heads).arraySync()
    }

    byHead(head:number):number[][] {
        return this._byHead(head).arraySync()
    }
}

function zeroRowCol(tens:tf.Tensor3D, rows:number[], cols:number[]):tf.Tensor3D {
    let outTens = tens.clone()
    let atb = outTens.bufferSync()
    _.range(atb.shape[0]).forEach((head) => {
        _.range(atb.shape[1]).forEach((i) => {
            // Set rows to 0
            if (_.includes(rows, i)) {
                _.range(atb.shape[2]).forEach((j) => {
                    atb.set(0, head, i, j)
                })
            }

            // Set cols to 0
            _.range(atb.shape[2]).forEach((j) => {
                if (_.includes(cols, j))
                    _.range(atb.shape[1]).forEach((i) => {
                        atb.set(0, head, i, j)
                    })
            })
        })
    })

    return outTens
}