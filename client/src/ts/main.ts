import { MainGraphic } from './vis/myMain'
import { BertAPI, emptyTokenDisplay } from './api/bertApi'
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
    const api = new BertAPI()
    const layers = _.range(12)

    const L = 0

    const contentHash = {}          // Map hash -> contents

    // Get the base return for all page initializations
    _.range(12).forEach(L => {
        api.getMetaAttentions(sentence, L, "", contentHash).then(r0 => {
            const tokCapsule = new TokenWrapper(r0);

            // Unmasked response:
            api.updateMaskedMetaAttentions(tokCapsule.a, L, emptyTokenDisplay, contentHash).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd)
                api.updateMaskedMetaAttentions(tokCapsule.a, L, emptyTokenDisplay, contentHash).then(r2 => {
                    // Get search results by embedding
                    const embedding = r2['aa']['left']['embeddings'][maskInd]
                    api.getNearestWozEmbeddings(embedding, L, _.range(12), 50, contentHash).then(x => {
                })

                    // Get search results by context
                    const context = r2['aa']['left']['contexts'][maskInd]
                    api.getNearestWozContexts(context, L, _.range(12), 50, contentHash).then(x => {
                        console.log(Object.keys(contentHash).length);
                        console.log(contentHash);
                    })
                })
            })
        })
    })
}

function inspectDemos(sentence, maskInd: number, outDictPath) {
    const api = new BertAPI()

    const contentHash = {}          // Map hash -> contents

    // Get the base return for all page initializations
    _.range(1).forEach(L => {
        api.getMetaAttentions(sentence, L, "").then(r0 => {
            const tokCapsule = new TokenWrapper(r0);

            // Unmasked response:
            api.updateMaskedMetaAttentions(tokCapsule.a, L, emptyTokenDisplay).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd)
                api.updateMaskedMetaAttentions(tokCapsule.a, L, emptyTokenDisplay).then(r2 => {
                    // Get search results by embedding
                    const embedding = r2['aa']['left']['embeddings'][maskInd]
                    api.getNearestWozEmbeddings(embedding, L, _.range(12), 50, contentHash).then(x => {
                })

                    // Get search results by context
                    const context = r2['aa']['left']['contexts'][maskInd]
                    api.getNearestWozContexts(context, L, _.range(12), 50).then(x => {
                        console.log(Object.keys(contentHash).length);
                        console.log(contentHash);
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
    // createDemos("The girl ran to a local pub to escape the din of her city.", 9, "")
    console.log("Done loading window");
}
