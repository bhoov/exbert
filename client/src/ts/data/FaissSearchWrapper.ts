import * as tp from '../etc/types'
import * as d3 from 'd3'
import 'd3-array'
import * as R from 'ramda'
import {SpacyInfo} from '../etc/SpacyInfo'
import {initZero} from '../etc/xramda'

// If value is not a string, don't try to make lowercase
const makeStringLower = R.ifElse(R.is(String), R.toLower, R.identity)

function argMax(array:number[]) {
  return [].map.call(array, (x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}


export class FaissSearchResultWrapper {
    data: tp.FaissSearchResults[]

    options = {
        showNext: false
    }

    constructor(data: tp.FaissSearchResults[], showNext=false) {
        this.data = data
        this.options.showNext = showNext
    }

    get matchAtt() {
        return this.showNext() ? "matched_att_plus_1" : "matched_att"
    }

    get matchIdx() {
        return this.showNext() ? "next_index" : "index"
    }

    /**
     * Add position info interpretable by the histogram
     * 
     * @param countObj Represents the inforrmation to be displayed by the histogram
     */
    countPosInfo() {
        const attOffsets = this.data.map((d,i) => +d[this.matchAtt].out.offset_to_max)

        const ctObj = {
            offset: initZero(attOffsets)
        }

        attOffsets.forEach(v => {
            Object.keys(ctObj).forEach((k) => {
                ctObj[k][v] += 1
            })
        })

        return ctObj
    }

    countMaxAttKeys(indexOffset=0) {
        // The keys in the below object dictate what we count
        const countObj = {
            pos: initZero(SpacyInfo.TotalMetaOptions.pos),
            dep: initZero(SpacyInfo.TotalMetaOptions.dep),
            is_ent: initZero(SpacyInfo.TotalMetaOptions.is_ent),
        }

        const getMaxToken = (d: tp.FaissSearchResults) => d.tokens[argMax(d[this.matchAtt].out.att)]

        this.data.forEach((d, i) => {
            const maxMatch = getMaxToken(d)

            Object.keys(countObj).forEach(k => {
                const val = makeStringLower(String(maxMatch[k]))
                countObj[k][val] += 1;
            })
        })

        const newCountObj = Object.assign(countObj, this.countPosInfo())
        return newCountObj
    }

    countMatchedKeys(indexOffset=0) {
        // The keys in the below object dictate what we count
        const countObj = {
            pos: initZero(SpacyInfo.TotalMetaOptions.pos),
            dep: initZero(SpacyInfo.TotalMetaOptions.dep),
            is_ent: initZero(SpacyInfo.TotalMetaOptions.is_ent),
        }

        this.data.forEach(d => {
            const match = d.tokens[d[this.matchIdx] + indexOffset]

            Object.keys(countObj).forEach(k => {
                const val = makeStringLower(String(match[k]))
                countObj[k][val] += 1;
            })
        })

        return countObj
    }

    getMatchedHistogram(indexOffset=0) {
        const totalHist = this.countMatchedKeys(indexOffset)
        const filterZeros = (val, key) => val != 0;
        const nonZero = R.map(R.pickBy(filterZeros), totalHist)

        return nonZero
    }

    getMaxAttHistogram() {
        // const totalHist = this.countPosInfo()
        const newHist = this.countMaxAttKeys()
        const filterZeros = (val, key) => val != 0;
        const nonZero = R.map(R.pickBy(filterZeros), newHist)

        return nonZero
    }

    showNext(): boolean
    showNext(v:boolean): this
    showNext(v?) {
        if (v == null) return this.options.showNext

        this.options.showNext = v
        return this
    }
}