import { MainGraphic } from './vis/myMain'
import { API, emptyTokenDisplay } from './api/mainApi'
import * as _ from 'lodash'
import { TokenWrapper } from './data/TokenWrapper'
// import { Tester } from "../ts/test"

import "!file-loader?name=exBERT.html!../exBERT.html";
import "!file-loader?name=index.html!../index.html";
import "../css/main.scss"


function doMySvg() {
    return new MainGraphic()
};

/**
 * Create the static files needed for the demo. Save the keys and file paths to a json object that is then written to a file
 *
 * This will print the object after every call. When the key length is the expected length, right click in chrome and select "save as global variable"
 *
 * Then, in the console, type "copy(temp1)". Use sublime text (it is the best for handling large files) to paste this into the code and save it as ____.json
 *
 * @param sentence - The sentence to analyze
 * @param maskInd - Which index to mask in the sentence. Atm, can only record one masking
 * @param outDictPath - Where to save the object of hashkey: filepath
 */
function createDemos(sentence, maskInd: number, outDictPath) {
    const api = new API()
    const layers = _.range(12)

    const L = 0

    const contentHash = {}          // Map hash -> contents

    // Get the base return for all page initializations
    _.range(12).forEach(L => {
        api.getMetaAttentions(sentence, L, "", contentHash).then(r0 => {
            const tokCapsule = new TokenWrapper(r0);

            // Unmasked response:
            api.updateMaskedAttentions(tokCapsule.a, sentence, L, emptyTokenDisplay, "", contentHash).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd)
                api.updateMaskedAttentions(tokCapsule.a, sentence, L, emptyTokenDisplay, "", contentHash).then(r2 => {
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings
                    api.getNearestWozEmbeddings(embedding, L, _.range(12), 50, contentHash).then(x => {
                    })

                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts
                    api.getNearestWozContexts(context, L, _.range(12), 50, contentHash).then(x => {
                        console.log(Object.keys(contentHash).length);
                        console.log(contentHash);
                    })
                })
            })
        })
    })
}

/**
 * 
 * Observe how the demo creation process works.
 * 
 * If desired to mask multiple words in the input for demo purposes, try looping over the mask inds and masking each one individually
 * 
 * @param sentence The demo sentence
 * @param maskInd Desired index to mask (can currently only accept a single mask index)
 * @param outDictPath 
 */
function inspectDemos(sentence, maskInd: number, outDictPath) {
    const api = new API()

    const contentHash = {}

    // Get the base return for all page initializations
    _.range(1).forEach(L => {
        api.getMetaAttentions(sentence, L, "").then(r0 => {
            const tokCapsule = new TokenWrapper(r0);

            // Unmasked response:
            api.updateMaskedAttentions(tokCapsule.a, sentence, L, emptyTokenDisplay, "").then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd)
                api.updateMaskedAttentions(tokCapsule.a, sentence, L, emptyTokenDisplay, "").then(r2 => {
                    console.log(r2);
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings
                    api.getNearestWozEmbeddings(embedding, L, _.range(12), 50, contentHash).then(x => {
                    })

                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts
                    api.getNearestWozContexts(context, L, _.range(12), 50).then(x => {
                    })
                })
            })
        })
    })
}

function replTest() {
    // Tester.testAttWrapperConstructor()
    // Tester.testUpdateMaskedAttention()
    // Tester.testNjAray();
    // Tester.testRandomArrayCreation();
    // Tester.testFaissWrapper();
    // Tester.testD3Ordinal();
    // Tester.testFaissSearchResultsHist();
    // Tester.testReadingJSON();
}

window.onload = () => {
    doMySvg();
    // replTest();
    // createDemos("Chicken tastes absolutely delicious if you know what you're doing", 4, "")
    console.log("Done loading window");
}
