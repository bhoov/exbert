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
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + "/attend-with-meta", toSend);
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
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/k-nearest-embeddings');
        const payload = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["toPayload"])(toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url, payload);
    }
    getNearestContexts(model, corpus, context, layer, heads, k = 10, hashObj = null) {
        const toSend = {
            model: model,
            corpus: corpus,
            embedding: context,
            layer: layer,
            heads: heads,
            k: k,
        };
        const url = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(this.baseURL + '/k-nearest-contexts');
        const payload = Object(_etc_apiHelpers__WEBPACK_IMPORTED_MODULE_5__["toPayload"])(toSend);
        console.log("--- GET " + url);
        if (hashObj != null) {
            const key = object_hash__WEBPACK_IMPORTED_MODULE_4__["sha1"](toSend);
            d3__WEBPACK_IMPORTED_MODULE_0__["json"](url).then(r => {
                hashObj[key] = r;
            });
        }
        return checkDemoAPI(toSend, url, payload);
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
const bpeTokens = ["[CLS]", "[SEP]", "<s>", "</s>", "<|endoftext|>"];
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
class FaissSearchResultWrapper {
    constructor(data, showNext = false) {
        this.options = {
            showNext: false
        };
        this.data = data;
        this.options.showNext = showNext;
    }
    get matchAtt() {
        return this.showNext() ? "matched_att_plus_1" : "matched_att";
    }
    get matchIdx() {
        return this.showNext() ? "next_index" : "index";
    }
    /**
     * Add position info interpretable by the histogram
     *
     * @param countObj Represents the inforrmation to be displayed by the histogram
     */
    countPosInfo() {
        const attOffsets = this.data.map((d, i) => +d[this.matchAtt].out.offset_to_max);
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
        // Confusing: Show MATCHED WORD attentions, but NEXT WORD distribution
        const getMaxToken = (d) => d.tokens[argMax(d.matched_att.out.att)];
        this.data.forEach((d, i) => {
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
            // Confusing: Show MATCHED WORD attentions, but NEXT WORD distribution
            const match = d.tokens[d[this.matchIdx] + indexOffset];
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
    showNext(v) {
        if (v == null)
            return this.options.showNext;
        this.options.showNext = v;
        return this;
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
        topk_words: [],
        topk_probs: []
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
    updateTokens(r) {
        const desiredKeys = ['contexts', 'embeddings', 'topk_probs', 'topk_words'];
        const newTokens = r.aa.left.map(v => ramda__WEBPACK_IMPORTED_MODULE_2__["pick"](desiredKeys, v));
        const pairs = ramda__WEBPACK_IMPORTED_MODULE_2__["zip"](this.a.tokenData, newTokens);
        pairs.forEach((d, i) => {
            Object.keys(d[1]).map(k => {
                d[0][k] = d[1][k];
            });
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
Sel.hideElement = (hE) => hE.transition().styles({
    'opacity': 0,
    'pointer-events': 'none',
    'display': 'none'
});
Sel.unhideElement = (hE) => hE.transition().styles({
    'opacity': 1,
    'pointer-events': null,
    'display': null
});


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
/*! exports provided: Toggled, NormBy, ModelKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggled", function() { return Toggled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormBy", function() { return NormBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelKind", function() { return ModelKind; });
var Toggled;
(function (Toggled) {
    Toggled[Toggled["ADDED"] = 0] = "ADDED";
    Toggled[Toggled["REMOVED"] = 1] = "REMOVED";
})(Toggled || (Toggled = {}));
var NormBy;
(function (NormBy) {
    NormBy[NormBy["Row"] = 0] = "Row";
    NormBy[NormBy["Col"] = 1] = "Col";
    NormBy[NormBy["All"] = 2] = "All";
})(NormBy || (NormBy = {}));
var ModelKind;
(function (ModelKind) {
    ModelKind["Bidirectional"] = "bidirectional";
    ModelKind["Autoregressive"] = "autoregressive";
})(ModelKind || (ModelKind = {}));


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
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0.payload);
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
            const tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_3__["TokenWrapper"](r0.payload);
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
            modelKind: params['modelKind'] || _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Bidirectional,
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
    hasToken() {
        const conf = this._conf;
        const actuallyNull = ((conf.tokenInd == null) && (conf.tokenSide == null));
        const strNull = (conf.tokenInd == "null");
        return (!actuallyNull) && (!strNull);
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
    modelKind(val) {
        if (val == null)
            return this._conf.modelKind;
        this._conf.modelKind = val;
        this.toURL();
        return this;
    }
    /**
     * Return the offset needed for the modelKind in the configuration
     */
    get offset() {
        switch (this.modelKind()) {
            case _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Bidirectional: {
                return 0;
            }
            case _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive: {
                return 0;
            }
            default: {
                return 0;
            }
        }
    }
    get showNext() {
        return this.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive ? true : false;
    }
    get matchHistogramDescription() {
        return this.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_0__["ModelKind"].Autoregressive ? "Next" : "Matched";
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
/*! exports provided: scaleLinearWidth, AttentionGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinearWidth", function() { return scaleLinearWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionGraph", function() { return AttentionGraph; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
/* harmony import */ var _EdgeConnector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EdgeConnector */ "./ts/vis/EdgeConnector.ts");
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");
/* harmony import */ var _etc_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etc/types */ "./ts/etc/types.ts");





const scaleLinearWidth = opacity => 5 * opacity ^ 0.33;
class AttentionGraph extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = '';
        // OPTIONS WITH DEFAULTS
        this._threshold = 0.7; // Accumulation threshold. Between 0-1
        this.options = {
            boxheight: 26,
            height: 500,
            width: 200,
            offset: 0,
        };
        /**
         * Scale the opacity according to the values of the data, from 0 to max of contained data
         * Normalize by each source target, or across the whole
         */
        this.createScales = () => {
            this.opacityScales = [];
            let arr = [];
            // Group normalization
            switch (this.normBy) {
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Row:
                    arr = this.edgeData.extent(1);
                    this.opacityScales = [];
                    arr.forEach((v, i) => {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, v[1]])
                            .range([0, 0.9]));
                    });
                    break;
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Col:
                    arr = this.edgeData.extent(0);
                    this.opacityScales = [];
                    arr.forEach((v, i) => {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, v[1]])
                            .range([0, 0.9]));
                    });
                    break;
                case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].All:
                    const maxIn = d3__WEBPACK_IMPORTED_MODULE_0__["max"](this.plotData.map((d) => d.v));
                    for (let i = 0; i < this._data.length; i++) {
                        this.opacityScales.push(d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
                            .domain([0, maxIn])
                            .range([0, 1]));
                    }
                    break;
                default:
                    console.log("Nor norming specified");
                    break;
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
    // Define whether to use the 'j' or 'i' attribute to calculate opacities
    scaleIdx() {
        switch (this.normBy) {
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Col:
                return 'j';
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].Row:
                return 'i';
            case _etc_types__WEBPACK_IMPORTED_MODULE_4__["NormBy"].All:
                return 'i';
        }
    }
    /**
     * Create connections between locations of the SVG using D3's linkGen
     */
    createConnections() {
        const self = this;
        const op = this.options;
        if (this.paths) {
            this.paths.attrs({
                'd': (d, i) => {
                    const data = {
                        source: [0, op.boxheight * (d.i + 0.5 + op.offset)],
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
        const op = this.options;
        if (this.svg != null) {
            this.svg.attr("height", this.options.height + (op.offset * this.options.boxheight));
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
        const self = this;
        if (this.paths != null) {
            // paths.transition().duration(500).attr('opacity', (d) => {
            this.paths.attr('opacity', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return val;
            });
            this.paths.attr('stroke-width', (d) => {
                const val = this.opacityScales[d[self.scaleIdx()]](d.v);
                return scaleLinearWidth(val); //5 * val^0.33;
            });
        }
        return this;
    }
    /**
     * Rerender the graph in the event that the data changes
     */
    updateData() {
        if (this.graph != null) {
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"](".atn-curve").remove();
            const data = this.plotData;
            this.paths = this.graph
                .data(data)
                .join('path');
            this.createConnections();
            this.updateOpacity();
            return this;
        }
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
 * @param headMat The matrix representing all the attentions by head (layer already selected) <head, from, to>
 * @param headList The heads that are selected
 * @param side Is this the right or the left display?
 * @param tokenInd If not null, select just the information from a single token across heads
 * @returns Information needed to label the headbox
 */
function getAttentionInfo(headMat, headList, side = "left", token = null) {
    // Collect only from headlist, average each head, transpose to ease iteration
    if (headList.length == 0) {
        return {
            rows: [[]],
            labels: [],
            max: 0,
        };
    }
    let dim = null;
    // Only change the attention graph opposite selected token
    if (token != null && (token.side != side)) {
        dim = token.side == "left" ? -2 : -1; // Assign to "from" direction if "left" 
    }
    let axis = side == "left" ? 2 : 1;
    // average across the axis representing the attentions.
    let gatheredMat = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor3d"](headMat);
    if (dim != null) {
        gatheredMat = gatheredMat.gather([token.ind], dim);
    }
    let newMat = gatheredMat.gather(headList, 0).mean([axis]).transpose();
    const rowInfo = newMat.arraySync();
    const out = {
        rows: rowInfo,
        labels: headList,
        max: newMat.max().arraySync(),
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
            maxWidth: 200,
            offset: 0,
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
        const nHeads = this._data.rows[0].length;
        const baseHeadWidth = op.boxDim * op.xscale;
        // Scale headwidth according to maximum width
        const getHeadScale = (nH) => (Math.min(op.maxWidth / nH, baseHeadWidth) / baseHeadWidth) * op.xscale;
        cur.headHeight = op.boxDim * op.yscale;
        cur.headWidth = getHeadScale(nHeads) * op.boxDim;
        cur.xPad = cur.headWidth;
        cur.yPad = (op.boxDim - cur.headHeight) / 2;
        const getBoxWidth = (headWidth) => {
            const maxBwidth = 100;
            const bwidth = this._data.rows[0].length * cur.headWidth;
            const scale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"];
            if (bwidth > maxBwidth) {
                return;
            }
        };
        cur.boxWidth = (this._data.rows[0].length * cur.headWidth);
        cur.totalWidth = (2 * cur.xPad) + cur.boxWidth;
        cur.totalHeight = (op.boxDim * (this._data.rows.length + op.offset));
        return this._current;
    }
    updateData() {
        const op = this.options;
        const self = this;
        const boxEvent = (i) => { return { ind: i, side: op.side, head: self._data.labels[i] }; };
        const cur = this.updateCurrent();
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
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
                    y: (op.boxDim * (i + op.offset)) + cur.yPad,
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
            .on("mousemove", function (d, i) {
            const op = self.options;
            const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
            self.eventHandler.trigger(AttentionHeadBox.events.boxMouseMove, { ind: i, side: op.side, baseX: getBaseX(), baseY: getBaseY(), mouse: mouse });
        })
            .append("svg:title")
            .text((d, i) => "Head " + (self._data.labels[i] + 1));
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
    boxMouseMove: "AttentionHeadBox_BoxMouseMove",
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
                bottom: 50,
                left: 40
            },
            barWidth: 25,
            width: 185,
            height: 230,
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
const backgroundColor = x => `rgba(128, 0, 150, ${0.6 * x})`;
class CorpusInspector extends _VisComponent__WEBPACK_IMPORTED_MODULE_2__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'corpus-inspector';
        this.options = {
            showNext: false
        };
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
            .classed('matched-cell', d => d.is_match)
            .classed('next-cell', function (d) {
            return self.showNext() && d.is_next_word;
        })
            .classed('gray-cell', function (d, i) {
            const idx = +currMatchIdx(this);
            return self.showNext() && i > idx;
        });
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
    showNext(v) {
        if (v == null)
            return this.options.showNext;
        this.options.showNext = v;
        return this;
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
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VisComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VisComponent */ "./ts/vis/VisComponent.ts");




class TextTokens extends _VisComponent__WEBPACK_IMPORTED_MODULE_3__["VComponent"] {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.eInfo = (sel, i) => { return { sel: sel, side: this.side, ind: i }; };
        this.eEmbedding = (sel, i, embed) => { return { sel: sel, side: this.side, ind: i, embeddings: embed }; };
        this.options = {
            boxheight: 26,
            offset: 0,
            divHover: {
                width: 150,
                height: 150,
                offset: [3, 3],
                textInfo: "Would predict..."
            },
        };
        this.superInitHTML(options);
    }
    mask(maskInds) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            sel.classed("masked-token", lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](maskInds, i));
        });
    }
    getEmbedding(ind) {
        return this._data[ind];
    }
    _init() { }
    _wrangle(data) {
        this.data = this._data;
        return this._data;
    }
    _divPlacement() {
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        const self = this;
        const op = this.options;
        const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
        const divOffset = [3, 3];
        const left = mouse[0] + getBaseX() - (op.divHover.width + divOffset[0]);
        const top = mouse[1] + getBaseY() + divOffset[1];
        return [left, top];
    }
    _render(data) {
        const op = this.options;
        const self = this;
        // Reset token display
        this.base.selectAll("*").remove();
        this.divHover = this.base.append('div')
            .classed('tok-info', true)
            .classed('mat-hover-display', true)
            .classed(this.hover_css_name, true)
            .style('width', String(this.options.divHover.width) + 'px')
            .style('height', String(this.options.divHover.height) + 'px');
        this.divHover
            .append('p')
            .classed('p-info', true)
            .style('font-weight', 'bold')
            .text(op.divHover.textInfo);
        // Add blank divs
        console.log(`Internal offset (${this.side}): `, op.offset);
        const blankDivs = this.base.selectAll(`.blank-text-box`);
        blankDivs.data(ramda__WEBPACK_IMPORTED_MODULE_1__["range"](0, op.offset))
            .join("div")
            .classed("blank-text-box", true)
            .classed("token", true)
            .style("height", op.boxheight + 'px')
            .text((d) => "  ");
        // Render normal text box data
        self.textBoxes = this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {
            return d.text.replace("\u0120", " ").replace("\u010A", "\\n");
        })
            .on('mouseover', function (d, i) {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 'lightblue');
            self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i));
            self.divHover.style('visibility', 'visible');
        })
            .on('mouseout', function (d, i) {
            let sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 0);
            self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i));
            self.divHover.style('visibility', 'hidden');
        })
            .on('mousemove', function (d, i) {
            const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            const [left, top] = self._divPlacement();
            self.divHover
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .selectAll(".topk-word-box")
                //@ts-ignore
                .data(d3__WEBPACK_IMPORTED_MODULE_0__["zip"](d.topk_words, d.topk_probs))
                .join('p')
                .classed("topk-word-box", true)
                .text(w => {
                const name = w[0].replace(/\u0120/g, " ").replace(/\u010A/g, "\\n");
                const prob = w[1].toFixed(2);
                return name + ": " + prob;
            });
        });
        self.addClick(self.textBoxes);
    }
    addClick(textboxes) {
        const self = this;
        self.textBoxes = textboxes
            .on('click', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(sel, i, d.embeddings));
        })
            .on('dblclick', (d, i, n) => {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](n[i]);
            self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(sel, i));
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
        this.hover_css_name = 'left-token-hover';
        this.side = 'left';
        this.offset = 1;
    }
}
class RightTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'right-token';
        this.hover_css_name = 'right-token-hover';
        this.side = 'right';
        this.offset = 0;
    }
    _divPlacement() {
        const getBaseX = () => self.base.node().getBoundingClientRect().left;
        const getBaseY = () => self.base.node().getBoundingClientRect().top;
        const self = this;
        const op = this.options;
        const mouse = d3__WEBPACK_IMPORTED_MODULE_0__["mouse"](self.base.node());
        const divOffset = [3, 3];
        const left = mouse[0] + getBaseX() + divOffset[0];
        const top = mouse[1] + getBaseY() + divOffset[1];
        return [left, top];
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
        this.skeletonInit();
        this.mainInit();
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
                headInfo: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#head-info-box")
                    .classed('mat-hover-display', true)
                    .classed('text-center', true)
                    .style('width', String(70) + 'px')
                    .style('height', String(30) + 'px')
                    .style('visibillity', 'hidden')
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
            corpusMsgBox: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#corpus-msg-box"),
            histograms: {
                matchedWordDescription: d3__WEBPACK_IMPORTED_MODULE_0__["select"]("#match-kind"),
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
            leftHeads: new _AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"](this.sels.atnHeads.left, this.eventHandler, { side: "left", }),
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
        const self = this;
        this.sels.body.style("cursor", "progress");
        this.api.getModelDetails(this.uiConf.model()).then(md => {
            const val = md.payload;
            this.uiConf.nLayers(val.nlayers).nHeads(val.nheads);
            this.initLayers(this.uiConf.nLayers());
            this.api.getMetaAttentions(this.uiConf.model(), this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
                const att = attention.payload;
                this.initFromResponse(att);
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
                let normBy;
                if ((this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) && (!this.uiConf.hideClsSep())) {
                    normBy = _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].Col;
                }
                else {
                    normBy = _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].All;
                }
                this.vizs.attentionSvg.normBy = normBy;
                if (this.uiConf.maskInds().length > 0) {
                    this.tokCapsule.a.maskInds = this.uiConf.maskInds();
                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(resp => {
                        const r = resp.payload;
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateTokens(r);
                        this.update();
                        postResponseDisplayCleanup();
                    });
                }
                else {
                    this.update();
                    postResponseDisplayCleanup();
                }
                if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(this.uiConf.token().ind);
                    }
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict next...";
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict next...";
                }
                else {
                    self.vizs.tokens.left.options.divHover.textInfo = "Would predict here...";
                    self.vizs.tokens.right.options.divHover.textInfo = "Would predict here...";
                }
                this.sels.body.style("cursor", "default");
            });
        });
    }
    initFromResponse(attention) {
        this.attCapsule = Object(_data_AttentionCapsule__WEBPACK_IMPORTED_MODULE_12__["makeFromMetaResponse"])(attention, this.uiConf.hideClsSep());
        this.tokCapsule = new _data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["TokenWrapper"](attention);
        this._staticInits();
    }
    leaveCorpusMsg(msg) {
        this.vizs.corpusInspector.hideView();
        this.vizs.corpusMatManager.hideView();
        console.log("Running leave msg");
        _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].unhideElement(this.sels.corpusMsgBox);
        this.sels.corpusMsgBox.text(msg);
    }
    _bindEventHandler() {
        const self = this;
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenDblClick, (e) => {
            switch (self.uiConf.modelKind()) {
                case _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional: {
                    e.sel.classed("masked-token", !e.sel.classed("masked-token"));
                    const letter = Object(_data_TokenWrapper__WEBPACK_IMPORTED_MODULE_11__["sideToLetter"])(e.side, this.uiConf.attType);
                    self.tokCapsule[letter].toggle(e.ind);
                    self.sels.body.style("cursor", "progress");
                    self.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((resp) => {
                        const r = resp.payload;
                        self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        self.tokCapsule.updateTokens(r);
                        self.uiConf.maskInds(this.tokCapsule.a.maskInds);
                        self.update();
                        self.sels.body.style("cursor", "default");
                    });
                    break;
                }
                case _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive: {
                    console.log("Autoregressive model doesn't do masking");
                    break;
                }
                default: {
                    console.log("What kind of model is this?");
                    break;
                }
            }
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOver, (e) => {
            chooseShowBySide(this.uiConf.token(), e);
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token());
        });
        this.eventHandler.bind(_TextToken__WEBPACK_IMPORTED_MODULE_7__["TextTokens"].events.tokenClick, (e) => {
            const tokToggle = () => {
                this.uiConf.toggleToken(e);
                this._toggleTokenSel();
                showBySide(e);
            };
            tokToggle();
            this.renderAttHead();
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOver, (e) => {
            self.sels.atnHeads.headInfo.style('visibility', 'visible');
        });
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.rowMouseOut, () => {
            self.sels.atnHeads.headInfo.style('visibility', 'hidden');
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
        this.eventHandler.bind(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["AttentionHeadBox"].events.boxMouseMove, (e) => {
            const headInfo = self.sels.atnHeads.headInfo;
            let left, top, borderRadius;
            if (e.side == "left") {
                const divOffset = [12, 3];
                left = e.mouse[0] + e.baseX - (+headInfo.style('width').replace('px', '') + divOffset[0]);
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1]);
                borderRadius = "8px 8px 1px 8px";
            }
            else {
                const divOffset = [-13, 3];
                left = e.mouse[0] + e.baseX + divOffset[0];
                top = e.mouse[1] + e.baseY - (+headInfo.style('height').replace('px', '') + divOffset[1]);
                borderRadius = "8px 8px 8px 1px";
            }
            headInfo
                .style('visibility', 'visible')
                .style('left', String(left) + 'px')
                .style('top', String(top) + 'px')
                .style('border-radius', borderRadius)
                .text(`Head: ${e.ind + 1}`);
            // Don't do anything special on row mouse over
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
        if (!this.uiConf.hasToken()) {
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
        if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
            this.grayToggle(+e.ind);
            this.markNextToggle(+e.ind, this.tokCapsule.a.length());
        }
        this._searchDisabler();
    }
    /** Gray all tokens that have index greater than ind */
    grayBadToks(ind) {
        if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
            const grayToks = function (d, i) {
                const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
                s.classed("masked-token", i > ind);
            };
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.right-token').each(grayToks);
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.left-token').each(grayToks);
        }
    }
    grayToggle(ind) {
        if (this.uiConf.hasToken())
            this.grayBadToks(ind);
        else
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.token').classed('masked-token', false);
    }
    markNextWordToks(ind, N) {
        const markToks = function (d, i) {
            const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            s.classed("next-token", i == Math.min(ind + 1, N));
        };
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.right-token').each(markToks);
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.left-token').each(markToks);
    }
    markNextToggle(ind, N) {
        if (this.uiConf.hasToken())
            this.markNextWordToks(ind, N);
        else
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.token').classed('next-token', false);
    }
    _initModelSelection() {
        const self = this;
        const data = [
            { name: "bert-base-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            // { name: "albert-base-v1", kind: tp.ModelKind.Bidirectional },
            { name: "gpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
            { name: "distilbert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilroberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilgpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
        ];
        const names = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('name'))(data);
        const kinds = ramda__WEBPACK_IMPORTED_MODULE_2__["map"](ramda__WEBPACK_IMPORTED_MODULE_2__["prop"]('kind'))(data);
        const kindmap = ramda__WEBPACK_IMPORTED_MODULE_2__["zipObj"](names, kinds);
        this.sels.modelSelector.selectAll('.model-option')
            .data(data)
            .join('option')
            .classed('model-option', true)
            .property('value', d => d.name)
            .attr("modelkind", d => d.kind)
            .text(d => d.name);
        this.sels.modelSelector.property('value', this.uiConf.model());
        this.sels.modelSelector.on('change', function () {
            const me = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            const mname = me.property('value');
            self.uiConf.model(mname);
            self.uiConf.modelKind(kindmap[mname]);
            if (kindmap[mname] == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                console.log("RESETTING MASK INDS");
                self.uiConf.maskInds([]);
            }
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
            console.log(self.uiConf.corpus());
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
        this.renderTokens();
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
        this.vizs.corpusInspector.showNext(this.uiConf.showNext);
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
                    .then((resp) => {
                    const r = resp.payload;
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
        self.vizs.corpusInspector.showNext(self.uiConf.showNext);
        this.sels.body.style("cursor", "progress");
        self.api.getNearestEmbeddings(self.uiConf.model(), self.uiConf.corpus(), embed, layer, heads, k)
            .then((val) => {
            if (val.status == 406) {
                self.leaveCorpusMsg(`Embeddings are not available for model '${self.uiConf.model()}' and corpus '${self.uiConf.corpus()}' at this time.`);
            }
            else {
                const v = val.payload;
                self.vizs.corpusInspector.unhideView();
                self.vizs.corpusMatManager.unhideView();
                // Get heights of corpus inspector rows.
                self.vizs.corpusInspector.update(v);
                const wrappedVals = self._wrapResults(v);
                const countedVals = wrappedVals.getMatchedHistogram();
                const offsetVals = wrappedVals.getMaxAttHistogram();
                self.vizs.corpusMatManager.update(wrappedVals.data);
                self.sels.histograms.matchedWordDescription.text(this.uiConf.matchHistogramDescription);
                console.log("MATCHER: ", self.sels.histograms.matchedWord);
                self.vizs.histograms.matchedWord.update(countedVals);
                self.vizs.histograms.maxAtt.update(offsetVals);
                self.uiConf.displayInspector('embeddings');
                this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch());
            }
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
        self.vizs.corpusInspector.showNext(self.uiConf.showNext);
        this.sels.body.style("cursor", "progress");
        self.api.getNearestContexts(self.uiConf.model(), self.uiConf.corpus(), context, layer, heads, k)
            .then((val) => {
            // Get heights of corpus inspector rows.
            if (val.status == 406) {
                console.log("Contexts are not available!");
                self.leaveCorpusMsg(`Contexts are not available for model '${self.uiConf.model()}' and corpus '${self.uiConf.corpus()}' at this time.`);
            }
            else {
                const v = val.payload;
                console.log("HIDING");
                self.vizs.corpusInspector.update(v);
                _etc_Util__WEBPACK_IMPORTED_MODULE_17__["Sel"].hideElement(self.sels.corpusMsgBox);
                self.vizs.corpusInspector.unhideView();
                self.vizs.corpusMatManager.unhideView();
                const wrappedVals = self._wrapResults(v);
                const countedVals = wrappedVals.getMatchedHistogram();
                const offsetVals = wrappedVals.getMaxAttHistogram();
                self.vizs.corpusMatManager.update(wrappedVals.data);
                self.vizs.histograms.matchedWord.update(countedVals);
                self.vizs.histograms.maxAtt.update(offsetVals);
                self.uiConf.displayInspector('context');
                this._updateCorpusInspectorFromMeta(this.uiConf.metaMatch());
                self.vizs.histograms.maxAtt.meta(self.uiConf.metaMax());
            }
            this.sels.body.style("cursor", "default");
        });
    }
    _queryContext() {
        const self = this;
        if (this.uiConf.hasToken()) {
            this._searchContext();
        }
        else {
            console.log("Was told to show inspector but was not given a selected token embedding");
        }
    }
    _queryEmbeddings() {
        const self = this;
        if (this.uiConf.hasToken()) {
            console.log("token: ", this.uiConf.token());
            this._searchEmbeddings();
        }
        else {
            console.log("Was told to show inspector but was not given a selected token embedding");
        }
    }
    _searchingDisabled() {
        return (this.uiConf.heads().length == 0) || (!this.uiConf.hasToken());
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
            .html(ramda__WEBPACK_IMPORTED_MODULE_2__["join"](', ', this.uiConf.heads().map(h => h + 1)));
    }
    // Modify faiss results with corresponding heights
    _wrapResults(returnedFaissResults) {
        const rows = d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.inspector-row');
        // Don't just use offsetHeight since that rounds to the nearest integer
        const heights = rows.nodes().map((n) => n.getBoundingClientRect().height);
        const newVals = returnedFaissResults.map((v, i) => {
            return ramda__WEBPACK_IMPORTED_MODULE_2__["assoc"]('height', heights[i], v);
        });
        const wrappedVals = new _data_FaissSearchWrapper__WEBPACK_IMPORTED_MODULE_16__["FaissSearchResultWrapper"](newVals, this.uiConf.showNext);
        return wrappedVals;
    }
    initLayers(nLayers) {
        const self = this;
        let hasActive = false;
        const checkboxes = self.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(lodash__WEBPACK_IMPORTED_MODULE_1__["range"](0, nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => {
            // Assign to largest layer available if uiConf.layer() > new nLayers
            if (d == self.uiConf.layer()) { // Javascript is 0 indexed!
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
            .text((d) => d + 1)
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["switchMap"])((v) => Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["from"])(self.api.updateMaskedAttentions(self.uiConf.model(), self.tokCapsule.a, self.uiConf.sentence(), v)))).subscribe({
            next: (resp) => {
                const r = resp.payload;
                self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                self.tokCapsule.updateTokens(r);
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
        const token = this.uiConf.hasToken() ? this.uiConf.token() : null;
        //@ts-ignore
        const leftAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "left", token);
        //@ts-ignore
        const rightAttInfo = Object(_AttentionHeadBox__WEBPACK_IMPORTED_MODULE_8__["getAttentionInfo"])(focusAtt, heads, "right", token);
        this.vizs.leftHeads.options.offset = this.uiConf.offset;
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
        console.log("now: ", this.uiConf.offset);
        this.vizs.tokens.left.options.offset = this.uiConf.offset;
        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }
    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads());
        this.vizs.attentionSvg.options.offset = this.uiConf.offset;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL215TWFpbi50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT81NjY2Iiwid2VicGFjazovLy9ub2RlLWZldGNoIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3N0cmluZ19kZWNvZGVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQjs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBTyxNQUFNLE9BQU8sR0FBRztJQUN0QiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFF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QUFlLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQW1DLFFBQVE7SUFDL0MsQ0FBQzs7QUE3Q00sNEJBQWtCLEdBQW1CO0lBQ3hDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7SUFDbkksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTztRQUN0SyxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTTtRQUNwSixLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDbEosTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUNyQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVB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SyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6Q0g7QUFBQTtBQUFBLDRIQUE0SDtBQUNySCxNQUFNLFNBQVMsR0FBRztJQUNyQixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUs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REFBc0Q7UUFDdEQsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7SUFFRixNQUFNO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7QUM3L0JELGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdHMvbWFpbi50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZXhCRVJULmh0bWxcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGNvbnN0IERlbW9BUEkgPSB7XG5cdFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyY1wiOiBcIjUyN2ZkYWM0NDA0YmY5YmE1NDEyNjQ2YWQ0NTc5NTBkNDQ4Mjc2MmMuanNvblwiLFxuXHRcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTdcIjogXCI1OWI0YWNjMDVmMWQ4MGVjYmVmMWMyM2VhZjJmZGExMDIyMmNiMjU3Lmpzb25cIixcblx0XCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4XCI6IFwiMzU0OTkyZjJlZTIzNjYwNGM4NzRhM2E2MjdlNDA0MmJjNjg1ODZmOC5qc29uXCIsXG5cdFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3NlwiOiBcIjUwMTVlNWEzMTg2MDVjZWE2ODA4NTM4ZGIxNGQ4YWYxNjg4N2IwNzYuanNvblwiLFxuXHRcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTlcIjogXCIzYzlhYTE1MmFjODk0MzA2MDQwNzAzYzUwOTU1OTliMTk5Y2FkMWE5Lmpzb25cIixcblx0XCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyXCI6IFwiMGZlY2UwYzg3MjAzZTgzYWZkMTY3NGI1YWVlYmFlZDBmNWZhMDU2Mi5qc29uXCIsXG5cdFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZlwiOiBcImQzYTBlNDA0NWVhNDhhMjc1Y2U1MWE2YWYwMjgwNDA2MDYwZjQ3Y2YuanNvblwiLFxuXHRcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTdcIjogXCJlZDk4ZDc1MWFiOWI2YTRhMGU4NWU5MzMyYjQyMGE0YzEzYWI3NWE3Lmpzb25cIixcblx0XCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2XCI6IFwiMGQyNGFlMDhlZWIyMWFmODJjNjY2Y2JlMmFjMDY0NmVkOWM5ZDlhNi5qc29uXCIsXG5cdFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NFwiOiBcIjZkZTA1M2IzYjhhNGQ5MDQ3ODBjOWE2NTQ1YTBhNjNjYmJiMmIxNDQuanNvblwiLFxuXHRcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjdcIjogXCJmNjhkZjIzMzY1ZmFmMDJmOWMwMTQzOTM0NWJlZDY2OTM2ZWQ4NWY3Lmpzb25cIixcblx0XCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyXCI6IFwiNDYwOGNiNGZjMDBiNDNmZmY2ODA5OGU4NTY3NmZhZDU3Yzk0MGYwMi5qc29uXCIsXG5cdFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0YlwiOiBcImRmY2Q1MDE0NmRhOGQ4MTIyYTVhNTdjMmEzYzBhYmNlNTAzYmE5NGIuanNvblwiLFxuXHRcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWNcIjogXCIzNGM4NjI5ZDQyNjVkN2YzZWRlM2FkZDQyZjM2MTNiMjA1ZDk0YzFjLmpzb25cIixcblx0XCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmXCI6IFwiZGIyZGMyNTJhNzg2NjUwZjY0Mzk1YTBmNWQxODFjMDgzMTAxOWNiZi5qc29uXCIsXG5cdFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMVwiOiBcImRhNDU5N2Q3M2Q0NDQ3NTdiZGU5MTc2Mzk1YmYzMWFhZDMzMzQxMzEuanNvblwiLFxuXHRcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTBcIjogXCJhMmViZjEzZDNjOTM3MWZjZjczOGI5NjUxODI0ZTJjM2NkMWZmOGUwLmpzb25cIixcblx0XCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhXCI6IFwiYmM0MTkyMzhjMjBkZDFjNWNmZTFjYzQyN2FiM2QxZTMxMzUzNDM2YS5qc29uXCIsXG5cdFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4N1wiOiBcIjg0ZThiZTlmZTU2MmZiZDA0ODdjMDNiNTVjYzZiNGYzZmI4Y2Q3ODcuanNvblwiLFxuXHRcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzNcIjogXCIyMDdlNmM5OGEwZTE0OWRjN2U2ZWQ2NzExODI5NmQ4YThjODliM2MzLmpzb25cIixcblx0XCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhXCI6IFwiYzE4NWE5MzQ5YmE1YTMyNWFjZjg1MTRlOWI1MGRlNzEyODA0ODhhYS5qc29uXCIsXG5cdFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNlwiOiBcImRkZTQ4MWE1Y2QzNjY3YWU4YzZjNWI1ZTE0MjFkYzg4MmI2YTJkZDYuanNvblwiLFxuXHRcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDhcIjogXCJmNjNlMTRlOTM1ZDk4OTQ4YjRhMGViYzk2NjM0MDBkYmU0MjYzMzQ4Lmpzb25cIixcblx0XCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyXCI6IFwiNzliOTY0ZDFhNWM4NTRkZWFlYWNlMjY4MTNmOTY5OTRiYjgyYWVmMi5qc29uXCIsXG5cdFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxN1wiOiBcIjNiMTE2OGVjOTZhZjAwYzRlODg3MzQxZTkyYTg3OGY4NzUyZTFkMTcuanNvblwiLFxuXHRcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDNcIjogXCI4YzQ2MmJjMjk4ZTMxODNlZmE4ZDllODYzZTI1ZWE1ZDg5ODA2YjAzLmpzb25cIixcblx0XCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2XCI6IFwiOTkzOTY5OGVkYWEyNWJiYWU5ZWUxZDI3ODY0ZTY5OGYxMzk2M2YwNi5qc29uXCIsXG5cdFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNlwiOiBcIjczZjFlZTQ5N2IzZTdiNjM5NGU1NTcyNmIxOGRiZjlkNTE0ZGNlYTYuanNvblwiLFxuXHRcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWVcIjogXCJjN2NkYjgwYmY4MTNlMWRlMjQxMjYwYWVkZTZjZDI4ZWE2NWNjZmFlLmpzb25cIixcblx0XCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3XCI6IFwiYTk2ZmVkMTZlYWIxYmY2ZDA4ZTQwMDFjMDI4OTRkOWM1NDlkZjYyNy5qc29uXCIsXG5cdFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1N1wiOiBcImE4ZWFmMTBkYThkYzc1YjQyZTcyYmRjNzA5MTc3NjI0N2ZmZjk2NTcuanNvblwiLFxuXHRcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjJcIjogXCJhODE5NGYyMzA5ZTFjNzFlOTc3ZWY4ZDNiZTU3MmFlMDBiMGU5MWYyLmpzb25cIixcblx0XCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhXCI6IFwiMmY0YTE1YjY2ZmNmYjBjN2E0M2EzM2Q5Mzc2Mzk5MDI4MmJmYzVhYS5qc29uXCIsXG5cdFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0NlwiOiBcIjA2MDk1Y2VmNGE3ZjQ5YjE4ZjE1M2U2N2UzM2ZkZGI4MzFhMTViNDYuanNvblwiLFxuXHRcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTVcIjogXCI0YzkzZWFmMGMwY2U1NmYxZTVkNTEwMDkxNmFiZjRkMzFlYjM1ZGE1Lmpzb25cIixcblx0XCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiXCI6IFwiZjhjNDBjNjdjODUxYTA0ODlmNzQ4MGM5OWIzMWI0ZjYwNmMwMTg0Yi5qc29uXCIsXG5cdFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZFwiOiBcImU0ZTcxZjZlYTU3YmUyZTA1ZDYyYWYwODI1YTgwZjE0NDQyMWUwMmQuanNvblwiLFxuXHRcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2NcIjogXCJlN2Q5ZDUyMDg4Mjc4MmM3Y2ZiZmZlYWRhYWYyMmI0YzBhMDgxYzdjLmpzb25cIixcblx0XCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiXCI6IFwiNGFhNGViMTBlYWQ0NGEwYTNjMmRkOTU0MDcwMTdhOTI4MTM4YjMyYi5qc29uXCIsXG5cdFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMlwiOiBcImRhMzFkNTVlZThjYjAxYmNkYjI5NTcyY2I5MDJiOGU3OTk2ODViZTIuanNvblwiLFxuXHRcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTJcIjogXCJlNDI3MTgxZmIwMmJiZjE5ZjdiYmI2NWM5ZDkzODlkMmQ5YTQxODEyLmpzb25cIixcblx0XCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2XCI6IFwiYmJjYWI5ZTFjYTYwYTg1MWZkN2VjZmRhODBkZTQ3MGFmYTc0MDkzNi5qc29uXCIsXG5cdFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3NlwiOiBcIjRkZTk2YWEyMDUwNzY4NjNjOWZiNGVhOTllMmJhODZmYTEzMWZmNzYuanNvblwiLFxuXHRcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTlcIjogXCJlNGM2ZDFiMzAwNGUzY2RkMGM4NzlhNTk2MzliNWNlOTkzMjA3YTk5Lmpzb25cIixcblx0XCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhXCI6IFwiZmJjOWRhNzliOGJmMzlkYzk5OTg0MDg1MjY3NDFmODExYTEzZTZhYS5qc29uXCIsXG5cdFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOVwiOiBcIjUyODU1NGVlNGU2MTVjNjEyODdjNDBlZDlhMmFlYTY5YjkxYWY2YzkuanNvblwiLFxuXHRcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTRcIjogXCI1ZTcwNzNjMDNjMzdkMTk4MjZiMmZiNGE2NTk5Y2NhZWRkZTQ5MmU0Lmpzb25cIixcblx0XCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2XCI6IFwiNzFjNGE4ODZjZGVlNThhMzcxYWUyMTE1MzExYjE1MGU4NGU1NTVmNi5qc29uXCIsXG5cdFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjM1wiOiBcIjRiY2UwOTcwYTQ2NWZlOWI5NjMwNWUwNmFmMTljNWQ5Yzk3ZDdjYzMuanNvblwiLFxuXHRcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjdcIjogXCJlZmRiMWYwYTcwZjIyZjgwZmYzY2VhMGNiNzliZWM3MTdmYzhiNmY3Lmpzb25cIixcblx0XCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5XCI6IFwiMTc0YzZmNzg2ZDEzOWNlMTExMzgxMDQ1ZDYwZDI1NjgyYTE2OGI5OS5qc29uXCIsXG5cdFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNFwiOiBcImE4YzIzZTg4ZDZjYTZkNGVmZDI2NDZiMDc0MmMwZmEzMmRiZDU1YTQuanNvblwiLFxuXHRcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzhcIjogXCJmNjk0OWMyODc1MmRlMzVhODcwZWZkZTMwODU4NWFjZDQ2YTI1Mjc4Lmpzb25cIixcblx0XCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhXCI6IFwiYzFiZGI4Y2JhZmQ1ZDVkOGY2YmRhMmI0ZGIxNmI2YmMyZDYyZTE4YS5qc29uXCIsXG5cdFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNlwiOiBcIjJiODFhOGY2MDIyNTFjZjQwYjQ2ODJjOGNlZGIzOTY2YjkxMmQ3YzYuanNvblwiLFxuXHRcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmZcIjogXCI4Zjk0ZTg0M2QyNTEwMDQ3ZmQxYWY0NmYyNDlhZmU4N2ZmNDljYzJmLmpzb25cIixcblx0XCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwXCI6IFwiNGUzZGRiNTE1NTBjMDNjNjRmZGJlNTU5MjUyNjY2NTEwMGQzMjkzMC5qc29uXCIsXG5cdFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwY1wiOiBcImY4MTZiMjNhZjlhYTQzMTJjODBlNjY4YTY2YTE1NmM5MzRjYjMzMGMuanNvblwiLFxuXHRcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmRcIjogXCIyZmUwNWE5MTFhNTc0YjhhNmQ0YjA1ZWIxM2RiOWUwOWFhYWNhZDJkLmpzb25cIixcblx0XCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmXCI6IFwiNWM3MTQ5NjcyNjM5NWFhYTRkMGE2NTM3M2ZkMTY1MWI1YTBlNmIxZi5qc29uXCIsXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHsgZGVidWcgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IFRva2VuRGlzcGxheSB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4vcmVzcG9uc2VzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IERlbW9BUEkgfSBmcm9tICcuL2RlbW9BUEknXG5pbXBvcnQgKiBhcyBoYXNoIGZyb20gJ29iamVjdC1oYXNoJ1xuaW1wb3J0IHsgbWFrZVVybCwgdG9QYXlsb2FkIH0gZnJvbSAnLi4vZXRjL2FwaUhlbHBlcnMnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1VSTEhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgZW1wdHlUb2tlbkRpc3BsYXkgPSBuZXcgVG9rZW5EaXNwbGF5KClcblxuY29uc3QgYmFzZXVybCA9IFVSTEhhbmRsZXIuYmFzaWNVUkwoKVxuXG4vKipcbiAqIEEgcmV3cml0ZSBvZiBgZDMtZmV0Y2hgJ3MgYGQzLmpzb25gIGNhbGxiYWNrLiBJZiBhbiBhcGkgY2FsbCBmYWlscywgbWFrZSBhIGJhY2t1cCBjYWxsIHRvIHNwZWNpZmllZCB1cmwgYW5kIHBheWxvYWQsIGlmIHNwZWNpZmllZC5cbiAqIFxuICogQHBhcmFtIHJlc3BvbnNlIE9iamVjdCBleHBlY3RlZCBhdCB0aW1lIG9mIGNhbGxiYWNrXG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IG9mIGZhaWxcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIG1ha2luZyBhIHBvc3QgcmVxdWVzdFxuICovXG5mdW5jdGlvbiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBpZiAoYmFja3VwVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1RBVElDIEZJTEUgTk9UIEZPVU5EXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZCkudGhlbihyZXNwb25zZUpzb24pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbn1cblxuLyoqXG4gKiBDaGVjayBmaXJzdCBpZiB0aGUgaW5mb3JtYXRpb24gYmVpbmcgc2VudCBleGlzdHMgaW4gYSBzdGF0aWMgZGVtbyBmaWxlLiBJZiBpdCBkb2VzLCBzZW5kIHRoYXQuIE90aGVyd2lzZSwgbWFrZSBhIG5vcm1hbCBjYWxsIHRvIHRoZSBzZXJ2ZXIuXG4gKiBcbiAqIEBwYXJhbSB0b1NlbmQgVGhlIHBhY2tldCBvZiBpbmZvcm1hdGlvbiB0byBzZW5kIHRvIGFuIEFQSSBlbmRwb2ludFxuICogQHBhcmFtIGJhY2t1cFVybCBCYWNrdXAgdXJsIGluIHRoZSBldmVudCB0aGF0IHRoZSBkZW1vIGZpbGUgaXMgbm90IGZvdW5kXG4gKiBAcGFyYW0gYmFja3VwUGF5bG9hZCBCYWNrdXAgcGF5bG9hZCBpZiBkZW1vIGZpbGUgbm90IGZvdW5kLCBmb3IgUE9TVCByZXF1ZXN0cyBvbmx5XG4gKi9cbmZ1bmN0aW9uIGNoZWNrRGVtb0FQSSh0b1NlbmQsIGJhY2t1cFVybCA9IG51bGwsIGJhY2t1cFBheWxvYWQgPSBudWxsKSB7XG4gICAgY29uc3QgaHNoID0gaGFzaC5zaGExKHRvU2VuZCk7XG4gICAgY29uc29sZS5sb2coXCJDSEVDS0lORyBERU1PQVBJOiBcIiArIGhzaCk7XG4gICAgaWYgKERlbW9BUEkuaGFzT3duUHJvcGVydHkoaHNoKSkge1xuICAgICAgICAvLyBSZWxpZXMgb24gYSBzeW1ib2xpYyBsaW5rIGJlaW5nIHByZXNlbnQgaW4gdGhlIGRpc3QgZm9sZGVyIHRvIHRoZSBkZW1vIGZvbGRlclxuICAgICAgICBjb25zdCBwYXRoID0gJy4vZGVtby8nICsgRGVtb0FQSVtoc2hdXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIFNFTkRJTkcgU1RBVElDOiBcIiwgcGF0aCk7XG4gICAgICAgIGNvbnN0IGZvbGxvdyA9IChyZXNwb25zZSkgPT4gcmVzcG9uc2VKc29uKHJlc3BvbnNlLCBiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG4gICAgICAgIHJldHVybiBmZXRjaChwYXRoKS50aGVuKGZvbGxvdylcbiAgICB9XG4gICAgcmV0dXJuIGQzLmpzb24oYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBUEkge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmJhc2VVUkwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVVJMID0gYmFzZXVybCArICcvYXBpJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vZGVsRGV0YWlscyhtb2RlbDogc3RyaW5nLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuTW9kZWxEZXRhaWxSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvZ2V0LW1vZGVsLWRldGFpbHNcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TWV0YUF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG4gICAgICAgICAgICBsYXllcjogbGF5ZXJcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArIFwiL2F0dGVuZC13aXRoLW1ldGFcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkaXNwbGF5IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhbHJlYWR5IHBhcnNlZCBmcm9tIHRoZSBwYXNzZWQgc2VudGVuY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgVGhlIGRpc3BsYXllZCB0b2tlbnMgaW4gdGhlIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIHNlbnRlbmNlQSBUaGUgb3JpZ2luYWwgc2VudGVuY2UgdGhhdCBsZWQgdG8gdGhlIHRva2VuaXplZCBpbmZvcm1hdGlvbiBpbiBgYWBcbiAgICAgKiBAcGFyYW0gbGF5ZXIgV2hpY2ggbGF5ZXIgdG8gc2VhcmNoIGF0XG4gICAgICogQHBhcmFtIGhhc2hPYmogSWYgbm90IG51bGwsIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVzcG9uc2VzIGludG8gdGhlIHBhc3NlZCBvYmplY3QuIFVzZWQgZm9yIGNyZWF0aW5nIGRlbW9zLlxuICAgICAqL1xuICAgIHVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgdG9rZW5zOiBUb2tlbkRpc3BsYXksIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgdG9rZW5zOiBSLm1hcChSLnByb3AoJ3RleHQnKSwgdG9rZW5zLnRva2VuRGF0YSksXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG5cbiAgICAgICAgICAgIC8vIEVtcHR5IG1hc2tzIG5lZWQgdG8gYmUgc2VudCBhcyBhIG51bWJlciwgdW5mb3J0dW5hdGVseS4gQ2hvb3NpbmcgLTEgZm9yIHRoaXNcbiAgICAgICAgICAgIG1hc2s6IHRva2Vucy5tYXNrSW5kcy5sZW5ndGggPyB0b2tlbnMubWFza0luZHMgOiBbLTFdLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3VwZGF0ZS1tYXNrJyk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0b1BheWxvYWQodG9TZW5kKVxuXG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmogZm9yIGRlbW8gcHVycG9zZXNcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCwgcGF5bG9hZCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIFBPU1QgXCIgKyB1cmwsIHBheWxvYWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwsIHBheWxvYWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGVtYmVkZGluZyBFbWJlZGRpbmcgb2YgdGhlIHdvcmRcbiAgICAgKiBAcGFyYW0gbGF5ZXIgSW4gdGhlIGwndGggbGF5ZXJcbiAgICAgKiBAcGFyYW0gayBob3cgbWFueSByZXN1bHRzIHRvIHJldHJpZXZlXG4gICAgICovXG4gICAgZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGVtYmVkZGluZzogbnVtYmVyW10sIGxheWVyOiBudW1iZXIsIGhlYWRzOiBudW1iZXJbXSwgayA9IDEwLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgY29ycHVzOiBjb3JwdXMsXG4gICAgICAgICAgICBlbWJlZGRpbmc6IGVtYmVkZGluZyxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWVtYmVkZGluZ3MnKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRvUGF5bG9hZCh0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICBnZXROZWFyZXN0Q29udGV4dHMobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGNvbnRleHQ6IG51bWJlcltdLCBsYXllcjogbnVtYmVyLCBoZWFkczogbnVtYmVyW10sIGsgPSAxMCwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIGNvcnB1czogY29ycHVzLFxuICAgICAgICAgICAgZW1iZWRkaW5nOiBjb250ZXh0LFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgaGVhZHM6IGhlYWRzLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy9rLW5lYXJlc3QtY29udGV4dHMnKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRvUGF5bG9hZCh0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybCwgcGF5bG9hZClcbiAgICB9XG59O1xuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyB4XyBmcm9tICcuLi9ldGMvX1Rvb2xzJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcblxuLyoqXG4gKiBOb3RlczpcbiAqIFxuICogLSBBbHNvIGVuY2Fwc3VsYXRlIHRoZSBDTFMvU0VQIGluZm8gdnMuIG5vIENMUy9TRVAgaW5mb1xuICogLSBXaGVuIGxheWVyIGZvcm1hdCBjaGFuZ2VzIGZyb20gbGlzdCwgZHJvcCB0aGUgaW5kZXggaW50byBjb25mLmxheWVyXG4gKi9cblxuY29uc3QgYnBlVG9rZW5zID0gW1wiW0NMU11cIiwgXCJbU0VQXVwiLCBcIjxzPlwiLCBcIjwvcz5cIiwgXCI8fGVuZG9mdGV4dHw+XCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7U3BhY3lJbmZvfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtpbml0WmVyb30gZnJvbSAnLi4vZXRjL3hyYW1kYSdcblxuLy8gSWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0cnkgdG8gbWFrZSBsb3dlcmNhc2VcbmNvbnN0IG1ha2VTdHJpbmdMb3dlciA9IFIuaWZFbHNlKFIuaXMoU3RyaW5nKSwgUi50b0xvd2VyLCBSLmlkZW50aXR5KVxuXG5mdW5jdGlvbiBhcmdNYXgoYXJyYXk6bnVtYmVyW10pIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGFycmF5LCAoeCwgaSkgPT4gW3gsIGldKS5yZWR1Y2UoKHIsIGEpID0+IChhWzBdID4gclswXSA/IGEgOiByKSlbMV07XG59XG5cblxuZXhwb3J0IGNsYXNzIEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB7XG4gICAgZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW11cblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHNob3dOZXh0OiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdLCBzaG93TmV4dD1mYWxzZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucy5zaG93TmV4dCA9IHNob3dOZXh0XG4gICAgfVxuXG4gICAgZ2V0IG1hdGNoQXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93TmV4dCgpID8gXCJtYXRjaGVkX2F0dF9wbHVzXzFcIiA6IFwibWF0Y2hlZF9hdHRcIlxuICAgIH1cblxuICAgIGdldCBtYXRjaElkeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd05leHQoKSA/IFwibmV4dF9pbmRleFwiIDogXCJpbmRleFwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHBvc2l0aW9uIGluZm8gaW50ZXJwcmV0YWJsZSBieSB0aGUgaGlzdG9ncmFtXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvdW50T2JqIFJlcHJlc2VudHMgdGhlIGluZm9ycm1hdGlvbiB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIGhpc3RvZ3JhbVxuICAgICAqL1xuICAgIGNvdW50UG9zSW5mbygpIHtcbiAgICAgICAgY29uc3QgYXR0T2Zmc2V0cyA9IHRoaXMuZGF0YS5tYXAoKGQsaSkgPT4gK2RbdGhpcy5tYXRjaEF0dF0ub3V0Lm9mZnNldF90b19tYXgpXG5cbiAgICAgICAgY29uc3QgY3RPYmogPSB7XG4gICAgICAgICAgICBvZmZzZXQ6IGluaXRaZXJvKGF0dE9mZnNldHMpXG4gICAgICAgIH1cblxuICAgICAgICBhdHRPZmZzZXRzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdE9iaikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgICAgICAgIGN0T2JqW2tdW3ZdICs9IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGN0T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXhBdHRLZXlzKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgLy8gVGhlIGtleXMgaW4gdGhlIGJlbG93IG9iamVjdCBkaWN0YXRlIHdoYXQgd2UgY291bnRcbiAgICAgICAgY29uc3QgY291bnRPYmogPSB7XG4gICAgICAgICAgICBwb3M6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmRlcCksXG4gICAgICAgICAgICBpc19lbnQ6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25mdXNpbmc6IFNob3cgTUFUQ0hFRCBXT1JEIGF0dGVudGlvbnMsIGJ1dCBORVhUIFdPUkQgZGlzdHJpYnV0aW9uXG4gICAgICAgIGNvbnN0IGdldE1heFRva2VuID0gKGQ6IHRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnNbYXJnTWF4KGQubWF0Y2hlZF9hdHQub3V0LmF0dCldXG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heE1hdGNoID0gZ2V0TWF4VG9rZW4oZClcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXhNYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBuZXdDb3VudE9iaiA9IE9iamVjdC5hc3NpZ24oY291bnRPYmosIHRoaXMuY291bnRQb3NJbmZvKCkpXG4gICAgICAgIHJldHVybiBuZXdDb3VudE9ialxuICAgIH1cblxuICAgIGNvdW50TWF0Y2hlZEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAvLyBDb25mdXNpbmc6IFNob3cgTUFUQ0hFRCBXT1JEIGF0dGVudGlvbnMsIGJ1dCBORVhUIFdPUkQgZGlzdHJpYnV0aW9uXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGQudG9rZW5zW2RbdGhpcy5tYXRjaElkeF0gKyBpbmRleE9mZnNldF1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRPYmpcbiAgICB9XG5cbiAgICBnZXRNYXRjaGVkSGlzdG9ncmFtKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudE1hdGNoZWRLZXlzKGluZGV4T2Zmc2V0KVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIHRvdGFsSGlzdClcblxuICAgICAgICByZXR1cm4gbm9uWmVyb1xuICAgIH1cblxuICAgIGdldE1heEF0dEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgLy8gY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudFBvc0luZm8oKVxuICAgICAgICBjb25zdCBuZXdIaXN0ID0gdGhpcy5jb3VudE1heEF0dEtleXMoKVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIG5ld0hpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG5cbiAgICBzaG93TmV4dCgpOiBib29sZWFuXG4gICAgc2hvd05leHQodjpib29sZWFuKTogdGhpc1xuICAgIHNob3dOZXh0KHY/KSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvd05leHRcblxuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd05leHQgPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogVGhlIG9yaWdpbmFsIHRva2VucywgYW5kIHRoZSBpbmRleGVzIHRoYXQgbmVlZCB0byBiZSBtYXNrZWRcbiAqL1xuIGNvbnN0IGVtcHR5RnVsbFJlc3BvbnNlOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10gPSBbe1xuICAgICB0ZXh0OiAnW1NFUF0nLFxuICAgICBlbWJlZGRpbmdzOiBbXSxcbiAgICAgY29udGV4dHM6IFtdLFxuICAgICBicGVfdG9rZW46ICcnLFxuICAgICBicGVfcG9zOiAnJyxcbiAgICAgYnBlX2RlcDogJycsXG4gICAgIGJwZV9pc19lbnQ6IG51bGwsXG4gICAgIHRvcGtfd29yZHM6IFtdLFxuICAgICB0b3BrX3Byb2JzOiBbXVxuIH1dXG5cbmV4cG9ydCBjbGFzcyBUb2tlbkRpc3BsYXkgIHtcbiAgICB0b2tlbkRhdGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdXG4gICAgbWFza0luZHM6bnVtYmVyW11cblxuICAgIGNvbnN0cnVjdG9yKHRva2Vucz1lbXB0eUZ1bGxSZXNwb25zZSwgbWFza0luZHM9W10pe1xuICAgICAgICB0aGlzLnRva2VuRGF0YSA9IHRva2VucztcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IG1hc2tJbmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2ggaWR4IHRvIHRoZSBtYXNrIGlkeCBsaXN0IGluIG9yZGVyIGZyb20gc21hbGxlc3QgdG8gbGFyZ2VzdFxuICAgICAqL1xuICAgIG1hc2sodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgeF8ub3JkZXJlZEluc2VydF8odGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsfSBhbHJlYWR5IGluIG1hc2tJbmRzIWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXNrSW5kcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLm1hc2sodmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVubWFza2luZyAke3ZhbH1gKTtcbiAgICAgICAgICAgIHRoaXMudW5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFzayh2YWwpIHtcbiAgICAgICAgXy5wdWxsKHRoaXMubWFza0luZHMsIHZhbCk7XG4gICAgfVxuXG4gICAgcmVzZXRNYXNrKCkge1xuICAgICAgICB0aGlzLm1hc2tJbmRzID0gW107XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbmNhdChvdGhlcjogVG9rZW5EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IF8uY29uY2F0KHRoaXMudG9rZW5EYXRhLCBvdGhlci50b2tlbkRhdGEpO1xuICAgICAgICBjb25zdCBuZXdNYXNrID0gXy5jb25jYXQodGhpcy5tYXNrSW5kcywgb3RoZXIubWFza0luZHMubWFwKHggPT4geCArIHRoaXMubGVuZ3RoKCkpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbkRpc3BsYXkobmV3VG9rZW5zLCBuZXdNYXNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbldyYXBwZXIge1xuICAgIGE6IFRva2VuRGlzcGxheVxuXG4gICAgY29uc3RydWN0b3Iocjp0cC5BdHRlbnRpb25SZXNwb25zZSl7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlc3BvbnNlKHIpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZyb21SZXNwb25zZShyOnRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHRva2Vuc0EgPSByLmFhLmxlZnQ7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUNvbXBvbmVudHModG9rZW5zQSwgW10pXG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbUNvbXBvbmVudHMoYTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10sIG1hc2tBOm51bWJlcltdKXtcbiAgICAgICAgdGhpcy5hID0gbmV3IFRva2VuRGlzcGxheShhLCBtYXNrQSlcbiAgICB9XG5cbiAgICB1cGRhdGVUb2tlbnMocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZGVzaXJlZEtleXMgPSBbJ2NvbnRleHRzJywgJ2VtYmVkZGluZ3MnLCAndG9wa19wcm9icycsICd0b3BrX3dvcmRzJ11cbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gci5hYS5sZWZ0Lm1hcCh2ID0+IFIucGljayhkZXNpcmVkS2V5cywgdikpXG5cbiAgICAgICAgY29uc3QgcGFpcnMgPSBSLnppcCh0aGlzLmEudG9rZW5EYXRhLCBuZXdUb2tlbnMpXG5cbiAgICAgICAgcGFpcnMuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZFsxXSkubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgIGRbMF1ba10gPSBkWzFdW2tdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFzayB0aGUgYXBwcm9wcmlhdGUgc2VudGVuY2UgYXQgdGhlIGluZGV4IGluZGljYXRlZFxuICAgICAqL1xuICAgIG1hc2soc0lEOnRwLlRva2VuT3B0aW9ucywgaWR4Om51bWJlcil7XG4gICAgICAgIHRoaXNbc0lEXS5tYXNrKGlkeClcbiAgICAgICAgY29uc3Qgb3B0cyA9IFtcImFcIiwgXCJiXCJdXG4gICAgICAgIGNvbnN0IE5hID0gdGhpcy5hLmxlbmd0aCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVUb0xldHRlcihzaWRlOnRwLlNpZGVPcHRpb25zLCBhdHlwZTp0cC5TZW50ZW5jZU9wdGlvbnMpe1xuICAgIC8vIGNvbnN0IGF0eXBlID0gY29uZi5hdHRUeXBlO1xuICAgIGlmIChhdHlwZSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcImFsbFwiXG4gICAgfVxuICAgIGNvbnN0IG91dCA9IHNpZGUgPT0gXCJsZWZ0XCIgPyBhdHlwZVswXSA6IGF0eXBlWzFdIC8vIE5vIHR5cGUgY2hlY2tpbmc/XG4gICAgcmV0dXJuIG91dFxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIHN0YXRpYyB0cmFuc2xhdGUoe3gsIHl9KTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZyk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRycyh7XG4gICAgICAgICAgICBjbGFzczogY2xhc3NlcyxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFNWRy50cmFuc2xhdGUocG9zKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRycyh7eDogMCwgeTogLTIwLCBjbGFzczogY2xhc3Nlc30pXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHRwIGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge0NPTE9SUzIwMH0gZnJvbSAnLi4vZXRjL2NvbG9ycycgXG5cbmV4cG9ydCBjbGFzcyBTcGFjeUluZm8ge1xuICAgIGNvbG9yU2NhbGU6dHAuQ29sb3JNZXRhU2NhbGVcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IHRoaXMuY3JlYXRlQ29sb3JTY2FsZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgRW5nbGlzaE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ3B1bmN0JywgJ3N5bScsICd4JywgJ2FkaicsICd2ZXJiJywgJ2NvbmonLCAnbnVtJywgJ2V0JywgJ2FkdicsICd4JywgJ2FkcCcsICdub3VuJywgJ3Byb3BuJywgJ3BhcnQnLCAncHJvbicsICdzcGFjZScsICdpbnRqJ10sXG4gICAgICAgIGRlcDogWydyb290JywgJ1JPT1QnLCAnYWNsJywgJ2Fjb21wJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhZ2VudCcsICdhbW9kJywgJ2FwcG9zJywgJ2F0dHInLCAnYXV4JywgJ2F1eHBhc3MnLCAnY2FzZScsICdjYycsICdjY29tcCcsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsIFxuICAgICAgICAnY3N1YmpwYXNzJywgJ2RhdGl2ZScsICdkZXAnLCAnZGV0JywgJ2RvYmonLCAnZXhwbCcsICdpbnRqJywgJ21hcmsnLCAnbWV0YScsICduZWcnLCAnbm4nLCAnbm91bm1vZCcsICducG1vZCcsICduc3ViaicsICduc3VianBhc3MnLCAnbnVtbW9kJywgJ29wcmQnLCBcbiAgICAgICAgJ29iaicsICdvYmwnLCAncGFyYXRheGlzJywgJ3Bjb21wJywgJ3BvYmonLCAncG9zcycsICdwcmVjb25qJywgJ3ByZWRldCcsICdwcmVwJywgJ3BydCcsICdwdW5jdCcsICdxdWFudG1vZCcsICdyZWxjbCcsICdyb290JywgJ3hjb21wJywgJ25wYWR2bW9kJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic29sZXRlLiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IGlzIGluY2x1ZGVkIHdoZW4gdHJhaW5lZCBvbiB0aGUgdW5pdmVyc2FsIGNvcnB1c1xuICAgICAqL1xuICAgIHN0YXRpYyBVbml2ZXJzYWxNZXRhT3B0aW9uczogdHAuTWV0YU9wdGlvbnMgPSB7XG4gICAgICAgIHBvczogWydhZGonLCAnYWRwJywgJ2FkdicsICdhdXgnLCAnY29uaicsICdjY29uaicsICdkZXQnLCAnaW50aicsICdub3VuJywgJ251bScsICdwYXJ0JywgJ3Byb24nLCAncHJvcG4nLCAncHVuY3QnLCAnc2NvbmonLCAnc3ltJywgJ3ZlcmInLCAneCcsICdzcGFjZSddLFxuICAgICAgICBkZXA6IFsnYWNsJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhbW9kJywgJ2FwcG9zJywgJ2F1eCcsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NsZicsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsICdkZXAnLCAnZGV0JywgJ2Rpc2NvdXJzZScsIFxuICAgICAgICAgICAgICAgICdkaXNsb2NhdGVkJywgJ2V4cGwnLCAnZml4ZWQnLCAnZmxhdCcsICdnb2Vzd2l0aCcsICdpb2JqJywgJ2xpc3QnLCAnbWFyaycsICdubW9kJywgJ25zdWJqJywgJ251bW1vZCcsICdvYmonLCAnb2JsJywgJ29ycGhhbicsICdwYXJhdGF4aXMnLCAncHVuY3QnLCAncmVwYXJhbmR1bScsIFxuICAgICAgICAgICAgICAgICdyb290JywgJ3ZvY2F0aXZlJywgJ3hjb21wJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIHN0YXRpYyBUb3RhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBSLnVuaW9uKFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMucG9zLCBTcGFjeUluZm8uVW5pdmVyc2FsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgZGVwOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmRlcCxcbiAgICAgICAgaXNfZW50OiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmlzX2VudCxcbiAgICAgICAgZW50czogU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5lbnRzLFxuICAgIH1cblxuICAgIGNyZWF0ZUNvbG9yU2NhbGVzKCk6IHRwLkNvbG9yTWV0YVNjYWxle1xuICAgICAgICBjb25zdCB0b1NjYWxlID0gKGtleXM6IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IFIuemlwT2JqKFIubWFwKFN0cmluZywga2V5cyksIENPTE9SUzIwMC5zbGljZSgwLCBrZXlzLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gayA9PiBSLnByb3BPcihcImJsYWNrXCIsIGssIG9iailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG15Q29sb3JzID0ge1xuICAgICAgICAgICAgcG9zOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICAgICAgZW50czogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5lbnRzKSxcbiAgICAgICAgICAgIG9mZnNldDogZDMuc2NhbGVPcmRpbmFsKCkucmFuZ2UoWydibGFjayddKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDx0cC5Db2xvck1ldGFTY2FsZT48dW5rbm93bj5teUNvbG9yc1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNwYWN5Q29sb3JzID0gbmV3IFNwYWN5SW5mbygpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgVVJMSGFuZGxlciB7XG5cbiAgICBzdGF0aWMgYmFzaWNVUkwoKSB7XG4gICAgICAgIGNvbnN0IHVybF9wYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTIpLmpvaW4oJy8nKTtcblxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICh1cmxfcGF0aC5sZW5ndGggPyB1cmxfcGF0aCA6ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGFsbCBVUkwgcGFyYW1ldGVycyBpbnRvIGEgbWFwLlxuICAgICAqIEByZXR1cm5zIHtNYXB9IHRoZSB1cmwgcGFyYW1ldGVycyBhcyBhIGtleS12YWx1ZSBzdG9yZSAoRVM2IG1hcClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHBhcmFtZXRlcnMoKTogb2JqZWN0IHtcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tOiAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDkwNTUxL3BhcnNlLXF1ZXJ5LXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGNvbnN0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJzLCBcIi0tLSB2YXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSB7fTtcblxuICAgICAgICBjb25zdCBpc0ludCA9IHggPT4gKC9eWzAtOV0rJC8pLnRlc3QoeCk7XG4gICAgICAgIGNvbnN0IGlzRmxvYXQgPSB4ID0+ICgvXlswLTldK1xcLlswLTldKiQvKS50ZXN0KHgpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVDYXN0ID0gdmFsID0+IHtcbiAgICAgICAgICAgIGlmIChpc0ludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGbG9hdCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlOlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFycy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcmF3X3ZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0c1sxXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcmF3X3ZhbHVlLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3X3ZhbHVlID0gcmF3X3ZhbHVlLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyYXdfdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSBpc0FycmF5ID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gcmF3X3ZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IHR5cGVDYXN0KHZhbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IHR5cGVDYXN0KHJhd192YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsUGFyYW1ldGVycztcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFVSTCBzdHJpbmcgZnJvbSBhIG1hcCBvZiB1cmwgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7e319IHVybFBhcmFtZXRlcnMgLSB0aGUgbWFwIG9mIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFVSSSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsU3RyaW5nKHVybFBhcmFtZXRlcnM6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBhdHRyID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtZXRlcnMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdXJsUGFyYW1ldGVyc1trXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB2YWx1ZSA9ICcuLicgKyB2LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICBhdHRyLnB1c2goZW5jb2RlVVJJKGsgKyAnPScgKyB2YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBsZXQgcmVzID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXMgKz0gJz8nICsgYXR0ci5qb2luKCcmJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVSTFBhcmFtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYW55W10sIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgICAgIGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybChjdXJyZW50UGFyYW1zLCBhZGRUb0Jyb3dzZXJIaXN0b3J5KTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBHZW5lcmF0ZXMgYSBrZXktdmFsdWUgbWFwIG9mIGFsbCBVUkwgcGFyYW1zIGFuZCByZXBsYWNlcyByZXBsYWNlS2V5c1xuICAgIC8vICAqIEBwYXJhbSB1cGRhdGVLZXlzXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHVwZGF0ZVVSTFBhcmFtcyh1cGRhdGVLZXlzKSB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgLy8gICAgIE9iamVjdC5rZXlzKHVwZGF0ZUtleXMpLmZvckVhY2goKGspID0+IGN1cnJlbnRQYXJhbXNba10gPSB1cGRhdGVLZXlzW2tdKVxuICAgIC8vICAgICByZXR1cm4gY3VycmVudFBhcmFtcztcbiAgICAvLyB9XG5cblxuICAgIHN0YXRpYyB1cGRhdGVVcmwodXJsUGFyYW1ldGVyczogb2JqZWN0LCBhZGRUb0Jyb3dzZXJIaXN0b3J5ID0gdHJ1ZSkge1xuICAgICAgICBpZiAoYWRkVG9Ccm93c2VySGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHsgcHJlZml4ID0gJycgfSk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfaWRfY291bnRlciArPSAxO1xuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB0aGVfdW5pcXVlX2lkX2NvdW50ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBEM1NlbCA9IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+XG5cbi8qKlxuICogU2VsZWN0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIHNob3VsZCBiZSBzdGF0aWMgbWV0aG9kcyBpbiB0aGUgYmVsb3cgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbCB7XG4gICAgc3RhdGljIHNldFNlbFZpc2libGUgPSAoeDogRDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgIHN0YXRpYyBzZXRWaXNpYmxlID0gKHg6IHN0cmluZykgPT4gU2VsLnNldFNlbFZpc2libGUoZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBzZXRIaWRkZW4gPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgaGlkZUVsZW1lbnQgPSAoaEU6IEQzU2VsKSA9PiBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnfSlcbiAgICBzdGF0aWMgdW5oaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGx9KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvb3NlT2JqZWN0IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIGFzY09yZGVyKG4xLCBuMikge1xuICAgIGlmIChuMSA8IG4yKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAobjEgPiBuMikgeyBcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQge2ZpbmRBbGxJbmRleGVzLCBpbnNlcnRBdF8sIG9yZGVyZWRJbnNlcnRfLCBzZXQyU29ydGVkQXJyYXl9XG5cbi8qKlxuICogRmluZCBhbGwgaW5kZXhlcyB0aGF0IG1hdGNoIGEgcGFydGljdWxhciBwcmVkaWNhdGVcbiAqL1xuZnVuY3Rpb24gZmluZEFsbEluZGV4ZXM8VD4oYXJyYXk6QXJyYXk8VD4sIHByZWRpY2F0ZTooYTpUKSA9PiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIGxldCBmcm9tSW5kZXg9MDtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHdoaWxlIChpICE9IC0xKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpKTtcbiAgICAgICAgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGkrMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIGluc2VydEF0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGluZDpudW1iZXIpOkFycmF5PFQ+IHtcbiAgICBhcnJheS5zcGxpY2UoaW5kLCAwLCB2YWwpO1xuICAgIHJldHVybiBhcnJheVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzZXQgdG8gYW4gb3JkZXJlZCBhcnJheVxuICovXG5mdW5jdGlvbiBzZXQyU29ydGVkQXJyYXk8VD4oaW5wdXQ6U2V0PFQ+KTpBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoYXNjT3JkZXIpXG59XG5cbi8qKlxuICogSW5zZXJ0IGEgdmFsdWUgaW50byBhcnJheSBpbiBzb3J0ZWQgb3JkZXIgSU4gUExBQ0VcbiAqIFxuICogV0FSTklORzogT25seSBoYW5kbGVzIG51bWJlcnMsIHNvcnRlZCBmcm9tIGxlYXN0IHRvIGdyZWF0ZXN0XG4gKiAtIEFzc3VtZXMgYWxyZWFkeSBzb3J0ZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZEluc2VydF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBjb2xkc3RhcnQ9ZmFsc2UpOkFycmF5PFQ+IHtcbiAgICAvLyBSZXNvcnQgYXJyYXkgaWYgZGVzaXJlZFxuICAgIGlmIChjb2xkc3RhcnQpIHtcbiAgICAgICAgYXJyYXkuc29ydChhc2NPcmRlcilcbiAgICB9XG5cbiAgICBjb25zdCBpbmQgPSBfLnNvcnRlZEluZGV4KGFycmF5LCB2YWwpO1xuICAgIHJldHVybiBpbnNlcnRBdF8oYXJyYXksIHZhbCwgaW5kKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmRvbShsZW46bnVtYmVyKXtcbiAgY29uc3QgYTpudW1iZXJbXSA9IG5ldyBBcnJheShsZW4pLmZpbGwoMClcblxuICByZXR1cm4gYS5tYXAoKHgpID0+IHtyZXR1cm4gXy5yYW5kb20oLTUsIDUsIHRydWUpfSlcbn0iLCIvKipcbiAqIENvbnZlcnQgYSBKUyBvYmplY3QgaW50byBHRVQgVVJMIHBhcmFtZXRlcnNcbiAqIFxuICogQHBhcmFtIGJhc2UgQmFzZSBVUkwgYXRvcCB3aGljaCB0byBhZGQgR0VUIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHRvIGluc2VydCBpbnRvIGEgVVJMIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVybChiYXNlOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6c3RyaW5nIHtcbiAgICBpZiAocGFyYW1zKXtcbiAgICAgICAgbGV0IG91dDogc3RyaW5nID0gYmFzZSArIFwiP1wiO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCggayA9PiB7XG4gICAgICAgICAgICBvdXQgKz0gaztcbiAgICAgICAgICAgIG91dCArPSAnPSc7XG4gICAgICAgICAgICBvdXQgKz0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgb3V0ICs9IFwiJlwiO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3V0LnJlcGxhY2UoLyYkL2csIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGluZm9ybWF0aW9uIGluIEdFVCByZXF1ZXN0IGludG8gdGhlIG1lc3NhZ2UgZm9yIGEgUE9TVCByZXF1ZXN0ICAgIFxuICovXG5leHBvcnQgY29uc3QgdG9QYXlsb2FkID0gKHRvU2VuZCkgPT4ge3JldHVybiB7XG4gICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkodG9TZW5kKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG59fSIsIi8vIFtbdmFsLCBpbmRdLCBbdmFsLCBpbmRdLi4uXVxudHlwZSBDb21wRm5JbmQgPSAoYTpudW1iZXJbXSwgYjpudW1iZXJbXSkgPT4gbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRBcnJheSB7XG4gICAgYXJyOiBudW1iZXJbXSxcbiAgICBzb3J0SW5kaWNlczogbnVtYmVyW10sXG59XG5cbi8qKlxuICogQ29waWVzIGFuZCBzb3J0cyBhbiBhcnJheSB3aGlsZSBrZWVwaW5nIHRyYWNrIG9mIHRoZSBpbmRpY2VzLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzb3J0aW5nIG1heCAtPiBtaW4uXG4gKiBcbiAqIEBwYXJhbSBhcnIgLSBBcnJheSB0byBiZSBjb3BpZWQgYW5kIHNvcnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFdpdGhJbmRpY2VzKGFycjpudW1iZXJbXSwgZm4/OkNvbXBGbkluZCk6IFNvcnRBcnJheSB7XG4gICAgLy8gSWYgZm4gaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHNvcnRpbmcgYnkgbWF4IHZhbHVlXG4gICAgaWYgKCFmbikge1xuICAgICAgICBmbiA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV0IG91dDpTb3J0QXJyYXkgPSB7XG4gICAgICAgIGFycjogW10sXG4gICAgICAgIHNvcnRJbmRpY2VzOiBbXVxuICAgIH07XG5cbiAgICBsZXQgaWR4VHJhY2tlcjogbnVtYmVyW11bXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkeFRyYWNrZXJbaV0gPSBbYXJyW2ldLCBpXTtcbiAgICB9XG5cbiAgICBpZHhUcmFja2VyLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgb3V0LnNvcnRJbmRpY2VzLnB1c2goaWR4VHJhY2tlcltqXVsxXSk7XG4gICAgICBvdXQuYXJyW2pdID0gaWR4VHJhY2tlcltqXVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9IiwiLy8gQ29sb3JzIHdlcmUgZ2VuZXJhdGVkIHRvIGJlIGFzIHZpc3VhbGx5IGRpc3RpbmN0IGFzIHBvc3NpYmxlIGJ5OiBodHRwOi8vam5ubm5uLmdpdGh1Yi5pby9jYXRlZ29yeS1jb2xvcnMtY29uc3RyYWluZWQuaHRtbFxuZXhwb3J0IGNvbnN0IENPTE9SUzIwMCA9IFtcbiAgICBcIiMzOTU3ZmZcIiwgXCIjZDNmZTE0XCIsIFwiI2M5MDgwYVwiLCBcIiNmZWM3ZjhcIiwgXCIjMGI3YjNlXCIsIFwiIzBiZjBlOVwiLCBcIiNjMjAzYzhcIiwgXCIjZmQ5YjM5XCIsIFxuICAgIFwiIzg4ODU5M1wiLCBcIiM5MDY0MDdcIiwgXCIjOThiYTdmXCIsIFwiI2ZlNjc5NFwiLCBcIiMxMGIwZmZcIiwgXCIjYWM3YmZmXCIsIFwiI2ZlZTdjMFwiLCBcIiM5NjRjNjNcIixcbiAgICBcIiMxZGE0OWNcIiwgXCIjMGFkODExXCIsIFwiI2JiZDlmZFwiLCBcIiNmZTZjZmVcIiwgXCIjMjk3MTkyXCIsIFwiI2QxYTA5Y1wiLCBcIiM3ODU3OWVcIiwgXCIjODFmZmFkXCIsXG4gICAgXCIjNzM5NDAwXCIsIFwiI2NhNjk0OVwiLCBcIiNkOWJmMDFcIiwgXCIjNjQ2YTU4XCIsIFwiI2Q1MDk3ZVwiLCBcIiNiYjczYTlcIiwgXCIjY2NmNmU5XCIsIFwiIzljYjRiNlwiLFxuICAgIFwiI2I2YTdkNFwiLCBcIiM5ZThjNjJcIiwgXCIjNmU4M2M4XCIsIFwiIzAxYWY2NFwiLCBcIiNhNzFhZmRcIiwgXCIjY2ZlNTg5XCIsIFwiI2Q0Y2NkMVwiLCBcIiNmZDQxMDlcIixcbiAgICBcIiNiZjhmMGVcIiwgXCIjMmY3ODZlXCIsIFwiIzRlZDFhNVwiLCBcIiNkOGJiN2RcIiwgXCIjYTU0NTA5XCIsIFwiIzZhOTI3NlwiLCBcIiNhNDc3N2FcIiwgXCIjZmMxMmM5XCIsXG4gICAgXCIjNjA2ZjE1XCIsIFwiIzNjYzRkOVwiLCBcIiNmMzFjNGVcIiwgXCIjNzM2MTZmXCIsIFwiI2YwOTdjNlwiLCBcIiNmYzg3NzJcIiwgXCIjOTJhNmZlXCIsIFwiIzg3NWI0NFwiLFxuICAgIFwiIzY5OWFiM1wiLCBcIiM5NGJjMTlcIiwgXCIjN2Q1YmYwXCIsIFwiI2QyNGRmZVwiLCBcIiNjODViNzRcIiwgXCIjNjhmZjU3XCIsIFwiI2I2MjM0N1wiLCBcIiM5OTRiOTFcIixcbiAgICBcIiM2NDZiOGNcIiwgXCIjOTc3YWI0XCIsIFwiI2Q2OTRmZFwiLCBcIiNjNGQ1YjVcIiwgXCIjZmRjNGJkXCIsIFwiIzFjYWUwNVwiLCBcIiM3YmQ5NzJcIiwgXCIjZTk3MDBhXCIsXG4gICAgXCIjZDA4ZjVkXCIsIFwiIzhiYjllMVwiLCBcIiNmZGU5NDVcIiwgXCIjYTI5ZDk4XCIsIFwiIzE2ODJmYlwiLCBcIiM5YWQ5ZTBcIiwgXCIjZDZjYWZlXCIsIFwiIzhkODMyOFwiLFxuICAgIFwiI2IwOTFhN1wiLCBcIiM2NDc1NzlcIiwgXCIjMWY4ZDExXCIsIFwiI2U3ZWFmZFwiLCBcIiNiOTY2MGJcIiwgXCIjYTRhNjQ0XCIsIFwiI2ZlYzI0Y1wiLCBcIiNiMTE2OGNcIixcbiAgICBcIiMxODhjYzFcIiwgXCIjN2FiMjk3XCIsIFwiIzQ0NjhhZVwiLCBcIiNjOTQ5YTZcIiwgXCIjZDQ4Mjk1XCIsIFwiI2ViNmRjMlwiLCBcIiNkNWIwY2JcIiwgXCIjZmY5ZmZiXCIsXG4gICAgXCIjZmRiMDgyXCIsIFwiI2FmNGQ0NFwiLCBcIiNhNzU5YzRcIiwgXCIjYTllMDNhXCIsIFwiIzBkOTA2YlwiLCBcIiM5ZWUzYmRcIiwgXCIjNWI4ODQ2XCIsIFwiIzBkODk5NVwiLFxuICAgIFwiI2YyNWM1OFwiLCBcIiM3MGFlNGZcIiwgXCIjODQ3Zjc0XCIsIFwiIzkwOTRiYlwiLCBcIiNmZmUyZjFcIiwgXCIjYTY3MTQ5XCIsIFwiIzkzNmM4ZVwiLCBcIiNkMDQ5MDdcIixcbiAgICBcIiNjM2I4YTZcIiwgXCIjY2VmOGM0XCIsIFwiIzdhOTI5M1wiLCBcIiNmZGEyYWJcIiwgXCIjMmVmNmM1XCIsIFwiIzgwNzI0MlwiLCBcIiNjYjk0Y2NcIiwgXCIjYjZiZGQwXCIsXG4gICAgXCIjYjVjNzVkXCIsIFwiI2ZkZTE4OVwiLCBcIiNiN2ZmODBcIiwgXCIjZmEyZDhlXCIsIFwiIzgzOWE1ZlwiLCBcIiMyOGMyYjVcIiwgXCIjZTVlOWUxXCIsIFwiI2JjNzlkOFwiLFxuICAgIFwiIzdlZDhmZVwiLCBcIiM5ZjIwYzNcIiwgXCIjNGY3YTViXCIsIFwiI2Y1MTFmZFwiLCBcIiMwOWM5NTlcIiwgXCIjYmNkMGNlXCIsIFwiIzg2ODVmZFwiLCBcIiM5OGZjZmZcIixcbiAgICBcIiNhZmJmZjlcIiwgXCIjNmQ2OWI0XCIsIFwiIzVmOTlmZFwiLCBcIiNhYWE4N2VcIiwgXCIjYjU5ZGZiXCIsIFwiIzVkODA5ZFwiLCBcIiNkOWE3NDJcIiwgXCIjYWM1Yzg2XCIsXG4gICAgXCIjOTQ2OGQ1XCIsIFwiI2E0YTJiMlwiLCBcIiNiMTM3NmVcIiwgXCIjZDQzZjNkXCIsIFwiIzA1YTlkMVwiLCBcIiNjMzgzNzVcIiwgXCIjMjRiNThlXCIsIFwiIzZlYWJhZlwiLFxuICAgIFwiIzY2YmY3ZlwiLCBcIiM5MmNiYmJcIiwgXCIjZGRiMWVlXCIsIFwiIzFiZTg5NVwiLCBcIiNjN2VjZjlcIiwgXCIjYTZiYWE2XCIsIFwiIzgwNDVjZFwiLCBcIiM1ZjcwZjFcIixcbiAgICBcIiNhOWQ3OTZcIiwgXCIjY2U2MmNiXCIsIFwiIzBlOTU0ZFwiLCBcIiNhOTdkMmZcIiwgXCIjZmNiOGQzXCIsIFwiIzliZmVlM1wiLCBcIiM0ZThkODRcIiwgXCIjZmM2ZDNmXCIsXG4gICAgXCIjN2I5ZmQ0XCIsIFwiIzhjNjE2NVwiLCBcIiM3MjgwNWVcIiwgXCIjZDUzNzYyXCIsIFwiI2YwMGExYlwiLCBcIiNkZTVjOTdcIiwgXCIjOGVhMjhiXCIsIFwiI2ZjY2Q5NVwiLFxuICAgIFwiI2JhOWM1N1wiLCBcIiNiNzlhODJcIiwgXCIjN2M1YTgyXCIsIFwiIzdkN2NhNFwiLCBcIiM5NThhZDZcIiwgXCIjY2Q4MTI2XCIsIFwiI2JkYjBiN1wiLCBcIiMxMGUwZjhcIixcbiAgICBcIiNkY2NjNjlcIiwgXCIjZDZkZTBmXCIsIFwiIzYxNmQzZFwiLCBcIiM5ODVhMjVcIiwgXCIjMzBjN2ZkXCIsIFwiIzBhZWI2NVwiLCBcIiNlM2NkYjRcIiwgXCIjYmQxYmVlXCIsXG4gICAgXCIjYWQ2NjVkXCIsIFwiI2Q3NzA3MFwiLCBcIiM4ZWE1YjhcIiwgXCIjNWI1YWQwXCIsIFwiIzc2NjU1ZVwiLCBcIiM1OTgxMDBcIiwgXCIjODY3NTdlXCIsIFwiIzVlYTA2OFwiLFxuXSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4vVXRpbFwiXG5cbi8qKlxuICogQVRURU5USU9OIFJFU1BPTlNFUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBDb250YWluIHRoZSBhdHRlbnRpb25zIGFuZCBlbWJlZGRpbmdzIGZvciBhbGwgY29tYmluYXRpb25zIG9mIHJldHVybnMgZnJvbSB0aGUgYmFja2VuZFxuICovXG5cbmV4cG9ydCB0eXBlIE1vZGVsSW5mbyA9IHtcbiAgICBubGF5ZXJzOiBudW1iZXJcbiAgICBuaGVhZHM6IG51bWJlclxufVxuXG50eXBlIEFic3RyYWN0QXR0ZW50aW9uUmVzcG9uc2U8VD4gPSB7XG4gICAgYWE6IFRcbn1cblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTVUxUUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHJlc3VsdHMgdGhhdCBhcmUgZW5jYXNlZCBpbiB0aGUgJ2FhJyBhbmQgJ2FiJyBrZXlzIHJldHVybmVkXG4gKi9cbmV4cG9ydCB0eXBlIEF0dGVudGlvblJlc3BvbnNlID0gQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxBdHRlbnRpb25NZXRhUmVzdWx0PlxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uTWV0YVJlc3VsdCA9IEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PEZ1bGxTaW5nbGVUb2tlbkluZm9bXT5cblxuZXhwb3J0IHR5cGUgRnVsbFNpbmdsZVRva2VuSW5mbyA9IHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZW1iZWRkaW5nczogbnVtYmVyW10sXG4gICAgY29udGV4dHM6IG51bWJlcltdLFxuICAgIGJwZV90b2tlbjogc3RyaW5nLFxuICAgIGJwZV9wb3M6IHN0cmluZyxcbiAgICBicGVfZGVwOiBzdHJpbmcsXG4gICAgYnBlX2lzX2VudDogYm9vbGVhbixcbiAgICB0b3BrX3dvcmRzOiBzdHJpbmdbXSxcbiAgICB0b3BrX3Byb2JzOiBudW1iZXJbXVxufVxuXG5pbnRlcmZhY2UgQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8VD4ge1xuICAgIGF0dDogbnVtYmVyW11bXVtdLFxuICAgIGxlZnQ6IFQsXG4gICAgcmlnaHQ6IFQsXG59XG5cbi8qKlxuICogU0VBUkNIIFJFU1VMVCBUWVBFU1xuICovXG5cbmludGVyZmFjZSBNYXRjaGVkVG9rQXR0IHtcbiAgICBhdHQ6IG51bWJlcltdXG4gICAgb2Zmc2V0X3RvX21heDogbnVtYmVyXG4gICAgbG9jX29mX21heDogbnVtYmVyXG59XG5cblxuaW50ZXJmYWNlIE1hdGNoZWRBdHRlbnRpb25zIHtcbiAgICBpbjogTWF0Y2hlZFRva0F0dCxcbiAgICBvdXQ6IE1hdGNoZWRUb2tBdHQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFpc3NTZWFyY2hSZXN1bHRzIHtcbiAgICBzZW50ZW5jZTogc3RyaW5nXG4gICAgaW5kZXg6IG51bWJlclxuICAgIG5leHRfaW5kZXg6IG51bWJlclxuICAgIG1hdGNoOiBzdHJpbmdcbiAgICBtYXRjaF9wbHVzXzE6IHN0cmluZ1xuICAgIG1hdGNoZWRfYXR0OiBNYXRjaGVkQXR0ZW50aW9uc1xuICAgIG1hdGNoZWRfYXR0X3BsdXNfMTogTWF0Y2hlZEF0dGVudGlvbnNcbiAgICB0b2tlbnM6IFRva2VuRmFpc3NNYXRjaFtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5GYWlzc01hdGNoIHtcbiAgICB0b2tlbjogc3RyaW5nXG4gICAgcG9zOiBzdHJpbmdcbiAgICBkZXA6IHN0cmluZ1xuICAgIGlzX2VudDogc3RyaW5nXG4gICAgaXNfbWF0Y2g6IGJvb2xlYW5cbiAgICBpc19uZXh0X3dvcmQ6IGJvb2xlYW5cbiAgICBpbndhcmQ6IG51bWJlcltdXG4gICAgb3V0d2FyZDogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBFVkVOVCBUWVBFU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRXZlbnQge1xuICAgIHNlbD86IEQzU2VsLFxuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyIHwgXCJudWxsXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FbWJlZGRpbmdFdmVudCBleHRlbmRzIFRva2VuRXZlbnQge1xuICAgIGVtYmVkZGluZ3M6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIEhlYWRCb3hFdmVudCA9IHtcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlcixcbiAgICBoZWFkOiBudW1iZXIsXG59XG5cbi8qKlxuICogTUlTQ0VMTEFORU9VUyBUWVBFU1xuICovXG5cbmV4cG9ydCB0eXBlIFNlbnRlbmNlT3B0aW9ucyA9IFwiYWJcIiB8IFwiYmFcIiB8IFwiYWFcIiB8IFwiYmJcIiB8IFwiYWxsXCI7XG5leHBvcnQgdHlwZSBTaWRlT3B0aW9ucyA9IFwibGVmdFwiIHwgXCJyaWdodFwiXG5leHBvcnQgdHlwZSBTaW1wbGVNZXRhID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiXG5leHBvcnQgdHlwZSBUb2tlbk9wdGlvbnMgPSBcImFcIiB8IFwiYlwiIHwgXCJhbGxcIlxuXG5leHBvcnQgZW51bSBUb2dnbGVkIHtcbiAgICBBRERFRCA9IDAsXG4gICAgUkVNT1ZFRCxcbn1cblxuZXhwb3J0IGVudW0gTm9ybUJ5IHtcbiAgICBSb3cgPSAwLFxuICAgIENvbCxcbiAgICBBbGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBwb3M6IHN0cmluZ1tdLFxuICAgIGRlcDogc3RyaW5nW10sXG4gICAgaXNfZW50OiBhbnksXG4gICAgZW50czogc3RyaW5nW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YU9wdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBpc19lbnQ6IGJvb2xlYW5bXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1ldGFPcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgaXNfZW50OiBzdHJpbmdbXSAvLyBSZXByZXNlbnRpbmcgaGV4IGNvbG9yc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWV0YVNjYWxlIHtcbiAgICBwb3M6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBkZXA6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBpc19lbnQ6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBlbnRzOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgb2Zmc2V0PzogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxufVxuXG5leHBvcnQgZW51bSBNb2RlbEtpbmQge1xuICAgIEJpZGlyZWN0aW9uYWwgPSBcImJpZGlyZWN0aW9uYWxcIixcbiAgICBBdXRvcmVncmVzc2l2ZSA9IFwiYXV0b3JlZ3Jlc3NpdmVcIlxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7ICBcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG4gIH1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogTWFwIGEgbGlzdCBhcyB2YWx1ZXMgdG8gYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBvcmlnaW5hbCBsaXN0XG4gKi9cbi8vIChTdHJpbmcgLT4gYikgIC0+IFtTdHJpbmddIC0+IHtTdHJpbmc6IGJ9XG5leHBvcnQgY29uc3Qgb2JqRnJvbUtleXMgPSBSLmN1cnJ5KChmbiwga2V5cykgPT4gUi56aXBPYmooa2V5cywgUi5tYXAoZm4sIGtleXMpKSkgXG5cbmV4cG9ydCBjb25zdCBhc3NpZ25aZXJvOiAoeDphbnkpID0+IG51bWJlciA9IHggPT4gMDtcblxuLyoqXG4gKiBHaXZlbiBhbiBsaXN0LCBjcmVhdGUgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWxsIDBcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRaZXJvID0gb2JqRnJvbUtleXMoYXNzaWduWmVybykiLCJpbXBvcnQgeyBNYWluR3JhcGhpYyB9IGZyb20gJy4vdmlzL215TWFpbidcbmltcG9ydCB7IEFQSSwgZW1wdHlUb2tlbkRpc3BsYXkgfSBmcm9tICcuL2FwaS9tYWluQXBpJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIgfSBmcm9tICcuL2RhdGEvVG9rZW5XcmFwcGVyJ1xuLy8gaW1wb3J0IHsgVGVzdGVyIH0gZnJvbSBcIi4uL3RzL3Rlc3RcIlxuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1leEJFUlQuaHRtbCEuLi9leEJFUlQuaHRtbFwiO1xuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCJcblxuXG5mdW5jdGlvbiBkb015U3ZnKCkge1xuICAgIHJldHVybiBuZXcgTWFpbkdyYXBoaWMoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRpYyBmaWxlcyBuZWVkZWQgZm9yIHRoZSBkZW1vLiBTYXZlIHRoZSBrZXlzIGFuZCBmaWxlIHBhdGhzIHRvIGEganNvbiBvYmplY3QgdGhhdCBpcyB0aGVuIHdyaXR0ZW4gdG8gYSBmaWxlXG4gKlxuICogVGhpcyB3aWxsIHByaW50IHRoZSBvYmplY3QgYWZ0ZXIgZXZlcnkgY2FsbC4gV2hlbiB0aGUga2V5IGxlbmd0aCBpcyB0aGUgZXhwZWN0ZWQgbGVuZ3RoLCByaWdodCBjbGljayBpbiBjaHJvbWUgYW5kIHNlbGVjdCBcInNhdmUgYXMgZ2xvYmFsIHZhcmlhYmxlXCJcbiAqXG4gKiBUaGVuLCBpbiB0aGUgY29uc29sZSwgdHlwZSBcImNvcHkodGVtcDEpXCIuIFVzZSBzdWJsaW1lIHRleHQgKGl0IGlzIHRoZSBiZXN0IGZvciBoYW5kbGluZyBsYXJnZSBmaWxlcykgdG8gcGFzdGUgdGhpcyBpbnRvIHRoZSBjb2RlIGFuZCBzYXZlIGl0IGFzIF9fX18uanNvblxuICpcbiAqIEBwYXJhbSBzZW50ZW5jZSAtIFRoZSBzZW50ZW5jZSB0byBhbmFseXplXG4gKiBAcGFyYW0gbWFza0luZCAtIFdoaWNoIGluZGV4IHRvIG1hc2sgaW4gdGhlIHNlbnRlbmNlLiBBdG0sIGNhbiBvbmx5IHJlY29yZCBvbmUgbWFza2luZ1xuICogQHBhcmFtIG91dERpY3RQYXRoIC0gV2hlcmUgdG8gc2F2ZSB0aGUgb2JqZWN0IG9mIGhhc2hrZXk6IGZpbGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG4gICAgY29uc3QgbGF5ZXJzID0gXy5yYW5nZSgxMilcblxuICAgIGNvbnN0IEwgPSAwXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9ICAgICAgICAgIC8vIE1hcCBoYXNoIC0+IGNvbnRlbnRzXG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEyKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMobW9kZWxOYW1lLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjAgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIocjAucGF5bG9hZCk7XG5cbiAgICAgICAgICAgIC8vIFVubWFza2VkIHJlc3BvbnNlOlxuICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBjb250ZW50SGFzaCkudGhlbihyMSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTWFza2VkIHdvcmQgYW5kIHNlYXJjaGluZyByZXNwb25zZXM6XG4gICAgICAgICAgICAgICAgdG9rQ2Fwc3VsZS5hLm1hc2sobWFza0luZClcbiAgICAgICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoY29udGVudEhhc2gpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50SGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBcbiAqIE9ic2VydmUgaG93IHRoZSBkZW1vIGNyZWF0aW9uIHByb2Nlc3Mgd29ya3MuXG4gKiBcbiAqIElmIGRlc2lyZWQgdG8gbWFzayBtdWx0aXBsZSB3b3JkcyBpbiB0aGUgaW5wdXQgZm9yIGRlbW8gcHVycG9zZXMsIHRyeSBsb29waW5nIG92ZXIgdGhlIG1hc2sgaW5kcyBhbmQgbWFza2luZyBlYWNoIG9uZSBpbmRpdmlkdWFsbHlcbiAqIFxuICogQHBhcmFtIHNlbnRlbmNlIFRoZSBkZW1vIHNlbnRlbmNlXG4gKiBAcGFyYW0gbWFza0luZCBEZXNpcmVkIGluZGV4IHRvIG1hc2sgKGNhbiBjdXJyZW50bHkgb25seSBhY2NlcHQgYSBzaW5nbGUgbWFzayBpbmRleClcbiAqIEBwYXJhbSBvdXREaWN0UGF0aCBcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdERlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9XG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEpLmZvckVhY2goTCA9PiB7XG4gICAgICAgIGFwaS5nZXRNZXRhQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHNlbnRlbmNlLCBMLCBcIlwiKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwLnBheWxvYWQpO1xuXG4gICAgICAgICAgICAvLyBVbm1hc2tlZCByZXNwb25zZTpcbiAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgZW1wdHlUb2tlbkRpc3BsYXkpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSkudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTApLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVwbFRlc3QoKSB7XG4gICAgLy8gVGVzdGVyLnRlc3RBdHRXcmFwcGVyQ29uc3RydWN0b3IoKVxuICAgIC8vIFRlc3Rlci50ZXN0VXBkYXRlTWFza2VkQXR0ZW50aW9uKClcbiAgICAvLyBUZXN0ZXIudGVzdE5qQXJheSgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmFuZG9tQXJyYXlDcmVhdGlvbigpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NXcmFwcGVyKCk7XG4gICAgLy8gVGVzdGVyLnRlc3REM09yZGluYWwoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEZhaXNzU2VhcmNoUmVzdWx0c0hpc3QoKTtcbiAgICAvLyBUZXN0ZXIudGVzdFJlYWRpbmdKU09OKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZG9NeVN2ZygpO1xuICAgIC8vIHJlcGxUZXN0KCk7XG4gICAgLy8gY3JlYXRlRGVtb3MoXCJDaGlja2VuIHRhc3RlcyBhYnNvbHV0ZWx5IGRlbGljaW91cyBpZiB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZ1wiLCA0LCBcIlwiKVxuICAgIGNvbnNvbGUubG9nKFwiRG9uZSBsb2FkaW5nIHdpbmRvd1wiKTtcbn1cbiIsImltcG9ydCAqIGFzIHRwIGZyb20gXCIuL2V0Yy90eXBlc1wiXG5pbXBvcnQgKiBhcyB4XyBmcm9tIFwiLi9ldGMvX1Rvb2xzXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gXCIuL2V0Yy9VUkxIYW5kbGVyXCI7XG5cbmNvbnN0IGZhbHNleSA9IHZhbCA9PiAobmV3IFNldChbJ2ZhbHNlJywgMCwgXCJub1wiLCBmYWxzZSwgbnVsbCwgXCJcIl0pKS5oYXModmFsKVxuY29uc3QgdHJ1dGh5ID0gdmFsID0+ICFmYWxzZXkodmFsKVxuY29uc3QgdG9OdW1iZXIgPSB4ID0+ICt4O1xuXG5cbnR5cGUgSW5zcGVjdG9yT3B0aW9ucyA9IFwiY29udGV4dFwiIHwgXCJlbWJlZGRpbmdzXCIgfCBudWxsXG5cbi8vIE11c3QgYmUgb3B0aW9uYWwgcGFyYW1zIGZvciBpbml0aWFsaXphdGlvbnNcbmludGVyZmFjZSBVUkxQYXJhbWV0ZXJzIHtcbiAgICBzZW50ZW5jZT86IHN0cmluZ1xuICAgIG1vZGVsPzogc3RyaW5nXG4gICAgbW9kZWxLaW5kPzogc3RyaW5nXG4gICAgY29ycHVzPzogc3RyaW5nXG4gICAgbGF5ZXI/OiBudW1iZXJcbiAgICBoZWFkcz86IG51bWJlcltdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgdG9rZW5JbmQ/OiBudW1iZXIgfCAnbnVsbCdcbiAgICB0b2tlblNpZGU/OiB0cC5TaWRlT3B0aW9uc1xuICAgIG1ldGFNYXRjaD86IHRwLlNpbXBsZU1ldGEgfCBudWxsXG4gICAgbWV0YU1heD86IHRwLlNpbXBsZU1ldGEgfCBudWxsXG4gICAgZGlzcGxheUluc3BlY3Rvcj86IEluc3BlY3Rvck9wdGlvbnNcbiAgICBvZmZzZXRJZHhzPzogbnVtYmVyW11cbiAgICBtYXNrSW5kcz86IG51bWJlcltdXG4gICAgaGlkZUNsc1NlcD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNsYXNzIFVJQ29uZmlnIHtcblxuICAgIHByaXZhdGUgX2NvbmY6IFVSTFBhcmFtZXRlcnMgPSB7fVxuICAgIHByaXZhdGUgX2hlYWRTZXQ6IFNldDxudW1iZXI+O1xuICAgIGF0dFR5cGU6IHRwLlNlbnRlbmNlT3B0aW9ucztcbiAgICBfbkhlYWRzOiBudW1iZXIgfCBudWxsO1xuICAgIF9uTGF5ZXJzOiBudW1iZXIgfCBudWxsO1xuICAgIHByaXZhdGUgX3Rva2VuOiB0cC5Ub2tlbkV2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX25IZWFkcyA9IDEyOyAvLyBIb3cgZG8gSSBhdXRvbWF0ZSB0aGlzP1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRUeXBlID0gJ2FhJzsgLy8gRG9uJ3QgYWxsb3cgdGhpcyB0byBiZSBtb2RpZmllZCBieSB0aGUgdXNlci5cbiAgICAgICAgdGhpcy5mcm9tVVJMKClcbiAgICAgICAgdGhpcy50b1VSTChmYWxzZSlcbiAgICB9XG5cblxuICAgIGZyb21VUkwoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYgPSB7XG4gICAgICAgICAgICBtb2RlbDogcGFyYW1zWydtb2RlbCddIHx8ICdiZXJ0LWJhc2UtY2FzZWQnLFxuICAgICAgICAgICAgbW9kZWxLaW5kOiBwYXJhbXNbJ21vZGVsS2luZCddIHx8IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHBhcmFtc1snc2VudGVuY2UnXSB8fCBcIlRoZSBnaXJsIHJhbiB0byBhIGxvY2FsIHB1YiB0byBlc2NhcGUgdGhlIGRpbiBvZiBoZXIgY2l0eS5cIixcbiAgICAgICAgICAgIGNvcnB1czogcGFyYW1zWydjb3JwdXMnXSB8fCAnd296JyxcbiAgICAgICAgICAgIGxheWVyOiBwYXJhbXNbJ2xheWVyJ10gfHwgMSxcbiAgICAgICAgICAgIGhlYWRzOiB0aGlzLl9pbml0SGVhZHMocGFyYW1zWydoZWFkcyddKSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcGFyYW1zWyd0aHJlc2hvbGQnXSB8fCAwLjcsXG4gICAgICAgICAgICB0b2tlbkluZDogcGFyYW1zWyd0b2tlbkluZCddIHx8IG51bGwsXG4gICAgICAgICAgICB0b2tlblNpZGU6IHBhcmFtc1sndG9rZW5TaWRlJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbmRzOiBwYXJhbXNbJ21hc2tJbmRzJ10gfHwgWzldLFxuICAgICAgICAgICAgbWV0YU1hdGNoOiBwYXJhbXNbJ21ldGFNYXRjaCddIHx8IFwicG9zXCIsXG4gICAgICAgICAgICBtZXRhTWF4OiBwYXJhbXNbJ21ldGFNYXgnXSB8fCBcInBvc1wiLFxuICAgICAgICAgICAgZGlzcGxheUluc3BlY3RvcjogcGFyYW1zWydkaXNwbGF5SW5zcGVjdG9yJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG9mZnNldElkeHM6IHRoaXMuX2luaXRPZmZzZXRJZHhzKHBhcmFtc1snb2Zmc2V0SWR4cyddKSxcbiAgICAgICAgICAgIGhpZGVDbHNTZXA6IHRydXRoeShwYXJhbXNbJ2hpZGVDbHNTZXAnXSkgfHwgdHJ1ZSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0geyBzaWRlOiB0aGlzLl9jb25mLnRva2VuU2lkZSwgaW5kOiB0aGlzLl9jb25mLnRva2VuSW5kIH1cblxuICAgIH1cblxuICAgIHRvVVJMKHVwZGF0ZUhpc3RvcnkgPSBmYWxzZSkge1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybCh0aGlzLl9jb25mLCB1cGRhdGVIaXN0b3J5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRPZmZzZXRJZHhzKHY6IChzdHJpbmcgfCBudW1iZXIpW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbLTEsIDAsIDFdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJBcnIgPSBSLm1hcCh0b051bWJlciwgdik7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyQXJyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEhlYWRzKHY6IG51bWJlcltdIHwgbnVsbCkge1xuICAgICAgICBpZiAodiA9PSBudWxsIHx8IHYubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRTZXQobmV3IFNldCh2KSkuX2NvbmYuaGVhZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZHMoKVxuICAgIH1cblxuICAgIG5IZWFkcygpOiBudW1iZXJcbiAgICBuSGVhZHModmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbkhlYWRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkhlYWRzXG4gICAgICAgIHRoaXMuX25IZWFkcyA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG5MYXllcnMoKTogbnVtYmVyXG4gICAgbkxheWVycyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuTGF5ZXJzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkxheWVyc1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRzKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb0hlYWRzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEFsbEhlYWRzKCkge1xuICAgICAgICB0aGlzLmhlYWRTZXQobmV3IFNldChfLnJhbmdlKDAsIHRoaXMuX25IZWFkcykpKVxuICAgIH1cblxuICAgIHNlbGVjdE5vSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KFtdKSlcbiAgICB9XG5cbiAgICB0b2dnbGVIZWFkKGhlYWQ6IG51bWJlcik6IHRwLlRvZ2dsZWQge1xuICAgICAgICBsZXQgb3V0O1xuICAgICAgICBpZiAodGhpcy5oZWFkU2V0KCkuaGFzKGhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRTZXQoKS5kZWxldGUoaGVhZCk7XG4gICAgICAgICAgICBvdXQgPSB0cC5Ub2dnbGVkLlJFTU9WRURcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmFkZChoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuQURERURcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aHJvdWdoIHNldHRlciBmdW5jdGlvbiB0byBlbnN1cmUgdXJsIGlzIHVwZGF0ZWRcbiAgICAgICAgdGhpcy5oZWFkU2V0KHRoaXMuaGVhZFNldCgpKTsgLy8gSSBoYXRlIG11dGFibGUgZGF0YXN0cnVjdHVyZXMuLi4gVGhpcyBpcyBjb25mdXNpbmcuXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIHRvZ2dsZVRva2VuKGU6IHRwLlRva2VuRXZlbnQpOiB0aGlzIHtcbiAgICAgICAgY29uc3QgcGlja2VyID0gUi5waWNrKFsnaW5kJywgJ3NpZGUnXSlcbiAgICAgICAgY29uc3QgY29tcGFyZUV2ZW50ID0gcGlja2VyKGUpXG4gICAgICAgIGNvbnN0IGNvbXBhcmVUb2tlbiA9IHBpY2tlcih0aGlzLnRva2VuKCkpXG5cbiAgICAgICAgaWYgKFIuZXF1YWxzKGNvbXBhcmVUb2tlbiwgY29tcGFyZUV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ybVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuKGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRva2VuKCk6IHRwLlRva2VuRXZlbnQ7XG4gICAgdG9rZW4odmFsOiB0cC5Ub2tlbkV2ZW50KTogdGhpcztcbiAgICB0b2tlbih2YWw/OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlblxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuSW5kID0gdmFsLmluZDtcbiAgICAgICAgdGhpcy5fY29uZi50b2tlblNpZGUgPSB2YWwuc2lkZTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGFzVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLl9jb25mXG4gICAgICAgIGNvbnN0IGFjdHVhbGx5TnVsbCA9ICgoY29uZi50b2tlbkluZCA9PSBudWxsKSAmJiAoY29uZi50b2tlblNpZGUgPT0gbnVsbCkpXG4gICAgICAgIGNvbnN0IHN0ck51bGwgPSAoY29uZi50b2tlbkluZCA9PSBcIm51bGxcIilcbiAgICAgICAgcmV0dXJuICghYWN0dWFsbHlOdWxsKSAmJiAoIXN0ck51bGwpXG4gICAgfVxuXG4gICAgcm1Ub2tlbigpIHtcbiAgICAgICAgdGhpcy50b2tlbih7IGluZDogbnVsbCwgc2lkZTogbnVsbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZW50ZW5jZSgpOiBzdHJpbmc7XG4gICAgc2VudGVuY2UodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIHNlbnRlbmNlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYuc2VudGVuY2VcblxuICAgICAgICB0aGlzLl9jb25mLnNlbnRlbmNlID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyO1xuICAgIHRocmVzaG9sZCh2YWw6IG51bWJlcik6IHRoaXM7XG4gICAgdGhyZXNob2xkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi50aHJlc2hvbGQ7XG5cbiAgICAgICAgdGhpcy5fY29uZi50aHJlc2hvbGQgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5oZWFkc1xuICAgIH1cblxuICAgIGxheWVyKCk6IG51bWJlclxuICAgIGxheWVyKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGxheWVyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYubGF5ZXJcblxuICAgICAgICB0aGlzLl9jb25mLmxheWVyID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGVhZFNldCgpOiBTZXQ8bnVtYmVyPjtcbiAgICBoZWFkU2V0KHZhbDogU2V0PG51bWJlcj4pOiB0aGlzO1xuICAgIGhlYWRTZXQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkU2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGVhZFNldCA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi5oZWFkcyA9IHhfLnNldDJTb3J0ZWRBcnJheSh0aGlzLl9oZWFkU2V0KVxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbWV0YU1hdGNoKCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1hdGNoKHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1hdGNoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tZXRhTWF4O1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1heCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtZXRhTWF4KCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1heCh2YWw6IHRwLlNpbXBsZU1ldGEpOiB0aGlzO1xuICAgIG1ldGFNYXgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXRjaDtcblxuICAgICAgICB0aGlzLl9jb25mLm1ldGFNYXRjaCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYXNrSW5kcygpOiBudW1iZXJbXTtcbiAgICBtYXNrSW5kcyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBtYXNrSW5kcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWFza0luZHM7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tYXNrSW5kcyA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwbGF5SW5zcGVjdG9yKCk6IEluc3BlY3Rvck9wdGlvbnM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw6IEluc3BlY3Rvck9wdGlvbnMpOiB0aGlzO1xuICAgIGRpc3BsYXlJbnNwZWN0b3IodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3I7XG5cbiAgICAgICAgdGhpcy5fY29uZi5kaXNwbGF5SW5zcGVjdG9yID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZnNldElkeHMoKTogbnVtYmVyW107XG4gICAgb2Zmc2V0SWR4cyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBvZmZzZXRJZHhzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5vZmZzZXRJZHhzO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbnVtYmVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYub2Zmc2V0SWR4cyA9IFIubWFwKHRvTnVtYmVyLCB2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGVDbHNTZXAoKTogYm9vbGVhbjtcbiAgICBoaWRlQ2xzU2VwKHZhbDogYm9vbGVhbik6IHRoaXM7XG4gICAgaGlkZUNsc1NlcCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuaGlkZUNsc1NlcDtcblxuICAgICAgICB0aGlzLl9jb25mLmhpZGVDbHNTZXAgPSB0cnV0aHkodmFsKTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtb2RlbCgpOiBzdHJpbmc7XG4gICAgbW9kZWwodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIG1vZGVsKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtb2RlbEtpbmQoKTogc3RyaW5nO1xuICAgIG1vZGVsS2luZCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWxLaW5kKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbEtpbmRcbiAgICAgICAgdGhpcy5fY29uZi5tb2RlbEtpbmQgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgb2Zmc2V0IG5lZWRlZCBmb3IgdGhlIG1vZGVsS2luZCBpbiB0aGUgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBvZmZzZXQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlbEtpbmQoKSkge1xuICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZToge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzaG93TmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0IG1hdGNoSGlzdG9ncmFtRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSA/IFwiTmV4dFwiIDogXCJNYXRjaGVkXCJcbiAgICB9XG5cbiAgICBjb3JwdXMoKTogc3RyaW5nO1xuICAgIGNvcnB1cyh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgY29ycHVzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5jb3JwdXNcbiAgICAgICAgdGhpcy5fY29uZi5jb3JwdXMgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgRWRnZSwgRWRnZURhdGEgfSBmcm9tIFwiLi9FZGdlQ29ubmVjdG9yXCJcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uRGF0YSA9IG51bWJlcltdW11cblxuZXhwb3J0IGNvbnN0IHNjYWxlTGluZWFyV2lkdGggPSBvcGFjaXR5ID0+IDUgKiBvcGFjaXR5XjAuMzM7XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25HcmFwaCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uRGF0YT57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uRGF0YTsgLy8gVGhlIHBhc3NlZCBkYXRhXG4gICAgZWRnZURhdGE6IEVkZ2VEYXRhOyAvLyBBIHdyYXBwZXIgYXJvdW5kIF9kYXRhLiBVc2VyIHNob3VsZCBub3QgbWluZFxuICAgIHBsb3REYXRhOiBFZGdlW107IC8vIE5lZWRlZCBmb3IgcGxvdHRpbmdcblxuICAgIC8qKiBDT01QT05FTlRTXG4gICAgICogRXhwb3NlIHRoZSBjb21wb25lbnRzIGJlbG9uZ2luZyB0byB0aGUgY2xhc3MgYXMgcHJvcGVydGllcyBvZiB0aGUgY2xhc3MuIFxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNyZWF0ZSBtZXRob2RzIHRoYXQgc3BlY2lmaWNhbGx5IG1vZGlmeSBhIHNpbmdsZSBwYXJ0IG9yIGNvbXBvbmVudCB3aXRob3V0IGhhdmluZyB0byByZXNlbGVjdCBpdC4gXG4gICAgICogTWFrZXMgZm9yIG1vcmUgcmVzcG9uc2l2ZSBhcHBsaWNhdGlvbnNcbiAgICAgKiAqL1xuICAgIHN2ZzogRDNTZWw7XG4gICAgZ3JhcGg6IEQzU2VsO1xuXG4gICAgLy8gVGhlIGJlbG93IGNvbXBvbmVudHMgcmVxdWlyZSBkYXRhXG4gICAgcGF0aHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZXM6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdO1xuICAgIGxpbmtHZW46IGQzLkxpbms8YW55LCBhbnksIGFueT5cblxuICAgIC8vIE9QVElPTlMgV0lUSCBERUZBVUxUU1xuICAgIF90aHJlc2hvbGQgPSAwLjc7IC8vIEFjY3VtdWxhdGlvbiB0aHJlc2hvbGQuIEJldHdlZW4gMC0xXG4gICAgbm9ybUJ5OiB0cC5Ob3JtQnlcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fSAvLyBObyBldmVudHMgbmVlZGVkIGZvciB0aGlzIG9uZVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNiwgLy8gVGhlIGhlaWdodCBvZiB0aGUgZGl2IGJveGVzIGFyb3VuZCB0aGUgU1ZHIGVsZW1lbnRcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIG9mZnNldDogMCwgLy8gU2hvdWxkIEkgb2Zmc2V0IHRoZSBsZWZ0IHNpZGUgYnkgMSBvciBub3Q/XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuZ3JhcGggPSB0aGlzLnN2Zy5zZWxlY3RBbGwoYC5hdG4tY3VydmVgKTtcbiAgICAgICAgdGhpcy5saW5rR2VuID0gZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgLngoZCA9PiBkWzBdKVxuICAgICAgICAgICAgLnkoZCA9PiBkWzFdKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgd2hldGhlciB0byB1c2UgdGhlICdqJyBvciAnaScgYXR0cmlidXRlIHRvIGNhbGN1bGF0ZSBvcGFjaXRpZXNcbiAgICBwcml2YXRlIHNjYWxlSWR4KCk6IFwiaVwiIHwgXCJqXCIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubm9ybUJ5KSB7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5Db2w6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdqJ1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuUm93OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaSdcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkFsbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2knXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNvbm5lY3Rpb25zIGJldHdlZW4gbG9jYXRpb25zIG9mIHRoZSBTVkcgdXNpbmcgRDMncyBsaW5rR2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25uZWN0aW9ucygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5wYXRocykge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRycyh7XG4gICAgICAgICAgICAgICAgJ2QnOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiB7IHNvdXJjZTogW251bWJlciwgbnVtYmVyXSwgdGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdIH0gPVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IFswLCBvcC5ib3hoZWlnaHQgKiAoZC5pICsgMC41ICsgb3Aub2Zmc2V0KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtvcC53aWR0aCwgb3AuYm94aGVpZ2h0ICogKGQuaiArIDAuNSldIC8vICsgMiBhbGxvd3Mgc21hbGwgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtHZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYXRuLWN1cnZlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyYy1pZHhcIiwgKGQsIGkpID0+IGQuaSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRhcmdldC1pZHhcIiwgKGQsIGkpID0+IGQuaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGhlaWdodCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcImhlaWdodFwiLCB0aGlzLm9wdGlvbnMuaGVpZ2h0ICsgKG9wLm9mZnNldCAqIHRoaXMub3B0aW9ucy5ib3hoZWlnaHQpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2lkdGggb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwid2lkdGhcIiwgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgT3BhY2l0eSBvZiB0aGUgbGluZXMgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLm9wYWNpdHlTY2FsZXNbZFtzZWxmLnNjYWxlSWR4KCldXShkLnYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkW3NlbGYuc2NhbGVJZHgoKV1dKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlTGluZWFyV2lkdGgodmFsKSAvLzUgKiB2YWxeMC4zMztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVyZW5kZXIgdGhlIGdyYXBoIGluIHRoZSBldmVudCB0aGF0IHRoZSBkYXRhIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hdG4tY3VydmVcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBsb3REYXRhXG5cbiAgICAgICAgICAgIHRoaXMucGF0aHMgPSB0aGlzLmdyYXBoXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICAuam9pbigncGF0aCcpO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgb3BhY2l0eSBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlcyBvZiB0aGUgZGF0YSwgZnJvbSAwIHRvIG1heCBvZiBjb250YWluZWQgZGF0YVxuICAgICAqIE5vcm1hbGl6ZSBieSBlYWNoIHNvdXJjZSB0YXJnZXQsIG9yIGFjcm9zcyB0aGUgd2hvbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNjYWxlcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgIGxldCBhcnIgPSBbXVxuXG4gICAgICAgIC8vIEdyb3VwIG5vcm1hbGl6YXRpb25cbiAgICAgICAgc3dpdGNoICh0aGlzLm5vcm1CeSl7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5Sb3c6XG4gICAgICAgICAgICAgICAgYXJyID0gdGhpcy5lZGdlRGF0YS5leHRlbnQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BhY2l0eVNjYWxlcyBhcyBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXSkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDAuOV0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQ29sOlxuICAgICAgICAgICAgICAgIGFyciA9IHRoaXMuZWRnZURhdGEuZXh0ZW50KDApO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm9wYWNpdHlTY2FsZXMgYXMgZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W10pLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgdlsxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAwLjldKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkFsbDpcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhJbiA9IGQzLm1heCh0aGlzLnBsb3REYXRhLm1hcCgoZCkgPT4gZC52KSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzLnB1c2goZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4SW5dKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAxXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3Igbm9ybWluZyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGRhdGEgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGRhdGEoKTogQXR0ZW50aW9uRGF0YVxuICAgIGRhdGEodmFsdWU6IEF0dGVudGlvbkRhdGEpOiB0aGlzXG4gICAgZGF0YSh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVkZ2VEYXRhID0gbmV3IEVkZ2VEYXRhKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGhlaWdodCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgaGVpZ2h0KCk6IG51bWJlclxuICAgIGhlaWdodCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIGhlaWdodCh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHdpZHRoIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB3aWR0aCgpOiBudW1iZXJcbiAgICB3aWR0aCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIHdpZHRoKHZhbHVlPzogbnVtYmVyKTogdGhpcyB8IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgdGhyZXNob2xkIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyXG4gICAgdGhyZXNob2xkKHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgdGhyZXNob2xkKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcbmltcG9ydCB7IFRlbnNvcjNEIH0gZnJvbSBcIkB0ZW5zb3JmbG93L3RmanNcIjtcblxuLy8gVGhlIGJlbG93IHR3byAoaW50ZXJmYWNlIGFuZCBmdW5jdGlvbikgY2FuIGJlY29tZSBhIGNsYXNzXG5leHBvcnQgdHlwZSBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICByb3dzOiBudW1iZXJbXVtdLFxuICAgIGxhYmVsczogbnVtYmVyW10sXG4gICAgbWF4OiBudW1iZXIsXG59XG5cbi8qKlxuICogRnJvbSBhbiBhdHRlbnRpb24gbWF0cml4IHNlbGVjdGVkIGJ5IGxheWVyLCBzaG93IGEgc3VtbWFyeSBvZiB0aGUgYXR0ZW50aW9ucyBiZWxvbmdpbmcgdG8gZWFjaCBoZWFkLlxuICogXG4gKiBAcGFyYW0gaGVhZE1hdCBUaGUgbWF0cml4IHJlcHJlc2VudGluZyBhbGwgdGhlIGF0dGVudGlvbnMgYnkgaGVhZCAobGF5ZXIgYWxyZWFkeSBzZWxlY3RlZCkgPGhlYWQsIGZyb20sIHRvPlxuICogQHBhcmFtIGhlYWRMaXN0IFRoZSBoZWFkcyB0aGF0IGFyZSBzZWxlY3RlZFxuICogQHBhcmFtIHNpZGUgSXMgdGhpcyB0aGUgcmlnaHQgb3IgdGhlIGxlZnQgZGlzcGxheT9cbiAqIEBwYXJhbSB0b2tlbkluZCBJZiBub3QgbnVsbCwgc2VsZWN0IGp1c3QgdGhlIGluZm9ybWF0aW9uIGZyb20gYSBzaW5nbGUgdG9rZW4gYWNyb3NzIGhlYWRzXG4gKiBAcmV0dXJucyBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gbGFiZWwgdGhlIGhlYWRib3hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGVudGlvbkluZm8oaGVhZE1hdDogbnVtYmVyW11bXVtdLCBoZWFkTGlzdDogbnVtYmVyW10sIHNpZGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJsZWZ0XCIsIHRva2VuOiBudWxsIHwge2luZDogbnVtYmVyLCBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIn09bnVsbCk6IEF0dGVudGlvbkhlYWRCb3hJIHtcbiAgICAvLyBDb2xsZWN0IG9ubHkgZnJvbSBoZWFkbGlzdCwgYXZlcmFnZSBlYWNoIGhlYWQsIHRyYW5zcG9zZSB0byBlYXNlIGl0ZXJhdGlvblxuICAgIGlmIChoZWFkTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogW1tdXSxcbiAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGltID0gbnVsbFxuICAgIC8vIE9ubHkgY2hhbmdlIHRoZSBhdHRlbnRpb24gZ3JhcGggb3Bwb3NpdGUgc2VsZWN0ZWQgdG9rZW5cbiAgICBpZiAodG9rZW4gIT0gbnVsbCAmJiAodG9rZW4uc2lkZSAhPSBzaWRlKSkge1xuICAgICAgICBkaW0gPSB0b2tlbi5zaWRlID09IFwibGVmdFwiID8gLTIgOiAtMSAvLyBBc3NpZ24gdG8gXCJmcm9tXCIgZGlyZWN0aW9uIGlmIFwibGVmdFwiIFxuICAgIH1cblxuICAgIGxldCBheGlzOiBudW1iZXIgPSBzaWRlID09IFwibGVmdFwiID8gMiA6IDE7XG5cbiAgICAvLyBhdmVyYWdlIGFjcm9zcyB0aGUgYXhpcyByZXByZXNlbnRpbmcgdGhlIGF0dGVudGlvbnMuXG4gICAgbGV0IGdhdGhlcmVkTWF0ID0gdGYudGVuc29yM2QoaGVhZE1hdClcbiAgICBpZiAoZGltICE9IG51bGwpIHtcbiAgICAgICAgZ2F0aGVyZWRNYXQgPSBnYXRoZXJlZE1hdC5nYXRoZXIoW3Rva2VuLmluZF0sIGRpbSlcbiAgICB9XG4gICAgbGV0IG5ld01hdCA9IGdhdGhlcmVkTWF0LmdhdGhlcihoZWFkTGlzdCwgMCkubWVhbihbYXhpc10pLnRyYW5zcG9zZSgpO1xuXG4gICAgY29uc3Qgcm93SW5mbyA9IDxudW1iZXJbXVtdPm5ld01hdC5hcnJheVN5bmMoKTtcblxuICAgIGNvbnN0IG91dDogQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgICAgIHJvd3M6IHJvd0luZm8sXG4gICAgICAgIGxhYmVsczogaGVhZExpc3QsXG4gICAgICAgIG1heDogPG51bWJlcj5uZXdNYXQubWF4KCkuYXJyYXlTeW5jKCksXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudE9wdGlvbnMge1xuICAgIGhlYWRIZWlnaHQ6IG51bWJlclxuICAgIGhlYWRXaWR0aDogbnVtYmVyXG4gICAgeFBhZDogbnVtYmVyXG4gICAgeVBhZDogbnVtYmVyXG4gICAgYm94V2lkdGg6IG51bWJlclxuICAgIHRvdGFsV2lkdGg6IG51bWJlclxuICAgIHRvdGFsSGVpZ2h0OiBudW1iZXJcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25IZWFkQm94IGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25IZWFkQm94ST57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICByb3dDc3NOYW1lID0gJ2F0dC1oZWFkJztcbiAgICBib3hDc3NOYW1lID0gJ2F0dC1yZWN0JztcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3ZlclwiLFxuICAgICAgICBib3hNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlTW92ZTogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlTW92ZVwiLFxuICAgICAgICBib3hDbGljazogXCJBdHRlbnRpb25IZWFkQm94X0JveENsaWNrXCIsXG4gICAgfTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25IZWFkQm94STtcblxuICAgIF9jdXJyZW50OiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiA9IHt9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hEaW06IDI2LFxuICAgICAgICB5c2NhbGU6IDEsIC8vIEFtb3VudCB0byBzY2FsZSBib3hoZWlnaHQgdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgeHNjYWxlOiAwLjUsIC8vIEFtb3VudCB0byBzY2FsZSBib3h3aWR0aCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICBzaWRlOiBcImxlZnRcIixcbiAgICAgICAgbWF4V2lkdGg6IDIwMCwgLy8gTWF4aW11bSB3aWR0aCBvZiBTVkdcbiAgICAgICAgb2Zmc2V0OiAwLCAvLyBDaGFuZ2UgdG8gMSBpZiB5b3UgZGVzaXJlIHRoZSBvZmZzZXQgdmlzdWFsaXphdGlvbiBmb3IgQXV0b3JlZ3Jlc3NpdmUgbW9kZWxzXG4gICAgfTtcblxuICAgIC8vIEQzIENvbXBvbmVudHNcbiAgICBoZWFkUm93czogRDNTZWw7XG4gICAgaGVhZENlbGxzOiBEM1NlbDtcbiAgICBvcGFjaXR5U2NhbGU6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50KCk6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+IHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy5fY3VycmVudFxuXG4gICAgICAgIGNvbnN0IG5IZWFkcyA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGhcbiAgICAgICAgY29uc3QgYmFzZUhlYWRXaWR0aCA9IG9wLmJveERpbSAqIG9wLnhzY2FsZVxuXG4gICAgICAgIC8vIFNjYWxlIGhlYWR3aWR0aCBhY2NvcmRpbmcgdG8gbWF4aW11bSB3aWR0aFxuICAgICAgICBjb25zdCBnZXRIZWFkU2NhbGUgPSAobkgpID0+IChNYXRoLm1pbihvcC5tYXhXaWR0aCAvIG5ILCBiYXNlSGVhZFdpZHRoKSAvIGJhc2VIZWFkV2lkdGgpICogb3AueHNjYWxlO1xuXG4gICAgICAgIGN1ci5oZWFkSGVpZ2h0ID0gb3AuYm94RGltICogb3AueXNjYWxlO1xuICAgICAgICBjdXIuaGVhZFdpZHRoID0gZ2V0SGVhZFNjYWxlKG5IZWFkcykgKiBvcC5ib3hEaW07XG4gICAgICAgIGN1ci54UGFkID0gY3VyLmhlYWRXaWR0aDtcbiAgICAgICAgY3VyLnlQYWQgPSAob3AuYm94RGltIC0gY3VyLmhlYWRIZWlnaHQpIC8gMjtcblxuICAgICAgICBjb25zdCBnZXRCb3hXaWR0aCA9IChoZWFkV2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heEJ3aWR0aCA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ3aWR0aCA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGggKiBjdXIuaGVhZFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGQzLnNjYWxlTGluZWFyXG4gICAgICAgICAgICBpZiAoYndpZHRoID4gbWF4QndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1ci5ib3hXaWR0aCA9ICh0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aCk7XG4gICAgICAgIGN1ci50b3RhbFdpZHRoID0gKDIgKiBjdXIueFBhZCkgKyBjdXIuYm94V2lkdGg7XG4gICAgICAgIGN1ci50b3RhbEhlaWdodCA9IChvcC5ib3hEaW0gKiAodGhpcy5fZGF0YS5yb3dzLmxlbmd0aCArIG9wLm9mZnNldCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGJveEV2ZW50ID0gKGkpID0+IHsgcmV0dXJuIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlLCBoZWFkOiBzZWxmLl9kYXRhLmxhYmVsc1tpXSB9IH1cbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy51cGRhdGVDdXJyZW50KClcblxuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuXG4gICAgICAgIHRoaXMucGFyZW50XG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGN1ci50b3RhbFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY3VyLnRvdGFsSGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKHNlbGYuX2RhdGEucm93cylcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBjbGFzczogKGQsIGkpID0+IGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VyLnhQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogKG9wLmJveERpbSAqIChpICsgb3Aub2Zmc2V0KSkgKyBjdXIueVBhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgeyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93c1xuICAgICAgICAgICAgLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gZClcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgeDogKGQsIGkpID0+IGkgKiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRoaXMuYm94Q3NzTmFtZSxcbiAgICAgICAgICAgICAgICBoZWFkOiAoZCwgaSkgPT4gc2VsZi5fZGF0YS5sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5oZWFkV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXIuaGVhZEhlaWdodCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAoZDogbnVtYmVyKSA9PiB0aGlzLm9wYWNpdHlTY2FsZShkKSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdmVyLCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IHNlbGYub3B0aW9uc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcblxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VNb3ZlLCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgYmFzZVg6IGdldEJhc2VYKCksIGJhc2VZOiBnZXRCYXNlWSgpLCBtb3VzZTogbW91c2UgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiBcIkhlYWQgXCIgKyAoc2VsZi5fZGF0YS5sYWJlbHNbaV0gKyAxKSlcbiAgICB9XG5cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IHRoaXMub3BhY2l0eVNjYWxlLmRvbWFpbihbMCwgZGF0YS5tYXhdKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge1ZDb21wb25lbnR9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtzcGFjeUNvbG9yc30gZnJvbSAnLi4vZXRjL1NwYWN5SW5mbydcbmltcG9ydCB7U1ZHfSBmcm9tICcuLi9ldGMvU1ZHcGx1cydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5cbmludGVyZmFjZSBNYXJnaW5JbmZvIHtcbiAgICB0b3A6IG51bWJlcixcbiAgICBib3R0b206IG51bWJlcixcbiAgICByaWdodDogbnVtYmVyLFxuICAgIGxlZnQ6IG51bWJlclxufVxuXG4vLyBEZXBlbmRlbnQgb24gdGhlIG9wdGlvbnMgaW4gdGhlIHJlc3BvbnNlXG50eXBlIE1hdGNoZWRNZXRhU2VsZWN0aW9ucyA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJlbnRcIlxuXG5pbnRlcmZhY2UgTWF0Y2hlZE1ldGFDb3VudCB7XG4gICAgcG9zOiBudW1iZXJcbiAgICBkZXA6IG51bWJlclxuICAgIGlzX2VudDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBNYXhBdHRNZXRhQ291bnQge1xuICAgIG9mZnNldDogbnVtYmVyXG59XG5cbnR5cGUgTWF0Y2hlZERhdGFJbnRlcmZhY2UgPSBNYXRjaGVkTWV0YUNvdW50XG50eXBlIE1heEF0dERhdGFJbnRlcmZhY2UgPSBNYXhBdHRNZXRhQ291bnRcbnR5cGUgRGF0YUludGVyZmFjZSA9IE1hdGNoZWREYXRhSW50ZXJmYWNlIHwgTWF4QXR0RGF0YUludGVyZmFjZVxuXG5pbnRlcmZhY2UgQ291bnRlZEhpc3Qge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY291bnQ6IG51bWJlclxufVxuXG50eXBlIFJlbmRlckRhdGFJbnRlcmZhY2UgPSBDb3VudGVkSGlzdFtdXG5cblxuLyoqXG4gKiAgRGF0YSBmb3JtYXR0aW5nIGZ1bmN0aW9uc1xuICovXG5jb25zdCB0b1JlbmRlckRhdGEgPSAob2JqOiB7W3M6IHN0cmluZ106IG51bWJlcn0pOiBSZW5kZXJEYXRhSW50ZXJmYWNlID0+IE9iamVjdC5rZXlzKG9iaikubWFwKChrLCBpKSA9PiB7XG4gICAgcmV0dXJuIHtsYWJlbDogaywgY291bnQ6IG9ialtrXX1cbn0pXG5cbmNvbnN0IHRvU3RyaW5nT3JOdW0gPSAoYTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuYSA9ICthXG4gICAgaWYgKGlzTmFOKG5hKSkge1xuICAgICAgICByZXR1cm4gYVxuICAgIH1cbiAgICByZXR1cm4gbmFcbn1cblxuY29uc3Qgc29ydEJ5TGFiZWwgPSBSLnNvcnRCeShSLmNvbXBvc2UodG9TdHJpbmdPck51bSwgUi5wcm9wKCdsYWJlbCcpKSlcbmNvbnN0IHNvcnRCeUNvdW50ID0gUi5zb3J0QnkoUi5wcm9wKCdjb3VudCcpKVxuXG5jb25zdCB0b09yZGVyZWRSZW5kZXIgPSBSLmNvbXBvc2UoXG4gICAgUi5yZXZlcnNlLFxuICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogZml4XG4gICAgc29ydEJ5Q291bnQsXG4gICAgdG9SZW5kZXJEYXRhXG4pXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNIaXN0b2dyYW08VD4gZXh0ZW5kcyBWQ29tcG9uZW50PFQ+IHtcblxuICAgIGNzc19uYW1lID0gJydcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fVxuXG4gICAgX2N1cnJlbnQgPSB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRDMgQ09NUE9ORU5UU1xuICAgIHN2ZzogRDNTZWxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgICAgIGJhcldpZHRoOiBudW1iZXJcbiAgICAgICAgd2lkdGg6IG51bWJlclxuICAgICAgICBoZWlnaHQ6IG51bWJlclxuICAgICAgICB2YWw6IHN0cmluZ1xuICAgICAgICB4TGFiZWxSb3Q6IG51bWJlclxuICAgICAgICB4TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgICAgICB5TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgIH1cblxuICAgIGF4ZXMgPSB7XG4gICAgICAgIHg6IGQzLnNjYWxlQmFuZCgpLFxuICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLFxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM9e30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICByaWdodDogMzAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcldpZHRoOiAyNSxcbiAgICAgICAgICAgIHdpZHRoOiAxODUsXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMCxcbiAgICAgICAgICAgIHZhbDogXCJwb3NcIiwgLy8gQ2hhbmdlIERlZmF1bHQsIHBhc3MgdGhyb3VnaCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgeExhYmVsUm90OiA0NSxcbiAgICAgICAgICAgIHhMYWJlbE9mZnNldDogMTUsXG4gICAgICAgICAgICB5TGFiZWxPZmZzZXQ6IDUsXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRygpXG4gICAgfVxuXG4gICAgbWV0YSgpOk1hdGNoZWRNZXRhU2VsZWN0aW9uc1xuICAgIG1ldGEodmFsOk1hdGNoZWRNZXRhU2VsZWN0aW9ucyk6IHRoaXNcbiAgICBtZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy52YWwgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuX2RhdGEpXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVYQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCB3aWR0aCA9IG9wLndpZHRoIC0gb3AubWFyZ2luLmxlZnQgLSBvcC5tYXJnaW4ucmlnaHRcblxuICAgICAgICB0aGlzLmF4ZXMueFxuICAgICAgICAgICAgLmRvbWFpbihSLm1hcChSLnByb3AoJ2xhYmVsJyksIHNlbGYucmVuZGVyRGF0YSkpXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoMC4xKVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuY2hhcnQud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVlBeGlzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wLmhlaWdodCAtIG9wLm1hcmdpbi50b3AgLSBvcC5tYXJnaW4uYm90dG9tXG5cbiAgICAgICAgdGhpcy5heGVzLnlcbiAgICAgICAgICAgIC5kb21haW4oWzAsICtkMy5tYXgoUi5tYXAoUi5wcm9wKCdjb3VudCcpLCBzZWxmLnJlbmRlckRhdGEpKV0pXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSlcblxuICAgICAgICB0aGlzLl9jdXJyZW50LmNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVlBeGlzKClcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IGRhdGFbdGhpcy5vcHRpb25zLnZhbF1cbiAgICAgICAgcmV0dXJuIHRvT3JkZXJlZFJlbmRlcihvdXQpXG4gICAgfVxuXG4gICAgd2lkdGgoKTpudW1iZXJcbiAgICB3aWR0aCh2YWw6bnVtYmVyKTp0aGlzXG4gICAgd2lkdGgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCk6bnVtYmVyXG4gICAgaGVpZ2h0KHZhbDpudW1iZXIpOnRoaXNcbiAgICBoZWlnaHQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVZQXhpcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVdpZHRoKCkge1xuICAgICAgICB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdmcuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodClcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpZ1dpZHRoKGRhdGE6IFJlbmRlckRhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiAoZGF0YS5sZW5ndGggKiBvcC5iYXJXaWR0aCkgKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodFxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTpSZW5kZXJEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuaHRtbCgnJylcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudFxuXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpO1xuICAgICAgICB0aGlzLndpZHRoKHRoaXMuZmlnV2lkdGgoZGF0YSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgYXhlc1xuICAgICAgICBjb25zdCBnID0gc2VsZi5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSh7eDogb3AubWFyZ2luLmxlZnQsIHk6b3AubWFyZ2luLnRvcH0pKVxuXG4gICAgICAgIC8vIEhhY2sgdG8gYWxsb3cgY2xlYXJpbmcgdGhpcyBoaXN0b2dyYW1zIHRvIHdvcmtcbiAgICAgICAgc2VsZi5iYXNlID0gZ1xuXG4gICAgICAgIC8vIEZpeCBiZWxvdyBmb3IgcG9zaXRpb25hbCBjaGFuZ2luZ1xuICAgICAgICAgICAgY29uc3QgYXhpc0JvdHRvbSA9IGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoe3g6IDAsIHk6Y3Vyci5jaGFydC5oZWlnaHR9KSlcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNlbGYuYXhlcy54KSlcblxuICAgICAgICAgICAgaWYgKG9wLnZhbCAhPSBcIm9mZnNldFwiKSB7XG4gICAgICAgICAgICAgICAgYXhpc0JvdHRvbVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgb3AueUxhYmVsT2Zmc2V0KSAgIC8vIE1vdmUgYmVsb3cgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnhMYWJlbE9mZnNldCkgIC8vIE9mZnNldCB0byB0aGUgcmlnaHQgYSBiaXRcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZShvcC54TGFiZWxSb3QpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzZWxmLmF4ZXMueSkpXG5cbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLngoZC5sYWJlbCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLnkoZC5jb3VudCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYuYXhlcy54LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY3Vyci5jaGFydC5oZWlnaHQgLSBzZWxmLmF4ZXMueShkLmNvdW50KTsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGsgPT4gc3BhY3lDb2xvcnMuY29sb3JTY2FsZVtvcC52YWxdKGsubGFiZWwpKVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHtkM1MsIEQzU2VsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcbmltcG9ydCAnLi4vZXRjL3hkMydcblxuLy8gSGVscGVyc1xuY29uc3QgY3Vyck1hdGNoSWR4ID0gKGVsZW0pID0+ICsoPEVsZW1lbnQ+ZWxlbS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ21hdGNoaWR4JylcbmNvbnN0IGN1cnJSb3dOdW0gPSAoZWxlbSkgPT4gKyg8RWxlbWVudD5lbGVtLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgncm93bnVtJylcbmNvbnN0IGJhY2tncm91bmRDb2xvciA9IHggPT4gYHJnYmEoMTI4LCAwLCAxNTAsICR7MC42Knh9KWBcblxuZXhwb3J0IGNsYXNzIENvcnB1c0luc3BlY3RvciBleHRlbmRzIFZDb21wb25lbnQ8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1pbnNwZWN0b3InO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXTsgLy8gVGhlIHBhc3NlZCBkYXRhXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3Jfcm93TW91c2VPdXRcIixcbiAgICAgICAgcm93Q2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd0NsaWNrXCIsXG4gICAgICAgIHJvd0RibENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dEYmxDbGlja1wiLFxuICAgICAgICBjZWxsTW91c2VPdmVyOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsTW91c2VPdmVyXCIsXG4gICAgICAgIGNlbGxNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbE1vdXNlT3V0XCIsXG4gICAgICAgIGNlbGxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbENsaWNrXCIsXG4gICAgICAgIGNlbGxEYmxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbERibENsaWNrXCIsXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgc2hvd05leHQ6IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gQ09NUE9ORU5UU1xuICAgIGluc3BlY3RvclJvd3M6IEQzU2VsXG4gICAgaW5zcGVjdG9yQ2VsbHM6IEQzU2VsXG4gICAgc2NhbGVyID0gZDMuc2NhbGVQb3coKS5yYW5nZShbMCwwLjldKS5leHBvbmVudCgyKVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoXCIuaW5zcGVjdG9yLXJvd1wiKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1yb3cnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBtYXRjaElkeDogZCA9PiBkLmluZGV4LFxuICAgICAgICAgICAgICAgIHJvd051bTogKGQsIGkpID0+IGksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzSW5zcGVjdG9yLmV2ZW50cy5yb3dNb3VzZU92ZXIsIHt9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvckNlbGxzXG4gICAgICAgICAgICAuY2xhc3NlZCgnY2VsbHRvb2x0aXAnLCB0cnVlKVxuICAgICAgICAgICAgLmFwcGVuZCgnc3BhbicpXG4gICAgICAgICAgICAuY2xhc3NlZCgndG9vbHRpcHRleHQnLCB0cnVlKVxuICAgICAgICAgICAgLmh0bWwoKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlTdHIgPSBkLmlzX2VudCA/IFwiPGJyPkVudGl0eVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9ICg8RWxlbWVudD5uW2ldLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgnYXR0Jykuc2xpY2UoMCwgNylcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRTdHIgPSBgPGJyPkF0dGVudGlvbjogJHthdHR9YFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBQT1M6ICR7ZC5wb3MudG9Mb3dlckNhc2UoKX08YnI+REVQOiAke2QuZGVwLnRvTG93ZXJDYXNlKCl9YCArIGVudGl0eVN0ciArIGF0dFN0clxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvclJvd3Muc2VsZWN0QWxsKCcuaW5zcGVjdG9yLWNlbGwnKVxuICAgICAgICAgICAgLmRhdGEoKGQ6dHAuRmFpc3NTZWFyY2hSZXN1bHRzKSA9PiBkLnRva2VucylcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1jZWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdpbmRleC1vZmZzZXQnLCAoZCwgaSwgbjpIVE1MRWxlbWVudFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hJZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAtIG1hdGNoSWR4IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgcG9zOiBkID0+IGQucG9zLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgZGVwOiBkID0+IGQuZGVwLnRvTG93ZXJDYXNlKCksIFxuICAgICAgICAgICAgICAgIGlzX2VudDogZCA9PiBkLmlzX2VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC50b2tlbi5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIikpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0Y2hlZC1jZWxsJywgZCA9PiBkLmlzX21hdGNoKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ25leHQtY2VsbCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5zaG93TmV4dCgpICYmIGQuaXNfbmV4dF93b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXktY2VsbCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSArY3Vyck1hdGNoSWR4KHRoaXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuc2hvd05leHQoKSAmJiBpID4gaWR4XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhpZ2hsaWdodCB0aGUgY2VsbHMgYXBwcm9wcmlhdGVseVxuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzLmVhY2goKGQsaSxuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgIGlmIChpID09IGlkeCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGQuaW53YXJkXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4QXR0ID0gK2QzLm1heChhdHQpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclJvdyA9IGN1cnJSb3dOdW0obltpXSlcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZXIgPSBzZWxmLnNjYWxlci5kb21haW4oWzAsIG1heEF0dF0pXG5cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtjdXJyUm93fSddYClcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChgLmluc3BlY3Rvci1jZWxsYClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3Ioc2NhbGVyKGF0dFtpXSkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhdHQnLCAoZCwgaSkgPT4gYXR0W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkVG9vbHRpcCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKVxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHt9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoYXQgdGhpcy5fZGF0YSBpcyBkZWZpbmVkIGluIHdyYW5nbGUgd2hpY2ggc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIHJlbmRlclxuICAgICAgICAvLyBhcyBpcyBkZWZpbmVkIGluIHRoZSB1cGRhdGUgZnVuY3Rpb25cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKClcbiAgICB9XG5cbiAgICBzaG93TmV4dCgpOiBib29sZWFuXG4gICAgc2hvd05leHQodjpib29sZWFuKTogdGhpc1xuICAgIHNob3dOZXh0KHY/KSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvd05leHRcblxuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd05leHQgPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlzL1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0IHsgc3BhY3lDb2xvcnMgfSBmcm9tIFwiLi4vZXRjL1NwYWN5SW5mb1wiXG5pbXBvcnQgXCIuLi9ldGMveGQzXCJcblxuLy8gTmVlZCBhZGRpdG9pbmFsIGhlaWdodCBpbmZvcm1hdGlvbiB0byByZW5kZXIgYm94ZXNcbmludGVyZmFjZSBCYXNlRGF0YUludGVyZmFjZSBleHRlbmRzIHRwLkZhaXNzU2VhcmNoUmVzdWx0cyB7XG4gICAgaGVpZ2h0OiBudW1iZXJcbn1cbnR5cGUgRGF0YUludGVyZmFjZSA9IEJhc2VEYXRhSW50ZXJmYWNlW11cblxuaW50ZXJmYWNlIENvbG9yTWV0YUJhc2VEYXRhIHtcbiAgICBwb3M6IHN0cmluZ1xuICAgIGRlcDogc3RyaW5nXG4gICAgaXNfZW50OiBib29sZWFuXG4gICAgdG9rZW46IHN0cmluZ1xufVxuXG50eXBlIERpc3BsYXlPcHRpb25zID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImVudFwiXG5cbmZ1bmN0aW9uIG1hbmFnZXJEYXRhMk1hdERhdGEoZGF0YUluOiBEYXRhSW50ZXJmYWNlLCBpbmRleE9mZnNldCA9IDAsIHRvUGljayA9IFsncG9zJ10pIHtcblxuICAgIGNvbnN0IG91dE9mUmFuZ2VPYmo6IENvbG9yTWV0YUJhc2VEYXRhID0ge1xuICAgICAgICBwb3M6IG51bGwsXG4gICAgICAgIGRlcDogbnVsbCxcbiAgICAgICAgaXNfZW50OiBudWxsLFxuICAgICAgICB0b2tlbjogbnVsbCxcbiAgICB9XG5cbiAgICBjb25zdCBjaG9vc2VQcm9wcyA9IFIucGljayh0b1BpY2spXG5cbiAgICBjb25zdCBkYXRhT3V0ID0gZGF0YUluLm1hcChkID0+IHtcbiAgICAgICAgY29uc3Qgd29yZElkeCA9IGQuaW5kZXggKyBpbmRleE9mZnNldDtcbiAgICAgICAgaWYgKCh3b3JkSWR4IDwgMCkgfHwgKHdvcmRJZHggPj0gZC50b2tlbnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBvdXRPZlJhbmdlT2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3T2JqID0gY2hvb3NlUHJvcHMoZC50b2tlbnNbd29yZElkeF0pXG5cbiAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBuZXdPYmopXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhT3V0XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcnB1c01hdE1hbmFnZXIgZXh0ZW5kcyBWQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1tYXQtY29udGFpbmVyJ1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGNlbGxXaWR0aDogMTAsXG4gICAgICAgIHRvUGljazogWydwb3MnXSxcbiAgICAgICAgaWR4czogWy0xLCAwLCAxXSxcbiAgICAgICAgZGl2SG92ZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgIGhlaWdodDogNDAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICBtb3VzZU92ZXI6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU92ZXJcIixcbiAgICAgICAgbW91c2VPdXQ6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU91dFwiLFxuICAgICAgICBjbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX0NsaWNrXCIsXG4gICAgICAgIGRibENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfRGJsQ2xpY2tcIixcbiAgICAgICAgcmVjdE1vdXNlT3ZlcjogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RNb3VzZU92ZXJcIixcbiAgICAgICAgcmVjdE1vdXNlT3V0OiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdE1vdXNlT3V0XCIsXG4gICAgICAgIHJlY3RDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RDbGlja1wiLFxuICAgICAgICByZWN0RGJsQ2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0RGJsQ2xpY2tcIixcbiAgICB9XG5cbiAgICAvLyBUaGUgZDMgY29tcG9uZW50cyB0aGF0IGFyZSBzYXZlZCB0byBtYWtlIHJlbmRlcmluZyBmYXN0ZXJcbiAgICBjb3JwdXNNYXRzOiBEM1NlbFxuICAgIHJvd0dyb3VwczogRDNTZWxcbiAgICBkaXZIb3ZlcjogRDNTZWxcblxuICAgIF9jdXJyZW50ID0ge31cbiAgICByb3dDc3NOYW1lID0gJ2luZGV4LW1hdGNoLXJlc3VsdHMnXG4gICAgY2VsbENzc05hbWUgPSAnaW5kZXgtY2VsbC1yZXN1bHQnXG5cbiAgICBfZGF0YTogRGF0YUludGVyZmFjZVxuXG4gICAgc3RhdGljIGNvbG9yU2NhbGU6IHRwLkNvbG9yTWV0YVNjYWxlID0gc3BhY3lDb2xvcnMuY29sb3JTY2FsZTtcblxuICAgIC8vIFNlbGVjdGlvbnNcbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuaWR4cyA9IFstMSwgMCwgMV07XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBnZXQgaWR4cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pZHhzO1xuICAgIH1cblxuICAgIHNldCBpZHhzKHZhbDogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlkeHMgPSB2YWxcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhdGljIGRvbSBlbGVtZW50c1xuICAgIF9pbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb3JwdXNNYXRzID0gdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKVxuICAgICAgICB0aGlzLnJvd0dyb3VwcyA9IHRoaXMuY29ycHVzTWF0cy5zZWxlY3RBbGwoYC4ke3RoaXMucm93Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLmRpdkhvdmVyID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgndGV4dC1jZW50ZXInLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIud2lkdGgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci5oZWlnaHQpICsgJ3B4JylcblxuICAgICAgICB0aGlzLmRpdkhvdmVyLmFwcGVuZCgncCcpXG4gICAgfVxuXG4gICAgcGljayh2YWw6IERpc3BsYXlPcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b1BpY2sgPSBbdmFsXVxuICAgICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuXG4gICAgYWRkUmlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGFkZGVkSWR4ID0gUi5sYXN0KHRoaXMuaWR4cykgKyAxO1xuICAgICAgICB0aGlzLmlkeHMucHVzaChhZGRlZElkeClcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwicmlnaHRcIilcbiAgICB9XG5cbiAgICBhZGRMZWZ0KCkge1xuICAgICAgICBjb25zdCBhZGRlZElkeCA9IHRoaXMuaWR4c1swXSAtIDE7XG4gICAgICAgIGNvbnN0IGFkZERlY3JlbWVudGVkSGVhZDogKHg6IG51bWJlcltdKSA9PiBudW1iZXJbXSA9IHggPT4gUi5pbnNlcnQoMCwgUi5oZWFkKHgpIC0gMSkoeClcbiAgICAgICAgdGhpcy5pZHhzID0gYWRkRGVjcmVtZW50ZWRIZWFkKHRoaXMuaWR4cylcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwibGVmdFwiKVxuICAgIH1cblxuICAgIGtpbGxSaWdodCgpIHtcbiAgICAgICAgdGhpcy5raWxsKE1hdGgubWF4KC4uLnRoaXMuaWR4cykpXG4gICAgfVxuXG4gICAga2lsbExlZnQoKSB7XG4gICAgICAgIHRoaXMua2lsbChNYXRoLm1pbiguLi50aGlzLmlkeHMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlZGdlIHZhbHVlIGZyb20gY29udGFpbmVkIGluZGV4ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkIEluZGV4IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIGtpbGwoZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChkID09IE1hdGgubWluKC4uLnRoaXMuaWR4cykgfHwgZCA9PSBNYXRoLm1heCguLi50aGlzLmlkeHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZHhzID0gUi53aXRob3V0KFtkXSwgdGhpcy5pZHhzKVxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5vZmZzZXQtJHtkfWApLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZGF0YSh2YWw/OiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIHJlbmRlcmluZyBjb2RlLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIGRhdGEgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKS5yZW1vdmUoKVxuXG4gICAgICAgIHRoaXMuaWR4cy5mb3JFYWNoKChpZHhPZmZzZXQsIGkpID0+IHtcbiAgICAgICAgICAgIHNlbGYuYWRkQ29ycHVzTWF0KGlkeE9mZnNldClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW5vdGhlciB3b3JkJ3MgbWV0YSBpbmZvcm1hdGlvbiBtYXRyaXggY29sdW1uIHRvIGVpdGhlciBzaWRlIG9mIHRoZSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIGlkeE9mZnNldCBEaXN0YW5jZSBvZiB3b3JkIGZyb20gbWF0Y2hlZCB3b3JkIGluIHRoZSBzZW50ZW5jZVxuICAgICAqIEBwYXJhbSB0b1RoZSBJbmRpY2F0ZXMgYWRkaW5nIHRvIHRoZSBcImxlZnRcIiBvciB0byB0aGUgXCJyaWdodFwiIG9mIHRoZSBpbmRleFxuICAgICAqL1xuICAgIGFkZENvcnB1c01hdChpZHhPZmZzZXQ6IG51bWJlciwgdG9UaGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgYm94V2lkdGggPSBvcC5jZWxsV2lkdGggKiBvcC50b1BpY2subGVuZ3RoO1xuICAgICAgICBjb25zdCBib3hIZWlnaHQgPSBSLnN1bShSLm1hcChSLnByb3AoJ2hlaWdodCcpLCB0aGlzLl9kYXRhKSlcblxuICAgICAgICBsZXQgY29ycHVzTWF0O1xuXG4gICAgICAgIGlmICh0b1RoZSA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9UaGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5pbnNlcnQoJ2RpdicsIFwiOmZpcnN0LWNoaWxkXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInRvVGhlIG11c3QgaGF2ZSBhcmd1bWVudCBvZiAnbGVmdCcgb3IgJ3JpZ2h0J1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29ycHVzTWF0ID0gY29ycHVzTWF0XG4gICAgICAgICAgICAuZGF0YShbaWR4T2Zmc2V0XSlcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBjb3JwdXMtbWF0IG9mZnNldC0ke2lkeE9mZnNldH1gKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsIGlkeE9mZnNldClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveEhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIHsgaWR4OiBpLCBvZmZzZXQ6IGQsIHZhbDogc2VsZi5vcHRpb25zLnRvUGlja1swXSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdXQsIHsgaWR4OiBpLCBvZmZzZXQ6IGQgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hZGRSb3dHcm91cChjb3JwdXNNYXQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWF0IFRoZSBiYXNlIGRpdiBvbiB3aGljaCB0byBhZGQgbWF0cmljZXMgYW5kIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dHcm91cChtYXQ6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCBoZWlnaHRzID0gUi5tYXAoUi5wcm9wKCdoZWlnaHQnKSwgdGhpcy5fZGF0YSlcblxuICAgICAgICBjb25zdCBbaGVpZ2h0U3VtLCByYXdIZWlnaHRMaXN0XSA9IFIubWFwQWNjdW0oKHgsIHkpID0+IFtSLmFkZCh4LCB5KSwgUi5hZGQoeCwgeSldLCAwLCBoZWlnaHRzKVxuICAgICAgICBjb25zdCBmaXhMaXN0OiAoeDogbnVtYmVyW10pID0+IG51bWJlcltdID0gUi5jb21wb3NlKFIuZHJvcExhc3QoMSksXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBSLnByZXBlbmQoMClcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBoZWlnaHRMaXN0ID0gZml4TGlzdChyYXdIZWlnaHRMaXN0KVxuXG4gICAgICAgIGNvbnN0IHJvd0dyb3VwID0gbWF0LnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IG1hbmFnZXJEYXRhMk1hdERhdGEoc2VsZi5fZGF0YSwgZCwgb3AudG9QaWNrKSlcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwicm93LW51bVwiLCAoZCxpKSA9PiBpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZCA9PiBkLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gU1ZHLnRyYW5zbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodExpc3RbaV0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIG9wLnRvUGljay5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgc2VsZi5hZGRSZWN0KHJvd0dyb3VwLCAwLCBwcm9wKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFJlY3QoZzogRDNTZWwsIHhTaGlmdDogbnVtYmVyLCBwcm9wOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICBjb25zdCByZWN0cyA9IGcuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG9wLmNlbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGQgPT4gZC5oZWlnaHQgLSAzLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogeFNoaWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMS41LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDb3JwdXNNYXRNYW5hZ2VyLmNvbG9yU2NhbGVbcHJvcF0oZFtwcm9wXSkpXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdldEJhc2VYID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IGdldEJhc2VZID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICBnLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLy8gR2V0IG9mZnNldFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkgLy8gQ29sdW1uXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gK2NvbC5hdHRyKCdvZmZzZXQnKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3Zlciwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpIC8vIENvbHVtblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICtjb2wuYXR0cignb2Zmc2V0JylcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU91dCwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMywgM11cbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpIC0gKG9wLmRpdkhvdmVyLndpZHRoICsgZGl2T2Zmc2V0WzBdKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSAtIChvcC5kaXZIb3Zlci5oZWlnaHQgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3ZlclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIFN0cmluZyh0b3ApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGRbcHJvcF0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIERhdGEgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIF9yZW5kZXIoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAnZDMtYXJyYXknXG5pbXBvcnQgKiBhcyBhdSBmcm9tICcuLi9ldGMvYXJyYXlVdGlscydcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5pbXBvcnQgeyBUeXBlZEFycmF5IH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlL2Rpc3QvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkZ2Uge1xuICAgIGk6IG51bWJlciwgLy8gU291cmNlIGluZGV4XG4gICAgajogbnVtYmVyLCAvLyBUYXJnZXQgaW5kZXhcbiAgICB2OiBudW1iZXIsIC8vIFZhbHVlXG59XG5cbi8qKlxuICogQ29udmVydCBkYXRhIG1hdHJpeCB0byBuZWNlc3NhcnkgZGF0YSBhcnJheSB0byBwYXNzIHRvIFNWRyBjb25uZWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9FZGdlcyAoZGF0YTpudW1iZXJbXVtdLCBjdXRvZmZBbXQ9MSkgOiBFZGdlW10ge1xuICAgIGxldCBvdXRBcnI6IEVkZ2VbXSA9IFtdO1xuICAgIGxldCBjdXRvZmY6IG51bWJlcjtcbiAgICBkYXRhLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBjdXRvZmYgPSBjdXRvZmZBbXQgKiBkMy5zdW0ocm93KTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnI6YXUuU29ydEFycmF5ID0gYXUuc29ydFdpdGhJbmRpY2VzKHJvdyk7XG5cbiAgICAgICAgc29ydGVkQXJyLmFyci5mb3JFYWNoKCh2LGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqOiBFZGdlID0ge1xuICAgICAgICAgICAgICAgICAgICBpOiBpLFxuICAgICAgICAgICAgICAgICAgICBqOiBzb3J0ZWRBcnIuc29ydEluZGljZXNbal0sXG4gICAgICAgICAgICAgICAgICAgIHY6IHYsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dEFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIHJldHVybiBvdXRBcnI7XG59XG4vKipcbiAqIENsYXNzIGZvciBpbXBsZW1lbnRpbmcgb3BlcmF0aW9ucyBvbiBBdHRlbnRpb25HcmFwaCBpbXBsZW1lbnRhdGlvbi4gXG4gKiBDbG9zZWx5IHRpZWQgdG8gW1tBdHRlbnRpb25Db25uZWN0b3JdXVxuICovXG5leHBvcnQgY2xhc3MgRWRnZURhdGEge1xuICAgIHJlYWRvbmx5IHRlbnNEYXRhOnRmLlRlbnNvcjtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgZGF0YTpudW1iZXJbXVtdKXtcbiAgICAgICAgdGhpcy50ZW5zRGF0YSA9IHRmLnRlbnNvcihkYXRhKTtcbiAgICB9XG5cbiAgICBtaW4oYXhpcz86bnVtYmVyKTpUeXBlZEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWluKGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgbWF4KGF4aXM/Om51bWJlcik6VHlwZWRBcnJheXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWF4KGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgZXh0ZW50KGF4aXM/Om51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiBkMy56aXAodGhpcy5taW4oYXhpcyksIHRoaXMubWF4KGF4aXMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgZGF0YSB0byBzZW5kIHRvIFNWRyBjaGFydC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYWNjdW11bGF0ZVRocmVzaCAtIEEgZmxvYXQgYmV0d2VlbiAwIGFuZCAxLCBpbmRpY2F0aW5nIHRoZSBhbW91bnQgb2Ygd2VpZ2h0IHRvIGRpc3BsYXkuIERlZmF1bHRzIHRvIDAuNy5cbiAgICAgKi9cbiAgICBmb3JtYXQgKGFjY3VtdWxhdGVUaHJlc2g9MC43KTpFZGdlW10ge1xuICAgICAgICByZXR1cm4gdG9FZGdlcyh0aGlzLmRhdGEsIGFjY3VtdWxhdGVUaHJlc2gpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuXG50eXBlIGluZm9FdmVudEZyb21JID0gKHNlbDogRDNTZWwsIGk6IG51bWJlcikgPT4gdHAuVG9rZW5FdmVudFxudHlwZSBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIsIGVtYmVkOiBudW1iZXJbXSkgPT4gdHAuVG9rZW5FbWJlZGRpbmdFdmVudFxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dFRva2VucyBleHRlbmRzIFZDb21wb25lbnQ8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPntcblxuICAgIGFic3RyYWN0IGNzc19uYW1lOiBzdHJpbmdcbiAgICBhYnN0cmFjdCBob3Zlcl9jc3NfbmFtZTogc3RyaW5nXG4gICAgYWJzdHJhY3Qgc2lkZTogdHAuU2lkZU9wdGlvbnNcbiAgICBlSW5mbzogaW5mb0V2ZW50RnJvbUkgPSAoc2VsLCBpKSA9PiB7IHJldHVybiB7IHNlbDogc2VsLCBzaWRlOiB0aGlzLnNpZGUsIGluZDogaSB9IH1cbiAgICBlRW1iZWRkaW5nOiBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChzZWwsIGksIGVtYmVkKSA9PiB7IHJldHVybiB7IHNlbDogc2VsLCBzaWRlOiB0aGlzLnNpZGUsIGluZDogaSwgZW1iZWRkaW5nczogZW1iZWQgfSB9XG4gICAgZGl2SG92ZXI6IEQzU2VsXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICB0b2tlbk1vdXNlT3ZlcjogXCJUZXh0VG9rZW5fVG9rZW5Nb3VzZU92ZXJcIixcbiAgICAgICAgdG9rZW5Nb3VzZU91dDogXCJUZXh0VG9rZW5fVG9rZW5Nb3VzZU91dFwiLFxuICAgICAgICB0b2tlbkNsaWNrOiBcIlRleHRUb2tlbl9Ub2tlbkNsaWNrXCIsXG4gICAgICAgIHRva2VuRGJsQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuRGJsQ2xpY2tcIixcbiAgICB9O1xuXG4gICAgZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdO1xuXG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBkaXZIb3Zlcjoge1xuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgb2Zmc2V0OiBbMywgM10sXG4gICAgICAgICAgICB0ZXh0SW5mbzogXCJXb3VsZCBwcmVkaWN0Li4uXCJcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGV4dEJveGVzOiBEM1NlbFxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBtYXNrKG1hc2tJbmRzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLnBhcmVudC5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5lYWNoKChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgICAgICAgc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgXy5pbmNsdWRlcyhtYXNrSW5kcywgaSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEVtYmVkZGluZyhpbmQ6IG51bWJlcik6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtpbmRdXG4gICAgfVxuXG4gICAgX2luaXQoKSB7IH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBfZGl2UGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzMsIDNdXG4gICAgICAgIGNvbnN0IGxlZnQgPSBtb3VzZVswXSArIGdldEJhc2VYKCkgLSAob3AuZGl2SG92ZXIud2lkdGggKyBkaXZPZmZzZXRbMF0pXG4gICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSArIGRpdk9mZnNldFsxXVxuICAgICAgICByZXR1cm4gW2xlZnQsIHRvcF1cbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIFJlc2V0IHRva2VuIGRpc3BsYXlcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKClcblxuICAgICAgICB0aGlzLmRpdkhvdmVyID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0b2staW5mbycsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0LWhvdmVyLWRpc3BsYXknLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQodGhpcy5ob3Zlcl9jc3NfbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLndpZHRoKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIuaGVpZ2h0KSArICdweCcpXG5cbiAgICAgICAgdGhpcy5kaXZIb3ZlclxuICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgncC1pbmZvJywgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnYm9sZCcpXG4gICAgICAgICAgICAudGV4dChvcC5kaXZIb3Zlci50ZXh0SW5mbylcblxuXG4gICAgICAgIC8vIEFkZCBibGFuayBkaXZzXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBvZmZzZXQgKCR7dGhpcy5zaWRlfSk6IGAsIG9wLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGJsYW5rRGl2cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5ibGFuay10ZXh0LWJveGApXG5cbiAgICAgICAgYmxhbmtEaXZzLmRhdGEoUi5yYW5nZSgwLCBvcC5vZmZzZXQpKVxuICAgICAgICAgICAgLmpvaW4oXCJkaXZcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmxhbmstdGV4dC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwidG9rZW5cIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZShcImhlaWdodFwiLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IFwiICBcIilcblxuICAgICAgICAvLyBSZW5kZXIgbm9ybWFsIHRleHQgYm94IGRhdGFcbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSA8RDNTZWw+dGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiBgdG9rZW4gJHt0aGlzLmNzc19uYW1lfSB0b2tlbi0ke2l9YClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IGAke3RoaXMuY3NzX25hbWV9LSR7aX1gKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC50ZXh0LnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKS5yZXBsYWNlKFwiXFx1MDEwQVwiLCBcIlxcXFxuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAnbGlnaHRibHVlJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3Zlciwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAwKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCB0b3BdID0gc2VsZi5fZGl2UGxhY2VtZW50KClcblxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgU3RyaW5nKGxlZnQpICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBTdHJpbmcodG9wKSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCIudG9way13b3JkLWJveFwiKVxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoZDMuemlwKGQudG9wa193b3JkcywgZC50b3BrX3Byb2JzKSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJ3AnKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZChcInRvcGstd29yZC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRleHQodyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gd1swXS5yZXBsYWNlKC9cXHUwMTIwL2csIFwiIFwiKS5yZXBsYWNlKC9cXHUwMTBBL2csIFwiXFxcXG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2IgPSB3WzFdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lICsgXCI6IFwiICsgcHJvYlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLmFkZENsaWNrKHNlbGYudGV4dEJveGVzKVxuICAgIH1cblxuICAgIGFkZENsaWNrKHRleHRib3hlczogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSB0ZXh0Ym94ZXNcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIHNlbGYuZUVtYmVkZGluZyhzZWwsIGksIGQuZW1iZWRkaW5ncykpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdkYmxjbGljaycsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuXG4gICAgY3NzX25hbWUgPSAnbGVmdC10b2tlbic7XG4gICAgaG92ZXJfY3NzX25hbWUgPSAnbGVmdC10b2tlbi1ob3ZlcidcbiAgICBzaWRlOiB0cC5TaWRlT3B0aW9ucyA9ICdsZWZ0JztcbiAgICBvZmZzZXQ6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgUmlnaHRUZXh0VG9rZW4gZXh0ZW5kcyBUZXh0VG9rZW5zIHtcbiAgICBjc3NfbmFtZSA9ICdyaWdodC10b2tlbic7XG4gICAgaG92ZXJfY3NzX25hbWUgPSAncmlnaHQtdG9rZW4taG92ZXInXG4gICAgc2lkZTogdHAuU2lkZU9wdGlvbnMgPSAncmlnaHQnXG4gICAgb2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgX2RpdlBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHNlbGYuYmFzZS5ub2RlKCkpXG4gICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFszLCAzXVxuICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpICsgZGl2T2Zmc2V0WzBdXG4gICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSArIGRpdk9mZnNldFsxXVxuICAgICAgICByZXR1cm4gW2xlZnQsIHRvcF1cbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7RDNTZWwsIFV0aWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQge1NWR30gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqIFxuICogQ29tbW9uIFByb3BlcnRpZXM6XG4gKiAtIGV2ZW50c1xuICogLSBldmVudEhhbmRsZXIgKFYgaW1wb3J0YW50KVxuICogLSBvcHRpb25zIChNYWludGFpbnMgcHVibGljIHN0YXRlLiBDYW4gZXhwb3NlIHRoZXNlIHdpdGggZ2V0L3NldCBmdW5jdGlvbnMgd2l0aCBhdXRvIHVwZGF0ZSlcbiAqIC0gX2N1cnJlbnQgKE1haW50YWlucyBwcml2YXRlIHN0YXRlKVxuICogLSBjc3NOYW1lIChzeW5jZWQgd2l0aCBjb3JyZXNwb25kaW5nIENTUyBmaWxlKVxuICogLSBwYXJlbnQgKEhUTUwgaXMgZGl2IGNvbnRhaW5pbmcgdGhlIGJhc2UsIFNWRyBpcyBTVkcgZWxlbWVudClcbiAqIC0gYmFzZSAoSFRNTCBpcyBkaXYgd2l0aCBjc3NfbmFtZSBlc3RhYmxpc2hlZClcbiAqIC0gX2RhdGEgKERhdGEgdXNlZCB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgY29tcG9uZW50KVxuICogLSBfcmVuZGVyRGF0YSAoRGF0YSBuZWVkZWQgdG8gZGlzcGxheS4gVGhpcyBtYXkgbm90IGJlIG5lZWRlZCwgYnV0IGlzIGN1cnJlbnRseSB1c2VkIGluIGhpc3RvZ3JhbSlcbiAqIFxuICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgLy8gU1RBVElDIEZJRUxEUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHN0YXRpYyBldmVudHM6IHt9ID0ge25vRXZlbnQ6ICdWQ29tcG9uZW50X25vRXZlbnQnfTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxheWVycyBpbiBTVkcgIGZvciBiZyxtYWluLGZnLC4uLlxuICAgICAqL1xuICAgIC8vIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBsYXlvdXQ6IHsgbmFtZTogc3RyaW5nLCBwb3M6IG51bWJlcltdIH1bXSA9IFt7bmFtZTogJ21haW4nLCBwb3M6IFswLCAwXX1dO1xuXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7IC8vIE1vc3RseSBvYnNvbGV0ZSwgbmljZSB0byBoYXZlIHNpbXBsZSBJRCB0byBhc3NpZ24gaW4gQ1NTXG4gICAgcHJvdGVjdGVkIHBhcmVudDogRDNTZWw7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgcHJvdGVjdGVkIGJhc2U6IEQzU2VsOyAvLyBNb3N0bHkgb2Jzb2xldGUsIHJlcHJlc2VudHMgPGc+IGluIHN2Z1xuICAgIHByb3RlY3RlZCBsYXllcnM6IHsgbWFpbj86IEQzU2VsLCBmZz86IEQzU2VsLCBiZz86IEQzU2VsLCBba2V5OiBzdHJpbmddOiBEM1NlbCB9OyAvLyBTdGlsbCB1c2VmdWxcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcHJvdGVjdGVkIF92aXNpYmlsaXR5OiB7IGhpZGRlbjogYm9vbGVhbiwgaGlkZUVsZW1lbnQ/OiBEM1NlbCB8IG51bGw7IFtrZXk6IHN0cmluZ106IGFueSB9OyAvLyBFbmFibGVzIHRyYW5zaXRpb25zIGZyb20gdmlzaWJsZSB0byBpbnZpc2libGUuIE1vc3RseSBvYnNvbGV0ZS5cbiAgICBwcm90ZWN0ZWQgX2RhdGE6IERhdGFJbnRlcmZhY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlckRhdGE6IGFueTsgLy8gVW5uZWNlc3NhcnlcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3NzX25hbWU6IHN0cmluZzsgLy8gTWFrZSB0aGUgc2FtZSBhcyB0aGUgY29ycmVzcG9uZGluZyBjc3MgZmlsZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3VycmVudDoge307IC8vIFByaXZhdGUgc3RhdGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIHRoZSBvYmplY3QgaXRzZWxmLlxuXG4gICAgLy8gQ09OU1RSVUNUT1IgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaW1wbGUgY29uc3RydWN0b3IuIFN1YmNsYXNzZXMgc2hvdWxkIGNhbGwgQHN1cGVySW5pdChvcHRpb25zKSBhcyB3ZWxsLlxuICAgICAqIHNlZSB3aHkgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDM1OTU5NDMvd2h5LWFyZS1kZXJpdmVkLWNsYXNzLXByb3BlcnR5LXZhbHVlcy1ub3Qtc2Vlbi1pbi10aGUtYmFzZS1jbGFzcy1jb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogdGVtcGxhdGU6XG4gICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAvLyAtLSBhY2Nlc3MgdG8gc3ViY2xhc3MgcGFyYW1zOlxuICAgICAgICB0aGlzLnN1cGVySW5pdChvcHRpb25zKTtcbiAgICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IFV0aWwuc2ltcGxlVUlkKHt9KTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuXG4gICAgICAgIC8vIElmIG5vdCBmdXJ0aGVyIHNwZWNpZmllZCAtIGNyZWF0ZSBhIGxvY2FsIGV2ZW50IGhhbmRsZXIgYm91bmQgdG8gdGhlIGJhcyBlbGVtZW50XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8XG4gICAgICAgICAgICBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG5cbiAgICAgICAgLy8gT2JqZWN0IGZvciBzdG9yaW5nIGludGVybmFsIHN0YXRlcyBhbmQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkgPSB7aGlkZGVuOiBmYWxzZX07XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcbiAgICAgICAgdGhpcy5iYXNlID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQodGhpcy5jc3NfbmFtZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgdG8gYmUgY2FsbGVkIGFzIGxhc3QgY2FsbCBpbiBzdWJjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zXG4gICAgICogQHBhcmFtIGRlZmF1bHRMYXllcnMgLS0gY3JlYXRlIHRoZSBkZWZhdWx0IDxnPiBsYXllcnM6IGJnIC0+IG1haW4gLT4gZmdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0U1ZHKG9wdGlvbnM6IHt9ID0ge30sIGRlZmF1bHRMYXllcnMgPSBbJ2JnJywgJ21haW4nLCAnZmcnXSkge1xuICAgICAgICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zIGlmIG5vdCBzcGVjaWZpZWQgaW4gY29uc3RydWN0b3IgY2FsbFxuICAgICAgICAvLyBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIC8vIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICAvLyBjb25zdCBrZXlzID0gbmV3IFNldChbLi4uT2JqZWN0LmtleXMoZGVmYXVsdHMpLCAuLi5PYmplY3Qua2V5cyhvcHRpb25zKV0pO1xuICAgICAgICAvLyBrZXlzLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gKGtleSBpbiBvcHRpb25zKSA/IG9wdGlvbnNba2V5XSA6IGRlZmF1bHRzW2tleV0pO1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSk7XG5cbiAgICAgICAgdGhpcy5sYXllcnMgPSB7fTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZ3JvdXAgZWxlbWVudFxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHN2ZyxcbiAgICAgICAgICAgIHRoaXMuY3NzX25hbWUgKyAnIElEJyArIHRoaXMuaWQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9zKTtcblxuICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBsYXllcnM6IGJhY2tncm91bmQsIG1haW4sIGZvcmVncm91bmRcbiAgICAgICAgaWYgKGRlZmF1bHRMYXllcnMpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBvcmRlciBpcyBpbXBvcnRhbnQgIVxuICAgICAgICAgICAgZGVmYXVsdExheWVycy5mb3JFYWNoKGxheWVyID0+e1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFNWRy5ncm91cCh0aGlzLmJhc2UsIGxheWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIHRoZSBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9pbml0KCk7XG5cbiAgICAvLyBEQVRBIFVQREFURSAmIFJFTkRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIEV2ZXJ5IHRpbWUgZGF0YSBoYXMgY2hhbmdlZCwgdXBkYXRlIGlzIGNhbGxlZCBhbmRcbiAgICAgKiB0cmlnZ2VycyB3cmFuZ2xpbmcgYW5kIHJlLXJlbmRlcmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgdXBkYXRlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmRlckRhdGEgPSB0aGlzLl93cmFuZ2xlKGRhdGEpO1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIHdyYW5nbGluZyBtZXRob2QgLS0gaW1wbGVtZW50IGluIHN1YmNsYXNzLiBSZXR1cm5zIHRoaXMucmVuZGVyRGF0YS5cbiAgICAgKiBTaW1wbGVzdCBpbXBsZW1lbnRhdGlvbjogYHJldHVybiBkYXRhO2BcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhXG4gICAgICogQHJldHVybnMgeyp9IC0tIGRhdGEgaW4gcmVuZGVyIGZvcm1hdFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfd3JhbmdsZShkYXRhKTtcblxuXG4gICAgLyoqXG4gICAgICogSXMgcmVzcG9uc2libGUgZm9yIG1hcHBpbmcgZGF0YSB0byBET00gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVuZGVyRGF0YSBwcmUtcHJvY2Vzc2VkICh3cmFuZ2xlZCkgZGF0YVxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3JlbmRlcihyZW5kZXJEYXRhKTogdm9pZDtcblxuXG4gICAgLy8gVVBEQVRFIE9QVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBpbnN0YW5jZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb25seSB0aGUgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZVJlbmRlciBpZiBvcHRpb24gY2hhbmdlIHJlcXVpcmVzIGEgcmUtcmVuZGVyaW5nIChkZWZhdWx0OmZhbHNlKVxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKHtvcHRpb25zLCByZVJlbmRlciA9IGZhbHNlfSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcHRpb25zW2tdID0gb3B0aW9uc1trXSk7XG4gICAgICAgIGlmIChyZVJlbmRlcikgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT0gQ09OVkVOSUVOQ0UgPT09PVxuICAgIHJlZHJhdygpe1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICBzZXRIaWRlRWxlbWVudChoRTogRDNTZWwpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCA9IGhFO1xuICAgIH1cblxuICAgIGhpZGVWaWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBoRSA9IHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgfHwgdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gICAgICAgICAgICB9KS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmhpZGVWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJhc2UuaHRtbCgnJyk7XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnO1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4uL2FwaS9yZXNwb25zZXMnO1xuaW1wb3J0ICcuLi9ldGMveGQzJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vYXBpL21haW5BcGknXG5pbXBvcnQgeyBVSUNvbmZpZyB9IGZyb20gJy4uL3VpQ29uZmlnJ1xuaW1wb3J0IHsgVGV4dFRva2VucywgTGVmdFRleHRUb2tlbiwgUmlnaHRUZXh0VG9rZW4gfSBmcm9tICcuL1RleHRUb2tlbidcbmltcG9ydCB7IEF0dGVudGlvbkhlYWRCb3gsIGdldEF0dGVudGlvbkluZm8gfSBmcm9tICcuL0F0dGVudGlvbkhlYWRCb3gnXG5pbXBvcnQgeyBBdHRlbnRpb25HcmFwaCB9IGZyb20gJy4vQXR0ZW50aW9uQ29ubmVjdG9yJ1xuaW1wb3J0IHsgQ29ycHVzSW5zcGVjdG9yIH0gZnJvbSAnLi9Db3JwdXNJbnNwZWN0b3InXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIsIHNpZGVUb0xldHRlciB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0IHsgQXR0ZW50aW9uV3JhcHBlciwgbWFrZUZyb21NZXRhUmVzcG9uc2UgfSBmcm9tICcuLi9kYXRhL0F0dGVudGlvbkNhcHN1bGUnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgQ29ycHVzTWF0TWFuYWdlciB9IGZyb20gJy4uL3Zpcy9Db3JwdXNNYXRNYW5hZ2VyJ1xuaW1wb3J0IHsgQ29ycHVzSGlzdG9ncmFtIH0gZnJvbSAnLi4vdmlzL0NvcnB1c0hpc3RvZ3JhbSdcbmltcG9ydCB7IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB9IGZyb20gJy4uL2RhdGEvRmFpc3NTZWFyY2hXcmFwcGVyJ1xuaW1wb3J0IHsgRDNTZWwsIFNlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJztcbmltcG9ydCB7IGZyb20sIGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFNpbXBsZU1ldGEgfSBmcm9tIFwiLi4vZXRjL3R5cGVzXCI7XG5pbXBvcnQgQ2hhbmdlRXZlbnQgPSBKUXVlcnkuQ2hhbmdlRXZlbnQ7XG5cblxuZnVuY3Rpb24gaXNOdWxsVG9rZW4odG9rOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgY29uc3QgaXNTb21lTnVsbCA9IHggPT4ge1xuICAgICAgICByZXR1cm4gKHggPT0gbnVsbCkgfHwgKHggPT0gXCJudWxsXCIpXG4gICAgfVxuICAgIGNvbnN0IHRva0lzTnVsbCA9IHRvayA9PSBudWxsO1xuICAgIGNvbnN0IHRva0hhc051bGwgPSBpc1NvbWVOdWxsKHRvay5zaWRlKSB8fCBpc1NvbWVOdWxsKHRvay5pbmQpXG4gICAgcmV0dXJuIHRva0lzTnVsbCB8fCB0b2tIYXNOdWxsXG59XG5cbmZ1bmN0aW9uIHNob3dCeVNpZGUoZTogdHAuVG9rZW5FdmVudCkge1xuICAgIC8vIENoZWNrIGlmIHNhdmVkIHRva2VuIGluIHVpQ29uZiBpcyBudWxsXG4gICAgaWYgKCFpc051bGxUb2tlbihlKSkge1xuICAgICAgICBjb25zdCBjbGFzc1NlbGVjdG9yID0gZS5zaWRlID09IFwibGVmdFwiID8gXCJzcmMtaWR4XCIgOiBcInRhcmdldC1pZHhcIjtcblxuICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShgLmF0bi1jdXJ2ZVske2NsYXNzU2VsZWN0b3J9PScke2UuaW5kfSddYClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dCeVNpZGUoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCwgbmV3RXZlbnQ6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsVG9rZW4oc2F2ZWRFdmVudCkpIHtcbiAgICAgICAgc2hvd0J5U2lkZShuZXdFdmVudClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dBbGwoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSlcbiAgICAgICAgU2VsLnNldFZpc2libGUoXCIuYXRuLWN1cnZlXCIpXG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0SGVhZChoZWFkOiBudW1iZXIpIHtcbiAgICBjb25zdCBhZmZlY3RlZEhlYWRzID0gZDMuc2VsZWN0QWxsKGAuYXR0LXJlY3RbaGVhZD0nJHtoZWFkfSddYCk7XG4gICAgYWZmZWN0ZWRIZWFkcy5jbGFzc2VkKFwidW5zZWxlY3RlZFwiLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBzZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBzZXRTZWxEaXNhYmxlZChhdHRyOiBib29sZWFuLCBzZWw6IEQzU2VsKSB7XG4gICAgY29uc3QgdmFsID0gYXR0ciA/IHRydWUgOiBudWxsXG4gICAgc2VsLmF0dHIoJ2Rpc2FibGVkJywgdmFsKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYWluR3JhcGhpYyB7XG4gICAgYXBpOiBBUElcbiAgICB1aUNvbmY6IFVJQ29uZmlnXG4gICAgYXR0Q2Fwc3VsZTogQXR0ZW50aW9uV3JhcHBlclxuICAgIHRva0NhcHN1bGU6IFRva2VuV3JhcHBlclxuICAgIHNlbHM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIGluaXRpYWwgZDMgc2VsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAgdml6czogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgdmlzIGNvbXBvbmVudHMgd3JhcHBlZCBhcm91bmQgcGFyZW50IHNlbFxuICAgIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyICAgIC8vIE9yY2hlc3RyYXRlcyBldmVudHMgcmFpc2VkIGZyb20gY29tcG9uZW50c1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFQSSgpXG4gICAgICAgIHRoaXMudWlDb25mID0gbmV3IFVJQ29uZmlnKClcbiAgICAgICAgdGhpcy5za2VsZXRvbkluaXQoKVxuICAgICAgICB0aGlzLm1haW5Jbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGFueSBpbmZvcm1hdGlvbiBvZiBhIHJlc3BvbnNlLlxuICAgICAqIFxuICAgICAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBvbmNlIGFuZCBvbmx5IG9uY2VcbiAgICAgKi9cbiAgICBza2VsZXRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VscyA9IHtcbiAgICAgICAgICAgIGJvZHk6IGQzLnNlbGVjdCgnYm9keScpLFxuICAgICAgICAgICAgYXRuQ29udGFpbmVyOiBkMy5zZWxlY3QoJyNhdG4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBhdG5EaXNwbGF5OiBkMy5zZWxlY3QoXCIjYXRuLWRpc3BsYXlcIiksXG4gICAgICAgICAgICBtb2RlbFNlbGVjdG9yOiBkMy5zZWxlY3QoXCIjbW9kZWwtb3B0aW9uLXNlbGVjdG9yXCIpLFxuICAgICAgICAgICAgY29ycHVzU2VsZWN0b3I6IGQzLnNlbGVjdChcIiNjb3JwdXMtc2VsZWN0XCIpLFxuICAgICAgICAgICAgYXRuSGVhZHM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBkMy5zZWxlY3QoXCIjbGVmdC1hdHQtaGVhZHNcIiksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGQzLnNlbGVjdChcIiNyaWdodC1hdHQtaGVhZHNcIiksXG4gICAgICAgICAgICAgICAgaGVhZEluZm86IGQzLnNlbGVjdChcIiNoZWFkLWluZm8tYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCd0ZXh0LWNlbnRlcicsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBTdHJpbmcoNzApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBTdHJpbmcoMzApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBzZW50ZW5jZUE6IGQzLnNlbGVjdChcIiNmb3JtLXNlbnRlbmNlLWFcIiksXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBkMy5zZWxlY3QoXCIjdXBkYXRlLXNlbnRlbmNlXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbHNUb2dnbGU6IGQzLnNlbGVjdChcIiNjbHMtdG9nZ2xlXCIpLnNlbGVjdChcIi5zd2l0Y2hcIiksXG4gICAgICAgICAgICBsYXllckNoZWNrYm94ZXM6IGQzLnNlbGVjdChcIiNsYXllci1zZWxlY3RcIiksXG4gICAgICAgICAgICBoZWFkQ2hlY2tib3hlczogZDMuc2VsZWN0KFwiI2hlYWQtc2VsZWN0XCIpLFxuICAgICAgICAgICAgY29udGV4dFF1ZXJ5OiBkMy5zZWxlY3QoXCIjc2VhcmNoLWNvbnRleHRzXCIpLFxuICAgICAgICAgICAgZW1iZWRkaW5nUXVlcnk6IGQzLnNlbGVjdChcIiNzZWFyY2gtZW1iZWRkaW5nc1wiKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhZHM6IGQzLnNlbGVjdChcIiNzZWxlY3RlZC1oZWFkc1wiKSxcbiAgICAgICAgICAgIGhlYWRTZWxlY3RBbGw6IGQzLnNlbGVjdChcIiNzZWxlY3QtYWxsLWhlYWRzXCIpLFxuICAgICAgICAgICAgaGVhZFNlbGVjdE5vbmU6IGQzLnNlbGVjdChcIiNzZWxlY3Qtbm8taGVhZHNcIiksXG4gICAgICAgICAgICB0ZXN0Q2hlY2tib3g6IGQzLnNlbGVjdChcIiNzaW1wbGUtZW1iZWQtcXVlcnlcIiksXG4gICAgICAgICAgICB0aHJlc2hTbGlkZXI6IGQzLnNlbGVjdChcIiNteS1yYW5nZVwiKSxcbiAgICAgICAgICAgIGNvcnB1c0luc3BlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zaW1pbGFyLXNlbnRlbmNlcy1kaXZcIiksXG4gICAgICAgICAgICBjb3JwdXNNYXRNYW5hZ2VyOiBkMy5zZWxlY3QoXCIjY29ycHVzLW1hdC1jb250YWluZXJcIiksXG4gICAgICAgICAgICBjb3JwdXNNc2dCb3g6IGQzLnNlbGVjdChcIiNjb3JwdXMtbXNnLWJveFwiKSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZERlc2NyaXB0aW9uOiBkMy5zZWxlY3QoXCIjbWF0Y2gta2luZFwiKSxcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogZDMuc2VsZWN0KFwiI21hdGNoZWQtaGlzdG9ncmFtLWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IGQzLnNlbGVjdChcIiNtYXgtYXR0LWhpc3RvZ3JhbS1jb250YWluZXJcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICAgIGtpbGxMZWZ0OiBkMy5zZWxlY3QoXCIja2lsbC1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIGFkZExlZnQ6IGQzLnNlbGVjdChcIiNtaW51cy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIGFkZFJpZ2h0OiBkMy5zZWxlY3QoXCIjcGx1cy1yaWdodFwiKSxcbiAgICAgICAgICAgICAgICBraWxsUmlnaHQ6IGQzLnNlbGVjdChcIiNraWxsLXJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIHJlZnJlc2g6IGQzLnNlbGVjdChcIiNtYXQtcmVmcmVzaFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGFTZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBkMy5zZWxlY3QoXCIjbWF0Y2hlZC1tZXRhLXNlbGVjdFwiKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IGQzLnNlbGVjdChcIiNtYXgtYXR0LW1ldGEtc2VsZWN0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dGhpcy5zZWxzLmJvZHkubm9kZSgpKTtcblxuICAgICAgICB0aGlzLnZpenMgPSB7XG4gICAgICAgICAgICBsZWZ0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciwgeyBzaWRlOiBcImxlZnRcIiwgfSksXG4gICAgICAgICAgICByaWdodEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwicmlnaHRcIiB9KSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IG5ldyBMZWZ0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBuZXcgUmlnaHRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGVudGlvblN2ZzogbmV3IEF0dGVudGlvbkdyYXBoKHRoaXMuc2Vscy5hdG5EaXNwbGF5LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBjb3JwdXNJbnNwZWN0b3I6IG5ldyBDb3JwdXNJbnNwZWN0b3IodGhpcy5zZWxzLmNvcnB1c0luc3BlY3RvciwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgY29ycHVzTWF0TWFuYWdlcjogbmV3IENvcnB1c01hdE1hbmFnZXIodGhpcy5zZWxzLmNvcnB1c01hdE1hbmFnZXIsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IGlkeHM6IHRoaXMudWlDb25mLm9mZnNldElkeHMoKSB9KSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXhBdHQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRIYW5kbGVyKClcbiAgICB9XG5cbiAgICBwcml2YXRlIG1haW5Jbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICB0aGlzLmFwaS5nZXRNb2RlbERldGFpbHModGhpcy51aUNvbmYubW9kZWwoKSkudGhlbihtZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBtZC5wYXlsb2FkXG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5uTGF5ZXJzKHZhbC5ubGF5ZXJzKS5uSGVhZHModmFsLm5oZWFkcylcbiAgICAgICAgICAgIHRoaXMuaW5pdExheWVycyh0aGlzLnVpQ29uZi5uTGF5ZXJzKCkpXG5cbiAgICAgICAgICAgIHRoaXMuYXBpLmdldE1ldGFBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oYXR0ZW50aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSBhdHRlbnRpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGcm9tUmVzcG9uc2UoYXR0KVxuXG4gICAgICAgICAgICAgICAgLy8gV3JhcCBwb3N0SW5pdCBpbnRvIGZ1bmN0aW9uIHNvIGFzeW5jaHJvbm91cyBjYWxsIGRvZXMgbm90IG1lc3Mgd2l0aCBuZWNlc3NhcnkgaW5pdHNcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRGlzcGxheSA9IHRoaXMudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvRGlzcGxheSA9PSAnY29udGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXJ5Q29udGV4dCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9EaXNwbGF5ID09ICdlbWJlZGRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlFbWJlZGRpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBub3JtQnlcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkgJiYgKCF0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1CeSA9IHRwLk5vcm1CeS5Db2xcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1CeSA9IHRwLk5vcm1CeS5BbGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5ub3JtQnkgPSBub3JtQnlcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tYXNrSW5kcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMgPSB0aGlzLnVpQ29uZi5tYXNrSW5kcygpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIG9ubHkgMSBtYXNrIGluZCBpcyBwcmVzZW50IGZvciBhdXRvcmVncmVzc2l2ZSBtb2RlbHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSg8bnVtYmVyPnRoaXMudWlDb25mLnRva2VuKCkuaW5kKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMubGVmdC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IG5leHQuLi5cIlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLnJpZ2h0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgbmV4dC4uLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5kaXZIb3Zlci50ZXh0SW5mbyA9IFwiV291bGQgcHJlZGljdCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5yaWdodC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGcm9tUmVzcG9uc2UoYXR0ZW50aW9uOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICB0aGlzLmF0dENhcHN1bGUgPSBtYWtlRnJvbU1ldGFSZXNwb25zZShhdHRlbnRpb24sIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSlcbiAgICAgICAgdGhpcy50b2tDYXBzdWxlID0gbmV3IFRva2VuV3JhcHBlcihhdHRlbnRpb24pO1xuICAgICAgICB0aGlzLl9zdGF0aWNJbml0cygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsZWF2ZUNvcnB1c01zZyhtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzSW5zcGVjdG9yLmhpZGVWaWV3KClcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuaGlkZVZpZXcoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgbGVhdmUgbXNnXCIpO1xuICAgICAgICBTZWwudW5oaWRlRWxlbWVudCh0aGlzLnNlbHMuY29ycHVzTXNnQm94KVxuICAgICAgICB0aGlzLnNlbHMuY29ycHVzTXNnQm94LnRleHQobXNnKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2JpbmRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIChlKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYudWlDb25mLm1vZGVsS2luZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgICAgICBlLnNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsICFlLnNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gc2lkZVRvTGV0dGVyKGUuc2lkZSwgdGhpcy51aUNvbmYuYXR0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlW2xldHRlcl0udG9nZ2xlKGUuaW5kKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbigocmVzcDogcnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHJlc3AucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGUudXBkYXRlVG9rZW5zKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyh0aGlzLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvcmVncmVzc2l2ZSBtb2RlbCBkb2Vzbid0IGRvIG1hc2tpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hhdCBraW5kIG9mIG1vZGVsIGlzIHRoaXM/XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3ZlciwgKGU6IHRwLlRva2VuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSwgZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdXQsIChlKSA9PiB7XG4gICAgICAgICAgICBjaG9vc2VTaG93QWxsKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnRvZ2dsZVRva2VuKGUpXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuICAgICAgICAgICAgICAgIHNob3dCeVNpZGUoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva1RvZ2dsZSgpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2Vscy5hdG5IZWFkcy5oZWFkSW5mby5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2Vscy5hdG5IZWFkcy5oZWFkSW5mby5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3V0XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZU1hdCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKHVwZGF0ZU1hdClcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcudXBkYXRlKHVwZGF0ZU1hdClcblxuICAgICAgICAgICAgc2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWRzKHRoaXMudWlDb25mLmhlYWRzKCkpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEoYXR0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUoYXR0KVxuICAgICAgICAgICAgc2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VNb3ZlLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZEluZm8gPSBzZWxmLnNlbHMuYXRuSGVhZHMuaGVhZEluZm9cbiAgICAgICAgICAgIGxldCBsZWZ0LCB0b3AsIGJvcmRlclJhZGl1c1xuXG4gICAgICAgICAgICBpZiAoZS5zaWRlID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzEyLCAzXVxuICAgICAgICAgICAgICAgIGxlZnQgPSBlLm1vdXNlWzBdICsgZS5iYXNlWCAtICgraGVhZEluZm8uc3R5bGUoJ3dpZHRoJykucmVwbGFjZSgncHgnLCAnJykgKyBkaXZPZmZzZXRbMF0pXG4gICAgICAgICAgICAgICAgdG9wID0gZS5tb3VzZVsxXSArIGUuYmFzZVkgLSAoK2hlYWRJbmZvLnN0eWxlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsICcnKSArIGRpdk9mZnNldFsxXSlcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgPSBcIjhweCA4cHggMXB4IDhweFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbLTEzLCAzXVxuICAgICAgICAgICAgICAgIGxlZnQgPSBlLm1vdXNlWzBdICsgZS5iYXNlWCArIGRpdk9mZnNldFswXVxuICAgICAgICAgICAgICAgIHRvcCA9IGUubW91c2VbMV0gKyBlLmJhc2VZIC0gKCtoZWFkSW5mby5zdHlsZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCAnJykgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gXCI4cHggOHB4IDhweCAxcHhcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkSW5mb1xuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgU3RyaW5nKHRvcCkgKyAncHgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsIGJvcmRlclJhZGl1cylcbiAgICAgICAgICAgICAgICAudGV4dChgSGVhZDogJHtlLmluZCArIDF9YClcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3ZlclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIChlOiB7IGhlYWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy51aUNvbmYudG9nZ2xlSGVhZChlLmhlYWQpXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuQURERUQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuUkVNT1ZFRCkge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdmVyLCAoZTogeyB2YWw6IFwicG9zXCIgfCBcImRlcFwiIHwgXCJpc19lbnRcIiwgb2Zmc2V0OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU91dCwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCB0aGUgYmVsb3cgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IHRoZSB3aG9sZSBjb2x1bW5cbiAgICAgICAgICAgIC8vIGNvbnN0IHNlbGVjdG9yID0gYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoc2VsZWN0b3IpLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU92ZXIsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCB0cnVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZDMuc2VsZWN0KGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7ZS5pZHh9J11gKVxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IHJvdy5zZWxlY3QoYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gKVxuICAgICAgICAgICAgd29yZC5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF90b2dnbGVUb2tlblNlbCgpIHtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMudWlDb25mLnRva2VuKClcbiAgICAgICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkID0gZDMuc2VsZWN0KCcuc2VsZWN0ZWQtdG9rZW4nKVxuXG4gICAgICAgIC8vIElmIG5vIHRva2VuIHNob3VsZCBiZSBzZWxlY3RlZCwgdW5zZWxlY3QgYWxsIHRva2Vuc1xuICAgICAgICBpZiAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbDogZDMuU2VsZWN0aW9uPEJhc2VUeXBlLCBhbnksIEJhc2VUeXBlLCBhbnk+ID0gZDMuc2VsZWN0QWxsKCcuc2VsZWN0ZWQtdG9rZW4nKVxuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbGVjdCB0aGUgaW5kaWNhdGVkIHRva2VuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4yU3RyaW5nID0gKGU6IHRwLlRva2VuRXZlbnQpID0+IGAjJHtlLnNpZGV9LXRva2VuLSR7ZS5pbmR9YFxuICAgICAgICAgICAgY29uc3QgbmV3U2VsID0gZDMuc2VsZWN0KHRva2VuMlN0cmluZyhlKSlcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2VsZWN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyB0b2tlbiBzZWxlY3Rpb24sIGlmIGFueVxuICAgICAgICBpZiAoIWFscmVhZHlTZWxlY3RlZC5lbXB0eSgpKSB7XG4gICAgICAgICAgICBhbHJlYWR5U2VsZWN0ZWQuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSgrZS5pbmQpXG4gICAgICAgICAgICB0aGlzLm1hcmtOZXh0VG9nZ2xlKCtlLmluZCwgdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgfVxuXG4gICAgLyoqIEdyYXkgYWxsIHRva2VucyB0aGF0IGhhdmUgaW5kZXggZ3JlYXRlciB0aGFuIGluZCAqL1xuICAgIHByaXZhdGUgZ3JheUJhZFRva3MoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JheVRva3MgPSBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICBzLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgaSA+IGluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnJpZ2h0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKGdyYXlUb2tzKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdyYXlUb2dnbGUoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgICAgICAgICB0aGlzLmdyYXlCYWRUb2tzKGluZClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcudG9rZW4nKS5jbGFzc2VkKCdtYXNrZWQtdG9rZW4nLCBmYWxzZSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya05leHRXb3JkVG9rcyhpbmQ6IG51bWJlciwgTjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1hcmtUb2tzID0gZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHMuY2xhc3NlZChcIm5leHQtdG9rZW5cIiwgaSA9PSBNYXRoLm1pbihpbmQgKyAxLCBOKSlcbiAgICAgICAgfVxuICAgICAgICBkMy5zZWxlY3RBbGwoJy5yaWdodC10b2tlbicpLmVhY2gobWFya1Rva3MpXG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKG1hcmtUb2tzKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya05leHRUb2dnbGUoaW5kOiBudW1iZXIsIE46IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSlcbiAgICAgICAgICAgIHRoaXMubWFya05leHRXb3JkVG9rcyhpbmQsIE4pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnRva2VuJykuY2xhc3NlZCgnbmV4dC10b2tlbicsIGZhbHNlKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1vZGVsU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLWNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6IFwiYWxiZXJ0LWJhc2UtdjFcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJncHQyXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImRpc3RpbGJlcnQtYmFzZS11bmNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGlzdGlscm9iZXJ0YS1iYXNlXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGlzdGlsZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJiZXJ0LWJhc2UtdW5jYXNlZFwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcInJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcImdwdDItbWVkaXVtXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBSLm1hcChSLnByb3AoJ25hbWUnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZHMgPSBSLm1hcChSLnByb3AoJ2tpbmQnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZG1hcCA9IFIuemlwT2JqKG5hbWVzLCBraW5kcylcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5zZWxlY3RBbGwoJy5tb2RlbC1vcHRpb24nKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdvcHRpb24nKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21vZGVsLW9wdGlvbicsIHRydWUpXG4gICAgICAgICAgICAucHJvcGVydHkoJ3ZhbHVlJywgZCA9PiBkLm5hbWUpXG4gICAgICAgICAgICAuYXR0cihcIm1vZGVsa2luZFwiLCBkID0+IGQua2luZClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5uYW1lKVxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIHRoaXMudWlDb25mLm1vZGVsKCkpO1xuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgY29uc3QgbW5hbWUgPSBtZS5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWwobW5hbWUpO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWxLaW5kKGtpbmRtYXBbbW5hbWVdKTtcbiAgICAgICAgICAgIGlmIChraW5kbWFwW21uYW1lXSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU0VUVElORyBNQVNLIElORFNcIik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHMoW10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1haW5Jbml0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENvcnB1c1NlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgY29kZTogXCJ3b3pcIiwgZGlzcGxheTogXCJXaXphcmQgb2YgT3pcIiB9LFxuICAgICAgICAgICAgeyBjb2RlOiBcIndpa2lcIiwgZGlzcGxheTogXCJXaWtpcGVkaWFcIiB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zZWxzLmNvcnB1c1NlbGVjdG9yLnNlbGVjdEFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQuY29kZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kaXNwbGF5KVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLmNvcnB1cyhtZS5wcm9wZXJ0eSgndmFsdWUnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudWlDb25mLmNvcnB1cygpKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhdGljSW5pdHMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRTZW50ZW5jZUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdE1vZGVsU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRDb3JwdXNTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW5pdFF1ZXJ5Rm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0QWRkZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgdGhpcy5faW5pdE1ldGFTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdFRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QWRkZXIoKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVVybE9mZnNldElkeHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmlkeHMpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXhDb3JwdXNNYXRIZWlnaHRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3V3JhcHBlZCA9IHRoaXMuX3dyYXBSZXN1bHRzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEobmV3V3JhcHBlZC5kYXRhKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRMZWZ0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmFkZExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbFJpZ2h0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmtpbGxSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5raWxsTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsTGVmdCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5yZWZyZXNoLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLnRleHQoKSAhPSAnJykgZml4Q29ycHVzTWF0SGVpZ2h0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gb25yZXNpemVcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWV0YVNlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy5faW5pdE1hdGNoZWRXb3JkU2VsZWN0b3IodGhpcy5zZWxzLm1ldGFTZWxlY3Rvci5tYXRjaGVkV29yZClcbiAgICAgICAgdGhpcy5faW5pdE1heEF0dFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF4QXR0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNYXhBdHRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXgoKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIC8vIERvIHRvZ2dsZVxuICAgICAgICAgICAgc2VsLnNlbGVjdEFsbCgnLmFjdGl2ZScpLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tZXRhTWF4KHZhbClcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC5tZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF0Y2hlZFdvcmRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSA8U2ltcGxlTWV0YT5kMy5zZWxlY3QodGhpcykuYXR0cigndmFsdWUnKVxuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1hdGNoKHZhbClcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlU2VhcmNoaW5nKGF0dHI6IGJvb2xlYW4pIHtcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmNvbnRleHRRdWVyeSlcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmVtYmVkZGluZ1F1ZXJ5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbDogdHAuU2ltcGxlTWV0YSkge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzSW5zcGVjdG9yLnNob3dOZXh0KHRoaXMudWlDb25mLnNob3dOZXh0KVxuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5waWNrKHZhbClcbiAgICAgICAgdGhpcy52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQubWV0YSh2YWwpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNlbnRlbmNlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3BsYWNlaG9sZGVyJywgXCJFbnRlciBuZXcgc2VudGVuY2UgdG8gYW5hbHl6ZVwiKVxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigndmFsdWUnLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpKVxuXG4gICAgICAgIGNvbnN0IGNsZWFySW5zcGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdE5ld1NlbnRlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJlbmNlcyBvZiAnIycgaW4gc2VudGVuY2UgYXMgdGhpcyBjYXVzZXMgdGhlIEFQSSB0byBicmVha1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2VfYTogc3RyaW5nID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLnByb3BlcnR5KFwidmFsdWVcIikucmVwbGFjZSgvXFwjL2csICcnKVxuXG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgZm9ybSBpcyBmaWxsZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBpZiAoc2VudGVuY2VfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgc2VudGVuY2VfYSwgdGhpcy51aUNvbmYubGF5ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnNlbnRlbmNlKHNlbnRlbmNlX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5ybVRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnNwZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25FbnRlciA9IFIuY3VycnkoKGtleUNvZGUsIGYsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0ga2V5Q29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXJTdWJtaXQgPSBvbkVudGVyKDEzLCBzdWJtaXROZXdTZW50ZW5jZSlcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnNlbHMuZm9ybS5idXR0b247XG4gICAgICAgIGNvbnN0IGlucHV0Qm94ID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBO1xuXG4gICAgICAgIGJ0bi5vbihcImNsaWNrXCIsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuICAgICAgICBpbnB1dEJveC5vbigna2V5cHJlc3MnLCBvbkVudGVyU3VibWl0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaEVtYmVkcygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2tlbiA9IHRoaXMudWlDb25mLnRva2VuKCk7XG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMudml6cy50b2tlbnNbc2F2ZWRUb2tlbi5zaWRlXS5nZXRFbWJlZGRpbmcoc2F2ZWRUb2tlbi5pbmQpXG4gICAgICAgIHJldHVybiBvdXQuZW1iZWRkaW5nc1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmNvbnRleHRzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VBUkNISU5HIEVNQkVERElOR1NcIik7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gdGhpcy5fZ2V0U2VhcmNoRW1iZWRzKClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcbiAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci5zaG93TmV4dChzZWxmLnVpQ29uZi5zaG93TmV4dClcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHNlbGYuYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBlbWJlZCwgbGF5ZXIsIGhlYWRzLCBrKVxuICAgICAgICAgICAgLnRoZW4oKHZhbDogcnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGVhdmVDb3JwdXNNc2coYEVtYmVkZGluZ3MgYXJlIG5vdCBhdmFpbGFibGUgZm9yIG1vZGVsICcke3NlbGYudWlDb25mLm1vZGVsKCl9JyBhbmQgY29ycHVzICcke3NlbGYudWlDb25mLmNvcnB1cygpfScgYXQgdGhpcyB0aW1lLmApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdmFsLnBheWxvYWRcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLnVuaGlkZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci51bmhpZGVWaWV3KClcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRlZFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXRjaGVkSGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkRGVzY3JpcHRpb24udGV4dCh0aGlzLnVpQ29uZi5tYXRjaEhpc3RvZ3JhbURlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1BVENIRVI6IFwiLCBzZWxmLnNlbHMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLnVwZGF0ZShjb3VudGVkVmFscylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5kaXNwbGF5SW5zcGVjdG9yKCdlbWJlZGRpbmdzJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hJTkcgQ09OVEVYVFNcIik7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9nZXRTZWFyY2hDb250ZXh0KClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcbiAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci5zaG93TmV4dChzZWxmLnVpQ29uZi5zaG93TmV4dClcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgc2VsZi5hcGkuZ2V0TmVhcmVzdENvbnRleHRzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBjb250ZXh0LCBsYXllciwgaGVhZHMsIGspXG4gICAgICAgICAgICAudGhlbigodmFsOiByc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxlYXZlQ29ycHVzTXNnKGBDb250ZXh0cyBhcmUgbm90IGF2YWlsYWJsZSBmb3IgbW9kZWwgJyR7c2VsZi51aUNvbmYubW9kZWwoKX0nIGFuZCBjb3JwdXMgJyR7c2VsZi51aUNvbmYuY29ycHVzKCl9JyBhdCB0aGlzIHRpbWUuYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB2YWwucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJISURJTkdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodilcblxuICAgICAgICAgICAgICAgICAgICBTZWwuaGlkZUVsZW1lbnQoc2VsZi5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51bmhpZGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudW5oaWRlVmlldygpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudGVkVmFscyA9IHdyYXBwZWRWYWxzLmdldE1hdGNoZWRIaXN0b2dyYW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQudXBkYXRlKGNvdW50ZWRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YShzZWxmLnVpQ29uZi5tZXRhTWF4KCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hDb250ZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIiwgdGhpcy51aUNvbmYudG9rZW4oKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hFbWJlZGRpbmdzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hpbmdEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnVpQ29uZi5oZWFkcygpLmxlbmd0aCA9PSAwKSB8fCAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGlzYWJsZXIoKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVTZWFyY2hpbmcodGhpcy5fc2VhcmNoaW5nRGlzYWJsZWQoKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0UXVlcnlGb3JtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb250ZXh0UXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUNvbnRleHQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5lbWJlZGRpbmdRdWVyeS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX3F1ZXJ5RW1iZWRkaW5ncygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVuZGVySGVhZFN1bW1hcnkoKSB7XG4gICAgICAgIHRoaXMuc2Vscy5zZWxlY3RlZEhlYWRzXG4gICAgICAgICAgICAuaHRtbChSLmpvaW4oJywgJywgdGhpcy51aUNvbmYuaGVhZHMoKS5tYXAoaCA9PiBoICsgMSkpKVxuICAgIH1cblxuICAgIC8vIE1vZGlmeSBmYWlzcyByZXN1bHRzIHdpdGggY29ycmVzcG9uZGluZyBoZWlnaHRzXG4gICAgcHJpdmF0ZSBfd3JhcFJlc3VsdHMocmV0dXJuZWRGYWlzc1Jlc3VsdHM6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IGQzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1yb3cnKVxuXG4gICAgICAgIC8vIERvbid0IGp1c3QgdXNlIG9mZnNldEhlaWdodCBzaW5jZSB0aGF0IHJvdW5kcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSByb3dzLm5vZGVzKCkubWFwKChuOiBIVE1MRWxlbWVudCkgPT4gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG5cbiAgICAgICAgY29uc3QgbmV3VmFscyA9IHJldHVybmVkRmFpc3NSZXN1bHRzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGhlaWdodHNbaV0sIHYpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBuZXcgRmFpc3NTZWFyY2hSZXN1bHRXcmFwcGVyKG5ld1ZhbHMsIHRoaXMudWlDb25mLnNob3dOZXh0KVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVkVmFsc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdExheWVycyhuTGF5ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gc2VsZi5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgwLCBuTGF5ZXJzKSlcbiAgICAgICAgICAgIC5qb2luKFwibGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnV0dG9uIGxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBsYXJnZXN0IGxheWVyIGF2YWlsYWJsZSBpZiB1aUNvbmYubGF5ZXIoKSA+IG5ldyBuTGF5ZXJzXG4gICAgICAgICAgICAgICAgaWYgKGQgPT0gc2VsZi51aUNvbmYubGF5ZXIoKSkgeyAvLyBKYXZhc2NyaXB0IGlzIDAgaW5kZXhlZCFcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkID09IG5MYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIoZClcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IGQgKyAxKVxuICAgICAgICAgICAgLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJyYWRpb1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoZWNrYm94LWlubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJuYW1lXCIsIFwibGF5ZXJib3hcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVhZFwiLCBkID0+IGQpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBcImxheWVyQ2hlY2tib3hcIiArIGkpXG4gICAgICAgIC8vIC50ZXh0KChkLCBpKSA9PiBkICsgXCIgXCIpXG5cbiAgICAgICAgZnJvbUV2ZW50KGNoZWNrYm94ZXMubm9kZXMoKSwgJ2NoYW5nZScpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gZDMuc2VsZWN0KDxCYXNlVHlwZT5lLnRhcmdldCkuZGF0dW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEsIFwiLS0tIG15RGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBkID0+IGQgPT09IG15RGF0YSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFwKCh2OiBFdmVudCkgPT4gK2QzLnNlbGVjdCg8QmFzZVR5cGU+di50YXJnZXQpLmRhdHVtKCkpLFxuICAgICAgICAgICAgdGFwKHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGxheWVyOiBcIiwgdik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIodik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCh2KSA9PiBmcm9tKHNlbGYuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMoc2VsZi51aUNvbmYubW9kZWwoKSwgc2VsZi50b2tDYXBzdWxlLmEsIHNlbGYudWlDb25mLnNlbnRlbmNlKCksIHYpKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyhzZWxmLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIHNlbGYuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IGAjbGF5ZXJDaGVja2JveCR7dGhpcy51aUNvbmYubGF5ZXIoKX1gXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF5ZXIgSUQ6IFwiLCBsYXllcklkKTtcbiAgICAgICAgZDMuc2VsZWN0KGxheWVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKVxuXG4gICAgICAgIC8vIEluaXQgdGhyZXNob2xkIHN0dWZmXG4gICAgICAgIGNvbnN0IGRpc3BUaHJlc2ggPSAodGhyZXNoKSA9PiBNYXRoLnJvdW5kKHRocmVzaCAqIDEwMClcbiAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuXG4gICAgICAgIHRoaXMuc2Vscy50aHJlc2hTbGlkZXIub24oXCJpbnB1dFwiLCBfLnRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSA8SFRNTElucHV0RWxlbWVudD50aGlzO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYudGhyZXNob2xkKCtub2RlLnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI215LXJhbmdlLXZhbHVlJykudGV4dChkaXNwVGhyZXNoKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKSlcbiAgICAgICAgICAgIHNlbGYudml6cy5hdHRlbnRpb25TdmcudGhyZXNob2xkKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKVxuICAgICAgICB9LCAxMDApKVxuXG4gICAgICAgIHRoaXMuc2Vscy5oZWFkU2VsZWN0QWxsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0QWxsSGVhZHMoKTtcbiAgICAgICAgICAgIHNlbGYuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3ROb25lLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0Tm9IZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKTtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgX2luaXRUb2dnbGUoKSB7XG4gICAgICAgIGZyb21FdmVudCh0aGlzLnNlbHMuY2xzVG9nZ2xlLm5vZGUoKSwgJ2lucHV0JykucGlwZShcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogRklYICFcbiAgICAgICAgICAgIG1hcChlID0+IGUuc3JjRWxlbWVudC5jaGVja2VkKSxcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCh2KVxuICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS56ZXJvZWQodilcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXR0SGVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckF0dEhlYWQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRzID0gXy5yYW5nZSgwLCB0aGlzLnVpQ29uZi5fbkhlYWRzKVxuICAgICAgICBjb25zdCBmb2N1c0F0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5hdHRcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnVpQ29uZi5oYXNUb2tlbigpID8gdGhpcy51aUNvbmYudG9rZW4oKSA6IG51bGxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGxlZnRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwibGVmdFwiLCB0b2tlbik7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByaWdodEF0dEluZm8gPSBnZXRBdHRlbnRpb25JbmZvKGZvY3VzQXR0LCBoZWFkcywgXCJyaWdodFwiLCB0b2tlbik7XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLmxlZnRIZWFkcy51cGRhdGUobGVmdEF0dEluZm8pXG4gICAgICAgIHRoaXMudml6cy5yaWdodEhlYWRzLnVwZGF0ZShyaWdodEF0dEluZm8pXG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlXG4gICAgICAgIGhlYWRzLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oZWFkU2V0KCkuaGFzKGgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMF1dXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMV1dXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJub3c6IFwiLCB0aGlzLnVpQ29uZi5vZmZzZXQpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0LnVwZGF0ZShsZWZ0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC5tYXNrKGxlZnQubWFza0luZHMpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0LnVwZGF0ZShyaWdodC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0Lm1hc2socmlnaHQubWFza0luZHMpO1xuICAgICAgICAvLyBkaXNwbGF5U2VsZWN0ZWRUb2tlblxuICAgIH1cblxuICAgIHJlbmRlclN2ZygpIHtcbiAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5vcHRpb25zLm9mZnNldCA9IHRoaXMudWlDb25mLm9mZnNldFxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==