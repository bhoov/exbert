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
    getModelDetails(model, hashObj = null) {
        const toSend = {
            model: model
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/get-model-details", toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    getMetaAttentions(model, sentence, layer, hashObj = null) {
        const toSend = {
            model: model,
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
    updateMaskedAttentions(model, tokens, sentence, layer, hashObj = null) {
        const toSend = {
            model: model,
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
    getNearestEmbeddings(model, corpus, embedding, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            model: model,
            corpus: corpus,
            embedding: embedding,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/k-nearest-embeddings', toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url);
    }
    getNearestContexts(model, corpus, context, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            model: model,
            corpus: corpus,
            context: context,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/k-nearest-contexts', toSend);
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
function createDemos(sentence, maskInd, modelName, corpusName, outDictPath) {
    const api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["API"]();
    const layers = lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12);
    const L = 0;
    const contentHash = {}; // Map hash -> contents
    // Get the base return for all page initializations
    lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12).forEach(L => {
        api.getMetaAttentions(modelName, sentence, L, contentHash).then(r0 => {
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0);
            // Unmasked response:
            api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, contentHash).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd);
                api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, contentHash).then(r2 => {
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings;
                    api.getNearestEmbeddings(modelName, corpusName, embedding, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                    });
                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts;
                    api.getNearestContexts(modelName, corpusName, context, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
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
function inspectDemos(sentence, maskInd, modelName, corpusName, outDictPath) {
    const api = new _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["API"]();
    const contentHash = {};
    // Get the base return for all page initializations
    lodash__WEBPACK_IMPORTED_MODULE_2__["range"](1).forEach(L => {
        api.getMetaAttentions(modelName, sentence, L, "").then(r0 => {
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0);
            // Unmasked response:
            api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"]).then(r1 => {
                // Masked word and searching responses:
                tokCapsule.a.mask(maskInd);
                api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L, _api_mainApi__WEBPACK_IMPORTED_MODULE_1__["emptyTokenDisplay"]).then(r2 => {
                    console.log(r2);
                    // Get search results by embedding
                    const embedding = r2['aa']['left'][maskInd].embeddings;
                    api.getNearestEmbeddings(modelName, corpusName, embedding, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50, contentHash).then(x => {
                    });
                    // Get search results by context
                    const context = r2['aa']['left'][maskInd].contexts;
                    api.getNearestContexts(modelName, corpusName, context, L, lodash__WEBPACK_IMPORTED_MODULE_2__["range"](12), 50).then(x => {
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
    constructor() {
        this._conf = {};
        this._nHeads = 12; // How do I automate this?
        this._nLayers = null;
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
            layer: params['layer'] || 1,
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
        if (v == null || v.length < 1) {
            this.selectAllHeads();
        }
        else {
            console.log(this.headSet(new Set(v))._conf.heads);
        }
        return this.heads();
    }
    nHeads(val) {
        if (val == null)
            return this._nHeads;
        this._nHeads = val;
        return this;
    }
    nLayers(val) {
        if (val == null)
            return this._nLayers;
        this._nLayers = val;
        return this;
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
        this.headSet(new Set(lodash__WEBPACK_IMPORTED_MODULE_2__["range"](0, this._nHeads)));
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
        this.firstInit();
    }
    /**
     * Functions that can be called without any information of a response.
     *
     * This should be called once and only once
     */
    skeletonInit() {
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
        this._bindEventHandler();
    }
    mainInit() {
        this.sels.body.style("cursor", "progress");
        this.api.getModelDetails(this.uiConf.model()).then(md => {
            this.uiConf.nLayers(md.nlayers).nHeads(md.nheads);
            this.initLayers(this.uiConf.nLayers());
            this.api.getMetaAttentions(this.uiConf.model(), this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
                this.initFromResponse(attention);
                // Wrap postInit into function so asynchronous call does not mess with necessary inits
                const postResponseDisplayCleanup = () => {
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
                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(r => {
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateEmbeddings(r);
                        this.update();
                        postResponseDisplayCleanup();
                    });
                }
                else {
                    this.update();
                    postResponseDisplayCleanup();
                }
                this.sels.body.style("cursor", "default");
            });
        });
    }
    firstInit() {
        this.skeletonInit();
        this.mainInit();
    }
    initFromResponse(attention) {
        this.attCapsule = Object(_data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_12__["makeFromMetaResponse"])(attention, this.uiConf.hideClsSep());
        this.tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["TokenWrapper"](attention);
        this._staticInits();
    }
    _bindEventHandler() {
        //#region event handler binding
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenDblClick, (e) => {
            const letter = Object(_data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["sideToLetter"])(e.side, this.uiConf.attType);
            this.tokCapsule[letter].toggle(e.ind);
            this.sels.body.style("cursor", "progress");
            this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((r) => {
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
        const self = this;
        // Below are the available models. I can load up to 3 at once
        const data = [
            { name: "bert-base-cased" },
            { name: "gpt2" },
            { name: "distilbert-base-uncased" },
        ];
        this.sels.modelSelector.selectAll('.model-option')
            .data(data)
            .join('option')
            .classed('model-option', true)
            .property('value', d => d.name)
            .text(d => d.name);
        this.sels.modelSelector.property('value', this.uiConf.model());
        this.sels.modelSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            self.uiConf.model(me.property('value'));
            self.mainInit();
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
                this.api.getMetaAttentions(this.uiConf.model(), sentence_a, this.uiConf.layer())
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
        self.api.getNearestEmbeddings(self.uiConf.model(), self.uiConf.corpus(), embed, layer, heads, k)
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
        self.api.getNearestContexts(self.uiConf.model(), self.uiConf.corpus(), context, layer, heads, k)
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
    initLayers(nLayers) {
        const self = this;
        let hasActive = false;
        const checkboxes = self.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](1, nLayers + 1))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => {
            // Assign to largest layer available if uiConf.layer() > new nLayers
            if (d == self.uiConf.layer()) {
                hasActive = true;
                return true;
            }
            if (!hasActive && d == nLayers) {
                self.uiConf.layer(d);
                hasActive = true;
                return true;
            }
            return false;
        })
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])((v) => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["from"])(self.api.updateMaskedAttentions(self.uiConf.model(), self.tokCapsule.a, self.uiConf.sentence(), v))) // USE THIS
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
        console.log("Layer ID: ", layerId);
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
        const heads = lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, this.uiConf._nHeads);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRm9ybWF0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL1RleHRUb2tlbi50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVmlzQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9teU1haW4udHMiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL25vZGUtZmV0Y2ggKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT9hOGI3Iiwid2VicGFjazovLy9zdHJpbmdfZGVjb2RlciAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixxQkFBdUIsaUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQU8sTUFBTSxPQUFPLEdBQUc7SUFDdEIsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNG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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7O0FDekNIO0FBQUE7QUFBQSw0SEFBNEg7QUFDckgsTUFBTSxTQUFTLEdBQUc7SUFDckIsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFT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QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7SUFFRixNQUFNO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7QUNwMEJELGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdHMvbWFpbi50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZXhCRVJULmh0bWxcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGNvbnN0IERlbW9BUEkgPSB7XG5cdFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyY1wiOiBcIjUyN2ZkYWM0NDA0YmY5YmE1NDEyNjQ2YWQ0NTc5NTBkNDQ4Mjc2MmMuanNvblwiLFxuXHRcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTdcIjogXCI1OWI0YWNjMDVmMWQ4MGVjYmVmMWMyM2VhZjJmZGExMDIyMmNiMjU3Lmpzb25cIixcblx0XCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4XCI6IFwiMzU0OTkyZjJlZTIzNjYwNGM4NzRhM2E2MjdlNDA0MmJjNjg1ODZmOC5qc29uXCIsXG5cdFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3NlwiOiBcIjUwMTVlNWEzMTg2MDVjZWE2ODA4NTM4ZGIxNGQ4YWYxNjg4N2IwNzYuanNvblwiLFxuXHRcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTlcIjogXCIzYzlhYTE1MmFjODk0MzA2MDQwNzAzYzUwOTU1OTliMTk5Y2FkMWE5Lmpzb25cIixcblx0XCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyXCI6IFwiMGZlY2UwYzg3MjAzZTgzYWZkMTY3NGI1YWVlYmFlZDBmNWZhMDU2Mi5qc29uXCIsXG5cdFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZlwiOiBcImQzYTBlNDA0NWVhNDhhMjc1Y2U1MWE2YWYwMjgwNDA2MDYwZjQ3Y2YuanNvblwiLFxuXHRcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTdcIjogXCJlZDk4ZDc1MWFiOWI2YTRhMGU4NWU5MzMyYjQyMGE0YzEzYWI3NWE3Lmpzb25cIixcblx0XCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2XCI6IFwiMGQyNGFlMDhlZWIyMWFmODJjNjY2Y2JlMmFjMDY0NmVkOWM5ZDlhNi5qc29uXCIsXG5cdFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NFwiOiBcIjZkZTA1M2IzYjhhNGQ5MDQ3ODBjOWE2NTQ1YTBhNjNjYmJiMmIxNDQuanNvblwiLFxuXHRcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjdcIjogXCJmNjhkZjIzMzY1ZmFmMDJmOWMwMTQzOTM0NWJlZDY2OTM2ZWQ4NWY3Lmpzb25cIixcblx0XCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyXCI6IFwiNDYwOGNiNGZjMDBiNDNmZmY2ODA5OGU4NTY3NmZhZDU3Yzk0MGYwMi5qc29uXCIsXG5cdFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0YlwiOiBcImRmY2Q1MDE0NmRhOGQ4MTIyYTVhNTdjMmEzYzBhYmNlNTAzYmE5NGIuanNvblwiLFxuXHRcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWNcIjogXCIzNGM4NjI5ZDQyNjVkN2YzZWRlM2FkZDQyZjM2MTNiMjA1ZDk0YzFjLmpzb25cIixcblx0XCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmXCI6IFwiZGIyZGMyNTJhNzg2NjUwZjY0Mzk1YTBmNWQxODFjMDgzMTAxOWNiZi5qc29uXCIsXG5cdFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMVwiOiBcImRhNDU5N2Q3M2Q0NDQ3NTdiZGU5MTc2Mzk1YmYzMWFhZDMzMzQxMzEuanNvblwiLFxuXHRcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTBcIjogXCJhMmViZjEzZDNjOTM3MWZjZjczOGI5NjUxODI0ZTJjM2NkMWZmOGUwLmpzb25cIixcblx0XCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhXCI6IFwiYmM0MTkyMzhjMjBkZDFjNWNmZTFjYzQyN2FiM2QxZTMxMzUzNDM2YS5qc29uXCIsXG5cdFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4N1wiOiBcIjg0ZThiZTlmZTU2MmZiZDA0ODdjMDNiNTVjYzZiNGYzZmI4Y2Q3ODcuanNvblwiLFxuXHRcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzNcIjogXCIyMDdlNmM5OGEwZTE0OWRjN2U2ZWQ2NzExODI5NmQ4YThjODliM2MzLmpzb25cIixcblx0XCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhXCI6IFwiYzE4NWE5MzQ5YmE1YTMyNWFjZjg1MTRlOWI1MGRlNzEyODA0ODhhYS5qc29uXCIsXG5cdFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNlwiOiBcImRkZTQ4MWE1Y2QzNjY3YWU4YzZjNWI1ZTE0MjFkYzg4MmI2YTJkZDYuanNvblwiLFxuXHRcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDhcIjogXCJmNjNlMTRlOTM1ZDk4OTQ4YjRhMGViYzk2NjM0MDBkYmU0MjYzMzQ4Lmpzb25cIixcblx0XCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyXCI6IFwiNzliOTY0ZDFhNWM4NTRkZWFlYWNlMjY4MTNmOTY5OTRiYjgyYWVmMi5qc29uXCIsXG5cdFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxN1wiOiBcIjNiMTE2OGVjOTZhZjAwYzRlODg3MzQxZTkyYTg3OGY4NzUyZTFkMTcuanNvblwiLFxuXHRcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDNcIjogXCI4YzQ2MmJjMjk4ZTMxODNlZmE4ZDllODYzZTI1ZWE1ZDg5ODA2YjAzLmpzb25cIixcblx0XCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2XCI6IFwiOTkzOTY5OGVkYWEyNWJiYWU5ZWUxZDI3ODY0ZTY5OGYxMzk2M2YwNi5qc29uXCIsXG5cdFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNlwiOiBcIjczZjFlZTQ5N2IzZTdiNjM5NGU1NTcyNmIxOGRiZjlkNTE0ZGNlYTYuanNvblwiLFxuXHRcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWVcIjogXCJjN2NkYjgwYmY4MTNlMWRlMjQxMjYwYWVkZTZjZDI4ZWE2NWNjZmFlLmpzb25cIixcblx0XCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3XCI6IFwiYTk2ZmVkMTZlYWIxYmY2ZDA4ZTQwMDFjMDI4OTRkOWM1NDlkZjYyNy5qc29uXCIsXG5cdFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1N1wiOiBcImE4ZWFmMTBkYThkYzc1YjQyZTcyYmRjNzA5MTc3NjI0N2ZmZjk2NTcuanNvblwiLFxuXHRcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjJcIjogXCJhODE5NGYyMzA5ZTFjNzFlOTc3ZWY4ZDNiZTU3MmFlMDBiMGU5MWYyLmpzb25cIixcblx0XCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhXCI6IFwiMmY0YTE1YjY2ZmNmYjBjN2E0M2EzM2Q5Mzc2Mzk5MDI4MmJmYzVhYS5qc29uXCIsXG5cdFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0NlwiOiBcIjA2MDk1Y2VmNGE3ZjQ5YjE4ZjE1M2U2N2UzM2ZkZGI4MzFhMTViNDYuanNvblwiLFxuXHRcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTVcIjogXCI0YzkzZWFmMGMwY2U1NmYxZTVkNTEwMDkxNmFiZjRkMzFlYjM1ZGE1Lmpzb25cIixcblx0XCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiXCI6IFwiZjhjNDBjNjdjODUxYTA0ODlmNzQ4MGM5OWIzMWI0ZjYwNmMwMTg0Yi5qc29uXCIsXG5cdFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZFwiOiBcImU0ZTcxZjZlYTU3YmUyZTA1ZDYyYWYwODI1YTgwZjE0NDQyMWUwMmQuanNvblwiLFxuXHRcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2NcIjogXCJlN2Q5ZDUyMDg4Mjc4MmM3Y2ZiZmZlYWRhYWYyMmI0YzBhMDgxYzdjLmpzb25cIixcblx0XCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiXCI6IFwiNGFhNGViMTBlYWQ0NGEwYTNjMmRkOTU0MDcwMTdhOTI4MTM4YjMyYi5qc29uXCIsXG5cdFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMlwiOiBcImRhMzFkNTVlZThjYjAxYmNkYjI5NTcyY2I5MDJiOGU3OTk2ODViZTIuanNvblwiLFxuXHRcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTJcIjogXCJlNDI3MTgxZmIwMmJiZjE5ZjdiYmI2NWM5ZDkzODlkMmQ5YTQxODEyLmpzb25cIixcblx0XCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2XCI6IFwiYmJjYWI5ZTFjYTYwYTg1MWZkN2VjZmRhODBkZTQ3MGFmYTc0MDkzNi5qc29uXCIsXG5cdFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3NlwiOiBcIjRkZTk2YWEyMDUwNzY4NjNjOWZiNGVhOTllMmJhODZmYTEzMWZmNzYuanNvblwiLFxuXHRcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTlcIjogXCJlNGM2ZDFiMzAwNGUzY2RkMGM4NzlhNTk2MzliNWNlOTkzMjA3YTk5Lmpzb25cIixcblx0XCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhXCI6IFwiZmJjOWRhNzliOGJmMzlkYzk5OTg0MDg1MjY3NDFmODExYTEzZTZhYS5qc29uXCIsXG5cdFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOVwiOiBcIjUyODU1NGVlNGU2MTVjNjEyODdjNDBlZDlhMmFlYTY5YjkxYWY2YzkuanNvblwiLFxuXHRcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTRcIjogXCI1ZTcwNzNjMDNjMzdkMTk4MjZiMmZiNGE2NTk5Y2NhZWRkZTQ5MmU0Lmpzb25cIixcblx0XCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2XCI6IFwiNzFjNGE4ODZjZGVlNThhMzcxYWUyMTE1MzExYjE1MGU4NGU1NTVmNi5qc29uXCIsXG5cdFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjM1wiOiBcIjRiY2UwOTcwYTQ2NWZlOWI5NjMwNWUwNmFmMTljNWQ5Yzk3ZDdjYzMuanNvblwiLFxuXHRcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjdcIjogXCJlZmRiMWYwYTcwZjIyZjgwZmYzY2VhMGNiNzliZWM3MTdmYzhiNmY3Lmpzb25cIixcblx0XCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5XCI6IFwiMTc0YzZmNzg2ZDEzOWNlMTExMzgxMDQ1ZDYwZDI1NjgyYTE2OGI5OS5qc29uXCIsXG5cdFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNFwiOiBcImE4YzIzZTg4ZDZjYTZkNGVmZDI2NDZiMDc0MmMwZmEzMmRiZDU1YTQuanNvblwiLFxuXHRcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzhcIjogXCJmNjk0OWMyODc1MmRlMzVhODcwZWZkZTMwODU4NWFjZDQ2YTI1Mjc4Lmpzb25cIixcblx0XCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhXCI6IFwiYzFiZGI4Y2JhZmQ1ZDVkOGY2YmRhMmI0ZGIxNmI2YmMyZDYyZTE4YS5qc29uXCIsXG5cdFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNlwiOiBcIjJiODFhOGY2MDIyNTFjZjQwYjQ2ODJjOGNlZGIzOTY2YjkxMmQ3YzYuanNvblwiLFxuXHRcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmZcIjogXCI4Zjk0ZTg0M2QyNTEwMDQ3ZmQxYWY0NmYyNDlhZmU4N2ZmNDljYzJmLmpzb25cIixcblx0XCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwXCI6IFwiNGUzZGRiNTE1NTBjMDNjNjRmZGJlNTU5MjUyNjY2NTEwMGQzMjkzMC5qc29uXCIsXG5cdFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwY1wiOiBcImY4MTZiMjNhZjlhYTQzMTJjODBlNjY4YTY2YTE1NmM5MzRjYjMzMGMuanNvblwiLFxuXHRcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmRcIjogXCIyZmUwNWE5MTFhNTc0YjhhNmQ0YjA1ZWIxM2RiOWUwOWFhYWNhZDJkLmpzb25cIixcblx0XCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmXCI6IFwiNWM3MTQ5NjcyNjM5NWFhYTRkMGE2NTM3M2ZkMTY1MWI1YTBlNmIxZi5qc29uXCIsXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IFRva2VuRGlzcGxheSB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IERlbW9BUEkgfSBmcm9tICcuL2RlbW9BUEknXG5pbXBvcnQgKiBhcyBoYXNoIGZyb20gJ29iamVjdC1oYXNoJ1xuaW1wb3J0IHsgbWFrZVVybCwgdG9QYXlsb2FkIH0gZnJvbSAnLi4vZXRjL2FwaUhlbHBlcnMnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1VSTEhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUb2tlbkRpc3BsYXkgPSBuZXcgVG9rZW5EaXNwbGF5KClcblxuY29uc3QgYmFzZXVybCA9IFVSTEhhbmRsZXIuYmFzaWNVUkwoKVxuXG4vKipcbiAqIEEgcmV3cml0ZSBvZiBgZDMtZmV0Y2hgJ3MgYGQzLmpzb25gIGNhbGxiYWNrLiBJZiBhbiBhcGkgY2FsbCBmYWlscywgbWFrZSBhIGJhY2t1cCBjYWxsIHRvIHNwZWNpZmllZCB1cmwgYW5kIHBheWxvYWQsIGlmIHNwZWNpZmllZC5cbiAqIFxuICogQHBhcmFtIHJlc3BvbnNlIE9iamVjdCBleHBlY3RlZCBhdCB0aW1lIG9mIGNhbGxiYWNrXG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IG9mIGZhaWxcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIG1ha2luZyBhIHBvc3QgcmVxdWVzdFxuICovXG5mdW5jdGlvbiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBpZiAoYmFja3VwVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1RBVElDIEZJTEUgTk9UIEZPVU5EXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZCkudGhlbihyZXNwb25zZUpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbn1cblxuLyoqXG4gKiBDaGVjayBmaXJzdCBpZiB0aGUgaW5mb3JtYXRpb24gYmVpbmcgc2VudCBleGlzdHMgaW4gYSBzdGF0aWMgZGVtbyBmaWxlLiBJZiBpdCBkb2VzLCBzZW5kIHRoYXQuIE90aGVyd2lzZSwgbWFrZSBhIG5vcm1hbCBjYWxsIHRvIHRoZSBzZXJ2ZXIuXG4gKiBcbiAqIEBwYXJhbSB0b1NlbmQgVGhlIHBhY2tldCBvZiBpbmZvcm1hdGlvbiB0byBzZW5kIHRvIGFuIEFQSSBlbmRwb2ludFxuICogQHBhcmFtIGJhY2t1cFVybCBCYWNrdXAgdXJsIGluIHRoZSBldmVudCB0aGF0IHRoZSBkZW1vIGZpbGUgaXMgbm90IGZvdW5kXG4gKiBAcGFyYW0gYmFja3VwUGF5bG9hZCBCYWNrdXAgcGF5bG9hZCBpZiBkZW1vIGZpbGUgbm90IGZvdW5kLCBmb3IgUE9TVCByZXF1ZXN0cyBvbmx5XG4gKi9cbmZ1bmN0aW9uIGNoZWNrRGVtb0FQSSh0b1NlbmQsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgY29uc3QgaHNoID0gaGFzaC5zaGExKHRvU2VuZCk7XG4gICAgY29uc29sZS5sb2coXCJDSEVDS0lORyBERU1PQVBJOiBcIiArIGhzaCk7XG4gICAgaWYgKERlbW9BUEkuaGFzT3duUHJvcGVydHkoaHNoKSkge1xuICAgICAgICAvLyBSZWxpZXMgb24gYSBzeW1ib2xpYyBsaW5rIGJlaW5nIHByZXNlbnQgaW4gdGhlIGRpc3QgZm9sZGVyIHRvIHRoZSBkZW1vIGZvbGRlclxuICAgICAgICBjb25zdCBwYXRoID0gJy4vZGVtby8nICsgRGVtb0FQSVtoc2hdXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIFNFTkRJTkcgU1RBVElDOiBcIiwgcGF0aCk7XG4gICAgICAgIGNvbnN0IGZvbGxvdyA9IChyZXNwb25zZSkgPT4gcmVzcG9uc2VKc29uKHJlc3BvbnNlLCBiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG4gICAgICAgIHJldHVybiBmZXRjaChwYXRoKS50aGVuKGZvbGxvdylcbiAgICB9XG4gICAgcmV0dXJuIGQzLmpzb24oYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VVUkwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZXVybCArICcvYXBpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsRGV0YWlscyhtb2RlbDogc3RyaW5nLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTx0cC5Nb2RlbEluZm8+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArIFwiL2dldC1tb2RlbC1kZXRhaWxzXCIsIHRvU2VuZClcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cblxuICAgIGdldE1ldGFBdHRlbnRpb25zKG1vZGVsOiBzdHJpbmcsIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHRwLkF0dGVudGlvblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBzZW50ZW5jZSxcbiAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvYXR0ZW5kK21ldGFcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkaXNwbGF5IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhbHJlYWR5IHBhcnNlZCBmcm9tIHRoZSBwYXNzZWQgc2VudGVuY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgVGhlIGRpc3BsYXllZCB0b2tlbnMgaW4gdGhlIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIHNlbnRlbmNlQSBUaGUgb3JpZ2luYWwgc2VudGVuY2UgdGhhdCBsZWQgdG8gdGhlIHRva2VuaXplZCBpbmZvcm1hdGlvbiBpbiBgYWBcbiAgICAgKiBAcGFyYW0gbGF5ZXIgV2hpY2ggbGF5ZXIgdG8gc2VhcmNoIGF0XG4gICAgICogQHBhcmFtIGhhc2hPYmogSWYgbm90IG51bGwsIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVzcG9uc2VzIGludG8gdGhlIHBhc3NlZCBvYmplY3QuIFVzZWQgZm9yIGNyZWF0aW5nIGRlbW9zLlxuICAgICAqL1xuICAgIHVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgdG9rZW5zOiBUb2tlbkRpc3BsYXksIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHRwLkF0dGVudGlvblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHRva2VuczogUi5tYXAoUi5wcm9wKCd0ZXh0JyksIHRva2Vucy50b2tlbkRhdGEpLFxuICAgICAgICAgICAgc2VudGVuY2U6IHNlbnRlbmNlLFxuXG4gICAgICAgICAgICAvLyBFbXB0eSBtYXNrcyBuZWVkIHRvIGJlIHNlbnQgYXMgYSBudW1iZXIsIHVuZm9ydHVuYXRlbHkuIENob29zaW5nIC0xIGZvciB0aGlzXG4gICAgICAgICAgICBtYXNrOiB0b2tlbnMubWFza0luZHMubGVuZ3RoID8gdG9rZW5zLm1hc2tJbmRzIDogWy0xXSxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy91cGRhdGUtbWFzaycpO1xuICAgICAgICBjb25zdCBwYXlsb2FkID0gdG9QYXlsb2FkKHRvU2VuZClcblxuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqIGZvciBkZW1vIHB1cnBvc2VzXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwsIHBheWxvYWQpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBQT1NUIFwiICsgdXJsLCBwYXlsb2FkKTtcblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsLCBwYXlsb2FkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBlbWJlZGRpbmcgRW1iZWRkaW5nIG9mIHRoZSB3b3JkXG4gICAgICogQHBhcmFtIGxheWVyIEluIHRoZSBsJ3RoIGxheWVyXG4gICAgICogQHBhcmFtIGsgaG93IG1hbnkgcmVzdWx0cyB0byByZXRyaWV2ZVxuICAgICAqL1xuICAgIGdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsOiBzdHJpbmcsIGNvcnB1czogc3RyaW5nLCBlbWJlZGRpbmc6IG51bWJlcltdLCBsYXllcjogbnVtYmVyLCBoZWFkczogbnVtYmVyW10sIGsgPSAxMCwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgY29ycHVzOiBjb3JwdXMsXG4gICAgICAgICAgICBlbWJlZGRpbmc6IGVtYmVkZGluZyxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWVtYmVkZGluZ3MnLCB0b1NlbmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TmVhcmVzdENvbnRleHRzKG1vZGVsOiBzdHJpbmcsIGNvcnB1czogc3RyaW5nLCBjb250ZXh0OiBudW1iZXJbXSwgbGF5ZXI6IG51bWJlciwgaGVhZHM6IG51bWJlcltdLCBrID0gMTAsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIGNvcnB1czogY29ycHVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWNvbnRleHRzJywgdG9TZW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cbn07XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vKipcbiAqIE5vdGVzOlxuICogXG4gKiAtIEFsc28gZW5jYXBzdWxhdGUgdGhlIENMUy9TRVAgaW5mbyB2cy4gbm8gQ0xTL1NFUCBpbmZvXG4gKiAtIFdoZW4gbGF5ZXIgZm9ybWF0IGNoYW5nZXMgZnJvbSBsaXN0LCBkcm9wIHRoZSBpbmRleCBpbnRvIGNvbmYubGF5ZXJcbiAqL1xuXG5jb25zdCBicGVUb2tlbnMgPSBbXCJbQ0xTXVwiLCBcIltTRVBdXCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7U3BhY3lJbmZvfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtpbml0WmVyb30gZnJvbSAnLi4vZXRjL3hyYW1kYSdcblxuLy8gSWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0cnkgdG8gbWFrZSBsb3dlcmNhc2VcbmNvbnN0IG1ha2VTdHJpbmdMb3dlciA9IFIuaWZFbHNlKFIuaXMoU3RyaW5nKSwgUi50b0xvd2VyLCBSLmlkZW50aXR5KVxuXG5mdW5jdGlvbiBhcmdNYXgoYXJyYXk6bnVtYmVyW10pIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGFycmF5LCAoeCwgaSkgPT4gW3gsIGldKS5yZWR1Y2UoKHIsIGEpID0+IChhWzBdID4gclswXSA/IGEgOiByKSlbMV07XG59XG5cbmNvbnN0IGdldE1heFRva2VuID0gKGQ6IHRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnNbYXJnTWF4KGQubWF0Y2hlZF9hdHQub3V0LmF0dCldXG5cblxuZXhwb3J0IGNsYXNzIEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB7XG4gICAgZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW11cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9zaXRpb24gaW5mbyBpbnRlcnByZXRhYmxlIGJ5IHRoZSBoaXN0b2dyYW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY291bnRPYmogUmVwcmVzZW50cyB0aGUgaW5mb3JybWF0aW9uIHRvIGJlIGRpc3BsYXllZCBieSB0aGUgaGlzdG9ncmFtXG4gICAgICovXG4gICAgY291bnRQb3NJbmZvKCkge1xuICAgICAgICBjb25zdCBhdHRPZmZzZXRzID0gdGhpcy5kYXRhLm1hcCgoZCxpKSA9PiArZC5tYXRjaGVkX2F0dC5vdXQub2Zmc2V0X3RvX21heClcblxuICAgICAgICBjb25zdCBjdE9iaiA9IHtcbiAgICAgICAgICAgIG9mZnNldDogaW5pdFplcm8oYXR0T2Zmc2V0cylcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dE9mZnNldHMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0T2JqKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgY3RPYmpba11bdl0gKz0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY3RPYmpcbiAgICB9XG5cbiAgICBjb3VudE1heEF0dEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF4TWF0Y2ggPSBnZXRNYXhUb2tlbihkKVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb3VudE9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBtYWtlU3RyaW5nTG93ZXIoU3RyaW5nKG1heE1hdGNoW2tdKSlcbiAgICAgICAgICAgICAgICBjb3VudE9ialtrXVt2YWxdICs9IDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG5ld0NvdW50T2JqID0gT2JqZWN0LmFzc2lnbihjb3VudE9iaiwgdGhpcy5jb3VudFBvc0luZm8oKSlcbiAgICAgICAgcmV0dXJuIG5ld0NvdW50T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXRjaGVkS2V5cyhpbmRleE9mZnNldD0wKSB7XG4gICAgICAgIC8vIFRoZSBrZXlzIGluIHRoZSBiZWxvdyBvYmplY3QgZGljdGF0ZSB3aGF0IHdlIGNvdW50XG4gICAgICAgIGNvbnN0IGNvdW50T2JqID0ge1xuICAgICAgICAgICAgcG9zOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICAgICAgZGVwOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGQudG9rZW5zW2QuaW5kZXggKyBpbmRleE9mZnNldF1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRPYmpcbiAgICB9XG5cbiAgICBnZXRNYXRjaGVkSGlzdG9ncmFtKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudE1hdGNoZWRLZXlzKGluZGV4T2Zmc2V0KVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIHRvdGFsSGlzdClcblxuICAgICAgICByZXR1cm4gbm9uWmVyb1xuICAgIH1cblxuICAgIGdldE1heEF0dEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgLy8gY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudFBvc0luZm8oKVxuICAgICAgICBjb25zdCBuZXdIaXN0ID0gdGhpcy5jb3VudE1heEF0dEtleXMoKVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIG5ld0hpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgeF8gZnJvbSAnLi4vZXRjL19Ub29scydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuLyoqXG4gKiBUaGUgb3JpZ2luYWwgdG9rZW5zLCBhbmQgdGhlIGluZGV4ZXMgdGhhdCBuZWVkIHRvIGJlIG1hc2tlZFxuICovXG4gY29uc3QgZW1wdHlGdWxsUmVzcG9uc2U6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSA9IFt7XG4gICAgIHRleHQ6ICdbU0VQXScsXG4gICAgIGVtYmVkZGluZ3M6IFtdLFxuICAgICBjb250ZXh0czogW10sXG4gICAgIGJwZV90b2tlbjogJycsXG4gICAgIGJwZV9wb3M6ICcnLFxuICAgICBicGVfZGVwOiAnJyxcbiAgICAgYnBlX2lzX2VudDogbnVsbCxcbiB9XVxuXG5leHBvcnQgY2xhc3MgVG9rZW5EaXNwbGF5ICB7XG4gICAgdG9rZW5EYXRhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXVxuICAgIG1hc2tJbmRzOm51bWJlcltdXG5cbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnM9ZW1wdHlGdWxsUmVzcG9uc2UsIG1hc2tJbmRzPVtdKXtcbiAgICAgICAgdGhpcy50b2tlbkRhdGEgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMubWFza0luZHMgPSBtYXNrSW5kcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGlkeCB0byB0aGUgbWFzayBpZHggbGlzdCBpbiBvcmRlciBmcm9tIHNtYWxsZXN0IHRvIGxhcmdlc3RcbiAgICAgKi9cbiAgICBtYXNrKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIHhfLm9yZGVyZWRJbnNlcnRfKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZhbH0gYWxyZWFkeSBpbiBtYXNrSW5kcyFgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFza0luZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNYXNraW5nICR7dmFsfWApO1xuICAgICAgICAgICAgdGhpcy5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbm1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLnVubWFzayh2YWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bm1hc2sodmFsKSB7XG4gICAgICAgIF8ucHVsbCh0aGlzLm1hc2tJbmRzLCB2YWwpO1xuICAgIH1cblxuICAgIHJlc2V0TWFzaygpIHtcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IFtdO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5EYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25jYXQob3RoZXI6IFRva2VuRGlzcGxheSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSBfLmNvbmNhdCh0aGlzLnRva2VuRGF0YSwgb3RoZXIudG9rZW5EYXRhKTtcbiAgICAgICAgY29uc3QgbmV3TWFzayA9IF8uY29uY2F0KHRoaXMubWFza0luZHMsIG90aGVyLm1hc2tJbmRzLm1hcCh4ID0+IHggKyB0aGlzLmxlbmd0aCgpKSk7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW5EaXNwbGF5KG5ld1Rva2VucywgbmV3TWFzayk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5XcmFwcGVyIHtcbiAgICBhOiBUb2tlbkRpc3BsYXlcblxuICAgIGNvbnN0cnVjdG9yKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2Upe1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tUmVzcG9uc2Uocjp0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCB0b2tlbnNBID0gci5hYS5sZWZ0O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21Db21wb25lbnRzKHRva2Vuc0EsIFtdKVxuICAgIH1cblxuICAgIHVwZGF0ZUZyb21Db21wb25lbnRzKGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdLCBtYXNrQTpudW1iZXJbXSl7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBUb2tlbkRpc3BsYXkoYSwgbWFza0EpXG4gICAgfVxuXG4gICAgdXBkYXRlRW1iZWRkaW5ncyhyOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSByLmFhLmxlZnRcblxuICAgICAgICBjb25zdCBwYWlycyA9IFIuemlwKHRoaXMuYS50b2tlbkRhdGEsIG5ld1Rva2VucylcblxuICAgICAgICBwYWlycy5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICBkWzBdLmVtYmVkZGluZ3MgPSBkWzFdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgIGRbMF0uY29udGV4dHMgPSBkWzFdLmNvbnRleHRzXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXNrIHRoZSBhcHByb3ByaWF0ZSBzZW50ZW5jZSBhdCB0aGUgaW5kZXggaW5kaWNhdGVkXG4gICAgICovXG4gICAgbWFzayhzSUQ6dHAuVG9rZW5PcHRpb25zLCBpZHg6bnVtYmVyKXtcbiAgICAgICAgdGhpc1tzSURdLm1hc2soaWR4KVxuICAgICAgICBjb25zdCBvcHRzID0gW1wiYVwiLCBcImJcIl1cbiAgICAgICAgY29uc3QgTmEgPSB0aGlzLmEubGVuZ3RoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lkZVRvTGV0dGVyKHNpZGU6dHAuU2lkZU9wdGlvbnMsIGF0eXBlOnRwLlNlbnRlbmNlT3B0aW9ucyl7XG4gICAgLy8gY29uc3QgYXR5cGUgPSBjb25mLmF0dFR5cGU7XG4gICAgaWYgKGF0eXBlID09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYWxsXCJcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gc2lkZSA9PSBcImxlZnRcIiA/IGF0eXBlWzBdIDogYXR5cGVbMV0gLy8gTm8gdHlwZSBjaGVja2luZz9cbiAgICByZXR1cm4gb3V0XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJ1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgc3RhdGljIHRyYW5zbGF0ZSh7eCwgeX0pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIlxuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGUoZGVnKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBncm91cChwYXJlbnQsIGNsYXNzZXMsIHBvcyA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZCgnZycpLmF0dHJzKHtcbiAgICAgICAgICAgIGNsYXNzOiBjbGFzc2VzLFxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogU1ZHLnRyYW5zbGF0ZShwb3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHJzKHt4OiAwLCB5OiAtMjAsIGNsYXNzOiBjbGFzc2VzfSlcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Q09MT1JTMjAwfSBmcm9tICcuLi9ldGMvY29sb3JzJyBcblxuZXhwb3J0IGNsYXNzIFNwYWN5SW5mbyB7XG4gICAgY29sb3JTY2FsZTp0cC5Db2xvck1ldGFTY2FsZVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gdGhpcy5jcmVhdGVDb2xvclNjYWxlcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBFbmdsaXNoTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFsncHVuY3QnLCAnc3ltJywgJ3gnLCAnYWRqJywgJ3ZlcmInLCAnY29uaicsICdudW0nLCAnZXQnLCAnYWR2JywgJ3gnLCAnYWRwJywgJ25vdW4nLCAncHJvcG4nLCAncGFydCcsICdwcm9uJywgJ3NwYWNlJywgJ2ludGonXSxcbiAgICAgICAgZGVwOiBbJ3Jvb3QnLCAnUk9PVCcsICdhY2wnLCAnYWNvbXAnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2FnZW50JywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXR0cicsICdhdXgnLCAnYXV4cGFzcycsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgXG4gICAgICAgICdjc3VianBhc3MnLCAnZGF0aXZlJywgJ2RlcCcsICdkZXQnLCAnZG9iaicsICdleHBsJywgJ2ludGonLCAnbWFyaycsICdtZXRhJywgJ25lZycsICdubicsICdub3VubW9kJywgJ25wbW9kJywgJ25zdWJqJywgJ25zdWJqcGFzcycsICdudW1tb2QnLCAnb3ByZCcsIFxuICAgICAgICAnb2JqJywgJ29ibCcsICdwYXJhdGF4aXMnLCAncGNvbXAnLCAncG9iaicsICdwb3NzJywgJ3ByZWNvbmonLCAncHJlZGV0JywgJ3ByZXAnLCAncHJ0JywgJ3B1bmN0JywgJ3F1YW50bW9kJywgJ3JlbGNsJywgJ3Jvb3QnLCAneGNvbXAnLCAnbnBhZHZtb2QnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2Jzb2xldGUuIFJlcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIHRoYXQgaXMgaW5jbHVkZWQgd2hlbiB0cmFpbmVkIG9uIHRoZSB1bml2ZXJzYWwgY29ycHVzXG4gICAgICovXG4gICAgc3RhdGljIFVuaXZlcnNhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ2FkaicsICdhZHAnLCAnYWR2JywgJ2F1eCcsICdjb25qJywgJ2Njb25qJywgJ2RldCcsICdpbnRqJywgJ25vdW4nLCAnbnVtJywgJ3BhcnQnLCAncHJvbicsICdwcm9wbicsICdwdW5jdCcsICdzY29uaicsICdzeW0nLCAndmVyYicsICd4JywgJ3NwYWNlJ10sXG4gICAgICAgIGRlcDogWydhY2wnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXV4JywgJ2Nhc2UnLCAnY2MnLCAnY2NvbXAnLCAnY2xmJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgJ2RlcCcsICdkZXQnLCAnZGlzY291cnNlJywgXG4gICAgICAgICAgICAgICAgJ2Rpc2xvY2F0ZWQnLCAnZXhwbCcsICdmaXhlZCcsICdmbGF0JywgJ2dvZXN3aXRoJywgJ2lvYmonLCAnbGlzdCcsICdtYXJrJywgJ25tb2QnLCAnbnN1YmonLCAnbnVtbW9kJywgJ29iaicsICdvYmwnLCAnb3JwaGFuJywgJ3BhcmF0YXhpcycsICdwdW5jdCcsICdyZXBhcmFuZHVtJywgXG4gICAgICAgICAgICAgICAgJ3Jvb3QnLCAndm9jYXRpdmUnLCAneGNvbXAnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgc3RhdGljIFRvdGFsTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFIudW5pb24oU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5wb3MsIFNwYWN5SW5mby5Vbml2ZXJzYWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICBkZXA6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuZGVwLFxuICAgICAgICBpc19lbnQ6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuaXNfZW50LFxuICAgICAgICBlbnRzOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmVudHMsXG4gICAgfVxuXG4gICAgY3JlYXRlQ29sb3JTY2FsZXMoKTogdHAuQ29sb3JNZXRhU2NhbGV7XG4gICAgICAgIGNvbnN0IHRvU2NhbGUgPSAoa2V5czogQXJyYXk8bnVtYmVyfHN0cmluZ3xib29sZWFuPikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gUi56aXBPYmooUi5tYXAoU3RyaW5nLCBrZXlzKSwgQ09MT1JTMjAwLnNsaWNlKDAsIGtleXMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBrID0+IFIucHJvcE9yKFwiYmxhY2tcIiwgaywgb2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXlDb2xvcnMgPSB7XG4gICAgICAgICAgICBwb3M6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgICAgICBlbnRzOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmVudHMpLFxuICAgICAgICAgICAgb2Zmc2V0OiBkMy5zY2FsZU9yZGluYWwoKS5yYW5nZShbJ2JsYWNrJ10pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPHRwLkNvbG9yTWV0YVNjYWxlPjx1bmtub3duPm15Q29sb3JzXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3BhY3lDb2xvcnMgPSBuZXcgU3BhY3lJbmZvKCk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICovXG5cbmV4cG9ydCBjbGFzcyBVUkxIYW5kbGVyIHtcblxuICAgIHN0YXRpYyBiYXNpY1VSTCgpIHtcbiAgICAgICAgY29uc3QgdXJsX3BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMikuam9pbignLycpO1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgKHVybF9wYXRoLmxlbmd0aCA/IHVybF9wYXRoIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYWxsIFVSTCBwYXJhbWV0ZXJzIGludG8gYSBtYXAuXG4gICAgICogQHJldHVybnMge01hcH0gdGhlIHVybCBwYXJhbWV0ZXJzIGFzIGEga2V5LXZhbHVlIHN0b3JlIChFUzYgbWFwKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpOiBvYmplY3Qge1xuICAgICAgICAvLyBBZGFwdGVkIGZyb206ICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwOTA1NTEvcGFyc2UtcXVlcnktc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgY29uc3QgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcnMsIFwiLS0tIHZhcnNcIik7XG5cbiAgICAgICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGlzSW50ID0geCA9PiAoL15bMC05XSskLykudGVzdCh4KTtcbiAgICAgICAgY29uc3QgaXNGbG9hdCA9IHggPT4gKC9eWzAtOV0rXFwuWzAtOV0qJC8pLnRlc3QoeCk7XG5cbiAgICAgICAgY29uc3QgdHlwZUNhc3QgPSB2YWwgPT4ge1xuICAgICAgICAgICAgaWYgKGlzSW50KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Zsb2F0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2U6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXJzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gdi5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHNbMF0pO1xuICAgICAgICAgICAgICAgIGxldCByYXdfdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzFdKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSByYXdfdmFsdWUuc3RhcnRzV2l0aCgnLi4nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByYXdfdmFsdWUgPSByYXdfdmFsdWUuc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJhd192YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IGlzQXJyYXkgPyBbXSA6ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSByYXdfdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWwgPT4gdHlwZUNhc3QodmFsKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gdHlwZUNhc3QocmF3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gVVJMIHN0cmluZyBmcm9tIGEgbWFwIG9mIHVybCBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHt7fX0gdXJsUGFyYW1ldGVycyAtIHRoZSBtYXAgb2YgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gYW4gVVJJIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyB1cmxTdHJpbmcodXJsUGFyYW1ldGVyczogb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1ldGVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB1cmxQYXJhbWV0ZXJzW2tdO1xuICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHY7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHZhbHVlID0gJy4uJyArIHYuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIGF0dHIucHVzaChlbmNvZGVVUkkoayArICc9JyArIHZhbHVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGxldCByZXMgPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlcyArPSAnPycgKyBhdHRyLmpvaW4oJyYnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVVJMUGFyYW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgYWRkVG9Ccm93c2VySGlzdG9yeSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAgICAgY3VycmVudFBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIFVSTEhhbmRsZXIudXBkYXRlVXJsKGN1cnJlbnRQYXJhbXMsIGFkZFRvQnJvd3Nlckhpc3RvcnkpO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEdlbmVyYXRlcyBhIGtleS12YWx1ZSBtYXAgb2YgYWxsIFVSTCBwYXJhbXMgYW5kIHJlcGxhY2VzIHJlcGxhY2VLZXlzXG4gICAgLy8gICogQHBhcmFtIHVwZGF0ZUtleXNcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgdXBkYXRlVVJMUGFyYW1zKHVwZGF0ZUtleXMpIHtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAvLyAgICAgT2JqZWN0LmtleXModXBkYXRlS2V5cykuZm9yRWFjaCgoaykgPT4gY3VycmVudFBhcmFtc1trXSA9IHVwZGF0ZUtleXNba10pXG4gICAgLy8gICAgIHJldHVybiBjdXJyZW50UGFyYW1zO1xuICAgIC8vIH1cblxuXG4gICAgc3RhdGljIHVwZGF0ZVVybCh1cmxQYXJhbWV0ZXJzOiBvYmplY3QsIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGlmIChhZGRUb0Jyb3dzZXJIaXN0b3J5KSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7QmFzZVR5cGV9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHtwcmVmaXggPSAnJ30pOiBzdHJpbmcge1xuICAgICAgICB0aGVfdW5pcXVlX2lkX2NvdW50ZXIgKz0gMTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ICsgdGhlX3VuaXF1ZV9pZF9jb3VudGVyO1xuICAgIH1cbn1cblxuZXhwb3J0IHR5cGUgRDNTZWwgPSBkMy5TZWxlY3Rpb248YW55LCBhbnksIGFueSwgYW55PlxuXG4vKipcbiAqIFNlbGVjdGlvbiB1dGlsaXR5IGZ1bmN0aW9ucyBzaG91bGQgYmUgc3RhdGljIG1ldGhvZHMgaW4gdGhlIGJlbG93IGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWwge1xuICAgIHN0YXRpYyBzZXRTZWxWaXNpYmxlID0gKHg6RDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OkQzU2VsKSA9PiB4LmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgc3RhdGljIHNldFZpc2libGUgPSAoeDpzdHJpbmcpID0+IFNlbC5zZXRTZWxWaXNpYmxlKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgc2V0SGlkZGVuID0gKHg6c3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb29zZU9iamVjdCB7XG4gICAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIGQzUzxUIGV4dGVuZHMgQmFzZVR5cGUsIFUgPSBhbnk+ID0gZDMuU2VsZWN0aW9uPFQsIFUsIGFueSwgYW55PiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5mdW5jdGlvbiBhc2NPcmRlcihuMSwgbjIpIHtcbiAgICBpZiAobjEgPCBuMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGVsc2UgaWYgKG4xID4gbjIpIHsgXG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IHtmaW5kQWxsSW5kZXhlcywgaW5zZXJ0QXRfLCBvcmRlcmVkSW5zZXJ0Xywgc2V0MlNvcnRlZEFycmF5fVxuXG4vKipcbiAqIEZpbmQgYWxsIGluZGV4ZXMgdGhhdCBtYXRjaCBhIHBhcnRpY3VsYXIgcHJlZGljYXRlXG4gKi9cbmZ1bmN0aW9uIGZpbmRBbGxJbmRleGVzPFQ+KGFycmF5OkFycmF5PFQ+LCBwcmVkaWNhdGU6KGE6VCkgPT4gYm9vbGVhbik6IG51bWJlcltdIHtcbiAgICBsZXQgZnJvbUluZGV4PTA7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcblxuICAgIGxldCBpID0gXy5maW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KTtcbiAgICB3aGlsZSAoaSAhPSAtMSkge1xuICAgICAgICByZXN1bHRzLnB1c2goaSk7XG4gICAgICAgIGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBpKzEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5mdW5jdGlvbiBpbnNlcnRBdF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBpbmQ6bnVtYmVyKTpBcnJheTxUPiB7XG4gICAgYXJyYXkuc3BsaWNlKGluZCwgMCwgdmFsKTtcbiAgICByZXR1cm4gYXJyYXlcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc2V0IHRvIGFuIG9yZGVyZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gc2V0MlNvcnRlZEFycmF5PFQ+KGlucHV0OlNldDxUPik6QXJyYXk8VD4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGlucHV0KS5zb3J0KGFzY09yZGVyKVxufVxuXG4vKipcbiAqIEluc2VydCBhIHZhbHVlIGludG8gYXJyYXkgaW4gc29ydGVkIG9yZGVyIElOIFBMQUNFXG4gKiBcbiAqIFdBUk5JTkc6IE9ubHkgaGFuZGxlcyBudW1iZXJzLCBzb3J0ZWQgZnJvbSBsZWFzdCB0byBncmVhdGVzdFxuICogLSBBc3N1bWVzIGFscmVhZHkgc29ydGVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIG9yZGVyZWRJbnNlcnRfPFQ+KGFycmF5OkFycmF5PFQ+LCB2YWw6VCwgY29sZHN0YXJ0PWZhbHNlKTpBcnJheTxUPiB7XG4gICAgLy8gUmVzb3J0IGFycmF5IGlmIGRlc2lyZWRcbiAgICBpZiAoY29sZHN0YXJ0KSB7XG4gICAgICAgIGFycmF5LnNvcnQoYXNjT3JkZXIpXG4gICAgfVxuXG4gICAgY29uc3QgaW5kID0gXy5zb3J0ZWRJbmRleChhcnJheSwgdmFsKTtcbiAgICByZXR1cm4gaW5zZXJ0QXRfKGFycmF5LCB2YWwsIGluZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSYW5kb20obGVuOm51bWJlcil7XG4gIGNvbnN0IGE6bnVtYmVyW10gPSBuZXcgQXJyYXkobGVuKS5maWxsKDApXG5cbiAgcmV0dXJuIGEubWFwKCh4KSA9PiB7cmV0dXJuIF8ucmFuZG9tKC01LCA1LCB0cnVlKX0pXG59IiwiLyoqXG4gKiBDb252ZXJ0IGEgSlMgb2JqZWN0IGludG8gR0VUIFVSTCBwYXJhbWV0ZXJzXG4gKiBcbiAqIEBwYXJhbSBiYXNlIEJhc2UgVVJMIGF0b3Agd2hpY2ggdG8gYWRkIEdFVCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gcGFyYW1zIE9iamVjdCB0byBpbnNlcnQgaW50byBhIFVSTCBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVcmwoYmFzZTogc3RyaW5nLCBwYXJhbXM/OiBvYmplY3QpOnN0cmluZyB7XG4gICAgaWYgKHBhcmFtcyl7XG4gICAgICAgIGxldCBvdXQ6IHN0cmluZyA9IGJhc2UgKyBcIj9cIjtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goIGsgPT4ge1xuICAgICAgICAgICAgb3V0ICs9IGs7XG4gICAgICAgICAgICBvdXQgKz0gJz0nO1xuICAgICAgICAgICAgb3V0ICs9IHBhcmFtc1trXTtcbiAgICAgICAgICAgIG91dCArPSBcIiZcIjtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG91dC5yZXBsYWNlKC8mJC9nLCBcIlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBiYXNlO1xuICAgIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBpbmZvcm1hdGlvbiBpbiBHRVQgcmVxdWVzdCBpbnRvIHRoZSBtZXNzYWdlIGZvciBhIFBPU1QgcmVxdWVzdCAgICBcbiAqL1xuZXhwb3J0IGNvbnN0IHRvUGF5bG9hZCA9ICh0b1NlbmQpID0+IHtyZXR1cm4ge1xuICAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KHRvU2VuZCksXG4gICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCJcbiAgICAgICAgfVxufX0iLCIvLyBbW3ZhbCwgaW5kXSwgW3ZhbCwgaW5kXS4uLl1cbnR5cGUgQ29tcEZuSW5kID0gKGE6bnVtYmVyW10sIGI6bnVtYmVyW10pID0+IG51bWJlcjtcblxuZXhwb3J0IGludGVyZmFjZSBTb3J0QXJyYXkge1xuICAgIGFycjogbnVtYmVyW10sXG4gICAgc29ydEluZGljZXM6IG51bWJlcltdLFxufVxuXG4vKipcbiAqIENvcGllcyBhbmQgc29ydHMgYW4gYXJyYXkgd2hpbGUga2VlcGluZyB0cmFjayBvZiB0aGUgaW5kaWNlcy4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgc29ydGluZyBtYXggLT4gbWluLlxuICogXG4gKiBAcGFyYW0gYXJyIC0gQXJyYXkgdG8gYmUgY29waWVkIGFuZCBzb3J0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRXaXRoSW5kaWNlcyhhcnI6bnVtYmVyW10sIGZuPzpDb21wRm5JbmQpOiBTb3J0QXJyYXkge1xuICAgIC8vIElmIGZuIGlzIG5vdCBwcm92aWRlZCwgZGVmYXVsdCB0byBzb3J0aW5nIGJ5IG1heCB2YWx1ZVxuICAgIGlmICghZm4pIHtcbiAgICAgICAgZm4gPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgICByZXR1cm4gbGVmdFswXSA+IHJpZ2h0WzBdID8gLTEgOiAxO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGxldCBvdXQ6U29ydEFycmF5ID0ge1xuICAgICAgICBhcnI6IFtdLFxuICAgICAgICBzb3J0SW5kaWNlczogW11cbiAgICB9O1xuXG4gICAgbGV0IGlkeFRyYWNrZXI6IG51bWJlcltdW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZHhUcmFja2VyW2ldID0gW2FycltpXSwgaV07XG4gICAgfVxuXG4gICAgaWR4VHJhY2tlci5zb3J0KGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICByZXR1cm4gbGVmdFswXSA+IHJpZ2h0WzBdID8gLTEgOiAxO1xuICAgIH0pO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgIG91dC5zb3J0SW5kaWNlcy5wdXNoKGlkeFRyYWNrZXJbal1bMV0pO1xuICAgICAgb3V0LmFycltqXSA9IGlkeFRyYWNrZXJbal1bMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfSIsIi8vIENvbG9ycyB3ZXJlIGdlbmVyYXRlZCB0byBiZSBhcyB2aXN1YWxseSBkaXN0aW5jdCBhcyBwb3NzaWJsZSBieTogaHR0cDovL2pubm5ubi5naXRodWIuaW8vY2F0ZWdvcnktY29sb3JzLWNvbnN0cmFpbmVkLmh0bWxcbmV4cG9ydCBjb25zdCBDT0xPUlMyMDAgPSBbXG4gICAgXCIjMzk1N2ZmXCIsIFwiI2QzZmUxNFwiLCBcIiNjOTA4MGFcIiwgXCIjZmVjN2Y4XCIsIFwiIzBiN2IzZVwiLCBcIiMwYmYwZTlcIiwgXCIjYzIwM2M4XCIsIFwiI2ZkOWIzOVwiLCBcbiAgICBcIiM4ODg1OTNcIiwgXCIjOTA2NDA3XCIsIFwiIzk4YmE3ZlwiLCBcIiNmZTY3OTRcIiwgXCIjMTBiMGZmXCIsIFwiI2FjN2JmZlwiLCBcIiNmZWU3YzBcIiwgXCIjOTY0YzYzXCIsXG4gICAgXCIjMWRhNDljXCIsIFwiIzBhZDgxMVwiLCBcIiNiYmQ5ZmRcIiwgXCIjZmU2Y2ZlXCIsIFwiIzI5NzE5MlwiLCBcIiNkMWEwOWNcIiwgXCIjNzg1NzllXCIsIFwiIzgxZmZhZFwiLFxuICAgIFwiIzczOTQwMFwiLCBcIiNjYTY5NDlcIiwgXCIjZDliZjAxXCIsIFwiIzY0NmE1OFwiLCBcIiNkNTA5N2VcIiwgXCIjYmI3M2E5XCIsIFwiI2NjZjZlOVwiLCBcIiM5Y2I0YjZcIixcbiAgICBcIiNiNmE3ZDRcIiwgXCIjOWU4YzYyXCIsIFwiIzZlODNjOFwiLCBcIiMwMWFmNjRcIiwgXCIjYTcxYWZkXCIsIFwiI2NmZTU4OVwiLCBcIiNkNGNjZDFcIiwgXCIjZmQ0MTA5XCIsXG4gICAgXCIjYmY4ZjBlXCIsIFwiIzJmNzg2ZVwiLCBcIiM0ZWQxYTVcIiwgXCIjZDhiYjdkXCIsIFwiI2E1NDUwOVwiLCBcIiM2YTkyNzZcIiwgXCIjYTQ3NzdhXCIsIFwiI2ZjMTJjOVwiLFxuICAgIFwiIzYwNmYxNVwiLCBcIiMzY2M0ZDlcIiwgXCIjZjMxYzRlXCIsIFwiIzczNjE2ZlwiLCBcIiNmMDk3YzZcIiwgXCIjZmM4NzcyXCIsIFwiIzkyYTZmZVwiLCBcIiM4NzViNDRcIixcbiAgICBcIiM2OTlhYjNcIiwgXCIjOTRiYzE5XCIsIFwiIzdkNWJmMFwiLCBcIiNkMjRkZmVcIiwgXCIjYzg1Yjc0XCIsIFwiIzY4ZmY1N1wiLCBcIiNiNjIzNDdcIiwgXCIjOTk0YjkxXCIsXG4gICAgXCIjNjQ2YjhjXCIsIFwiIzk3N2FiNFwiLCBcIiNkNjk0ZmRcIiwgXCIjYzRkNWI1XCIsIFwiI2ZkYzRiZFwiLCBcIiMxY2FlMDVcIiwgXCIjN2JkOTcyXCIsIFwiI2U5NzAwYVwiLFxuICAgIFwiI2QwOGY1ZFwiLCBcIiM4YmI5ZTFcIiwgXCIjZmRlOTQ1XCIsIFwiI2EyOWQ5OFwiLCBcIiMxNjgyZmJcIiwgXCIjOWFkOWUwXCIsIFwiI2Q2Y2FmZVwiLCBcIiM4ZDgzMjhcIixcbiAgICBcIiNiMDkxYTdcIiwgXCIjNjQ3NTc5XCIsIFwiIzFmOGQxMVwiLCBcIiNlN2VhZmRcIiwgXCIjYjk2NjBiXCIsIFwiI2E0YTY0NFwiLCBcIiNmZWMyNGNcIiwgXCIjYjExNjhjXCIsXG4gICAgXCIjMTg4Y2MxXCIsIFwiIzdhYjI5N1wiLCBcIiM0NDY4YWVcIiwgXCIjYzk0OWE2XCIsIFwiI2Q0ODI5NVwiLCBcIiNlYjZkYzJcIiwgXCIjZDViMGNiXCIsIFwiI2ZmOWZmYlwiLFxuICAgIFwiI2ZkYjA4MlwiLCBcIiNhZjRkNDRcIiwgXCIjYTc1OWM0XCIsIFwiI2E5ZTAzYVwiLCBcIiMwZDkwNmJcIiwgXCIjOWVlM2JkXCIsIFwiIzViODg0NlwiLCBcIiMwZDg5OTVcIixcbiAgICBcIiNmMjVjNThcIiwgXCIjNzBhZTRmXCIsIFwiIzg0N2Y3NFwiLCBcIiM5MDk0YmJcIiwgXCIjZmZlMmYxXCIsIFwiI2E2NzE0OVwiLCBcIiM5MzZjOGVcIiwgXCIjZDA0OTA3XCIsXG4gICAgXCIjYzNiOGE2XCIsIFwiI2NlZjhjNFwiLCBcIiM3YTkyOTNcIiwgXCIjZmRhMmFiXCIsIFwiIzJlZjZjNVwiLCBcIiM4MDcyNDJcIiwgXCIjY2I5NGNjXCIsIFwiI2I2YmRkMFwiLFxuICAgIFwiI2I1Yzc1ZFwiLCBcIiNmZGUxODlcIiwgXCIjYjdmZjgwXCIsIFwiI2ZhMmQ4ZVwiLCBcIiM4MzlhNWZcIiwgXCIjMjhjMmI1XCIsIFwiI2U1ZTllMVwiLCBcIiNiYzc5ZDhcIixcbiAgICBcIiM3ZWQ4ZmVcIiwgXCIjOWYyMGMzXCIsIFwiIzRmN2E1YlwiLCBcIiNmNTExZmRcIiwgXCIjMDljOTU5XCIsIFwiI2JjZDBjZVwiLCBcIiM4Njg1ZmRcIiwgXCIjOThmY2ZmXCIsXG4gICAgXCIjYWZiZmY5XCIsIFwiIzZkNjliNFwiLCBcIiM1Zjk5ZmRcIiwgXCIjYWFhODdlXCIsIFwiI2I1OWRmYlwiLCBcIiM1ZDgwOWRcIiwgXCIjZDlhNzQyXCIsIFwiI2FjNWM4NlwiLFxuICAgIFwiIzk0NjhkNVwiLCBcIiNhNGEyYjJcIiwgXCIjYjEzNzZlXCIsIFwiI2Q0M2YzZFwiLCBcIiMwNWE5ZDFcIiwgXCIjYzM4Mzc1XCIsIFwiIzI0YjU4ZVwiLCBcIiM2ZWFiYWZcIixcbiAgICBcIiM2NmJmN2ZcIiwgXCIjOTJjYmJiXCIsIFwiI2RkYjFlZVwiLCBcIiMxYmU4OTVcIiwgXCIjYzdlY2Y5XCIsIFwiI2E2YmFhNlwiLCBcIiM4MDQ1Y2RcIiwgXCIjNWY3MGYxXCIsXG4gICAgXCIjYTlkNzk2XCIsIFwiI2NlNjJjYlwiLCBcIiMwZTk1NGRcIiwgXCIjYTk3ZDJmXCIsIFwiI2ZjYjhkM1wiLCBcIiM5YmZlZTNcIiwgXCIjNGU4ZDg0XCIsIFwiI2ZjNmQzZlwiLFxuICAgIFwiIzdiOWZkNFwiLCBcIiM4YzYxNjVcIiwgXCIjNzI4MDVlXCIsIFwiI2Q1Mzc2MlwiLCBcIiNmMDBhMWJcIiwgXCIjZGU1Yzk3XCIsIFwiIzhlYTI4YlwiLCBcIiNmY2NkOTVcIixcbiAgICBcIiNiYTljNTdcIiwgXCIjYjc5YTgyXCIsIFwiIzdjNWE4MlwiLCBcIiM3ZDdjYTRcIiwgXCIjOTU4YWQ2XCIsIFwiI2NkODEyNlwiLCBcIiNiZGIwYjdcIiwgXCIjMTBlMGY4XCIsXG4gICAgXCIjZGNjYzY5XCIsIFwiI2Q2ZGUwZlwiLCBcIiM2MTZkM2RcIiwgXCIjOTg1YTI1XCIsIFwiIzMwYzdmZFwiLCBcIiMwYWViNjVcIiwgXCIjZTNjZGI0XCIsIFwiI2JkMWJlZVwiLFxuICAgIFwiI2FkNjY1ZFwiLCBcIiNkNzcwNzBcIiwgXCIjOGVhNWI4XCIsIFwiIzViNWFkMFwiLCBcIiM3NjY1NWVcIiwgXCIjNTk4MTAwXCIsIFwiIzg2NzU3ZVwiLCBcIiM1ZWEwNjhcIixcbl0iLCIvKipcbiAqIEFUVEVOVElPTiBSRVNQT05TRVMgRlJPTSBCQUNLRU5EXG4gKlxuICogQ29udGFpbiB0aGUgYXR0ZW50aW9ucyBhbmQgZW1iZWRkaW5ncyBmb3IgYWxsIGNvbWJpbmF0aW9ucyBvZiByZXR1cm5zIGZyb20gdGhlIGJhY2tlbmRcbiAqL1xuXG5leHBvcnQgdHlwZSBNb2RlbEluZm8gPSB7XG4gICAgbmxheWVyczogbnVtYmVyXG4gICAgbmhlYWRzOiBudW1iZXJcbn1cblxudHlwZSBBYnN0cmFjdEF0dGVudGlvblJlc3BvbnNlPFQ+ID0ge1xuICAgIGFhOiBUXG59XG5cbmV4cG9ydCB0eXBlIEF0dGVudGlvblJlc3BvbnNlID0gQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxBdHRlbnRpb25NZXRhUmVzdWx0PlxuXG4vKipcbiAqIEFUVEVOVElPTiBSRVNVTFRTIEZST00gQkFDS0VORFxuICpcbiAqIFRoZXNlIGFyZSB0aGUgcmVzdWx0cyB0aGF0IGFyZSBlbmNhc2VkIGluIHRoZSAnYWEnIGFuZCAnYWInIGtleXMgcmV0dXJuZWRcbiAqL1xuXG5leHBvcnQgdHlwZSBGdWxsU2luZ2xlVG9rZW5JbmZvID0ge1xuICAgIHRleHQ6IHN0cmluZyxcbiAgICBlbWJlZGRpbmdzOiBudW1iZXJbXSxcbiAgICBjb250ZXh0czogbnVtYmVyW10sXG4gICAgYnBlX3Rva2VuOiBzdHJpbmcsXG4gICAgYnBlX3Bvczogc3RyaW5nLFxuICAgIGJwZV9kZXA6IHN0cmluZyxcbiAgICBicGVfaXNfZW50OiBib29sZWFuLFxufVxuXG5cbnR5cGUgQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8VD4gPSB7XG4gICAgYXR0OiBudW1iZXJbXVtdW10sXG4gICAgbGVmdDogVCxcbiAgICByaWdodDogVCxcbn1cblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uTWV0YVJlc3VsdCA9IEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PEZ1bGxTaW5nbGVUb2tlbkluZm9bXT5cblxuLyoqXG4gKiBTRUFSQ0ggUkVTVUxUIFRZUEVTXG4gKi9cblxuaW50ZXJmYWNlIE1hdGNoZWRUb2tBdHQge1xuICAgIGF0dDogbnVtYmVyW11cbiAgICBvZmZzZXRfdG9fbWF4OiBudW1iZXJcbiAgICBsb2Nfb2ZfbWF4OiBudW1iZXJcbn1cblxuXG5pbnRlcmZhY2UgTWF0Y2hlZEF0dGVudGlvbnMge1xuICAgIGluOiBNYXRjaGVkVG9rQXR0LFxuICAgIG91dDogTWF0Y2hlZFRva0F0dCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGYWlzc1NlYXJjaFJlc3VsdHMge1xuICAgIHNlbnRlbmNlOiBzdHJpbmdcbiAgICBpbmRleDogbnVtYmVyXG4gICAgbWF0Y2g6IHN0cmluZ1xuICAgIG1hdGNoZWRfYXR0OiBNYXRjaGVkQXR0ZW50aW9uc1xuICAgIHRva2VuczogVG9rZW5GYWlzc01hdGNoW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkZhaXNzTWF0Y2gge1xuICAgIHRva2VuOiBzdHJpbmdcbiAgICBwb3M6IHN0cmluZ1xuICAgIGRlcDogc3RyaW5nXG4gICAgaXNfZW50OiBzdHJpbmdcbiAgICBpc19tYXRjaDogYm9vbGVhblxuICAgIGlud2FyZDogbnVtYmVyW11cbiAgICBvdXR3YXJkOiBudW1iZXJbXVxufVxuXG4vKipcbiAqIEVWRU5UIFRZUEVTXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FdmVudCB7XG4gICAgc2lkZTogU2lkZU9wdGlvbnMsXG4gICAgaW5kOiBudW1iZXIgfCBcIm51bGxcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkVtYmVkZGluZ0V2ZW50IGV4dGVuZHMgVG9rZW5FdmVudCB7XG4gICAgZW1iZWRkaW5nczogbnVtYmVyW11cbn1cblxuZXhwb3J0IHR5cGUgSGVhZEJveEV2ZW50ID0ge1xuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyLFxuICAgIGhlYWQ6IG51bWJlcixcbn1cblxuLyoqXG4gKiBNSVNDRUxMQU5FT1VTIFRZUEVTXG4gKi9cblxuZXhwb3J0IHR5cGUgU2VudGVuY2VPcHRpb25zID0gXCJhYlwiIHwgXCJiYVwiIHwgXCJhYVwiIHwgXCJiYlwiIHwgXCJhbGxcIjtcbmV4cG9ydCB0eXBlIFNpZGVPcHRpb25zID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCJcbmV4cG9ydCB0eXBlIFNpbXBsZU1ldGEgPSBcInBvc1wiIHwgXCJkZXBcIiB8IFwiaXNfZW50XCJcbmV4cG9ydCB0eXBlIFRva2VuT3B0aW9ucyA9IFwiYVwiIHwgXCJiXCIgfCBcImFsbFwiXG5cbmV4cG9ydCBlbnVtIFRvZ2dsZWQge1xuICAgIEFEREVEID0gMCxcbiAgICBSRU1PVkVELFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0TWV0YU9wdGlvbnMge1xuICAgIHBvczogc3RyaW5nW10sXG4gICAgZGVwOiBzdHJpbmdbXSxcbiAgICBpc19lbnQ6IGFueSxcbiAgICBlbnRzOiBzdHJpbmdbXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhT3B0aW9ucyBleHRlbmRzIEFic3RyYWN0TWV0YU9wdGlvbnMge1xuICAgIGlzX2VudDogYm9vbGVhbltdLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWV0YU9wdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBpc19lbnQ6IHN0cmluZ1tdIC8vIFJlcHJlc2VudGluZyBoZXggY29sb3JzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JNZXRhU2NhbGUge1xuICAgIHBvczogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGRlcDogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGlzX2VudDogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIGVudHM6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBvZmZzZXQ/OiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyAgXG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ2luaXRpYWwnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xuICB9XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24odGFnTmFtZSkgeyAgXG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gIFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn0iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG4vKipcbiAqIE1hcCBhIGxpc3QgYXMgdmFsdWVzIHRvIGFuIG9iamVjdCB3aG9zZSBrZXlzIGFyZSB0aGUgb3JpZ2luYWwgbGlzdFxuICovXG4vLyAoU3RyaW5nIC0+IGIpICAtPiBbU3RyaW5nXSAtPiB7U3RyaW5nOiBifVxuZXhwb3J0IGNvbnN0IG9iakZyb21LZXlzID0gUi5jdXJyeSgoZm4sIGtleXMpID0+IFIuemlwT2JqKGtleXMsIFIubWFwKGZuLCBrZXlzKSkpIFxuXG5leHBvcnQgY29uc3QgYXNzaWduWmVybzogKHg6YW55KSA9PiBudW1iZXIgPSB4ID0+IDA7XG5cbi8qKlxuICogR2l2ZW4gYW4gbGlzdCwgY3JlYXRlIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFsbCAwXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0WmVybyA9IG9iakZyb21LZXlzKGFzc2lnblplcm8pIiwiaW1wb3J0IHsgTWFpbkdyYXBoaWMgfSBmcm9tICcuL3Zpcy9teU1haW4nXG5pbXBvcnQgeyBBUEksIGVtcHR5VG9rZW5EaXNwbGF5IH0gZnJvbSAnLi9hcGkvbWFpbkFwaSdcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgVG9rZW5XcmFwcGVyIH0gZnJvbSAnLi9kYXRhL1Rva2VuV3JhcHBlcidcbi8vIGltcG9ydCB7IFRlc3RlciB9IGZyb20gXCIuLi90cy90ZXN0XCJcblxuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9ZXhCRVJULmh0bWwhLi4vZXhCRVJULmh0bWxcIjtcbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi4vaW5kZXguaHRtbFwiO1xuaW1wb3J0IFwiLi4vY3NzL21haW4uc2Nzc1wiXG5cblxuZnVuY3Rpb24gZG9NeVN2ZygpIHtcbiAgICByZXR1cm4gbmV3IE1haW5HcmFwaGljKClcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzdGF0aWMgZmlsZXMgbmVlZGVkIGZvciB0aGUgZGVtby4gU2F2ZSB0aGUga2V5cyBhbmQgZmlsZSBwYXRocyB0byBhIGpzb24gb2JqZWN0IHRoYXQgaXMgdGhlbiB3cml0dGVuIHRvIGEgZmlsZVxuICpcbiAqIFRoaXMgd2lsbCBwcmludCB0aGUgb2JqZWN0IGFmdGVyIGV2ZXJ5IGNhbGwuIFdoZW4gdGhlIGtleSBsZW5ndGggaXMgdGhlIGV4cGVjdGVkIGxlbmd0aCwgcmlnaHQgY2xpY2sgaW4gY2hyb21lIGFuZCBzZWxlY3QgXCJzYXZlIGFzIGdsb2JhbCB2YXJpYWJsZVwiXG4gKlxuICogVGhlbiwgaW4gdGhlIGNvbnNvbGUsIHR5cGUgXCJjb3B5KHRlbXAxKVwiLiBVc2Ugc3VibGltZSB0ZXh0IChpdCBpcyB0aGUgYmVzdCBmb3IgaGFuZGxpbmcgbGFyZ2UgZmlsZXMpIHRvIHBhc3RlIHRoaXMgaW50byB0aGUgY29kZSBhbmQgc2F2ZSBpdCBhcyBfX19fLmpzb25cbiAqXG4gKiBAcGFyYW0gc2VudGVuY2UgLSBUaGUgc2VudGVuY2UgdG8gYW5hbHl6ZVxuICogQHBhcmFtIG1hc2tJbmQgLSBXaGljaCBpbmRleCB0byBtYXNrIGluIHRoZSBzZW50ZW5jZS4gQXRtLCBjYW4gb25seSByZWNvcmQgb25lIG1hc2tpbmdcbiAqIEBwYXJhbSBvdXREaWN0UGF0aCAtIFdoZXJlIHRvIHNhdmUgdGhlIG9iamVjdCBvZiBoYXNoa2V5OiBmaWxlcGF0aFxuICovXG5mdW5jdGlvbiBjcmVhdGVEZW1vcyhzZW50ZW5jZSwgbWFza0luZDogbnVtYmVyLCBtb2RlbE5hbWU6IHN0cmluZywgY29ycHVzTmFtZTogc3RyaW5nLCBvdXREaWN0UGF0aCkge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoKVxuICAgIGNvbnN0IGxheWVycyA9IF8ucmFuZ2UoMTIpXG5cbiAgICBjb25zdCBMID0gMFxuXG4gICAgY29uc3QgY29udGVudEhhc2ggPSB7fSAgICAgICAgICAvLyBNYXAgaGFzaCAtPiBjb250ZW50c1xuXG4gICAgLy8gR2V0IHRoZSBiYXNlIHJldHVybiBmb3IgYWxsIHBhZ2UgaW5pdGlhbGl6YXRpb25zXG4gICAgXy5yYW5nZSgxMikuZm9yRWFjaChMID0+IHtcbiAgICAgICAgYXBpLmdldE1ldGFBdHRlbnRpb25zKG1vZGVsTmFtZSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwKTtcblxuICAgICAgICAgICAgLy8gVW5tYXNrZWQgcmVzcG9uc2U6XG4gICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIxID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNYXNrZWQgd29yZCBhbmQgc2VhcmNoaW5nIHJlc3BvbnNlczpcbiAgICAgICAgICAgICAgICB0b2tDYXBzdWxlLmEubWFzayhtYXNrSW5kKVxuICAgICAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgZW1iZWRkaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYmVkZGluZyA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uZW1iZWRkaW5nc1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBlbWJlZGRpbmcsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RDb250ZXh0cyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGNvbnRleHQsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhjb250ZW50SGFzaCkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRIYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFxuICogT2JzZXJ2ZSBob3cgdGhlIGRlbW8gY3JlYXRpb24gcHJvY2VzcyB3b3Jrcy5cbiAqIFxuICogSWYgZGVzaXJlZCB0byBtYXNrIG11bHRpcGxlIHdvcmRzIGluIHRoZSBpbnB1dCBmb3IgZGVtbyBwdXJwb3NlcywgdHJ5IGxvb3Bpbmcgb3ZlciB0aGUgbWFzayBpbmRzIGFuZCBtYXNraW5nIGVhY2ggb25lIGluZGl2aWR1YWxseVxuICogXG4gKiBAcGFyYW0gc2VudGVuY2UgVGhlIGRlbW8gc2VudGVuY2VcbiAqIEBwYXJhbSBtYXNrSW5kIERlc2lyZWQgaW5kZXggdG8gbWFzayAoY2FuIGN1cnJlbnRseSBvbmx5IGFjY2VwdCBhIHNpbmdsZSBtYXNrIGluZGV4KVxuICogQHBhcmFtIG91dERpY3RQYXRoIFxuICovXG5mdW5jdGlvbiBpbnNwZWN0RGVtb3Moc2VudGVuY2UsIG1hc2tJbmQ6IG51bWJlciwgbW9kZWxOYW1lOiBzdHJpbmcsIGNvcnB1c05hbWU6IHN0cmluZywgb3V0RGljdFBhdGgpIHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKClcblxuICAgIGNvbnN0IGNvbnRlbnRIYXNoID0ge31cblxuICAgIC8vIEdldCB0aGUgYmFzZSByZXR1cm4gZm9yIGFsbCBwYWdlIGluaXRpYWxpemF0aW9uc1xuICAgIF8ucmFuZ2UoMSkuZm9yRWFjaChMID0+IHtcbiAgICAgICAgYXBpLmdldE1ldGFBdHRlbnRpb25zKG1vZGVsTmFtZSwgc2VudGVuY2UsIEwsIFwiXCIpLnRoZW4ocjAgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIocjApO1xuXG4gICAgICAgICAgICAvLyBVbm1hc2tlZCByZXNwb25zZTpcbiAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgZW1wdHlUb2tlbkRpc3BsYXkpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSkudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTApLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVwbFRlc3QoKSB7XG4gICAgLy8gVGVzdGVyLnRlc3RBdHRXcmFwcGVyQ29uc3RydWN0b3IoKVxuICAgIC8vIFRlc3Rlci50ZXN0VXBkYXRlTWFza2VkQXR0ZW50aW9uKClcbiAgICAvLyBUZXN0ZXIudGVzdE5qQXJheSgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmFuZG9tQXJyYXlDcmVhdGlvbigpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NXcmFwcGVyKCk7XG4gICAgLy8gVGVzdGVyLnRlc3REM09yZGluYWwoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEZhaXNzU2VhcmNoUmVzdWx0c0hpc3QoKTtcbiAgICAvLyBUZXN0ZXIudGVzdFJlYWRpbmdKU09OKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZG9NeVN2ZygpO1xuICAgIC8vIHJlcGxUZXN0KCk7XG4gICAgLy8gY3JlYXRlRGVtb3MoXCJDaGlja2VuIHRhc3RlcyBhYnNvbHV0ZWx5IGRlbGljaW91cyBpZiB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZ1wiLCA0LCBcIlwiKVxuICAgIGNvbnNvbGUubG9nKFwiRG9uZSBsb2FkaW5nIHdpbmRvd1wiKTtcbn1cbiIsImltcG9ydCAqIGFzIHRwIGZyb20gXCIuL2V0Yy90eXBlc1wiXG5pbXBvcnQgKiBhcyB4XyBmcm9tIFwiLi9ldGMvX1Rvb2xzXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gXCIuL2V0Yy9VUkxIYW5kbGVyXCI7XG5cbmNvbnN0IGZhbHNleSA9IHZhbCA9PiAobmV3IFNldChbJ2ZhbHNlJywgMCwgXCJub1wiLCBmYWxzZSwgbnVsbCwgXCJcIl0pKS5oYXModmFsKVxuY29uc3QgdHJ1dGh5ID0gdmFsID0+ICFmYWxzZXkodmFsKVxuY29uc3QgdG9OdW1iZXIgPSB4ID0+ICt4O1xuXG5cbnR5cGUgSW5zcGVjdG9yT3B0aW9ucyA9IFwiY29udGV4dFwiIHwgXCJlbWJlZGRpbmdzXCIgfCBudWxsXG5cbi8vIE11c3QgYmUgb3B0aW9uYWwgcGFyYW1zIGZvciBpbml0aWFsaXphdGlvbnNcbmludGVyZmFjZSBVUkxQYXJhbWV0ZXJzIHtcbiAgICBzZW50ZW5jZT86IHN0cmluZ1xuICAgIG1vZGVsPzogc3RyaW5nXG4gICAgY29ycHVzPzogc3RyaW5nXG4gICAgbGF5ZXI/OiBudW1iZXJcbiAgICBoZWFkcz86IG51bWJlcltdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgdG9rZW5JbmQ/OiBudW1iZXJ8ICdudWxsJ1xuICAgIHRva2VuU2lkZT86IHRwLlNpZGVPcHRpb25zXG4gICAgbWV0YU1hdGNoPzogdHAuU2ltcGxlTWV0YSB8IG51bGxcbiAgICBtZXRhTWF4PzogdHAuU2ltcGxlTWV0YSB8IG51bGxcbiAgICBkaXNwbGF5SW5zcGVjdG9yPzogSW5zcGVjdG9yT3B0aW9uc1xuICAgIG9mZnNldElkeHM/OiBudW1iZXJbXVxuICAgIG1hc2tJbmRzPzogbnVtYmVyW11cbiAgICBoaWRlQ2xzU2VwPzogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgVUlDb25maWcge1xuXG4gICAgcHJpdmF0ZSBfY29uZjogVVJMUGFyYW1ldGVycyA9IHt9XG4gICAgcHJpdmF0ZSBfaGVhZFNldDogU2V0PG51bWJlcj47XG4gICAgYXR0VHlwZTogdHAuU2VudGVuY2VPcHRpb25zO1xuICAgIF9uSGVhZHM6IG51bWJlciB8IG51bGw7XG4gICAgX25MYXllcnM6IG51bWJlciB8IG51bGw7XG4gICAgcHJpdmF0ZSBfdG9rZW46IHRwLlRva2VuRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9uSGVhZHMgPSAxMjsgLy8gSG93IGRvIEkgYXV0b21hdGUgdGhpcz9cbiAgICAgICAgdGhpcy5fbkxheWVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuYXR0VHlwZSA9ICdhYSc7IC8vIERvbid0IGFsbG93IHRoaXMgdG8gYmUgbW9kaWZpZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgIHRoaXMuZnJvbVVSTCgpXG4gICAgICAgIHRoaXMudG9VUkwoZmFsc2UpXG4gICAgfVxuXG5cbiAgICBmcm9tVVJMKCkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnNcblxuICAgICAgICB0aGlzLl9jb25mID0ge1xuICAgICAgICAgICAgbW9kZWw6IHBhcmFtc1snbW9kZWwnXSB8fCAnYmVydC1iYXNlLWNhc2VkJyxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBwYXJhbXNbJ3NlbnRlbmNlJ10gfHwgXCJUaGUgZ2lybCByYW4gdG8gYSBsb2NhbCBwdWIgdG8gZXNjYXBlIHRoZSBkaW4gb2YgaGVyIGNpdHkuXCIsXG4gICAgICAgICAgICBjb3JwdXM6IHBhcmFtc1snY29ycHVzJ10gfHwgJ3dveicsXG4gICAgICAgICAgICBsYXllcjogcGFyYW1zWydsYXllciddIHx8IDEsXG4gICAgICAgICAgICBoZWFkczogdGhpcy5faW5pdEhlYWRzKHBhcmFtc1snaGVhZHMnXSksXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHBhcmFtc1sndGhyZXNob2xkJ10gfHwgMC43LFxuICAgICAgICAgICAgdG9rZW5JbmQ6IHBhcmFtc1sndG9rZW5JbmQnXSB8fCBudWxsLFxuICAgICAgICAgICAgdG9rZW5TaWRlOiBwYXJhbXNbJ3Rva2VuU2lkZSddIHx8IG51bGwsXG4gICAgICAgICAgICBtYXNrSW5kczogcGFyYW1zWydtYXNrSW5kcyddIHx8IFs5XSxcbiAgICAgICAgICAgIG1ldGFNYXRjaDogcGFyYW1zWydtZXRhTWF0Y2gnXSB8fCBcInBvc1wiLFxuICAgICAgICAgICAgbWV0YU1heDogcGFyYW1zWydtZXRhTWF4J10gfHwgXCJwb3NcIixcbiAgICAgICAgICAgIGRpc3BsYXlJbnNwZWN0b3I6IHBhcmFtc1snZGlzcGxheUluc3BlY3RvciddIHx8IG51bGwsXG4gICAgICAgICAgICBvZmZzZXRJZHhzOiB0aGlzLl9pbml0T2Zmc2V0SWR4cyhwYXJhbXNbJ29mZnNldElkeHMnXSksXG4gICAgICAgICAgICBoaWRlQ2xzU2VwOiB0cnV0aHkocGFyYW1zWydoaWRlQ2xzU2VwJ10pIHx8IHRydWUsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b2tlbiA9IHtzaWRlOiB0aGlzLl9jb25mLnRva2VuU2lkZSwgaW5kOiB0aGlzLl9jb25mLnRva2VuSW5kfVxuXG4gICAgfVxuXG4gICAgdG9VUkwodXBkYXRlSGlzdG9yeT1mYWxzZSkge1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybCh0aGlzLl9jb25mLCB1cGRhdGVIaXN0b3J5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRPZmZzZXRJZHhzKHY6KHN0cmluZyB8IG51bWJlcilbXSB8IG51bGwpIHtcbiAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFstMSwgMCwgMV1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlckFyciA9IFIubWFwKHRvTnVtYmVyLCB2KTtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJBcnI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0SGVhZHModjpudW1iZXJbXSB8IG51bGwpIHtcbiAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB2Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5oZWFkU2V0KG5ldyBTZXQodikpLl9jb25mLmhlYWRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRzKClcbiAgICB9XG5cbiAgICBuSGVhZHMoKTogbnVtYmVyXG4gICAgbkhlYWRzKHZhbDpudW1iZXIpOiB0aGlzXG4gICAgbkhlYWRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkhlYWRzXG4gICAgICAgIHRoaXMuX25IZWFkcyA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG5MYXllcnMoKTogbnVtYmVyXG4gICAgbkxheWVycyh2YWw6bnVtYmVyKTogdGhpc1xuICAgIG5MYXllcnModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uTGF5ZXJzXG4gICAgICAgIHRoaXMuX25MYXllcnMgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3RBbGxIZWFkcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vSGVhZHMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KF8ucmFuZ2UoMCwgdGhpcy5fbkhlYWRzKSkpXG4gICAgfVxuXG4gICAgc2VsZWN0Tm9IZWFkcygpIHtcbiAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQoW10pKVxuICAgIH1cblxuICAgIHRvZ2dsZUhlYWQoaGVhZDpudW1iZXIpOnRwLlRvZ2dsZWQge1xuICAgICAgICBsZXQgb3V0O1xuICAgICAgICBpZiAodGhpcy5oZWFkU2V0KCkuaGFzKGhlYWQpKXtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmRlbGV0ZShoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuUkVNT1ZFRFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkU2V0KCkuYWRkKGhlYWQpO1xuICAgICAgICAgICAgb3V0ID0gdHAuVG9nZ2xlZC5BRERFRFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRocm91Z2ggc2V0dGVyIGZ1bmN0aW9uIHRvIGVuc3VyZSB1cmwgaXMgdXBkYXRlZFxuICAgICAgICB0aGlzLmhlYWRTZXQodGhpcy5oZWFkU2V0KCkpOyAvLyBJIGhhdGUgbXV0YWJsZSBkYXRhc3RydWN0dXJlcy4uLiBUaGlzIGlzIGNvbmZ1c2luZy5cblxuICAgICAgICByZXR1cm4gb3V0XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9rZW4oZTp0cC5Ub2tlbkV2ZW50KTp0aGlzIHtcbiAgICAgICAgY29uc3QgcGlja2VyID0gUi5waWNrKFsnaW5kJywgJ3NpZGUnXSlcbiAgICAgICAgY29uc3QgY29tcGFyZUV2ZW50ID0gcGlja2VyKGUpXG4gICAgICAgIGNvbnN0IGNvbXBhcmVUb2tlbiA9IHBpY2tlcih0aGlzLnRva2VuKCkpXG5cbiAgICAgICAgaWYgKFIuZXF1YWxzKGNvbXBhcmVUb2tlbixjb21wYXJlRXZlbnQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFTU9WSU5HIFRPS0VOXCIpO1xuICAgICAgICAgICAgdGhpcy5ybVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuKGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRva2VuKCk6IHRwLlRva2VuRXZlbnQ7XG4gICAgdG9rZW4odmFsOnRwLlRva2VuRXZlbnQpOiB0aGlzO1xuICAgIHRva2VuKHZhbD86dHAuVG9rZW5FdmVudCkge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5cblxuICAgICAgICB0aGlzLl90b2tlbiA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi50b2tlbkluZCA9IHZhbC5pbmQ7XG4gICAgICAgIHRoaXMuX2NvbmYudG9rZW5TaWRlID0gdmFsLnNpZGU7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJtVG9rZW4oKSB7XG4gICAgICAgIHRoaXMudG9rZW4oe2luZDpudWxsLCBzaWRlOm51bGx9KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZW50ZW5jZSgpOiBzdHJpbmc7XG4gICAgc2VudGVuY2UodmFsOnN0cmluZyk6IHRoaXM7XG4gICAgc2VudGVuY2UodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5zZW50ZW5jZVxuXG4gICAgICAgIHRoaXMuX2NvbmYuc2VudGVuY2UgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCh0cnVlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRocmVzaG9sZCgpOiBudW1iZXI7XG4gICAgdGhyZXNob2xkKHZhbDogbnVtYmVyKTogdGhpcztcbiAgICB0aHJlc2hvbGQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLnRocmVzaG9sZDtcblxuICAgICAgICB0aGlzLl9jb25mLnRocmVzaG9sZCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkcygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25mLmhlYWRzXG4gICAgfVxuXG4gICAgbGF5ZXIoKTogbnVtYmVyXG4gICAgbGF5ZXIodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbGF5ZXIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5sYXllclxuXG4gICAgICAgIHRoaXMuX2NvbmYubGF5ZXIgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoZWFkU2V0KCk6IFNldDxudW1iZXI+O1xuICAgIGhlYWRTZXQodmFsOiBTZXQ8bnVtYmVyPik6IHRoaXM7XG4gICAgaGVhZFNldCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRTZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oZWFkU2V0ID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLmhlYWRzID0geF8uc2V0MlNvcnRlZEFycmF5KHRoaXMuX2hlYWRTZXQpXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtZXRhTWF0Y2goKTogdHAuU2ltcGxlTWV0YTtcbiAgICBtZXRhTWF0Y2godmFsOiB0cC5TaW1wbGVNZXRhKTogdGhpcztcbiAgICBtZXRhTWF0Y2godmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXg7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tZXRhTWF4ID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ldGFNYXgoKTogdHAuU2ltcGxlTWV0YTtcbiAgICBtZXRhTWF4KHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1heCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWV0YU1hdGNoO1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1hdGNoID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1hc2tJbmRzKCk6IG51bWJlcltdO1xuICAgIG1hc2tJbmRzKHZhbDogbnVtYmVyW10pOiB0aGlzO1xuICAgIG1hc2tJbmRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tYXNrSW5kcztcblxuICAgICAgICB0aGlzLl9jb25mLm1hc2tJbmRzID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BsYXlJbnNwZWN0b3IoKTogSW5zcGVjdG9yT3B0aW9ucztcbiAgICBkaXNwbGF5SW5zcGVjdG9yKHZhbDogSW5zcGVjdG9yT3B0aW9ucyk6IHRoaXM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuZGlzcGxheUluc3BlY3RvcjtcblxuICAgICAgICB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3IgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb2Zmc2V0SWR4cygpOiBudW1iZXJbXTtcbiAgICBvZmZzZXRJZHhzKHZhbDogbnVtYmVyW10pOiB0aGlzO1xuICAgIG9mZnNldElkeHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm9mZnNldElkeHM7XG5cbiAgICAgICAgLy8gY29udmVydCB0byBudW1iZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZi5vZmZzZXRJZHhzID0gUi5tYXAodG9OdW1iZXIsIHZhbCk7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZUNsc1NlcCgpOiBib29sZWFuO1xuICAgIGhpZGVDbHNTZXAodmFsOiBib29sZWFuKTogdGhpcztcbiAgICBoaWRlQ2xzU2VwKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5oaWRlQ2xzU2VwO1xuXG4gICAgICAgIHRoaXMuX2NvbmYuaGlkZUNsc1NlcCA9IHRydXRoeSh2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1vZGVsKCk6IHN0cmluZztcbiAgICBtb2RlbCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWwodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsXG4gICAgICAgIHRoaXMuX2NvbmYubW9kZWwgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGNvcnB1cygpOiBzdHJpbmc7XG4gICAgY29ycHVzKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBjb3JwdXModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmNvcnB1c1xuICAgICAgICB0aGlzLl9jb25mLmNvcnB1cyA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7RDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHtFZGdlLCBFZGdlRGF0YX0gZnJvbSBcIi4vRWRnZUNvbm5lY3RvclwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHtzY2FsZUxpbmVhcldpZHRofSBmcm9tIFwiLi9Gb3JtYXRVdGlsc1wiXG5cbmV4cG9ydCB0eXBlIEF0dGVudGlvbkRhdGEgPSBudW1iZXJbXVtdXG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25HcmFwaCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uRGF0YT57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uRGF0YTsgLy8gVGhlIHBhc3NlZCBkYXRhXG4gICAgZWRnZURhdGE6IEVkZ2VEYXRhOyAvLyBBIHdyYXBwZXIgYXJvdW5kIF9kYXRhLiBVc2VyIHNob3VsZCBub3QgbWluZFxuICAgIHBsb3REYXRhOiBFZGdlW107IC8vIE5lZWRlZCBmb3IgcGxvdHRpbmdcblxuICAgIC8qKiBDT01QT05FTlRTXG4gICAgICogRXhwb3NlIHRoZSBjb21wb25lbnRzIGJlbG9uZ2luZyB0byB0aGUgY2xhc3MgYXMgcHJvcGVydGllcyBvZiB0aGUgY2xhc3MuIFxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNyZWF0ZSBtZXRob2RzIHRoYXQgc3BlY2lmaWNhbGx5IG1vZGlmeSBhIHNpbmdsZSBwYXJ0IG9yIGNvbXBvbmVudCB3aXRob3V0IGhhdmluZyB0byByZXNlbGVjdCBpdC4gXG4gICAgICogTWFrZXMgZm9yIG1vcmUgcmVzcG9uc2l2ZSBhcHBsaWNhdGlvbnNcbiAgICAgKiAqL1xuICAgIHN2ZzogRDNTZWw7XG4gICAgZ3JhcGg6IEQzU2VsO1xuXG4gICAgLy8gVGhlIGJlbG93IGNvbXBvbmVudHMgcmVxdWlyZSBkYXRhXG4gICAgcGF0aHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZXM6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdO1xuICAgIGxpbmtHZW46IGQzLkxpbms8YW55LCBhbnksIGFueT5cblxuICAgIC8vIE9QVElPTlMgV0lUSCBERUZBVUxUU1xuICAgIF90aHJlc2hvbGQgPSAwLjc7IC8vIEFjY3VtdWxhdGlvbiB0aHJlc2hvbGQuIEJldHdlZW4gMC0xXG4gICAgbm9ybUJ5R3JvdXAgPSBmYWxzZTsgLy8gV2hldGhlciB0byBub3JtYWxpemUgY29ubmVjdGlvbiB3aWR0aCBieSBzcmMtZ3JvdXAgb3Igbm90XG5cbiAgICBzdGF0aWMgZXZlbnRzID0geyB9IC8vIE5vIGV2ZW50cyBuZWVkZWQgZm9yIHRoaXMgb25lXG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LCAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBkaXYgYm94ZXMgYXJvdW5kIHRoZSBTVkcgZWxlbWVudFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmdyYXBoID0gdGhpcy5zdmcuc2VsZWN0QWxsKGAuYXRuLWN1cnZlYCk7XG4gICAgICAgIHRoaXMubGlua0dlbiA9IGQzLmxpbmtIb3Jpem9udGFsKClcbiAgICAgICAgICAgIC54KGQgPT4gZFswXSlcbiAgICAgICAgICAgIC55KGQgPT4gZFsxXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNvbm5lY3Rpb25zIGJldHdlZW4gbG9jYXRpb25zIG9mIHRoZSBTVkcgdXNpbmcgRDMncyBsaW5rR2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25uZWN0aW9ucygpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHJzKHtcbiAgICAgICAgICAgICAgICAnZCc6IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHsgc291cmNlOiBbbnVtYmVyLCBudW1iZXJdLCB0YXJnZXQ6IFtudW1iZXIsIG51bWJlcl0gfSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBbMCwgb3AuYm94aGVpZ2h0ICogKGQuaSArIDAuNSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW29wLndpZHRoLCBvcC5ib3hoZWlnaHQgKiAoZC5qICsgMC41KV0gLy8gKyAyIGFsbG93cyBzbWFsbCBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtHZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYXRuLWN1cnZlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwic3JjLWlkeFwiLCAoZCwgaSkgPT4gZC5pKVxuICAgICAgICAgICAgLmF0dHIoXCJ0YXJnZXQtaWR4XCIsIChkLCBpKSA9PiBkLmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBoZWlnaHQgb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcImhlaWdodFwiLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2lkdGggb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwid2lkdGhcIiwgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgT3BhY2l0eSBvZiB0aGUgbGluZXMgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF0aHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gcGF0aHMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuYXR0cignb3BhY2l0eScsIChkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkLmldKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ3N0cm9rZS13aWR0aCcsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5vcGFjaXR5U2NhbGVzW2QuaV0oZC52KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVMaW5lYXJXaWR0aCh2YWwpIC8vNSAqIHZhbF4wLjMzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXJlbmRlciB0aGUgZ3JhcGggaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRhdGEgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRGF0YSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGggIT0gbnVsbCkge1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmF0bi1jdXJ2ZVwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgdGhpcy5wYXRocyA9IHRoaXMuZ3JhcGhcbiAgICAgICAgICAgICAgICAuZGF0YSh0aGlzLnBsb3REYXRhKVxuICAgICAgICAgICAgICAgIC5qb2luKCdwYXRoJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NhbGUgdGhlIG9wYWNpdHkgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZXMgb2YgdGhlIGRhdGEsIGZyb20gMCB0byBtYXggb2YgY29udGFpbmVkIGRhdGFcbiAgICAgKiBOb3JtYWxpemUgYnkgZWFjaCBzb3VyY2UgdGFyZ2V0LCBvciBhY3Jvc3MgdGhlIHdob2xlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTY2FsZXMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuXG4gICAgICAgIC8vIEdyb3VwIG5vcm1hbGl6YXRpb25cbiAgICAgICAgaWYgKHRoaXMubm9ybUJ5R3JvdXApIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZWRnZURhdGEuZXh0ZW50KDEpO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgodixpKSA9PiB7XG4gICAgICAgICAgICAgICAgKHRoaXMub3BhY2l0eVNjYWxlcyBhcyBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXSkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgdlsxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsMC45XSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXphdGlvbiBhY3Jvc3MgdGhlIHdob2xlXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF4SW4gPSBkMy5tYXgodGhpcy5wbG90RGF0YS5tYXAoKGQpID0+IGQudikpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMucHVzaCggZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBtYXhJbl0pXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgMV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgZGF0YSBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgZGF0YSgpOkF0dGVudGlvbkRhdGFcbiAgICBkYXRhKHZhbHVlOkF0dGVudGlvbkRhdGEpOnRoaXNcbiAgICBkYXRhKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lZGdlRGF0YSA9IG5ldyBFZGdlRGF0YSh2YWx1ZSk7XG4gICAgICAgIHRoaXMucGxvdERhdGEgPSB0aGlzLmVkZ2VEYXRhLmZvcm1hdCh0aGlzLl90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSBoZWlnaHQgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGhlaWdodCgpOm51bWJlclxuICAgIGhlaWdodCh2YWx1ZTpudW1iZXIpOnRoaXNcbiAgICBoZWlnaHQodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSB3aWR0aCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgd2lkdGgoKTpudW1iZXJcbiAgICB3aWR0aCh2YWx1ZTpudW1iZXIpOnRoaXNcbiAgICB3aWR0aCh2YWx1ZT86bnVtYmVyKTp0aGlzfG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgdGhyZXNob2xkIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB0aHJlc2hvbGQoKTpudW1iZXJcbiAgICB0aHJlc2hvbGQodmFsdWU6bnVtYmVyKTp0aGlzXG4gICAgdGhyZXNob2xkKHZhbHVlPyl7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogQXR0ZW50aW9uRGF0YSkge1xuICAgICAgICB0aGlzLnN2Zy5odG1sKCcnKVxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7VkNvbXBvbmVudH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7RDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHtTVkd9IGZyb20gXCIuLi9ldGMvU1ZHcGx1c1wiXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vLyBUaGUgYmVsb3cgdHdvIChpbnRlcmZhY2UgYW5kIGZ1bmN0aW9uKSBjYW4gYmVjb21lIGEgY2xhc3NcbmV4cG9ydCB0eXBlIEF0dGVudGlvbkhlYWRCb3hJID0ge1xuICAgIHJvd3M6IG51bWJlcltdW10sXG4gICAgbGFiZWxzOiBudW1iZXJbXSxcbiAgICBtYXg6IG51bWJlcixcbn1cblxuLyoqXG4gKiBGcm9tIGFuIGF0dGVudGlvbiBtYXRyaXggc2VsZWN0ZWQgYnkgbGF5ZXIsIHNob3cgYSBzdW1tYXJ5IG9mIHRoZSBhdHRlbnRpb25zIGJlbG9uZ2luZyB0byBlYWNoIGhlYWQuXG4gKiBcbiAqIEBwYXJhbSBoZWFkTWF0IFRoZSBtYXRyaXggcmVwcmVzZW50aW5nIGFsbCB0aGUgYXR0ZW50aW9ucyBieSBoZWFkIChsYXllciBhbHJlYWR5IHNlbGVjdGVkKVxuICogQHBhcmFtIGhlYWRMaXN0IFRoZSBoZWFkcyB0aGF0IGFyZSBzZWxlY3RlZFxuICogQHBhcmFtIHNpZGUgSXMgdGhpcyB0aGUgcmlnaHQgb3IgdGhlIGxlZnQgZGlzcGxheT9cbiAqIEByZXR1cm5zIEluZm9ybWF0aW9uIG5lZWRlZCB0byBsYWJlbCB0aGUgaGVhZGJveFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0ZW50aW9uSW5mbyhoZWFkTWF0Om51bWJlcltdW11bXSwgaGVhZExpc3Q6bnVtYmVyW10sIHNpZGU6XCJyaWdodFwifFwibGVmdFwiPVwibGVmdFwiKTpBdHRlbnRpb25IZWFkQm94SSB7XG4gICAgLy8gQ29sbGVjdCBvbmx5IGZyb20gaGVhZGxpc3QsIGF2ZXJhZ2UgZWFjaCBoZWFkLCB0cmFuc3Bvc2UgdG8gZWFzZSBpdGVyYXRpb25cbiAgICBpZiAoaGVhZExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IFtbXV0sXG4gICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGF4aXM6IG51bWJlciA9IHNpZGUgPT0gXCJsZWZ0XCIgPyAyIDogMTtcblxuICAgIC8vIGF2ZXJhZ2UgYWNyb3NzIHRoZSBheGlzIHJlcHJlc2VudGluZyB0aGUgYXR0ZW50aW9ucy5cbiAgICBsZXQgZ2F0aGVyZWRNYXQgPSB0Zi50ZW5zb3IzZChoZWFkTWF0KS5nYXRoZXIoaGVhZExpc3QsIDApLm1lYW4oW2F4aXNdKS50cmFuc3Bvc2UoKTtcblxuICAgIGNvbnN0IHJvd0luZm8gPSA8bnVtYmVyW11bXT5nYXRoZXJlZE1hdC5hcnJheVN5bmMoKTtcblxuICAgIGNvbnN0IG91dDpBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICAgICAgcm93czogcm93SW5mbyxcbiAgICAgICAgbGFiZWxzOiBoZWFkTGlzdCxcbiAgICAgICAgbWF4OiA8bnVtYmVyPmdhdGhlcmVkTWF0Lm1heCgpLmFycmF5U3luYygpLFxuICAgIH1cblxuICAgIHJldHVybiBvdXRcbn1cblxuaW50ZXJmYWNlIEN1cnJlbnRPcHRpb25zIHtcbiAgICAgICAgaGVhZEhlaWdodDogbnVtYmVyXG4gICAgICAgIGhlYWRXaWR0aDogbnVtYmVyXG4gICAgICAgIHhQYWQ6IG51bWJlclxuICAgICAgICB5UGFkOiBudW1iZXJcbiAgICAgICAgYm94V2lkdGg6IG51bWJlclxuICAgICAgICB0b3RhbFdpZHRoOiBudW1iZXJcbiAgICAgICAgdG90YWxIZWlnaHQ6IG51bWJlclxuICAgIH07XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25IZWFkQm94IGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25IZWFkQm94ST57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICByb3dDc3NOYW1lID0gJ2F0dC1oZWFkJztcbiAgICBib3hDc3NOYW1lID0gJ2F0dC1yZWN0JztcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3ZlclwiLFxuICAgICAgICBib3hNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3V0XCIsXG4gICAgICAgIGJveENsaWNrOiBcIkF0dGVudGlvbkhlYWRCb3hfQm94Q2xpY2tcIixcbiAgICB9O1xuXG4gICAgX2RhdGE6IEF0dGVudGlvbkhlYWRCb3hJO1xuXG4gICAgX2N1cnJlbnQ6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+ID0ge31cblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGJveERpbTogMjYsXG4gICAgICAgIHlzY2FsZTogMSwgLy8gQW1vdW50IHRvIHNjYWxlIGJveGhlaWdodCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICB4c2NhbGU6IDAuNSwgLy8gQW1vdW50IHRvIHNjYWxlIGJveHdpZHRoIHRvIGdldCBpbmRpdmlkdWFsIGhlYWRzXG4gICAgICAgIHNpZGU6IFwibGVmdFwiLFxuICAgIH07XG5cbiAgICAvLyBEMyBDb21wb25lbnRzXG4gICAgaGVhZFJvd3M6IEQzU2VsO1xuICAgIGhlYWRDZWxsczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlOiBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLDFdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUN1cnJlbnQoKTpQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuX2N1cnJlbnRcbiAgICAgICAgXG4gICAgICAgIGN1ci5oZWFkSGVpZ2h0ID0gb3AuYm94RGltICogb3AueXNjYWxlO1xuICAgICAgICBjdXIuaGVhZFdpZHRoID0gb3AuYm94RGltICogb3AueHNjYWxlO1xuICAgICAgICBjdXIueFBhZCA9IGN1ci5oZWFkV2lkdGg7XG4gICAgICAgIGN1ci55UGFkID0gKG9wLmJveERpbSAtIGN1ci5oZWFkSGVpZ2h0KSAvIDI7XG4gICAgICAgIGN1ci5ib3hXaWR0aCA9ICh0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aCk7XG4gICAgICAgIGN1ci50b3RhbFdpZHRoID0gKDIgKiBjdXIueFBhZCkgKyBjdXIuYm94V2lkdGg7XG4gICAgICAgIGN1ci50b3RhbEhlaWdodCA9IChvcC5ib3hEaW0gKiB0aGlzLl9kYXRhLnJvd3MubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBib3hFdmVudCA9IChpKSA9PiB7IHJldHVybiB7aW5kOmksIHNpZGU6b3Auc2lkZSwgaGVhZDogc2VsZi5fZGF0YS5sYWJlbHNbaV19IH1cbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy51cGRhdGVDdXJyZW50KClcblxuICAgICAgICB0aGlzLmJhc2UuaHRtbCgnJyk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgY3VyLnRvdGFsV2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBjdXIudG90YWxIZWlnaHQpXG5cbiAgICAgICAgdGhpcy5oZWFkUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3NlbGYucm93Q3NzTmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoc2VsZi5fZGF0YS5yb3dzKVxuICAgICAgICAgICAgLmpvaW4oXCJnXCIpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIGNsYXNzOiAoZCwgaSkgPT4gYCR7c2VsZi5yb3dDc3NOYW1lfSAke3NlbGYucm93Q3NzTmFtZX0tJHtpfWAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VyLnhQYWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6b3AuYm94RGltICogaSArIGN1ci55UGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXIuYm94V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXIuaGVhZEhlaWdodCwgXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3Zlciwge2luZDppLCBzaWRlOm9wLnNpZGV9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU91dCwge2luZDppLCBzaWRlOm9wLnNpZGV9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmhlYWRDZWxscyA9IHRoaXMuaGVhZFJvd3NcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHg6IChkLCBpKSA9PiBpICogY3VyLmhlYWRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB0aGlzLmJveENzc05hbWUsXG4gICAgICAgICAgICAgICAgaGVhZDogKGQsIGkpID0+IHNlbGYuX2RhdGEubGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogKGQ6bnVtYmVyKSA9PiB0aGlzLm9wYWNpdHlTY2FsZShkKSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdmVyLCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFwcGVuZChcInN2Zzp0aXRsZVwiKVxuICAgICAgICAgICAgLnRleHQoKGQsIGkpID0+IFwiSGVhZCBcIiArIHNlbGYuX2RhdGEubGFiZWxzW2ldKVxuICAgIH1cblxuXG4gICAgX3dyYW5nbGUoZGF0YTogQXR0ZW50aW9uSGVhZEJveEkpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlID0gdGhpcy5vcGFjaXR5U2NhbGUuZG9tYWluKFswLCBkYXRhLm1heF0pXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogQXR0ZW50aW9uSGVhZEJveEkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxufSIsImltcG9ydCB7VkNvbXBvbmVudH0gZnJvbSAnLi9WaXNDb21wb25lbnQnXG5pbXBvcnQge3NwYWN5Q29sb3JzfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtTVkd9IGZyb20gJy4uL2V0Yy9TVkdwbHVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCc7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyJztcblxuaW50ZXJmYWNlIE1hcmdpbkluZm8ge1xuICAgIHRvcDogbnVtYmVyLFxuICAgIGJvdHRvbTogbnVtYmVyLFxuICAgIHJpZ2h0OiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyXG59XG5cbi8vIERlcGVuZGVudCBvbiB0aGUgb3B0aW9ucyBpbiB0aGUgcmVzcG9uc2VcbnR5cGUgTWF0Y2hlZE1ldGFTZWxlY3Rpb25zID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImVudFwiXG5cbmludGVyZmFjZSBNYXRjaGVkTWV0YUNvdW50IHtcbiAgICBwb3M6IG51bWJlclxuICAgIGRlcDogbnVtYmVyXG4gICAgaXNfZW50OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIE1heEF0dE1ldGFDb3VudCB7XG4gICAgb2Zmc2V0OiBudW1iZXJcbn1cblxudHlwZSBNYXRjaGVkRGF0YUludGVyZmFjZSA9IE1hdGNoZWRNZXRhQ291bnRcbnR5cGUgTWF4QXR0RGF0YUludGVyZmFjZSA9IE1heEF0dE1ldGFDb3VudFxudHlwZSBEYXRhSW50ZXJmYWNlID0gTWF0Y2hlZERhdGFJbnRlcmZhY2UgfCBNYXhBdHREYXRhSW50ZXJmYWNlXG5cbmludGVyZmFjZSBDb3VudGVkSGlzdCB7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjb3VudDogbnVtYmVyXG59XG5cbnR5cGUgUmVuZGVyRGF0YUludGVyZmFjZSA9IENvdW50ZWRIaXN0W11cblxuXG4vKipcbiAqICBEYXRhIGZvcm1hdHRpbmcgZnVuY3Rpb25zXG4gKi9cbmNvbnN0IHRvUmVuZGVyRGF0YSA9IChvYmo6IHtbczogc3RyaW5nXTogbnVtYmVyfSk6IFJlbmRlckRhdGFJbnRlcmZhY2UgPT4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGssIGkpID0+IHtcbiAgICByZXR1cm4ge2xhYmVsOiBrLCBjb3VudDogb2JqW2tdfVxufSlcblxuY29uc3QgdG9TdHJpbmdPck51bSA9IChhOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5hID0gK2FcbiAgICBpZiAoaXNOYU4obmEpKSB7XG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuICAgIHJldHVybiBuYVxufVxuXG5jb25zdCBzb3J0QnlMYWJlbCA9IFIuc29ydEJ5KFIuY29tcG9zZSh0b1N0cmluZ09yTnVtLCBSLnByb3AoJ2xhYmVsJykpKVxuY29uc3Qgc29ydEJ5Q291bnQgPSBSLnNvcnRCeShSLnByb3AoJ2NvdW50JykpXG5cbmNvbnN0IHRvT3JkZXJlZFJlbmRlciA9IFIuY29tcG9zZShcbiAgICBSLnJldmVyc2UsXG4gICAgLy8gQHRzLWlnbm9yZSAtLSBUT0RPOiBmaXhcbiAgICBzb3J0QnlDb3VudCxcbiAgICB0b1JlbmRlckRhdGFcbilcblxuZXhwb3J0IGNsYXNzIENvcnB1c0hpc3RvZ3JhbTxUPiBleHRlbmRzIFZDb21wb25lbnQ8VD4ge1xuXG4gICAgY3NzX25hbWUgPSAnJ1xuXG4gICAgc3RhdGljIGV2ZW50cyA9IHt9XG5cbiAgICBfY3VycmVudCA9IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIHdpZHRoOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEMyBDT01QT05FTlRTXG4gICAgc3ZnOiBEM1NlbFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICAgICAgYmFyV2lkdGg6IG51bWJlclxuICAgICAgICB3aWR0aDogbnVtYmVyXG4gICAgICAgIGhlaWdodDogbnVtYmVyXG4gICAgICAgIHZhbDogc3RyaW5nXG4gICAgICAgIHhMYWJlbFJvdDogbnVtYmVyXG4gICAgICAgIHhMYWJlbE9mZnNldDogbnVtYmVyXG4gICAgICAgIHlMYWJlbE9mZnNldDogbnVtYmVyXG4gICAgfVxuXG4gICAgYXhlcyA9IHtcbiAgICAgICAgeDogZDMuc2NhbGVCYW5kKCksXG4gICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCksXG4gICAgfVxuXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucz17fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDMwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyV2lkdGg6IDI1LFxuICAgICAgICAgICAgd2lkdGg6IDE4NSxcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgdmFsOiBcInBvc1wiLCAvLyBDaGFuZ2UgRGVmYXVsdCwgcGFzcyB0aHJvdWdoIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB4TGFiZWxSb3Q6IDQ1LFxuICAgICAgICAgICAgeExhYmVsT2Zmc2V0OiAxNSxcbiAgICAgICAgICAgIHlMYWJlbE9mZnNldDogNSxcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKClcbiAgICB9XG5cbiAgICBtZXRhKCk6TWF0Y2hlZE1ldGFTZWxlY3Rpb25zXG4gICAgbWV0YSh2YWw6TWF0Y2hlZE1ldGFTZWxlY3Rpb25zKTogdGhpc1xuICAgIG1ldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnZhbCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5fZGF0YSlcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfaW5pdCgpIHt9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVhBeGlzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gb3Aud2lkdGggLSBvcC5tYXJnaW4ubGVmdCAtIG9wLm1hcmdpbi5yaWdodFxuXG4gICAgICAgIHRoaXMuYXhlcy54XG4gICAgICAgICAgICAuZG9tYWluKFIubWFwKFIucHJvcCgnbGFiZWwnKSwgc2VsZi5yZW5kZXJEYXRhKSlcbiAgICAgICAgICAgIC5yYW5nZVJvdW5kKFswLCB3aWR0aF0pXG4gICAgICAgICAgICAucGFkZGluZygwLjEpXG5cbiAgICAgICAgdGhpcy5fY3VycmVudC5jaGFydC53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlWUF4aXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3AuaGVpZ2h0IC0gb3AubWFyZ2luLnRvcCAtIG9wLm1hcmdpbi5ib3R0b21cblxuICAgICAgICB0aGlzLmF4ZXMueVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgK2QzLm1heChSLm1hcChSLnByb3AoJ2NvdW50JyksIHNlbGYucmVuZGVyRGF0YSkpXSlcbiAgICAgICAgICAgIC5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVYQXhpcygpXG4gICAgICAgIHRoaXMuY3JlYXRlWUF4aXMoKVxuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gZGF0YVt0aGlzLm9wdGlvbnMudmFsXVxuICAgICAgICByZXR1cm4gdG9PcmRlcmVkUmVuZGVyKG91dClcbiAgICB9XG5cbiAgICB3aWR0aCgpOm51bWJlclxuICAgIHdpZHRoKHZhbDpudW1iZXIpOnRoaXNcbiAgICB3aWR0aCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVYQXhpcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWlnaHQoKTpudW1iZXJcbiAgICBoZWlnaHQodmFsOm51bWJlcik6dGhpc1xuICAgIGhlaWdodCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVlBeGlzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIHRoaXMuc3ZnLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICB0aGlzLnN2Zy5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KVxuICAgIH1cblxuICAgIHByaXZhdGUgZmlnV2lkdGgoZGF0YTogUmVuZGVyRGF0YUludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIChkYXRhLmxlbmd0aCAqIG9wLmJhcldpZHRoKSArIG9wLm1hcmdpbi5sZWZ0ICsgb3AubWFyZ2luLnJpZ2h0XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOlJlbmRlckRhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudDtcblxuICAgICAgICB0aGlzLnBhcmVudC5odG1sKCcnKVxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50XG5cbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKCk7XG4gICAgICAgIHRoaXMud2lkdGgodGhpcy5maWdXaWR0aChkYXRhKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBheGVzXG4gICAgICAgIGNvbnN0IGcgPSBzZWxmLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHt4OiBvcC5tYXJnaW4ubGVmdCwgeTpvcC5tYXJnaW4udG9wfSkpXG5cbiAgICAgICAgLy8gSGFjayB0byBhbGxvdyBjbGVhcmluZyB0aGlzIGhpc3RvZ3JhbXMgdG8gd29ya1xuICAgICAgICBzZWxmLmJhc2UgPSBnXG5cbiAgICAgICAgLy8gRml4IGJlbG93IGZvciBwb3NpdGlvbmFsIGNoYW5naW5nXG4gICAgICAgICAgICBjb25zdCBheGlzQm90dG9tID0gZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSh7eDogMCwgeTpjdXJyLmNoYXJ0LmhlaWdodH0pKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2VsZi5heGVzLngpKVxuXG4gICAgICAgICAgICBpZiAob3AudmFsICE9IFwib2Zmc2V0XCIpIHtcbiAgICAgICAgICAgICAgICBheGlzQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC55TGFiZWxPZmZzZXQpICAgLy8gTW92ZSBiZWxvdyB0aGUgYXhpc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgb3AueExhYmVsT2Zmc2V0KSAgLy8gT2Zmc2V0IHRvIHRoZSByaWdodCBhIGJpdFxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKG9wLnhMYWJlbFJvdCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNlbGYuYXhlcy55KSlcblxuICAgICAgICBnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLmF4ZXMueChkLmxhYmVsKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLmF4ZXMueShkLmNvdW50KTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc2VsZi5heGVzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjdXJyLmNoYXJ0LmhlaWdodCAtIHNlbGYuYXhlcy55KGQuY291bnQpOyB9KVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgayA9PiBzcGFjeUNvbG9ycy5jb2xvclNjYWxlW29wLnZhbF0oay5sYWJlbCkpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQge2QzUywgRDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuaW1wb3J0ICcuLi9ldGMveGQzJ1xuXG4vLyBIZWxwZXJzXG5jb25zdCBjdXJyTWF0Y2hJZHggPSAoZWxlbSkgPT4gKyg8RWxlbWVudD5lbGVtLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgnbWF0Y2hpZHgnKVxuY29uc3QgY3VyclJvd051bSA9IChlbGVtKSA9PiArKDxFbGVtZW50PmVsZW0ucGFyZW50Tm9kZSkuZ2V0QXR0cmlidXRlKCdyb3dudW0nKVxuY29uc3QgYmFja2dyb3VuZENvbG9yID0geCA9PiBgcmdiYSgwLCAwLCAyNTUsICR7MC42Knh9KWBcblxuZXhwb3J0IGNsYXNzIENvcnB1c0luc3BlY3RvciBleHRlbmRzIFZDb21wb25lbnQ8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1pbnNwZWN0b3InO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXTsgLy8gVGhlIHBhc3NlZCBkYXRhXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3Jfcm93TW91c2VPdXRcIixcbiAgICAgICAgcm93Q2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd0NsaWNrXCIsXG4gICAgICAgIHJvd0RibENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dEYmxDbGlja1wiLFxuICAgICAgICBjZWxsTW91c2VPdmVyOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsTW91c2VPdmVyXCIsXG4gICAgICAgIGNlbGxNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbE1vdXNlT3V0XCIsXG4gICAgICAgIGNlbGxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbENsaWNrXCIsXG4gICAgICAgIGNlbGxEYmxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbERibENsaWNrXCIsXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHt9XG5cbiAgICAvLyBDT01QT05FTlRTXG4gICAgaW5zcGVjdG9yUm93czogRDNTZWxcbiAgICBpbnNwZWN0b3JDZWxsczogRDNTZWxcbiAgICBzY2FsZXIgPSBkMy5zY2FsZVBvdygpLnJhbmdlKFswLDAuOV0pLmV4cG9uZW50KDIpXG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJvd3MoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG5cbiAgICAgICAgdGhpcy5pbnNwZWN0b3JSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChcIi5pbnNwZWN0b3Itcm93XCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5zcGVjdG9yLXJvdycsIHRydWUpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIG1hdGNoSWR4OiBkID0+IGQuaW5kZXgsXG4gICAgICAgICAgICAgICAgcm93TnVtOiAoZCwgaSkgPT4gaSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNJbnNwZWN0b3IuZXZlbnRzLnJvd01vdXNlT3Zlciwge30pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy5pbnNwZWN0b3JDZWxscyA9IHRoaXMuaW5zcGVjdG9yQ2VsbHNcbiAgICAgICAgICAgIC5jbGFzc2VkKCdjZWxsdG9vbHRpcCcsIHRydWUpXG4gICAgICAgICAgICAuYXBwZW5kKCdzcGFuJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0b29sdGlwdGV4dCcsIHRydWUpXG4gICAgICAgICAgICAuaHRtbCgoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eVN0ciA9IGQuaXNfZW50ID8gXCI8YnI+RW50aXR5XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ID0gKDxFbGVtZW50Pm5baV0ucGFyZW50Tm9kZSkuZ2V0QXR0cmlidXRlKCdhdHQnKS5zbGljZSgwLCA3KVxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dFN0ciA9IGA8YnI+QXR0ZW50aW9uOiAke2F0dH1gXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYFBPUzogJHtkLnBvcy50b0xvd2VyQ2FzZSgpfTxicj5ERVA6ICR7ZC5kZXAudG9Mb3dlckNhc2UoKX1gICsgZW50aXR5U3RyICsgYXR0U3RyXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2VsbHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5pbnNwZWN0b3JDZWxscyA9IHRoaXMuaW5zcGVjdG9yUm93cy5zZWxlY3RBbGwoJy5pbnNwZWN0b3ItY2VsbCcpXG4gICAgICAgICAgICAuZGF0YSgoZDp0cC5GYWlzc1NlYXJjaFJlc3VsdHMpID0+IGQudG9rZW5zKVxuICAgICAgICAgICAgLmpvaW4oJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5zcGVjdG9yLWNlbGwnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ2luZGV4LW9mZnNldCcsIChkLCBpLCBuOkhUTUxFbGVtZW50W10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaElkeCA9IGN1cnJNYXRjaElkeChuW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBpIC0gbWF0Y2hJZHggXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBwb3M6IGQgPT4gZC5wb3MudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBkZXA6IGQgPT4gZC5kZXAudG9Mb3dlckNhc2UoKSwgXG4gICAgICAgICAgICAgICAgaXNfZW50OiBkID0+IGQuaXNfZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLnRva2VuLnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXRjaGVkLWNlbGwnLCBkID0+IGQuaXNfbWF0Y2gpXG5cbiAgICAgICAgLy8gSGlnaGxpZ2h0IHRoZSBjZWxscyBhcHByb3ByaWF0ZWx5XG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMuZWFjaCgoZCxpLG4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGN1cnJNYXRjaElkeChuW2ldKVxuICAgICAgICAgICAgaWYgKGkgPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ID0gZC5pbndhcmRcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhBdHQgPSArZDMubWF4KGF0dClcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUm93ID0gY3VyclJvd051bShuW2ldKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlciA9IHNlbGYuc2NhbGVyLmRvbWFpbihbMCwgbWF4QXR0XSlcblxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChgLmluc3BlY3Rvci1yb3dbcm93bnVtPScke2N1cnJSb3d9J11gKVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKGAuaW5zcGVjdG9yLWNlbGxgKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhY2tncm91bmRDb2xvcihzY2FsZXIoYXR0W2ldKSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2F0dCcsIChkLCBpKSA9PiBhdHRbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5hZGRUb29sdGlwKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpXG4gICAgICAgIHRoaXMuY3JlYXRlQ2VsbHMoKVxuICAgIH1cblxuICAgIF9pbml0KCkge31cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW10pIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhhdCB0aGlzLl9kYXRhIGlzIGRlZmluZWQgaW4gd3JhbmdsZSB3aGljaCBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBiZWZvcmUgcmVuZGVyXG4gICAgICAgIC8vIGFzIGlzIGRlZmluZWQgaW4gdGhlIHVwZGF0ZSBmdW5jdGlvblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJ1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gJy4uL3Zpcy9WaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCJcbmltcG9ydCB7IHNwYWN5Q29sb3JzIH0gZnJvbSBcIi4uL2V0Yy9TcGFjeUluZm9cIlxuaW1wb3J0IFwiLi4vZXRjL3hkM1wiXG5cbi8vIE5lZWQgYWRkaXRvaW5hbCBoZWlnaHQgaW5mb3JtYXRpb24gdG8gcmVuZGVyIGJveGVzXG5pbnRlcmZhY2UgQmFzZURhdGFJbnRlcmZhY2UgZXh0ZW5kcyB0cC5GYWlzc1NlYXJjaFJlc3VsdHMge1xuICAgIGhlaWdodDogbnVtYmVyXG59XG50eXBlIERhdGFJbnRlcmZhY2UgPSBCYXNlRGF0YUludGVyZmFjZVtdXG5cbmludGVyZmFjZSBDb2xvck1ldGFCYXNlRGF0YSB7XG4gICAgcG9zOiBzdHJpbmdcbiAgICBkZXA6IHN0cmluZ1xuICAgIGlzX2VudDogYm9vbGVhblxuICAgIHRva2VuOiBzdHJpbmdcbn1cblxudHlwZSBEaXNwbGF5T3B0aW9ucyA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJlbnRcIlxuXG5mdW5jdGlvbiBtYW5hZ2VyRGF0YTJNYXREYXRhKGRhdGFJbjogRGF0YUludGVyZmFjZSwgaW5kZXhPZmZzZXQgPSAwLCB0b1BpY2sgPSBbJ3BvcyddKSB7XG5cbiAgICBjb25zdCBvdXRPZlJhbmdlT2JqOiBDb2xvck1ldGFCYXNlRGF0YSA9IHtcbiAgICAgICAgcG9zOiBudWxsLFxuICAgICAgICBkZXA6IG51bGwsXG4gICAgICAgIGlzX2VudDogbnVsbCxcbiAgICAgICAgdG9rZW46IG51bGwsXG4gICAgfVxuXG4gICAgY29uc3QgY2hvb3NlUHJvcHMgPSBSLnBpY2sodG9QaWNrKVxuXG4gICAgY29uc3QgZGF0YU91dCA9IGRhdGFJbi5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmRJZHggPSBkLmluZGV4ICsgaW5kZXhPZmZzZXQ7XG4gICAgICAgIGlmICgod29yZElkeCA8IDApIHx8ICh3b3JkSWR4ID49IGQudG9rZW5zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBSLmFzc29jKCdoZWlnaHQnLCBkLmhlaWdodCwgb3V0T2ZSYW5nZU9iailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IGNob29zZVByb3BzKGQudG9rZW5zW3dvcmRJZHhdKVxuXG4gICAgICAgIHJldHVybiBSLmFzc29jKCdoZWlnaHQnLCBkLmhlaWdodCwgbmV3T2JqKVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YU91dFxufVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNNYXRNYW5hZ2VyIGV4dGVuZHMgVkNvbXBvbmVudDxEYXRhSW50ZXJmYWNlPntcbiAgICBjc3NfbmFtZSA9ICdjb3JwdXMtbWF0LWNvbnRhaW5lcidcbiAgICBvcHRpb25zID0ge1xuICAgICAgICBjZWxsV2lkdGg6IDEwLFxuICAgICAgICB0b1BpY2s6IFsncG9zJ10sXG4gICAgICAgIGlkeHM6IFstMSwgMCwgMV0sXG4gICAgICAgIGRpdkhvdmVyOiB7XG4gICAgICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQwIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgbW91c2VPdmVyOiBcIkNvcnB1c01hdE1hbmFnZXJfTW91c2VPdmVyXCIsXG4gICAgICAgIG1vdXNlT3V0OiBcIkNvcnB1c01hdE1hbmFnZXJfTW91c2VPdXRcIixcbiAgICAgICAgY2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9DbGlja1wiLFxuICAgICAgICBkYmxDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX0RibENsaWNrXCIsXG4gICAgICAgIHJlY3RNb3VzZU92ZXI6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0TW91c2VPdmVyXCIsXG4gICAgICAgIHJlY3RNb3VzZU91dDogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RNb3VzZU91dFwiLFxuICAgICAgICByZWN0Q2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0Q2xpY2tcIixcbiAgICAgICAgcmVjdERibENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdERibENsaWNrXCIsXG4gICAgfVxuXG4gICAgLy8gVGhlIGQzIGNvbXBvbmVudHMgdGhhdCBhcmUgc2F2ZWQgdG8gbWFrZSByZW5kZXJpbmcgZmFzdGVyXG4gICAgY29ycHVzTWF0czogRDNTZWxcbiAgICByb3dHcm91cHM6IEQzU2VsXG4gICAgZGl2SG92ZXI6IEQzU2VsXG5cbiAgICBfY3VycmVudCA9IHt9XG4gICAgcm93Q3NzTmFtZSA9ICdpbmRleC1tYXRjaC1yZXN1bHRzJ1xuICAgIGNlbGxDc3NOYW1lID0gJ2luZGV4LWNlbGwtcmVzdWx0J1xuXG4gICAgX2RhdGE6IERhdGFJbnRlcmZhY2VcblxuICAgIHN0YXRpYyBjb2xvclNjYWxlOiB0cC5Db2xvck1ldGFTY2FsZSA9IHNwYWN5Q29sb3JzLmNvbG9yU2NhbGU7XG5cbiAgICAvLyBTZWxlY3Rpb25zXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLmlkeHMgPSBbLTEsIDAsIDFdO1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgZ2V0IGlkeHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWR4cztcbiAgICB9XG5cbiAgICBzZXQgaWR4cyh2YWw6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pZHhzID0gdmFsXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHN0YXRpYyBkb20gZWxlbWVudHNcbiAgICBfaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29ycHVzTWF0cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5jb3JwdXMtbWF0JylcbiAgICAgICAgdGhpcy5yb3dHcm91cHMgPSB0aGlzLmNvcnB1c01hdHMuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5kaXZIb3ZlciA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0LWhvdmVyLWRpc3BsYXknLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3RleHQtY2VudGVyJywgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLndpZHRoKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIuaGVpZ2h0KSArICdweCcpXG5cbiAgICAgICAgdGhpcy5kaXZIb3Zlci5hcHBlbmQoJ3AnKVxuICAgIH1cblxuICAgIHBpY2sodmFsOiBEaXNwbGF5T3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMudG9QaWNrID0gW3ZhbF1cbiAgICAgICAgdGhpcy5yZWRyYXcoKVxuICAgIH1cblxuICAgIGFkZFJpZ2h0KCkge1xuICAgICAgICBjb25zdCBhZGRlZElkeCA9IFIubGFzdCh0aGlzLmlkeHMpICsgMTtcbiAgICAgICAgdGhpcy5pZHhzLnB1c2goYWRkZWRJZHgpXG4gICAgICAgIHRoaXMuYWRkQ29ycHVzTWF0KGFkZGVkSWR4LCBcInJpZ2h0XCIpXG4gICAgfVxuXG4gICAgYWRkTGVmdCgpIHtcbiAgICAgICAgY29uc3QgYWRkZWRJZHggPSB0aGlzLmlkeHNbMF0gLSAxO1xuICAgICAgICBjb25zdCBhZGREZWNyZW1lbnRlZEhlYWQ6ICh4OiBudW1iZXJbXSkgPT4gbnVtYmVyW10gPSB4ID0+IFIuaW5zZXJ0KDAsIFIuaGVhZCh4KSAtIDEpKHgpXG4gICAgICAgIHRoaXMuaWR4cyA9IGFkZERlY3JlbWVudGVkSGVhZCh0aGlzLmlkeHMpXG4gICAgICAgIHRoaXMuYWRkQ29ycHVzTWF0KGFkZGVkSWR4LCBcImxlZnRcIilcbiAgICB9XG5cbiAgICBraWxsUmlnaHQoKSB7XG4gICAgICAgIHRoaXMua2lsbChNYXRoLm1heCguLi50aGlzLmlkeHMpKVxuICAgIH1cblxuICAgIGtpbGxMZWZ0KCkge1xuICAgICAgICB0aGlzLmtpbGwoTWF0aC5taW4oLi4udGhpcy5pZHhzKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWRnZSB2YWx1ZSBmcm9tIGNvbnRhaW5lZCBpbmRleGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZCBJbmRleCB0byByZW1vdmVcbiAgICAgKi9cbiAgICBraWxsKGQ6IG51bWJlcikge1xuICAgICAgICBpZiAoZCAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoZCA9PSBNYXRoLm1pbiguLi50aGlzLmlkeHMpIHx8IGQgPT0gTWF0aC5tYXgoLi4udGhpcy5pZHhzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWR4cyA9IFIud2l0aG91dChbZF0sIHRoaXMuaWR4cylcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAub2Zmc2V0LSR7ZH1gKS5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGRhdGEodmFsPzogRGF0YUludGVyZmFjZSkge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWFpbiByZW5kZXJpbmcgY29kZSwgY2FsbGVkIHdoZW5ldmVyIHRoZSBkYXRhIGNoYW5nZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5jb3JwdXMtbWF0JykucmVtb3ZlKClcblxuICAgICAgICB0aGlzLmlkeHMuZm9yRWFjaCgoaWR4T2Zmc2V0LCBpKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmFkZENvcnB1c01hdChpZHhPZmZzZXQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGFub3RoZXIgd29yZCdzIG1ldGEgaW5mb3JtYXRpb24gbWF0cml4IGNvbHVtbiB0byBlaXRoZXIgc2lkZSBvZiB0aGUgaW5kZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZHhPZmZzZXQgRGlzdGFuY2Ugb2Ygd29yZCBmcm9tIG1hdGNoZWQgd29yZCBpbiB0aGUgc2VudGVuY2VcbiAgICAgKiBAcGFyYW0gdG9UaGUgSW5kaWNhdGVzIGFkZGluZyB0byB0aGUgXCJsZWZ0XCIgb3IgdG8gdGhlIFwicmlnaHRcIiBvZiB0aGUgaW5kZXhcbiAgICAgKi9cbiAgICBhZGRDb3JwdXNNYXQoaWR4T2Zmc2V0OiBudW1iZXIsIHRvVGhlOiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGJveFdpZHRoID0gb3AuY2VsbFdpZHRoICogb3AudG9QaWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYm94SGVpZ2h0ID0gUi5zdW0oUi5tYXAoUi5wcm9wKCdoZWlnaHQnKSwgdGhpcy5fZGF0YSkpXG5cbiAgICAgICAgbGV0IGNvcnB1c01hdDtcblxuICAgICAgICBpZiAodG9UaGUgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBjb3JwdXNNYXQgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvVGhlID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICBjb3JwdXNNYXQgPSB0aGlzLmJhc2UuaW5zZXJ0KCdkaXYnLCBcIjpmaXJzdC1jaGlsZFwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJ0b1RoZSBtdXN0IGhhdmUgYXJndW1lbnQgb2YgJ2xlZnQnIG9yICdyaWdodCdcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcnB1c01hdCA9IGNvcnB1c01hdFxuICAgICAgICAgICAgLmRhdGEoW2lkeE9mZnNldF0pXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBgY29ycHVzLW1hdCBvZmZzZXQtJHtpZHhPZmZzZXR9YClcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCBpZHhPZmZzZXQpXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogYm94V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBib3hIZWlnaHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdmVyLCB7IGlkeDogaSwgb2Zmc2V0OiBkLCB2YWw6IHNlbGYub3B0aW9ucy50b1BpY2tbMF0gfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3V0LCB7IGlkeDogaSwgb2Zmc2V0OiBkIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYWRkUm93R3JvdXAoY29ycHVzTWF0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG1hdCBUaGUgYmFzZSBkaXYgb24gd2hpY2ggdG8gYWRkIG1hdHJpY2VzIGFuZCByb3dzXG4gICAgICovXG4gICAgYWRkUm93R3JvdXAobWF0OiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0cyA9IFIubWFwKFIucHJvcCgnaGVpZ2h0JyksIHRoaXMuX2RhdGEpXG5cbiAgICAgICAgY29uc3QgW2hlaWdodFN1bSwgcmF3SGVpZ2h0TGlzdF0gPSBSLm1hcEFjY3VtKCh4LCB5KSA9PiBbUi5hZGQoeCwgeSksIFIuYWRkKHgsIHkpXSwgMCwgaGVpZ2h0cylcbiAgICAgICAgY29uc3QgZml4TGlzdDogKHg6IG51bWJlcltdKSA9PiBudW1iZXJbXSA9IFIuY29tcG9zZShSLmRyb3BMYXN0KDEpLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUi5wcmVwZW5kKDApXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgaGVpZ2h0TGlzdCA9IGZpeExpc3QocmF3SGVpZ2h0TGlzdClcblxuICAgICAgICBjb25zdCByb3dHcm91cCA9IG1hdC5zZWxlY3RBbGwoYC4ke3NlbGYucm93Q3NzTmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZCA9PiBtYW5hZ2VyRGF0YTJNYXREYXRhKHNlbGYuX2RhdGEsIGQsIG9wLnRvUGljaykpXG4gICAgICAgICAgICAuam9pbihcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7c2VsZi5yb3dDc3NOYW1lfSAke3NlbGYucm93Q3NzTmFtZX0tJHtpfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcInJvdy1udW1cIiwgKGQsaSkgPT4gaSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4gZC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IFNWRy50cmFuc2xhdGUoe1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiBoZWlnaHRMaXN0W2ldLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICAgICAgfSlcblxuICAgICAgICBvcC50b1BpY2suZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgIHNlbGYuYWRkUmVjdChyb3dHcm91cCwgMCwgcHJvcClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRSZWN0KGc6IEQzU2VsLCB4U2hpZnQ6IG51bWJlciwgcHJvcDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgY29uc3QgcmVjdHMgPSBnLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBvcC5jZWxsV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBkID0+IGQuaGVpZ2h0IC0gMyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVkcudHJhbnNsYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHhTaGlmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ29ycHVzTWF0TWFuYWdlci5jb2xvclNjYWxlW3Byb3BdKGRbcHJvcF0pKVxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgZy5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgIC8vIEdldCBvZmZzZXRcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpIC8vIENvbHVtblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICtjb2wuYXR0cignb2Zmc2V0JylcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU92ZXIsIHtpZHg6IGksIG9mZnNldDogb2Zmc2V0fSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gZDMuc2VsZWN0KHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlKSAvLyBDb2x1bW5cbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSArY29sLmF0dHIoJ29mZnNldCcpXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdXQsIHtpZHg6IGksIG9mZnNldDogb2Zmc2V0fSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHNlbGYuYmFzZS5ub2RlKCkpXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzMsIDNdXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IG1vdXNlWzBdICsgZ2V0QmFzZVgoKSAtIChvcC5kaXZIb3Zlci53aWR0aCArIGRpdk9mZnNldFswXSlcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSBtb3VzZVsxXSArIGdldEJhc2VZKCkgLSAob3AuZGl2SG92ZXIuaGVpZ2h0ICsgZGl2T2Zmc2V0WzFdKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgU3RyaW5nKGxlZnQpICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBTdHJpbmcodG9wKSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoJ3AnKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChkW3Byb3BdKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0YSBEYXRhIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBfcmVuZGVyKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF0YSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgYXUgZnJvbSAnLi4vZXRjL2FycmF5VXRpbHMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuaW1wb3J0IHsgVHlwZWRBcnJheSB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZS9kaXN0L3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFZGdlIHtcbiAgICBpOiBudW1iZXIsIC8vIFNvdXJjZSBpbmRleFxuICAgIGo6IG51bWJlciwgLy8gVGFyZ2V0IGluZGV4XG4gICAgdjogbnVtYmVyLCAvLyBWYWx1ZVxufVxuXG4vKipcbiAqIENvbnZlcnQgZGF0YSBtYXRyaXggdG8gbmVjZXNzYXJ5IGRhdGEgYXJyYXkgdG8gcGFzcyB0byBTVkcgY29ubmVjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRWRnZXMgKGRhdGE6bnVtYmVyW11bXSwgY3V0b2ZmQW10PTEpIDogRWRnZVtdIHtcbiAgICBsZXQgb3V0QXJyOiBFZGdlW10gPSBbXTtcbiAgICBsZXQgY3V0b2ZmOiBudW1iZXI7XG4gICAgZGF0YS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgY3V0b2ZmID0gY3V0b2ZmQW10ICogZDMuc3VtKHJvdyk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyOmF1LlNvcnRBcnJheSA9IGF1LnNvcnRXaXRoSW5kaWNlcyhyb3cpO1xuXG4gICAgICAgIHNvcnRlZEFyci5hcnIuZm9yRWFjaCgodixqKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iajogRWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaTogaSxcbiAgICAgICAgICAgICAgICAgICAgajogc29ydGVkQXJyLnNvcnRJbmRpY2VzW2pdLFxuICAgICAgICAgICAgICAgICAgICB2OiB2LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRBcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gb3V0QXJyO1xufVxuLyoqXG4gKiBDbGFzcyBmb3IgaW1wbGVtZW50aW5nIG9wZXJhdGlvbnMgb24gQXR0ZW50aW9uR3JhcGggaW1wbGVtZW50YXRpb24uIFxuICogQ2xvc2VseSB0aWVkIHRvIFtbQXR0ZW50aW9uQ29ubmVjdG9yXV1cbiAqL1xuZXhwb3J0IGNsYXNzIEVkZ2VEYXRhIHtcbiAgICByZWFkb25seSB0ZW5zRGF0YTp0Zi5UZW5zb3I7XG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGRhdGE6bnVtYmVyW11bXSl7XG4gICAgICAgIHRoaXMudGVuc0RhdGEgPSB0Zi50ZW5zb3IoZGF0YSk7XG4gICAgfVxuXG4gICAgbWluKGF4aXM/Om51bWJlcik6VHlwZWRBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1pbihheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIG1heChheGlzPzpudW1iZXIpOlR5cGVkQXJyYXl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1heChheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIGV4dGVudChheGlzPzpudW1iZXIpOm51bWJlcltdW10ge1xuICAgICAgICByZXR1cm4gZDMuemlwKHRoaXMubWluKGF4aXMpLCB0aGlzLm1heChheGlzKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdGhlIGRhdGEgdG8gc2VuZCB0byBTVkcgY2hhcnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGFjY3VtdWxhdGVUaHJlc2ggLSBBIGZsb2F0IGJldHdlZW4gMCBhbmQgMSwgaW5kaWNhdGluZyB0aGUgYW1vdW50IG9mIHdlaWdodCB0byBkaXNwbGF5LiBEZWZhdWx0cyB0byAwLjcuXG4gICAgICovXG4gICAgZm9ybWF0IChhY2N1bXVsYXRlVGhyZXNoPTAuNyk6RWRnZVtdIHtcbiAgICAgICAgcmV0dXJuIHRvRWRnZXModGhpcy5kYXRhLCBhY2N1bXVsYXRlVGhyZXNoKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IHNjYWxlTGluZWFyV2lkdGggPSBvcGFjaXR5ID0+IDUgKiBvcGFjaXR5XjAuMzM7IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHtWQ29tcG9uZW50fSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7U2ltcGxlRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHtEM1NlbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxudHlwZSBpbmZvRXZlbnRGcm9tSSA9IChpOm51bWJlcikgPT4gdHAuVG9rZW5FdmVudFxudHlwZSBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChpOm51bWJlciwgZW1iZWQ6bnVtYmVyW10pID0+IHRwLlRva2VuRW1iZWRkaW5nRXZlbnRcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRleHRUb2tlbnMgZXh0ZW5kcyBWQ29tcG9uZW50PHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT57XG5cbiAgICBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nXG4gICAgYWJzdHJhY3Qgc2lkZTogdHAuU2lkZU9wdGlvbnNcbiAgICBlSW5mbzppbmZvRXZlbnRGcm9tSSA9IChpKSA9PiB7cmV0dXJuIHtzaWRlOiB0aGlzLnNpZGUsIGluZDogaX19XG4gICAgZUVtYmVkZGluZzppbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChpLCBlbWJlZCkgPT4ge3JldHVybiB7c2lkZTogdGhpcy5zaWRlLCBpbmQ6IGksIGVtYmVkZGluZ3M6IGVtYmVkfX1cblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHRva2VuTW91c2VPdmVyOiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3ZlclwiLFxuICAgICAgICB0b2tlbk1vdXNlT3V0OiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3V0XCIsXG4gICAgICAgIHRva2VuQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuQ2xpY2tcIixcbiAgICAgICAgdG9rZW5EYmxDbGljazogXCJUZXh0VG9rZW5fVG9rZW5EYmxDbGlja1wiLFxuICAgIH07XG5cbiAgICBkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW107XG5cbiAgICBfY3VycmVudDoge307XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LFxuICAgIH07XG4gICAgdG90YWxIZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzpTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBtYXNrKG1hc2tJbmRzOm51bWJlcltdKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmVhY2goKGQsaSxuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgICAgICAgc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgXy5pbmNsdWRlcyhtYXNrSW5kcywgaSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0RW1iZWRkaW5nKGluZDpudW1iZXIpOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtpbmRdXG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgX3dyYW5nbGUoZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnRvdGFsSGVpZ2h0ID0gdGhpcy5vcHRpb25zLmJveGhlaWdodCAqIGRhdGEubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCB0ZXh0Qm94ZXMgPSA8RDNTZWw+dGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiBgdG9rZW4gJHt0aGlzLmNzc19uYW1lfSB0b2tlbi0ke2l9YClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+wqBgJHt0aGlzLmNzc19uYW1lfS0ke2l9YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0Jywgb3AuYm94aGVpZ2h0ICsgJ3B4JylcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudGV4dC5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsLnN0eWxlKCdiYWNrZ3JvdW5kJywgJ2xpZ2h0Ymx1ZScpO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU92ZXIsIHNlbGYuZUluZm8oaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbC5zdHlsZSgnYmFja2dyb3VuZCcsIDApXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3V0LCBzZWxmLmVJbmZvKGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIHNlbGYuZUVtYmVkZGluZyhpLCBkLmVtYmVkZGluZ3MpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZGJsY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWwuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiLCAhc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgc2VsZi5lSW5mbyhpKSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRUZXh0VG9rZW4gZXh0ZW5kcyBUZXh0VG9rZW5zIHtcblxuICAgIGNzc19uYW1lID0gJ2xlZnQtdG9rZW4nO1xuICAgIHNpZGU6dHAuU2lkZU9wdGlvbnMgPSAnbGVmdCdcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzpTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIFJpZ2h0VGV4dFRva2VuIGV4dGVuZHMgVGV4dFRva2VucyB7XG4gICAgY3NzX25hbWUgPSAncmlnaHQtdG9rZW4nO1xuICAgIHNpZGU6dHAuU2lkZU9wdGlvbnMgPSAncmlnaHQnXG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIZW5kcmlrIFN0cm9iZWx0IChoZW5kcmlrLnN0cm9iZWx0LmNvbSkgb24gMTIvMy8xNi5cbiAqIE1vZGlmaWVkIGJ5IEJlbiBIb292ZXIgb24gNC8xNi8yMDE5XG4gKi9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHtEM1NlbCwgVXRpbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7U1ZHfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICogXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKVxuICogXG4gKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVkNvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG5cbiAgICAvLyBTVEFUSUMgRklFTERTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRpYyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFsbCBjbGFzcyByZWxhdGVkIGV2ZW50cy5cbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYW5kIGV2ZW50IHN0cmluZ3MgaGF2ZSB0byBiZSB1bmlxdWUhIVxuICAgICAqL1xuXG4gICAgc3RhdGljIGV2ZW50czoge30gPSB7bm9FdmVudDogJ1ZDb21wb25lbnRfbm9FdmVudCd9O1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGF5ZXJzIGluIFNWRyAgZm9yIGJnLG1haW4sZmcsLi4uXG4gICAgICovXG4gICAgLy8gcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IGxheW91dDogeyBuYW1lOiBzdHJpbmcsIHBvczogbnVtYmVyW10gfVtdID0gW3tuYW1lOiAnbWFpbicsIHBvczogWzAsIDBdfV07XG5cbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZzsgLy8gTW9zdGx5IG9ic29sZXRlLCBuaWNlIHRvIGhhdmUgc2ltcGxlIElEIHRvIGFzc2lnbiBpbiBDU1NcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBEM1NlbDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcm90ZWN0ZWQgYmFzZTogRDNTZWw7IC8vIE1vc3RseSBvYnNvbGV0ZSwgcmVwcmVzZW50cyA8Zz4gaW4gc3ZnXG4gICAgcHJvdGVjdGVkIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07IC8vIFN0aWxsIHVzZWZ1bFxuICAgIHByb3RlY3RlZCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlcjtcbiAgICBwcm90ZWN0ZWQgX3Zpc2liaWxpdHk6IHsgaGlkZGVuOiBib29sZWFuLCBoaWRlRWxlbWVudD86IEQzU2VsIHwgbnVsbDsgW2tleTogc3RyaW5nXTogYW55IH07IC8vIEVuYWJsZXMgdHJhbnNpdGlvbnMgZnJvbSB2aXNpYmxlIHRvIGludmlzaWJsZS4gTW9zdGx5IG9ic29sZXRlLlxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogYW55OyAvLyBVbm5lY2Vzc2FyeVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nOyAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jdXJyZW50OiB7fTsgLy8gUHJpdmF0ZSBzdGF0ZSBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gdGhlIG9iamVjdCBpdHNlbGYuXG5cbiAgICAvLyBDT05TVFJVQ1RPUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpbXBsZSBjb25zdHJ1Y3Rvci4gU3ViY2xhc3NlcyBzaG91bGQgY2FsbCBAc3VwZXJJbml0KG9wdGlvbnMpIGFzIHdlbGwuXG4gICAgICogc2VlIHdoeSBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MzU5NTk0My93aHktYXJlLWRlcml2ZWQtY2xhc3MtcHJvcGVydHktdmFsdWVzLW5vdC1zZWVuLWluLXRoZS1iYXNlLWNsYXNzLWNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiB0ZW1wbGF0ZTpcbiAgICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIC8vIC0tIGFjY2VzcyB0byBzdWJjbGFzcyBwYXJhbXM6XG4gICAgICAgIHRoaXMuc3VwZXJJbml0KG9wdGlvbnMpO1xuICAgICB9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLmlkID0gVXRpbC5zaW1wbGVVSWQoe30pO1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG5cbiAgICAgICAgLy8gSWYgbm90IGZ1cnRoZXIgc3BlY2lmaWVkIC0gY3JlYXRlIGEgbG9jYWwgZXZlbnQgaGFuZGxlciBib3VuZCB0byB0aGUgYmFzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXIgfHxcbiAgICAgICAgICAgIG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcblxuICAgICAgICAvLyBPYmplY3QgZm9yIHN0b3JpbmcgaW50ZXJuYWwgc3RhdGVzIGFuZCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eSA9IHtoaWRkZW46IGZhbHNlfTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdXBlckluaXRIVE1MKG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV0pO1xuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCh0aGlzLmNzc19uYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyB0byBiZSBjYWxsZWQgYXMgbGFzdCBjYWxsIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7e319IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gZGVmYXVsdExheWVycyAtLSBjcmVhdGUgdGhlIGRlZmF1bHQgPGc+IGxheWVyczogYmcgLT4gbWFpbiAtPiBmZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdXBlckluaXRTVkcob3B0aW9uczoge30gPSB7fSwgZGVmYXVsdExheWVycyA9IFsnYmcnLCAnbWFpbicsICdmZyddKSB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnMgaWYgbm90IHNwZWNpZmllZCBpbiBjb25zdHJ1Y3RvciBjYWxsXG4gICAgICAgIC8vIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIC8vIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhkZWZhdWx0cyksIC4uLk9iamVjdC5rZXlzKG9wdGlvbnMpXSk7XG4gICAgICAgIC8vIGtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSAoa2V5IGluIG9wdGlvbnMpID8gb3B0aW9uc1trZXldIDogZGVmYXVsdHNba2V5XSk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcblxuICAgICAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBncm91cCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmJhc2UgPSBTVkcuZ3JvdXAoc3ZnLFxuICAgICAgICAgICAgdGhpcy5jc3NfbmFtZSArICcgSUQnICsgdGhpcy5pZCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3MpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IGxheWVyczogYmFja2dyb3VuZCwgbWFpbiwgZm9yZWdyb3VuZFxuICAgICAgICBpZiAoZGVmYXVsdExheWVycykge1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIG9yZGVyIGlzIGltcG9ydGFudCAhXG4gICAgICAgICAgICBkZWZhdWx0TGF5ZXJzLmZvckVhY2gobGF5ZXIgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgdGhlIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2luaXQoKTtcblxuICAgIC8vIERBVEEgVVBEQVRFICYgUkVOREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgdGltZSBkYXRhIGhhcyBjaGFuZ2VkLCB1cGRhdGUgaXMgY2FsbGVkIGFuZFxuICAgICAqIHRyaWdnZXJzIHdyYW5nbGluZyBhbmQgcmUtcmVuZGVyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSA9IHRoaXMuX3dyYW5nbGUoZGF0YSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERhdGEgd3JhbmdsaW5nIG1ldGhvZCAtLSBpbXBsZW1lbnQgaW4gc3ViY2xhc3MuIFJldHVybnMgdGhpcy5yZW5kZXJEYXRhLlxuICAgICAqIFNpbXBsZXN0IGltcGxlbWVudGF0aW9uOiBgcmV0dXJuIGRhdGE7YFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0gZGF0YSBpbiByZW5kZXIgZm9ybWF0XG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF93cmFuZ2xlKGRhdGEpO1xuXG5cbiAgICAvKipcbiAgICAgKiBJcyByZXNwb25zaWJsZSBmb3IgbWFwcGluZyBkYXRhIHRvIERPTSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW5kZXJEYXRhIHByZS1wcm9jZXNzZWQgKHdyYW5nbGVkKSBkYXRhXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfcmVuZGVyKHJlbmRlckRhdGEpOiB2b2lkO1xuXG5cbiAgICAvLyBVUERBVEUgT1BUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGluc3RhbmNlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvbmx5IHRoZSBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlUmVuZGVyIGlmIG9wdGlvbiBjaGFuZ2UgcmVxdWlyZXMgYSByZS1yZW5kZXJpbmcgKGRlZmF1bHQ6ZmFsc2UpXG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMoe29wdGlvbnMsIHJlUmVuZGVyID0gZmFsc2V9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyKSB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cblxuICAgIC8vID09PSBDT05WRU5JRU5DRSA9PT09XG4gICAgcmVkcmF3KCl7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIHNldEhpZGVFbGVtZW50KGhFOiBEM1NlbCkge1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50ID0gaEU7XG4gICAgfVxuXG4gICAgaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgICAgICAgICAgIH0pLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikge1xuICAgICAgICAgICAgY29uc3QgaEUgPSB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50IHx8IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6IG51bGwsXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcyc7XG5pbXBvcnQgJy4uL2V0Yy94ZDMnXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9hcGkvbWFpbkFwaSdcbmltcG9ydCB7IFVJQ29uZmlnIH0gZnJvbSAnLi4vdWlDb25maWcnXG5pbXBvcnQgeyBUZXh0VG9rZW5zLCBMZWZ0VGV4dFRva2VuLCBSaWdodFRleHRUb2tlbiB9IGZyb20gJy4vVGV4dFRva2VuJ1xuaW1wb3J0IHsgQXR0ZW50aW9uSGVhZEJveCwgZ2V0QXR0ZW50aW9uSW5mbyB9IGZyb20gJy4vQXR0ZW50aW9uSGVhZEJveCdcbmltcG9ydCB7IEF0dGVudGlvbkdyYXBoIH0gZnJvbSAnLi9BdHRlbnRpb25Db25uZWN0b3InXG5pbXBvcnQgeyBDb3JwdXNJbnNwZWN0b3IgfSBmcm9tICcuL0NvcnB1c0luc3BlY3RvcidcbmltcG9ydCB7IFRva2VuV3JhcHBlciwgc2lkZVRvTGV0dGVyIH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgeyBBdHRlbnRpb25XcmFwcGVyLCBtYWtlRnJvbU1ldGFSZXNwb25zZSB9IGZyb20gJy4uL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBDb3JwdXNNYXRNYW5hZ2VyIH0gZnJvbSAnLi4vdmlzL0NvcnB1c01hdE1hbmFnZXInXG5pbXBvcnQgeyBDb3JwdXNIaXN0b2dyYW0gfSBmcm9tICcuLi92aXMvQ29ycHVzSGlzdG9ncmFtJ1xuaW1wb3J0IHsgRmFpc3NTZWFyY2hSZXN1bHRXcmFwcGVyIH0gZnJvbSAnLi4vZGF0YS9GYWlzc1NlYXJjaFdyYXBwZXInXG5pbXBvcnQgeyBEM1NlbCwgU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgU2ltcGxlTWV0YSB9IGZyb20gXCIuLi9ldGMvdHlwZXNcIjtcbmltcG9ydCBDaGFuZ2VFdmVudCA9IEpRdWVyeS5DaGFuZ2VFdmVudDtcblxuXG5mdW5jdGlvbiBpc051bGxUb2tlbih0b2s6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBjb25zdCBpc1NvbWVOdWxsID0geCA9PiB7XG4gICAgICAgIHJldHVybiAoeCA9PSBudWxsKSB8fCAoeCA9PSBcIm51bGxcIilcbiAgICB9XG4gICAgY29uc3QgdG9rSXNOdWxsID0gdG9rID09IG51bGw7XG4gICAgY29uc3QgdG9rSGFzTnVsbCA9IGlzU29tZU51bGwodG9rLnNpZGUpIHx8IGlzU29tZU51bGwodG9rLmluZClcbiAgICByZXR1cm4gdG9rSXNOdWxsIHx8IHRva0hhc051bGxcbn1cblxuZnVuY3Rpb24gc2hvd0J5U2lkZShlOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgc2F2ZWQgdG9rZW4gaW4gdWlDb25mIGlzIG51bGxcbiAgICBpZiAoIWlzTnVsbFRva2VuKGUpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBlLnNpZGUgPT0gXCJsZWZ0XCIgPyBcInNyYy1pZHhcIiA6IFwidGFyZ2V0LWlkeFwiO1xuXG4gICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIFNlbC5zZXRWaXNpYmxlKGAuYXRuLWN1cnZlWyR7Y2xhc3NTZWxlY3Rvcn09JyR7ZS5pbmR9J11gKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0J5U2lkZShzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50LCBuZXdFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSkge1xuICAgICAgICBzaG93QnlTaWRlKG5ld0V2ZW50KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0FsbChzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbFRva2VuKHNhdmVkRXZlbnQpKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShcIi5hdG4tY3VydmVcIilcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIHNlbGVjdEhlYWQoaGVhZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWZmZWN0ZWRIZWFkcyA9IGQzLnNlbGVjdEFsbChgLmF0dC1yZWN0W2hlYWQ9JyR7aGVhZH0nXWApO1xuICAgIGFmZmVjdGVkSGVhZHMuY2xhc3NlZChcInVuc2VsZWN0ZWRcIiwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIHNldFNlbERpc2FibGVkKGF0dHI6IGJvb2xlYW4sIHNlbDogRDNTZWwpIHtcbiAgICBjb25zdCB2YWwgPSBhdHRyID8gdHJ1ZSA6IG51bGxcbiAgICBzZWwuYXR0cignZGlzYWJsZWQnLCB2YWwpXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluR3JhcGhpYyB7XG4gICAgYXBpOiBBUElcbiAgICB1aUNvbmY6IFVJQ29uZmlnXG4gICAgYXR0Q2Fwc3VsZTogQXR0ZW50aW9uV3JhcHBlclxuICAgIHRva0NhcHN1bGU6IFRva2VuV3JhcHBlclxuICAgIHNlbHM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIGluaXRpYWwgZDMgc2VsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAgdml6czogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgdmlzIGNvbXBvbmVudHMgd3JhcHBlZCBhcm91bmQgcGFyZW50IHNlbFxuICAgIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyICAgIC8vIE9yY2hlc3RyYXRlcyBldmVudHMgcmFpc2VkIGZyb20gY29tcG9uZW50c1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFQSSgpXG4gICAgICAgIHRoaXMudWlDb25mID0gbmV3IFVJQ29uZmlnKClcbiAgICAgICAgdGhpcy5maXJzdEluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYW55IGluZm9ybWF0aW9uIG9mIGEgcmVzcG9uc2UuXG4gICAgICogXG4gICAgICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIG9uY2UgYW5kIG9ubHkgb25jZVxuICAgICAqL1xuICAgIHNrZWxldG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWxzID0ge1xuICAgICAgICAgICAgYm9keTogZDMuc2VsZWN0KCdib2R5JyksXG4gICAgICAgICAgICBhdG5Db250YWluZXI6IGQzLnNlbGVjdCgnI2F0bi1jb250YWluZXInKSxcbiAgICAgICAgICAgIGF0bkRpc3BsYXk6IGQzLnNlbGVjdChcIiNhdG4tZGlzcGxheVwiKSxcbiAgICAgICAgICAgIG1vZGVsU2VsZWN0b3I6IGQzLnNlbGVjdChcIiNtb2RlbC1vcHRpb24tc2VsZWN0b3JcIiksXG4gICAgICAgICAgICBjb3JwdXNTZWxlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zZWxlY3RcIiksXG4gICAgICAgICAgICBhdG5IZWFkczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LWF0dC1oZWFkc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LWF0dC1oZWFkc1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgc2VudGVuY2VBOiBkMy5zZWxlY3QoXCIjZm9ybS1zZW50ZW5jZS1hXCIpLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZDMuc2VsZWN0KFwiI3VwZGF0ZS1zZW50ZW5jZVwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2tlbnM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBkMy5zZWxlY3QoXCIjbGVmdC10b2tlbnNcIiksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGQzLnNlbGVjdChcIiNyaWdodC10b2tlbnNcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xzVG9nZ2xlOiBkMy5zZWxlY3QoXCIjY2xzLXRvZ2dsZVwiKS5zZWxlY3QoXCIuc3dpdGNoXCIpLFxuICAgICAgICAgICAgbGF5ZXJDaGVja2JveGVzOiBkMy5zZWxlY3QoXCIjbGF5ZXItc2VsZWN0XCIpLFxuICAgICAgICAgICAgaGVhZENoZWNrYm94ZXM6IGQzLnNlbGVjdChcIiNoZWFkLXNlbGVjdFwiKSxcbiAgICAgICAgICAgIGNvbnRleHRRdWVyeTogZDMuc2VsZWN0KFwiI3NlYXJjaC1jb250ZXh0c1wiKSxcbiAgICAgICAgICAgIGVtYmVkZGluZ1F1ZXJ5OiBkMy5zZWxlY3QoXCIjc2VhcmNoLWVtYmVkZGluZ3NcIiksXG4gICAgICAgICAgICBzZWxlY3RlZEhlYWRzOiBkMy5zZWxlY3QoXCIjc2VsZWN0ZWQtaGVhZHNcIiksXG4gICAgICAgICAgICBoZWFkU2VsZWN0QWxsOiBkMy5zZWxlY3QoXCIjc2VsZWN0LWFsbC1oZWFkc1wiKSxcbiAgICAgICAgICAgIGhlYWRTZWxlY3ROb25lOiBkMy5zZWxlY3QoXCIjc2VsZWN0LW5vLWhlYWRzXCIpLFxuICAgICAgICAgICAgdGVzdENoZWNrYm94OiBkMy5zZWxlY3QoXCIjc2ltcGxlLWVtYmVkLXF1ZXJ5XCIpLFxuICAgICAgICAgICAgdGhyZXNoU2xpZGVyOiBkMy5zZWxlY3QoXCIjbXktcmFuZ2VcIiksXG4gICAgICAgICAgICBjb3JwdXNJbnNwZWN0b3I6IGQzLnNlbGVjdChcIiNjb3JwdXMtc2ltaWxhci1zZW50ZW5jZXMtZGl2XCIpLFxuICAgICAgICAgICAgY29ycHVzTWF0TWFuYWdlcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1tYXQtY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgaGlzdG9ncmFtczoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBkMy5zZWxlY3QoXCIjbWF0Y2hlZC1oaXN0b2dyYW0tY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogZDMuc2VsZWN0KFwiI21heC1hdHQtaGlzdG9ncmFtLWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAga2lsbExlZnQ6IGQzLnNlbGVjdChcIiNraWxsLWxlZnRcIiksXG4gICAgICAgICAgICAgICAgYWRkTGVmdDogZDMuc2VsZWN0KFwiI21pbnVzLWxlZnRcIiksXG4gICAgICAgICAgICAgICAgYWRkUmlnaHQ6IGQzLnNlbGVjdChcIiNwbHVzLXJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIGtpbGxSaWdodDogZDMuc2VsZWN0KFwiI2tpbGwtcmlnaHRcIiksXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogZDMuc2VsZWN0KFwiI21hdC1yZWZyZXNoXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IGQzLnNlbGVjdChcIiNtYXRjaGVkLW1ldGEtc2VsZWN0XCIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogZDMuc2VsZWN0KFwiI21heC1hdHQtbWV0YS1zZWxlY3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD50aGlzLnNlbHMuYm9keS5ub2RlKCkpO1xuXG4gICAgICAgIHRoaXMudml6cyA9IHtcbiAgICAgICAgICAgIGxlZnRIZWFkczogbmV3IEF0dGVudGlvbkhlYWRCb3godGhpcy5zZWxzLmF0bkhlYWRzLmxlZnQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwibGVmdFwiIH0pLFxuICAgICAgICAgICAgcmlnaHRIZWFkczogbmV3IEF0dGVudGlvbkhlYWRCb3godGhpcy5zZWxzLmF0bkhlYWRzLnJpZ2h0LCB0aGlzLmV2ZW50SGFuZGxlciwgeyBzaWRlOiBcInJpZ2h0XCIgfSksXG4gICAgICAgICAgICB0b2tlbnM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBuZXcgTGVmdFRleHRUb2tlbih0aGlzLnNlbHMudG9rZW5zLmxlZnQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgICAgICByaWdodDogbmV3IFJpZ2h0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRlbnRpb25Tdmc6IG5ldyBBdHRlbnRpb25HcmFwaCh0aGlzLnNlbHMuYXRuRGlzcGxheSwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgY29ycHVzSW5zcGVjdG9yOiBuZXcgQ29ycHVzSW5zcGVjdG9yKHRoaXMuc2Vscy5jb3JwdXNJbnNwZWN0b3IsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIGNvcnB1c01hdE1hbmFnZXI6IG5ldyBDb3JwdXNNYXRNYW5hZ2VyKHRoaXMuc2Vscy5jb3JwdXNNYXRNYW5hZ2VyLCB0aGlzLmV2ZW50SGFuZGxlciwgeyBpZHhzOiB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKCkgfSksXG4gICAgICAgICAgICBoaXN0b2dyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IG5ldyBDb3JwdXNIaXN0b2dyYW0odGhpcy5zZWxzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IG5ldyBDb3JwdXNIaXN0b2dyYW0odGhpcy5zZWxzLmhpc3RvZ3JhbXMubWF4QXR0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmluZEV2ZW50SGFuZGxlcigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWluSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICB0aGlzLmFwaS5nZXRNb2RlbERldGFpbHModGhpcy51aUNvbmYubW9kZWwoKSkudGhlbihtZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5uTGF5ZXJzKG1kLm5sYXllcnMpLm5IZWFkcyhtZC5uaGVhZHMpXG4gICAgICAgICAgICB0aGlzLmluaXRMYXllcnModGhpcy51aUNvbmYubkxheWVycygpKVxuXG4gICAgICAgICAgICB0aGlzLmFwaS5nZXRNZXRhQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKGF0dGVudGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RnJvbVJlc3BvbnNlKGF0dGVudGlvbilcblxuICAgICAgICAgICAgICAgIC8vIFdyYXAgcG9zdEluaXQgaW50byBmdW5jdGlvbiBzbyBhc3luY2hyb25vdXMgY2FsbCBkb2VzIG5vdCBtZXNzIHdpdGggbmVjZXNzYXJ5IGluaXRzXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKClcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rpc3BsYXkgPSB0aGlzLnVpQ29uZi5kaXNwbGF5SW5zcGVjdG9yKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0Rpc3BsYXkgPT0gJ2NvbnRleHQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWVyeUNvbnRleHQoKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvRGlzcGxheSA9PSAnZW1iZWRkaW5ncycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXJ5RW1iZWRkaW5ncygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51aUNvbmYubWFza0luZHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzID0gdGhpcy51aUNvbmYubWFza0luZHMoKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy50b2tDYXBzdWxlLmEsIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUVtYmVkZGluZ3MocilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgZmlyc3RJbml0KCkge1xuICAgICAgICB0aGlzLnNrZWxldG9uSW5pdCgpXG4gICAgICAgIHRoaXMubWFpbkluaXQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEZyb21SZXNwb25zZShhdHRlbnRpb246IHRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuYXR0Q2Fwc3VsZSA9IG1ha2VGcm9tTWV0YVJlc3BvbnNlKGF0dGVudGlvbiwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKVxuICAgICAgICB0aGlzLnRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKGF0dGVudGlvbik7XG4gICAgICAgIHRoaXMuX3N0YXRpY0luaXRzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9iaW5kRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyNyZWdpb24gZXZlbnQgaGFuZGxlciBiaW5kaW5nXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IHNpZGVUb0xldHRlcihlLnNpZGUsIHRoaXMudWlDb25mLmF0dFR5cGUpXG4gICAgICAgICAgICB0aGlzLnRva0NhcHN1bGVbbGV0dGVyXS50b2dnbGUoZS5pbmQpXG4gICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgICAgIHRoaXMuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy50b2tDYXBzdWxlLmEsIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oKHI6IHRwLkF0dGVudGlvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlRW1iZWRkaW5ncyhyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLm1hc2tJbmRzKHRoaXMudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpLCBlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgKGUpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dBbGwodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi50b2dnbGVUb2tlbihlKVxuICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuICAgICAgICAgICAgc2hvd0J5U2lkZShlKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHNwZWNpYWwgb24gcm93IG1vdXNlIG92ZXJcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdXRcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWF0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEodXBkYXRlTWF0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUodXBkYXRlTWF0KVxuXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZShhdHQpXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgKGU6IHsgaGVhZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVpQ29uZi50b2dnbGVIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5BRERFRCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5SRU1PVkVEKSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuICAgICAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIChlOiB7IHZhbDogXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiLCBvZmZzZXQ6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICAvLyBVbmNvbW1lbnQgdGhlIGJlbG93IGlmIHlvdSB3YW50IHRvIG1vZGlmeSB0aGUgd2hvbGUgY29sdW1uXG4gICAgICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYFxuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKHNlbGVjdG9yKS5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgdHJ1ZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIGZhbHNlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3ZlciwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGQzLnNlbGVjdChgLmluc3BlY3Rvci1yb3dbcm93bnVtPScke2UuaWR4fSddYClcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSByb3cuc2VsZWN0KGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYClcbiAgICAgICAgICAgIHdvcmQuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdXQsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgX3RvZ2dsZVRva2VuU2VsKCkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy51aUNvbmYudG9rZW4oKVxuICAgICAgICBjb25zdCBhbHJlYWR5U2VsZWN0ZWQgPSBkMy5zZWxlY3QoJy5zZWxlY3RlZC10b2tlbicpXG5cbiAgICAgICAgLy8gSWYgbm8gdG9rZW4gc2hvdWxkIGJlIHNlbGVjdGVkLCB1bnNlbGVjdCBhbGwgdG9rZW5zXG4gICAgICAgIGlmIChpc051bGxUb2tlbihlKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsOiBkMy5TZWxlY3Rpb248QmFzZVR5cGUsIGFueSwgQmFzZVR5cGUsIGFueT4gPSBkMy5zZWxlY3RBbGwoJy5zZWxlY3RlZC10b2tlbicpXG4gICAgICAgICAgICBpZiAoIW5ld1NlbC5lbXB0eSgpKSBuZXdTZWwuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2VsZWN0IHRoZSBpbmRpY2F0ZWQgdG9rZW5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbjJTdHJpbmcgPSAoZTogdHAuVG9rZW5FdmVudCkgPT4gYCMke2Uuc2lkZX0tdG9rZW4tJHtlLmluZH1gXG4gICAgICAgICAgICBjb25zdCBuZXdTZWwgPSBkMy5zZWxlY3QodG9rZW4yU3RyaW5nKGUpKVxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzZWxlY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAoIW5ld1NlbC5lbXB0eSgpKSBuZXdTZWwuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHRva2VuIHNlbGVjdGlvbiwgaWYgYW55XG4gICAgICAgIGlmICghYWxyZWFkeVNlbGVjdGVkLmVtcHR5KCkpIHtcbiAgICAgICAgICAgIGFscmVhZHlTZWxlY3RlZC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNb2RlbFNlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgICAgICAvLyBCZWxvdyBhcmUgdGhlIGF2YWlsYWJsZSBtb2RlbHMuIEkgY2FuIGxvYWQgdXAgdG8gMyBhdCBvbmNlXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLWNhc2VkXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJncHQyXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZFwiIH0sXG4gICAgICAgIF1cblxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnNlbGVjdEFsbCgnLm1vZGVsLW9wdGlvbicpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ29wdGlvbicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbW9kZWwtb3B0aW9uJywgdHJ1ZSlcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQubmFtZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5uYW1lKVxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIHRoaXMudWlDb25mLm1vZGVsKCkpO1xuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWwobWUucHJvcGVydHkoJ3ZhbHVlJykpXG4gICAgICAgICAgICBzZWxmLm1haW5Jbml0KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0Q29ycHVzU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICAgICAgeyBjb2RlOiBcIndvelwiLCBkaXNwbGF5OiBcIldpemFyZCBvZiBPelwiIH0sXG4gICAgICAgICAgICB7IGNvZGU6IFwid2lraVwiLCBkaXNwbGF5OiBcIldpa2lwZWRpYVwiIH0sXG4gICAgICAgIF1cblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLnNlbHMuY29ycHVzU2VsZWN0b3Iuc2VsZWN0QWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdvcHRpb24nKVxuICAgICAgICAgICAgLnByb3BlcnR5KCd2YWx1ZScsIGQgPT4gZC5jb2RlKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRpc3BsYXkpXG5cbiAgICAgICAgdGhpcy5zZWxzLmNvcnB1c1NlbGVjdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYuY29ycHVzKG1lLnByb3BlcnR5KCd2YWx1ZScpKVxuICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zdGF0aWNJbml0cygpIHtcbiAgICAgICAgdGhpcy5faW5pdFNlbnRlbmNlRm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0TW9kZWxTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW5pdENvcnB1c1NlbGVjdGlvbigpO1xuICAgICAgICB0aGlzLl9pbml0UXVlcnlGb3JtKCk7XG4gICAgICAgIHRoaXMuX2luaXRBZGRlcigpO1xuICAgICAgICB0aGlzLl9yZW5kZXJIZWFkU3VtbWFyeSgpO1xuICAgICAgICB0aGlzLl9pbml0TWV0YVNlbGVjdG9ycygpO1xuICAgICAgICB0aGlzLl9pbml0VG9nZ2xlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyQXR0SGVhZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRBZGRlcigpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlVXJsT2Zmc2V0SWR4cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlDb25mLm9mZnNldElkeHModGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuaWR4cylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpeENvcnB1c01hdEhlaWdodHMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdXcmFwcGVkID0gdGhpcy5fd3JhcFJlc3VsdHModGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuZGF0YSgpKVxuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuZGF0YShuZXdXcmFwcGVkLmRhdGEpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Vscy5idXR0b25zLmFkZFJpZ2h0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmFkZFJpZ2h0KClcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5idXR0b25zLmFkZExlZnQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuYWRkTGVmdCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5raWxsUmlnaHQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIua2lsbFJpZ2h0KClcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5idXR0b25zLmtpbGxMZWZ0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmtpbGxMZWZ0KClcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5idXR0b25zLnJlZnJlc2gub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZml4Q29ycHVzTWF0SGVpZ2h0cygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9ucmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Vscy5jb3JwdXNJbnNwZWN0b3IudGV4dCgpICE9ICcnKSBmaXhDb3JwdXNNYXRIZWlnaHRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSBvbnJlc2l6ZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNZXRhU2VsZWN0b3JzKCkge1xuICAgICAgICB0aGlzLl9pbml0TWF0Y2hlZFdvcmRTZWxlY3Rvcih0aGlzLnNlbHMubWV0YVNlbGVjdG9yLm1hdGNoZWRXb3JkKVxuICAgICAgICB0aGlzLl9pbml0TWF4QXR0U2VsZWN0b3IodGhpcy5zZWxzLm1ldGFTZWxlY3Rvci5tYXhBdHQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1heEF0dFNlbGVjdG9yKHNlbDogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgY2hvb3NlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1zID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICAgICAgbXMuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoYGxhYmVsW3ZhbHVlPSR7dmFsdWV9XWApXG4gICAgICAgICAgICBlbC5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hvb3NlU2VsZWN0ZWQodGhpcy51aUNvbmYubWV0YU1heCgpKVxuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSA8U2ltcGxlTWV0YT5kMy5zZWxlY3QodGhpcykuYXR0cigndmFsdWUnKTtcblxuICAgICAgICAgICAgLy8gRG8gdG9nZ2xlXG4gICAgICAgICAgICBzZWwuc2VsZWN0QWxsKCcuYWN0aXZlJykuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1ldGFNYXgodmFsKVxuICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0Lm1ldGEodmFsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNYXRjaGVkV29yZFNlbGVjdG9yKHNlbDogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgY2hvb3NlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1zID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICAgICAgbXMuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoYGxhYmVsW3ZhbHVlPSR7dmFsdWV9XWApXG4gICAgICAgICAgICBlbC5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hvb3NlU2VsZWN0ZWQodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG5cbiAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IDxTaW1wbGVNZXRhPmQzLnNlbGVjdCh0aGlzKS5hdHRyKCd2YWx1ZScpXG5cbiAgICAgICAgICAgIC8vIERvIHRvZ2dsZVxuICAgICAgICAgICAgc2VsLnNlbGVjdEFsbCgnLmFjdGl2ZScpLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tZXRhTWF0Y2godmFsKVxuICAgICAgICAgICAgc2VsZi5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodmFsKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rpc2FibGVTZWFyY2hpbmcoYXR0cjogYm9vbGVhbikge1xuICAgICAgICBzZXRTZWxEaXNhYmxlZChhdHRyLCB0aGlzLnNlbHMuY29udGV4dFF1ZXJ5KVxuICAgICAgICBzZXRTZWxEaXNhYmxlZChhdHRyLCB0aGlzLnNlbHMuZW1iZWRkaW5nUXVlcnkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodmFsOiB0cC5TaW1wbGVNZXRhKSB7XG4gICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLnBpY2sodmFsKVxuICAgICAgICB0aGlzLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC5tZXRhKHZhbClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0U2VudGVuY2VGb3JtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigncGxhY2Vob2xkZXInLCBcIkVudGVyIG5ldyBzZW50ZW5jZSB0byBhbmFseXplXCIpXG4gICAgICAgIHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQS5hdHRyKCd2YWx1ZScsIHRoaXMudWlDb25mLnNlbnRlbmNlKCkpXG5cbiAgICAgICAgY29uc3QgY2xlYXJJbnNwZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci5jbGVhcigpO1xuICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci5jbGVhcigpO1xuICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VibWl0TmV3U2VudGVuY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGFsbCBvY2N1cmVuY2VzIG9mICcjJyBpbiBzZW50ZW5jZSBhcyB0aGlzIGNhdXNlcyB0aGUgQVBJIHRvIGJyZWFrXG4gICAgICAgICAgICBjb25zdCBzZW50ZW5jZV9hOiBzdHJpbmcgPSB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEucHJvcGVydHkoXCJ2YWx1ZVwiKS5yZXBsYWNlKC9cXCMvZywgJycpXG5cbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHRoZSBmb3JtIGlzIGZpbGxlZCBjb3JyZWN0bHlcbiAgICAgICAgICAgIGlmIChzZW50ZW5jZV9hLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcbiAgICAgICAgICAgICAgICB0aGlzLmFwaS5nZXRNZXRhQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCBzZW50ZW5jZV9hLCB0aGlzLnVpQ29uZi5sYXllcigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnNlbnRlbmNlKHNlbnRlbmNlX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5ybVRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnNwZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25FbnRlciA9IFIuY3VycnkoKGtleUNvZGUsIGYsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0ga2V5Q29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXJTdWJtaXQgPSBvbkVudGVyKDEzLCBzdWJtaXROZXdTZW50ZW5jZSlcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnNlbHMuZm9ybS5idXR0b247XG4gICAgICAgIGNvbnN0IGlucHV0Qm94ID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBO1xuXG4gICAgICAgIGJ0bi5vbihcImNsaWNrXCIsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuICAgICAgICBpbnB1dEJveC5vbigna2V5cHJlc3MnLCBvbkVudGVyU3VibWl0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaEVtYmVkcygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2tlbiA9IHRoaXMudWlDb25mLnRva2VuKCk7XG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMudml6cy50b2tlbnNbc2F2ZWRUb2tlbi5zaWRlXS5nZXRFbWJlZGRpbmcoc2F2ZWRUb2tlbi5pbmQpXG4gICAgICAgIHJldHVybiBvdXQuZW1iZWRkaW5nc1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmNvbnRleHRzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VBUkNISU5HIEVNQkVERElOR1NcIik7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gdGhpcy5fZ2V0U2VhcmNoRW1iZWRzKClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHNlbGYuYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBlbWJlZCwgbGF5ZXIsIGhlYWRzLCBrKVxuICAgICAgICAgICAgLnRoZW4oKHZhbDogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW10pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodmFsKVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2YWwpXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRlZFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXRjaGVkSGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcblxuICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLnVwZGF0ZSh3cmFwcGVkVmFscy5kYXRhKVxuICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLnVwZGF0ZShjb3VudGVkVmFscylcbiAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignZW1iZWRkaW5ncycpXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNFQVJDSElORyBDT05URVhUU1wiKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2dldFNlYXJjaENvbnRleHQoKVxuICAgICAgICBjb25zdCBsYXllciA9IHNlbGYudWlDb25mLmxheWVyKClcbiAgICAgICAgY29uc3QgaGVhZHMgPSBzZWxmLnVpQ29uZi5oZWFkcygpXG4gICAgICAgIGNvbnN0IGsgPSA1MFxuXG4gICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcblxuICAgICAgICBzZWxmLmFwaS5nZXROZWFyZXN0Q29udGV4dHMoc2VsZi51aUNvbmYubW9kZWwoKSwgc2VsZi51aUNvbmYuY29ycHVzKCksIGNvbnRleHQsIGxheWVyLCBoZWFkcywgaylcbiAgICAgICAgICAgIC50aGVuKCh2YWw6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodHMgb2YgY29ycHVzIGluc3BlY3RvciByb3dzLlxuICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHZhbClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModmFsKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ZWRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF0Y2hlZEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC51cGRhdGUoY291bnRlZFZhbHMpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuXG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0Lm1ldGEoc2VsZi51aUNvbmYubWV0YU1heCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaXNOdWxsVG9rZW4odGhpcy51aUNvbmYudG9rZW4oKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaENvbnRleHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIHRvbGQgdG8gc2hvdyBpbnNwZWN0b3IgYnV0IHdhcyBub3QgZ2l2ZW4gYSBzZWxlY3RlZCB0b2tlbiBlbWJlZGRpbmdcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3F1ZXJ5RW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFpc051bGxUb2tlbih0aGlzLnVpQ29uZi50b2tlbigpKSkge1xuICAgICAgICAgICAgdGhpcy5fc2VhcmNoRW1iZWRkaW5ncygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYXMgdG9sZCB0byBzaG93IGluc3BlY3RvciBidXQgd2FzIG5vdCBnaXZlbiBhIHNlbGVjdGVkIHRva2VuIGVtYmVkZGluZ1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoaW5nRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy51aUNvbmYuaGVhZHMoKS5sZW5ndGggPT0gMCkgfHwgKGlzTnVsbFRva2VuKHRoaXMudWlDb25mLnRva2VuKCkpKVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaERpc2FibGVyKCkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlU2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0Rpc2FibGVkKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFF1ZXJ5Rm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICB0aGlzLnNlbHMuY29udGV4dFF1ZXJ5Lm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fcXVlcnlDb250ZXh0KClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuZW1iZWRkaW5nUXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUVtYmVkZGluZ3MoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbmRlckhlYWRTdW1tYXJ5KCkge1xuICAgICAgICB0aGlzLnNlbHMuc2VsZWN0ZWRIZWFkc1xuICAgICAgICAgICAgLmh0bWwoUi5qb2luKCcsICcsIHRoaXMudWlDb25mLmhlYWRzKCkpKVxuICAgIH1cblxuICAgIC8vIE1vZGlmeSBmYWlzcyByZXN1bHRzIHdpdGggY29ycmVzcG9uZGluZyBoZWlnaHRzXG4gICAgcHJpdmF0ZSBfd3JhcFJlc3VsdHMocmV0dXJuZWRGYWlzc1Jlc3VsdHM6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IGQzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1yb3cnKVxuXG4gICAgICAgIC8vIERvbid0IGp1c3QgdXNlIG9mZnNldEhlaWdodCBzaW5jZSB0aGF0IHJvdW5kcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSByb3dzLm5vZGVzKCkubWFwKChuOiBIVE1MRWxlbWVudCkgPT4gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG5cbiAgICAgICAgY29uc3QgbmV3VmFscyA9IHJldHVybmVkRmFpc3NSZXN1bHRzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGhlaWdodHNbaV0sIHYpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gbmV3IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlcihuZXdWYWxzKVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVkVmFsc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdExheWVycyhuTGF5ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gc2VsZi5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgxLCBuTGF5ZXJzICsgMSkpXG4gICAgICAgICAgICAuam9pbihcImxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnRuIGJ1dHRvbiBsYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdG8gbGFyZ2VzdCBsYXllciBhdmFpbGFibGUgaWYgdWlDb25mLmxheWVyKCkgPiBuZXcgbkxheWVyc1xuICAgICAgICAgICAgICAgIGlmIChkID09IHNlbGYudWlDb25mLmxheWVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkID09IG5MYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIoZClcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiBkKVxuICAgICAgICAgICAgLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJyYWRpb1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoZWNrYm94LWlubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJuYW1lXCIsIFwibGF5ZXJib3hcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVhZFwiLCBkID0+IGQpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBcImxheWVyQ2hlY2tib3hcIiArIGkpXG4gICAgICAgIC8vIC50ZXh0KChkLCBpKSA9PiBkICsgXCIgXCIpXG5cbiAgICAgICAgZnJvbUV2ZW50KGNoZWNrYm94ZXMubm9kZXMoKSwgJ2NoYW5nZScpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gZDMuc2VsZWN0KDxCYXNlVHlwZT5lLnRhcmdldCkuZGF0dW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEsIFwiLS0tIG15RGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBkID0+IGQgPT09IG15RGF0YSlcblxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKHY6IEV2ZW50KSA9PiArZDMuc2VsZWN0KDxCYXNlVHlwZT52LnRhcmdldCkuZGF0dW0oKSksXG4gICAgICAgICAgICB0YXAodiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgbGF5ZXI6IFwiLCB2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcih2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHYpID0+IGZyb20oc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhzZWxmLnVpQ29uZi5tb2RlbCgpLCBzZWxmLnRva0NhcHN1bGUuYSwgc2VsZi51aUNvbmYuc2VudGVuY2UoKSwgdikpKSAvLyBVU0UgVEhJU1xuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZS51cGRhdGVFbWJlZGRpbmdzKHIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHNlbGYudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgc2VsZi5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllcklkID0gYCNsYXllckNoZWNrYm94JHt0aGlzLnVpQ29uZi5sYXllcigpfWBcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXllciBJRDogXCIsIGxheWVySWQpO1xuICAgICAgICBkMy5zZWxlY3QobGF5ZXJJZCkuYXR0cihcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpXG5cbiAgICAgICAgLy8gSW5pdCB0aHJlc2hvbGQgc3R1ZmZcbiAgICAgICAgY29uc3QgZGlzcFRocmVzaCA9ICh0aHJlc2gpID0+IE1hdGgucm91bmQodGhyZXNoICogMTAwKVxuICAgICAgICBkMy5zZWxlY3QoJyNteS1yYW5nZS12YWx1ZScpLnRleHQoZGlzcFRocmVzaChzZWxmLnVpQ29uZi50aHJlc2hvbGQoKSkpXG5cbiAgICAgICAgdGhpcy5zZWxzLnRocmVzaFNsaWRlci5vbihcImlucHV0XCIsIF8udGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXM7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi50aHJlc2hvbGQoK25vZGUudmFsdWUgLyAxMDApO1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuICAgICAgICAgICAgc2VsZi52aXpzLmF0dGVudGlvblN2Zy50aHJlc2hvbGQoc2VsZi51aUNvbmYudGhyZXNob2xkKCkpXG4gICAgICAgIH0sIDEwMCkpXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3RBbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3RBbGxIZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuaGVhZFNlbGVjdE5vbmUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3ROb0hlYWRzKCk7XG4gICAgICAgICAgICBzZWxmLl9zZWFyY2hEaXNhYmxlcigpO1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBfaW5pdFRvZ2dsZSgpIHtcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuc2Vscy5jbHNUb2dnbGUubm9kZSgpLCAnaW5wdXQnKS5waXBlKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtLSBUT0RPOiBGSVggIVxuICAgICAgICAgICAgbWFwKGUgPT4gZS5zcmNFbGVtZW50LmNoZWNrZWQpLFxuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnplcm9lZCh2KVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyQXR0SGVhZCgpIHtcbiAgICAgICAgY29uc3QgaGVhZHMgPSBfLnJhbmdlKDAsIHRoaXMudWlDb25mLl9uSGVhZHMpXG4gICAgICAgIGNvbnN0IGZvY3VzQXR0ID0gdGhpcy5hdHRDYXBzdWxlLmF0dFxuICAgICAgICBjb25zdCBsZWZ0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcImxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcInJpZ2h0XCIpO1xuICAgICAgICB0aGlzLnZpenMubGVmdEhlYWRzLnVwZGF0ZShsZWZ0QXR0SW5mbylcbiAgICAgICAgdGhpcy52aXpzLnJpZ2h0SGVhZHMudXBkYXRlKHJpZ2h0QXR0SW5mbylcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmVcbiAgICAgICAgaGVhZHMuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLmhlYWRTZXQoKS5oYXMoaCkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkKGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZW5kZXJUb2tlbnMoKSB7XG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRva0NhcHN1bGVbdGhpcy51aUNvbmYuYXR0VHlwZVswXV1cbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRva0NhcHN1bGVbdGhpcy51aUNvbmYuYXR0VHlwZVsxXV1cblxuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQudXBkYXRlKGxlZnQudG9rZW5EYXRhKTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0Lm1hc2sobGVmdC5tYXNrSW5kcyk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMucmlnaHQudXBkYXRlKHJpZ2h0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMucmlnaHQubWFzayhyaWdodC5tYXNrSW5kcyk7XG4gICAgICAgIC8vIGRpc3BsYXlTZWxlY3RlZFRva2VuXG4gICAgfVxuXG4gICAgcmVuZGVyU3ZnKCkge1xuICAgICAgICBjb25zdCBhdHQgPSB0aGlzLmF0dENhcHN1bGUuYnlIZWFkcyh0aGlzLnVpQ29uZi5oZWFkcygpKVxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==