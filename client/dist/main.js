/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./ts/main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "exBERT.html";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html":
/*!***************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./ts/api/demoAPI.ts":
/*!***************************!*\
  !*** ./ts/api/demoAPI.ts ***!
  \***************************/
/*! exports provided: DemoAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAPI", function() { return DemoAPI; });
const DemoAPI = {
    "527fdac4404bf9ba5412646ad457950d4482762c": "527fdac4404bf9ba5412646ad457950d4482762c.json",
    "59b4acc05f1d80ecbef1c23eaf2fda10222cb257": "59b4acc05f1d80ecbef1c23eaf2fda10222cb257.json",
    "354992f2ee236604c874a3a627e4042bc68586f8": "354992f2ee236604c874a3a627e4042bc68586f8.json",
    "5015e5a318605cea6808538db14d8af16887b076": "5015e5a318605cea6808538db14d8af16887b076.json",
    "3c9aa152ac894306040703c5095599b199cad1a9": "3c9aa152ac894306040703c5095599b199cad1a9.json",
    "0fece0c87203e83afd1674b5aeebaed0f5fa0562": "0fece0c87203e83afd1674b5aeebaed0f5fa0562.json",
    "d3a0e4045ea48a275ce51a6af0280406060f47cf": "d3a0e4045ea48a275ce51a6af0280406060f47cf.json",
    "ed98d751ab9b6a4a0e85e9332b420a4c13ab75a7": "ed98d751ab9b6a4a0e85e9332b420a4c13ab75a7.json",
    "0d24ae08eeb21af82c666cbe2ac0646ed9c9d9a6": "0d24ae08eeb21af82c666cbe2ac0646ed9c9d9a6.json",
    "6de053b3b8a4d904780c9a6545a0a63cbbb2b144": "6de053b3b8a4d904780c9a6545a0a63cbbb2b144.json",
    "f68df23365faf02f9c01439345bed66936ed85f7": "f68df23365faf02f9c01439345bed66936ed85f7.json",
    "4608cb4fc00b43fff68098e85676fad57c940f02": "4608cb4fc00b43fff68098e85676fad57c940f02.json",
    "dfcd50146da8d8122a5a57c2a3c0abce503ba94b": "dfcd50146da8d8122a5a57c2a3c0abce503ba94b.json",
    "34c8629d4265d7f3ede3add42f3613b205d94c1c": "34c8629d4265d7f3ede3add42f3613b205d94c1c.json",
    "db2dc252a786650f64395a0f5d181c0831019cbf": "db2dc252a786650f64395a0f5d181c0831019cbf.json",
    "da4597d73d444757bde9176395bf31aad3334131": "da4597d73d444757bde9176395bf31aad3334131.json",
    "a2ebf13d3c9371fcf738b9651824e2c3cd1ff8e0": "a2ebf13d3c9371fcf738b9651824e2c3cd1ff8e0.json",
    "bc419238c20dd1c5cfe1cc427ab3d1e31353436a": "bc419238c20dd1c5cfe1cc427ab3d1e31353436a.json",
    "84e8be9fe562fbd0487c03b55cc6b4f3fb8cd787": "84e8be9fe562fbd0487c03b55cc6b4f3fb8cd787.json",
    "207e6c98a0e149dc7e6ed67118296d8a8c89b3c3": "207e6c98a0e149dc7e6ed67118296d8a8c89b3c3.json",
    "c185a9349ba5a325acf8514e9b50de71280488aa": "c185a9349ba5a325acf8514e9b50de71280488aa.json",
    "dde481a5cd3667ae8c6c5b5e1421dc882b6a2dd6": "dde481a5cd3667ae8c6c5b5e1421dc882b6a2dd6.json",
    "f63e14e935d98948b4a0ebc9663400dbe4263348": "f63e14e935d98948b4a0ebc9663400dbe4263348.json",
    "79b964d1a5c854deaeace26813f96994bb82aef2": "79b964d1a5c854deaeace26813f96994bb82aef2.json",
    "3b1168ec96af00c4e887341e92a878f8752e1d17": "3b1168ec96af00c4e887341e92a878f8752e1d17.json",
    "8c462bc298e3183efa8d9e863e25ea5d89806b03": "8c462bc298e3183efa8d9e863e25ea5d89806b03.json",
    "9939698edaa25bbae9ee1d27864e698f13963f06": "9939698edaa25bbae9ee1d27864e698f13963f06.json",
    "73f1ee497b3e7b6394e55726b18dbf9d514dcea6": "73f1ee497b3e7b6394e55726b18dbf9d514dcea6.json",
    "c7cdb80bf813e1de241260aede6cd28ea65ccfae": "c7cdb80bf813e1de241260aede6cd28ea65ccfae.json",
    "a96fed16eab1bf6d08e4001c02894d9c549df627": "a96fed16eab1bf6d08e4001c02894d9c549df627.json",
    "a8eaf10da8dc75b42e72bdc7091776247fff9657": "a8eaf10da8dc75b42e72bdc7091776247fff9657.json",
    "a8194f2309e1c71e977ef8d3be572ae00b0e91f2": "a8194f2309e1c71e977ef8d3be572ae00b0e91f2.json",
    "2f4a15b66fcfb0c7a43a33d93763990282bfc5aa": "2f4a15b66fcfb0c7a43a33d93763990282bfc5aa.json",
    "06095cef4a7f49b18f153e67e33fddb831a15b46": "06095cef4a7f49b18f153e67e33fddb831a15b46.json",
    "4c93eaf0c0ce56f1e5d5100916abf4d31eb35da5": "4c93eaf0c0ce56f1e5d5100916abf4d31eb35da5.json",
    "f8c40c67c851a0489f7480c99b31b4f606c0184b": "f8c40c67c851a0489f7480c99b31b4f606c0184b.json",
    "e4e71f6ea57be2e05d62af0825a80f144421e02d": "e4e71f6ea57be2e05d62af0825a80f144421e02d.json",
    "e7d9d520882782c7cfbffeadaaf22b4c0a081c7c": "e7d9d520882782c7cfbffeadaaf22b4c0a081c7c.json",
    "4aa4eb10ead44a0a3c2dd95407017a928138b32b": "4aa4eb10ead44a0a3c2dd95407017a928138b32b.json",
    "da31d55ee8cb01bcdb29572cb902b8e799685be2": "da31d55ee8cb01bcdb29572cb902b8e799685be2.json",
    "e427181fb02bbf19f7bbb65c9d9389d2d9a41812": "e427181fb02bbf19f7bbb65c9d9389d2d9a41812.json",
    "bbcab9e1ca60a851fd7ecfda80de470afa740936": "bbcab9e1ca60a851fd7ecfda80de470afa740936.json",
    "4de96aa205076863c9fb4ea99e2ba86fa131ff76": "4de96aa205076863c9fb4ea99e2ba86fa131ff76.json",
    "e4c6d1b3004e3cdd0c879a59639b5ce993207a99": "e4c6d1b3004e3cdd0c879a59639b5ce993207a99.json",
    "fbc9da79b8bf39dc9998408526741f811a13e6aa": "fbc9da79b8bf39dc9998408526741f811a13e6aa.json",
    "528554ee4e615c61287c40ed9a2aea69b91af6c9": "528554ee4e615c61287c40ed9a2aea69b91af6c9.json",
    "5e7073c03c37d19826b2fb4a6599ccaedde492e4": "5e7073c03c37d19826b2fb4a6599ccaedde492e4.json",
    "71c4a886cdee58a371ae2115311b150e84e555f6": "71c4a886cdee58a371ae2115311b150e84e555f6.json",
    "4bce0970a465fe9b96305e06af19c5d9c97d7cc3": "4bce0970a465fe9b96305e06af19c5d9c97d7cc3.json",
    "efdb1f0a70f22f80ff3cea0cb79bec717fc8b6f7": "efdb1f0a70f22f80ff3cea0cb79bec717fc8b6f7.json",
    "174c6f786d139ce111381045d60d25682a168b99": "174c6f786d139ce111381045d60d25682a168b99.json",
    "a8c23e88d6ca6d4efd2646b0742c0fa32dbd55a4": "a8c23e88d6ca6d4efd2646b0742c0fa32dbd55a4.json",
    "f6949c28752de35a870efde308585acd46a25278": "f6949c28752de35a870efde308585acd46a25278.json",
    "c1bdb8cbafd5d5d8f6bda2b4db16b6bc2d62e18a": "c1bdb8cbafd5d5d8f6bda2b4db16b6bc2d62e18a.json",
    "2b81a8f602251cf40b4682c8cedb3966b912d7c6": "2b81a8f602251cf40b4682c8cedb3966b912d7c6.json",
    "8f94e843d2510047fd1af46f249afe87ff49cc2f": "8f94e843d2510047fd1af46f249afe87ff49cc2f.json",
    "4e3ddb51550c03c64fdbe5592526665100d32930": "4e3ddb51550c03c64fdbe5592526665100d32930.json",
    "f816b23af9aa4312c80e668a66a156c934cb330c": "f816b23af9aa4312c80e668a66a156c934cb330c.json",
    "2fe05a911a574b8a6d4b05eb13db9e09aaacad2d": "2fe05a911a574b8a6d4b05eb13db9e09aaacad2d.json",
    "5c71496726395aaa4d0a65373fd1651b5a0e6b1f": "5c71496726395aaa4d0a65373fd1651b5a0e6b1f.json",
};


/***/ }),

/***/ "./ts/api/mainApi.ts":
/*!***************************!*\
  !*** ./ts/api/mainApi.ts ***!
  \***************************/
/*! exports provided: emptyTokenDisplay, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyTokenDisplay", function() { return emptyTokenDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _demoAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoAPI */ "./ts/api/demoAPI.ts");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etc/apiHelpers */ "./ts/etc/apiHelpers.ts");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../etc/URLHandler */ "./ts/etc/URLHandler.ts");







const emptyTokenDisplay = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_1__["TokenDisplay"]();
const baseurl = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_6__["URLHandler"].basicURL();
/**
 * A rewrite of `d3-fetch`'s `d3.json` callback. If an api call fails, make a backup call to specified url and payload, if specified.
 *
 * @param response Object expected at time of callback
 * @param backupUrl Backup url in the event of fail
 * @param backupPayload Backup payload if making a post request
 */
function responseJson(response, backupUrl = null, backupPayload = null) {
    if (!response.ok) {
        if (backupUrl != null) {
            console.log("STATIC FILE NOT FOUND");
            return fetch(backupUrl, backupPayload).then(responseJson);
        }
        throw new Error(response.status + " " + response.statusText);
    }
    return response.json();
}
/**
 * Check first if the information being sent exists in a static demo file. If it does, send that. Otherwise, make a normal call to the server.
 *
 * @param toSend The packet of information to send to an API endpoint
 * @param backupUrl Backup url in the event that the demo file is not found
 * @param backupPayload Backup payload if demo file not found, for POST requests only
 */
function checkDemoAPI(toSend, backupUrl = null, backupPayload = null) {
    const hsh = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
    console.log("CHECKING DEMOAPI: " + hsh);
    if (_demoAPI__WEBPACK_IMPORTED_MODULE_3__["DemoAPI"].hasOwnProperty(hsh)) {
        // Relies on a symbolic link being present in the dist folder to the demo folder
        const path = './demo/' + _demoAPI__WEBPACK_IMPORTED_MODULE_3__["DemoAPI"][hsh];
        console.log("TRYING TO SENDING STATIC: ", path);
        const follow = (response) => responseJson(response, backupUrl, backupPayload);
        return fetch(path).then(follow);
    }
    return d3__WEBPACK_IMPORTED_MODULE_0__["json"](backupUrl, backupPayload);
}
class API {
    constructor(baseURL = null) {
        this.baseURL = baseURL;
        if (this.baseURL == null) {
            this.baseURL = baseurl + '/api';
        }
    }
    getMetaAttentions(sentence, layer, hashObj = null) {
        const toSend = {
            sentence: sentence,
            layer: layer
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/attend+meta", toSend);
        console.log("--- GET " + url);
        // Add hash and value to hashObj
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    /**
     * Update the display based on the information that was already parsed from the passed sentence.
     *
     * @param a The displayed tokens in the columns
     * @param sentenceA The original sentence that led to the tokenized information in `a`
     * @param layer Which layer to search at
     * @param hashObj If not null, store the information of the responses into the passed object. Used for creating demos.
     */
    updateMaskedAttentions(tokens, sentence, layer, hashObj = null) {
        const toSend = {
            tokens: ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('text'), tokens.tokenData),
            sentence: sentence,
            // Empty masks need to be sent as a number, unfortunately. Choosing -1 for this
            mask: tokens.maskInds.length ? tokens.maskInds : [-1],
            layer: layer,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/update-mask');
        const payload = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["toPayload"])(toSend);
        if (hashObj != null) {
            // Add hash and value to hashObj for demo purposes
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url, payload).then(r => {
                hashObj[key] = r;
            });
        }
        console.log("--- POST " + url, payload);
        return checkDemoAPI(toSend, url, payload);
    }
    /**
     *
     * @param embedding Embedding of the word
     * @param layer In the l'th layer
     * @param k how many results to retrieve
     */
    getNearestWozEmbeddings(embedding, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            embedding: embedding,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/woz-k-nearest-embeddings', toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    getNearestWozContexts(context, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            context: context,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/woz-k-nearest-contexts', toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
}
;


/***/ }),

/***/ "./ts/data/AttentionCapsule.ts":
/*!*************************************!*\
  !*** ./ts/data/AttentionCapsule.ts ***!
  \*************************************/
/*! exports provided: makeFromMetaResponse, AttentionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFromMetaResponse", function() { return makeFromMetaResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionWrapper", function() { return AttentionWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");



/**
 * Notes:
 *
 * - Also encapsulate the CLS/SEP info vs. no CLS/SEP info
 * - When layer format changes from list, drop the index into conf.layer
 */
const bpeTokens = ["[CLS]", "[SEP]"];
const findBadIndexes = (x) => _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](x.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
function makeFromMetaResponse(r, isZeroed) {
    const key = 'aa'; // Change this if backend response changes to be simpler
    const currPair = r[key];
    const left = currPair.left;
    const right = currPair.right;
    const leftZero = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](left.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
    const rightZero = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["findAllIndexes"](right.map(t => t.text), (a) => lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](bpeTokens, a));
    return new AttentionWrapper(currPair.att, [leftZero, rightZero], isZeroed);
}
class AttentionWrapper {
    constructor(att, badToks = [[], []], isZeroed = true) {
        this.nLayers = 12;
        this.nHeads = 12;
        this.init(att, badToks, isZeroed);
    }
    init(att, badToks = [[], []], isZeroed) {
        this.isZeroed = isZeroed;
        this._att = att;
        this._zeroedAttTensor = zeroRowCol(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor3d"](att), badToks[0], badToks[1]);
        this._attTensor = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["tensor3d"](att); // If I put this first, buffer modifications change this too.
        this.badToks = badToks;
    }
    updateFromNormal(r, isZeroed) {
        const key = 'aa'; // Change this if backend response changes to be simpler
        const currPair = r[key];
        const left = currPair.left;
        const right = currPair.right;
        const leftZero = findBadIndexes(left);
        const rightZero = findBadIndexes(right);
        this.init(currPair.att, [leftZero, rightZero], isZeroed);
    }
    get attTensor() {
        const tens = this.isZeroed ? this._zeroedAttTensor : this._attTensor;
        return tens;
    }
    get att() {
        return this.attTensor.arraySync();
    }
    zeroed(val) {
        if (val == null)
            return this.isZeroed;
        this.isZeroed = val;
        return this;
    }
    toggleZeroing() {
        this.zeroed(!this.zeroed());
    }
    _byHeads(heads) {
        if (heads.length == 0) {
            return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_2__["zerosLike"](this._byHead(0));
        }
        return this.attTensor.gather(heads, 0).sum(0);
    }
    _byHead(head) {
        return this.attTensor.gather([head], 0).squeeze([0]);
    }
    byHeads(heads) {
        return this._byHeads(heads).arraySync();
    }
    byHead(head) {
        return this._byHead(head).arraySync();
    }
}
function zeroRowCol(tens, rows, cols) {
    let outTens = tens.clone();
    let atb = outTens.bufferSync();
    lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[0]).forEach((head) => {
        lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[1]).forEach((i) => {
            // Set rows to 0
            if (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](rows, i)) {
                lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[2]).forEach((j) => {
                    atb.set(0, head, i, j);
                });
            }
            // Set cols to 0
            lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[2]).forEach((j) => {
                if (lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](cols, j))
                    lodash__WEBPACK_IMPORTED_MODULE_0__["range"](atb.shape[1]).forEach((i) => {
                        atb.set(0, head, i, j);
                    });
            });
        });
    });
    return outTens;
}


/***/ }),

/***/ "./ts/data/FaissSearchWrapper.ts":
/*!***************************************!*\
  !*** ./ts/data/FaissSearchWrapper.ts ***!
  \***************************************/
/*! exports provided: FaissSearchResultWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaissSearchResultWrapper", function() { return FaissSearchResultWrapper; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SpacyInfo */ "./ts/etc/SpacyInfo.ts");
/* harmony import */ var _etc_xramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/xramda */ "./ts/etc/xramda.ts");




// If value is not a string, don't try to make lowercase
const makeStringLower = ramda__WEBPACK_IMPORTED_MODULE_1__["ifElse"](ramda__WEBPACK_IMPORTED_MODULE_1__["is"](String), ramda__WEBPACK_IMPORTED_MODULE_1__["toLower"], ramda__WEBPACK_IMPORTED_MODULE_1__["identity"]);
function argMax(array) {
    return [].map.call(array, (x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}
const getMaxToken = (d) => d.tokens[argMax(d.matched_att.out.att)];
class FaissSearchResultWrapper {
    constructor(data) {
        this.data = data;
    }
    /**
     * Add position info interpretable by the histogram
     *
     * @param countObj Represents the inforrmation to be displayed by the histogram
     */
    countPosInfo() {
        const attOffsets = this.data.map((d, i) => +d.matched_att.out.offset_to_max);
        const ctObj = {
            offset: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(attOffsets)
        };
        attOffsets.forEach(v => {
            Object.keys(ctObj).forEach((k) => {
                ctObj[k][v] += 1;
            });
        });
        return ctObj;
    }
    countMaxAttKeys(indexOffset = 0) {
        // The keys in the below object dictate what we count
        const countObj = {
            pos: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.pos),
            dep: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.dep),
            is_ent: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.is_ent),
        };
        this.data.forEach(d => {
            const maxMatch = getMaxToken(d);
            Object.keys(countObj).forEach(k => {
                const val = makeStringLower(String(maxMatch[k]));
                countObj[k][val] += 1;
            });
        });
        const newCountObj = Object.assign(countObj, this.countPosInfo());
        return newCountObj;
    }
    countMatchedKeys(indexOffset = 0) {
        // The keys in the below object dictate what we count
        const countObj = {
            pos: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.pos),
            dep: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.dep),
            is_ent: Object(_etc_xramda__WEBPACK_IMPORTED_MODULE_3__["initZero"])(_etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_2__["SpacyInfo"].TotalMetaOptions.is_ent),
        };
        this.data.forEach(d => {
            const match = d.tokens[d.index + indexOffset];
            Object.keys(countObj).forEach(k => {
                const val = makeStringLower(String(match[k]));
                countObj[k][val] += 1;
            });
        });
        return countObj;
    }
    getMatchedHistogram(indexOffset = 0) {
        const totalHist = this.countMatchedKeys(indexOffset);
        const filterZeros = (val, key) => val != 0;
        const nonZero = ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["pickBy"](filterZeros), totalHist);
        return nonZero;
    }
    getMaxAttHistogram() {
        // const totalHist = this.countPosInfo()
        const newHist = this.countMaxAttKeys();
        const filterZeros = (val, key) => val != 0;
        const nonZero = ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["pickBy"](filterZeros), newHist);
        return nonZero;
    }
}


/***/ }),

/***/ "./ts/data/TokenWrapper.ts":
/*!*********************************!*\
  !*** ./ts/data/TokenWrapper.ts ***!
  \*********************************/
/*! exports provided: TokenDisplay, TokenWrapper, sideToLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenDisplay", function() { return TokenDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenWrapper", function() { return TokenWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideToLetter", function() { return sideToLetter; });
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



/**
 * The original tokens, and the indexes that need to be masked
 */
const emptyFullResponse = [{
        text: '[SEP]',
        embeddings: [],
        contexts: [],
        bpe_token: '',
        bpe_pos: '',
        bpe_dep: '',
        bpe_is_ent: null,
    }];
class TokenDisplay {
    constructor(tokens = emptyFullResponse, maskInds = []) {
        this.tokenData = tokens;
        this.maskInds = maskInds;
    }
    /**
     * Push idx to the mask idx list in order from smallest to largest
     */
    mask(val) {
        const currInd = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.maskInds, val);
        if (currInd == -1) {
            _etc_Tools__WEBPACK_IMPORTED_MODULE_0__["orderedInsert_"](this.maskInds, val);
        }
        else {
            console.log(`${val} already in maskInds!`);
            console.log(this.maskInds);
        }
    }
    toggle(val) {
        const currInd = lodash__WEBPACK_IMPORTED_MODULE_1__["indexOf"](this.maskInds, val);
        if (currInd == -1) {
            console.log(`Masking ${val}`);
            this.mask(val);
        }
        else {
            console.log(`Unmasking ${val}`);
            this.unmask(val);
        }
    }
    unmask(val) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["pull"](this.maskInds, val);
    }
    resetMask() {
        this.maskInds = [];
    }
    length() {
        return this.tokenData.length;
    }
    concat(other) {
        const newTokens = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](this.tokenData, other.tokenData);
        const newMask = lodash__WEBPACK_IMPORTED_MODULE_1__["concat"](this.maskInds, other.maskInds.map(x => x + this.length()));
        return new TokenDisplay(newTokens, newMask);
    }
}
class TokenWrapper {
    constructor(r) {
        this.updateFromResponse(r);
    }
    updateFromResponse(r) {
        const tokensA = r.aa.left;
        this.updateFromComponents(tokensA, []);
    }
    updateFromComponents(a, maskA) {
        this.a = new TokenDisplay(a, maskA);
    }
    updateEmbeddings(r) {
        const newTokens = r.aa.left;
        const pairs = ramda__WEBPACK_IMPORTED_MODULE_2__["zip"](this.a.tokenData, newTokens);
        pairs.forEach((d, i) => {
            d[0].embeddings = d[1].embeddings;
            d[0].contexts = d[1].contexts;
        });
    }
    /**
     * Mask the appropriate sentence at the index indicated
     */
    mask(sID, idx) {
        this[sID].mask(idx);
        const opts = ["a", "b"];
        const Na = this.a.length();
    }
}
function sideToLetter(side, atype) {
    // const atype = conf.attType;
    if (atype == "all") {
        return "all";
    }
    const out = side == "left" ? atype[0] : atype[1]; // No type checking?
    return out;
}


/***/ }),

/***/ "./ts/etc/SVGplus.ts":
/*!***************************!*\
  !*** ./ts/etc/SVGplus.ts ***!
  \***************************/
/*! exports provided: SVG, SVGMeasurements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGMeasurements", function() { return SVGMeasurements; });
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");

/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SVG {
    static translate({ x, y }) {
        return "translate(" + x + "," + y + ")";
    }
    static rotate(deg) {
        return `rotate(${deg})`;
    }
    static group(parent, classes, pos = { x: 0, y: 0 }) {
        return parent.append('g').attrs({
            class: classes,
            "transform": SVG.translate(pos)
        });
    }
}
class SVGMeasurements {
    constructor(baseElement, classes = '') {
        this.measureElement = baseElement.append('text')
            .attrs({ x: 0, y: -20, class: classes });
    }
    textLength(text, style = null) {
        this.measureElement.attr('style', style);
        this.measureElement.text(text);
        const tl = this.measureElement.node().getComputedTextLength();
        this.measureElement.text('');
        return tl;
    }
}


/***/ }),

/***/ "./ts/etc/SimpleEventHandler.ts":
/*!**************************************!*\
  !*** ./ts/etc/SimpleEventHandler.ts ***!
  \**************************************/
/*! exports provided: SimpleEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEventHandler", function() { return SimpleEventHandler; });
/**
 * Created by hen on 5/15/17.
 * Modified by hoo on 4/16/19.
 */
class SimpleEventHandler {
    constructor(element) {
        this.element = element;
        this.eventListeners = [];
    }
    bind(eventNames, eventFunction) {
        for (const eventName of eventNames.split(' ')) {
            this.eventListeners.push({ eventName, eventFunction });
            const eventFunctionWrap = e => eventFunction(e.detail, e);
            this.element.addEventListener(eventName, eventFunctionWrap, false);
        }
    }
    getListeners() {
        return this.eventListeners;
    }
    trigger(eventName, detail) {
        this.element.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}


/***/ }),

/***/ "./ts/etc/SpacyInfo.ts":
/*!*****************************!*\
  !*** ./ts/etc/SpacyInfo.ts ***!
  \*****************************/
/*! exports provided: SpacyInfo, spacyColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacyInfo", function() { return SpacyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacyColors", function() { return spacyColors; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/colors */ "./ts/etc/colors.ts");



class SpacyInfo {
    constructor() {
        this.colorScale = this.createColorScales();
    }
    createColorScales() {
        const toScale = (keys) => {
            const obj = ramda__WEBPACK_IMPORTED_MODULE_1__["zipObj"](ramda__WEBPACK_IMPORTED_MODULE_1__["map"](String, keys), _etc_colors__WEBPACK_IMPORTED_MODULE_2__["COLORS200"].slice(0, keys.length));
            return k => ramda__WEBPACK_IMPORTED_MODULE_1__["propOr"]("black", k, obj);
        };
        const myColors = {
            pos: toScale(SpacyInfo.TotalMetaOptions.pos),
            dep: toScale(SpacyInfo.TotalMetaOptions.dep),
            is_ent: toScale(SpacyInfo.TotalMetaOptions.is_ent),
            ents: toScale(SpacyInfo.TotalMetaOptions.ents),
            offset: d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]().range(['black'])
        };
        return myColors;
    }
}
SpacyInfo.EnglishMetaOptions = {
    pos: ['punct', 'sym', 'x', 'adj', 'verb', 'conj', 'num', 'et', 'adv', 'x', 'adp', 'noun', 'propn', 'part', 'pron', 'space', 'intj'],
    dep: ['root', 'ROOT', 'acl', 'acomp', 'advcl', 'advmod', 'agent', 'amod', 'appos', 'attr', 'aux', 'auxpass', 'case', 'cc', 'ccomp', 'compound', 'conj', 'cop', 'csubj',
        'csubjpass', 'dative', 'dep', 'det', 'dobj', 'expl', 'intj', 'mark', 'meta', 'neg', 'nn', 'nounmod', 'npmod', 'nsubj', 'nsubjpass', 'nummod', 'oprd',
        'obj', 'obl', 'parataxis', 'pcomp', 'pobj', 'poss', 'preconj', 'predet', 'prep', 'prt', 'punct', 'quantmod', 'relcl', 'root', 'xcomp', 'npadvmod'],
    is_ent: [true, false],
    ents: ['person', 'norp', 'fac', 'org', 'gpe', 'loc', 'product', 'event', 'work_of_art', 'law', 'language', 'date', 'time', 'percent', 'money', 'quantity', 'ordinal',
        'cardinal'],
};
/**
 * Obsolete. Represents the information that is included when trained on the universal corpus
 */
SpacyInfo.UniversalMetaOptions = {
    pos: ['adj', 'adp', 'adv', 'aux', 'conj', 'cconj', 'det', 'intj', 'noun', 'num', 'part', 'pron', 'propn', 'punct', 'sconj', 'sym', 'verb', 'x', 'space'],
    dep: ['acl', 'advcl', 'advmod', 'amod', 'appos', 'aux', 'case', 'cc', 'ccomp', 'clf', 'compound', 'conj', 'cop', 'csubj', 'dep', 'det', 'discourse',
        'dislocated', 'expl', 'fixed', 'flat', 'goeswith', 'iobj', 'list', 'mark', 'nmod', 'nsubj', 'nummod', 'obj', 'obl', 'orphan', 'parataxis', 'punct', 'reparandum',
        'root', 'vocative', 'xcomp'],
    is_ent: [true, false],
    ents: ['person', 'norp', 'fac', 'org', 'gpe', 'loc', 'product', 'event', 'work_of_art', 'law', 'language', 'date', 'time', 'percent', 'money', 'quantity', 'ordinal',
        'cardinal'],
};
SpacyInfo.TotalMetaOptions = {
    pos: ramda__WEBPACK_IMPORTED_MODULE_1__["union"](SpacyInfo.EnglishMetaOptions.pos, SpacyInfo.UniversalMetaOptions.pos),
    dep: SpacyInfo.EnglishMetaOptions.dep,
    is_ent: SpacyInfo.EnglishMetaOptions.is_ent,
    ents: SpacyInfo.EnglishMetaOptions.ents,
};
const spacyColors = new SpacyInfo();


/***/ }),

/***/ "./ts/etc/URLHandler.ts":
/*!******************************!*\
  !*** ./ts/etc/URLHandler.ts ***!
  \******************************/
/*! exports provided: URLHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLHandler", function() { return URLHandler; });
/**
 * Created by hen on 5/15/17.
 */
class URLHandler {
    static basicURL() {
        const url_path = window.location.pathname.split('/').slice(0, -2).join('/');
        return window.location.origin + (url_path.length ? url_path : '');
    }
    /**
     * Read all URL parameters into a map.
     * @returns {Map} the url parameters as a key-value store (ES6 map)
     */
    static get parameters() {
        // Adapted from:  http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
        const query = window.location.search.substring(1);
        const vars = query.split('&');
        console.log(vars, "--- vars");
        const urlParameters = {};
        const isInt = x => (/^[0-9]+$/).test(x);
        const isFloat = x => (/^[0-9]+\.[0-9]*$/).test(x);
        const typeCast = val => {
            if (isInt(val)) {
                return Number.parseInt(val, 10);
            }
            else if (isFloat(val)) {
                return Number.parseFloat(val);
            }
            // else:
            return val;
        };
        vars.forEach(v => {
            if (v.length > 0) {
                const splits = v.split('=');
                const key = decodeURIComponent(splits[0]);
                let raw_value = decodeURIComponent(splits[1]);
                const isArray = raw_value.startsWith('..');
                if (isArray) {
                    raw_value = raw_value.slice(2);
                }
                if (raw_value.length < 1) {
                    urlParameters[key] = isArray ? [] : '';
                }
                else if (isArray) {
                    urlParameters[key] = raw_value.split(',')
                        .map(val => typeCast(val));
                }
                else {
                    urlParameters[key] = typeCast(raw_value);
                }
            }
        });
        return urlParameters;
    }
    /**
     * Generates an URL string from a map of url parameters
     * @param {{}} urlParameters - the map of parameters
     * @returns {string} - an URI string
     */
    static urlString(urlParameters) {
        const attr = [];
        Object.keys(urlParameters).forEach(k => {
            const v = urlParameters[k];
            if (v !== undefined) {
                let value = v;
                if (Array.isArray(v))
                    value = '..' + v.join(',');
                attr.push(encodeURI(k + '=' + value));
            }
        });
        const url = window.location.pathname;
        let res = url.substring(url.lastIndexOf('/') + 1);
        if (attr.length > 0) {
            res += '?' + attr.join('&');
        }
        return res;
    }
    static updateURLParam(key, value, addToBrowserHistory = true) {
        const currentParams = URLHandler.parameters;
        currentParams[key] = value;
        URLHandler.updateUrl(currentParams, addToBrowserHistory);
    }
    // /**
    //  * Generates a key-value map of all URL params and replaces replaceKeys
    //  * @param updateKeys
    //  */
    // static updateURLParams(updateKeys) {
    //     const currentParams = URLHandler.parameters;
    //     Object.keys(updateKeys).forEach((k) => currentParams[k] = updateKeys[k])
    //     return currentParams;
    // }
    static updateUrl(urlParameters, addToBrowserHistory = true) {
        if (addToBrowserHistory) {
            window.history.pushState(urlParameters, '', URLHandler.urlString(urlParameters));
        }
        else {
            window.history.replaceState(urlParameters, '', URLHandler.urlString(urlParameters));
        }
    }
}


/***/ }),

/***/ "./ts/etc/Util.ts":
/*!************************!*\
  !*** ./ts/etc/Util.ts ***!
  \************************/
/*! exports provided: Util, Sel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sel", function() { return Sel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

/**
 * Created by hen on 5/15/17.
 * Modifyed by hoo on 4/16/19.
 */
let the_unique_id_counter = 0;
class Util {
    static simpleUId({ prefix = '' }) {
        the_unique_id_counter += 1;
        return prefix + the_unique_id_counter;
    }
}
/**
 * Selection utility functions should be static methods in the below class
 */
class Sel {
}
Sel.setSelVisible = (x) => x.attr("visibility", "visible");
Sel.setSelHidden = (x) => x.attr("visibility", "hidden");
Sel.setVisible = (x) => Sel.setSelVisible(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](x));
Sel.setHidden = (x) => Sel.setSelHidden(d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](x));


/***/ }),

/***/ "./ts/etc/_Tools.ts":
/*!**************************!*\
  !*** ./ts/etc/_Tools.ts ***!
  \**************************/
/*! exports provided: findAllIndexes, insertAt_, orderedInsert_, set2SortedArray, makeRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllIndexes", function() { return findAllIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAt_", function() { return insertAt_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderedInsert_", function() { return orderedInsert_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set2SortedArray", function() { return set2SortedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRandom", function() { return makeRandom; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function ascOrder(n1, n2) {
    if (n1 < n2) {
        return -1;
    }
    else if (n1 > n2) {
        return 1;
    }
    return 0;
}

/**
 * Find all indexes that match a particular predicate
 */
function findAllIndexes(array, predicate) {
    let fromIndex = 0;
    let results = [];
    let i = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](array, predicate, fromIndex);
    while (i != -1) {
        results.push(i);
        i = lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"](array, predicate, i + 1);
    }
    return results;
}
;
function insertAt_(array, val, ind) {
    array.splice(ind, 0, val);
    return array;
}
/**
 * Convert a set to an ordered array
 */
function set2SortedArray(input) {
    return Array.from(input).sort(ascOrder);
}
/**
 * Insert a value into array in sorted order IN PLACE
 *
 * WARNING: Only handles numbers, sorted from least to greatest
 * - Assumes already sorted array
 */
function orderedInsert_(array, val, coldstart = false) {
    // Resort array if desired
    if (coldstart) {
        array.sort(ascOrder);
    }
    const ind = lodash__WEBPACK_IMPORTED_MODULE_0__["sortedIndex"](array, val);
    return insertAt_(array, val, ind);
}
function makeRandom(len) {
    const a = new Array(len).fill(0);
    return a.map((x) => { return lodash__WEBPACK_IMPORTED_MODULE_0__["random"](-5, 5, true); });
}


/***/ }),

/***/ "./ts/etc/apiHelpers.ts":
/*!******************************!*\
  !*** ./ts/etc/apiHelpers.ts ***!
  \******************************/
/*! exports provided: makeUrl, toPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUrl", function() { return makeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPayload", function() { return toPayload; });
/**
 * Convert a JS object into GET URL parameters
 *
 * @param base Base URL atop which to add GET parameters
 * @param params Object to insert into a URL string
 */
function makeUrl(base, params) {
    if (params) {
        let out = base + "?";
        Object.keys(params).forEach(k => {
            out += k;
            out += '=';
            out += params[k];
            out += "&";
        });
        return out.replace(/&$/g, "");
    }
    else {
        return base;
    }
}
;
/**
 * Convert information in GET request into the message for a POST request
 */
const toPayload = (toSend) => {
    return {
        method: "POST",
        body: JSON.stringify(toSend),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };
};


/***/ }),

/***/ "./ts/etc/arrayUtils.ts":
/*!******************************!*\
  !*** ./ts/etc/arrayUtils.ts ***!
  \******************************/
/*! exports provided: sortWithIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWithIndices", function() { return sortWithIndices; });
/**
 * Copies and sorts an array while keeping track of the indices. Currently only supports sorting max -> min.
 *
 * @param arr - Array to be copied and sorted
 */
function sortWithIndices(arr, fn) {
    // If fn is not provided, default to sorting by max value
    if (!fn) {
        fn = function (left, right) {
            return left[0] > right[0] ? -1 : 1;
        };
    }
    let out = {
        arr: [],
        sortIndices: []
    };
    let idxTracker = [];
    for (let i = 0; i < arr.length; i++) {
        idxTracker[i] = [arr[i], i];
    }
    idxTracker.sort(function (left, right) {
        return left[0] > right[0] ? -1 : 1;
    });
    for (var j = 0; j < arr.length; j++) {
        out.sortIndices.push(idxTracker[j][1]);
        out.arr[j] = idxTracker[j][0];
    }
    return out;
}


/***/ }),

/***/ "./ts/etc/colors.ts":
/*!**************************!*\
  !*** ./ts/etc/colors.ts ***!
  \**************************/
/*! exports provided: COLORS200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS200", function() { return COLORS200; });
// Colors were generated to be as visually distinct as possible by: http://jnnnnn.github.io/category-colors-constrained.html
const COLORS200 = [
    "#3957ff", "#d3fe14", "#c9080a", "#fec7f8", "#0b7b3e", "#0bf0e9", "#c203c8", "#fd9b39",
    "#888593", "#906407", "#98ba7f", "#fe6794", "#10b0ff", "#ac7bff", "#fee7c0", "#964c63",
    "#1da49c", "#0ad811", "#bbd9fd", "#fe6cfe", "#297192", "#d1a09c", "#78579e", "#81ffad",
    "#739400", "#ca6949", "#d9bf01", "#646a58", "#d5097e", "#bb73a9", "#ccf6e9", "#9cb4b6",
    "#b6a7d4", "#9e8c62", "#6e83c8", "#01af64", "#a71afd", "#cfe589", "#d4ccd1", "#fd4109",
    "#bf8f0e", "#2f786e", "#4ed1a5", "#d8bb7d", "#a54509", "#6a9276", "#a4777a", "#fc12c9",
    "#606f15", "#3cc4d9", "#f31c4e", "#73616f", "#f097c6", "#fc8772", "#92a6fe", "#875b44",
    "#699ab3", "#94bc19", "#7d5bf0", "#d24dfe", "#c85b74", "#68ff57", "#b62347", "#994b91",
    "#646b8c", "#977ab4", "#d694fd", "#c4d5b5", "#fdc4bd", "#1cae05", "#7bd972", "#e9700a",
    "#d08f5d", "#8bb9e1", "#fde945", "#a29d98", "#1682fb", "#9ad9e0", "#d6cafe", "#8d8328",
    "#b091a7", "#647579", "#1f8d11", "#e7eafd", "#b9660b", "#a4a644", "#fec24c", "#b1168c",
    "#188cc1", "#7ab297", "#4468ae", "#c949a6", "#d48295", "#eb6dc2", "#d5b0cb", "#ff9ffb",
    "#fdb082", "#af4d44", "#a759c4", "#a9e03a", "#0d906b", "#9ee3bd", "#5b8846", "#0d8995",
    "#f25c58", "#70ae4f", "#847f74", "#9094bb", "#ffe2f1", "#a67149", "#936c8e", "#d04907",
    "#c3b8a6", "#cef8c4", "#7a9293", "#fda2ab", "#2ef6c5", "#807242", "#cb94cc", "#b6bdd0",
    "#b5c75d", "#fde189", "#b7ff80", "#fa2d8e", "#839a5f", "#28c2b5", "#e5e9e1", "#bc79d8",
    "#7ed8fe", "#9f20c3", "#4f7a5b", "#f511fd", "#09c959", "#bcd0ce", "#8685fd", "#98fcff",
    "#afbff9", "#6d69b4", "#5f99fd", "#aaa87e", "#b59dfb", "#5d809d", "#d9a742", "#ac5c86",
    "#9468d5", "#a4a2b2", "#b1376e", "#d43f3d", "#05a9d1", "#c38375", "#24b58e", "#6eabaf",
    "#66bf7f", "#92cbbb", "#ddb1ee", "#1be895", "#c7ecf9", "#a6baa6", "#8045cd", "#5f70f1",
    "#a9d796", "#ce62cb", "#0e954d", "#a97d2f", "#fcb8d3", "#9bfee3", "#4e8d84", "#fc6d3f",
    "#7b9fd4", "#8c6165", "#72805e", "#d53762", "#f00a1b", "#de5c97", "#8ea28b", "#fccd95",
    "#ba9c57", "#b79a82", "#7c5a82", "#7d7ca4", "#958ad6", "#cd8126", "#bdb0b7", "#10e0f8",
    "#dccc69", "#d6de0f", "#616d3d", "#985a25", "#30c7fd", "#0aeb65", "#e3cdb4", "#bd1bee",
    "#ad665d", "#d77070", "#8ea5b8", "#5b5ad0", "#76655e", "#598100", "#86757e", "#5ea068",
];


/***/ }),

/***/ "./ts/etc/types.ts":
/*!*************************!*\
  !*** ./ts/etc/types.ts ***!
  \*************************/
/*! exports provided: Toggled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggled", function() { return Toggled; });
/**
 * ATTENTION RESPONSES FROM BACKEND
 *
 * Contain the attentions and embeddings for all combinations of returns from the backend
 */
var Toggled;
(function (Toggled) {
    Toggled[Toggled["ADDED"] = 0] = "ADDED";
    Toggled[Toggled["REMOVED"] = 1] = "REMOVED";
})(Toggled || (Toggled = {}));


/***/ }),

/***/ "./ts/etc/xd3.ts":
/*!***********************!*\
  !*** ./ts/etc/xd3.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");

d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.clear = function () {
    this.selectAll('*').remove();
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggleClass = function (className) {
    this.classed(className, !this.classed(className));
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.show = function () {
    this.style('display', 'initial');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.hide = function () {
    this.style('display', 'none');
    return this;
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.toggle = function () {
    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? 'inherit' : 'none');
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.after = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this.nextSibling);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};
d3__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.before = function (tagName) {
    var elements = [];
    this.each(function () {
        var element = document.createElement(tagName);
        this.parentNode.insertBefore(element, this);
        elements.push(element);
    });
    return d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](elements);
};


/***/ }),

/***/ "./ts/etc/xramda.ts":
/*!**************************!*\
  !*** ./ts/etc/xramda.ts ***!
  \**************************/
/*! exports provided: objFromKeys, assignZero, initZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objFromKeys", function() { return objFromKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignZero", function() { return assignZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initZero", function() { return initZero; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");

/**
 * Map a list as values to an object whose keys are the original list
 */
// (String -> b)  -> [String] -> {String: b}
const objFromKeys = ramda__WEBPACK_IMPORTED_MODULE_0__["curry"]((fn, keys) => ramda__WEBPACK_IMPORTED_MODULE_0__["zipObj"](keys, ramda__WEBPACK_IMPORTED_MODULE_0__["map"](fn, keys)));
const assignZero = x => 0;
/**
 * Given an list, create an object whose values are all 0
 */
const initZero = objFromKeys(assignZero);


/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_myMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis/myMain */ "./ts/vis/myMain.ts");
/* harmony import */ var _api_mainApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/mainApi */ "./ts/api/mainApi.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var _file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-loader?name=exBERT.html!../exBERT.html */ "./node_modules/file-loader/dist/cjs.js?name=exBERT.html!./exBERT.html");
/* harmony import */ var _file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_exBERT_html_exBERT_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-loader?name=index.html!../index.html */ "./node_modules/file-loader/dist/cjs.js?name=index.html!./index.html");
/* harmony import */ var _file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_index_html_index_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_6__);




// import { Tester } from "../ts/test"



function doMySvg() {
    return new _vis_myMain__WEBPACK_IMPORTED_MODULE_0__["MainGraphic"]();
}
;
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
function createDemos(sentence, maskInd, outDictPath) {
    const api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["API"]();
    const layers = lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12);
    const L = 0;
    const contentHash = {}; // Map hash -> contents
    // Get the base return for all page initializations
    lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12).forEach(L => {
        api.getMetaAttentions(sentence, L, "", contentHash).then(r0 => {
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0);
            // Unmasked response:
            api.updateMaskedAttentions(tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"], "", contentHash).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd);
                api.updateMaskedAttentions(tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"], "", contentHash).then(r2 => {
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings;
                    api.getNearestWozEmbeddings(embedding, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                    });
                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts;
                    api.getNearestWozContexts(context, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                        console.log(Object.keys(contentHash).length);
                        console.log(contentHash);
                    });
                });
            });
        });
    });
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
function inspectDemos(sentence, maskInd, outDictPath) {
    const api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["API"]();
    const contentHash = {};
    // Get the base return for all page initializations
    lodash__WEBPACK_IMPORTED_MODULE_2__["range"](1).forEach(L => {
        api.getMetaAttentions(sentence, L, "").then(r0 => {
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0);
            // Unmasked response:
            api.updateMaskedAttentions(tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"], "").then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd);
                api.updateMaskedAttentions(tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"], "").then(r2 => {
                    console.log(r2);
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings;
                    api.getNearestWozEmbeddings(embedding, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                    });
                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts;
                    api.getNearestWozContexts(context, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50).then(x => {
                    });
                });
            });
        });
    });
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
};


/***/ }),

/***/ "./ts/uiConfig.ts":
/*!************************!*\
  !*** ./ts/uiConfig.ts ***!
  \************************/
/*! exports provided: UIConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfig", function() { return UIConfig; });
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_Tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./etc/_Tools */ "./ts/etc/_Tools.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./etc/URLHandler */ "./ts/etc/URLHandler.ts");





const falsey = val => (new Set(['false', 0, "no", false, null, ""])).has(val);
const truthy = val => !falsey(val);
const toNumber = x => +x;
class UIConfig {
    constructor(nHeads = 12) {
        this._conf = {};
        this.nHeads = nHeads;
        this.attType = 'aa'; // Don't allow this to be modified by the user.
        this.fromURL();
        this.toURL(false);
    }
    fromURL() {
        const params = _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__["URLHandler"].parameters;
        this._conf = {
            model: params['model'] || 'bert-base-cased',
            sentence: params['sentence'] || "The girl ran to a local pub to escape the din of her city.",
            corpus: params['corpus'] || 'woz',
            layer: params['layer'] || 0,
            heads: this._initHeads(params['heads']),
            threshold: params['threshold'] || 0.7,
            tokenInd: params['tokenInd'] || null,
            tokenSide: params['tokenSide'] || null,
            maskInds: params['maskInds'] || [9],
            metaMatch: params['metaMatch'] || "pos",
            metaMax: params['metaMax'] || "pos",
            displayInspector: params['displayInspector'] || null,
            offsetIdxs: this._initOffsetIdxs(params['offsetIdxs']),
            hideClsSep: truthy(params['hideClsSep']) || true,
        };
        this._token = { side: this._conf.tokenSide, ind: this._conf.tokenInd };
    }
    toURL(updateHistory = false) {
        _etc_URLHandler__WEBPACK_IMPORTED_MODULE_4__["URLHandler"].updateUrl(this._conf, updateHistory);
    }
    _initOffsetIdxs(v) {
        if (v == null) {
            return [-1, 0, 1];
        }
        else {
            const numberArr = ramda__WEBPACK_IMPORTED_MODULE_3__["map"](toNumber, v);
            return numberArr;
        }
    }
    _initHeads(v) {
        if (v == null) {
            this.selectAllHeads();
        }
        else {
            this.headSet(new Set(v))._conf.heads;
        }
        return this.heads();
    }
    toggleSelectAllHeads() {
        if (this.heads().length == 0) {
            this.selectAllHeads();
        }
        else {
            this.selectNoHeads();
        }
    }
    selectAllHeads() {
        this.headSet(new Set(lodash__WEBPACK_IMPORTED_MODULE_2__["range"](0, this.nHeads)));
    }
    selectNoHeads() {
        this.headSet(new Set([]));
    }
    toggleHead(head) {
        let out;
        if (this.headSet().has(head)) {
            this.headSet().delete(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_0__["Toggled"].REMOVED;
        }
        else {
            this.headSet().add(head);
            out = _etc_types__WEBPACK_IMPORTED_MODULE_0__["Toggled"].ADDED;
        }
        // Set through setter function to ensure url is updated
        this.headSet(this.headSet()); // I hate mutable datastructures... This is confusing.
        return out;
    }
    toggleToken(e) {
        const picker = ramda__WEBPACK_IMPORTED_MODULE_3__["pick"](['ind', 'side']);
        const compareEvent = picker(e);
        const compareToken = picker(this.token());
        if (ramda__WEBPACK_IMPORTED_MODULE_3__["equals"](compareToken, compareEvent)) {
            console.log("REMOVING TOKEN");
            this.rmToken();
        }
        else {
            this.token(e);
        }
        return this;
    }
    token(val) {
        if (val == null)
            return this._token;
        this._token = val;
        this._conf.tokenInd = val.ind;
        this._conf.tokenSide = val.side;
        this.toURL();
        return this;
    }
    rmToken() {
        this.token({ ind: null, side: null });
        return this;
    }
    sentence(val) {
        if (val == null)
            return this._conf.sentence;
        this._conf.sentence = val;
        this.toURL(true);
        return this;
    }
    threshold(val) {
        if (val == null)
            return this._conf.threshold;
        this._conf.threshold = val;
        this.toURL();
        return this;
    }
    heads() {
        return this._conf.heads;
    }
    layer(val) {
        if (val == null)
            return this._conf.layer;
        this._conf.layer = val;
        this.toURL();
        return this;
    }
    headSet(val) {
        if (val == null) {
            return this._headSet;
        }
        this._headSet = val;
        this._conf.heads = _etc_Tools__WEBPACK_IMPORTED_MODULE_1__["set2SortedArray"](this._headSet);
        this.toURL();
        return this;
    }
    metaMatch(val) {
        if (val == null)
            return this._conf.metaMax;
        this._conf.metaMax = val;
        this.toURL();
        return this;
    }
    metaMax(val) {
        if (val == null)
            return this._conf.metaMatch;
        this._conf.metaMatch = val;
        this.toURL();
        return this;
    }
    maskInds(val) {
        if (val == null)
            return this._conf.maskInds;
        this._conf.maskInds = val;
        this.toURL();
        return this;
    }
    displayInspector(val) {
        if (val == null)
            return this._conf.displayInspector;
        this._conf.displayInspector = val;
        this.toURL();
        return this;
    }
    offsetIdxs(val) {
        if (val == null)
            return this._conf.offsetIdxs;
        // convert to numbers
        this._conf.offsetIdxs = ramda__WEBPACK_IMPORTED_MODULE_3__["map"](toNumber, val);
        this.toURL();
        return this;
    }
    hideClsSep(val) {
        if (val == null)
            return this._conf.hideClsSep;
        this._conf.hideClsSep = truthy(val);
        this.toURL();
        return this;
    }
    model(val) {
        if (val == null)
            return this._conf.model;
        this._conf.model = val;
        this.toURL();
        return this;
    }
    corpus(val) {
        if (val == null)
            return this._conf.corpus;
        this._conf.corpus = val;
        this.toURL();
        return this;
    }
}


/***/ }),

/***/ "./ts/vis/AttentionConnector.ts":
/*!**************************************!*\
  !*** ./ts/vis/AttentionConnector.ts ***!
  \**************************************/
/*! exports provided: AttentionGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionGraph", function() { return AttentionGraph; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
/* harmony import */ var _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeConnector */ "./ts/vis/EdgeConnector.ts");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _FormatUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatUtils */ "./ts/vis/FormatUtils.ts");





class AttentionGraph extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        // OPTIONS WITH DEFAULTS
        this._threshold = 0.7; // Accumulation threshold. Between 0-1
        this.normByGroup = false; // Whether to normalize connection width by src-group or not
        this.options = {
            boxheight: 26,
            height: 500,
            width: 200,
        };
        /**
         * Rerender the graph in the event that the data changes
         */
        this.updateData = () => {
            if (this.graph != null) {
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](".atn-curve").remove();
                this.paths = this.graph
                    .data(this.plotData)
                    .join('path');
                this.createConnections();
                this.updateOpacity();
                return this;
            }
        };
        /**
         * Scale the opacity according to the values of the data, from 0 to max of contained data
         * Normalize by each source target, or across the whole
         */
        this.createScales = () => {
            this.opacityScales = [];
            // Group normalization
            if (this.normByGroup) {
                const arr = this.edgeData.extent(1);
                this.opacityScales = [];
                arr.forEach((v, i) => {
                    this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                        .domain([0, v[1]])
                        .range([0, 0.9]));
                });
            }
            // Normalization across the whole
            else {
                const maxIn = d3__WEBPACK_IMPORTED_MODULE_0__["max"](this.plotData.map((d) => d.v));
                for (let i = 0; i < this._data.length; i++) {
                    this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                        .domain([0, maxIn])
                        .range([0, 1]));
                }
            }
        };
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.svg = this.parent;
        this.graph = this.svg.selectAll(`.atn-curve`);
        this.linkGen = d3__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"]()
            .x(d => d[0])
            .y(d => d[1]);
    }
    /**
     * Create connections between locations of the SVG using D3's linkGen
     */
    createConnections() {
        const op = this.options;
        if (this.paths) {
            this.paths.attrs({
                'd': (d, i) => {
                    const data = {
                        source: [0, op.boxheight * (d.i + 0.5)],
                        target: [op.width, op.boxheight * (d.j + 0.5)] // + 2 allows small offset
                    };
                    return this.linkGen(data);
                },
                'class': 'atn-curve'
            })
                .attr("src-idx", (d, i) => d.i)
                .attr("target-idx", (d, i) => d.j);
        }
    }
    /**
     * Change the height of the SVG
     */
    updateHeight() {
        if (this.svg != null) {
            this.svg.attr("height", this.options.height);
        }
        return this;
    }
    /**
     * Change the width of the SVG
     */
    updateWidth() {
        if (this.svg != null) {
            this.svg.attr("width", this.options.width);
        }
        return this;
    }
    /**
     * Change the Opacity of the lines according to the value of the data
     */
    updateOpacity() {
        if (this.paths != null) {
            // paths.transition().duration(500).attr('opacity', (d) => {
            this.paths.attr('opacity', (d) => {
                const val = this.opacityScales[d.i](d.v);
                return val;
            });
            this.paths.attr('stroke-width', (d) => {
                const val = this.opacityScales[d.i](d.v);
                return Object(_FormatUtils__WEBPACK_IMPORTED_MODULE_4__["scaleLinearWidth"])(val); //5 * val^0.33;
            });
        }
        return this;
    }
    data(value) {
        if (value == null) {
            return this._data;
        }
        this._data = value;
        this.edgeData = new _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__["EdgeData"](value);
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }
    height(value) {
        if (value == null) {
            return this.options.height;
        }
        this.options.height = value;
        this.updateHeight();
        return this;
    }
    width(value) {
        if (value == null) {
            return this.options.width;
        }
        this.options.width = value;
        this.updateWidth();
        return this;
    }
    threshold(value) {
        if (value == null) {
            return this._threshold;
        }
        this._threshold = value;
        this.plotData = this.edgeData.format(this._threshold);
        this.createScales();
        this.updateData();
        return this;
    }
    _wrangle(data) {
        return data;
    }
    _render(data) {
        this.svg.html('');
        this.updateHeight();
        this.updateWidth();
        this.updateData();
        return this;
    }
}
AttentionGraph.events = {}; // No events needed for this one


/***/ }),

/***/ "./ts/vis/AttentionHeadBox.ts":
/*!************************************!*\
  !*** ./ts/vis/AttentionHeadBox.ts ***!
  \************************************/
/*! exports provided: getAttentionInfo, AttentionHeadBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttentionInfo", function() { return getAttentionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionHeadBox", function() { return AttentionHeadBox; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");




/**
 * From an attention matrix selected by layer, show a summary of the attentions belonging to each head.
 *
 * @param headMat The matrix representing all the attentions by head (layer already selected)
 * @param headList The heads that are selected
 * @param side Is this the right or the left display?
 * @returns Information needed to label the headbox
 */
function getAttentionInfo(headMat, headList, side = "left") {
    // Collect only from headlist, average each head, transpose to ease iteration
    if (headList.length == 0) {
        return {
            rows: [[]],
            labels: [],
            max: 0,
        };
    }
    let axis = side == "left" ? 2 : 1;
    // average across the axis representing the attentions.
    let gatheredMat = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor3d"](headMat).gather(headList, 0).mean([axis]).transpose();
    const rowInfo = gatheredMat.arraySync();
    const out = {
        rows: rowInfo,
        labels: headList,
        max: gatheredMat.max().arraySync(),
    };
    return out;
}
;
class AttentionHeadBox extends _VisComponent__WEBPACK_IMPORTED_MODULE_1__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        this.rowCssName = 'att-head';
        this.boxCssName = 'att-rect';
        this._current = {};
        this.options = {
            boxDim: 26,
            yscale: 1,
            xscale: 0.5,
            side: "left",
        };
        this.superInitSVG(options);
        this._init();
    }
    _init() {
        this.headRows = this.base.selectAll(`.${this.rowCssName}`);
        this.headCells = this.headRows.selectAll(`${this.boxCssName}`);
        this.opacityScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]().range([0, 1]);
    }
    updateCurrent() {
        const op = this.options;
        const cur = this._current;
        cur.headHeight = op.boxDim * op.yscale;
        cur.headWidth = op.boxDim * op.xscale;
        cur.xPad = cur.headWidth;
        cur.yPad = (op.boxDim - cur.headHeight) / 2;
        cur.boxWidth = (this._data.rows[0].length * cur.headWidth);
        cur.totalWidth = (2 * cur.xPad) + cur.boxWidth;
        cur.totalHeight = (op.boxDim * this._data.rows.length);
        return this._current;
    }
    updateData() {
        const op = this.options;
        const self = this;
        const boxEvent = (i) => { return { ind: i, side: op.side, head: self._data.labels[i] }; };
        const cur = this.updateCurrent();
        this.base.html('');
        this.parent
            .attr("width", cur.totalWidth)
            .attr("height", cur.totalHeight);
        this.headRows = this.base.selectAll(`.${self.rowCssName}`)
            .data(self._data.rows)
            .join("g")
            .attrs({
            class: (d, i) => `${self.rowCssName} ${self.rowCssName}-${i}`,
            transform: (d, i) => {
                return _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({
                    x: cur.xPad,
                    y: op.boxDim * i + cur.yPad,
                });
            },
            width: cur.boxWidth,
            height: cur.headHeight,
        })
            .on("mouseover", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOver, { ind: i, side: op.side });
        })
            .on("mouseout", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.rowMouseOut, { ind: i, side: op.side });
        });
        this.headCells = this.headRows
            .selectAll(`${this.boxCssName}`)
            .data(d => d)
            .join('rect')
            .attrs({
            x: (d, i) => i * cur.headWidth,
            y: 0,
            class: this.boxCssName,
            head: (d, i) => self._data.labels[i],
            width: cur.headWidth,
            height: cur.headHeight,
            opacity: (d) => this.opacityScale(d),
            fill: "blue"
        })
            .on("mouseover", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOver, boxEvent(i));
        })
            .on("mouseout", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseOut, boxEvent(i));
        })
            .on("click", (d, i) => {
            self.eventHandler.trigger(AttentionHeadBox.events.boxClick, boxEvent(i));
        })
            .append("svg:title")
            .text((d, i) => "Head " + self._data.labels[i]);
    }
    _wrangle(data) {
        this._data = data;
        this.opacityScale = this.opacityScale.domain([0, data.max]);
        return data;
    }
    _render(data) {
        this.updateData();
    }
}
AttentionHeadBox.events = {
    rowMouseOver: "AttentionHeadBox_RowMouseOver",
    rowMouseOut: "AttentionHeadBox_RowMouseOut",
    boxMouseOver: "AttentionHeadBox_BoxMouseOver",
    boxMouseOut: "AttentionHeadBox_BoxMouseOut",
    boxClick: "AttentionHeadBox_BoxClick",
};


/***/ }),

/***/ "./ts/vis/CorpusHistogram.ts":
/*!***********************************!*\
  !*** ./ts/vis/CorpusHistogram.ts ***!
  \***********************************/
/*! exports provided: CorpusHistogram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpusHistogram", function() { return CorpusHistogram; });
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/SpacyInfo */ "./ts/etc/SpacyInfo.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");





/**
 *  Data formatting functions
 */
const toRenderData = (obj) => Object.keys(obj).map((k, i) => {
    return { label: k, count: obj[k] };
});
const toStringOrNum = (a) => {
    const na = +a;
    if (isNaN(na)) {
        return a;
    }
    return na;
};
const sortByLabel = ramda__WEBPACK_IMPORTED_MODULE_4__["sortBy"](ramda__WEBPACK_IMPORTED_MODULE_4__["compose"](toStringOrNum, ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('label')));
const sortByCount = ramda__WEBPACK_IMPORTED_MODULE_4__["sortBy"](ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('count'));
const toOrderedRender = ramda__WEBPACK_IMPORTED_MODULE_4__["compose"](ramda__WEBPACK_IMPORTED_MODULE_4__["reverse"], 
// @ts-ignore -- TODO: fix
sortByCount, toRenderData);
class CorpusHistogram extends _VisComponent__WEBPACK_IMPORTED_MODULE_0__["VComponent"] {
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler);
        this.css_name = '';
        this._current = {
            chart: {
                height: null,
                width: null
            }
        };
        this.axes = {
            x: d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"](),
            y: d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"](),
        };
        this.options = {
            margin: {
                top: 10,
                right: 30,
                bottom: 30,
                left: 40
            },
            barWidth: 25,
            width: 185,
            height: 200,
            val: "pos",
            xLabelRot: 45,
            xLabelOffset: 15,
            yLabelOffset: 5,
        };
        this.superInitSVG();
    }
    meta(val) {
        if (val == null) {
            return this.options.val;
        }
        this.options.val = val;
        this.update(this._data);
        return this;
    }
    _init() { }
    createXAxis() {
        const self = this;
        const op = this.options;
        const width = op.width - op.margin.left - op.margin.right;
        this.axes.x
            .domain(ramda__WEBPACK_IMPORTED_MODULE_4__["map"](ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('label'), self.renderData))
            .rangeRound([0, width])
            .padding(0.1);
        this._current.chart.width = width;
    }
    createYAxis() {
        const self = this;
        const op = this.options;
        const height = op.height - op.margin.top - op.margin.bottom;
        this.axes.y
            .domain([0, +d3__WEBPACK_IMPORTED_MODULE_3__["max"](ramda__WEBPACK_IMPORTED_MODULE_4__["map"](ramda__WEBPACK_IMPORTED_MODULE_4__["prop"]('count'), self.renderData))])
            .rangeRound([height, 0]);
        this._current.chart.height = height;
    }
    createAxes() {
        this.createXAxis();
        this.createYAxis();
    }
    _wrangle(data) {
        const out = data[this.options.val];
        return toOrderedRender(out);
    }
    width(val) {
        if (val == null) {
            return this.options.width;
        }
        this.options.width = val;
        this.updateWidth();
        this.createXAxis();
        return this;
    }
    height(val) {
        if (val == null) {
            return this.options.height;
        }
        this.options.height = val;
        this.updateHeight();
        this.createYAxis();
        return this;
    }
    updateWidth() {
        this.svg.attr('width', this.options.width);
    }
    updateHeight() {
        this.svg.attr('height', this.options.height);
    }
    figWidth(data) {
        const op = this.options;
        return (data.length * op.barWidth) + op.margin.left + op.margin.right;
    }
    _render(data) {
        const self = this;
        const op = this.options;
        const curr = this._current;
        this.parent.html('');
        this.svg = this.parent;
        this.createAxes();
        this.width(this.figWidth(data));
        this.updateHeight();
        // Initialize axes
        const g = self.svg.append("g")
            .attr("transform", _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({ x: op.margin.left, y: op.margin.top }));
        // Hack to allow clearing this histograms to work
        self.base = g;
        // Fix below for positional changing
        const axisBottom = g.append("g")
            .attr("transform", _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].translate({ x: 0, y: curr.chart.height }))
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](self.axes.x));
        if (op.val != "offset") {
            axisBottom
                .selectAll("text")
                .attr("y", op.yLabelOffset) // Move below the axis
                .attr("x", op.xLabelOffset) // Offset to the right a bit
                .attr("transform", _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].rotate(op.xLabelRot));
        }
        g.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](self.axes.y));
        g.selectAll(".bar")
            .data(data)
            .join('rect')
            .attr("class", "bar")
            .attr("x", function (d) { return self.axes.x(d.label); })
            .attr("y", function (d) { return self.axes.y(d.count); })
            .attr("width", self.axes.x.bandwidth())
            .attr("height", function (d) { return curr.chart.height - self.axes.y(d.count); })
            .style('fill', k => _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_1__["spacyColors"].colorScale[op.val](k.label));
    }
}
CorpusHistogram.events = {};


/***/ }),

/***/ "./ts/vis/CorpusInspector.ts":
/*!***********************************!*\
  !*** ./ts/vis/CorpusInspector.ts ***!
  \***********************************/
/*! exports provided: CorpusInspector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpusInspector", function() { return CorpusInspector; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");




// Helpers
const currMatchIdx = (elem) => +elem.parentNode.getAttribute('matchidx');
const currRowNum = (elem) => +elem.parentNode.getAttribute('rownum');
const backgroundColor = x => `rgba(0, 0, 255, ${0.6 * x})`;
class CorpusInspector extends _VisComponent__WEBPACK_IMPORTED_MODULE_2__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'corpus-inspector';
        this.options = {};
        this.scaler = d3__WEBPACK_IMPORTED_MODULE_0__["scalePow"]().range([0, 0.9]).exponent(2);
        this.superInitHTML(options);
        this._init();
    }
    createRows() {
        const data = this._data;
        this.inspectorRows = this.base.selectAll(".inspector-row")
            .data(data)
            .join('div')
            .classed('inspector-row', true)
            .attrs({
            matchIdx: d => d.index,
            rowNum: (d, i) => i,
        })
            .on("mouseover", (d, i) => {
            this.eventHandler.trigger(CorpusInspector.events.rowMouseOver, {});
        });
    }
    addTooltip() {
        this.inspectorCells = this.inspectorCells
            .classed('celltooltip', true)
            .append('span')
            .classed('tooltiptext', true)
            .html((d, i, n) => {
            const entityStr = d.is_ent ? "<br>Entity" : "";
            const att = n[i].parentNode.getAttribute('att').slice(0, 7);
            const attStr = `<br>Attention: ${att}`;
            return `POS: ${d.pos.toLowerCase()}<br>DEP: ${d.dep.toLowerCase()}` + entityStr + attStr;
        });
    }
    createCells() {
        const self = this;
        this.inspectorCells = this.inspectorRows.selectAll('.inspector-cell')
            .data((d) => d.tokens)
            .join('div')
            .classed('inspector-cell', true)
            .attr('index-offset', (d, i, n) => {
            const matchIdx = currMatchIdx(n[i]);
            return i - matchIdx;
        })
            .attrs({
            pos: d => d.pos.toLowerCase(),
            dep: d => d.dep.toLowerCase(),
            is_ent: d => d.is_ent
        })
            .text(d => d.token.replace("\u0120", " "))
            .classed('matched-cell', d => d.is_match);
        // Highlight the cells appropriately
        this.inspectorCells.each((d, i, n) => {
            const idx = currMatchIdx(n[i]);
            if (i == idx) {
                const att = d.inward;
                const maxAtt = +d3__WEBPACK_IMPORTED_MODULE_0__["max"](att);
                const currRow = currRowNum(n[i]);
                const scaler = self.scaler.domain([0, maxAtt]);
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.inspector-row[rownum='${currRow}']`)
                    .selectAll(`.inspector-cell`)
                    .style('background', (d, i) => {
                    return backgroundColor(scaler(att[i]));
                })
                    .attr('att', (d, i) => att[i]);
            }
        });
        self.addTooltip();
    }
    updateData() {
        this.createRows();
        this.createCells();
    }
    _init() { }
    _wrangle(data) {
        this._data = data;
        return data;
    }
    _render(data) {
        // Remember that this._data is defined in wrangle which should always be called before render
        // as is defined in the update function
        this.updateData();
    }
}
CorpusInspector.events = {
    rowMouseOver: "CorpusInspector_rowMouseOver",
    rowMouseOut: "CorpusInspector_rowMouseOut",
    rowClick: "CorpusInspector_rowClick",
    rowDblClick: "CorpusInspector_rowDblClick",
    cellMouseOver: "CorpusInspector_cellMouseOver",
    cellMouseOut: "CorpusInspector_cellMouseOut",
    cellClick: "CorpusInspector_cellClick",
    cellDblClick: "CorpusInspector_cellDblClick",
};


/***/ }),

/***/ "./ts/vis/CorpusMatManager.ts":
/*!************************************!*\
  !*** ./ts/vis/CorpusMatManager.ts ***!
  \************************************/
/*! exports provided: CorpusMatManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorpusMatManager", function() { return CorpusMatManager; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _vis_VisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vis/VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");
/* harmony import */ var _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/SpacyInfo */ "./ts/etc/SpacyInfo.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");






function managerData2MatData(dataIn, indexOffset = 0, toPick = ['pos']) {
    const outOfRangeObj = {
        pos: null,
        dep: null,
        is_ent: null,
        token: null,
    };
    const chooseProps = ramda__WEBPACK_IMPORTED_MODULE_1__["pick"](toPick);
    const dataOut = dataIn.map(d => {
        const wordIdx = d.index + indexOffset;
        if ((wordIdx < 0) || (wordIdx >= d.tokens.length)) {
            return ramda__WEBPACK_IMPORTED_MODULE_1__["assoc"]('height', d.height, outOfRangeObj);
        }
        const newObj = chooseProps(d.tokens[wordIdx]);
        return ramda__WEBPACK_IMPORTED_MODULE_1__["assoc"]('height', d.height, newObj);
    });
    return dataOut;
}
class CorpusMatManager extends _vis_VisComponent__WEBPACK_IMPORTED_MODULE_2__["VComponent"] {
    // Selections
    constructor(d3parent, eventHandler, options = {}) {
        super(d3parent, eventHandler);
        this.css_name = 'corpus-mat-container';
        this.options = {
            cellWidth: 10,
            toPick: ['pos'],
            idxs: [-1, 0, 1],
            divHover: {
                width: 60,
                height: 40
            }
        };
        this._current = {};
        this.rowCssName = 'index-match-results';
        this.cellCssName = 'index-cell-result';
        this.idxs = [-1, 0, 1];
        this.superInitHTML(options);
        this._init();
    }
    get idxs() {
        return this.options.idxs;
    }
    set idxs(val) {
        this.options.idxs = val;
    }
    // Create static dom elements
    _init() {
        const self = this;
        this.corpusMats = this.base.selectAll('.corpus-mat');
        this.rowGroups = this.corpusMats.selectAll(`.${this.rowCssName}`);
        this.divHover = this.base.append('div')
            .classed('mat-hover-display', true)
            .classed('text-center', true)
            .style('width', String(this.options.divHover.width) + 'px')
            .style('height', String(this.options.divHover.height) + 'px');
        this.divHover.append('p');
    }
    pick(val) {
        this.options.toPick = [val];
        this.redraw();
    }
    addRight() {
        const addedIdx = ramda__WEBPACK_IMPORTED_MODULE_1__["last"](this.idxs) + 1;
        this.idxs.push(addedIdx);
        this.addCorpusMat(addedIdx, "right");
    }
    addLeft() {
        const addedIdx = this.idxs[0] - 1;
        const addDecrementedHead = x => ramda__WEBPACK_IMPORTED_MODULE_1__["insert"](0, ramda__WEBPACK_IMPORTED_MODULE_1__["head"](x) - 1)(x);
        this.idxs = addDecrementedHead(this.idxs);
        this.addCorpusMat(addedIdx, "left");
    }
    killRight() {
        this.kill(Math.max(...this.idxs));
    }
    killLeft() {
        this.kill(Math.min(...this.idxs));
    }
    /**
     * Remove edge value from contained indexes
     *
     * @param d Index to remove
     */
    kill(d) {
        if (d != 0) {
            if (d == Math.min(...this.idxs) || d == Math.max(...this.idxs)) {
                this.idxs = ramda__WEBPACK_IMPORTED_MODULE_1__["without"]([d], this.idxs);
                this.base.selectAll(`.offset-${d}`).remove();
            }
        }
    }
    _wrangle(data) {
        return data;
    }
    data(val) {
        if (val == null) {
            return this._data;
        }
        this._data = val;
        this._updateData();
        return this;
    }
    /**
     * The main rendering code, called whenever the data changes.
     */
    _updateData() {
        const self = this;
        const op = this.options;
        this.base.selectAll('.corpus-mat').remove();
        this.idxs.forEach((idxOffset, i) => {
            self.addCorpusMat(idxOffset);
        });
    }
    /**
     * Add another word's meta information matrix column to either side of the index
     *
     * @param idxOffset Distance of word from matched word in the sentence
     * @param toThe Indicates adding to the "left" or to the "right" of the index
     */
    addCorpusMat(idxOffset, toThe = "right") {
        const self = this;
        const op = this.options;
        const boxWidth = op.cellWidth * op.toPick.length;
        const boxHeight = ramda__WEBPACK_IMPORTED_MODULE_1__["sum"](ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["prop"]('height'), this._data));
        let corpusMat;
        if (toThe == "right") {
            corpusMat = this.base.append('div');
        }
        else if (toThe == "left") {
            corpusMat = this.base.insert('div', ":first-child");
        }
        else {
            throw Error("toThe must have argument of 'left' or 'right'");
        }
        corpusMat = corpusMat
            .data([idxOffset])
            .attr('class', `corpus-mat offset-${idxOffset}`)
            .attr('offset', idxOffset)
            .append('svg')
            .attrs({
            width: boxWidth,
            height: boxHeight,
        })
            .on('mouseover', function (d, i) {
            self.eventHandler.trigger(CorpusMatManager.events.mouseOver, { idx: i, offset: d, val: self.options.toPick[0] });
        })
            .on('mouseout', (d, i) => {
            this.eventHandler.trigger(CorpusMatManager.events.mouseOut, { idx: i, offset: d });
        });
        this.addRowGroup(corpusMat);
    }
    /**
     *
     * @param mat The base div on which to add matrices and rows
     */
    addRowGroup(mat) {
        const self = this;
        const op = this.options;
        const heights = ramda__WEBPACK_IMPORTED_MODULE_1__["map"](ramda__WEBPACK_IMPORTED_MODULE_1__["prop"]('height'), this._data);
        const [heightSum, rawHeightList] = ramda__WEBPACK_IMPORTED_MODULE_1__["mapAccum"]((x, y) => [ramda__WEBPACK_IMPORTED_MODULE_1__["add"](x, y), ramda__WEBPACK_IMPORTED_MODULE_1__["add"](x, y)], 0, heights);
        const fixList = ramda__WEBPACK_IMPORTED_MODULE_1__["compose"](ramda__WEBPACK_IMPORTED_MODULE_1__["dropLast"](1), 
        // @ts-ignore
        ramda__WEBPACK_IMPORTED_MODULE_1__["prepend"](0));
        const heightList = fixList(rawHeightList);
        const rowGroup = mat.selectAll(`.${self.rowCssName}`)
            .data(d => managerData2MatData(self._data, d, op.toPick))
            .join("g")
            .attr("class", (d, i) => {
            return `${self.rowCssName} ${self.rowCssName}-${i}`;
        })
            .attr("row-num", (d, i) => i)
            .attr("height", d => d.height)
            .attr("transform", (d, i) => {
            const out = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate({
                x: 0,
                y: heightList[i],
            });
            return out;
        });
        op.toPick.forEach(prop => {
            self.addRect(rowGroup, 0, prop);
        });
    }
    addRect(g, xShift, prop) {
        const self = this;
        const op = this.options;
        const rects = g.append('rect')
            .attrs({
            width: op.cellWidth,
            height: d => d.height - 3,
            transform: (d, i) => {
                return _etc_SVGplus__WEBPACK_IMPORTED_MODULE_3__["SVG"].translate({
                    x: xShift,
                    y: 1.5,
                });
            },
        })
            .style('fill', d => CorpusMatManager.colorScale[prop](d[prop]));
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        g.on('mouseover', function (d, i) {
            self.divHover.style('visibility', 'visible');
            // Get offset
            const col = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.parentNode.parentNode); // Column
            const offset = +col.attr('offset');
            self.eventHandler.trigger(CorpusMatManager.events.rectMouseOver, { idx: i, offset: offset });
        })
            .on('mouseout', function (d, i) {
            self.divHover.style('visibility', 'hidden');
            const col = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.parentNode.parentNode); // Column
            const offset = +col.attr('offset');
            self.eventHandler.trigger(CorpusMatManager.events.rectMouseOut, { idx: i, offset: offset });
        })
            .on('mousemove', function (d, i) {
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
            const divOffset = [3, 3];
            const left = mouse[0] + getBaseX() - (op.divHover.width + divOffset[0]);
            const top = mouse[1] + getBaseY() - (op.divHover.height + divOffset[1]);
            self.divHover
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .selectAll('p')
                .text(d[prop]);
        });
    }
    /**
     * @param data Data to display
     */
    _render(data) {
        this._updateData();
    }
}
CorpusMatManager.events = {
    mouseOver: "CorpusMatManager_MouseOver",
    mouseOut: "CorpusMatManager_MouseOut",
    click: "CorpusMatManager_Click",
    dblClick: "CorpusMatManager_DblClick",
    rectMouseOver: "CorpusMatManager_RectMouseOver",
    rectMouseOut: "CorpusMatManager_RectMouseOut",
    rectClick: "CorpusMatManager_RectClick",
    rectDblClick: "CorpusMatManager_RectDblClick",
};
CorpusMatManager.colorScale = _etc_SpacyInfo__WEBPACK_IMPORTED_MODULE_4__["spacyColors"].colorScale;


/***/ }),

/***/ "./ts/vis/EdgeConnector.ts":
/*!*********************************!*\
  !*** ./ts/vis/EdgeConnector.ts ***!
  \*********************************/
/*! exports provided: toEdges, EdgeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEdges", function() { return toEdges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeData", function() { return EdgeData; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _etc_arrayUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/arrayUtils */ "./ts/etc/arrayUtils.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");




/**
 * Convert data matrix to necessary data array to pass to SVG connections
 */
function toEdges(data, cutoffAmt = 1) {
    let outArr = [];
    let cutoff;
    data.forEach((row, i) => {
        cutoff = cutoffAmt * d3__WEBPACK_IMPORTED_MODULE_0__["sum"](row);
        let counter = 0;
        const sortedArr = _etc_arrayUtils__WEBPACK_IMPORTED_MODULE_2__["sortWithIndices"](row);
        sortedArr.arr.forEach((v, j) => {
            if (counter < cutoff) {
                const obj = {
                    i: i,
                    j: sortedArr.sortIndices[j],
                    v: v,
                };
                outArr.push(obj);
                counter += v;
            }
        });
    });
    return outArr;
}
/**
 * Class for implementing operations on AttentionGraph implementation.
 * Closely tied to [[AttentionConnector]]
 */
class EdgeData {
    constructor(data) {
        this.data = data;
        this.tensData = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor"](data);
    }
    min(axis) {
        return this.tensData.min(axis).dataSync();
    }
    max(axis) {
        return this.tensData.max(axis).dataSync();
    }
    extent(axis) {
        return d3__WEBPACK_IMPORTED_MODULE_0__["zip"](this.min(axis), this.max(axis));
    }
    /**
     * Format the data to send to SVG chart.
     *
     * @param accumulateThresh - A float between 0 and 1, indicating the amount of weight to display. Defaults to 0.7.
     */
    format(accumulateThresh = 0.7) {
        return toEdges(this.data, accumulateThresh);
    }
}


/***/ }),

/***/ "./ts/vis/FormatUtils.ts":
/*!*******************************!*\
  !*** ./ts/vis/FormatUtils.ts ***!
  \*******************************/
/*! exports provided: scaleLinearWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinearWidth", function() { return scaleLinearWidth; });
const scaleLinearWidth = opacity => 5 * opacity ^ 0.33;


/***/ }),

/***/ "./ts/vis/TextToken.ts":
/*!*****************************!*\
  !*** ./ts/vis/TextToken.ts ***!
  \*****************************/
/*! exports provided: TextTokens, LeftTextToken, RightTextToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTokens", function() { return TextTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTextToken", function() { return LeftTextToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTextToken", function() { return RightTextToken; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");



class TextTokens extends _VisComponent__WEBPACK_IMPORTED_MODULE_2__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.eInfo = (i) => { return { side: this.side, ind: i }; };
        this.eEmbedding = (i, embed) => { return { side: this.side, ind: i, embeddings: embed }; };
        this.options = {
            boxheight: 26,
        };
        this.superInitHTML(options);
    }
    mask(maskInds) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            sel.classed("masked-token", lodash__WEBPACK_IMPORTED_MODULE_1__["includes"](maskInds, i));
        });
    }
    getEmbedding(ind) {
        return this._data[ind];
    }
    _init() { }
    _wrangle(data) {
        this._data = data;
        this.data = data;
        this.totalHeight = this.options.boxheight * data.length;
        return data;
    }
    _render(data) {
        const op = this.options;
        const self = this;
        const textBoxes = this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {
            return d.text.replace("\u0120", " ");
        })
            .on('mouseover', function (d, i) {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 'lightblue');
            self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(i));
        })
            .on('mouseout', function (d, i) {
            let sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 0);
            self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(i));
        })
            .on('click', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(i, d.embeddings));
        })
            .on('dblclick', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            sel.classed("masked-token", !sel.classed("masked-token"));
            self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(i));
        });
    }
}
TextTokens.events = {
    tokenMouseOver: "TextToken_TokenMouseOver",
    tokenMouseOut: "TextToken_TokenMouseOut",
    tokenClick: "TextToken_TokenClick",
    tokenDblClick: "TextToken_TokenDblClick",
};
class LeftTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'left-token';
        this.side = 'left';
    }
}
class RightTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'right-token';
        this.side = 'right';
    }
}


/***/ }),

/***/ "./ts/vis/VisComponent.ts":
/*!********************************!*\
  !*** ./ts/vis/VisComponent.ts ***!
  \********************************/
/*! exports provided: VComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VComponent", function() { return VComponent; });
/* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
/* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
/* harmony import */ var _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc/SVGplus */ "./ts/etc/SVGplus.ts");



/**
 * Should have VComponentHTML and VComponentSVG
 *
 * Common Properties:
 * - events
 * - eventHandler (V important)
 * - options (Maintains public state. Can expose these with get/set functions with auto update)
 * - _current (Maintains private state)
 * - cssName (synced with corresponding CSS file)
 * - parent (HTML is div containing the base, SVG is SVG element)
 * - base (HTML is div with css_name established)
 * - _data (Data used to create and render the component)
 * - _renderData (Data needed to display. This may not be needed, but is currently used in histogram)
 *
 * Common Methods:
 * - constructor
 * - _render()      Consider replacing with `_updateData()` that updates all data at once
 * - update()       Consider replacing this with `data()` that auto updates data
 * - redraw()
 * - destroy()
 */
class VComponent {
    // CONSTRUCTOR ============================================================
    /**
     * Simple constructor. Subclasses should call @superInit(options) as well.
     * see why here: https://stackoverflow.com/questions/43595943/why-are-derived-class-property-values-not-seen-in-the-base-class-constructor
     *
     * template:
     constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        // -- access to subclass params:
        this.superInit(options);
     }
     *
     * @param {D3Sel} d3parent  D3 selection of parent SVG DOM Element
     * @param {SimpleEventHandler} eventHandler a global event handler object or 'null' for local event handler
     */
    constructor(d3parent, eventHandler) {
        this.id = _etc_Util__WEBPACK_IMPORTED_MODULE_0__["Util"].simpleUId({});
        this.parent = d3parent;
        // If not further specified - create a local event handler bound to the bas element
        this.eventHandler = eventHandler ||
            new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_1__["SimpleEventHandler"](this.parent.node());
        // Object for storing internal states and variables
        this._visibility = { hidden: false };
    }
    superInitHTML(options = {}) {
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.base = this.parent.append('div')
            .classed(this.css_name, true);
    }
    /**
     * Has to be called as last call in subclass constructor.
     *
     * @param {{}} options
     * @param defaultLayers -- create the default <g> layers: bg -> main -> fg
     */
    superInitSVG(options = {}, defaultLayers = ['bg', 'main', 'fg']) {
        // Set default options if not specified in constructor call
        // const defaults = this.defaultOptions;
        // this.options = {};
        // const keys = new Set([...Object.keys(defaults), ...Object.keys(options)]);
        // keys.forEach(key => this.options[key] = (key in options) ? options[key] : defaults[key]);
        Object.keys(options).forEach(key => this.options[key] = options[key]);
        this.layers = {};
        // Create the base group element
        const svg = this.parent;
        this.base = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(svg, this.css_name + ' ID' + this.id, this.options.pos);
        // create default layers: background, main, foreground
        if (defaultLayers) {
            // construction order is important !
            defaultLayers.forEach(layer => {
                this.layers[layer] = _etc_SVGplus__WEBPACK_IMPORTED_MODULE_2__["SVG"].group(this.base, layer);
            });
        }
    }
    // DATA UPDATE & RENDER ============================================================
    /**
     * Every time data has changed, update is called and
     * triggers wrangling and re-rendering
     * @param {Object} data data object
     * @return {*} ---
     */
    update(data) {
        this._data = data;
        if (this._visibility.hidden)
            return;
        this.renderData = this._wrangle(data);
        this._render(this.renderData);
    }
    // UPDATE OPTIONS ============================================================
    /**
     * Updates instance options
     * @param {Object} options only the options that should be updated
     * @param {Boolean} reRender if option change requires a re-rendering (default:false)
     * @returns {*} ---
     */
    updateOptions({ options, reRender = false }) {
        Object.keys(options).forEach(k => this.options[k] = options[k]);
        if (reRender)
            this._render(this.renderData);
    }
    // === CONVENIENCE ====
    redraw() {
        this._render(this.renderData);
    }
    setHideElement(hE) {
        this._visibility.hideElement = hE;
    }
    hideView() {
        if (!this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 0,
                'pointer-events': 'none'
            }).style('display', 'none');
            this._visibility.hidden = true;
        }
    }
    unhideView() {
        if (this._visibility.hidden) {
            const hE = this._visibility.hideElement || this.parent;
            hE.transition().styles({
                'opacity': 1,
                'pointer-events': null,
                'display': null
            });
            this._visibility.hidden = false;
            // this.update(this.data);
        }
    }
    destroy() {
        this.base.remove();
    }
    clear() {
        this.base.html('');
    }
}
// STATIC FIELDS ============================================================
/**
 * The static property that contains all class related events.
 * Should be overwritten and event strings have to be unique!!
 */
VComponent.events = { noEvent: 'VComponent_noEvent' };


/***/ }),

/***/ "./ts/vis/myMain.ts":
/*!**************************!*\
  !*** ./ts/vis/myMain.ts ***!
  \**************************/
/*! exports provided: MainGraphic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGraphic", function() { return MainGraphic; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etc/types */ "./ts/etc/types.ts");
/* harmony import */ var _etc_xd3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/xd3 */ "./ts/etc/xd3.ts");
/* harmony import */ var _api_mainApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/mainApi */ "./ts/api/mainApi.ts");
/* harmony import */ var _uiConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../uiConfig */ "./ts/uiConfig.ts");
/* harmony import */ var _TextToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextToken */ "./ts/vis/TextToken.ts");
/* harmony import */ var _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttentionHeadBox */ "./ts/vis/AttentionHeadBox.ts");
/* harmony import */ var _AttentionConnector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AttentionConnector */ "./ts/vis/AttentionConnector.ts");
/* harmony import */ var _CorpusInspector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CorpusInspector */ "./ts/vis/CorpusInspector.ts");
/* harmony import */ var _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/TokenWrapper */ "./ts/data/TokenWrapper.ts");
/* harmony import */ var _data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/AttentionCapsule */ "./ts/data/AttentionCapsule.ts");
/* harmony import */ var _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../etc/SimpleEventHandler */ "./ts/etc/SimpleEventHandler.ts");
/* harmony import */ var _vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vis/CorpusMatManager */ "./ts/vis/CorpusMatManager.ts");
/* harmony import */ var _vis_CorpusHistogram__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vis/CorpusHistogram */ "./ts/vis/CorpusHistogram.ts");
/* harmony import */ var _data_FaissSearchWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/FaissSearchWrapper */ "./ts/data/FaissSearchWrapper.ts");
/* harmony import */ var _etc_Util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../etc/Util */ "./ts/etc/Util.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




















function isNullToken(tok) {
    const isSomeNull = x => {
        return (x == null) || (x == "null");
    };
    const tokIsNull = tok == null;
    const tokHasNull = isSomeNull(tok.side) || isSomeNull(tok.ind);
    return tokIsNull || tokHasNull;
}
function showBySide(e) {
    // Check if saved token in uiConf is null
    if (!isNullToken(e)) {
        const classSelector = e.side == "left" ? "src-idx" : "target-idx";
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setHidden(".atn-curve");
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setVisible(`.atn-curve[${classSelector}='${e.ind}']`);
    }
}
function chooseShowBySide(savedEvent, newEvent) {
    if (isNullToken(savedEvent)) {
        showBySide(newEvent);
    }
}
function chooseShowAll(savedEvent) {
    if (isNullToken(savedEvent))
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setVisible(".atn-curve");
}
function unselectHead(head) {
    const affectedHeads = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", true);
}
function selectHead(head) {
    const affectedHeads = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", false);
}
function setSelDisabled(attr, sel) {
    const val = attr ? true : null;
    sel.attr('disabled', val);
}
class MainGraphic {
    constructor() {
        this.api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_5__["API"]();
        this.uiConf = new _uiConfig__WEBPACK_IMPORTED_MODULE_6__["UIConfig"]();
        this._mainInit();
    }
    /**
     * Get the attentions present in uiConf. Created to allow back button to update based on the URL, but it didn't work great
     */
    _mainInit() {
        this.api.getMetaAttentions(this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
            this.uiConf.nHeads = attention[this.uiConf.attType].att.length; // To verify that the default 12 is correct
            this._init(attention);
            // Wrap postInit into function so asynchronous call does not mess with necessary inits
            const postInit = () => {
                this._toggleTokenSel();
                const toDisplay = this.uiConf.displayInspector();
                this._searchDisabler();
                if (toDisplay == 'context') {
                    this._queryContext();
                }
                else if (toDisplay == 'embeddings') {
                    this._queryEmbeddings();
                }
            };
            if (this.uiConf.maskInds().length > 0) {
                this.tokCapsule.a.maskInds = this.uiConf.maskInds();
                this.api.updateMaskedAttentions(this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(r => {
                    this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                    this.tokCapsule.updateEmbeddings(r);
                    this.update();
                    postInit();
                });
            }
            else {
                this.update();
                postInit();
            }
        });
    }
    _init(attention) {
        this.attCapsule = Object(_data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_12__["makeFromMetaResponse"])(attention, this.uiConf.hideClsSep());
        this.tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["TokenWrapper"](attention);
        this.sels = {
            body: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body'),
            atnContainer: d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#atn-container'),
            atnDisplay: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#atn-display"),
            modelSelector: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#model-option-selector"),
            corpusSelector: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-select"),
            atnHeads: {
                left: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#left-att-heads"),
                right: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#right-att-heads"),
            },
            form: {
                sentenceA: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#form-sentence-a"),
                button: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#update-sentence"),
            },
            tokens: {
                left: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#left-tokens"),
                right: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#right-tokens"),
            },
            clsToggle: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#cls-toggle").select(".switch"),
            layerCheckboxes: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#layer-select"),
            headCheckboxes: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#head-select"),
            contextQuery: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#search-contexts"),
            embeddingQuery: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#search-embeddings"),
            selectedHeads: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#selected-heads"),
            headSelectAll: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#select-all-heads"),
            headSelectNone: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#select-no-heads"),
            testCheckbox: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#simple-embed-query"),
            threshSlider: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#my-range"),
            corpusInspector: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-similar-sentences-div"),
            corpusMatManager: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-mat-container"),
            histograms: {
                matchedWord: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#matched-histogram-container"),
                maxAtt: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#max-att-histogram-container"),
            },
            buttons: {
                killLeft: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#kill-left"),
                addLeft: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#minus-left"),
                addRight: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#plus-right"),
                killRight: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#kill-right"),
                refresh: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#mat-refresh")
            },
            metaSelector: {
                matchedWord: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#matched-meta-select"),
                maxAtt: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#max-att-meta-select")
            }
        };
        this.eventHandler = new _etc_SimpleEventHandler__WEBPACK_IMPORTED_MODULE_13__["SimpleEventHandler"](this.sels.body.node());
        this.vizs = {
            leftHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.left, this.eventHandler, { side: "left" }),
            rightHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.right, this.eventHandler, { side: "right" }),
            tokens: {
                left: new _TextToken__WEBPACK_IMPORTED_MODULE_7__["LeftTextToken"](this.sels.tokens.left, this.eventHandler),
                right: new _TextToken__WEBPACK_IMPORTED_MODULE_7__["RightTextToken"](this.sels.tokens.right, this.eventHandler),
            },
            attentionSvg: new _AttentionConnector__WEBPACK_IMPORTED_MODULE_9__["AttentionGraph"](this.sels.atnDisplay, this.eventHandler),
            corpusInspector: new _CorpusInspector__WEBPACK_IMPORTED_MODULE_10__["CorpusInspector"](this.sels.corpusInspector, this.eventHandler),
            corpusMatManager: new _vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"](this.sels.corpusMatManager, this.eventHandler, { idxs: this.uiConf.offsetIdxs() }),
            histograms: {
                matchedWord: new _vis_CorpusHistogram__WEBPACK_IMPORTED_MODULE_15__["CorpusHistogram"](this.sels.histograms.matchedWord, this.eventHandler),
                maxAtt: new _vis_CorpusHistogram__WEBPACK_IMPORTED_MODULE_15__["CorpusHistogram"](this.sels.histograms.maxAtt, this.eventHandler),
            },
        };
        this._staticInits();
        this._bindEventHandler();
    }
    _bindEventHandler() {
        //#region event handler binding
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenDblClick, (e) => {
            const letter = Object(_data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["sideToLetter"])(e.side, this.uiConf.attType);
            this.tokCapsule[letter].toggle(e.ind);
            this.sels.body.style("cursor", "progress");
            this.api.updateMaskedAttentions(this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((r) => {
                this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                this.tokCapsule.updateEmbeddings(r);
                this.uiConf.maskInds(this.tokCapsule.a.maskInds);
                this.update();
                this.sels.body.style("cursor", "default");
            });
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOver, (e) => {
            chooseShowBySide(this.uiConf.token(), e);
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token());
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenClick, (e) => {
            this.uiConf.toggleToken(e);
            this._toggleTokenSel();
            showBySide(e);
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOver, (e) => {
            // Don't do anything special on row mouse over
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOut, () => {
            // Don't do anything special on row mouse out
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseOver, (e) => {
            const updateMat = this.attCapsule.byHead(e.head);
            this.vizs.attentionSvg.data(updateMat);
            this.vizs.attentionSvg.update(updateMat);
            showBySide(this.uiConf.token());
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseOut, () => {
            const att = this.attCapsule.byHeads(this.uiConf.heads());
            this.vizs.attentionSvg.data(att);
            this.vizs.attentionSvg.update(att);
            showBySide(this.uiConf.token());
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxClick, (e) => {
            const result = this.uiConf.toggleHead(e.head);
            if (result == _etc_types__WEBPACK_IMPORTED_MODULE_3__["Toggled"].ADDED) {
                selectHead(e.head);
            }
            else if (result == _etc_types__WEBPACK_IMPORTED_MODULE_3__["Toggled"].REMOVED) {
                unselectHead(e.head);
            }
            this._searchDisabler();
            this._renderHeadSummary();
            this.renderSvg();
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.mouseOver, (e) => {
            // Uncomment the below if you want to modify the whole column
            // const selector = `.inspector-cell[index-offset='${e.offset}']`
            // d3.selectAll(selector).classed("hovered-col", true)
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.mouseOut, (e) => {
            // Uncomment the below if you want to modify the whole column
            // const selector = `.inspector-cell[index-offset='${e.offset}']`
            // d3.selectAll(selector).classed("hovered-col", false)
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.rectMouseOver, (e) => {
            const row = d3__WEBPACK_IMPORTED_MODULE_0__["select"](`.inspector-row[rownum='${e.idx}']`);
            const word = row.select(`.inspector-cell[index-offset='${e.offset}']`);
            word.classed("hovered-col", true);
        });
        this.eventHandler.bind(_vis_CorpusMatManager__WEBPACK_IMPORTED_MODULE_14__["CorpusMatManager"].events.rectMouseOut, (e) => {
            const row = d3__WEBPACK_IMPORTED_MODULE_0__["select"](`.inspector-row[rownum='${e.idx}']`);
            const word = row.select(`.inspector-cell[index-offset='${e.offset}']`);
            word.classed("hovered-col", false);
        });
    }
    _toggleTokenSel() {
        const e = this.uiConf.token();
        const alreadySelected = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('.selected-token');
        // If no token should be selected, unselect all tokens
        if (isNullToken(e)) {
            const newSel = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.selected-token');
            if (!newSel.empty())
                newSel.classed('selected-token', false);
        }
        // Otherwise, select the indicated token
        else {
            const token2String = (e) => `#${e.side}-token-${e.ind}`;
            const newSel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](token2String(e));
            // Check that selection exists
            if (!newSel.empty())
                newSel.classed('selected-token', true);
        }
        // Remove previous token selection, if any
        if (!alreadySelected.empty()) {
            alreadySelected.classed('selected-token', false);
        }
        this._searchDisabler();
    }
    _initModelSelection() {
        // Add "current model" to UIConfig
        const self = this;
        const data = [{ name: "bert-base-cased" }, { name: "gpt2" }];
        this.sels.modelSelector.selectAll('.model-option')
            .data(data)
            .join('option')
            .classed('model-option', true)
            .property('value', d => d.name)
            .text(d => d.name);
        this.sels.modelSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            self.uiConf.model(me.property('value'));
            // Call api: update_from_model, giving new model name, and 
        });
    }
    _initCorpusSelection() {
        const data = [
            { code: "woz", display: "Wizard of Oz" },
            { code: "wiki", display: "Wikipedia" },
        ];
        const self = this;
        self.sels.corpusSelector.selectAll('option')
            .data(data)
            .join('option')
            .property('value', d => d.code)
            .text(d => d.display);
        this.sels.corpusSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            self.uiConf.corpus(me.property('value'));
        });
    }
    _staticInits() {
        this._initSentenceForm();
        this._initModelSelection();
        this._initCorpusSelection();
        this._initQueryForm();
        this._initCheckboxes();
        this._initAdder();
        this._renderHeadSummary();
        this._initMetaSelectors();
        this._initToggle();
        this.renderAttHead();
    }
    _initAdder() {
        const updateUrlOffsetIdxs = () => {
            this.uiConf.offsetIdxs(this.vizs.corpusMatManager.idxs);
        };
        const fixCorpusMatHeights = () => {
            const newWrapped = this._wrapResults(this.vizs.corpusMatManager.data());
            this.vizs.corpusMatManager.data(newWrapped.data);
            updateUrlOffsetIdxs();
        };
        this.sels.buttons.addRight.on('click', () => {
            this.vizs.corpusMatManager.addRight();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.addLeft.on('click', () => {
            this.vizs.corpusMatManager.addLeft();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.killRight.on('click', () => {
            this.vizs.corpusMatManager.killRight();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.killLeft.on('click', () => {
            this.vizs.corpusMatManager.killLeft();
            updateUrlOffsetIdxs();
        });
        this.sels.buttons.refresh.on('click', () => {
            fixCorpusMatHeights();
        });
        const onresize = () => {
            if (this.sels.corpusInspector.text() != '')
                fixCorpusMatHeights();
        };
        window.onresize = onresize;
    }
    _initMetaSelectors() {
        this._initMatchedWordSelector(this.sels.metaSelector.matchedWord);
        this._initMaxAttSelector(this.sels.metaSelector.maxAtt);
    }
    _initMaxAttSelector(sel) {
        const self = this;
        const chooseSelected = (value) => {
            const ms = sel.selectAll('label');
            ms.classed('active', false);
            const el = sel.selectAll(`label[value=${value}]`);
            el.classed('active', true);
        };
        chooseSelected(this.uiConf.metaMax());
        const el = sel.selectAll('label');
        el.on('click', function () {
            const val = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('value');
            // Do toggle
            sel.selectAll('.active').classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed('active', true);
            self.uiConf.metaMax(val);
            self.vizs.histograms.maxAtt.meta(val);
        });
    }
    _initMatchedWordSelector(sel) {
        const self = this;
        const chooseSelected = (value) => {
            const ms = sel.selectAll('label');
            ms.classed('active', false);
            const el = sel.selectAll(`label[value=${value}]`);
            el.classed('active', true);
        };
        chooseSelected(this.uiConf.metaMatch());
        const el = sel.selectAll('label');
        el.on('click', function () {
            const val = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).attr('value');
            // Do toggle
            sel.selectAll('.active').classed('active', false);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).classed('active', true);
            self.uiConf.metaMatch(val);
            self._updateCorpusInspectorFromMeta(val);
        });
    }
    _disableSearching(attr) {
        setSelDisabled(attr, this.sels.contextQuery);
        setSelDisabled(attr, this.sels.embeddingQuery);
    }
    _updateCorpusInspectorFromMeta(val) {
        this.vizs.corpusMatManager.pick(val);
        this.vizs.histograms.matchedWord.meta(val);
    }
    _initSentenceForm() {
        const self = this;
        this.sels.form.sentenceA.attr('placeholder', "Enter new sentence to analyze");
        this.sels.form.sentenceA.attr('value', this.uiConf.sentence());
        const clearInspector = () => {
            self.vizs.corpusMatManager.clear();
            self.vizs.corpusInspector.clear();
            self.vizs.histograms.matchedWord.clear();
            self.vizs.histograms.maxAtt.clear();
        };
        const submitNewSentence = () => {
            // replace all occurences of '#' in sentence as this causes the API to break
            const sentence_a = this.sels.form.sentenceA.property("value").replace(/\#/g, '');
            // Only update if the form is filled correctly
            if (sentence_a.length) {
                this.sels.body.style("cursor", "progress");
                this.api.getMetaAttentions(sentence_a, this.uiConf.layer())
                    .then((r) => {
                    this.uiConf.sentence(sentence_a);
                    this.uiConf.rmToken();
                    this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                    this.tokCapsule.updateFromResponse(r);
                    this._toggleTokenSel();
                    this.update();
                    clearInspector();
                    this.sels.body.style("cursor", "default");
                });
            }
        };
        const onEnter = ramda__WEBPACK_IMPORTED_MODULE_2__["curry"]((keyCode, f, event) => {
            const e = event || window.event;
            if (e.keyCode !== keyCode)
                return;
            e.preventDefault();
            f();
        });
        const onEnterSubmit = onEnter(13, submitNewSentence);
        const btn = this.sels.form.button;
        const inputBox = this.sels.form.sentenceA;
        btn.on("click", submitNewSentence);
        inputBox.on('keypress', onEnterSubmit);
    }
    _getSearchEmbeds() {
        const savedToken = this.uiConf.token();
        const out = this.vizs.tokens[savedToken.side].getEmbedding(savedToken.ind);
        return out.embeddings;
    }
    _getSearchContext() {
        const savedToken = this.uiConf.token();
        const out = this.vizs.tokens[savedToken.side].getEmbedding(savedToken.ind);
        return out.contexts;
    }
    _searchEmbeddings() {
        const self = this;
        console.log("SEARCHING EMBEDDINGS");
        const embed = this._getSearchEmbeds();
        const layer = self.uiConf.layer();
        const heads = self.uiConf.heads();
        const k = 50;
        this.sels.body.style("cursor", "progress");
        self.api.getNearestWozEmbeddings(embed, layer, heads, k)
            .then((val) => {
            // Get heights of corpus inspector rows.
            self.vizs.corpusInspector.update(val);
            const wrappedVals = self._wrapResults(val);
            const countedVals = wrappedVals.getMatchedHistogram();
            const offsetVals = wrappedVals.getMaxAttHistogram();
            self.vizs.corpusMatManager.update(wrappedVals.data);
            self.vizs.histograms.matchedWord.update(countedVals);
            self.vizs.histograms.maxAtt.update(offsetVals);
            self.uiConf.displayInspector('embeddings');
            this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch());
            this.sels.body.style("cursor", "default");
        });
    }
    _searchContext() {
        const self = this;
        console.log("SEARCHING CONTEXTS");
        const context = this._getSearchContext();
        const layer = self.uiConf.layer();
        const heads = self.uiConf.heads();
        const k = 50;
        this.sels.body.style("cursor", "progress");
        self.api.getNearestWozContexts(context, layer, heads, k)
            .then((val) => {
            // Get heights of corpus inspector rows.
            self.vizs.corpusInspector.update(val);
            const wrappedVals = self._wrapResults(val);
            const countedVals = wrappedVals.getMatchedHistogram();
            const offsetVals = wrappedVals.getMaxAttHistogram();
            self.vizs.corpusMatManager.update(wrappedVals.data);
            self.vizs.histograms.matchedWord.update(countedVals);
            self.vizs.histograms.maxAtt.update(offsetVals);
            self.uiConf.displayInspector('context');
            this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch());
            self.vizs.histograms.maxAtt.meta(self.uiConf.metaMax());
            this.sels.body.style("cursor", "default");
        });
    }
    _queryContext() {
        const self = this;
        if (!isNullToken(this.uiConf.token())) {
            this._searchContext();
        }
        else {
            console.log("Was told to show inspector but was not given a selected token embedding");
        }
    }
    _queryEmbeddings() {
        const self = this;
        if (!isNullToken(this.uiConf.token())) {
            this._searchEmbeddings();
        }
        else {
            console.log("Was told to show inspector but was not given a selected token embedding");
        }
    }
    _searchingDisabled() {
        return (this.uiConf.heads().length == 0) || (isNullToken(this.uiConf.token()));
    }
    _searchDisabler() {
        this._disableSearching(this._searchingDisabled());
    }
    _initQueryForm() {
        const self = this;
        this._searchDisabler();
        this.sels.contextQuery.on("click", () => {
            self._queryContext();
        });
        this.sels.embeddingQuery.on("click", () => {
            self._queryEmbeddings();
        });
    }
    _renderHeadSummary() {
        this.sels.selectedHeads
            .html(ramda__WEBPACK_IMPORTED_MODULE_2__["join"](', ', this.uiConf.heads()));
    }
    // Modify faiss results with corresponding heights
    _wrapResults(returnedFaissResults) {
        const rows = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.inspector-row');
        // Don't just use offsetHeight since that rounds to the nearest integer
        const heights = rows.nodes().map((n) => n.getBoundingClientRect().height);
        const newVals = returnedFaissResults.map((v, i) => {
            return ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"]('height', heights[i], v);
        });
        const wrappedVals = new _data_FaissSearchWrapper__WEBPACK_IMPORTED_MODULE_16__["FaissSearchResultWrapper"](newVals);
        return wrappedVals;
    }
    _initCheckboxes() {
        const self = this;
        const checkboxes = this.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, this.attCapsule.nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => i == 0)
            .text((d) => d)
            .append("input")
            .attr("type", "radio")
            .attr("class", "checkbox-inline")
            .attr("name", "layerbox")
            // .attr("head", d => d)
            .attr("id", (d, i) => "layerCheckbox" + i);
        // .text((d, i) => d + " ")
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["fromEvent"])(checkboxes.nodes(), 'change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])((e) => {
            const myData = d3__WEBPACK_IMPORTED_MODULE_0__["select"](e.target).datum();
            console.log(myData, "--- myData");
            this.sels.layerCheckboxes.selectAll(".layerCheckbox")
                .classed('active', d => d === myData);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])((v) => +d3__WEBPACK_IMPORTED_MODULE_0__["select"](v.target).datum()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(v => {
            console.log("New layer: ", v);
            self.uiConf.layer(v);
            self.sels.body.style("cursor", "progress");
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])((v) => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["from"])(self.api.updateMaskedAttentions(self.tokCapsule.a, self.uiConf.sentence(), v))) // USE THIS
        ).subscribe({
            next: (r) => {
                this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                self.tokCapsule.updateEmbeddings(r);
                self.uiConf.maskInds(self.tokCapsule.a.maskInds);
                self.update();
                self.sels.body.style("cursor", "default");
                self._toggleTokenSel();
            }
        });
        const layerId = `#layerCheckbox${this.uiConf.layer()}`;
        d3__WEBPACK_IMPORTED_MODULE_0__["select"](layerId).attr("checked", "checked");
        // Init threshold stuff
        const dispThresh = (thresh) => Math.round(thresh * 100);
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#my-range-value').text(dispThresh(self.uiConf.threshold()));
        this.sels.threshSlider.on("input", lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
            const node = this;
            self.uiConf.threshold(+node.value / 100);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('#my-range-value').text(dispThresh(self.uiConf.threshold()));
            self.vizs.attentionSvg.threshold(self.uiConf.threshold());
        }, 100));
        this.sels.headSelectAll.on("click", function () {
            self.uiConf.selectAllHeads();
            self._searchDisabler();
            self.renderSvg();
            self.renderAttHead();
        });
        this.sels.headSelectNone.on("click", function () {
            self.uiConf.selectNoHeads();
            self._searchDisabler();
            self.renderSvg();
            self.renderAttHead();
            _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].setHidden(".atn-curve");
        });
    }
    _initToggle() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["fromEvent"])(this.sels.clsToggle.node(), 'input').pipe(
        // @ts-ignore -- TODO: FIX !
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["map"])(e => e.srcElement.checked)).subscribe({
            next: v => {
                this.uiConf.hideClsSep(v);
                this.attCapsule.zeroed(v);
                this.renderSvg();
                this.renderAttHead();
            }
        });
    }
    renderAttHead() {
        const heads = lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, this.uiConf.nHeads);
        const focusAtt = this.attCapsule.att;
        const leftAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "left");
        const rightAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "right");
        this.vizs.leftHeads.update(leftAttInfo);
        this.vizs.rightHeads.update(rightAttInfo);
        this._renderHeadSummary();
        // Make sure
        heads.forEach((h) => {
            if (this.uiConf.headSet().has(h)) {
                selectHead(h);
            }
            else {
                unselectHead(h);
            }
        });
    }
    ;
    renderTokens() {
        const left = this.tokCapsule[this.uiConf.attType[0]];
        const right = this.tokCapsule[this.uiConf.attType[1]];
        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }
    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads());
        const svg = this.vizs.attentionSvg.data(att);
        svg.update(att);
        const maxTokens = lodash__WEBPACK_IMPORTED_MODULE_1__["max"]([this.tokCapsule.a.length()]);
        const newHeight = svg.options.boxheight * maxTokens;
        svg.height(newHeight);
        // Don't redisplay everything if one token is selected
        showBySide(this.uiConf.token());
    }
    ;
    render() {
        this.renderTokens();
        this.renderSvg();
        this.renderAttHead();
        // displaySelectedToken
    }
    update() {
        this.render();
    }
}


/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRm9ybWF0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL1RleHRUb2tlbi50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVmlzQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9teU1haW4udHMiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL25vZGUtZmV0Y2ggKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT9hOGI3Iiwid2VicGFjazovLy9zdHJpbmdfZGVjb2RlciAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixxQkFBdUIsaUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQU8sTUFBTSxPQUFPLEdBQUc7SUFDdEIsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNG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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6Q0g7QUFBQTtBQUFBLDRIQUE0SDtBQUNySCxNQUFNLFNBQVMsR0FBRztJQUNyQixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMs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QzVDLHVCQUF1QjtJQUMzQixDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEQsTUFBTSxHQUFHLEdBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLE1BQU0sU0FBUyxHQUFHLDBDQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFckIsc0RBQXNEO1FBQ3RELFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDO0lBRUYsTUFBTTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLHVCQUF1QjtJQUMzQixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7OztBQy94QkQsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi90cy9tYWluLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJleEJFUlQuaHRtbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgY29uc3QgRGVtb0FQSSA9IHtcblx0XCI1MjdmZGFjNDQwNGJmOWJhNTQxMjY0NmFkNDU3OTUwZDQ0ODI3NjJjXCI6IFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyYy5qc29uXCIsXG5cdFwiNTliNGFjYzA1ZjFkODBlY2JlZjFjMjNlYWYyZmRhMTAyMjJjYjI1N1wiOiBcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTcuanNvblwiLFxuXHRcIjM1NDk5MmYyZWUyMzY2MDRjODc0YTNhNjI3ZTQwNDJiYzY4NTg2ZjhcIjogXCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4Lmpzb25cIixcblx0XCI1MDE1ZTVhMzE4NjA1Y2VhNjgwODUzOGRiMTRkOGFmMTY4ODdiMDc2XCI6IFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3Ni5qc29uXCIsXG5cdFwiM2M5YWExNTJhYzg5NDMwNjA0MDcwM2M1MDk1NTk5YjE5OWNhZDFhOVwiOiBcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTkuanNvblwiLFxuXHRcIjBmZWNlMGM4NzIwM2U4M2FmZDE2NzRiNWFlZWJhZWQwZjVmYTA1NjJcIjogXCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyLmpzb25cIixcblx0XCJkM2EwZTQwNDVlYTQ4YTI3NWNlNTFhNmFmMDI4MDQwNjA2MGY0N2NmXCI6IFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZi5qc29uXCIsXG5cdFwiZWQ5OGQ3NTFhYjliNmE0YTBlODVlOTMzMmI0MjBhNGMxM2FiNzVhN1wiOiBcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTcuanNvblwiLFxuXHRcIjBkMjRhZTA4ZWViMjFhZjgyYzY2NmNiZTJhYzA2NDZlZDljOWQ5YTZcIjogXCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2Lmpzb25cIixcblx0XCI2ZGUwNTNiM2I4YTRkOTA0NzgwYzlhNjU0NWEwYTYzY2JiYjJiMTQ0XCI6IFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NC5qc29uXCIsXG5cdFwiZjY4ZGYyMzM2NWZhZjAyZjljMDE0MzkzNDViZWQ2NjkzNmVkODVmN1wiOiBcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjcuanNvblwiLFxuXHRcIjQ2MDhjYjRmYzAwYjQzZmZmNjgwOThlODU2NzZmYWQ1N2M5NDBmMDJcIjogXCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyLmpzb25cIixcblx0XCJkZmNkNTAxNDZkYThkODEyMmE1YTU3YzJhM2MwYWJjZTUwM2JhOTRiXCI6IFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0Yi5qc29uXCIsXG5cdFwiMzRjODYyOWQ0MjY1ZDdmM2VkZTNhZGQ0MmYzNjEzYjIwNWQ5NGMxY1wiOiBcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWMuanNvblwiLFxuXHRcImRiMmRjMjUyYTc4NjY1MGY2NDM5NWEwZjVkMTgxYzA4MzEwMTljYmZcIjogXCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmLmpzb25cIixcblx0XCJkYTQ1OTdkNzNkNDQ0NzU3YmRlOTE3NjM5NWJmMzFhYWQzMzM0MTMxXCI6IFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMS5qc29uXCIsXG5cdFwiYTJlYmYxM2QzYzkzNzFmY2Y3MzhiOTY1MTgyNGUyYzNjZDFmZjhlMFwiOiBcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTAuanNvblwiLFxuXHRcImJjNDE5MjM4YzIwZGQxYzVjZmUxY2M0MjdhYjNkMWUzMTM1MzQzNmFcIjogXCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhLmpzb25cIixcblx0XCI4NGU4YmU5ZmU1NjJmYmQwNDg3YzAzYjU1Y2M2YjRmM2ZiOGNkNzg3XCI6IFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4Ny5qc29uXCIsXG5cdFwiMjA3ZTZjOThhMGUxNDlkYzdlNmVkNjcxMTgyOTZkOGE4Yzg5YjNjM1wiOiBcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzMuanNvblwiLFxuXHRcImMxODVhOTM0OWJhNWEzMjVhY2Y4NTE0ZTliNTBkZTcxMjgwNDg4YWFcIjogXCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhLmpzb25cIixcblx0XCJkZGU0ODFhNWNkMzY2N2FlOGM2YzViNWUxNDIxZGM4ODJiNmEyZGQ2XCI6IFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNi5qc29uXCIsXG5cdFwiZjYzZTE0ZTkzNWQ5ODk0OGI0YTBlYmM5NjYzNDAwZGJlNDI2MzM0OFwiOiBcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDguanNvblwiLFxuXHRcIjc5Yjk2NGQxYTVjODU0ZGVhZWFjZTI2ODEzZjk2OTk0YmI4MmFlZjJcIjogXCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyLmpzb25cIixcblx0XCIzYjExNjhlYzk2YWYwMGM0ZTg4NzM0MWU5MmE4NzhmODc1MmUxZDE3XCI6IFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxNy5qc29uXCIsXG5cdFwiOGM0NjJiYzI5OGUzMTgzZWZhOGQ5ZTg2M2UyNWVhNWQ4OTgwNmIwM1wiOiBcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDMuanNvblwiLFxuXHRcIjk5Mzk2OThlZGFhMjViYmFlOWVlMWQyNzg2NGU2OThmMTM5NjNmMDZcIjogXCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2Lmpzb25cIixcblx0XCI3M2YxZWU0OTdiM2U3YjYzOTRlNTU3MjZiMThkYmY5ZDUxNGRjZWE2XCI6IFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNi5qc29uXCIsXG5cdFwiYzdjZGI4MGJmODEzZTFkZTI0MTI2MGFlZGU2Y2QyOGVhNjVjY2ZhZVwiOiBcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWUuanNvblwiLFxuXHRcImE5NmZlZDE2ZWFiMWJmNmQwOGU0MDAxYzAyODk0ZDljNTQ5ZGY2MjdcIjogXCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3Lmpzb25cIixcblx0XCJhOGVhZjEwZGE4ZGM3NWI0MmU3MmJkYzcwOTE3NzYyNDdmZmY5NjU3XCI6IFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1Ny5qc29uXCIsXG5cdFwiYTgxOTRmMjMwOWUxYzcxZTk3N2VmOGQzYmU1NzJhZTAwYjBlOTFmMlwiOiBcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjIuanNvblwiLFxuXHRcIjJmNGExNWI2NmZjZmIwYzdhNDNhMzNkOTM3NjM5OTAyODJiZmM1YWFcIjogXCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhLmpzb25cIixcblx0XCIwNjA5NWNlZjRhN2Y0OWIxOGYxNTNlNjdlMzNmZGRiODMxYTE1YjQ2XCI6IFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0Ni5qc29uXCIsXG5cdFwiNGM5M2VhZjBjMGNlNTZmMWU1ZDUxMDA5MTZhYmY0ZDMxZWIzNWRhNVwiOiBcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTUuanNvblwiLFxuXHRcImY4YzQwYzY3Yzg1MWEwNDg5Zjc0ODBjOTliMzFiNGY2MDZjMDE4NGJcIjogXCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiLmpzb25cIixcblx0XCJlNGU3MWY2ZWE1N2JlMmUwNWQ2MmFmMDgyNWE4MGYxNDQ0MjFlMDJkXCI6IFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZC5qc29uXCIsXG5cdFwiZTdkOWQ1MjA4ODI3ODJjN2NmYmZmZWFkYWFmMjJiNGMwYTA4MWM3Y1wiOiBcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2MuanNvblwiLFxuXHRcIjRhYTRlYjEwZWFkNDRhMGEzYzJkZDk1NDA3MDE3YTkyODEzOGIzMmJcIjogXCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiLmpzb25cIixcblx0XCJkYTMxZDU1ZWU4Y2IwMWJjZGIyOTU3MmNiOTAyYjhlNzk5Njg1YmUyXCI6IFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMi5qc29uXCIsXG5cdFwiZTQyNzE4MWZiMDJiYmYxOWY3YmJiNjVjOWQ5Mzg5ZDJkOWE0MTgxMlwiOiBcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTIuanNvblwiLFxuXHRcImJiY2FiOWUxY2E2MGE4NTFmZDdlY2ZkYTgwZGU0NzBhZmE3NDA5MzZcIjogXCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2Lmpzb25cIixcblx0XCI0ZGU5NmFhMjA1MDc2ODYzYzlmYjRlYTk5ZTJiYTg2ZmExMzFmZjc2XCI6IFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3Ni5qc29uXCIsXG5cdFwiZTRjNmQxYjMwMDRlM2NkZDBjODc5YTU5NjM5YjVjZTk5MzIwN2E5OVwiOiBcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTkuanNvblwiLFxuXHRcImZiYzlkYTc5YjhiZjM5ZGM5OTk4NDA4NTI2NzQxZjgxMWExM2U2YWFcIjogXCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhLmpzb25cIixcblx0XCI1Mjg1NTRlZTRlNjE1YzYxMjg3YzQwZWQ5YTJhZWE2OWI5MWFmNmM5XCI6IFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOS5qc29uXCIsXG5cdFwiNWU3MDczYzAzYzM3ZDE5ODI2YjJmYjRhNjU5OWNjYWVkZGU0OTJlNFwiOiBcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTQuanNvblwiLFxuXHRcIjcxYzRhODg2Y2RlZTU4YTM3MWFlMjExNTMxMWIxNTBlODRlNTU1ZjZcIjogXCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2Lmpzb25cIixcblx0XCI0YmNlMDk3MGE0NjVmZTliOTYzMDVlMDZhZjE5YzVkOWM5N2Q3Y2MzXCI6IFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjMy5qc29uXCIsXG5cdFwiZWZkYjFmMGE3MGYyMmY4MGZmM2NlYTBjYjc5YmVjNzE3ZmM4YjZmN1wiOiBcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjcuanNvblwiLFxuXHRcIjE3NGM2Zjc4NmQxMzljZTExMTM4MTA0NWQ2MGQyNTY4MmExNjhiOTlcIjogXCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5Lmpzb25cIixcblx0XCJhOGMyM2U4OGQ2Y2E2ZDRlZmQyNjQ2YjA3NDJjMGZhMzJkYmQ1NWE0XCI6IFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNC5qc29uXCIsXG5cdFwiZjY5NDljMjg3NTJkZTM1YTg3MGVmZGUzMDg1ODVhY2Q0NmEyNTI3OFwiOiBcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzguanNvblwiLFxuXHRcImMxYmRiOGNiYWZkNWQ1ZDhmNmJkYTJiNGRiMTZiNmJjMmQ2MmUxOGFcIjogXCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhLmpzb25cIixcblx0XCIyYjgxYThmNjAyMjUxY2Y0MGI0NjgyYzhjZWRiMzk2NmI5MTJkN2M2XCI6IFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNi5qc29uXCIsXG5cdFwiOGY5NGU4NDNkMjUxMDA0N2ZkMWFmNDZmMjQ5YWZlODdmZjQ5Y2MyZlwiOiBcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmYuanNvblwiLFxuXHRcIjRlM2RkYjUxNTUwYzAzYzY0ZmRiZTU1OTI1MjY2NjUxMDBkMzI5MzBcIjogXCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwLmpzb25cIixcblx0XCJmODE2YjIzYWY5YWE0MzEyYzgwZTY2OGE2NmExNTZjOTM0Y2IzMzBjXCI6IFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwYy5qc29uXCIsXG5cdFwiMmZlMDVhOTExYTU3NGI4YTZkNGIwNWViMTNkYjllMDlhYWFjYWQyZFwiOiBcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmQuanNvblwiLFxuXHRcIjVjNzE0OTY3MjYzOTVhYWE0ZDBhNjUzNzNmZDE2NTFiNWEwZTZiMWZcIjogXCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmLmpzb25cIixcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgVG9rZW5EaXNwbGF5IH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgRGVtb0FQSSB9IGZyb20gJy4vZGVtb0FQSSdcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnb2JqZWN0LWhhc2gnXG5pbXBvcnQgeyBtYWtlVXJsLCB0b1BheWxvYWQgfSBmcm9tICcuLi9ldGMvYXBpSGVscGVycydcbmltcG9ydCB7IFVSTEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvVVJMSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBlbXB0eVRva2VuRGlzcGxheSA9IG5ldyBUb2tlbkRpc3BsYXkoKVxuXG5jb25zdCBiYXNldXJsID0gVVJMSGFuZGxlci5iYXNpY1VSTCgpXG5cbi8qKlxuICogQSByZXdyaXRlIG9mIGBkMy1mZXRjaGAncyBgZDMuanNvbmAgY2FsbGJhY2suIElmIGFuIGFwaSBjYWxsIGZhaWxzLCBtYWtlIGEgYmFja3VwIGNhbGwgdG8gc3BlY2lmaWVkIHVybCBhbmQgcGF5bG9hZCwgaWYgc3BlY2lmaWVkLlxuICogXG4gKiBAcGFyYW0gcmVzcG9uc2UgT2JqZWN0IGV4cGVjdGVkIGF0IHRpbWUgb2YgY2FsbGJhY2tcbiAqIEBwYXJhbSBiYWNrdXBVcmwgQmFja3VwIHVybCBpbiB0aGUgZXZlbnQgb2YgZmFpbFxuICogQHBhcmFtIGJhY2t1cFBheWxvYWQgQmFja3VwIHBheWxvYWQgaWYgbWFraW5nIGEgcG9zdCByZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIHJlc3BvbnNlSnNvbihyZXNwb25zZSwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGlmIChiYWNrdXBVcmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVEFUSUMgRklMRSBOT1QgRk9VTkRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKS50aGVuKHJlc3BvbnNlSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxufVxuXG4vKipcbiAqIENoZWNrIGZpcnN0IGlmIHRoZSBpbmZvcm1hdGlvbiBiZWluZyBzZW50IGV4aXN0cyBpbiBhIHN0YXRpYyBkZW1vIGZpbGUuIElmIGl0IGRvZXMsIHNlbmQgdGhhdC4gT3RoZXJ3aXNlLCBtYWtlIGEgbm9ybWFsIGNhbGwgdG8gdGhlIHNlcnZlci5cbiAqIFxuICogQHBhcmFtIHRvU2VuZCBUaGUgcGFja2V0IG9mIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gYW4gQVBJIGVuZHBvaW50XG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRlbW8gZmlsZSBpcyBub3QgZm91bmRcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIGRlbW8gZmlsZSBub3QgZm91bmQsIGZvciBQT1NUIHJlcXVlc3RzIG9ubHlcbiAqL1xuZnVuY3Rpb24gY2hlY2tEZW1vQVBJKHRvU2VuZCwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBjb25zdCBoc2ggPSBoYXNoLnNoYTEodG9TZW5kKTtcbiAgICBjb25zb2xlLmxvZyhcIkNIRUNLSU5HIERFTU9BUEk6IFwiICsgaHNoKTtcbiAgICBpZiAoRGVtb0FQSS5oYXNPd25Qcm9wZXJ0eShoc2gpKSB7XG4gICAgICAgIC8vIFJlbGllcyBvbiBhIHN5bWJvbGljIGxpbmsgYmVpbmcgcHJlc2VudCBpbiB0aGUgZGlzdCBmb2xkZXIgdG8gdGhlIGRlbW8gZm9sZGVyXG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi9kZW1vLycgKyBEZW1vQVBJW2hzaF1cbiAgICAgICAgY29uc29sZS5sb2coXCJUUllJTkcgVE8gU0VORElORyBTVEFUSUM6IFwiLCBwYXRoKTtcbiAgICAgICAgY29uc3QgZm9sbG93ID0gKHJlc3BvbnNlKSA9PiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZClcbiAgICAgICAgcmV0dXJuIGZldGNoKHBhdGgpLnRoZW4oZm9sbG93KVxuICAgIH1cbiAgICByZXR1cm4gZDMuanNvbihiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG59XG5cbnR5cGUgU2VudGVuY2VJbmZvID0ge1xuICAgIHNlbnRlbmNlQTogc3RyaW5nLFxuICAgIGxheWVyOiBudW1iZXIsXG59O1xuXG5leHBvcnQgY2xhc3MgQVBJIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZVVSTDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlVVJMID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVSTCA9IGJhc2V1cmwgKyAnL2FwaSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNZXRhQXR0ZW50aW9ucyhzZW50ZW5jZTogc3RyaW5nLCBsYXllcjogbnVtYmVyLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTx0cC5BdHRlbnRpb25SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQ6IFNlbnRlbmNlSW5mbyA9IHtcbiAgICAgICAgICAgIHNlbnRlbmNlOiBzZW50ZW5jZSxcbiAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvYXR0ZW5kK21ldGFcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkaXNwbGF5IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhbHJlYWR5IHBhcnNlZCBmcm9tIHRoZSBwYXNzZWQgc2VudGVuY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgVGhlIGRpc3BsYXllZCB0b2tlbnMgaW4gdGhlIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIHNlbnRlbmNlQSBUaGUgb3JpZ2luYWwgc2VudGVuY2UgdGhhdCBsZWQgdG8gdGhlIHRva2VuaXplZCBpbmZvcm1hdGlvbiBpbiBgYWBcbiAgICAgKiBAcGFyYW0gbGF5ZXIgV2hpY2ggbGF5ZXIgdG8gc2VhcmNoIGF0XG4gICAgICogQHBhcmFtIGhhc2hPYmogSWYgbm90IG51bGwsIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVzcG9uc2VzIGludG8gdGhlIHBhc3NlZCBvYmplY3QuIFVzZWQgZm9yIGNyZWF0aW5nIGRlbW9zLlxuICAgICAqL1xuICAgIHVwZGF0ZU1hc2tlZEF0dGVudGlvbnModG9rZW5zOiBUb2tlbkRpc3BsYXksIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHRwLkF0dGVudGlvblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIHRva2VuczogUi5tYXAoUi5wcm9wKCd0ZXh0JyksIHRva2Vucy50b2tlbkRhdGEpLFxuXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG5cbiAgICAgICAgICAgIC8vIEVtcHR5IG1hc2tzIG5lZWQgdG8gYmUgc2VudCBhcyBhIG51bWJlciwgdW5mb3J0dW5hdGVseS4gQ2hvb3NpbmcgLTEgZm9yIHRoaXNcbiAgICAgICAgICAgIG1hc2s6IHRva2Vucy5tYXNrSW5kcy5sZW5ndGggPyB0b2tlbnMubWFza0luZHMgOiBbLTFdLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3VwZGF0ZS1tYXNrJyk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0b1BheWxvYWQodG9TZW5kKVxuXG4gICAgICAgIFxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGFzaCBhbmQgdmFsdWUgdG8gaGFzaE9iaiBmb3IgZGVtbyBwdXJwb3Nlc1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsLCBwYXlsb2FkKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gUE9TVCBcIiArIHVybCwgcGF5bG9hZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZW1iZWRkaW5nIEVtYmVkZGluZyBvZiB0aGUgd29yZFxuICAgICAqIEBwYXJhbSBsYXllciBJbiB0aGUgbCd0aCBsYXllclxuICAgICAqIEBwYXJhbSBrIGhvdyBtYW55IHJlc3VsdHMgdG8gcmV0cmlldmVcbiAgICAgKi9cbiAgICBnZXROZWFyZXN0V296RW1iZWRkaW5ncyhlbWJlZGRpbmc6IG51bWJlcltdLCBsYXllcjogbnVtYmVyLCBoZWFkczogbnVtYmVyW10sIGsgPSAxMCwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgZW1iZWRkaW5nOiBlbWJlZGRpbmcsXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgICAgICBoZWFkczogaGVhZHMsXG4gICAgICAgICAgICBrOiBrLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3dvei1rLW5lYXJlc3QtZW1iZWRkaW5ncycsIHRvU2VuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICBnZXROZWFyZXN0V296Q29udGV4dHMoY29udGV4dDogbnVtYmVyW10sIGxheWVyOiBudW1iZXIsIGhlYWRzOiBudW1iZXJbXSwgayA9IDEwLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTx0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgaGVhZHM6IGhlYWRzLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy93b3otay1uZWFyZXN0LWNvbnRleHRzJywgdG9TZW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cbn07XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vKipcbiAqIE5vdGVzOlxuICogXG4gKiAtIEFsc28gZW5jYXBzdWxhdGUgdGhlIENMUy9TRVAgaW5mbyB2cy4gbm8gQ0xTL1NFUCBpbmZvXG4gKiAtIFdoZW4gbGF5ZXIgZm9ybWF0IGNoYW5nZXMgZnJvbSBsaXN0LCBkcm9wIHRoZSBpbmRleCBpbnRvIGNvbmYubGF5ZXJcbiAqL1xuXG5jb25zdCBicGVUb2tlbnMgPSBbXCJbQ0xTXVwiLCBcIltTRVBdXCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7U3BhY3lJbmZvfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtpbml0WmVyb30gZnJvbSAnLi4vZXRjL3hyYW1kYSdcblxuLy8gSWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0cnkgdG8gbWFrZSBsb3dlcmNhc2VcbmNvbnN0IG1ha2VTdHJpbmdMb3dlciA9IFIuaWZFbHNlKFIuaXMoU3RyaW5nKSwgUi50b0xvd2VyLCBSLmlkZW50aXR5KVxuXG5mdW5jdGlvbiBhcmdNYXgoYXJyYXk6bnVtYmVyW10pIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGFycmF5LCAoeCwgaSkgPT4gW3gsIGldKS5yZWR1Y2UoKHIsIGEpID0+IChhWzBdID4gclswXSA/IGEgOiByKSlbMV07XG59XG5cbmNvbnN0IGdldE1heFRva2VuID0gKGQ6IHRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnNbYXJnTWF4KGQubWF0Y2hlZF9hdHQub3V0LmF0dCldXG5cblxuZXhwb3J0IGNsYXNzIEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB7XG4gICAgZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW11cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9zaXRpb24gaW5mbyBpbnRlcnByZXRhYmxlIGJ5IHRoZSBoaXN0b2dyYW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY291bnRPYmogUmVwcmVzZW50cyB0aGUgaW5mb3JybWF0aW9uIHRvIGJlIGRpc3BsYXllZCBieSB0aGUgaGlzdG9ncmFtXG4gICAgICovXG4gICAgY291bnRQb3NJbmZvKCkge1xuICAgICAgICBjb25zdCBhdHRPZmZzZXRzID0gdGhpcy5kYXRhLm1hcCgoZCxpKSA9PiArZC5tYXRjaGVkX2F0dC5vdXQub2Zmc2V0X3RvX21heClcblxuICAgICAgICBjb25zdCBjdE9iaiA9IHtcbiAgICAgICAgICAgIG9mZnNldDogaW5pdFplcm8oYXR0T2Zmc2V0cylcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dE9mZnNldHMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0T2JqKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgY3RPYmpba11bdl0gKz0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY3RPYmpcbiAgICB9XG5cbiAgICBjb3VudE1heEF0dEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF4TWF0Y2ggPSBnZXRNYXhUb2tlbihkKVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb3VudE9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBtYWtlU3RyaW5nTG93ZXIoU3RyaW5nKG1heE1hdGNoW2tdKSlcbiAgICAgICAgICAgICAgICBjb3VudE9ialtrXVt2YWxdICs9IDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG5ld0NvdW50T2JqID0gT2JqZWN0LmFzc2lnbihjb3VudE9iaiwgdGhpcy5jb3VudFBvc0luZm8oKSlcbiAgICAgICAgcmV0dXJuIG5ld0NvdW50T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXRjaGVkS2V5cyhpbmRleE9mZnNldD0wKSB7XG4gICAgICAgIC8vIFRoZSBrZXlzIGluIHRoZSBiZWxvdyBvYmplY3QgZGljdGF0ZSB3aGF0IHdlIGNvdW50XG4gICAgICAgIGNvbnN0IGNvdW50T2JqID0ge1xuICAgICAgICAgICAgcG9zOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICAgICAgZGVwOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGQudG9rZW5zW2QuaW5kZXggKyBpbmRleE9mZnNldF1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRPYmpcbiAgICB9XG5cbiAgICBnZXRNYXRjaGVkSGlzdG9ncmFtKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudE1hdGNoZWRLZXlzKGluZGV4T2Zmc2V0KVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIHRvdGFsSGlzdClcblxuICAgICAgICByZXR1cm4gbm9uWmVyb1xuICAgIH1cblxuICAgIGdldE1heEF0dEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgLy8gY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudFBvc0luZm8oKVxuICAgICAgICBjb25zdCBuZXdIaXN0ID0gdGhpcy5jb3VudE1heEF0dEtleXMoKVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIG5ld0hpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgeF8gZnJvbSAnLi4vZXRjL19Ub29scydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuLyoqXG4gKiBUaGUgb3JpZ2luYWwgdG9rZW5zLCBhbmQgdGhlIGluZGV4ZXMgdGhhdCBuZWVkIHRvIGJlIG1hc2tlZFxuICovXG4gY29uc3QgZW1wdHlGdWxsUmVzcG9uc2U6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSA9IFt7XG4gICAgIHRleHQ6ICdbU0VQXScsXG4gICAgIGVtYmVkZGluZ3M6IFtdLFxuICAgICBjb250ZXh0czogW10sXG4gICAgIGJwZV90b2tlbjogJycsXG4gICAgIGJwZV9wb3M6ICcnLFxuICAgICBicGVfZGVwOiAnJyxcbiAgICAgYnBlX2lzX2VudDogbnVsbCxcbiB9XVxuXG5leHBvcnQgY2xhc3MgVG9rZW5EaXNwbGF5ICB7XG4gICAgdG9rZW5EYXRhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXVxuICAgIG1hc2tJbmRzOm51bWJlcltdXG5cbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnM9ZW1wdHlGdWxsUmVzcG9uc2UsIG1hc2tJbmRzPVtdKXtcbiAgICAgICAgdGhpcy50b2tlbkRhdGEgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMubWFza0luZHMgPSBtYXNrSW5kcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGlkeCB0byB0aGUgbWFzayBpZHggbGlzdCBpbiBvcmRlciBmcm9tIHNtYWxsZXN0IHRvIGxhcmdlc3RcbiAgICAgKi9cbiAgICBtYXNrKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIHhfLm9yZGVyZWRJbnNlcnRfKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZhbH0gYWxyZWFkeSBpbiBtYXNrSW5kcyFgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFza0luZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNYXNraW5nICR7dmFsfWApO1xuICAgICAgICAgICAgdGhpcy5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbm1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLnVubWFzayh2YWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bm1hc2sodmFsKSB7XG4gICAgICAgIF8ucHVsbCh0aGlzLm1hc2tJbmRzLCB2YWwpO1xuICAgIH1cblxuICAgIHJlc2V0TWFzaygpIHtcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IFtdO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5EYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25jYXQob3RoZXI6IFRva2VuRGlzcGxheSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSBfLmNvbmNhdCh0aGlzLnRva2VuRGF0YSwgb3RoZXIudG9rZW5EYXRhKTtcbiAgICAgICAgY29uc3QgbmV3TWFzayA9IF8uY29uY2F0KHRoaXMubWFza0luZHMsIG90aGVyLm1hc2tJbmRzLm1hcCh4ID0+IHggKyB0aGlzLmxlbmd0aCgpKSk7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW5EaXNwbGF5KG5ld1Rva2VucywgbmV3TWFzayk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5XcmFwcGVyIHtcbiAgICBhOiBUb2tlbkRpc3BsYXlcblxuICAgIGNvbnN0cnVjdG9yKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2Upe1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tUmVzcG9uc2Uocjp0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCB0b2tlbnNBID0gci5hYS5sZWZ0O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21Db21wb25lbnRzKHRva2Vuc0EsIFtdKVxuICAgIH1cblxuICAgIHVwZGF0ZUZyb21Db21wb25lbnRzKGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdLCBtYXNrQTpudW1iZXJbXSl7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBUb2tlbkRpc3BsYXkoYSwgbWFza0EpXG4gICAgfVxuXG4gICAgdXBkYXRlRW1iZWRkaW5ncyhyOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSByLmFhLmxlZnRcblxuICAgICAgICBjb25zdCBwYWlycyA9IFIuemlwKHRoaXMuYS50b2tlbkRhdGEsIG5ld1Rva2VucylcblxuICAgICAgICBwYWlycy5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICBkWzBdLmVtYmVkZGluZ3MgPSBkWzFdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgIGRbMF0uY29udGV4dHMgPSBkWzFdLmNvbnRleHRzXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXNrIHRoZSBhcHByb3ByaWF0ZSBzZW50ZW5jZSBhdCB0aGUgaW5kZXggaW5kaWNhdGVkXG4gICAgICovXG4gICAgbWFzayhzSUQ6dHAuVG9rZW5PcHRpb25zLCBpZHg6bnVtYmVyKXtcbiAgICAgICAgdGhpc1tzSURdLm1hc2soaWR4KVxuICAgICAgICBjb25zdCBvcHRzID0gW1wiYVwiLCBcImJcIl1cbiAgICAgICAgY29uc3QgTmEgPSB0aGlzLmEubGVuZ3RoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lkZVRvTGV0dGVyKHNpZGU6dHAuU2lkZU9wdGlvbnMsIGF0eXBlOnRwLlNlbnRlbmNlT3B0aW9ucyl7XG4gICAgLy8gY29uc3QgYXR5cGUgPSBjb25mLmF0dFR5cGU7XG4gICAgaWYgKGF0eXBlID09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYWxsXCJcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gc2lkZSA9PSBcImxlZnRcIiA/IGF0eXBlWzBdIDogYXR5cGVbMV0gLy8gTm8gdHlwZSBjaGVja2luZz9cbiAgICByZXR1cm4gb3V0XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJ1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgc3RhdGljIHRyYW5zbGF0ZSh7eCwgeX0pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIlxuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGUoZGVnKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBncm91cChwYXJlbnQsIGNsYXNzZXMsIHBvcyA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZCgnZycpLmF0dHJzKHtcbiAgICAgICAgICAgIGNsYXNzOiBjbGFzc2VzLFxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogU1ZHLnRyYW5zbGF0ZShwb3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHJzKHt4OiAwLCB5OiAtMjAsIGNsYXNzOiBjbGFzc2VzfSlcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Q09MT1JTMjAwfSBmcm9tICcuLi9ldGMvY29sb3JzJyBcblxuZXhwb3J0IGNsYXNzIFNwYWN5SW5mbyB7XG4gICAgY29sb3JTY2FsZTp0cC5Db2xvck1ldGFTY2FsZVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gdGhpcy5jcmVhdGVDb2xvclNjYWxlcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBFbmdsaXNoTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFsncHVuY3QnLCAnc3ltJywgJ3gnLCAnYWRqJywgJ3ZlcmInLCAnY29uaicsICdudW0nLCAnZXQnLCAnYWR2JywgJ3gnLCAnYWRwJywgJ25vdW4nLCAncHJvcG4nLCAncGFydCcsICdwcm9uJywgJ3NwYWNlJywgJ2ludGonXSxcbiAgICAgICAgZGVwOiBbJ3Jvb3QnLCAnUk9PVCcsICdhY2wnLCAnYWNvbXAnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2FnZW50JywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXR0cicsICdhdXgnLCAnYXV4cGFzcycsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgXG4gICAgICAgICdjc3VianBhc3MnLCAnZGF0aXZlJywgJ2RlcCcsICdkZXQnLCAnZG9iaicsICdleHBsJywgJ2ludGonLCAnbWFyaycsICdtZXRhJywgJ25lZycsICdubicsICdub3VubW9kJywgJ25wbW9kJywgJ25zdWJqJywgJ25zdWJqcGFzcycsICdudW1tb2QnLCAnb3ByZCcsIFxuICAgICAgICAnb2JqJywgJ29ibCcsICdwYXJhdGF4aXMnLCAncGNvbXAnLCAncG9iaicsICdwb3NzJywgJ3ByZWNvbmonLCAncHJlZGV0JywgJ3ByZXAnLCAncHJ0JywgJ3B1bmN0JywgJ3F1YW50bW9kJywgJ3JlbGNsJywgJ3Jvb3QnLCAneGNvbXAnLCAnbnBhZHZtb2QnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2Jzb2xldGUuIFJlcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIHRoYXQgaXMgaW5jbHVkZWQgd2hlbiB0cmFpbmVkIG9uIHRoZSB1bml2ZXJzYWwgY29ycHVzXG4gICAgICovXG4gICAgc3RhdGljIFVuaXZlcnNhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ2FkaicsICdhZHAnLCAnYWR2JywgJ2F1eCcsICdjb25qJywgJ2Njb25qJywgJ2RldCcsICdpbnRqJywgJ25vdW4nLCAnbnVtJywgJ3BhcnQnLCAncHJvbicsICdwcm9wbicsICdwdW5jdCcsICdzY29uaicsICdzeW0nLCAndmVyYicsICd4JywgJ3NwYWNlJ10sXG4gICAgICAgIGRlcDogWydhY2wnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXV4JywgJ2Nhc2UnLCAnY2MnLCAnY2NvbXAnLCAnY2xmJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgJ2RlcCcsICdkZXQnLCAnZGlzY291cnNlJywgXG4gICAgICAgICAgICAgICAgJ2Rpc2xvY2F0ZWQnLCAnZXhwbCcsICdmaXhlZCcsICdmbGF0JywgJ2dvZXN3aXRoJywgJ2lvYmonLCAnbGlzdCcsICdtYXJrJywgJ25tb2QnLCAnbnN1YmonLCAnbnVtbW9kJywgJ29iaicsICdvYmwnLCAnb3JwaGFuJywgJ3BhcmF0YXhpcycsICdwdW5jdCcsICdyZXBhcmFuZHVtJywgXG4gICAgICAgICAgICAgICAgJ3Jvb3QnLCAndm9jYXRpdmUnLCAneGNvbXAnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgc3RhdGljIFRvdGFsTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFIudW5pb24oU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5wb3MsIFNwYWN5SW5mby5Vbml2ZXJzYWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICBkZXA6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuZGVwLFxuICAgICAgICBpc19lbnQ6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuaXNfZW50LFxuICAgICAgICBlbnRzOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmVudHMsXG4gICAgfVxuXG4gICAgY3JlYXRlQ29sb3JTY2FsZXMoKTogdHAuQ29sb3JNZXRhU2NhbGV7XG4gICAgICAgIGNvbnN0IHRvU2NhbGUgPSAoa2V5czogQXJyYXk8bnVtYmVyfHN0cmluZ3xib29sZWFuPikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gUi56aXBPYmooUi5tYXAoU3RyaW5nLCBrZXlzKSwgQ09MT1JTMjAwLnNsaWNlKDAsIGtleXMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBrID0+IFIucHJvcE9yKFwiYmxhY2tcIiwgaywgb2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXlDb2xvcnMgPSB7XG4gICAgICAgICAgICBwb3M6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgICAgICBlbnRzOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmVudHMpLFxuICAgICAgICAgICAgb2Zmc2V0OiBkMy5zY2FsZU9yZGluYWwoKS5yYW5nZShbJ2JsYWNrJ10pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPHRwLkNvbG9yTWV0YVNjYWxlPjx1bmtub3duPm15Q29sb3JzXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3BhY3lDb2xvcnMgPSBuZXcgU3BhY3lJbmZvKCk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICovXG5cbmV4cG9ydCBjbGFzcyBVUkxIYW5kbGVyIHtcblxuICAgIHN0YXRpYyBiYXNpY1VSTCgpIHtcbiAgICAgICAgY29uc3QgdXJsX3BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMikuam9pbignLycpO1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgKHVybF9wYXRoLmxlbmd0aCA/IHVybF9wYXRoIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYWxsIFVSTCBwYXJhbWV0ZXJzIGludG8gYSBtYXAuXG4gICAgICogQHJldHVybnMge01hcH0gdGhlIHVybCBwYXJhbWV0ZXJzIGFzIGEga2V5LXZhbHVlIHN0b3JlIChFUzYgbWFwKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpOiBvYmplY3Qge1xuICAgICAgICAvLyBBZGFwdGVkIGZyb206ICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwOTA1NTEvcGFyc2UtcXVlcnktc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgY29uc3QgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcnMsIFwiLS0tIHZhcnNcIik7XG5cbiAgICAgICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGlzSW50ID0geCA9PiAoL15bMC05XSskLykudGVzdCh4KTtcbiAgICAgICAgY29uc3QgaXNGbG9hdCA9IHggPT4gKC9eWzAtOV0rXFwuWzAtOV0qJC8pLnRlc3QoeCk7XG5cbiAgICAgICAgY29uc3QgdHlwZUNhc3QgPSB2YWwgPT4ge1xuICAgICAgICAgICAgaWYgKGlzSW50KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Zsb2F0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2U6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXJzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gdi5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHNbMF0pO1xuICAgICAgICAgICAgICAgIGxldCByYXdfdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzFdKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSByYXdfdmFsdWUuc3RhcnRzV2l0aCgnLi4nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByYXdfdmFsdWUgPSByYXdfdmFsdWUuc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJhd192YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IGlzQXJyYXkgPyBbXSA6ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSByYXdfdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWwgPT4gdHlwZUNhc3QodmFsKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gdHlwZUNhc3QocmF3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gVVJMIHN0cmluZyBmcm9tIGEgbWFwIG9mIHVybCBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHt7fX0gdXJsUGFyYW1ldGVycyAtIHRoZSBtYXAgb2YgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gYW4gVVJJIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyB1cmxTdHJpbmcodXJsUGFyYW1ldGVyczogb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1ldGVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB1cmxQYXJhbWV0ZXJzW2tdO1xuICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHY7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHZhbHVlID0gJy4uJyArIHYuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIGF0dHIucHVzaChlbmNvZGVVUkkoayArICc9JyArIHZhbHVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGxldCByZXMgPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlcyArPSAnPycgKyBhdHRyLmpvaW4oJyYnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVVJMUGFyYW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgYWRkVG9Ccm93c2VySGlzdG9yeSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAgICAgY3VycmVudFBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIFVSTEhhbmRsZXIudXBkYXRlVXJsKGN1cnJlbnRQYXJhbXMsIGFkZFRvQnJvd3Nlckhpc3RvcnkpO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEdlbmVyYXRlcyBhIGtleS12YWx1ZSBtYXAgb2YgYWxsIFVSTCBwYXJhbXMgYW5kIHJlcGxhY2VzIHJlcGxhY2VLZXlzXG4gICAgLy8gICogQHBhcmFtIHVwZGF0ZUtleXNcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgdXBkYXRlVVJMUGFyYW1zKHVwZGF0ZUtleXMpIHtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAvLyAgICAgT2JqZWN0LmtleXModXBkYXRlS2V5cykuZm9yRWFjaCgoaykgPT4gY3VycmVudFBhcmFtc1trXSA9IHVwZGF0ZUtleXNba10pXG4gICAgLy8gICAgIHJldHVybiBjdXJyZW50UGFyYW1zO1xuICAgIC8vIH1cblxuXG4gICAgc3RhdGljIHVwZGF0ZVVybCh1cmxQYXJhbWV0ZXJzOiBvYmplY3QsIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGlmIChhZGRUb0Jyb3dzZXJIaXN0b3J5KSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7QmFzZVR5cGV9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHtwcmVmaXggPSAnJ30pOiBzdHJpbmcge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9pZF9jb3VudGVyO1xuICAgIH1cbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuXG4vKipcbiAqIFNlbGVjdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBzaG91bGQgYmUgc3RhdGljIG1ldGhvZHMgaW4gdGhlIGJlbG93IGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWwge1xuICAgIHN0YXRpYyBzZXRTZWxWaXNpYmxlID0gKHg6RDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OkQzU2VsKSA9PiB4LmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgc3RhdGljIHNldFZpc2libGUgPSAoeDpzdHJpbmcpID0+IFNlbC5zZXRTZWxWaXNpYmxlKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgc2V0SGlkZGVuID0gKHg6c3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb29zZU9iamVjdCB7XG4gICAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5mdW5jdGlvbiBhc2NPcmRlcihuMSwgbjIpIHtcbiAgICBpZiAobjEgPCBuMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG4xID4gbjIpIHsgXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IHtmaW5kQWxsSW5kZXhlcywgaW5zZXJ0QXRfLCBvcmRlcmVkSW5zZXJ0Xywgc2V0MlNvcnRlZEFycmF5fVxuXG4vKipcbiAqIEZpbmQgYWxsIGluZGV4ZXMgdGhhdCBtYXRjaCBhIHBhcnRpY3VsYXIgcHJlZGljYXRlXG4gKi9cbmZ1bmN0aW9uIGZpbmRBbGxJbmRleGVzPFQ+KGFycmF5OkFycmF5PFQ+LCBwcmVkaWNhdGU6KGE6VCkgPT4gYm9vbGVhbik6IG51bWJlcltdIHtcbiAgICBsZXQgZnJvbUluZGV4PTA7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcblxuICAgIGxldCBpID0gXy5maW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KTtcbiAgICB3aGlsZSAoaSAhPSAtMSkge1xuICAgICAgICByZXN1bHRzLnB1c2goaSk7XG4gICAgICAgIGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBpKzEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5mdW5jdGlvbiBpbnNlcnRBdF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBpbmQ6bnVtYmVyKTpBcnJheTxUPiB7XG4gICAgYXJyYXkuc3BsaWNlKGluZCwgMCwgdmFsKTtcbiAgICByZXR1cm4gYXJyYXlcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc2V0IHRvIGFuIG9yZGVyZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gc2V0MlNvcnRlZEFycmF5PFQ+KGlucHV0OlNldDxUPik6QXJyYXk8VD4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGlucHV0KS5zb3J0KGFzY09yZGVyKVxufVxuXG4vKipcbiAqIEluc2VydCBhIHZhbHVlIGludG8gYXJyYXkgaW4gc29ydGVkIG9yZGVyIElOIFBMQUNFXG4gKiBcbiAqIFdBUk5JTkc6IE9ubHkgaGFuZGxlcyBudW1iZXJzLCBzb3J0ZWQgZnJvbSBsZWFzdCB0byBncmVhdGVzdFxuICogLSBBc3N1bWVzIGFscmVhZHkgc29ydGVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRJbnNlcnRfPFQ+KGFycmF5OkFycmF5PFQ+LCB2YWw6VCwgY29sZHN0YXJ0PWZhbHNlKTpBcnJheTxUPiB7XG4gICAgLy8gUmVzb3J0IGFycmF5IGlmIGRlc2lyZWRcbiAgICBpZiAoY29sZHN0YXJ0KSB7XG4gICAgICAgIGFycmF5LnNvcnQoYXNjT3JkZXIpXG4gICAgfVxuXG4gICAgY29uc3QgaW5kID0gXy5zb3J0ZWRJbmRleChhcnJheSwgdmFsKTtcbiAgICByZXR1cm4gaW5zZXJ0QXRfKGFycmF5LCB2YWwsIGluZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSYW5kb20obGVuOm51bWJlcil7XG4gIGNvbnN0IGE6bnVtYmVyW10gPSBuZXcgQXJyYXkobGVuKS5maWxsKDApXG5cbiAgcmV0dXJuIGEubWFwKCh4KSA9PiB7cmV0dXJuIF8ucmFuZG9tKC01LCA1LCB0cnVlKX0pXG59IiwiLyoqXG4gKiBDb252ZXJ0IGEgSlMgb2JqZWN0IGludG8gR0VUIFVSTCBwYXJhbWV0ZXJzXG4gKiBcbiAqIEBwYXJhbSBiYXNlIEJhc2UgVVJMIGF0b3Agd2hpY2ggdG8gYWRkIEdFVCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB0byBpbnNlcnQgaW50byBhIFVSTCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVcmwoYmFzZTogc3RyaW5nLCBwYXJhbXM/OiBvYmplY3QpOnN0cmluZyB7XG4gICAgaWYgKHBhcmFtcyl7XG4gICAgICAgIGxldCBvdXQ6IHN0cmluZyA9IGJhc2UgKyBcIj9cIjtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goIGsgPT4ge1xuICAgICAgICAgICAgb3V0ICs9IGs7XG4gICAgICAgICAgICBvdXQgKz0gJz0nO1xuICAgICAgICAgICAgb3V0ICs9IHBhcmFtc1trXTtcbiAgICAgICAgICAgIG91dCArPSBcIiZcIjtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG91dC5yZXBsYWNlKC8mJC9nLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBpbmZvcm1hdGlvbiBpbiBHRVQgcmVxdWVzdCBpbnRvIHRoZSBtZXNzYWdlIGZvciBhIFBPU1QgcmVxdWVzdCAgICBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUGF5bG9hZCA9ICh0b1NlbmQpID0+IHtyZXR1cm4ge1xuICAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KHRvU2VuZCksXG4gICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxufX0iLCIvLyBbW3ZhbCwgaW5kXSwgW3ZhbCwgaW5kXS4uLl1cbnR5cGUgQ29tcEZuSW5kID0gKGE6bnVtYmVyW10sIGI6bnVtYmVyW10pID0+IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0QXJyYXkge1xuICAgIGFycjogbnVtYmVyW10sXG4gICAgc29ydEluZGljZXM6IG51bWJlcltdLFxufVxuXG4vKipcbiAqIENvcGllcyBhbmQgc29ydHMgYW4gYXJyYXkgd2hpbGUga2VlcGluZyB0cmFjayBvZiB0aGUgaW5kaWNlcy4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc29ydGluZyBtYXggLT4gbWluLlxuICogXG4gKiBAcGFyYW0gYXJyIC0gQXJyYXkgdG8gYmUgY29waWVkIGFuZCBzb3J0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRXaXRoSW5kaWNlcyhhcnI6bnVtYmVyW10sIGZuPzpDb21wRm5JbmQpOiBTb3J0QXJyYXkge1xuICAgIC8vIElmIGZuIGlzIG5vdCBwcm92aWRlZCwgZGVmYXVsdCB0byBzb3J0aW5nIGJ5IG1heCB2YWx1ZVxuICAgIGlmICghZm4pIHtcbiAgICAgICAgZm4gPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgICByZXR1cm4gbGVmdFswXSA+IHJpZ2h0WzBdID8gLTEgOiAxO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGxldCBvdXQ6U29ydEFycmF5ID0ge1xuICAgICAgICBhcnI6IFtdLFxuICAgICAgICBzb3J0SW5kaWNlczogW11cbiAgICB9O1xuXG4gICAgbGV0IGlkeFRyYWNrZXI6IG51bWJlcltdW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZHhUcmFja2VyW2ldID0gW2FycltpXSwgaV07XG4gICAgfVxuXG4gICAgaWR4VHJhY2tlci5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICByZXR1cm4gbGVmdFswXSA+IHJpZ2h0WzBdID8gLTEgOiAxO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIG91dC5zb3J0SW5kaWNlcy5wdXNoKGlkeFRyYWNrZXJbal1bMV0pO1xuICAgICAgb3V0LmFycltqXSA9IGlkeFRyYWNrZXJbal1bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfSIsIi8vIENvbG9ycyB3ZXJlIGdlbmVyYXRlZCB0byBiZSBhcyB2aXN1YWxseSBkaXN0aW5jdCBhcyBwb3NzaWJsZSBieTogaHR0cDovL2pubm5ubi5naXRodWIuaW8vY2F0ZWdvcnktY29sb3JzLWNvbnN0cmFpbmVkLmh0bWxcbmV4cG9ydCBjb25zdCBDT0xPUlMyMDAgPSBbXG4gICAgXCIjMzk1N2ZmXCIsIFwiI2QzZmUxNFwiLCBcIiNjOTA4MGFcIiwgXCIjZmVjN2Y4XCIsIFwiIzBiN2IzZVwiLCBcIiMwYmYwZTlcIiwgXCIjYzIwM2M4XCIsIFwiI2ZkOWIzOVwiLCBcbiAgICBcIiM4ODg1OTNcIiwgXCIjOTA2NDA3XCIsIFwiIzk4YmE3ZlwiLCBcIiNmZTY3OTRcIiwgXCIjMTBiMGZmXCIsIFwiI2FjN2JmZlwiLCBcIiNmZWU3YzBcIiwgXCIjOTY0YzYzXCIsXG4gICAgXCIjMWRhNDljXCIsIFwiIzBhZDgxMVwiLCBcIiNiYmQ5ZmRcIiwgXCIjZmU2Y2ZlXCIsIFwiIzI5NzE5MlwiLCBcIiNkMWEwOWNcIiwgXCIjNzg1NzllXCIsIFwiIzgxZmZhZFwiLFxuICAgIFwiIzczOTQwMFwiLCBcIiNjYTY5NDlcIiwgXCIjZDliZjAxXCIsIFwiIzY0NmE1OFwiLCBcIiNkNTA5N2VcIiwgXCIjYmI3M2E5XCIsIFwiI2NjZjZlOVwiLCBcIiM5Y2I0YjZcIixcbiAgICBcIiNiNmE3ZDRcIiwgXCIjOWU4YzYyXCIsIFwiIzZlODNjOFwiLCBcIiMwMWFmNjRcIiwgXCIjYTcxYWZkXCIsIFwiI2NmZTU4OVwiLCBcIiNkNGNjZDFcIiwgXCIjZmQ0MTA5XCIsXG4gICAgXCIjYmY4ZjBlXCIsIFwiIzJmNzg2ZVwiLCBcIiM0ZWQxYTVcIiwgXCIjZDhiYjdkXCIsIFwiI2E1NDUwOVwiLCBcIiM2YTkyNzZcIiwgXCIjYTQ3NzdhXCIsIFwiI2ZjMTJjOVwiLFxuICAgIFwiIzYwNmYxNVwiLCBcIiMzY2M0ZDlcIiwgXCIjZjMxYzRlXCIsIFwiIzczNjE2ZlwiLCBcIiNmMDk3YzZcIiwgXCIjZmM4NzcyXCIsIFwiIzkyYTZmZVwiLCBcIiM4NzViNDRcIixcbiAgICBcIiM2OTlhYjNcIiwgXCIjOTRiYzE5XCIsIFwiIzdkNWJmMFwiLCBcIiNkMjRkZmVcIiwgXCIjYzg1Yjc0XCIsIFwiIzY4ZmY1N1wiLCBcIiNiNjIzNDdcIiwgXCIjOTk0YjkxXCIsXG4gICAgXCIjNjQ2YjhjXCIsIFwiIzk3N2FiNFwiLCBcIiNkNjk0ZmRcIiwgXCIjYzRkNWI1XCIsIFwiI2ZkYzRiZFwiLCBcIiMxY2FlMDVcIiwgXCIjN2JkOTcyXCIsIFwiI2U5NzAwYVwiLFxuICAgIFwiI2QwOGY1ZFwiLCBcIiM4YmI5ZTFcIiwgXCIjZmRlOTQ1XCIsIFwiI2EyOWQ5OFwiLCBcIiMxNjgyZmJcIiwgXCIjOWFkOWUwXCIsIFwiI2Q2Y2FmZVwiLCBcIiM4ZDgzMjhcIixcbiAgICBcIiNiMDkxYTdcIiwgXCIjNjQ3NTc5XCIsIFwiIzFmOGQxMVwiLCBcIiNlN2VhZmRcIiwgXCIjYjk2NjBiXCIsIFwiI2E0YTY0NFwiLCBcIiNmZWMyNGNcIiwgXCIjYjExNjhjXCIsXG4gICAgXCIjMTg4Y2MxXCIsIFwiIzdhYjI5N1wiLCBcIiM0NDY4YWVcIiwgXCIjYzk0OWE2XCIsIFwiI2Q0ODI5NVwiLCBcIiNlYjZkYzJcIiwgXCIjZDViMGNiXCIsIFwiI2ZmOWZmYlwiLFxuICAgIFwiI2ZkYjA4MlwiLCBcIiNhZjRkNDRcIiwgXCIjYTc1OWM0XCIsIFwiI2E5ZTAzYVwiLCBcIiMwZDkwNmJcIiwgXCIjOWVlM2JkXCIsIFwiIzViODg0NlwiLCBcIiMwZDg5OTVcIixcbiAgICBcIiNmMjVjNThcIiwgXCIjNzBhZTRmXCIsIFwiIzg0N2Y3NFwiLCBcIiM5MDk0YmJcIiwgXCIjZmZlMmYxXCIsIFwiI2E2NzE0OVwiLCBcIiM5MzZjOGVcIiwgXCIjZDA0OTA3XCIsXG4gICAgXCIjYzNiOGE2XCIsIFwiI2NlZjhjNFwiLCBcIiM3YTkyOTNcIiwgXCIjZmRhMmFiXCIsIFwiIzJlZjZjNVwiLCBcIiM4MDcyNDJcIiwgXCIjY2I5NGNjXCIsIFwiI2I2YmRkMFwiLFxuICAgIFwiI2I1Yzc1ZFwiLCBcIiNmZGUxODlcIiwgXCIjYjdmZjgwXCIsIFwiI2ZhMmQ4ZVwiLCBcIiM4MzlhNWZcIiwgXCIjMjhjMmI1XCIsIFwiI2U1ZTllMVwiLCBcIiNiYzc5ZDhcIixcbiAgICBcIiM3ZWQ4ZmVcIiwgXCIjOWYyMGMzXCIsIFwiIzRmN2E1YlwiLCBcIiNmNTExZmRcIiwgXCIjMDljOTU5XCIsIFwiI2JjZDBjZVwiLCBcIiM4Njg1ZmRcIiwgXCIjOThmY2ZmXCIsXG4gICAgXCIjYWZiZmY5XCIsIFwiIzZkNjliNFwiLCBcIiM1Zjk5ZmRcIiwgXCIjYWFhODdlXCIsIFwiI2I1OWRmYlwiLCBcIiM1ZDgwOWRcIiwgXCIjZDlhNzQyXCIsIFwiI2FjNWM4NlwiLFxuICAgIFwiIzk0NjhkNVwiLCBcIiNhNGEyYjJcIiwgXCIjYjEzNzZlXCIsIFwiI2Q0M2YzZFwiLCBcIiMwNWE5ZDFcIiwgXCIjYzM4Mzc1XCIsIFwiIzI0YjU4ZVwiLCBcIiM2ZWFiYWZcIixcbiAgICBcIiM2NmJmN2ZcIiwgXCIjOTJjYmJiXCIsIFwiI2RkYjFlZVwiLCBcIiMxYmU4OTVcIiwgXCIjYzdlY2Y5XCIsIFwiI2E2YmFhNlwiLCBcIiM4MDQ1Y2RcIiwgXCIjNWY3MGYxXCIsXG4gICAgXCIjYTlkNzk2XCIsIFwiI2NlNjJjYlwiLCBcIiMwZTk1NGRcIiwgXCIjYTk3ZDJmXCIsIFwiI2ZjYjhkM1wiLCBcIiM5YmZlZTNcIiwgXCIjNGU4ZDg0XCIsIFwiI2ZjNmQzZlwiLFxuICAgIFwiIzdiOWZkNFwiLCBcIiM4YzYxNjVcIiwgXCIjNzI4MDVlXCIsIFwiI2Q1Mzc2MlwiLCBcIiNmMDBhMWJcIiwgXCIjZGU1Yzk3XCIsIFwiIzhlYTI4YlwiLCBcIiNmY2NkOTVcIixcbiAgICBcIiNiYTljNTdcIiwgXCIjYjc5YTgyXCIsIFwiIzdjNWE4MlwiLCBcIiM3ZDdjYTRcIiwgXCIjOTU4YWQ2XCIsIFwiI2NkODEyNlwiLCBcIiNiZGIwYjdcIiwgXCIjMTBlMGY4XCIsXG4gICAgXCIjZGNjYzY5XCIsIFwiI2Q2ZGUwZlwiLCBcIiM2MTZkM2RcIiwgXCIjOTg1YTI1XCIsIFwiIzMwYzdmZFwiLCBcIiMwYWViNjVcIiwgXCIjZTNjZGI0XCIsIFwiI2JkMWJlZVwiLFxuICAgIFwiI2FkNjY1ZFwiLCBcIiNkNzcwNzBcIiwgXCIjOGVhNWI4XCIsIFwiIzViNWFkMFwiLCBcIiM3NjY1NWVcIiwgXCIjNTk4MTAwXCIsIFwiIzg2NzU3ZVwiLCBcIiM1ZWEwNjhcIixcbl0iLCIvKipcbiAqIEFUVEVOVElPTiBSRVNQT05TRVMgRlJPTSBCQUNLRU5EXG4gKlxuICogQ29udGFpbiB0aGUgYXR0ZW50aW9ucyBhbmQgZW1iZWRkaW5ncyBmb3IgYWxsIGNvbWJpbmF0aW9ucyBvZiByZXR1cm5zIGZyb20gdGhlIGJhY2tlbmRcbiAqL1xuXG50eXBlIEFic3RyYWN0QXR0ZW50aW9uUmVzcG9uc2U8VD4gPSB7XG4gICAgYWE6IFRcbn1cblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uUmVzcG9uc2UgPSBBYnN0cmFjdEF0dGVudGlvblJlc3BvbnNlPEF0dGVudGlvbk1ldGFSZXN1bHQ+XG5cbi8qKlxuICogQVRURU5USU9OIFJFU1VMVFMgRlJPTSBCQUNLRU5EXG4gKlxuICogVGhlc2UgYXJlIHRoZSByZXN1bHRzIHRoYXQgYXJlIGVuY2FzZWQgaW4gdGhlICdhYScgYW5kICdhYicga2V5cyByZXR1cm5lZFxuICovXG5cbmV4cG9ydCB0eXBlIEZ1bGxTaW5nbGVUb2tlbkluZm8gPSB7XG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGVtYmVkZGluZ3M6IG51bWJlcltdLFxuICAgIGNvbnRleHRzOiBudW1iZXJbXSxcbiAgICBicGVfdG9rZW46IHN0cmluZyxcbiAgICBicGVfcG9zOiBzdHJpbmcsXG4gICAgYnBlX2RlcDogc3RyaW5nLFxuICAgIGJwZV9pc19lbnQ6IGJvb2xlYW4sXG59XG5cblxudHlwZSBBYnN0cmFjdEF0dGVudGlvblJlc3VsdDxUPiA9IHtcbiAgICBhdHQ6IG51bWJlcltdW11bXSxcbiAgICBsZWZ0OiBULFxuICAgIHJpZ2h0OiBULFxufVxuXG5leHBvcnQgdHlwZSBBdHRlbnRpb25NZXRhUmVzdWx0ID0gQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8RnVsbFNpbmdsZVRva2VuSW5mb1tdPlxuXG4vKipcbiAqIFNFQVJDSCBSRVNVTFQgVFlQRVNcbiAqL1xuXG5pbnRlcmZhY2UgTWF0Y2hlZFRva0F0dCB7XG4gICAgYXR0OiBudW1iZXJbXVxuICAgIG9mZnNldF90b19tYXg6IG51bWJlclxuICAgIGxvY19vZl9tYXg6IG51bWJlclxufVxuXG5cbmludGVyZmFjZSBNYXRjaGVkQXR0ZW50aW9ucyB7XG4gICAgaW46IE1hdGNoZWRUb2tBdHQsXG4gICAgb3V0OiBNYXRjaGVkVG9rQXR0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhaXNzU2VhcmNoUmVzdWx0cyB7XG4gICAgc2VudGVuY2U6IHN0cmluZ1xuICAgIGluZGV4OiBudW1iZXJcbiAgICBtYXRjaDogc3RyaW5nXG4gICAgbWF0Y2hlZF9hdHQ6IE1hdGNoZWRBdHRlbnRpb25zXG4gICAgdG9rZW5zOiBUb2tlbkZhaXNzTWF0Y2hbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRmFpc3NNYXRjaCB7XG4gICAgdG9rZW46IHN0cmluZ1xuICAgIHBvczogc3RyaW5nXG4gICAgZGVwOiBzdHJpbmdcbiAgICBpc19lbnQ6IHN0cmluZ1xuICAgIGlzX21hdGNoOiBib29sZWFuXG4gICAgaW53YXJkOiBudW1iZXJbXVxuICAgIG91dHdhcmQ6IG51bWJlcltdXG59XG5cbi8qKlxuICogRVZFTlQgVFlQRVNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlbkV2ZW50IHtcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlciB8IFwibnVsbFwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRW1iZWRkaW5nRXZlbnQgZXh0ZW5kcyBUb2tlbkV2ZW50IHtcbiAgICBlbWJlZGRpbmdzOiBudW1iZXJbXVxufVxuXG5leHBvcnQgdHlwZSBIZWFkQm94RXZlbnQgPSB7XG4gICAgc2lkZTogU2lkZU9wdGlvbnMsXG4gICAgaW5kOiBudW1iZXIsXG4gICAgaGVhZDogbnVtYmVyLFxufVxuXG4vKipcbiAqIE1JU0NFTExBTkVPVVMgVFlQRVNcbiAqL1xuXG5leHBvcnQgdHlwZSBTZW50ZW5jZU9wdGlvbnMgPSBcImFiXCIgfCBcImJhXCIgfCBcImFhXCIgfCBcImJiXCIgfCBcImFsbFwiO1xuZXhwb3J0IHR5cGUgU2lkZU9wdGlvbnMgPSBcImxlZnRcIiB8IFwicmlnaHRcIlxuZXhwb3J0IHR5cGUgU2ltcGxlTWV0YSA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJpc19lbnRcIlxuZXhwb3J0IHR5cGUgVG9rZW5PcHRpb25zID0gXCJhXCIgfCBcImJcIiB8IFwiYWxsXCJcblxuZXhwb3J0IGVudW0gVG9nZ2xlZCB7XG4gICAgQURERUQgPSAwLFxuICAgIFJFTU9WRUQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgcG9zOiBzdHJpbmdbXSxcbiAgICBkZXA6IHN0cmluZ1tdLFxuICAgIGlzX2VudDogYW55LFxuICAgIGVudHM6IHN0cmluZ1tdLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFPcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgaXNfZW50OiBib29sZWFuW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JNZXRhT3B0aW9ucyBleHRlbmRzIEFic3RyYWN0TWV0YU9wdGlvbnMge1xuICAgIGlzX2VudDogc3RyaW5nW10gLy8gUmVwcmVzZW50aW5nIGhleCBjb2xvcnNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1ldGFTY2FsZSB7XG4gICAgcG9zOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgZGVwOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgaXNfZW50OiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgZW50czogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIG9mZnNldD86IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7ICBcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG4gIH1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogTWFwIGEgbGlzdCBhcyB2YWx1ZXMgdG8gYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBvcmlnaW5hbCBsaXN0XG4gKi9cbi8vIChTdHJpbmcgLT4gYikgIC0+IFtTdHJpbmddIC0+IHtTdHJpbmc6IGJ9XG5leHBvcnQgY29uc3Qgb2JqRnJvbUtleXMgPSBSLmN1cnJ5KChmbiwga2V5cykgPT4gUi56aXBPYmooa2V5cywgUi5tYXAoZm4sIGtleXMpKSkgXG5cbmV4cG9ydCBjb25zdCBhc3NpZ25aZXJvOiAoeDphbnkpID0+IG51bWJlciA9IHggPT4gMDtcblxuLyoqXG4gKiBHaXZlbiBhbiBsaXN0LCBjcmVhdGUgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWxsIDBcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRaZXJvID0gb2JqRnJvbUtleXMoYXNzaWduWmVybykiLCJpbXBvcnQgeyBNYWluR3JhcGhpYyB9IGZyb20gJy4vdmlzL215TWFpbidcbmltcG9ydCB7IEFQSSwgZW1wdHlUb2tlbkRpc3BsYXkgfSBmcm9tICcuL2FwaS9tYWluQXBpJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIgfSBmcm9tICcuL2RhdGEvVG9rZW5XcmFwcGVyJ1xuLy8gaW1wb3J0IHsgVGVzdGVyIH0gZnJvbSBcIi4uL3RzL3Rlc3RcIlxuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1leEJFUlQuaHRtbCEuLi9leEJFUlQuaHRtbFwiO1xuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCJcblxuXG5mdW5jdGlvbiBkb015U3ZnKCkge1xuICAgIHJldHVybiBuZXcgTWFpbkdyYXBoaWMoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRpYyBmaWxlcyBuZWVkZWQgZm9yIHRoZSBkZW1vLiBTYXZlIHRoZSBrZXlzIGFuZCBmaWxlIHBhdGhzIHRvIGEganNvbiBvYmplY3QgdGhhdCBpcyB0aGVuIHdyaXR0ZW4gdG8gYSBmaWxlXG4gKlxuICogVGhpcyB3aWxsIHByaW50IHRoZSBvYmplY3QgYWZ0ZXIgZXZlcnkgY2FsbC4gV2hlbiB0aGUga2V5IGxlbmd0aCBpcyB0aGUgZXhwZWN0ZWQgbGVuZ3RoLCByaWdodCBjbGljayBpbiBjaHJvbWUgYW5kIHNlbGVjdCBcInNhdmUgYXMgZ2xvYmFsIHZhcmlhYmxlXCJcbiAqXG4gKiBUaGVuLCBpbiB0aGUgY29uc29sZSwgdHlwZSBcImNvcHkodGVtcDEpXCIuIFVzZSBzdWJsaW1lIHRleHQgKGl0IGlzIHRoZSBiZXN0IGZvciBoYW5kbGluZyBsYXJnZSBmaWxlcykgdG8gcGFzdGUgdGhpcyBpbnRvIHRoZSBjb2RlIGFuZCBzYXZlIGl0IGFzIF9fX18uanNvblxuICpcbiAqIEBwYXJhbSBzZW50ZW5jZSAtIFRoZSBzZW50ZW5jZSB0byBhbmFseXplXG4gKiBAcGFyYW0gbWFza0luZCAtIFdoaWNoIGluZGV4IHRvIG1hc2sgaW4gdGhlIHNlbnRlbmNlLiBBdG0sIGNhbiBvbmx5IHJlY29yZCBvbmUgbWFza2luZ1xuICogQHBhcmFtIG91dERpY3RQYXRoIC0gV2hlcmUgdG8gc2F2ZSB0aGUgb2JqZWN0IG9mIGhhc2hrZXk6IGZpbGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG4gICAgY29uc3QgbGF5ZXJzID0gXy5yYW5nZSgxMilcblxuICAgIGNvbnN0IEwgPSAwXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9ICAgICAgICAgIC8vIE1hcCBoYXNoIC0+IGNvbnRlbnRzXG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEyKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMoc2VudGVuY2UsIEwsIFwiXCIsIGNvbnRlbnRIYXNoKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwKTtcblxuICAgICAgICAgICAgLy8gVW5tYXNrZWQgcmVzcG9uc2U6XG4gICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSwgXCJcIiwgY29udGVudEhhc2gpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnModG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgZW1wdHlUb2tlbkRpc3BsYXksIFwiXCIsIGNvbnRlbnRIYXNoKS50aGVuKHIyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RXb3pFbWJlZGRpbmdzKGVtYmVkZGluZywgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5jb250ZXh0c1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdFdvekNvbnRleHRzKGNvbnRleHQsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhjb250ZW50SGFzaCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRIYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFxuICogT2JzZXJ2ZSBob3cgdGhlIGRlbW8gY3JlYXRpb24gcHJvY2VzcyB3b3Jrcy5cbiAqIFxuICogSWYgZGVzaXJlZCB0byBtYXNrIG11bHRpcGxlIHdvcmRzIGluIHRoZSBpbnB1dCBmb3IgZGVtbyBwdXJwb3NlcywgdHJ5IGxvb3Bpbmcgb3ZlciB0aGUgbWFzayBpbmRzIGFuZCBtYXNraW5nIGVhY2ggb25lIGluZGl2aWR1YWxseVxuICogXG4gKiBAcGFyYW0gc2VudGVuY2UgVGhlIGRlbW8gc2VudGVuY2VcbiAqIEBwYXJhbSBtYXNrSW5kIERlc2lyZWQgaW5kZXggdG8gbWFzayAoY2FuIGN1cnJlbnRseSBvbmx5IGFjY2VwdCBhIHNpbmdsZSBtYXNrIGluZGV4KVxuICogQHBhcmFtIG91dERpY3RQYXRoIFxuICovXG5mdW5jdGlvbiBpbnNwZWN0RGVtb3Moc2VudGVuY2UsIG1hc2tJbmQ6IG51bWJlciwgb3V0RGljdFBhdGgpIHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKClcblxuICAgIGNvbnN0IGNvbnRlbnRIYXNoID0ge31cblxuICAgIC8vIEdldCB0aGUgYmFzZSByZXR1cm4gZm9yIGFsbCBwYWdlIGluaXRpYWxpemF0aW9uc1xuICAgIF8ucmFuZ2UoMSkuZm9yRWFjaChMID0+IHtcbiAgICAgICAgYXBpLmdldE1ldGFBdHRlbnRpb25zKHNlbnRlbmNlLCBMLCBcIlwiKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwKTtcblxuICAgICAgICAgICAgLy8gVW5tYXNrZWQgcmVzcG9uc2U6XG4gICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSwgXCJcIikudGhlbihyMSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTWFza2VkIHdvcmQgYW5kIHNlYXJjaGluZyByZXNwb25zZXM6XG4gICAgICAgICAgICAgICAgdG9rQ2Fwc3VsZS5hLm1hc2sobWFza0luZClcbiAgICAgICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSwgXCJcIikudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RXb3pFbWJlZGRpbmdzKGVtYmVkZGluZywgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5jb250ZXh0c1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdFdvekNvbnRleHRzKGNvbnRleHQsIEwsIF8ucmFuZ2UoMTIpLCA1MCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXBsVGVzdCgpIHtcbiAgICAvLyBUZXN0ZXIudGVzdEF0dFdyYXBwZXJDb25zdHJ1Y3RvcigpXG4gICAgLy8gVGVzdGVyLnRlc3RVcGRhdGVNYXNrZWRBdHRlbnRpb24oKVxuICAgIC8vIFRlc3Rlci50ZXN0TmpBcmF5KCk7XG4gICAgLy8gVGVzdGVyLnRlc3RSYW5kb21BcnJheUNyZWF0aW9uKCk7XG4gICAgLy8gVGVzdGVyLnRlc3RGYWlzc1dyYXBwZXIoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEQzT3JkaW5hbCgpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NTZWFyY2hSZXN1bHRzSGlzdCgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmVhZGluZ0pTT04oKTtcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBkb015U3ZnKCk7XG4gICAgLy8gcmVwbFRlc3QoKTtcbiAgICAvLyBjcmVhdGVEZW1vcyhcIkNoaWNrZW4gdGFzdGVzIGFic29sdXRlbHkgZGVsaWNpb3VzIGlmIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXCIsIDQsIFwiXCIpXG4gICAgY29uc29sZS5sb2coXCJEb25lIGxvYWRpbmcgd2luZG93XCIpO1xufVxuIiwiaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vZXRjL3R5cGVzXCJcbmltcG9ydCAqIGFzIHhfIGZyb20gXCIuL2V0Yy9fVG9vbHNcIlxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSBcIi4vZXRjL1VSTEhhbmRsZXJcIjtcblxuY29uc3QgZmFsc2V5ID0gdmFsID0+IChuZXcgU2V0KFsnZmFsc2UnLCAwLCBcIm5vXCIsIGZhbHNlLCBudWxsLCBcIlwiXSkpLmhhcyh2YWwpXG5jb25zdCB0cnV0aHkgPSB2YWwgPT4gIWZhbHNleSh2YWwpXG5jb25zdCB0b051bWJlciA9IHggPT4gK3g7XG5cblxudHlwZSBJbnNwZWN0b3JPcHRpb25zID0gXCJjb250ZXh0XCIgfCBcImVtYmVkZGluZ3NcIiB8IG51bGxcblxuLy8gTXVzdCBiZSBvcHRpb25hbCBwYXJhbXMgZm9yIGluaXRpYWxpemF0aW9uc1xuaW50ZXJmYWNlIFVSTFBhcmFtZXRlcnMge1xuICAgIHNlbnRlbmNlPzogc3RyaW5nXG4gICAgbW9kZWw/OiBzdHJpbmdcbiAgICBjb3JwdXM/OiBzdHJpbmdcbiAgICBsYXllcj86IG51bWJlclxuICAgIGhlYWRzPzogbnVtYmVyW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICB0b2tlbkluZD86IG51bWJlcnwgJ251bGwnXG4gICAgdG9rZW5TaWRlPzogdHAuU2lkZU9wdGlvbnNcbiAgICBtZXRhTWF0Y2g/OiB0cC5TaW1wbGVNZXRhIHwgbnVsbFxuICAgIG1ldGFNYXg/OiB0cC5TaW1wbGVNZXRhIHwgbnVsbFxuICAgIGRpc3BsYXlJbnNwZWN0b3I/OiBJbnNwZWN0b3JPcHRpb25zXG4gICAgb2Zmc2V0SWR4cz86IG51bWJlcltdXG4gICAgbWFza0luZHM/OiBudW1iZXJbXVxuICAgIGhpZGVDbHNTZXA/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjbGFzcyBVSUNvbmZpZyB7XG5cbiAgICBwcml2YXRlIF9jb25mOiBVUkxQYXJhbWV0ZXJzID0ge31cbiAgICBwcml2YXRlIF9oZWFkU2V0OiBTZXQ8bnVtYmVyPjtcbiAgICBhdHRUeXBlOiB0cC5TZW50ZW5jZU9wdGlvbnM7XG4gICAgbkhlYWRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdG9rZW46IHRwLlRva2VuRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihuSGVhZHM9MTIpe1xuICAgICAgICB0aGlzLm5IZWFkcyA9IG5IZWFkc1xuICAgICAgICB0aGlzLmF0dFR5cGUgPSAnYWEnOyAvLyBEb24ndCBhbGxvdyB0aGlzIHRvIGJlIG1vZGlmaWVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICB0aGlzLmZyb21VUkwoKVxuICAgICAgICB0aGlzLnRvVVJMKGZhbHNlKVxuICAgIH1cblxuXG4gICAgZnJvbVVSTCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gVVJMSGFuZGxlci5wYXJhbWV0ZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZiA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBwYXJhbXNbJ21vZGVsJ10gfHwgJ2JlcnQtYmFzZS1jYXNlZCcsXG4gICAgICAgICAgICBzZW50ZW5jZTogcGFyYW1zWydzZW50ZW5jZSddIHx8IFwiVGhlIGdpcmwgcmFuIHRvIGEgbG9jYWwgcHViIHRvIGVzY2FwZSB0aGUgZGluIG9mIGhlciBjaXR5LlwiLFxuICAgICAgICAgICAgY29ycHVzOiBwYXJhbXNbJ2NvcnB1cyddIHx8ICd3b3onLFxuICAgICAgICAgICAgbGF5ZXI6IHBhcmFtc1snbGF5ZXInXSB8fCAwLFxuICAgICAgICAgICAgaGVhZHM6IHRoaXMuX2luaXRIZWFkcyhwYXJhbXNbJ2hlYWRzJ10pLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBwYXJhbXNbJ3RocmVzaG9sZCddIHx8IDAuNyxcbiAgICAgICAgICAgIHRva2VuSW5kOiBwYXJhbXNbJ3Rva2VuSW5kJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIHRva2VuU2lkZTogcGFyYW1zWyd0b2tlblNpZGUnXSB8fCBudWxsLFxuICAgICAgICAgICAgbWFza0luZHM6IHBhcmFtc1snbWFza0luZHMnXSB8fCBbOV0sXG4gICAgICAgICAgICBtZXRhTWF0Y2g6IHBhcmFtc1snbWV0YU1hdGNoJ10gfHwgXCJwb3NcIixcbiAgICAgICAgICAgIG1ldGFNYXg6IHBhcmFtc1snbWV0YU1heCddIHx8IFwicG9zXCIsXG4gICAgICAgICAgICBkaXNwbGF5SW5zcGVjdG9yOiBwYXJhbXNbJ2Rpc3BsYXlJbnNwZWN0b3InXSB8fCBudWxsLFxuICAgICAgICAgICAgb2Zmc2V0SWR4czogdGhpcy5faW5pdE9mZnNldElkeHMocGFyYW1zWydvZmZzZXRJZHhzJ10pLFxuICAgICAgICAgICAgaGlkZUNsc1NlcDogdHJ1dGh5KHBhcmFtc1snaGlkZUNsc1NlcCddKSB8fCB0cnVlLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB7c2lkZTogdGhpcy5fY29uZi50b2tlblNpZGUsIGluZDogdGhpcy5fY29uZi50b2tlbkluZH1cblxuICAgIH1cblxuICAgIHRvVVJMKHVwZGF0ZUhpc3Rvcnk9ZmFsc2UpIHtcbiAgICAgICAgVVJMSGFuZGxlci51cGRhdGVVcmwodGhpcy5fY29uZiwgdXBkYXRlSGlzdG9yeSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0T2Zmc2V0SWR4cyh2OihzdHJpbmcgfCBudW1iZXIpW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbLTEsIDAsIDFdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJBcnIgPSBSLm1hcCh0b051bWJlciwgdik7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyQXJyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEhlYWRzKHY6bnVtYmVyW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQodikpLl9jb25mLmhlYWRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZHMoKVxuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdEFsbEhlYWRzKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkcygpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEhlYWRzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9IZWFkcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RBbGxIZWFkcygpIHtcbiAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQoXy5yYW5nZSgwLCB0aGlzLm5IZWFkcykpKVxuICAgIH1cblxuICAgIHNlbGVjdE5vSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KFtdKSlcbiAgICB9XG5cbiAgICB0b2dnbGVIZWFkKGhlYWQ6bnVtYmVyKTp0cC5Ub2dnbGVkIHtcbiAgICAgICAgbGV0IG91dDtcbiAgICAgICAgaWYgKHRoaXMuaGVhZFNldCgpLmhhcyhoZWFkKSl7XG4gICAgICAgICAgICB0aGlzLmhlYWRTZXQoKS5kZWxldGUoaGVhZCk7XG4gICAgICAgICAgICBvdXQgPSB0cC5Ub2dnbGVkLlJFTU9WRURcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmFkZChoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuQURERURcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aHJvdWdoIHNldHRlciBmdW5jdGlvbiB0byBlbnN1cmUgdXJsIGlzIHVwZGF0ZWRcbiAgICAgICAgdGhpcy5oZWFkU2V0KHRoaXMuaGVhZFNldCgpKTsgLy8gSSBoYXRlIG11dGFibGUgZGF0YXN0cnVjdHVyZXMuLi4gVGhpcyBpcyBjb25mdXNpbmcuXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIHRvZ2dsZVRva2VuKGU6dHAuVG9rZW5FdmVudCk6dGhpcyB7XG4gICAgICAgIGNvbnN0IHBpY2tlciA9IFIucGljayhbJ2luZCcsICdzaWRlJ10pXG4gICAgICAgIGNvbnN0IGNvbXBhcmVFdmVudCA9IHBpY2tlcihlKVxuICAgICAgICBjb25zdCBjb21wYXJlVG9rZW4gPSBwaWNrZXIodGhpcy50b2tlbigpKVxuXG4gICAgICAgIGlmIChSLmVxdWFscyhjb21wYXJlVG9rZW4sY29tcGFyZUV2ZW50KSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRU1PVklORyBUT0tFTlwiKTtcbiAgICAgICAgICAgIHRoaXMucm1Ub2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2tlbihlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b2tlbigpOiB0cC5Ub2tlbkV2ZW50O1xuICAgIHRva2VuKHZhbDp0cC5Ub2tlbkV2ZW50KTogdGhpcztcbiAgICB0b2tlbih2YWw/OnRwLlRva2VuRXZlbnQpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuXG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWw7XG4gICAgICAgIHRoaXMuX2NvbmYudG9rZW5JbmQgPSB2YWwuaW5kO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuU2lkZSA9IHZhbC5zaWRlO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBybVRva2VuKCkge1xuICAgICAgICB0aGlzLnRva2VuKHtpbmQ6bnVsbCwgc2lkZTpudWxsfSk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgc2VudGVuY2UoKTogc3RyaW5nO1xuICAgIHNlbnRlbmNlKHZhbDpzdHJpbmcpOiB0aGlzO1xuICAgIHNlbnRlbmNlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYuc2VudGVuY2VcblxuICAgICAgICB0aGlzLl9jb25mLnNlbnRlbmNlID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyO1xuICAgIHRocmVzaG9sZCh2YWw6IG51bWJlcik6IHRoaXM7XG4gICAgdGhyZXNob2xkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi50aHJlc2hvbGQ7XG5cbiAgICAgICAgdGhpcy5fY29uZi50aHJlc2hvbGQgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5oZWFkc1xuICAgIH1cblxuICAgIGxheWVyKCk6IG51bWJlclxuICAgIGxheWVyKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGxheWVyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYubGF5ZXJcblxuICAgICAgICB0aGlzLl9jb25mLmxheWVyID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGVhZFNldCgpOiBTZXQ8bnVtYmVyPjtcbiAgICBoZWFkU2V0KHZhbDogU2V0PG51bWJlcj4pOiB0aGlzO1xuICAgIGhlYWRTZXQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkU2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGVhZFNldCA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi5oZWFkcyA9IHhfLnNldDJTb3J0ZWRBcnJheSh0aGlzLl9oZWFkU2V0KVxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbWV0YU1hdGNoKCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1hdGNoKHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1hdGNoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tZXRhTWF4O1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1heCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtZXRhTWF4KCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1heCh2YWw6IHRwLlNpbXBsZU1ldGEpOiB0aGlzO1xuICAgIG1ldGFNYXgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXRjaDtcblxuICAgICAgICB0aGlzLl9jb25mLm1ldGFNYXRjaCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYXNrSW5kcygpOiBudW1iZXJbXTtcbiAgICBtYXNrSW5kcyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBtYXNrSW5kcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWFza0luZHM7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tYXNrSW5kcyA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwbGF5SW5zcGVjdG9yKCk6IEluc3BlY3Rvck9wdGlvbnM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw6IEluc3BlY3Rvck9wdGlvbnMpOiB0aGlzO1xuICAgIGRpc3BsYXlJbnNwZWN0b3IodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3I7XG5cbiAgICAgICAgdGhpcy5fY29uZi5kaXNwbGF5SW5zcGVjdG9yID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZnNldElkeHMoKTogbnVtYmVyW107XG4gICAgb2Zmc2V0SWR4cyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBvZmZzZXRJZHhzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5vZmZzZXRJZHhzO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbnVtYmVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYub2Zmc2V0SWR4cyA9IFIubWFwKHRvTnVtYmVyLCB2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGVDbHNTZXAoKTogYm9vbGVhbjtcbiAgICBoaWRlQ2xzU2VwKHZhbDogYm9vbGVhbik6IHRoaXM7XG4gICAgaGlkZUNsc1NlcCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuaGlkZUNsc1NlcDtcblxuICAgICAgICB0aGlzLl9jb25mLmhpZGVDbHNTZXAgPSB0cnV0aHkodmFsKTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtb2RlbCgpOiBzdHJpbmc7XG4gICAgbW9kZWwodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIG1vZGVsKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBjb3JwdXMoKTogc3RyaW5nO1xuICAgIGNvcnB1cyh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgY29ycHVzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5jb3JwdXNcbiAgICAgICAgdGhpcy5fY29uZi5jb3JwdXMgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQge0QzU2VsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7RWRnZSwgRWRnZURhdGF9IGZyb20gXCIuL0VkZ2VDb25uZWN0b3JcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7c2NhbGVMaW5lYXJXaWR0aH0gZnJvbSBcIi4vRm9ybWF0VXRpbHNcIlxuXG5leHBvcnQgdHlwZSBBdHRlbnRpb25EYXRhID0gbnVtYmVyW11bXVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uR3JhcGggZXh0ZW5kcyBWQ29tcG9uZW50PEF0dGVudGlvbkRhdGE+e1xuICAgIGNzc19uYW1lID0gJyc7XG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgX2RhdGE6IEF0dGVudGlvbkRhdGE7IC8vIFRoZSBwYXNzZWQgZGF0YVxuICAgIGVkZ2VEYXRhOiBFZGdlRGF0YTsgLy8gQSB3cmFwcGVyIGFyb3VuZCBfZGF0YS4gVXNlciBzaG91bGQgbm90IG1pbmRcbiAgICBwbG90RGF0YTogRWRnZVtdOyAvLyBOZWVkZWQgZm9yIHBsb3R0aW5nXG5cbiAgICAvKiogQ09NUE9ORU5UU1xuICAgICAqIEV4cG9zZSB0aGUgY29tcG9uZW50cyBiZWxvbmdpbmcgdG8gdGhlIGNsYXNzIGFzIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzLiBcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjcmVhdGUgbWV0aG9kcyB0aGF0IHNwZWNpZmljYWxseSBtb2RpZnkgYSBzaW5nbGUgcGFydCBvciBjb21wb25lbnQgd2l0aG91dCBoYXZpbmcgdG8gcmVzZWxlY3QgaXQuIFxuICAgICAqIE1ha2VzIGZvciBtb3JlIHJlc3BvbnNpdmUgYXBwbGljYXRpb25zXG4gICAgICogKi9cbiAgICBzdmc6IEQzU2VsO1xuICAgIGdyYXBoOiBEM1NlbDtcblxuICAgIC8vIFRoZSBiZWxvdyBjb21wb25lbnRzIHJlcXVpcmUgZGF0YVxuICAgIHBhdGhzOiBEM1NlbDtcbiAgICBvcGFjaXR5U2NhbGVzOiBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXTtcbiAgICBsaW5rR2VuOiBkMy5MaW5rPGFueSwgYW55LCBhbnk+XG5cbiAgICAvLyBPUFRJT05TIFdJVEggREVGQVVMVFNcbiAgICBfdGhyZXNob2xkID0gMC43OyAvLyBBY2N1bXVsYXRpb24gdGhyZXNob2xkLiBCZXR3ZWVuIDAtMVxuICAgIG5vcm1CeUdyb3VwID0gZmFsc2U7IC8vIFdoZXRoZXIgdG8gbm9ybWFsaXplIGNvbm5lY3Rpb24gd2lkdGggYnkgc3JjLWdyb3VwIG9yIG5vdFxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHsgfSAvLyBObyBldmVudHMgbmVlZGVkIGZvciB0aGlzIG9uZVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNiwgLy8gVGhlIGhlaWdodCBvZiB0aGUgZGl2IGJveGVzIGFyb3VuZCB0aGUgU1ZHIGVsZW1lbnRcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5ncmFwaCA9IHRoaXMuc3ZnLnNlbGVjdEFsbChgLmF0bi1jdXJ2ZWApO1xuICAgICAgICB0aGlzLmxpbmtHZW4gPSBkMy5saW5rSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAueChkID0+IGRbMF0pXG4gICAgICAgICAgICAueShkID0+IGRbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBjb25uZWN0aW9ucyBiZXR3ZWVuIGxvY2F0aW9ucyBvZiB0aGUgU1ZHIHVzaW5nIEQzJ3MgbGlua0dlblxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5wYXRocykge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRycyh7XG4gICAgICAgICAgICAgICAgJ2QnOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiB7IHNvdXJjZTogW251bWJlciwgbnVtYmVyXSwgdGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdIH0gPVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogWzAsIG9wLmJveGhlaWdodCAqIChkLmkgKyAwLjUpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtvcC53aWR0aCwgb3AuYm94aGVpZ2h0ICogKGQuaiArIDAuNSldIC8vICsgMiBhbGxvd3Mgc21hbGwgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rR2VuKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2F0bi1jdXJ2ZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcInNyYy1pZHhcIiwgKGQsIGkpID0+IGQuaSlcbiAgICAgICAgICAgIC5hdHRyKFwidGFyZ2V0LWlkeFwiLCAoZCwgaSkgPT4gZC5qKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgaGVpZ2h0IG9mIHRoZSBTVkdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ZnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZnLmF0dHIoXCJoZWlnaHRcIiwgdGhpcy5vcHRpb25zLmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIHdpZHRoIG9mIHRoZSBTVkdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZVdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcIndpZHRoXCIsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIE9wYWNpdHkgb2YgdGhlIGxpbmVzIGFjY29yZGluZyB0byB0aGUgdmFsdWUgb2YgdGhlIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLm9wYWNpdHlTY2FsZXNbZC5pXShkLnYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkLmldKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlTGluZWFyV2lkdGgodmFsKSAvLzUgKiB2YWxeMC4zMztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVyZW5kZXIgdGhlIGdyYXBoIGluIHRoZSBldmVudCB0aGF0IHRoZSBkYXRhIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hdG4tY3VydmVcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIHRoaXMucGF0aHMgPSB0aGlzLmdyYXBoXG4gICAgICAgICAgICAgICAgLmRhdGEodGhpcy5wbG90RGF0YSlcbiAgICAgICAgICAgICAgICAuam9pbigncGF0aCcpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBvcGFjaXR5IGFjY29yZGluZyB0byB0aGUgdmFsdWVzIG9mIHRoZSBkYXRhLCBmcm9tIDAgdG8gbWF4IG9mIGNvbnRhaW5lZCBkYXRhXG4gICAgICogTm9ybWFsaXplIGJ5IGVhY2ggc291cmNlIHRhcmdldCwgb3IgYWNyb3NzIHRoZSB3aG9sZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2NhbGVzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcblxuICAgICAgICAvLyBHcm91cCBub3JtYWxpemF0aW9uXG4gICAgICAgIGlmICh0aGlzLm5vcm1CeUdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmVkZ2VEYXRhLmV4dGVudCgxKTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsaSkgPT4ge1xuICAgICAgICAgICAgICAgICh0aGlzLm9wYWNpdHlTY2FsZXMgYXMgZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W10pLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHZbMV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLDAuOV0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6YXRpb24gYWNyb3NzIHRoZSB3aG9sZVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1heEluID0gZDMubWF4KHRoaXMucGxvdERhdGEubWFwKChkKSA9PiBkLnYpKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzLnB1c2goIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4SW5dKVxuICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGRhdGEgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGRhdGEoKTpBdHRlbnRpb25EYXRhXG4gICAgZGF0YSh2YWx1ZTpBdHRlbnRpb25EYXRhKTp0aGlzXG4gICAgZGF0YSh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZWRnZURhdGEgPSBuZXcgRWRnZURhdGEodmFsdWUpO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgaGVpZ2h0IGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBoZWlnaHQoKTpudW1iZXJcbiAgICBoZWlnaHQodmFsdWU6bnVtYmVyKTp0aGlzXG4gICAgaGVpZ2h0KHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgPSB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgd2lkdGggaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHdpZHRoKCk6bnVtYmVyXG4gICAgd2lkdGgodmFsdWU6bnVtYmVyKTp0aGlzXG4gICAgd2lkdGgodmFsdWU/Om51bWJlcik6dGhpc3xudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHRocmVzaG9sZCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgdGhyZXNob2xkKCk6bnVtYmVyXG4gICAgdGhyZXNob2xkKHZhbHVlOm51bWJlcik6dGhpc1xuICAgIHRocmVzaG9sZCh2YWx1ZT8pe1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGxvdERhdGEgPSB0aGlzLmVkZ2VEYXRhLmZvcm1hdCh0aGlzLl90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogQXR0ZW50aW9uRGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5zdmcuaHRtbCgnJylcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge1ZDb21wb25lbnR9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQge0QzU2VsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7U1ZHfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcblxuLy8gVGhlIGJlbG93IHR3byAoaW50ZXJmYWNlIGFuZCBmdW5jdGlvbikgY2FuIGJlY29tZSBhIGNsYXNzXG5leHBvcnQgdHlwZSBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICByb3dzOiBudW1iZXJbXVtdLFxuICAgIGxhYmVsczogbnVtYmVyW10sXG4gICAgbWF4OiBudW1iZXIsXG59XG5cbi8qKlxuICogRnJvbSBhbiBhdHRlbnRpb24gbWF0cml4IHNlbGVjdGVkIGJ5IGxheWVyLCBzaG93IGEgc3VtbWFyeSBvZiB0aGUgYXR0ZW50aW9ucyBiZWxvbmdpbmcgdG8gZWFjaCBoZWFkLlxuICogXG4gKiBAcGFyYW0gaGVhZE1hdCBUaGUgbWF0cml4IHJlcHJlc2VudGluZyBhbGwgdGhlIGF0dGVudGlvbnMgYnkgaGVhZCAobGF5ZXIgYWxyZWFkeSBzZWxlY3RlZClcbiAqIEBwYXJhbSBoZWFkTGlzdCBUaGUgaGVhZHMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAqIEBwYXJhbSBzaWRlIElzIHRoaXMgdGhlIHJpZ2h0IG9yIHRoZSBsZWZ0IGRpc3BsYXk/XG4gKiBAcmV0dXJucyBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gbGFiZWwgdGhlIGhlYWRib3hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGVudGlvbkluZm8oaGVhZE1hdDpudW1iZXJbXVtdW10sIGhlYWRMaXN0Om51bWJlcltdLCBzaWRlOlwicmlnaHRcInxcImxlZnRcIj1cImxlZnRcIik6QXR0ZW50aW9uSGVhZEJveEkge1xuICAgIC8vIENvbGxlY3Qgb25seSBmcm9tIGhlYWRsaXN0LCBhdmVyYWdlIGVhY2ggaGVhZCwgdHJhbnNwb3NlIHRvIGVhc2UgaXRlcmF0aW9uXG4gICAgaWYgKGhlYWRMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiBbW11dLFxuICAgICAgICAgICAgbGFiZWxzOiBbXSxcbiAgICAgICAgICAgIG1heDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBheGlzOiBudW1iZXIgPSBzaWRlID09IFwibGVmdFwiID8gMiA6IDE7XG5cbiAgICAvLyBhdmVyYWdlIGFjcm9zcyB0aGUgYXhpcyByZXByZXNlbnRpbmcgdGhlIGF0dGVudGlvbnMuXG4gICAgbGV0IGdhdGhlcmVkTWF0ID0gdGYudGVuc29yM2QoaGVhZE1hdCkuZ2F0aGVyKGhlYWRMaXN0LCAwKS5tZWFuKFtheGlzXSkudHJhbnNwb3NlKCk7XG5cbiAgICBjb25zdCByb3dJbmZvID0gPG51bWJlcltdW10+Z2F0aGVyZWRNYXQuYXJyYXlTeW5jKCk7XG5cbiAgICBjb25zdCBvdXQ6QXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgICAgIHJvd3M6IHJvd0luZm8sXG4gICAgICAgIGxhYmVsczogaGVhZExpc3QsXG4gICAgICAgIG1heDogPG51bWJlcj5nYXRoZXJlZE1hdC5tYXgoKS5hcnJheVN5bmMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0XG59XG5cbmludGVyZmFjZSBDdXJyZW50T3B0aW9ucyB7XG4gICAgICAgIGhlYWRIZWlnaHQ6IG51bWJlclxuICAgICAgICBoZWFkV2lkdGg6IG51bWJlclxuICAgICAgICB4UGFkOiBudW1iZXJcbiAgICAgICAgeVBhZDogbnVtYmVyXG4gICAgICAgIGJveFdpZHRoOiBudW1iZXJcbiAgICAgICAgdG90YWxXaWR0aDogbnVtYmVyXG4gICAgICAgIHRvdGFsSGVpZ2h0OiBudW1iZXJcbiAgICB9O1xuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uSGVhZEJveCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uSGVhZEJveEk+e1xuICAgIGNzc19uYW1lID0gJyc7XG4gICAgcm93Q3NzTmFtZSA9ICdhdHQtaGVhZCc7XG4gICAgYm94Q3NzTmFtZSA9ICdhdHQtcmVjdCc7XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQXR0ZW50aW9uSGVhZEJveF9Sb3dNb3VzZU92ZXJcIixcbiAgICAgICAgcm93TW91c2VPdXQ6IFwiQXR0ZW50aW9uSGVhZEJveF9Sb3dNb3VzZU91dFwiLFxuICAgICAgICBib3hNb3VzZU92ZXI6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU92ZXJcIixcbiAgICAgICAgYm94TW91c2VPdXQ6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU91dFwiLFxuICAgICAgICBib3hDbGljazogXCJBdHRlbnRpb25IZWFkQm94X0JveENsaWNrXCIsXG4gICAgfTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25IZWFkQm94STtcblxuICAgIF9jdXJyZW50OiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiA9IHt9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hEaW06IDI2LFxuICAgICAgICB5c2NhbGU6IDEsIC8vIEFtb3VudCB0byBzY2FsZSBib3hoZWlnaHQgdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgeHNjYWxlOiAwLjUsIC8vIEFtb3VudCB0byBzY2FsZSBib3h3aWR0aCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICBzaWRlOiBcImxlZnRcIixcbiAgICB9O1xuXG4gICAgLy8gRDMgQ29tcG9uZW50c1xuICAgIGhlYWRSb3dzOiBEM1NlbDtcbiAgICBoZWFkQ2VsbHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZTogZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLmhlYWRSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5yb3dDc3NOYW1lfWApXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93cy5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwxXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50KCk6UGFydGlhbDxDdXJyZW50T3B0aW9ucz4ge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLl9jdXJyZW50XG4gICAgICAgIFxuICAgICAgICBjdXIuaGVhZEhlaWdodCA9IG9wLmJveERpbSAqIG9wLnlzY2FsZTtcbiAgICAgICAgY3VyLmhlYWRXaWR0aCA9IG9wLmJveERpbSAqIG9wLnhzY2FsZTtcbiAgICAgICAgY3VyLnhQYWQgPSBjdXIuaGVhZFdpZHRoO1xuICAgICAgICBjdXIueVBhZCA9IChvcC5ib3hEaW0gLSBjdXIuaGVhZEhlaWdodCkgLyAyO1xuICAgICAgICBjdXIuYm94V2lkdGggPSAodGhpcy5fZGF0YS5yb3dzWzBdLmxlbmd0aCAqIGN1ci5oZWFkV2lkdGgpO1xuICAgICAgICBjdXIudG90YWxXaWR0aCA9ICgyICogY3VyLnhQYWQpICsgY3VyLmJveFdpZHRoO1xuICAgICAgICBjdXIudG90YWxIZWlnaHQgPSAob3AuYm94RGltICogdGhpcy5fZGF0YS5yb3dzLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgYm94RXZlbnQgPSAoaSkgPT4geyByZXR1cm4ge2luZDppLCBzaWRlOm9wLnNpZGUsIGhlYWQ6IHNlbGYuX2RhdGEubGFiZWxzW2ldfSB9XG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMudXBkYXRlQ3VycmVudCgpXG5cbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuXG4gICAgICAgIHRoaXMucGFyZW50XG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGN1ci50b3RhbFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY3VyLnRvdGFsSGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKHNlbGYuX2RhdGEucm93cylcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBjbGFzczogKGQsIGkpID0+IGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVkcudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN1ci54UGFkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Om9wLmJveERpbSAqIGkgKyBjdXIueVBhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsIFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIHtpbmQ6aSwgc2lkZTpvcC5zaWRlfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsIHtpbmQ6aSwgc2lkZTpvcC5zaWRlfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzXG4gICAgICAgICAgICAuc2VsZWN0QWxsKGAke3RoaXMuYm94Q3NzTmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZCA9PiBkKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICB4OiAoZCwgaSkgPT4gaSAqIGN1ci5oZWFkV2lkdGgsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBjbGFzczogdGhpcy5ib3hDc3NOYW1lLFxuICAgICAgICAgICAgICAgIGhlYWQ6IChkLCBpKSA9PiBzZWxmLl9kYXRhLmxhYmVsc1tpXSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmhlYWRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGN1ci5oZWFkSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IChkOm51bWJlcikgPT4gdGhpcy5vcGFjaXR5U2NhbGUoZCksXG4gICAgICAgICAgICAgICAgZmlsbDogXCJibHVlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3V0LCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiBcIkhlYWQgXCIgKyBzZWxmLl9kYXRhLmxhYmVsc1tpXSlcbiAgICB9XG5cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IHRoaXMub3BhY2l0eVNjYWxlLmRvbWFpbihbMCwgZGF0YS5tYXhdKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge1ZDb21wb25lbnR9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtzcGFjeUNvbG9yc30gZnJvbSAnLi4vZXRjL1NwYWN5SW5mbydcbmltcG9ydCB7U1ZHfSBmcm9tICcuLi9ldGMvU1ZHcGx1cydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5cbmludGVyZmFjZSBNYXJnaW5JbmZvIHtcbiAgICB0b3A6IG51bWJlcixcbiAgICBib3R0b206IG51bWJlcixcbiAgICByaWdodDogbnVtYmVyLFxuICAgIGxlZnQ6IG51bWJlclxufVxuXG4vLyBEZXBlbmRlbnQgb24gdGhlIG9wdGlvbnMgaW4gdGhlIHJlc3BvbnNlXG50eXBlIE1hdGNoZWRNZXRhU2VsZWN0aW9ucyA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJlbnRcIlxuXG5pbnRlcmZhY2UgTWF0Y2hlZE1ldGFDb3VudCB7XG4gICAgcG9zOiBudW1iZXJcbiAgICBkZXA6IG51bWJlclxuICAgIGlzX2VudDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBNYXhBdHRNZXRhQ291bnQge1xuICAgIG9mZnNldDogbnVtYmVyXG59XG5cbnR5cGUgTWF0Y2hlZERhdGFJbnRlcmZhY2UgPSBNYXRjaGVkTWV0YUNvdW50XG50eXBlIE1heEF0dERhdGFJbnRlcmZhY2UgPSBNYXhBdHRNZXRhQ291bnRcbnR5cGUgRGF0YUludGVyZmFjZSA9IE1hdGNoZWREYXRhSW50ZXJmYWNlIHwgTWF4QXR0RGF0YUludGVyZmFjZVxuXG5pbnRlcmZhY2UgQ291bnRlZEhpc3Qge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY291bnQ6IG51bWJlclxufVxuXG50eXBlIFJlbmRlckRhdGFJbnRlcmZhY2UgPSBDb3VudGVkSGlzdFtdXG5cblxuLyoqXG4gKiAgRGF0YSBmb3JtYXR0aW5nIGZ1bmN0aW9uc1xuICovXG5jb25zdCB0b1JlbmRlckRhdGEgPSAob2JqOiB7W3M6IHN0cmluZ106IG51bWJlcn0pOiBSZW5kZXJEYXRhSW50ZXJmYWNlID0+IE9iamVjdC5rZXlzKG9iaikubWFwKChrLCBpKSA9PiB7XG4gICAgcmV0dXJuIHtsYWJlbDogaywgY291bnQ6IG9ialtrXX1cbn0pXG5cbmNvbnN0IHRvU3RyaW5nT3JOdW0gPSAoYTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuYSA9ICthXG4gICAgaWYgKGlzTmFOKG5hKSkge1xuICAgICAgICByZXR1cm4gYVxuICAgIH1cbiAgICByZXR1cm4gbmFcbn1cblxuY29uc3Qgc29ydEJ5TGFiZWwgPSBSLnNvcnRCeShSLmNvbXBvc2UodG9TdHJpbmdPck51bSwgUi5wcm9wKCdsYWJlbCcpKSlcbmNvbnN0IHNvcnRCeUNvdW50ID0gUi5zb3J0QnkoUi5wcm9wKCdjb3VudCcpKVxuXG5jb25zdCB0b09yZGVyZWRSZW5kZXIgPSBSLmNvbXBvc2UoXG4gICAgUi5yZXZlcnNlLFxuICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogZml4XG4gICAgc29ydEJ5Q291bnQsXG4gICAgdG9SZW5kZXJEYXRhXG4pXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNIaXN0b2dyYW08VD4gZXh0ZW5kcyBWQ29tcG9uZW50PFQ+IHtcblxuICAgIGNzc19uYW1lID0gJydcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fVxuXG4gICAgX2N1cnJlbnQgPSB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRDMgQ09NUE9ORU5UU1xuICAgIHN2ZzogRDNTZWxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgICAgIGJhcldpZHRoOiBudW1iZXJcbiAgICAgICAgd2lkdGg6IG51bWJlclxuICAgICAgICBoZWlnaHQ6IG51bWJlclxuICAgICAgICB2YWw6IHN0cmluZ1xuICAgICAgICB4TGFiZWxSb3Q6IG51bWJlclxuICAgICAgICB4TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgICAgICB5TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgIH1cblxuICAgIGF4ZXMgPSB7XG4gICAgICAgIHg6IGQzLnNjYWxlQmFuZCgpLFxuICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLFxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM9e30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICByaWdodDogMzAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcldpZHRoOiAyNSxcbiAgICAgICAgICAgIHdpZHRoOiAxODUsXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgIHZhbDogXCJwb3NcIiwgLy8gQ2hhbmdlIERlZmF1bHQsIHBhc3MgdGhyb3VnaCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgeExhYmVsUm90OiA0NSxcbiAgICAgICAgICAgIHhMYWJlbE9mZnNldDogMTUsXG4gICAgICAgICAgICB5TGFiZWxPZmZzZXQ6IDUsXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRygpXG4gICAgfVxuXG4gICAgbWV0YSgpOk1hdGNoZWRNZXRhU2VsZWN0aW9uc1xuICAgIG1ldGEodmFsOk1hdGNoZWRNZXRhU2VsZWN0aW9ucyk6IHRoaXNcbiAgICBtZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy52YWwgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuX2RhdGEpXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVYQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCB3aWR0aCA9IG9wLndpZHRoIC0gb3AubWFyZ2luLmxlZnQgLSBvcC5tYXJnaW4ucmlnaHRcblxuICAgICAgICB0aGlzLmF4ZXMueFxuICAgICAgICAgICAgLmRvbWFpbihSLm1hcChSLnByb3AoJ2xhYmVsJyksIHNlbGYucmVuZGVyRGF0YSkpXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoMC4xKVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuY2hhcnQud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVlBeGlzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wLmhlaWdodCAtIG9wLm1hcmdpbi50b3AgLSBvcC5tYXJnaW4uYm90dG9tXG5cbiAgICAgICAgdGhpcy5heGVzLnlcbiAgICAgICAgICAgIC5kb21haW4oWzAsICtkMy5tYXgoUi5tYXAoUi5wcm9wKCdjb3VudCcpLCBzZWxmLnJlbmRlckRhdGEpKV0pXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSlcblxuICAgICAgICB0aGlzLl9jdXJyZW50LmNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVlBeGlzKClcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IGRhdGFbdGhpcy5vcHRpb25zLnZhbF1cbiAgICAgICAgcmV0dXJuIHRvT3JkZXJlZFJlbmRlcihvdXQpXG4gICAgfVxuXG4gICAgd2lkdGgoKTpudW1iZXJcbiAgICB3aWR0aCh2YWw6bnVtYmVyKTp0aGlzXG4gICAgd2lkdGgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCk6bnVtYmVyXG4gICAgaGVpZ2h0KHZhbDpudW1iZXIpOnRoaXNcbiAgICBoZWlnaHQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVZQXhpcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVdpZHRoKCkge1xuICAgICAgICB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdmcuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodClcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpZ1dpZHRoKGRhdGE6IFJlbmRlckRhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiAoZGF0YS5sZW5ndGggKiBvcC5iYXJXaWR0aCkgKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodFxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTpSZW5kZXJEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuaHRtbCgnJylcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudFxuXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpO1xuICAgICAgICB0aGlzLndpZHRoKHRoaXMuZmlnV2lkdGgoZGF0YSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgYXhlc1xuICAgICAgICBjb25zdCBnID0gc2VsZi5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSh7eDogb3AubWFyZ2luLmxlZnQsIHk6b3AubWFyZ2luLnRvcH0pKVxuXG4gICAgICAgIC8vIEhhY2sgdG8gYWxsb3cgY2xlYXJpbmcgdGhpcyBoaXN0b2dyYW1zIHRvIHdvcmtcbiAgICAgICAgc2VsZi5iYXNlID0gZ1xuXG4gICAgICAgIC8vIEZpeCBiZWxvdyBmb3IgcG9zaXRpb25hbCBjaGFuZ2luZ1xuICAgICAgICAgICAgY29uc3QgYXhpc0JvdHRvbSA9IGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoe3g6IDAsIHk6Y3Vyci5jaGFydC5oZWlnaHR9KSlcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNlbGYuYXhlcy54KSlcblxuICAgICAgICAgICAgaWYgKG9wLnZhbCAhPSBcIm9mZnNldFwiKSB7XG4gICAgICAgICAgICAgICAgYXhpc0JvdHRvbVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgb3AueUxhYmVsT2Zmc2V0KSAgIC8vIE1vdmUgYmVsb3cgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnhMYWJlbE9mZnNldCkgIC8vIE9mZnNldCB0byB0aGUgcmlnaHQgYSBiaXRcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZShvcC54TGFiZWxSb3QpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzZWxmLmF4ZXMueSkpXG5cbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLngoZC5sYWJlbCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLnkoZC5jb3VudCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYuYXhlcy54LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY3Vyci5jaGFydC5oZWlnaHQgLSBzZWxmLmF4ZXMueShkLmNvdW50KTsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGsgPT4gc3BhY3lDb2xvcnMuY29sb3JTY2FsZVtvcC52YWxdKGsubGFiZWwpKVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHtkM1MsIEQzU2VsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcbmltcG9ydCAnLi4vZXRjL3hkMydcblxuLy8gSGVscGVyc1xuY29uc3QgY3Vyck1hdGNoSWR4ID0gKGVsZW0pID0+ICsoPEVsZW1lbnQ+ZWxlbS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ21hdGNoaWR4JylcbmNvbnN0IGN1cnJSb3dOdW0gPSAoZWxlbSkgPT4gKyg8RWxlbWVudD5lbGVtLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgncm93bnVtJylcbmNvbnN0IGJhY2tncm91bmRDb2xvciA9IHggPT4gYHJnYmEoMCwgMCwgMjU1LCAkezAuNip4fSlgXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNJbnNwZWN0b3IgZXh0ZW5kcyBWQ29tcG9uZW50PHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdPntcbiAgICBjc3NfbmFtZSA9ICdjb3JwdXMtaW5zcGVjdG9yJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW107IC8vIFRoZSBwYXNzZWQgZGF0YVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgcm93TW91c2VPdmVyOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dNb3VzZU92ZXJcIixcbiAgICAgICAgcm93TW91c2VPdXQ6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd01vdXNlT3V0XCIsXG4gICAgICAgIHJvd0NsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dDbGlja1wiLFxuICAgICAgICByb3dEYmxDbGljazogXCJDb3JwdXNJbnNwZWN0b3Jfcm93RGJsQ2xpY2tcIixcbiAgICAgICAgY2VsbE1vdXNlT3ZlcjogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbE1vdXNlT3ZlclwiLFxuICAgICAgICBjZWxsTW91c2VPdXQ6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxNb3VzZU91dFwiLFxuICAgICAgICBjZWxsQ2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxDbGlja1wiLFxuICAgICAgICBjZWxsRGJsQ2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxEYmxDbGlja1wiLFxuICAgIH1cblxuICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgLy8gQ09NUE9ORU5UU1xuICAgIGluc3BlY3RvclJvd3M6IEQzU2VsXG4gICAgaW5zcGVjdG9yQ2VsbHM6IEQzU2VsXG4gICAgc2NhbGVyID0gZDMuc2NhbGVQb3coKS5yYW5nZShbMCwwLjldKS5leHBvbmVudCgyKVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoXCIuaW5zcGVjdG9yLXJvd1wiKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1yb3cnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBtYXRjaElkeDogZCA9PiBkLmluZGV4LFxuICAgICAgICAgICAgICAgIHJvd051bTogKGQsIGkpID0+IGksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzSW5zcGVjdG9yLmV2ZW50cy5yb3dNb3VzZU92ZXIsIHt9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvckNlbGxzXG4gICAgICAgICAgICAuY2xhc3NlZCgnY2VsbHRvb2x0aXAnLCB0cnVlKVxuICAgICAgICAgICAgLmFwcGVuZCgnc3BhbicpXG4gICAgICAgICAgICAuY2xhc3NlZCgndG9vbHRpcHRleHQnLCB0cnVlKVxuICAgICAgICAgICAgLmh0bWwoKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlTdHIgPSBkLmlzX2VudCA/IFwiPGJyPkVudGl0eVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9ICg8RWxlbWVudD5uW2ldLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgnYXR0Jykuc2xpY2UoMCwgNylcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRTdHIgPSBgPGJyPkF0dGVudGlvbjogJHthdHR9YFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBQT1M6ICR7ZC5wb3MudG9Mb3dlckNhc2UoKX08YnI+REVQOiAke2QuZGVwLnRvTG93ZXJDYXNlKCl9YCArIGVudGl0eVN0ciArIGF0dFN0clxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvclJvd3Muc2VsZWN0QWxsKCcuaW5zcGVjdG9yLWNlbGwnKVxuICAgICAgICAgICAgLmRhdGEoKGQ6dHAuRmFpc3NTZWFyY2hSZXN1bHRzKSA9PiBkLnRva2VucylcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1jZWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdpbmRleC1vZmZzZXQnLCAoZCwgaSwgbjpIVE1MRWxlbWVudFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hJZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAtIG1hdGNoSWR4IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgcG9zOiBkID0+IGQucG9zLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgZGVwOiBkID0+IGQuZGVwLnRvTG93ZXJDYXNlKCksIFxuICAgICAgICAgICAgICAgIGlzX2VudDogZCA9PiBkLmlzX2VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC50b2tlbi5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIikpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0Y2hlZC1jZWxsJywgZCA9PiBkLmlzX21hdGNoKVxuXG4gICAgICAgIC8vIEhpZ2hsaWdodCB0aGUgY2VsbHMgYXBwcm9wcmlhdGVseVxuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzLmVhY2goKGQsaSxuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgIGlmIChpID09IGlkeCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGQuaW53YXJkXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4QXR0ID0gK2QzLm1heChhdHQpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclJvdyA9IGN1cnJSb3dOdW0obltpXSlcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZXIgPSBzZWxmLnNjYWxlci5kb21haW4oWzAsIG1heEF0dF0pXG5cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtjdXJyUm93fSddYClcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChgLmluc3BlY3Rvci1jZWxsYClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3Ioc2NhbGVyKGF0dFtpXSkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhdHQnLCAoZCwgaSkgPT4gYXR0W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkVG9vbHRpcCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKVxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHt9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoYXQgdGhpcy5fZGF0YSBpcyBkZWZpbmVkIGluIHdyYW5nbGUgd2hpY2ggc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIHJlbmRlclxuICAgICAgICAvLyBhcyBpcyBkZWZpbmVkIGluIHRoZSB1cGRhdGUgZnVuY3Rpb25cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKClcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tICcuLi92aXMvVmlzQ29tcG9uZW50J1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi9ldGMvU1ZHcGx1c1wiXG5pbXBvcnQgeyBzcGFjeUNvbG9ycyB9IGZyb20gXCIuLi9ldGMvU3BhY3lJbmZvXCJcbmltcG9ydCBcIi4uL2V0Yy94ZDNcIlxuXG4vLyBOZWVkIGFkZGl0b2luYWwgaGVpZ2h0IGluZm9ybWF0aW9uIHRvIHJlbmRlciBib3hlc1xuaW50ZXJmYWNlIEJhc2VEYXRhSW50ZXJmYWNlIGV4dGVuZHMgdHAuRmFpc3NTZWFyY2hSZXN1bHRzIHtcbiAgICBoZWlnaHQ6IG51bWJlclxufVxudHlwZSBEYXRhSW50ZXJmYWNlID0gQmFzZURhdGFJbnRlcmZhY2VbXVxuXG5pbnRlcmZhY2UgQ29sb3JNZXRhQmFzZURhdGEge1xuICAgIHBvczogc3RyaW5nXG4gICAgZGVwOiBzdHJpbmdcbiAgICBpc19lbnQ6IGJvb2xlYW5cbiAgICB0b2tlbjogc3RyaW5nXG59XG5cbnR5cGUgRGlzcGxheU9wdGlvbnMgPSBcInBvc1wiIHwgXCJkZXBcIiB8IFwiZW50XCJcblxuZnVuY3Rpb24gbWFuYWdlckRhdGEyTWF0RGF0YShkYXRhSW46IERhdGFJbnRlcmZhY2UsIGluZGV4T2Zmc2V0ID0gMCwgdG9QaWNrID0gWydwb3MnXSkge1xuXG4gICAgY29uc3Qgb3V0T2ZSYW5nZU9iajogQ29sb3JNZXRhQmFzZURhdGEgPSB7XG4gICAgICAgIHBvczogbnVsbCxcbiAgICAgICAgZGVwOiBudWxsLFxuICAgICAgICBpc19lbnQ6IG51bGwsXG4gICAgICAgIHRva2VuOiBudWxsLFxuICAgIH1cblxuICAgIGNvbnN0IGNob29zZVByb3BzID0gUi5waWNrKHRvUGljaylcblxuICAgIGNvbnN0IGRhdGFPdXQgPSBkYXRhSW4ubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCB3b3JkSWR4ID0gZC5pbmRleCArIGluZGV4T2Zmc2V0O1xuICAgICAgICBpZiAoKHdvcmRJZHggPCAwKSB8fCAod29yZElkeCA+PSBkLnRva2Vucy5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gUi5hc3NvYygnaGVpZ2h0JywgZC5oZWlnaHQsIG91dE9mUmFuZ2VPYmopXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdPYmogPSBjaG9vc2VQcm9wcyhkLnRva2Vuc1t3b3JkSWR4XSlcblxuICAgICAgICByZXR1cm4gUi5hc3NvYygnaGVpZ2h0JywgZC5oZWlnaHQsIG5ld09iailcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRhdGFPdXRcbn1cblxuXG5leHBvcnQgY2xhc3MgQ29ycHVzTWF0TWFuYWdlciBleHRlbmRzIFZDb21wb25lbnQ8RGF0YUludGVyZmFjZT57XG4gICAgY3NzX25hbWUgPSAnY29ycHVzLW1hdC1jb250YWluZXInXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgY2VsbFdpZHRoOiAxMCxcbiAgICAgICAgdG9QaWNrOiBbJ3BvcyddLFxuICAgICAgICBpZHhzOiBbLTEsIDAsIDFdLFxuICAgICAgICBkaXZIb3Zlcjoge1xuICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgaGVpZ2h0OiA0MCBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIG1vdXNlT3ZlcjogXCJDb3JwdXNNYXRNYW5hZ2VyX01vdXNlT3ZlclwiLFxuICAgICAgICBtb3VzZU91dDogXCJDb3JwdXNNYXRNYW5hZ2VyX01vdXNlT3V0XCIsXG4gICAgICAgIGNsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfQ2xpY2tcIixcbiAgICAgICAgZGJsQ2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9EYmxDbGlja1wiLFxuICAgICAgICByZWN0TW91c2VPdmVyOiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdE1vdXNlT3ZlclwiLFxuICAgICAgICByZWN0TW91c2VPdXQ6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0TW91c2VPdXRcIixcbiAgICAgICAgcmVjdENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdENsaWNrXCIsXG4gICAgICAgIHJlY3REYmxDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3REYmxDbGlja1wiLFxuICAgIH1cblxuICAgIC8vIFRoZSBkMyBjb21wb25lbnRzIHRoYXQgYXJlIHNhdmVkIHRvIG1ha2UgcmVuZGVyaW5nIGZhc3RlclxuICAgIGNvcnB1c01hdHM6IEQzU2VsXG4gICAgcm93R3JvdXBzOiBEM1NlbFxuICAgIGRpdkhvdmVyOiBEM1NlbFxuXG4gICAgX2N1cnJlbnQgPSB7fVxuICAgIHJvd0Nzc05hbWUgPSAnaW5kZXgtbWF0Y2gtcmVzdWx0cydcbiAgICBjZWxsQ3NzTmFtZSA9ICdpbmRleC1jZWxsLXJlc3VsdCdcblxuICAgIF9kYXRhOiBEYXRhSW50ZXJmYWNlXG5cbiAgICBzdGF0aWMgY29sb3JTY2FsZTogdHAuQ29sb3JNZXRhU2NhbGUgPSBzcGFjeUNvbG9ycy5jb2xvclNjYWxlO1xuXG4gICAgLy8gU2VsZWN0aW9uc1xuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5pZHhzID0gWy0xLCAwLCAxXTtcbiAgICAgICAgdGhpcy5zdXBlckluaXRIVE1MKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIGdldCBpZHhzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlkeHM7XG4gICAgfVxuXG4gICAgc2V0IGlkeHModmFsOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaWR4cyA9IHZhbFxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBzdGF0aWMgZG9tIGVsZW1lbnRzXG4gICAgX2luaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvcnB1c01hdHMgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuY29ycHVzLW1hdCcpXG4gICAgICAgIHRoaXMucm93R3JvdXBzID0gdGhpcy5jb3JwdXNNYXRzLnNlbGVjdEFsbChgLiR7dGhpcy5yb3dDc3NOYW1lfWApXG4gICAgICAgIHRoaXMuZGl2SG92ZXIgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21hdC1ob3Zlci1kaXNwbGF5JywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0ZXh0LWNlbnRlcicsIHRydWUpXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci53aWR0aCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLmhlaWdodCkgKyAncHgnKVxuXG4gICAgICAgIHRoaXMuZGl2SG92ZXIuYXBwZW5kKCdwJylcbiAgICB9XG5cbiAgICBwaWNrKHZhbDogRGlzcGxheU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvUGljayA9IFt2YWxdXG4gICAgICAgIHRoaXMucmVkcmF3KClcbiAgICB9XG5cbiAgICBhZGRSaWdodCgpIHtcbiAgICAgICAgY29uc3QgYWRkZWRJZHggPSBSLmxhc3QodGhpcy5pZHhzKSArIDE7XG4gICAgICAgIHRoaXMuaWR4cy5wdXNoKGFkZGVkSWR4KVxuICAgICAgICB0aGlzLmFkZENvcnB1c01hdChhZGRlZElkeCwgXCJyaWdodFwiKVxuICAgIH1cblxuICAgIGFkZExlZnQoKSB7XG4gICAgICAgIGNvbnN0IGFkZGVkSWR4ID0gdGhpcy5pZHhzWzBdIC0gMTtcbiAgICAgICAgY29uc3QgYWRkRGVjcmVtZW50ZWRIZWFkOiAoeDogbnVtYmVyW10pID0+IG51bWJlcltdID0geCA9PiBSLmluc2VydCgwLCBSLmhlYWQoeCkgLSAxKSh4KVxuICAgICAgICB0aGlzLmlkeHMgPSBhZGREZWNyZW1lbnRlZEhlYWQodGhpcy5pZHhzKVxuICAgICAgICB0aGlzLmFkZENvcnB1c01hdChhZGRlZElkeCwgXCJsZWZ0XCIpXG4gICAgfVxuXG4gICAga2lsbFJpZ2h0KCkge1xuICAgICAgICB0aGlzLmtpbGwoTWF0aC5tYXgoLi4udGhpcy5pZHhzKSlcbiAgICB9XG5cbiAgICBraWxsTGVmdCgpIHtcbiAgICAgICAgdGhpcy5raWxsKE1hdGgubWluKC4uLnRoaXMuaWR4cykpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGVkZ2UgdmFsdWUgZnJvbSBjb250YWluZWQgaW5kZXhlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGQgSW5kZXggdG8gcmVtb3ZlXG4gICAgICovXG4gICAga2lsbChkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGQgIT0gMCkge1xuICAgICAgICAgICAgaWYgKGQgPT0gTWF0aC5taW4oLi4udGhpcy5pZHhzKSB8fCBkID09IE1hdGgubWF4KC4uLnRoaXMuaWR4cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkeHMgPSBSLndpdGhvdXQoW2RdLCB0aGlzLmlkeHMpXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbChgLm9mZnNldC0ke2R9YCkucmVtb3ZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBkYXRhKHZhbD86IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1haW4gcmVuZGVyaW5nIGNvZGUsIGNhbGxlZCB3aGVuZXZlciB0aGUgZGF0YSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKCcuY29ycHVzLW1hdCcpLnJlbW92ZSgpXG5cbiAgICAgICAgdGhpcy5pZHhzLmZvckVhY2goKGlkeE9mZnNldCwgaSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5hZGRDb3JwdXNNYXQoaWR4T2Zmc2V0KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhbm90aGVyIHdvcmQncyBtZXRhIGluZm9ybWF0aW9uIG1hdHJpeCBjb2x1bW4gdG8gZWl0aGVyIHNpZGUgb2YgdGhlIGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaWR4T2Zmc2V0IERpc3RhbmNlIG9mIHdvcmQgZnJvbSBtYXRjaGVkIHdvcmQgaW4gdGhlIHNlbnRlbmNlXG4gICAgICogQHBhcmFtIHRvVGhlIEluZGljYXRlcyBhZGRpbmcgdG8gdGhlIFwibGVmdFwiIG9yIHRvIHRoZSBcInJpZ2h0XCIgb2YgdGhlIGluZGV4XG4gICAgICovXG4gICAgYWRkQ29ycHVzTWF0KGlkeE9mZnNldDogbnVtYmVyLCB0b1RoZTogXCJyaWdodFwiIHwgXCJsZWZ0XCIgPSBcInJpZ2h0XCIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBib3hXaWR0aCA9IG9wLmNlbGxXaWR0aCAqIG9wLnRvUGljay5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJveEhlaWdodCA9IFIuc3VtKFIubWFwKFIucHJvcCgnaGVpZ2h0JyksIHRoaXMuX2RhdGEpKVxuXG4gICAgICAgIGxldCBjb3JwdXNNYXQ7XG5cbiAgICAgICAgaWYgKHRvVGhlID09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgY29ycHVzTWF0ID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b1RoZSA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgY29ycHVzTWF0ID0gdGhpcy5iYXNlLmluc2VydCgnZGl2JywgXCI6Zmlyc3QtY2hpbGRcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwidG9UaGUgbXVzdCBoYXZlIGFyZ3VtZW50IG9mICdsZWZ0JyBvciAncmlnaHQnXCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb3JwdXNNYXQgPSBjb3JwdXNNYXRcbiAgICAgICAgICAgIC5kYXRhKFtpZHhPZmZzZXRdKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGNvcnB1cy1tYXQgb2Zmc2V0LSR7aWR4T2Zmc2V0fWApXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywgaWR4T2Zmc2V0KVxuICAgICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYm94SGVpZ2h0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3ZlciwgeyBpZHg6IGksIG9mZnNldDogZCwgdmFsOiBzZWxmLm9wdGlvbnMudG9QaWNrWzBdIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU91dCwgeyBpZHg6IGksIG9mZnNldDogZCB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZFJvd0dyb3VwKGNvcnB1c01hdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtYXQgVGhlIGJhc2UgZGl2IG9uIHdoaWNoIHRvIGFkZCBtYXRyaWNlcyBhbmQgcm93c1xuICAgICAqL1xuICAgIGFkZFJvd0dyb3VwKG1hdDogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSBSLm1hcChSLnByb3AoJ2hlaWdodCcpLCB0aGlzLl9kYXRhKVxuXG4gICAgICAgIGNvbnN0IFtoZWlnaHRTdW0sIHJhd0hlaWdodExpc3RdID0gUi5tYXBBY2N1bSgoeCwgeSkgPT4gW1IuYWRkKHgsIHkpLCBSLmFkZCh4LCB5KV0sIDAsIGhlaWdodHMpXG4gICAgICAgIGNvbnN0IGZpeExpc3Q6ICh4OiBudW1iZXJbXSkgPT4gbnVtYmVyW10gPSBSLmNvbXBvc2UoUi5kcm9wTGFzdCgxKSxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFIucHJlcGVuZCgwKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IGhlaWdodExpc3QgPSBmaXhMaXN0KHJhd0hlaWdodExpc3QpXG5cbiAgICAgICAgY29uc3Qgcm93R3JvdXAgPSBtYXQuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gbWFuYWdlckRhdGEyTWF0RGF0YShzZWxmLl9kYXRhLCBkLCBvcC50b1BpY2spKVxuICAgICAgICAgICAgLmpvaW4oXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJyb3ctbnVtXCIsIChkLGkpID0+IGkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBkID0+IGQuaGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXQgPSBTVkcudHJhbnNsYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogaGVpZ2h0TGlzdFtpXSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgb3AudG9QaWNrLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBzZWxmLmFkZFJlY3Qocm93R3JvdXAsIDAsIHByb3ApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUmVjdChnOiBEM1NlbCwgeFNoaWZ0OiBudW1iZXIsIHByb3A6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuXG4gICAgICAgIGNvbnN0IHJlY3RzID0gZy5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogb3AuY2VsbFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogZCA9PiBkLmhlaWdodCAtIDMsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU1ZHLnRyYW5zbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB4U2hpZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxLjUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENvcnB1c01hdE1hbmFnZXIuY29sb3JTY2FsZVtwcm9wXShkW3Byb3BdKSlcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuXG4gICAgICAgIGcub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAvLyBHZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gZDMuc2VsZWN0KHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlKSAvLyBDb2x1bW5cbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSArY29sLmF0dHIoJ29mZnNldCcpXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdmVyLCB7aWR4OiBpLCBvZmZzZXQ6IG9mZnNldH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3Zlci5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkgLy8gQ29sdW1uXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gK2NvbC5hdHRyKCdvZmZzZXQnKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3V0LCB7aWR4OiBpLCBvZmZzZXQ6IG9mZnNldH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZShzZWxmLmJhc2Uubm9kZSgpKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFszLCAzXVxuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBtb3VzZVswXSArIGdldEJhc2VYKCkgLSAob3AuZGl2SG92ZXIud2lkdGggKyBkaXZPZmZzZXRbMF0pXG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gbW91c2VbMV0gKyBnZXRCYXNlWSgpIC0gKG9wLmRpdkhvdmVyLmhlaWdodCArIGRpdk9mZnNldFsxXSlcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIFN0cmluZyhsZWZ0KSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgU3RyaW5nKHRvcCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKCdwJylcbiAgICAgICAgICAgICAgICAgICAgLnRleHQoZFtwcm9wXSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRhdGEgRGF0YSB0byBkaXNwbGF5XG4gICAgICovXG4gICAgX3JlbmRlcihkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZURhdGEoKTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICdkMy1hcnJheSdcbmltcG9ydCAqIGFzIGF1IGZyb20gJy4uL2V0Yy9hcnJheVV0aWxzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcbmltcG9ydCB7IFR5cGVkQXJyYXkgfSBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUvZGlzdC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRnZSB7XG4gICAgaTogbnVtYmVyLCAvLyBTb3VyY2UgaW5kZXhcbiAgICBqOiBudW1iZXIsIC8vIFRhcmdldCBpbmRleFxuICAgIHY6IG51bWJlciwgLy8gVmFsdWVcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRhdGEgbWF0cml4IHRvIG5lY2Vzc2FyeSBkYXRhIGFycmF5IHRvIHBhc3MgdG8gU1ZHIGNvbm5lY3Rpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0VkZ2VzIChkYXRhOm51bWJlcltdW10sIGN1dG9mZkFtdD0xKSA6IEVkZ2VbXSB7XG4gICAgbGV0IG91dEFycjogRWRnZVtdID0gW107XG4gICAgbGV0IGN1dG9mZjogbnVtYmVyO1xuICAgIGRhdGEuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIGN1dG9mZiA9IGN1dG9mZkFtdCAqIGQzLnN1bShyb3cpO1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGNvbnN0IHNvcnRlZEFycjphdS5Tb3J0QXJyYXkgPSBhdS5zb3J0V2l0aEluZGljZXMocm93KTtcblxuICAgICAgICBzb3J0ZWRBcnIuYXJyLmZvckVhY2goKHYsaikgPT4ge1xuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPCBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmo6IEVkZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGk6IGksXG4gICAgICAgICAgICAgICAgICAgIGo6IHNvcnRlZEFyci5zb3J0SW5kaWNlc1tqXSxcbiAgICAgICAgICAgICAgICAgICAgdjogdixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3V0QXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgcmV0dXJuIG91dEFycjtcbn1cbi8qKlxuICogQ2xhc3MgZm9yIGltcGxlbWVudGluZyBvcGVyYXRpb25zIG9uIEF0dGVudGlvbkdyYXBoIGltcGxlbWVudGF0aW9uLiBcbiAqIENsb3NlbHkgdGllZCB0byBbW0F0dGVudGlvbkNvbm5lY3Rvcl1dXG4gKi9cbmV4cG9ydCBjbGFzcyBFZGdlRGF0YSB7XG4gICAgcmVhZG9ubHkgdGVuc0RhdGE6dGYuVGVuc29yO1xuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBkYXRhOm51bWJlcltdW10pe1xuICAgICAgICB0aGlzLnRlbnNEYXRhID0gdGYudGVuc29yKGRhdGEpO1xuICAgIH1cblxuICAgIG1pbihheGlzPzpudW1iZXIpOlR5cGVkQXJyYXkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5zRGF0YS5taW4oYXhpcykuZGF0YVN5bmMoKTtcbiAgICB9XG5cbiAgICBtYXgoYXhpcz86bnVtYmVyKTpUeXBlZEFycmF5e1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5zRGF0YS5tYXgoYXhpcykuZGF0YVN5bmMoKTtcbiAgICB9XG5cbiAgICBleHRlbnQoYXhpcz86bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIGQzLnppcCh0aGlzLm1pbihheGlzKSwgdGhpcy5tYXgoYXhpcykpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRm9ybWF0IHRoZSBkYXRhIHRvIHNlbmQgdG8gU1ZHIGNoYXJ0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBhY2N1bXVsYXRlVGhyZXNoIC0gQSBmbG9hdCBiZXR3ZWVuIDAgYW5kIDEsIGluZGljYXRpbmcgdGhlIGFtb3VudCBvZiB3ZWlnaHQgdG8gZGlzcGxheS4gRGVmYXVsdHMgdG8gMC43LlxuICAgICAqL1xuICAgIGZvcm1hdCAoYWNjdW11bGF0ZVRocmVzaD0wLjcpOkVkZ2VbXSB7XG4gICAgICAgIHJldHVybiB0b0VkZ2VzKHRoaXMuZGF0YSwgYWNjdW11bGF0ZVRocmVzaCk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBzY2FsZUxpbmVhcldpZHRoID0gb3BhY2l0eSA9PiA1ICogb3BhY2l0eV4wLjMzOyIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCB7VkNvbXBvbmVudH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7RDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4uL2V0Yy90eXBlc1wiXG5cbnR5cGUgaW5mb0V2ZW50RnJvbUkgPSAoaTpudW1iZXIpID0+IHRwLlRva2VuRXZlbnRcbnR5cGUgaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoaTpudW1iZXIsIGVtYmVkOm51bWJlcltdKSA9PiB0cC5Ub2tlbkVtYmVkZGluZ0V2ZW50XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZXh0VG9rZW5zIGV4dGVuZHMgVkNvbXBvbmVudDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+e1xuXG4gICAgYWJzdHJhY3QgY3NzX25hbWU6IHN0cmluZ1xuICAgIGFic3RyYWN0IHNpZGU6IHRwLlNpZGVPcHRpb25zXG4gICAgZUluZm86aW5mb0V2ZW50RnJvbUkgPSAoaSkgPT4ge3JldHVybiB7c2lkZTogdGhpcy5zaWRlLCBpbmQ6IGl9fVxuICAgIGVFbWJlZGRpbmc6aW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoaSwgZW1iZWQpID0+IHtyZXR1cm4ge3NpZGU6IHRoaXMuc2lkZSwgaW5kOiBpLCBlbWJlZGRpbmdzOiBlbWJlZH19XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICB0b2tlbk1vdXNlT3ZlcjogXCJUZXh0VG9rZW5fVG9rZW5Nb3VzZU92ZXJcIixcbiAgICAgICAgdG9rZW5Nb3VzZU91dDogXCJUZXh0VG9rZW5fVG9rZW5Nb3VzZU91dFwiLFxuICAgICAgICB0b2tlbkNsaWNrOiBcIlRleHRUb2tlbl9Ub2tlbkNsaWNrXCIsXG4gICAgICAgIHRva2VuRGJsQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuRGJsQ2xpY2tcIixcbiAgICB9O1xuXG4gICAgZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdO1xuXG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNixcbiAgICB9O1xuICAgIHRvdGFsSGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbWFzayhtYXNrSW5kczpudW1iZXJbXSkge1xuICAgICAgICB0aGlzLnBhcmVudC5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5lYWNoKChkLGksbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgICAgICAgIHNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsIF8uaW5jbHVkZXMobWFza0luZHMsIGkpKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEVtYmVkZGluZyhpbmQ6bnVtYmVyKTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbaW5kXVxuICAgIH1cblxuICAgIF9pbml0KCkge31cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy50b3RhbEhlaWdodCA9IHRoaXMub3B0aW9ucy5ib3hoZWlnaHQgKiBkYXRhLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgdGV4dEJveGVzID0gPEQzU2VsPnRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbihcImRpdlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4gYHRva2VuICR7dGhpcy5jc3NfbmFtZX0gdG9rZW4tJHtpfWApXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PsKgYCR7dGhpcy5jc3NfbmFtZX0tJHtpfWApXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIG9wLmJveGhlaWdodCArICdweCcpXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLnRleHQucmVwbGFjZShcIlxcdTAxMjBcIiwgXCIgXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbC5zdHlsZSgnYmFja2dyb3VuZCcsICdsaWdodGJsdWUnKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCBzZWxmLmVJbmZvKGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAwKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgc2VsZi5lSW5mbyhpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCBzZWxmLmVFbWJlZGRpbmcoaSwgZC5lbWJlZGRpbmdzKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2RibGNsaWNrJywgKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSk7XG4gICAgICAgICAgICAgICAgc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgIXNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIpKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIHNlbGYuZUluZm8oaSkpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZWZ0VGV4dFRva2VuIGV4dGVuZHMgVGV4dFRva2VucyB7XG5cbiAgICBjc3NfbmFtZSA9ICdsZWZ0LXRva2VuJztcbiAgICBzaWRlOnRwLlNpZGVPcHRpb25zID0gJ2xlZnQnXG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBSaWdodFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuICAgIGNzc19uYW1lID0gJ3JpZ2h0LXRva2VuJztcbiAgICBzaWRlOnRwLlNpZGVPcHRpb25zID0gJ3JpZ2h0J1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7RDNTZWwsIFV0aWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQge1NWR30gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqIFxuICogQ29tbW9uIFByb3BlcnRpZXM6XG4gKiAtIGV2ZW50c1xuICogLSBldmVudEhhbmRsZXIgKFYgaW1wb3J0YW50KVxuICogLSBvcHRpb25zIChNYWludGFpbnMgcHVibGljIHN0YXRlLiBDYW4gZXhwb3NlIHRoZXNlIHdpdGggZ2V0L3NldCBmdW5jdGlvbnMgd2l0aCBhdXRvIHVwZGF0ZSlcbiAqIC0gX2N1cnJlbnQgKE1haW50YWlucyBwcml2YXRlIHN0YXRlKVxuICogLSBjc3NOYW1lIChzeW5jZWQgd2l0aCBjb3JyZXNwb25kaW5nIENTUyBmaWxlKVxuICogLSBwYXJlbnQgKEhUTUwgaXMgZGl2IGNvbnRhaW5pbmcgdGhlIGJhc2UsIFNWRyBpcyBTVkcgZWxlbWVudClcbiAqIC0gYmFzZSAoSFRNTCBpcyBkaXYgd2l0aCBjc3NfbmFtZSBlc3RhYmxpc2hlZClcbiAqIC0gX2RhdGEgKERhdGEgdXNlZCB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgY29tcG9uZW50KVxuICogLSBfcmVuZGVyRGF0YSAoRGF0YSBuZWVkZWQgdG8gZGlzcGxheS4gVGhpcyBtYXkgbm90IGJlIG5lZWRlZCwgYnV0IGlzIGN1cnJlbnRseSB1c2VkIGluIGhpc3RvZ3JhbSlcbiAqIFxuICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgLy8gU1RBVElDIEZJRUxEUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHN0YXRpYyBldmVudHM6IHt9ID0ge25vRXZlbnQ6ICdWQ29tcG9uZW50X25vRXZlbnQnfTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxheWVycyBpbiBTVkcgIGZvciBiZyxtYWluLGZnLC4uLlxuICAgICAqL1xuICAgIC8vIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBsYXlvdXQ6IHsgbmFtZTogc3RyaW5nLCBwb3M6IG51bWJlcltdIH1bXSA9IFt7bmFtZTogJ21haW4nLCBwb3M6IFswLCAwXX1dO1xuXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7IC8vIE1vc3RseSBvYnNvbGV0ZSwgbmljZSB0byBoYXZlIHNpbXBsZSBJRCB0byBhc3NpZ24gaW4gQ1NTXG4gICAgcHJvdGVjdGVkIHBhcmVudDogRDNTZWw7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgcHJvdGVjdGVkIGJhc2U6IEQzU2VsOyAvLyBNb3N0bHkgb2Jzb2xldGUsIHJlcHJlc2VudHMgPGc+IGluIHN2Z1xuICAgIHByb3RlY3RlZCBsYXllcnM6IHsgbWFpbj86IEQzU2VsLCBmZz86IEQzU2VsLCBiZz86IEQzU2VsLCBba2V5OiBzdHJpbmddOiBEM1NlbCB9OyAvLyBTdGlsbCB1c2VmdWxcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcHJvdGVjdGVkIF92aXNpYmlsaXR5OiB7IGhpZGRlbjogYm9vbGVhbiwgaGlkZUVsZW1lbnQ/OiBEM1NlbCB8IG51bGw7IFtrZXk6IHN0cmluZ106IGFueSB9OyAvLyBFbmFibGVzIHRyYW5zaXRpb25zIGZyb20gdmlzaWJsZSB0byBpbnZpc2libGUuIE1vc3RseSBvYnNvbGV0ZS5cbiAgICBwcm90ZWN0ZWQgX2RhdGE6IERhdGFJbnRlcmZhY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlckRhdGE6IGFueTsgLy8gVW5uZWNlc3NhcnlcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3NzX25hbWU6IHN0cmluZzsgLy8gTWFrZSB0aGUgc2FtZSBhcyB0aGUgY29ycmVzcG9uZGluZyBjc3MgZmlsZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3VycmVudDoge307IC8vIFByaXZhdGUgc3RhdGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIHRoZSBvYmplY3QgaXRzZWxmLlxuXG4gICAgLy8gQ09OU1RSVUNUT1IgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaW1wbGUgY29uc3RydWN0b3IuIFN1YmNsYXNzZXMgc2hvdWxkIGNhbGwgQHN1cGVySW5pdChvcHRpb25zKSBhcyB3ZWxsLlxuICAgICAqIHNlZSB3aHkgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDM1OTU5NDMvd2h5LWFyZS1kZXJpdmVkLWNsYXNzLXByb3BlcnR5LXZhbHVlcy1ub3Qtc2Vlbi1pbi10aGUtYmFzZS1jbGFzcy1jb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogdGVtcGxhdGU6XG4gICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAvLyAtLSBhY2Nlc3MgdG8gc3ViY2xhc3MgcGFyYW1zOlxuICAgICAgICB0aGlzLnN1cGVySW5pdChvcHRpb25zKTtcbiAgICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IFV0aWwuc2ltcGxlVUlkKHt9KTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuXG4gICAgICAgIC8vIElmIG5vdCBmdXJ0aGVyIHNwZWNpZmllZCAtIGNyZWF0ZSBhIGxvY2FsIGV2ZW50IGhhbmRsZXIgYm91bmQgdG8gdGhlIGJhcyBlbGVtZW50XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8XG4gICAgICAgICAgICBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG5cbiAgICAgICAgLy8gT2JqZWN0IGZvciBzdG9yaW5nIGludGVybmFsIHN0YXRlcyBhbmQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkgPSB7aGlkZGVuOiBmYWxzZX07XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcbiAgICAgICAgdGhpcy5iYXNlID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQodGhpcy5jc3NfbmFtZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgdG8gYmUgY2FsbGVkIGFzIGxhc3QgY2FsbCBpbiBzdWJjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zXG4gICAgICogQHBhcmFtIGRlZmF1bHRMYXllcnMgLS0gY3JlYXRlIHRoZSBkZWZhdWx0IDxnPiBsYXllcnM6IGJnIC0+IG1haW4gLT4gZmdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0U1ZHKG9wdGlvbnM6IHt9ID0ge30sIGRlZmF1bHRMYXllcnMgPSBbJ2JnJywgJ21haW4nLCAnZmcnXSkge1xuICAgICAgICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zIGlmIG5vdCBzcGVjaWZpZWQgaW4gY29uc3RydWN0b3IgY2FsbFxuICAgICAgICAvLyBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIC8vIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICAvLyBjb25zdCBrZXlzID0gbmV3IFNldChbLi4uT2JqZWN0LmtleXMoZGVmYXVsdHMpLCAuLi5PYmplY3Qua2V5cyhvcHRpb25zKV0pO1xuICAgICAgICAvLyBrZXlzLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gKGtleSBpbiBvcHRpb25zKSA/IG9wdGlvbnNba2V5XSA6IGRlZmF1bHRzW2tleV0pO1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSk7XG5cbiAgICAgICAgdGhpcy5sYXllcnMgPSB7fTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZ3JvdXAgZWxlbWVudFxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHN2ZyxcbiAgICAgICAgICAgIHRoaXMuY3NzX25hbWUgKyAnIElEJyArIHRoaXMuaWQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9zKTtcblxuICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBsYXllcnM6IGJhY2tncm91bmQsIG1haW4sIGZvcmVncm91bmRcbiAgICAgICAgaWYgKGRlZmF1bHRMYXllcnMpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBvcmRlciBpcyBpbXBvcnRhbnQgIVxuICAgICAgICAgICAgZGVmYXVsdExheWVycy5mb3JFYWNoKGxheWVyID0+e1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFNWRy5ncm91cCh0aGlzLmJhc2UsIGxheWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIHRoZSBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9pbml0KCk7XG5cbiAgICAvLyBEQVRBIFVQREFURSAmIFJFTkRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIEV2ZXJ5IHRpbWUgZGF0YSBoYXMgY2hhbmdlZCwgdXBkYXRlIGlzIGNhbGxlZCBhbmRcbiAgICAgKiB0cmlnZ2VycyB3cmFuZ2xpbmcgYW5kIHJlLXJlbmRlcmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgdXBkYXRlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmRlckRhdGEgPSB0aGlzLl93cmFuZ2xlKGRhdGEpO1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIHdyYW5nbGluZyBtZXRob2QgLS0gaW1wbGVtZW50IGluIHN1YmNsYXNzLiBSZXR1cm5zIHRoaXMucmVuZGVyRGF0YS5cbiAgICAgKiBTaW1wbGVzdCBpbXBsZW1lbnRhdGlvbjogYHJldHVybiBkYXRhO2BcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhXG4gICAgICogQHJldHVybnMgeyp9IC0tIGRhdGEgaW4gcmVuZGVyIGZvcm1hdFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfd3JhbmdsZShkYXRhKTtcblxuXG4gICAgLyoqXG4gICAgICogSXMgcmVzcG9uc2libGUgZm9yIG1hcHBpbmcgZGF0YSB0byBET00gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVuZGVyRGF0YSBwcmUtcHJvY2Vzc2VkICh3cmFuZ2xlZCkgZGF0YVxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3JlbmRlcihyZW5kZXJEYXRhKTogdm9pZDtcblxuXG4gICAgLy8gVVBEQVRFIE9QVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBpbnN0YW5jZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb25seSB0aGUgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZVJlbmRlciBpZiBvcHRpb24gY2hhbmdlIHJlcXVpcmVzIGEgcmUtcmVuZGVyaW5nIChkZWZhdWx0OmZhbHNlKVxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKHtvcHRpb25zLCByZVJlbmRlciA9IGZhbHNlfSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcHRpb25zW2tdID0gb3B0aW9uc1trXSk7XG4gICAgICAgIGlmIChyZVJlbmRlcikgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT0gQ09OVkVOSUVOQ0UgPT09PVxuICAgIHJlZHJhdygpe1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICBzZXRIaWRlRWxlbWVudChoRTogRDNTZWwpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCA9IGhFO1xuICAgIH1cblxuICAgIGhpZGVWaWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBoRSA9IHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgfHwgdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gICAgICAgICAgICB9KS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmhpZGVWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJhc2UuaHRtbCgnJyk7XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnO1xuaW1wb3J0ICcuLi9ldGMveGQzJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vYXBpL21haW5BcGknXG5pbXBvcnQgeyBVSUNvbmZpZyB9IGZyb20gJy4uL3VpQ29uZmlnJ1xuaW1wb3J0IHsgVGV4dFRva2VucywgTGVmdFRleHRUb2tlbiwgUmlnaHRUZXh0VG9rZW4gfSBmcm9tICcuL1RleHRUb2tlbidcbmltcG9ydCB7IEF0dGVudGlvbkhlYWRCb3gsIGdldEF0dGVudGlvbkluZm8gfSBmcm9tICcuL0F0dGVudGlvbkhlYWRCb3gnXG5pbXBvcnQgeyBBdHRlbnRpb25HcmFwaCB9IGZyb20gJy4vQXR0ZW50aW9uQ29ubmVjdG9yJ1xuaW1wb3J0IHsgQ29ycHVzSW5zcGVjdG9yIH0gZnJvbSAnLi9Db3JwdXNJbnNwZWN0b3InXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIsIHNpZGVUb0xldHRlciB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0IHsgQXR0ZW50aW9uV3JhcHBlciwgbWFrZUZyb21NZXRhUmVzcG9uc2UgfSBmcm9tICcuLi9kYXRhL0F0dGVudGlvbkNhcHN1bGUnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgQ29ycHVzTWF0TWFuYWdlciB9IGZyb20gJy4uL3Zpcy9Db3JwdXNNYXRNYW5hZ2VyJ1xuaW1wb3J0IHsgQ29ycHVzSGlzdG9ncmFtIH0gZnJvbSAnLi4vdmlzL0NvcnB1c0hpc3RvZ3JhbSdcbmltcG9ydCB7IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB9IGZyb20gJy4uL2RhdGEvRmFpc3NTZWFyY2hXcmFwcGVyJ1xuaW1wb3J0IHsgRDNTZWwsIFNlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJztcbmltcG9ydCB7IGZyb20sIGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFNpbXBsZU1ldGEgfSBmcm9tIFwiLi4vZXRjL3R5cGVzXCI7XG5pbXBvcnQgQ2hhbmdlRXZlbnQgPSBKUXVlcnkuQ2hhbmdlRXZlbnQ7XG5cblxuZnVuY3Rpb24gaXNOdWxsVG9rZW4odG9rOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgY29uc3QgaXNTb21lTnVsbCA9IHggPT4ge1xuICAgICAgICByZXR1cm4gKHggPT0gbnVsbCkgfHwgKHggPT0gXCJudWxsXCIpXG4gICAgfVxuICAgIGNvbnN0IHRva0lzTnVsbCA9IHRvayA9PSBudWxsO1xuICAgIGNvbnN0IHRva0hhc051bGwgPSBpc1NvbWVOdWxsKHRvay5zaWRlKSB8fCBpc1NvbWVOdWxsKHRvay5pbmQpXG4gICAgcmV0dXJuIHRva0lzTnVsbCB8fCB0b2tIYXNOdWxsXG59XG5cbmZ1bmN0aW9uIHNob3dCeVNpZGUoZTogdHAuVG9rZW5FdmVudCkge1xuICAgIC8vIENoZWNrIGlmIHNhdmVkIHRva2VuIGluIHVpQ29uZiBpcyBudWxsXG4gICAgaWYgKCFpc051bGxUb2tlbihlKSkge1xuICAgICAgICBjb25zdCBjbGFzc1NlbGVjdG9yID0gZS5zaWRlID09IFwibGVmdFwiID8gXCJzcmMtaWR4XCIgOiBcInRhcmdldC1pZHhcIjtcblxuICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShgLmF0bi1jdXJ2ZVske2NsYXNzU2VsZWN0b3J9PScke2UuaW5kfSddYClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dCeVNpZGUoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCwgbmV3RXZlbnQ6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsVG9rZW4oc2F2ZWRFdmVudCkpIHtcbiAgICAgICAgc2hvd0J5U2lkZShuZXdFdmVudClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dBbGwoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSlcbiAgICAgICAgU2VsLnNldFZpc2libGUoXCIuYXRuLWN1cnZlXCIpXG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0SGVhZChoZWFkOiBudW1iZXIpIHtcbiAgICBjb25zdCBhZmZlY3RlZEhlYWRzID0gZDMuc2VsZWN0QWxsKGAuYXR0LXJlY3RbaGVhZD0nJHtoZWFkfSddYCk7XG4gICAgYWZmZWN0ZWRIZWFkcy5jbGFzc2VkKFwidW5zZWxlY3RlZFwiLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBzZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBzZXRTZWxEaXNhYmxlZChhdHRyOiBib29sZWFuLCBzZWw6IEQzU2VsKSB7XG4gICAgY29uc3QgdmFsID0gYXR0ciA/IHRydWUgOiBudWxsXG4gICAgc2VsLmF0dHIoJ2Rpc2FibGVkJywgdmFsKVxufVxuXG5leHBvcnQgY2xhc3MgTWFpbkdyYXBoaWMge1xuICAgIGFwaTogQVBJXG4gICAgdWlDb25mOiBVSUNvbmZpZ1xuICAgIGF0dENhcHN1bGU6IEF0dGVudGlvbldyYXBwZXJcbiAgICB0b2tDYXBzdWxlOiBUb2tlbldyYXBwZXJcbiAgICBzZWxzOiBhbnkgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250YWlucyBpbml0aWFsIGQzIHNlbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgIHZpenM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIHZpcyBjb21wb25lbnRzIHdyYXBwZWQgYXJvdW5kIHBhcmVudCBzZWxcbiAgICBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlciAgICAvLyBPcmNoZXN0cmF0ZXMgZXZlbnRzIHJhaXNlZCBmcm9tIGNvbXBvbmVudHNcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBUEkoKVxuICAgICAgICB0aGlzLnVpQ29uZiA9IG5ldyBVSUNvbmZpZygpXG4gICAgICAgIHRoaXMuX21haW5Jbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdHRlbnRpb25zIHByZXNlbnQgaW4gdWlDb25mLiBDcmVhdGVkIHRvIGFsbG93IGJhY2sgYnV0dG9uIHRvIHVwZGF0ZSBiYXNlZCBvbiB0aGUgVVJMLCBidXQgaXQgZGlkbid0IHdvcmsgZ3JlYXRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9tYWluSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmFwaS5nZXRNZXRhQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKGF0dGVudGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5uSGVhZHMgPSBhdHRlbnRpb25bdGhpcy51aUNvbmYuYXR0VHlwZV0uYXR0Lmxlbmd0aCAvLyBUbyB2ZXJpZnkgdGhhdCB0aGUgZGVmYXVsdCAxMiBpcyBjb3JyZWN0XG4gICAgICAgICAgICB0aGlzLl9pbml0KGF0dGVudGlvbilcblxuICAgICAgICAgICAgLy8gV3JhcCBwb3N0SW5pdCBpbnRvIGZ1bmN0aW9uIHNvIGFzeW5jaHJvbm91cyBjYWxsIGRvZXMgbm90IG1lc3Mgd2l0aCBuZWNlc3NhcnkgaW5pdHNcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRGlzcGxheSA9IHRoaXMudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoKVxuICAgICAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICAgICAgICAgIGlmICh0b0Rpc3BsYXkgPT0gJ2NvbnRleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXJ5Q29udGV4dCgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0Rpc3BsYXkgPT0gJ2VtYmVkZGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXJ5RW1iZWRkaW5ncygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy51aUNvbmYubWFza0luZHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMgPSB0aGlzLnVpQ29uZi5tYXNrSW5kcygpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlRW1iZWRkaW5ncyhyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIHBvc3RJbml0KClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgcG9zdEluaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KGF0dGVudGlvbjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5hdHRDYXBzdWxlID0gbWFrZUZyb21NZXRhUmVzcG9uc2UoYXR0ZW50aW9uLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpXG4gICAgICAgIHRoaXMudG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIoYXR0ZW50aW9uKTtcblxuICAgICAgICB0aGlzLnNlbHMgPSB7XG4gICAgICAgICAgICBib2R5OiBkMy5zZWxlY3QoJ2JvZHknKSxcbiAgICAgICAgICAgIGF0bkNvbnRhaW5lcjogZDMuc2VsZWN0KCcjYXRuLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYXRuRGlzcGxheTogZDMuc2VsZWN0KFwiI2F0bi1kaXNwbGF5XCIpLFxuICAgICAgICAgICAgbW9kZWxTZWxlY3RvcjogZDMuc2VsZWN0KFwiI21vZGVsLW9wdGlvbi1zZWxlY3RvclwiKSxcbiAgICAgICAgICAgIGNvcnB1c1NlbGVjdG9yOiBkMy5zZWxlY3QoXCIjY29ycHVzLXNlbGVjdFwiKSxcbiAgICAgICAgICAgIGF0bkhlYWRzOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogZDMuc2VsZWN0KFwiI2xlZnQtYXR0LWhlYWRzXCIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBkMy5zZWxlY3QoXCIjcmlnaHQtYXR0LWhlYWRzXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBzZW50ZW5jZUE6IGQzLnNlbGVjdChcIiNmb3JtLXNlbnRlbmNlLWFcIiksXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBkMy5zZWxlY3QoXCIjdXBkYXRlLXNlbnRlbmNlXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbHNUb2dnbGU6IGQzLnNlbGVjdChcIiNjbHMtdG9nZ2xlXCIpLnNlbGVjdChcIi5zd2l0Y2hcIiksXG4gICAgICAgICAgICBsYXllckNoZWNrYm94ZXM6IGQzLnNlbGVjdChcIiNsYXllci1zZWxlY3RcIiksXG4gICAgICAgICAgICBoZWFkQ2hlY2tib3hlczogZDMuc2VsZWN0KFwiI2hlYWQtc2VsZWN0XCIpLFxuICAgICAgICAgICAgY29udGV4dFF1ZXJ5OiBkMy5zZWxlY3QoXCIjc2VhcmNoLWNvbnRleHRzXCIpLFxuICAgICAgICAgICAgZW1iZWRkaW5nUXVlcnk6IGQzLnNlbGVjdChcIiNzZWFyY2gtZW1iZWRkaW5nc1wiKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhZHM6IGQzLnNlbGVjdChcIiNzZWxlY3RlZC1oZWFkc1wiKSxcbiAgICAgICAgICAgIGhlYWRTZWxlY3RBbGw6IGQzLnNlbGVjdChcIiNzZWxlY3QtYWxsLWhlYWRzXCIpLFxuICAgICAgICAgICAgaGVhZFNlbGVjdE5vbmU6IGQzLnNlbGVjdChcIiNzZWxlY3Qtbm8taGVhZHNcIiksXG4gICAgICAgICAgICB0ZXN0Q2hlY2tib3g6IGQzLnNlbGVjdChcIiNzaW1wbGUtZW1iZWQtcXVlcnlcIiksXG4gICAgICAgICAgICB0aHJlc2hTbGlkZXI6IGQzLnNlbGVjdChcIiNteS1yYW5nZVwiKSxcbiAgICAgICAgICAgIGNvcnB1c0luc3BlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zaW1pbGFyLXNlbnRlbmNlcy1kaXZcIiksXG4gICAgICAgICAgICBjb3JwdXNNYXRNYW5hZ2VyOiBkMy5zZWxlY3QoXCIjY29ycHVzLW1hdC1jb250YWluZXJcIiksXG4gICAgICAgICAgICBoaXN0b2dyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IGQzLnNlbGVjdChcIiNtYXRjaGVkLWhpc3RvZ3JhbS1jb250YWluZXJcIiksXG4gICAgICAgICAgICAgICAgbWF4QXR0OiBkMy5zZWxlY3QoXCIjbWF4LWF0dC1oaXN0b2dyYW0tY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICBraWxsTGVmdDogZDMuc2VsZWN0KFwiI2tpbGwtbGVmdFwiKSxcbiAgICAgICAgICAgICAgICBhZGRMZWZ0OiBkMy5zZWxlY3QoXCIjbWludXMtbGVmdFwiKSxcbiAgICAgICAgICAgICAgICBhZGRSaWdodDogZDMuc2VsZWN0KFwiI3BsdXMtcmlnaHRcIiksXG4gICAgICAgICAgICAgICAga2lsbFJpZ2h0OiBkMy5zZWxlY3QoXCIja2lsbC1yaWdodFwiKSxcbiAgICAgICAgICAgICAgICByZWZyZXNoOiBkMy5zZWxlY3QoXCIjbWF0LXJlZnJlc2hcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRhU2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogZDMuc2VsZWN0KFwiI21hdGNoZWQtbWV0YS1zZWxlY3RcIiksXG4gICAgICAgICAgICAgICAgbWF4QXR0OiBkMy5zZWxlY3QoXCIjbWF4LWF0dC1tZXRhLXNlbGVjdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnRoaXMuc2Vscy5ib2R5Lm5vZGUoKSk7XG5cbiAgICAgICAgdGhpcy52aXpzID0ge1xuICAgICAgICAgICAgbGVmdEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIsIHsgc2lkZTogXCJsZWZ0XCIgfSksXG4gICAgICAgICAgICByaWdodEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwicmlnaHRcIiB9KSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IG5ldyBMZWZ0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBuZXcgUmlnaHRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGVudGlvblN2ZzogbmV3IEF0dGVudGlvbkdyYXBoKHRoaXMuc2Vscy5hdG5EaXNwbGF5LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBjb3JwdXNJbnNwZWN0b3I6IG5ldyBDb3JwdXNJbnNwZWN0b3IodGhpcy5zZWxzLmNvcnB1c0luc3BlY3RvciwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgY29ycHVzTWF0TWFuYWdlcjogbmV3IENvcnB1c01hdE1hbmFnZXIodGhpcy5zZWxzLmNvcnB1c01hdE1hbmFnZXIsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IGlkeHM6IHRoaXMudWlDb25mLm9mZnNldElkeHMoKSB9KSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXhBdHQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0aWNJbml0cygpXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudEhhbmRsZXIoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2JpbmRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vI3JlZ2lvbiBldmVudCBoYW5kbGVyIGJpbmRpbmdcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkRibENsaWNrLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gc2lkZVRvTGV0dGVyKGUuc2lkZSwgdGhpcy51aUNvbmYuYXR0VHlwZSlcbiAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZVtsZXR0ZXJdLnRvZ2dsZShlLmluZClcbiAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcblxuICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbiggKHI6IHRwLkF0dGVudGlvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS51cGRhdGVFbWJlZGRpbmdzKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLm1hc2tJbmRzKHRoaXMudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpLCBlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgKGUpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dBbGwodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi50b2dnbGVUb2tlbihlKVxuICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuICAgICAgICAgICAgc2hvd0J5U2lkZShlKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHNwZWNpYWwgb24gcm93IG1vdXNlIG92ZXJcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdXRcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWF0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEodXBkYXRlTWF0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUodXBkYXRlTWF0KVxuXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZShhdHQpXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgKGU6IHsgaGVhZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVpQ29uZi50b2dnbGVIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5BRERFRCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5SRU1PVkVEKSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuICAgICAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIChlOiB7IHZhbDogXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiLCBvZmZzZXQ6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICAvLyBVbmNvbW1lbnQgdGhlIGJlbG93IGlmIHlvdSB3YW50IHRvIG1vZGlmeSB0aGUgd2hvbGUgY29sdW1uXG4gICAgICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYFxuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKHNlbGVjdG9yKS5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgdHJ1ZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIGZhbHNlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3ZlciwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGQzLnNlbGVjdChgLmluc3BlY3Rvci1yb3dbcm93bnVtPScke2UuaWR4fSddYClcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSByb3cuc2VsZWN0KGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYClcbiAgICAgICAgICAgIHdvcmQuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdXQsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgX3RvZ2dsZVRva2VuU2VsKCkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy51aUNvbmYudG9rZW4oKVxuICAgICAgICBjb25zdCBhbHJlYWR5U2VsZWN0ZWQgPSBkMy5zZWxlY3QoJy5zZWxlY3RlZC10b2tlbicpXG5cbiAgICAgICAgLy8gSWYgbm8gdG9rZW4gc2hvdWxkIGJlIHNlbGVjdGVkLCB1bnNlbGVjdCBhbGwgdG9rZW5zXG4gICAgICAgIGlmIChpc051bGxUb2tlbihlKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsOiBkMy5TZWxlY3Rpb248QmFzZVR5cGUsIGFueSwgQmFzZVR5cGUsIGFueT4gPSBkMy5zZWxlY3RBbGwoJy5zZWxlY3RlZC10b2tlbicpXG4gICAgICAgICAgICBpZiAoIW5ld1NlbC5lbXB0eSgpKSBuZXdTZWwuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2VsZWN0IHRoZSBpbmRpY2F0ZWQgdG9rZW5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbjJTdHJpbmcgPSAoZTogdHAuVG9rZW5FdmVudCkgPT4gYCMke2Uuc2lkZX0tdG9rZW4tJHtlLmluZH1gXG4gICAgICAgICAgICBjb25zdCBuZXdTZWwgPSBkMy5zZWxlY3QodG9rZW4yU3RyaW5nKGUpKVxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzZWxlY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAoIW5ld1NlbC5lbXB0eSgpKSBuZXdTZWwuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHRva2VuIHNlbGVjdGlvbiwgaWYgYW55XG4gICAgICAgIGlmICghYWxyZWFkeVNlbGVjdGVkLmVtcHR5KCkpIHtcbiAgICAgICAgICAgIGFscmVhZHlTZWxlY3RlZC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNb2RlbFNlbGVjdGlvbigpIHtcbiAgICAgICAgLy8gQWRkIFwiY3VycmVudCBtb2RlbFwiIHRvIFVJQ29uZmlnXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IFt7bmFtZTogXCJiZXJ0LWJhc2UtY2FzZWRcIn0sIHtuYW1lOiBcImdwdDJcIn1dXG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3Iuc2VsZWN0QWxsKCcubW9kZWwtb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtb2RlbC1vcHRpb24nLCB0cnVlKVxuICAgICAgICAgICAgLnByb3BlcnR5KCd2YWx1ZScsIGQgPT4gZC5uYW1lKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLm5hbWUpXG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3Iub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsKG1lLnByb3BlcnR5KCd2YWx1ZScpKVxuICAgICAgICAgICAgLy8gQ2FsbCBhcGk6IHVwZGF0ZV9mcm9tX21vZGVsLCBnaXZpbmcgbmV3IG1vZGVsIG5hbWUsIGFuZCBcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDb3JwdXNTZWxlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7Y29kZTogXCJ3b3pcIiwgZGlzcGxheTogXCJXaXphcmQgb2YgT3pcIn0sXG4gICAgICAgICAgICB7Y29kZTogXCJ3aWtpXCIsIGRpc3BsYXk6IFwiV2lraXBlZGlhXCJ9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zZWxzLmNvcnB1c1NlbGVjdG9yLnNlbGVjdEFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQuY29kZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kaXNwbGF5KVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYuY29ycHVzKG1lLnByb3BlcnR5KCd2YWx1ZScpKVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXRpY0luaXRzKCkge1xuICAgICAgICB0aGlzLl9pbml0U2VudGVuY2VGb3JtKCk7XG4gICAgICAgIHRoaXMuX2luaXRNb2RlbFNlbGVjdGlvbigpO1xuICAgICAgICB0aGlzLl9pbml0Q29ycHVzU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRRdWVyeUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdENoZWNrYm94ZXMoKTtcbiAgICAgICAgdGhpcy5faW5pdEFkZGVyKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgIHRoaXMuX2luaXRNZXRhU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMuX2luaXRUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEFkZGVyKCkge1xuICAgICAgICBjb25zdCB1cGRhdGVVcmxPZmZzZXRJZHhzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aUNvbmYub2Zmc2V0SWR4cyh0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5pZHhzKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZml4Q29ycHVzTWF0SGVpZ2h0cyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1dyYXBwZWQgPSB0aGlzLl93cmFwUmVzdWx0cyh0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5kYXRhKCkpXG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5kYXRhKG5ld1dyYXBwZWQuZGF0YSlcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMuYWRkUmlnaHQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuYWRkUmlnaHQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMuYWRkTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRMZWZ0KClcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5idXR0b25zLmtpbGxSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsUmlnaHQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbExlZnQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIua2lsbExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMucmVmcmVzaC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmaXhDb3JwdXNNYXRIZWlnaHRzKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgb25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxzLmNvcnB1c0luc3BlY3Rvci50ZXh0KCkgIT0gJycpIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG9ucmVzaXplXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1ldGFTZWxlY3RvcnMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRNYXRjaGVkV29yZFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF0Y2hlZFdvcmQpXG4gICAgICAgIHRoaXMuX2luaXRNYXhBdHRTZWxlY3Rvcih0aGlzLnNlbHMubWV0YVNlbGVjdG9yLm1heEF0dClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF4QXR0U2VsZWN0b3Ioc2VsOiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjaG9vc2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXMgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgICAgICBtcy5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbChgbGFiZWxbdmFsdWU9JHt2YWx1ZX1dYClcbiAgICAgICAgICAgIGVsLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBjaG9vc2VTZWxlY3RlZCh0aGlzLnVpQ29uZi5tZXRhTWF4KCkpXG5cbiAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IDxTaW1wbGVNZXRhPmQzLnNlbGVjdCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1heCh2YWwpXG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YSh2YWwpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1hdGNoZWRXb3JkU2VsZWN0b3Ioc2VsOiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjaG9vc2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXMgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgICAgICBtcy5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbChgbGFiZWxbdmFsdWU9JHt2YWx1ZX1dYClcbiAgICAgICAgICAgIGVsLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBjaG9vc2VTZWxlY3RlZCh0aGlzLnVpQ29uZi5tZXRhTWF0Y2goKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJylcblxuICAgICAgICAgICAgLy8gRG8gdG9nZ2xlXG4gICAgICAgICAgICBzZWwuc2VsZWN0QWxsKCcuYWN0aXZlJykuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1ldGFNYXRjaCh2YWwpXG4gICAgICAgICAgICBzZWxmLl91cGRhdGVDb3JwdXNJbnNwZWN0b3JGcm9tTWV0YSh2YWwpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZVNlYXJjaGluZyhhdHRyOiBib29sZWFuKSB7XG4gICAgICAgIHNldFNlbERpc2FibGVkKGF0dHIsIHRoaXMuc2Vscy5jb250ZXh0UXVlcnkpXG4gICAgICAgIHNldFNlbERpc2FibGVkKGF0dHIsIHRoaXMuc2Vscy5lbWJlZGRpbmdRdWVyeSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVDb3JwdXNJbnNwZWN0b3JGcm9tTWV0YSh2YWw6IHRwLlNpbXBsZU1ldGEpIHtcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIucGljayh2YWwpXG4gICAgICAgIHRoaXMudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLm1ldGEodmFsKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTZW50ZW5jZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQS5hdHRyKCdwbGFjZWhvbGRlcicsIFwiRW50ZXIgbmV3IHNlbnRlbmNlIHRvIGFuYWx5emVcIilcbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3ZhbHVlJywgdGhpcy51aUNvbmYuc2VudGVuY2UoKSlcblxuICAgICAgICBjb25zdCBjbGVhckluc3BlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC5jbGVhcigpO1xuICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJtaXROZXdTZW50ZW5jZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxsIG9jY3VyZW5jZXMgb2YgJyMnIGluIHNlbnRlbmNlIGFzIHRoaXMgY2F1c2VzIHRoZSBBUEkgdG8gYnJlYWtcbiAgICAgICAgICAgIGNvbnN0IHNlbnRlbmNlX2E6IHN0cmluZyA9IHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQS5wcm9wZXJ0eShcInZhbHVlXCIpLnJlcGxhY2UoL1xcIy9nLCAnJylcblxuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdGhlIGZvcm0gaXMgZmlsbGVkIGNvcnJlY3RseVxuICAgICAgICAgICAgaWYgKHNlbnRlbmNlX2EubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBpLmdldE1ldGFBdHRlbnRpb25zKHNlbnRlbmNlX2EsIHRoaXMudWlDb25mLmxheWVyKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyOiB0cC5BdHRlbnRpb25SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbmYuc2VudGVuY2Uoc2VudGVuY2VfYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnJtVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlRnJvbVJlc3BvbnNlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckluc3BlY3RvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvbkVudGVyID0gUi5jdXJyeSgoa2V5Q29kZSwgZiwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlICE9PSBrZXlDb2RlKSByZXR1cm47XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgb25FbnRlclN1Ym1pdCA9IG9uRW50ZXIoMTMsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuc2Vscy5mb3JtLmJ1dHRvbjtcbiAgICAgICAgY29uc3QgaW5wdXRCb3ggPSB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUE7XG5cbiAgICAgICAgYnRuLm9uKFwiY2xpY2tcIiwgc3VibWl0TmV3U2VudGVuY2UpXG4gICAgICAgIGlucHV0Qm94Lm9uKCdrZXlwcmVzcycsIG9uRW50ZXJTdWJtaXQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0U2VhcmNoRW1iZWRzKCkge1xuICAgICAgICBjb25zdCBzYXZlZFRva2VuID0gdGhpcy51aUNvbmYudG9rZW4oKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gdGhpcy52aXpzLnRva2Vuc1tzYXZlZFRva2VuLnNpZGVdLmdldEVtYmVkZGluZyhzYXZlZFRva2VuLmluZClcbiAgICAgICAgcmV0dXJuIG91dC5lbWJlZGRpbmdzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0U2VhcmNoQ29udGV4dCgpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2tlbiA9IHRoaXMudWlDb25mLnRva2VuKCk7XG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMudml6cy50b2tlbnNbc2F2ZWRUb2tlbi5zaWRlXS5nZXRFbWJlZGRpbmcoc2F2ZWRUb2tlbi5pbmQpXG4gICAgICAgIHJldHVybiBvdXQuY29udGV4dHNcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hFbWJlZGRpbmdzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hJTkcgRU1CRURESU5HU1wiKTtcbiAgICAgICAgY29uc3QgZW1iZWQgPSB0aGlzLl9nZXRTZWFyY2hFbWJlZHMoKVxuICAgICAgICBjb25zdCBsYXllciA9IHNlbGYudWlDb25mLmxheWVyKClcbiAgICAgICAgY29uc3QgaGVhZHMgPSBzZWxmLnVpQ29uZi5oZWFkcygpXG4gICAgICAgIGNvbnN0IGsgPSA1MFxuXG4gICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcbiAgICAgICAgc2VsZi5hcGkuZ2V0TmVhcmVzdFdvekVtYmVkZGluZ3MoZW1iZWQsIGxheWVyLCBoZWFkcywgaylcbiAgICAgICAgICAgIC50aGVuKCh2YWw6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodHMgb2YgY29ycHVzIGluc3BlY3RvciByb3dzLlxuICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHZhbClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModmFsKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ZWRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF0Y2hlZEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG5cbiAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci51cGRhdGUod3JhcHBlZFZhbHMuZGF0YSlcbiAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC51cGRhdGUoY291bnRlZFZhbHMpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoJ2VtYmVkZGluZ3MnKVxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hJTkcgQ09OVEVYVFNcIik7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9nZXRTZWFyY2hDb250ZXh0KClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgc2VsZi5hcGkuZ2V0TmVhcmVzdFdvekNvbnRleHRzKGNvbnRleHQsIGxheWVyLCBoZWFkcywgaylcbiAgICAgICAgICAgIC50aGVuKCh2YWw6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodHMgb2YgY29ycHVzIGluc3BlY3RvciByb3dzLlxuICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHZhbClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModmFsKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ZWRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF0Y2hlZEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC51cGRhdGUoY291bnRlZFZhbHMpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuXG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0Lm1ldGEoc2VsZi51aUNvbmYubWV0YU1heCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaXNOdWxsVG9rZW4odGhpcy51aUNvbmYudG9rZW4oKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaENvbnRleHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIHRvbGQgdG8gc2hvdyBpbnNwZWN0b3IgYnV0IHdhcyBub3QgZ2l2ZW4gYSBzZWxlY3RlZCB0b2tlbiBlbWJlZGRpbmdcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3F1ZXJ5RW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFpc051bGxUb2tlbih0aGlzLnVpQ29uZi50b2tlbigpKSkge1xuICAgICAgICAgICAgdGhpcy5fc2VhcmNoRW1iZWRkaW5ncygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYXMgdG9sZCB0byBzaG93IGluc3BlY3RvciBidXQgd2FzIG5vdCBnaXZlbiBhIHNlbGVjdGVkIHRva2VuIGVtYmVkZGluZ1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoaW5nRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy51aUNvbmYuaGVhZHMoKS5sZW5ndGggPT0gMCkgfHwgKGlzTnVsbFRva2VuKHRoaXMudWlDb25mLnRva2VuKCkpKVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaERpc2FibGVyKCkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlU2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0Rpc2FibGVkKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFF1ZXJ5Rm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICB0aGlzLnNlbHMuY29udGV4dFF1ZXJ5Lm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fcXVlcnlDb250ZXh0KClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuZW1iZWRkaW5nUXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUVtYmVkZGluZ3MoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbmRlckhlYWRTdW1tYXJ5KCkge1xuICAgICAgICB0aGlzLnNlbHMuc2VsZWN0ZWRIZWFkc1xuICAgICAgICAgICAgLmh0bWwoUi5qb2luKCcsICcsIHRoaXMudWlDb25mLmhlYWRzKCkpKVxuICAgIH1cblxuICAgIC8vIE1vZGlmeSBmYWlzcyByZXN1bHRzIHdpdGggY29ycmVzcG9uZGluZyBoZWlnaHRzXG4gICAgcHJpdmF0ZSBfd3JhcFJlc3VsdHMocmV0dXJuZWRGYWlzc1Jlc3VsdHM6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IGQzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1yb3cnKVxuXG4gICAgICAgIC8vIERvbid0IGp1c3QgdXNlIG9mZnNldEhlaWdodCBzaW5jZSB0aGF0IHJvdW5kcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSByb3dzLm5vZGVzKCkubWFwKChuOiBIVE1MRWxlbWVudCkgPT4gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG5cbiAgICAgICAgY29uc3QgbmV3VmFscyA9IHJldHVybmVkRmFpc3NSZXN1bHRzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGhlaWdodHNbaV0sIHYpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gbmV3IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlcihuZXdWYWxzKVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVkVmFsc1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDaGVja2JveGVzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgwLCB0aGlzLmF0dENhcHN1bGUubkxheWVycykpXG4gICAgICAgICAgICAuam9pbihcImxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnRuIGJ1dHRvbiBsYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgKGQsIGkpID0+IGkgPT0gMClcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiBkKVxuICAgICAgICAgICAgLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJyYWRpb1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoZWNrYm94LWlubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJuYW1lXCIsIFwibGF5ZXJib3hcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVhZFwiLCBkID0+IGQpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBcImxheWVyQ2hlY2tib3hcIiArIGkpXG4gICAgICAgIC8vIC50ZXh0KChkLCBpKSA9PiBkICsgXCIgXCIpXG5cbiAgICAgICAgZnJvbUV2ZW50KGNoZWNrYm94ZXMubm9kZXMoKSwgJ2NoYW5nZScpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gZDMuc2VsZWN0KDxCYXNlVHlwZT5lLnRhcmdldCkuZGF0dW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEsIFwiLS0tIG15RGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBkID0+IGQgPT09IG15RGF0YSlcblxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKHY6IEV2ZW50KSA9PiArZDMuc2VsZWN0KDxCYXNlVHlwZT52LnRhcmdldCkuZGF0dW0oKSksXG4gICAgICAgICAgICB0YXAodiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgbGF5ZXI6IFwiLCB2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcih2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHYpID0+IGZyb20oc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhzZWxmLnRva0NhcHN1bGUuYSwgc2VsZi51aUNvbmYuc2VudGVuY2UoKSwgdikpKSAvLyBVU0UgVEhJU1xuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZS51cGRhdGVFbWJlZGRpbmdzKHIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHNlbGYudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgc2VsZi5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllcklkID0gYCNsYXllckNoZWNrYm94JHt0aGlzLnVpQ29uZi5sYXllcigpfWBcbiAgICAgICAgZDMuc2VsZWN0KGxheWVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKVxuXG4gICAgICAgIC8vIEluaXQgdGhyZXNob2xkIHN0dWZmXG4gICAgICAgIGNvbnN0IGRpc3BUaHJlc2ggPSAodGhyZXNoKSA9PiBNYXRoLnJvdW5kKHRocmVzaCAqIDEwMClcbiAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuXG4gICAgICAgIHRoaXMuc2Vscy50aHJlc2hTbGlkZXIub24oXCJpbnB1dFwiLCBfLnRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSA8SFRNTElucHV0RWxlbWVudD50aGlzO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYudGhyZXNob2xkKCtub2RlLnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI215LXJhbmdlLXZhbHVlJykudGV4dChkaXNwVGhyZXNoKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKSlcbiAgICAgICAgICAgIHNlbGYudml6cy5hdHRlbnRpb25TdmcudGhyZXNob2xkKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKVxuICAgICAgICB9LCAxMDApKVxuXG4gICAgICAgIHRoaXMuc2Vscy5oZWFkU2VsZWN0QWxsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0QWxsSGVhZHMoKTtcbiAgICAgICAgICAgIHNlbGYuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3ROb25lLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0Tm9IZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKTtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9pbml0VG9nZ2xlKCkge1xuICAgICAgICBmcm9tRXZlbnQodGhpcy5zZWxzLmNsc1RvZ2dsZS5ub2RlKCksICdpbnB1dCcpLnBpcGUoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0tIFRPRE86IEZJWCAhXG4gICAgICAgICAgICBtYXAoZSA9PiBlLnNyY0VsZW1lbnQuY2hlY2tlZCksXG4gICAgICAgICkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLmhpZGVDbHNTZXAodilcbiAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUuemVyb2VkKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJBdHRIZWFkKCkge1xuICAgICAgICBjb25zdCBoZWFkcyA9IF8ucmFuZ2UoMCwgdGhpcy51aUNvbmYubkhlYWRzKVxuICAgICAgICBjb25zdCBmb2N1c0F0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5hdHRcbiAgICAgICAgY29uc3QgbGVmdEF0dEluZm8gPSBnZXRBdHRlbnRpb25JbmZvKGZvY3VzQXR0LCBoZWFkcywgXCJsZWZ0XCIpO1xuICAgICAgICBjb25zdCByaWdodEF0dEluZm8gPSBnZXRBdHRlbnRpb25JbmZvKGZvY3VzQXR0LCBoZWFkcywgXCJyaWdodFwiKTtcbiAgICAgICAgdGhpcy52aXpzLmxlZnRIZWFkcy51cGRhdGUobGVmdEF0dEluZm8pXG4gICAgICAgIHRoaXMudml6cy5yaWdodEhlYWRzLnVwZGF0ZShyaWdodEF0dEluZm8pXG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlXG4gICAgICAgIGhlYWRzLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oZWFkU2V0KCkuaGFzKGgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMF1dXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMV1dXG5cbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0LnVwZGF0ZShsZWZ0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC5tYXNrKGxlZnQubWFza0luZHMpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0LnVwZGF0ZShyaWdodC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0Lm1hc2socmlnaHQubWFza0luZHMpO1xuICAgICAgICAvLyBkaXNwbGF5U2VsZWN0ZWRUb2tlblxuICAgIH1cblxuICAgIHJlbmRlclN2ZygpIHtcbiAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgY29uc3Qgc3ZnID0gPEF0dGVudGlvbkdyYXBoPnRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpO1xuICAgICAgICBzdmcudXBkYXRlKGF0dClcbiAgICAgICAgY29uc3QgbWF4VG9rZW5zID0gXy5tYXgoW3RoaXMudG9rQ2Fwc3VsZS5hLmxlbmd0aCgpXSlcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gc3ZnLm9wdGlvbnMuYm94aGVpZ2h0ICogbWF4VG9rZW5zXG4gICAgICAgIHN2Zy5oZWlnaHQobmV3SGVpZ2h0KVxuXG4gICAgICAgIC8vIERvbid0IHJlZGlzcGxheSBldmVyeXRoaW5nIGlmIG9uZSB0b2tlbiBpcyBzZWxlY3RlZFxuICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgIC8vIGRpc3BsYXlTZWxlY3RlZFRva2VuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=