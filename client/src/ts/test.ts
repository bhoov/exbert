// import { BertAPI } from './api/bertApi'
// import { DemoAPI } from './api/demoApi'
import {API} from './api/mainApi'
import * as d3 from 'd3'
import * as R from 'ramda'
import * as _ from 'lodash'
import * as nj from 'numjs'
import * as x_ from './etc/_Tools'
import * as tf from '@tensorflow/tfjs'
import {TokenDisplay, TokenWrapper, sideToLetter} from './data/TokenWrapper'
import {AttentionWrapper} from "./data/AttentionCapsule"
import {FaissSearchResultWrapper} from "./data/FaissSearchWrapper"

const api = new API()


/**
 * To learn about the behavior of the functions that I write, without writing a professional test suite
 * (cuz time constraints / I don't know how to do a testing suite well in Typescript)
 */
export class Tester {
    // static testTf() {
    //     const a = tf.randomUniform([3,3,4]);
    //     const b = a.gather([0, 1], 0);
    //     const a_out = a.arraySync();
    //     console.log(a_out);
    // }

    // static testAttWrapperConstructor() {
    //     api.getAttentions("Simple test one", "another test two").then(r => {
    //         const att = new AttentionWrapper(r);
    //         console.log(att.all);
    //     })
    // }

    // static testNjAray() {
    //     const a = nj.ones([1,7,12], 'int32')
    //     const b = a
    //     b.slice(null, 0, 11).assign(0, false)
    //     console.log(b.tolist());
    // }

    // static testFindIdx() {
    //     const bad_toks = ['[CLS]', '[SEP]']
    //     const left_text = ['[CLS]', 'this', 'is', 'sentence', '[SEP]', '[CLS]']
    //     // const bad_inds = _.findAllIndexes(left_text, (a) => _.includes(bad_toks, a))
    //     const bad_inds = x_.findAllIndexes(left_text, (a) => _.includes(bad_toks, a))
    //     console.log(bad_inds);
    // }

    // static testUpdateMaskedAttention(){
    //     const as = 'this is a long string that has some meaning'
    //     const bs = 'String part 2'
    //     const a = ['[CLS]', 'this', 'is', 'a', 'long', 'string', 'that', 'has', 'some', 'meaning', '[SEP]']
    //     const b = ['string', 'part', '2', '[SEP]']
    //     const maskA = [1, 7, 9]
    //     const maskB = [] // CAN'T BE EMPTY

    //     const api = new BertAPI()

    //     const val1 = new TokenDisplay(a, maskA)
    //     const val2 = new TokenDisplay(b, maskB)

    //     api.updateMaskedAttentions(val1, val2).then(
    //         (r) => {
    //             console.log(r.ab.left_text);
    //             console.log(r.ab.right_text);
    //         }
    //     )
    // }

    // static testOrderedInsert() {
    //     const a = [1, 3, 6, 8, 9]
    //     const a2 = [1, 6, 8, 22, 9]
    //     const a3 = []
    //     const val = 4
    //     x_.orderedInsert_(a, val)
    //     console.log(a);

    //     x_.orderedInsert_(a2, val, true)
    //     console.log(a2);

    //     x_.orderedInsert_(a3, val)
    //     console.log(a3);
    // }

    // static testTokenDisplay() {
    //     const toksa = ['yes', 'my', 'good', 'sir']
    //     const toksb = ['hi', 'there']
    //     const masksa = []
    //     const masksb = []
    //     const td = new TokenDisplay(toksa, masksa)
    //     const td2 = new TokenDisplay(toksb, masksb)
    //     const twrap = new TokenWrapper(toksa, toksb, masksa, masksb)

    //     // console.log(twrap.a);
    //     // console.log(twrap.b);
    //     // console.log(twrap.all);
    //     // twrap.mask("a", 3)

    //     // console.log(twrap.a);
    //     // console.log(twrap.all);
    //     twrap.mask("all", 1)
    //     console.log(twrap.b);
    //     console.log(twrap.all);
    // }

    // static testFaissWrapper() {
    //     const q = x_.makeRandom(768);
    //     api.getNearestWozEmbeddings(q, 0, 10).then(
    //         r => {
    //             const fsw = new FaissSearchResultWrapper(r)
    //             console.log(fsw.toStringArr());
    //         }
    //     )
    // }

    // static testSideToLetter() {
    //     const side = "left"
    //     console.log( sideToLetter(side, "all"));
    //     console.log( sideToLetter(side, "ab"));
    //     console.log( sideToLetter(side, "ba"));
    //     console.log( sideToLetter(side, "bb"));
    //     console.log( sideToLetter(side, "aa"));
    //     console.log( sideToLetter("right", "aa"));
    //     console.log( sideToLetter("abc", "aa")); // no error thrown... But linting catches an issue
    // }

    // static testRandomArrayCreation() {
    //     console.log(x_.makeRandom(10));
    // }

    // static testFaissSearchResultsHist () {
    //     api.getNearestWozEmbeddings(x_.makeRandom(768), 0).then(val => {
    //         const fsw = new FaissSearchResultWrapper(val);
    //         console.log(fsw.getHistogram());
    //     })

    // }

    static testReadingJSON () {
        // console.log("RUNNING THE THING");
        let promise = new Promise(function(resolve, reject) {
            resolve(DemoAPI)
          })

        promise.then(x => console.log(x))
        // console.log(DemoAPI)
        // d3.json("demoAPI.json").then(d => console.log(Object.keys(d)))
    }
}
