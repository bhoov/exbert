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
        // Below are the available models. Will need to choose 3 to be available ONLY
        const data = [
            { name: "bert-base-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "bert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilbert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            // { name: "distilroberta-base", kind: tp.ModelKind.Bidirectional },
            { name: "albert-base-v1", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            // { name: "roberta-base", kind: tp.ModelKind.Bidirectional },
            { name: "gpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL215TWFpbi50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vbm9kZS1mZXRjaCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpP2E4YjciLCJ3ZWJwYWNrOi8vL3N0cmluZ19kZWNvZGVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQjs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBTyxNQUFNLE9BQU8sR0FBRztJQUN0QiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFF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QyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7O0FDekNIO0FBQUE7QUFBQSw0SEFBNEg7QUFDckgsTUFBTSxTQUFTLEdBQUc7SUFDckIsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMs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QUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLE1BQU07UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7OztBQzkvQkQsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi90cy9tYWluLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJleEJFUlQuaHRtbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgY29uc3QgRGVtb0FQSSA9IHtcblx0XCI1MjdmZGFjNDQwNGJmOWJhNTQxMjY0NmFkNDU3OTUwZDQ0ODI3NjJjXCI6IFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyYy5qc29uXCIsXG5cdFwiNTliNGFjYzA1ZjFkODBlY2JlZjFjMjNlYWYyZmRhMTAyMjJjYjI1N1wiOiBcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTcuanNvblwiLFxuXHRcIjM1NDk5MmYyZWUyMzY2MDRjODc0YTNhNjI3ZTQwNDJiYzY4NTg2ZjhcIjogXCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4Lmpzb25cIixcblx0XCI1MDE1ZTVhMzE4NjA1Y2VhNjgwODUzOGRiMTRkOGFmMTY4ODdiMDc2XCI6IFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3Ni5qc29uXCIsXG5cdFwiM2M5YWExNTJhYzg5NDMwNjA0MDcwM2M1MDk1NTk5YjE5OWNhZDFhOVwiOiBcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTkuanNvblwiLFxuXHRcIjBmZWNlMGM4NzIwM2U4M2FmZDE2NzRiNWFlZWJhZWQwZjVmYTA1NjJcIjogXCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyLmpzb25cIixcblx0XCJkM2EwZTQwNDVlYTQ4YTI3NWNlNTFhNmFmMDI4MDQwNjA2MGY0N2NmXCI6IFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZi5qc29uXCIsXG5cdFwiZWQ5OGQ3NTFhYjliNmE0YTBlODVlOTMzMmI0MjBhNGMxM2FiNzVhN1wiOiBcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTcuanNvblwiLFxuXHRcIjBkMjRhZTA4ZWViMjFhZjgyYzY2NmNiZTJhYzA2NDZlZDljOWQ5YTZcIjogXCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2Lmpzb25cIixcblx0XCI2ZGUwNTNiM2I4YTRkOTA0NzgwYzlhNjU0NWEwYTYzY2JiYjJiMTQ0XCI6IFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NC5qc29uXCIsXG5cdFwiZjY4ZGYyMzM2NWZhZjAyZjljMDE0MzkzNDViZWQ2NjkzNmVkODVmN1wiOiBcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjcuanNvblwiLFxuXHRcIjQ2MDhjYjRmYzAwYjQzZmZmNjgwOThlODU2NzZmYWQ1N2M5NDBmMDJcIjogXCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyLmpzb25cIixcblx0XCJkZmNkNTAxNDZkYThkODEyMmE1YTU3YzJhM2MwYWJjZTUwM2JhOTRiXCI6IFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0Yi5qc29uXCIsXG5cdFwiMzRjODYyOWQ0MjY1ZDdmM2VkZTNhZGQ0MmYzNjEzYjIwNWQ5NGMxY1wiOiBcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWMuanNvblwiLFxuXHRcImRiMmRjMjUyYTc4NjY1MGY2NDM5NWEwZjVkMTgxYzA4MzEwMTljYmZcIjogXCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmLmpzb25cIixcblx0XCJkYTQ1OTdkNzNkNDQ0NzU3YmRlOTE3NjM5NWJmMzFhYWQzMzM0MTMxXCI6IFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMS5qc29uXCIsXG5cdFwiYTJlYmYxM2QzYzkzNzFmY2Y3MzhiOTY1MTgyNGUyYzNjZDFmZjhlMFwiOiBcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTAuanNvblwiLFxuXHRcImJjNDE5MjM4YzIwZGQxYzVjZmUxY2M0MjdhYjNkMWUzMTM1MzQzNmFcIjogXCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhLmpzb25cIixcblx0XCI4NGU4YmU5ZmU1NjJmYmQwNDg3YzAzYjU1Y2M2YjRmM2ZiOGNkNzg3XCI6IFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4Ny5qc29uXCIsXG5cdFwiMjA3ZTZjOThhMGUxNDlkYzdlNmVkNjcxMTgyOTZkOGE4Yzg5YjNjM1wiOiBcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzMuanNvblwiLFxuXHRcImMxODVhOTM0OWJhNWEzMjVhY2Y4NTE0ZTliNTBkZTcxMjgwNDg4YWFcIjogXCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhLmpzb25cIixcblx0XCJkZGU0ODFhNWNkMzY2N2FlOGM2YzViNWUxNDIxZGM4ODJiNmEyZGQ2XCI6IFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNi5qc29uXCIsXG5cdFwiZjYzZTE0ZTkzNWQ5ODk0OGI0YTBlYmM5NjYzNDAwZGJlNDI2MzM0OFwiOiBcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDguanNvblwiLFxuXHRcIjc5Yjk2NGQxYTVjODU0ZGVhZWFjZTI2ODEzZjk2OTk0YmI4MmFlZjJcIjogXCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyLmpzb25cIixcblx0XCIzYjExNjhlYzk2YWYwMGM0ZTg4NzM0MWU5MmE4NzhmODc1MmUxZDE3XCI6IFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxNy5qc29uXCIsXG5cdFwiOGM0NjJiYzI5OGUzMTgzZWZhOGQ5ZTg2M2UyNWVhNWQ4OTgwNmIwM1wiOiBcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDMuanNvblwiLFxuXHRcIjk5Mzk2OThlZGFhMjViYmFlOWVlMWQyNzg2NGU2OThmMTM5NjNmMDZcIjogXCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2Lmpzb25cIixcblx0XCI3M2YxZWU0OTdiM2U3YjYzOTRlNTU3MjZiMThkYmY5ZDUxNGRjZWE2XCI6IFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNi5qc29uXCIsXG5cdFwiYzdjZGI4MGJmODEzZTFkZTI0MTI2MGFlZGU2Y2QyOGVhNjVjY2ZhZVwiOiBcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWUuanNvblwiLFxuXHRcImE5NmZlZDE2ZWFiMWJmNmQwOGU0MDAxYzAyODk0ZDljNTQ5ZGY2MjdcIjogXCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3Lmpzb25cIixcblx0XCJhOGVhZjEwZGE4ZGM3NWI0MmU3MmJkYzcwOTE3NzYyNDdmZmY5NjU3XCI6IFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1Ny5qc29uXCIsXG5cdFwiYTgxOTRmMjMwOWUxYzcxZTk3N2VmOGQzYmU1NzJhZTAwYjBlOTFmMlwiOiBcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjIuanNvblwiLFxuXHRcIjJmNGExNWI2NmZjZmIwYzdhNDNhMzNkOTM3NjM5OTAyODJiZmM1YWFcIjogXCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhLmpzb25cIixcblx0XCIwNjA5NWNlZjRhN2Y0OWIxOGYxNTNlNjdlMzNmZGRiODMxYTE1YjQ2XCI6IFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0Ni5qc29uXCIsXG5cdFwiNGM5M2VhZjBjMGNlNTZmMWU1ZDUxMDA5MTZhYmY0ZDMxZWIzNWRhNVwiOiBcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTUuanNvblwiLFxuXHRcImY4YzQwYzY3Yzg1MWEwNDg5Zjc0ODBjOTliMzFiNGY2MDZjMDE4NGJcIjogXCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiLmpzb25cIixcblx0XCJlNGU3MWY2ZWE1N2JlMmUwNWQ2MmFmMDgyNWE4MGYxNDQ0MjFlMDJkXCI6IFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZC5qc29uXCIsXG5cdFwiZTdkOWQ1MjA4ODI3ODJjN2NmYmZmZWFkYWFmMjJiNGMwYTA4MWM3Y1wiOiBcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2MuanNvblwiLFxuXHRcIjRhYTRlYjEwZWFkNDRhMGEzYzJkZDk1NDA3MDE3YTkyODEzOGIzMmJcIjogXCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiLmpzb25cIixcblx0XCJkYTMxZDU1ZWU4Y2IwMWJjZGIyOTU3MmNiOTAyYjhlNzk5Njg1YmUyXCI6IFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMi5qc29uXCIsXG5cdFwiZTQyNzE4MWZiMDJiYmYxOWY3YmJiNjVjOWQ5Mzg5ZDJkOWE0MTgxMlwiOiBcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTIuanNvblwiLFxuXHRcImJiY2FiOWUxY2E2MGE4NTFmZDdlY2ZkYTgwZGU0NzBhZmE3NDA5MzZcIjogXCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2Lmpzb25cIixcblx0XCI0ZGU5NmFhMjA1MDc2ODYzYzlmYjRlYTk5ZTJiYTg2ZmExMzFmZjc2XCI6IFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3Ni5qc29uXCIsXG5cdFwiZTRjNmQxYjMwMDRlM2NkZDBjODc5YTU5NjM5YjVjZTk5MzIwN2E5OVwiOiBcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTkuanNvblwiLFxuXHRcImZiYzlkYTc5YjhiZjM5ZGM5OTk4NDA4NTI2NzQxZjgxMWExM2U2YWFcIjogXCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhLmpzb25cIixcblx0XCI1Mjg1NTRlZTRlNjE1YzYxMjg3YzQwZWQ5YTJhZWE2OWI5MWFmNmM5XCI6IFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOS5qc29uXCIsXG5cdFwiNWU3MDczYzAzYzM3ZDE5ODI2YjJmYjRhNjU5OWNjYWVkZGU0OTJlNFwiOiBcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTQuanNvblwiLFxuXHRcIjcxYzRhODg2Y2RlZTU4YTM3MWFlMjExNTMxMWIxNTBlODRlNTU1ZjZcIjogXCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2Lmpzb25cIixcblx0XCI0YmNlMDk3MGE0NjVmZTliOTYzMDVlMDZhZjE5YzVkOWM5N2Q3Y2MzXCI6IFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjMy5qc29uXCIsXG5cdFwiZWZkYjFmMGE3MGYyMmY4MGZmM2NlYTBjYjc5YmVjNzE3ZmM4YjZmN1wiOiBcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjcuanNvblwiLFxuXHRcIjE3NGM2Zjc4NmQxMzljZTExMTM4MTA0NWQ2MGQyNTY4MmExNjhiOTlcIjogXCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5Lmpzb25cIixcblx0XCJhOGMyM2U4OGQ2Y2E2ZDRlZmQyNjQ2YjA3NDJjMGZhMzJkYmQ1NWE0XCI6IFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNC5qc29uXCIsXG5cdFwiZjY5NDljMjg3NTJkZTM1YTg3MGVmZGUzMDg1ODVhY2Q0NmEyNTI3OFwiOiBcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzguanNvblwiLFxuXHRcImMxYmRiOGNiYWZkNWQ1ZDhmNmJkYTJiNGRiMTZiNmJjMmQ2MmUxOGFcIjogXCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhLmpzb25cIixcblx0XCIyYjgxYThmNjAyMjUxY2Y0MGI0NjgyYzhjZWRiMzk2NmI5MTJkN2M2XCI6IFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNi5qc29uXCIsXG5cdFwiOGY5NGU4NDNkMjUxMDA0N2ZkMWFmNDZmMjQ5YWZlODdmZjQ5Y2MyZlwiOiBcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmYuanNvblwiLFxuXHRcIjRlM2RkYjUxNTUwYzAzYzY0ZmRiZTU1OTI1MjY2NjUxMDBkMzI5MzBcIjogXCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwLmpzb25cIixcblx0XCJmODE2YjIzYWY5YWE0MzEyYzgwZTY2OGE2NmExNTZjOTM0Y2IzMzBjXCI6IFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwYy5qc29uXCIsXG5cdFwiMmZlMDVhOTExYTU3NGI4YTZkNGIwNWViMTNkYjllMDlhYWFjYWQyZFwiOiBcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmQuanNvblwiLFxuXHRcIjVjNzE0OTY3MjYzOTVhYWE0ZDBhNjUzNzNmZDE2NTFiNWEwZTZiMWZcIjogXCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmLmpzb25cIixcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgVG9rZW5EaXNwbGF5IH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyByc3AgZnJvbSAnLi9yZXNwb25zZXMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgRGVtb0FQSSB9IGZyb20gJy4vZGVtb0FQSSdcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnb2JqZWN0LWhhc2gnXG5pbXBvcnQgeyBtYWtlVXJsLCB0b1BheWxvYWQgfSBmcm9tICcuLi9ldGMvYXBpSGVscGVycydcbmltcG9ydCB7IFVSTEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvVVJMSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBlbXB0eVRva2VuRGlzcGxheSA9IG5ldyBUb2tlbkRpc3BsYXkoKVxuXG5jb25zdCBiYXNldXJsID0gVVJMSGFuZGxlci5iYXNpY1VSTCgpXG5cbi8qKlxuICogQSByZXdyaXRlIG9mIGBkMy1mZXRjaGAncyBgZDMuanNvbmAgY2FsbGJhY2suIElmIGFuIGFwaSBjYWxsIGZhaWxzLCBtYWtlIGEgYmFja3VwIGNhbGwgdG8gc3BlY2lmaWVkIHVybCBhbmQgcGF5bG9hZCwgaWYgc3BlY2lmaWVkLlxuICogXG4gKiBAcGFyYW0gcmVzcG9uc2UgT2JqZWN0IGV4cGVjdGVkIGF0IHRpbWUgb2YgY2FsbGJhY2tcbiAqIEBwYXJhbSBiYWNrdXBVcmwgQmFja3VwIHVybCBpbiB0aGUgZXZlbnQgb2YgZmFpbFxuICogQHBhcmFtIGJhY2t1cFBheWxvYWQgQmFja3VwIHBheWxvYWQgaWYgbWFraW5nIGEgcG9zdCByZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIHJlc3BvbnNlSnNvbihyZXNwb25zZSwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGlmIChiYWNrdXBVcmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVEFUSUMgRklMRSBOT1QgRk9VTkRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKS50aGVuKHJlc3BvbnNlSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxufVxuXG4vKipcbiAqIENoZWNrIGZpcnN0IGlmIHRoZSBpbmZvcm1hdGlvbiBiZWluZyBzZW50IGV4aXN0cyBpbiBhIHN0YXRpYyBkZW1vIGZpbGUuIElmIGl0IGRvZXMsIHNlbmQgdGhhdC4gT3RoZXJ3aXNlLCBtYWtlIGEgbm9ybWFsIGNhbGwgdG8gdGhlIHNlcnZlci5cbiAqIFxuICogQHBhcmFtIHRvU2VuZCBUaGUgcGFja2V0IG9mIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gYW4gQVBJIGVuZHBvaW50XG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRlbW8gZmlsZSBpcyBub3QgZm91bmRcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIGRlbW8gZmlsZSBub3QgZm91bmQsIGZvciBQT1NUIHJlcXVlc3RzIG9ubHlcbiAqL1xuZnVuY3Rpb24gY2hlY2tEZW1vQVBJKHRvU2VuZCwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBjb25zdCBoc2ggPSBoYXNoLnNoYTEodG9TZW5kKTtcbiAgICBjb25zb2xlLmxvZyhcIkNIRUNLSU5HIERFTU9BUEk6IFwiICsgaHNoKTtcbiAgICBpZiAoRGVtb0FQSS5oYXNPd25Qcm9wZXJ0eShoc2gpKSB7XG4gICAgICAgIC8vIFJlbGllcyBvbiBhIHN5bWJvbGljIGxpbmsgYmVpbmcgcHJlc2VudCBpbiB0aGUgZGlzdCBmb2xkZXIgdG8gdGhlIGRlbW8gZm9sZGVyXG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi9kZW1vLycgKyBEZW1vQVBJW2hzaF1cbiAgICAgICAgY29uc29sZS5sb2coXCJUUllJTkcgVE8gU0VORElORyBTVEFUSUM6IFwiLCBwYXRoKTtcbiAgICAgICAgY29uc3QgZm9sbG93ID0gKHJlc3BvbnNlKSA9PiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZClcbiAgICAgICAgcmV0dXJuIGZldGNoKHBhdGgpLnRoZW4oZm9sbG93KVxuICAgIH1cbiAgICByZXR1cm4gZDMuanNvbihiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG59XG5cblxuZXhwb3J0IGNsYXNzIEFQSSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VVUkw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVSTCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVUkwgPSBiYXNldXJsICsgJy9hcGknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kZWxEZXRhaWxzKG1vZGVsOiBzdHJpbmcsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5Nb2RlbERldGFpbFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyBcIi9nZXQtbW9kZWwtZGV0YWlsc1wiLCB0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICBnZXRNZXRhQXR0ZW50aW9ucyhtb2RlbDogc3RyaW5nLCBzZW50ZW5jZTogc3RyaW5nLCBsYXllcjogbnVtYmVyLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBzZW50ZW5jZSxcbiAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvYXR0ZW5kK21ldGFcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIC8vIEFkZCBoYXNoIGFuZCB2YWx1ZSB0byBoYXNoT2JqXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBkaXNwbGF5IGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhbHJlYWR5IHBhcnNlZCBmcm9tIHRoZSBwYXNzZWQgc2VudGVuY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIGEgVGhlIGRpc3BsYXllZCB0b2tlbnMgaW4gdGhlIGNvbHVtbnMgXG4gICAgICogQHBhcmFtIHNlbnRlbmNlQSBUaGUgb3JpZ2luYWwgc2VudGVuY2UgdGhhdCBsZWQgdG8gdGhlIHRva2VuaXplZCBpbmZvcm1hdGlvbiBpbiBgYWBcbiAgICAgKiBAcGFyYW0gbGF5ZXIgV2hpY2ggbGF5ZXIgdG8gc2VhcmNoIGF0XG4gICAgICogQHBhcmFtIGhhc2hPYmogSWYgbm90IG51bGwsIHN0b3JlIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgcmVzcG9uc2VzIGludG8gdGhlIHBhc3NlZCBvYmplY3QuIFVzZWQgZm9yIGNyZWF0aW5nIGRlbW9zLlxuICAgICAqL1xuICAgIHVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgdG9rZW5zOiBUb2tlbkRpc3BsYXksIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgdG9rZW5zOiBSLm1hcChSLnByb3AoJ3RleHQnKSwgdG9rZW5zLnRva2VuRGF0YSksXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG5cbiAgICAgICAgICAgIC8vIEVtcHR5IG1hc2tzIG5lZWQgdG8gYmUgc2VudCBhcyBhIG51bWJlciwgdW5mb3J0dW5hdGVseS4gQ2hvb3NpbmcgLTEgZm9yIHRoaXNcbiAgICAgICAgICAgIG1hc2s6IHRva2Vucy5tYXNrSW5kcy5sZW5ndGggPyB0b2tlbnMubWFza0luZHMgOiBbLTFdLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3VwZGF0ZS1tYXNrJyk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0b1BheWxvYWQodG9TZW5kKVxuXG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmogZm9yIGRlbW8gcHVycG9zZXNcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCwgcGF5bG9hZCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIFBPU1QgXCIgKyB1cmwsIHBheWxvYWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwsIHBheWxvYWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGVtYmVkZGluZyBFbWJlZGRpbmcgb2YgdGhlIHdvcmRcbiAgICAgKiBAcGFyYW0gbGF5ZXIgSW4gdGhlIGwndGggbGF5ZXJcbiAgICAgKiBAcGFyYW0gayBob3cgbWFueSByZXN1bHRzIHRvIHJldHJpZXZlXG4gICAgICovXG4gICAgZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGVtYmVkZGluZzogbnVtYmVyW10sIGxheWVyOiBudW1iZXIsIGhlYWRzOiBudW1iZXJbXSwgayA9IDEwLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTxyc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgY29ycHVzOiBjb3JwdXMsXG4gICAgICAgICAgICBlbWJlZGRpbmc6IGVtYmVkZGluZyxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWVtYmVkZGluZ3MnLCB0b1NlbmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TmVhcmVzdENvbnRleHRzKG1vZGVsOiBzdHJpbmcsIGNvcnB1czogc3RyaW5nLCBjb250ZXh0OiBudW1iZXJbXSwgbGF5ZXI6IG51bWJlciwgaGVhZHM6IG51bWJlcltdLCBrID0gMTAsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5OZWFyZXN0TmVpZ2hib3JSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBjb3JwdXM6IGNvcnB1cyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgICAgICBoZWFkczogaGVhZHMsXG4gICAgICAgICAgICBrOiBrLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL2stbmVhcmVzdC1jb250ZXh0cycsIHRvU2VuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG59O1xuIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyB4XyBmcm9tICcuLi9ldGMvX1Rvb2xzJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcblxuLyoqXG4gKiBOb3RlczpcbiAqIFxuICogLSBBbHNvIGVuY2Fwc3VsYXRlIHRoZSBDTFMvU0VQIGluZm8gdnMuIG5vIENMUy9TRVAgaW5mb1xuICogLSBXaGVuIGxheWVyIGZvcm1hdCBjaGFuZ2VzIGZyb20gbGlzdCwgZHJvcCB0aGUgaW5kZXggaW50byBjb25mLmxheWVyXG4gKi9cblxuY29uc3QgYnBlVG9rZW5zID0gW1wiW0NMU11cIiwgXCJbU0VQXVwiLCBcIjxzPlwiLCBcIjwvcz5cIiwgXCI8fGVuZG9mdGV4dHw+XCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7U3BhY3lJbmZvfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtpbml0WmVyb30gZnJvbSAnLi4vZXRjL3hyYW1kYSdcblxuLy8gSWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0cnkgdG8gbWFrZSBsb3dlcmNhc2VcbmNvbnN0IG1ha2VTdHJpbmdMb3dlciA9IFIuaWZFbHNlKFIuaXMoU3RyaW5nKSwgUi50b0xvd2VyLCBSLmlkZW50aXR5KVxuXG5mdW5jdGlvbiBhcmdNYXgoYXJyYXk6bnVtYmVyW10pIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGFycmF5LCAoeCwgaSkgPT4gW3gsIGldKS5yZWR1Y2UoKHIsIGEpID0+IChhWzBdID4gclswXSA/IGEgOiByKSlbMV07XG59XG5cblxuZXhwb3J0IGNsYXNzIEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB7XG4gICAgZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW11cblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHNob3dOZXh0OiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdLCBzaG93TmV4dD1mYWxzZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgICAgIHRoaXMub3B0aW9ucy5zaG93TmV4dCA9IHNob3dOZXh0XG4gICAgfVxuXG4gICAgZ2V0IG1hdGNoQXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93TmV4dCgpID8gXCJtYXRjaGVkX2F0dF9wbHVzXzFcIiA6IFwibWF0Y2hlZF9hdHRcIlxuICAgIH1cblxuICAgIGdldCBtYXRjaElkeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd05leHQoKSA/IFwibmV4dF9pbmRleFwiIDogXCJpbmRleFwiXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHBvc2l0aW9uIGluZm8gaW50ZXJwcmV0YWJsZSBieSB0aGUgaGlzdG9ncmFtXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvdW50T2JqIFJlcHJlc2VudHMgdGhlIGluZm9ycm1hdGlvbiB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIGhpc3RvZ3JhbVxuICAgICAqL1xuICAgIGNvdW50UG9zSW5mbygpIHtcbiAgICAgICAgY29uc3QgYXR0T2Zmc2V0cyA9IHRoaXMuZGF0YS5tYXAoKGQsaSkgPT4gK2RbdGhpcy5tYXRjaEF0dF0ub3V0Lm9mZnNldF90b19tYXgpXG5cbiAgICAgICAgY29uc3QgY3RPYmogPSB7XG4gICAgICAgICAgICBvZmZzZXQ6IGluaXRaZXJvKGF0dE9mZnNldHMpXG4gICAgICAgIH1cblxuICAgICAgICBhdHRPZmZzZXRzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdE9iaikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgICAgICAgIGN0T2JqW2tdW3ZdICs9IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGN0T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXhBdHRLZXlzKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgLy8gVGhlIGtleXMgaW4gdGhlIGJlbG93IG9iamVjdCBkaWN0YXRlIHdoYXQgd2UgY291bnRcbiAgICAgICAgY29uc3QgY291bnRPYmogPSB7XG4gICAgICAgICAgICBwb3M6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmRlcCksXG4gICAgICAgICAgICBpc19lbnQ6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25mdXNpbmc6IFNob3cgTUFUQ0hFRCBXT1JEIGF0dGVudGlvbnMsIGJ1dCBORVhUIFdPUkQgZGlzdHJpYnV0aW9uXG4gICAgICAgIGNvbnN0IGdldE1heFRva2VuID0gKGQ6IHRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnNbYXJnTWF4KGQubWF0Y2hlZF9hdHQub3V0LmF0dCldXG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heE1hdGNoID0gZ2V0TWF4VG9rZW4oZClcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXhNYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBuZXdDb3VudE9iaiA9IE9iamVjdC5hc3NpZ24oY291bnRPYmosIHRoaXMuY291bnRQb3NJbmZvKCkpXG4gICAgICAgIHJldHVybiBuZXdDb3VudE9ialxuICAgIH1cblxuICAgIGNvdW50TWF0Y2hlZEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAvLyBDb25mdXNpbmc6IFNob3cgTUFUQ0hFRCBXT1JEIGF0dGVudGlvbnMsIGJ1dCBORVhUIFdPUkQgZGlzdHJpYnV0aW9uXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGQudG9rZW5zW2RbdGhpcy5tYXRjaElkeF0gKyBpbmRleE9mZnNldF1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRPYmpcbiAgICB9XG5cbiAgICBnZXRNYXRjaGVkSGlzdG9ncmFtKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudE1hdGNoZWRLZXlzKGluZGV4T2Zmc2V0KVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIHRvdGFsSGlzdClcblxuICAgICAgICByZXR1cm4gbm9uWmVyb1xuICAgIH1cblxuICAgIGdldE1heEF0dEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgLy8gY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudFBvc0luZm8oKVxuICAgICAgICBjb25zdCBuZXdIaXN0ID0gdGhpcy5jb3VudE1heEF0dEtleXMoKVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIG5ld0hpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG5cbiAgICBzaG93TmV4dCgpOiBib29sZWFuXG4gICAgc2hvd05leHQodjpib29sZWFuKTogdGhpc1xuICAgIHNob3dOZXh0KHY/KSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvd05leHRcblxuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd05leHQgPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogVGhlIG9yaWdpbmFsIHRva2VucywgYW5kIHRoZSBpbmRleGVzIHRoYXQgbmVlZCB0byBiZSBtYXNrZWRcbiAqL1xuIGNvbnN0IGVtcHR5RnVsbFJlc3BvbnNlOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10gPSBbe1xuICAgICB0ZXh0OiAnW1NFUF0nLFxuICAgICBlbWJlZGRpbmdzOiBbXSxcbiAgICAgY29udGV4dHM6IFtdLFxuICAgICBicGVfdG9rZW46ICcnLFxuICAgICBicGVfcG9zOiAnJyxcbiAgICAgYnBlX2RlcDogJycsXG4gICAgIGJwZV9pc19lbnQ6IG51bGwsXG4gICAgIHRvcGtfd29yZHM6IFtdLFxuICAgICB0b3BrX3Byb2JzOiBbXVxuIH1dXG5cbmV4cG9ydCBjbGFzcyBUb2tlbkRpc3BsYXkgIHtcbiAgICB0b2tlbkRhdGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdXG4gICAgbWFza0luZHM6bnVtYmVyW11cblxuICAgIGNvbnN0cnVjdG9yKHRva2Vucz1lbXB0eUZ1bGxSZXNwb25zZSwgbWFza0luZHM9W10pe1xuICAgICAgICB0aGlzLnRva2VuRGF0YSA9IHRva2VucztcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IG1hc2tJbmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2ggaWR4IHRvIHRoZSBtYXNrIGlkeCBsaXN0IGluIG9yZGVyIGZyb20gc21hbGxlc3QgdG8gbGFyZ2VzdFxuICAgICAqL1xuICAgIG1hc2sodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgeF8ub3JkZXJlZEluc2VydF8odGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsfSBhbHJlYWR5IGluIG1hc2tJbmRzIWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXNrSW5kcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLm1hc2sodmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVubWFza2luZyAke3ZhbH1gKTtcbiAgICAgICAgICAgIHRoaXMudW5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFzayh2YWwpIHtcbiAgICAgICAgXy5wdWxsKHRoaXMubWFza0luZHMsIHZhbCk7XG4gICAgfVxuXG4gICAgcmVzZXRNYXNrKCkge1xuICAgICAgICB0aGlzLm1hc2tJbmRzID0gW107XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbmNhdChvdGhlcjogVG9rZW5EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IF8uY29uY2F0KHRoaXMudG9rZW5EYXRhLCBvdGhlci50b2tlbkRhdGEpO1xuICAgICAgICBjb25zdCBuZXdNYXNrID0gXy5jb25jYXQodGhpcy5tYXNrSW5kcywgb3RoZXIubWFza0luZHMubWFwKHggPT4geCArIHRoaXMubGVuZ3RoKCkpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbkRpc3BsYXkobmV3VG9rZW5zLCBuZXdNYXNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbldyYXBwZXIge1xuICAgIGE6IFRva2VuRGlzcGxheVxuXG4gICAgY29uc3RydWN0b3Iocjp0cC5BdHRlbnRpb25SZXNwb25zZSl7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlc3BvbnNlKHIpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZyb21SZXNwb25zZShyOnRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHRva2Vuc0EgPSByLmFhLmxlZnQ7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUNvbXBvbmVudHModG9rZW5zQSwgW10pXG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbUNvbXBvbmVudHMoYTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10sIG1hc2tBOm51bWJlcltdKXtcbiAgICAgICAgdGhpcy5hID0gbmV3IFRva2VuRGlzcGxheShhLCBtYXNrQSlcbiAgICB9XG5cbiAgICB1cGRhdGVUb2tlbnMocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZGVzaXJlZEtleXMgPSBbJ2NvbnRleHRzJywgJ2VtYmVkZGluZ3MnLCAndG9wa19wcm9icycsICd0b3BrX3dvcmRzJ11cbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gci5hYS5sZWZ0Lm1hcCh2ID0+IFIucGljayhkZXNpcmVkS2V5cywgdikpXG5cbiAgICAgICAgY29uc3QgcGFpcnMgPSBSLnppcCh0aGlzLmEudG9rZW5EYXRhLCBuZXdUb2tlbnMpXG5cbiAgICAgICAgcGFpcnMuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZFsxXSkubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgIGRbMF1ba10gPSBkWzFdW2tdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFzayB0aGUgYXBwcm9wcmlhdGUgc2VudGVuY2UgYXQgdGhlIGluZGV4IGluZGljYXRlZFxuICAgICAqL1xuICAgIG1hc2soc0lEOnRwLlRva2VuT3B0aW9ucywgaWR4Om51bWJlcil7XG4gICAgICAgIHRoaXNbc0lEXS5tYXNrKGlkeClcbiAgICAgICAgY29uc3Qgb3B0cyA9IFtcImFcIiwgXCJiXCJdXG4gICAgICAgIGNvbnN0IE5hID0gdGhpcy5hLmxlbmd0aCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVUb0xldHRlcihzaWRlOnRwLlNpZGVPcHRpb25zLCBhdHlwZTp0cC5TZW50ZW5jZU9wdGlvbnMpe1xuICAgIC8vIGNvbnN0IGF0eXBlID0gY29uZi5hdHRUeXBlO1xuICAgIGlmIChhdHlwZSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcImFsbFwiXG4gICAgfVxuICAgIGNvbnN0IG91dCA9IHNpZGUgPT0gXCJsZWZ0XCIgPyBhdHlwZVswXSA6IGF0eXBlWzFdIC8vIE5vIHR5cGUgY2hlY2tpbmc/XG4gICAgcmV0dXJuIG91dFxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIHN0YXRpYyB0cmFuc2xhdGUoe3gsIHl9KTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZyk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRycyh7XG4gICAgICAgICAgICBjbGFzczogY2xhc3NlcyxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFNWRy50cmFuc2xhdGUocG9zKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRycyh7eDogMCwgeTogLTIwLCBjbGFzczogY2xhc3Nlc30pXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHRwIGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge0NPTE9SUzIwMH0gZnJvbSAnLi4vZXRjL2NvbG9ycycgXG5cbmV4cG9ydCBjbGFzcyBTcGFjeUluZm8ge1xuICAgIGNvbG9yU2NhbGU6dHAuQ29sb3JNZXRhU2NhbGVcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IHRoaXMuY3JlYXRlQ29sb3JTY2FsZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgRW5nbGlzaE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ3B1bmN0JywgJ3N5bScsICd4JywgJ2FkaicsICd2ZXJiJywgJ2NvbmonLCAnbnVtJywgJ2V0JywgJ2FkdicsICd4JywgJ2FkcCcsICdub3VuJywgJ3Byb3BuJywgJ3BhcnQnLCAncHJvbicsICdzcGFjZScsICdpbnRqJ10sXG4gICAgICAgIGRlcDogWydyb290JywgJ1JPT1QnLCAnYWNsJywgJ2Fjb21wJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhZ2VudCcsICdhbW9kJywgJ2FwcG9zJywgJ2F0dHInLCAnYXV4JywgJ2F1eHBhc3MnLCAnY2FzZScsICdjYycsICdjY29tcCcsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsIFxuICAgICAgICAnY3N1YmpwYXNzJywgJ2RhdGl2ZScsICdkZXAnLCAnZGV0JywgJ2RvYmonLCAnZXhwbCcsICdpbnRqJywgJ21hcmsnLCAnbWV0YScsICduZWcnLCAnbm4nLCAnbm91bm1vZCcsICducG1vZCcsICduc3ViaicsICduc3VianBhc3MnLCAnbnVtbW9kJywgJ29wcmQnLCBcbiAgICAgICAgJ29iaicsICdvYmwnLCAncGFyYXRheGlzJywgJ3Bjb21wJywgJ3BvYmonLCAncG9zcycsICdwcmVjb25qJywgJ3ByZWRldCcsICdwcmVwJywgJ3BydCcsICdwdW5jdCcsICdxdWFudG1vZCcsICdyZWxjbCcsICdyb290JywgJ3hjb21wJywgJ25wYWR2bW9kJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic29sZXRlLiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IGlzIGluY2x1ZGVkIHdoZW4gdHJhaW5lZCBvbiB0aGUgdW5pdmVyc2FsIGNvcnB1c1xuICAgICAqL1xuICAgIHN0YXRpYyBVbml2ZXJzYWxNZXRhT3B0aW9uczogdHAuTWV0YU9wdGlvbnMgPSB7XG4gICAgICAgIHBvczogWydhZGonLCAnYWRwJywgJ2FkdicsICdhdXgnLCAnY29uaicsICdjY29uaicsICdkZXQnLCAnaW50aicsICdub3VuJywgJ251bScsICdwYXJ0JywgJ3Byb24nLCAncHJvcG4nLCAncHVuY3QnLCAnc2NvbmonLCAnc3ltJywgJ3ZlcmInLCAneCcsICdzcGFjZSddLFxuICAgICAgICBkZXA6IFsnYWNsJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhbW9kJywgJ2FwcG9zJywgJ2F1eCcsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NsZicsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsICdkZXAnLCAnZGV0JywgJ2Rpc2NvdXJzZScsIFxuICAgICAgICAgICAgICAgICdkaXNsb2NhdGVkJywgJ2V4cGwnLCAnZml4ZWQnLCAnZmxhdCcsICdnb2Vzd2l0aCcsICdpb2JqJywgJ2xpc3QnLCAnbWFyaycsICdubW9kJywgJ25zdWJqJywgJ251bW1vZCcsICdvYmonLCAnb2JsJywgJ29ycGhhbicsICdwYXJhdGF4aXMnLCAncHVuY3QnLCAncmVwYXJhbmR1bScsIFxuICAgICAgICAgICAgICAgICdyb290JywgJ3ZvY2F0aXZlJywgJ3hjb21wJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIHN0YXRpYyBUb3RhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBSLnVuaW9uKFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMucG9zLCBTcGFjeUluZm8uVW5pdmVyc2FsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgZGVwOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmRlcCxcbiAgICAgICAgaXNfZW50OiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmlzX2VudCxcbiAgICAgICAgZW50czogU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5lbnRzLFxuICAgIH1cblxuICAgIGNyZWF0ZUNvbG9yU2NhbGVzKCk6IHRwLkNvbG9yTWV0YVNjYWxle1xuICAgICAgICBjb25zdCB0b1NjYWxlID0gKGtleXM6IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IFIuemlwT2JqKFIubWFwKFN0cmluZywga2V5cyksIENPTE9SUzIwMC5zbGljZSgwLCBrZXlzLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gayA9PiBSLnByb3BPcihcImJsYWNrXCIsIGssIG9iailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG15Q29sb3JzID0ge1xuICAgICAgICAgICAgcG9zOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICAgICAgZW50czogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5lbnRzKSxcbiAgICAgICAgICAgIG9mZnNldDogZDMuc2NhbGVPcmRpbmFsKCkucmFuZ2UoWydibGFjayddKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDx0cC5Db2xvck1ldGFTY2FsZT48dW5rbm93bj5teUNvbG9yc1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNwYWN5Q29sb3JzID0gbmV3IFNwYWN5SW5mbygpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgVVJMSGFuZGxlciB7XG5cbiAgICBzdGF0aWMgYmFzaWNVUkwoKSB7XG4gICAgICAgIGNvbnN0IHVybF9wYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTIpLmpvaW4oJy8nKTtcblxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICh1cmxfcGF0aC5sZW5ndGggPyB1cmxfcGF0aCA6ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGFsbCBVUkwgcGFyYW1ldGVycyBpbnRvIGEgbWFwLlxuICAgICAqIEByZXR1cm5zIHtNYXB9IHRoZSB1cmwgcGFyYW1ldGVycyBhcyBhIGtleS12YWx1ZSBzdG9yZSAoRVM2IG1hcClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHBhcmFtZXRlcnMoKTogb2JqZWN0IHtcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tOiAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDkwNTUxL3BhcnNlLXF1ZXJ5LXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGNvbnN0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJzLCBcIi0tLSB2YXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSB7fTtcblxuICAgICAgICBjb25zdCBpc0ludCA9IHggPT4gKC9eWzAtOV0rJC8pLnRlc3QoeCk7XG4gICAgICAgIGNvbnN0IGlzRmxvYXQgPSB4ID0+ICgvXlswLTldK1xcLlswLTldKiQvKS50ZXN0KHgpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVDYXN0ID0gdmFsID0+IHtcbiAgICAgICAgICAgIGlmIChpc0ludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGbG9hdCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlOlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFycy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcmF3X3ZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0c1sxXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcmF3X3ZhbHVlLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3X3ZhbHVlID0gcmF3X3ZhbHVlLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyYXdfdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSBpc0FycmF5ID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gcmF3X3ZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IHR5cGVDYXN0KHZhbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IHR5cGVDYXN0KHJhd192YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsUGFyYW1ldGVycztcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFVSTCBzdHJpbmcgZnJvbSBhIG1hcCBvZiB1cmwgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7e319IHVybFBhcmFtZXRlcnMgLSB0aGUgbWFwIG9mIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFVSSSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsU3RyaW5nKHVybFBhcmFtZXRlcnM6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBhdHRyID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtZXRlcnMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdXJsUGFyYW1ldGVyc1trXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB2YWx1ZSA9ICcuLicgKyB2LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICBhdHRyLnB1c2goZW5jb2RlVVJJKGsgKyAnPScgKyB2YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBsZXQgcmVzID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXMgKz0gJz8nICsgYXR0ci5qb2luKCcmJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVSTFBhcmFtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYW55W10sIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgICAgIGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybChjdXJyZW50UGFyYW1zLCBhZGRUb0Jyb3dzZXJIaXN0b3J5KTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBHZW5lcmF0ZXMgYSBrZXktdmFsdWUgbWFwIG9mIGFsbCBVUkwgcGFyYW1zIGFuZCByZXBsYWNlcyByZXBsYWNlS2V5c1xuICAgIC8vICAqIEBwYXJhbSB1cGRhdGVLZXlzXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHVwZGF0ZVVSTFBhcmFtcyh1cGRhdGVLZXlzKSB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgLy8gICAgIE9iamVjdC5rZXlzKHVwZGF0ZUtleXMpLmZvckVhY2goKGspID0+IGN1cnJlbnRQYXJhbXNba10gPSB1cGRhdGVLZXlzW2tdKVxuICAgIC8vICAgICByZXR1cm4gY3VycmVudFBhcmFtcztcbiAgICAvLyB9XG5cblxuICAgIHN0YXRpYyB1cGRhdGVVcmwodXJsUGFyYW1ldGVyczogb2JqZWN0LCBhZGRUb0Jyb3dzZXJIaXN0b3J5ID0gdHJ1ZSkge1xuICAgICAgICBpZiAoYWRkVG9Ccm93c2VySGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHsgcHJlZml4ID0gJycgfSk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfaWRfY291bnRlciArPSAxO1xuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB0aGVfdW5pcXVlX2lkX2NvdW50ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBEM1NlbCA9IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+XG5cbi8qKlxuICogU2VsZWN0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIHNob3VsZCBiZSBzdGF0aWMgbWV0aG9kcyBpbiB0aGUgYmVsb3cgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbCB7XG4gICAgc3RhdGljIHNldFNlbFZpc2libGUgPSAoeDogRDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgIHN0YXRpYyBzZXRWaXNpYmxlID0gKHg6IHN0cmluZykgPT4gU2VsLnNldFNlbFZpc2libGUoZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBzZXRIaWRkZW4gPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgaGlkZUVsZW1lbnQgPSAoaEU6IEQzU2VsKSA9PiBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnfSlcbiAgICBzdGF0aWMgdW5oaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGx9KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvb3NlT2JqZWN0IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIGFzY09yZGVyKG4xLCBuMikge1xuICAgIGlmIChuMSA8IG4yKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAobjEgPiBuMikgeyBcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQge2ZpbmRBbGxJbmRleGVzLCBpbnNlcnRBdF8sIG9yZGVyZWRJbnNlcnRfLCBzZXQyU29ydGVkQXJyYXl9XG5cbi8qKlxuICogRmluZCBhbGwgaW5kZXhlcyB0aGF0IG1hdGNoIGEgcGFydGljdWxhciBwcmVkaWNhdGVcbiAqL1xuZnVuY3Rpb24gZmluZEFsbEluZGV4ZXM8VD4oYXJyYXk6QXJyYXk8VD4sIHByZWRpY2F0ZTooYTpUKSA9PiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIGxldCBmcm9tSW5kZXg9MDtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHdoaWxlIChpICE9IC0xKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpKTtcbiAgICAgICAgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGkrMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIGluc2VydEF0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGluZDpudW1iZXIpOkFycmF5PFQ+IHtcbiAgICBhcnJheS5zcGxpY2UoaW5kLCAwLCB2YWwpO1xuICAgIHJldHVybiBhcnJheVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzZXQgdG8gYW4gb3JkZXJlZCBhcnJheVxuICovXG5mdW5jdGlvbiBzZXQyU29ydGVkQXJyYXk8VD4oaW5wdXQ6U2V0PFQ+KTpBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoYXNjT3JkZXIpXG59XG5cbi8qKlxuICogSW5zZXJ0IGEgdmFsdWUgaW50byBhcnJheSBpbiBzb3J0ZWQgb3JkZXIgSU4gUExBQ0VcbiAqIFxuICogV0FSTklORzogT25seSBoYW5kbGVzIG51bWJlcnMsIHNvcnRlZCBmcm9tIGxlYXN0IHRvIGdyZWF0ZXN0XG4gKiAtIEFzc3VtZXMgYWxyZWFkeSBzb3J0ZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZEluc2VydF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBjb2xkc3RhcnQ9ZmFsc2UpOkFycmF5PFQ+IHtcbiAgICAvLyBSZXNvcnQgYXJyYXkgaWYgZGVzaXJlZFxuICAgIGlmIChjb2xkc3RhcnQpIHtcbiAgICAgICAgYXJyYXkuc29ydChhc2NPcmRlcilcbiAgICB9XG5cbiAgICBjb25zdCBpbmQgPSBfLnNvcnRlZEluZGV4KGFycmF5LCB2YWwpO1xuICAgIHJldHVybiBpbnNlcnRBdF8oYXJyYXksIHZhbCwgaW5kKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmRvbShsZW46bnVtYmVyKXtcbiAgY29uc3QgYTpudW1iZXJbXSA9IG5ldyBBcnJheShsZW4pLmZpbGwoMClcblxuICByZXR1cm4gYS5tYXAoKHgpID0+IHtyZXR1cm4gXy5yYW5kb20oLTUsIDUsIHRydWUpfSlcbn0iLCIvKipcbiAqIENvbnZlcnQgYSBKUyBvYmplY3QgaW50byBHRVQgVVJMIHBhcmFtZXRlcnNcbiAqIFxuICogQHBhcmFtIGJhc2UgQmFzZSBVUkwgYXRvcCB3aGljaCB0byBhZGQgR0VUIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHRvIGluc2VydCBpbnRvIGEgVVJMIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVybChiYXNlOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6c3RyaW5nIHtcbiAgICBpZiAocGFyYW1zKXtcbiAgICAgICAgbGV0IG91dDogc3RyaW5nID0gYmFzZSArIFwiP1wiO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCggayA9PiB7XG4gICAgICAgICAgICBvdXQgKz0gaztcbiAgICAgICAgICAgIG91dCArPSAnPSc7XG4gICAgICAgICAgICBvdXQgKz0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgb3V0ICs9IFwiJlwiO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3V0LnJlcGxhY2UoLyYkL2csIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGluZm9ybWF0aW9uIGluIEdFVCByZXF1ZXN0IGludG8gdGhlIG1lc3NhZ2UgZm9yIGEgUE9TVCByZXF1ZXN0ICAgIFxuICovXG5leHBvcnQgY29uc3QgdG9QYXlsb2FkID0gKHRvU2VuZCkgPT4ge3JldHVybiB7XG4gICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkodG9TZW5kKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG59fSIsIi8vIFtbdmFsLCBpbmRdLCBbdmFsLCBpbmRdLi4uXVxudHlwZSBDb21wRm5JbmQgPSAoYTpudW1iZXJbXSwgYjpudW1iZXJbXSkgPT4gbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRBcnJheSB7XG4gICAgYXJyOiBudW1iZXJbXSxcbiAgICBzb3J0SW5kaWNlczogbnVtYmVyW10sXG59XG5cbi8qKlxuICogQ29waWVzIGFuZCBzb3J0cyBhbiBhcnJheSB3aGlsZSBrZWVwaW5nIHRyYWNrIG9mIHRoZSBpbmRpY2VzLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzb3J0aW5nIG1heCAtPiBtaW4uXG4gKiBcbiAqIEBwYXJhbSBhcnIgLSBBcnJheSB0byBiZSBjb3BpZWQgYW5kIHNvcnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFdpdGhJbmRpY2VzKGFycjpudW1iZXJbXSwgZm4/OkNvbXBGbkluZCk6IFNvcnRBcnJheSB7XG4gICAgLy8gSWYgZm4gaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHNvcnRpbmcgYnkgbWF4IHZhbHVlXG4gICAgaWYgKCFmbikge1xuICAgICAgICBmbiA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV0IG91dDpTb3J0QXJyYXkgPSB7XG4gICAgICAgIGFycjogW10sXG4gICAgICAgIHNvcnRJbmRpY2VzOiBbXVxuICAgIH07XG5cbiAgICBsZXQgaWR4VHJhY2tlcjogbnVtYmVyW11bXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkeFRyYWNrZXJbaV0gPSBbYXJyW2ldLCBpXTtcbiAgICB9XG5cbiAgICBpZHhUcmFja2VyLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgb3V0LnNvcnRJbmRpY2VzLnB1c2goaWR4VHJhY2tlcltqXVsxXSk7XG4gICAgICBvdXQuYXJyW2pdID0gaWR4VHJhY2tlcltqXVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9IiwiLy8gQ29sb3JzIHdlcmUgZ2VuZXJhdGVkIHRvIGJlIGFzIHZpc3VhbGx5IGRpc3RpbmN0IGFzIHBvc3NpYmxlIGJ5OiBodHRwOi8vam5ubm5uLmdpdGh1Yi5pby9jYXRlZ29yeS1jb2xvcnMtY29uc3RyYWluZWQuaHRtbFxuZXhwb3J0IGNvbnN0IENPTE9SUzIwMCA9IFtcbiAgICBcIiMzOTU3ZmZcIiwgXCIjZDNmZTE0XCIsIFwiI2M5MDgwYVwiLCBcIiNmZWM3ZjhcIiwgXCIjMGI3YjNlXCIsIFwiIzBiZjBlOVwiLCBcIiNjMjAzYzhcIiwgXCIjZmQ5YjM5XCIsIFxuICAgIFwiIzg4ODU5M1wiLCBcIiM5MDY0MDdcIiwgXCIjOThiYTdmXCIsIFwiI2ZlNjc5NFwiLCBcIiMxMGIwZmZcIiwgXCIjYWM3YmZmXCIsIFwiI2ZlZTdjMFwiLCBcIiM5NjRjNjNcIixcbiAgICBcIiMxZGE0OWNcIiwgXCIjMGFkODExXCIsIFwiI2JiZDlmZFwiLCBcIiNmZTZjZmVcIiwgXCIjMjk3MTkyXCIsIFwiI2QxYTA5Y1wiLCBcIiM3ODU3OWVcIiwgXCIjODFmZmFkXCIsXG4gICAgXCIjNzM5NDAwXCIsIFwiI2NhNjk0OVwiLCBcIiNkOWJmMDFcIiwgXCIjNjQ2YTU4XCIsIFwiI2Q1MDk3ZVwiLCBcIiNiYjczYTlcIiwgXCIjY2NmNmU5XCIsIFwiIzljYjRiNlwiLFxuICAgIFwiI2I2YTdkNFwiLCBcIiM5ZThjNjJcIiwgXCIjNmU4M2M4XCIsIFwiIzAxYWY2NFwiLCBcIiNhNzFhZmRcIiwgXCIjY2ZlNTg5XCIsIFwiI2Q0Y2NkMVwiLCBcIiNmZDQxMDlcIixcbiAgICBcIiNiZjhmMGVcIiwgXCIjMmY3ODZlXCIsIFwiIzRlZDFhNVwiLCBcIiNkOGJiN2RcIiwgXCIjYTU0NTA5XCIsIFwiIzZhOTI3NlwiLCBcIiNhNDc3N2FcIiwgXCIjZmMxMmM5XCIsXG4gICAgXCIjNjA2ZjE1XCIsIFwiIzNjYzRkOVwiLCBcIiNmMzFjNGVcIiwgXCIjNzM2MTZmXCIsIFwiI2YwOTdjNlwiLCBcIiNmYzg3NzJcIiwgXCIjOTJhNmZlXCIsIFwiIzg3NWI0NFwiLFxuICAgIFwiIzY5OWFiM1wiLCBcIiM5NGJjMTlcIiwgXCIjN2Q1YmYwXCIsIFwiI2QyNGRmZVwiLCBcIiNjODViNzRcIiwgXCIjNjhmZjU3XCIsIFwiI2I2MjM0N1wiLCBcIiM5OTRiOTFcIixcbiAgICBcIiM2NDZiOGNcIiwgXCIjOTc3YWI0XCIsIFwiI2Q2OTRmZFwiLCBcIiNjNGQ1YjVcIiwgXCIjZmRjNGJkXCIsIFwiIzFjYWUwNVwiLCBcIiM3YmQ5NzJcIiwgXCIjZTk3MDBhXCIsXG4gICAgXCIjZDA4ZjVkXCIsIFwiIzhiYjllMVwiLCBcIiNmZGU5NDVcIiwgXCIjYTI5ZDk4XCIsIFwiIzE2ODJmYlwiLCBcIiM5YWQ5ZTBcIiwgXCIjZDZjYWZlXCIsIFwiIzhkODMyOFwiLFxuICAgIFwiI2IwOTFhN1wiLCBcIiM2NDc1NzlcIiwgXCIjMWY4ZDExXCIsIFwiI2U3ZWFmZFwiLCBcIiNiOTY2MGJcIiwgXCIjYTRhNjQ0XCIsIFwiI2ZlYzI0Y1wiLCBcIiNiMTE2OGNcIixcbiAgICBcIiMxODhjYzFcIiwgXCIjN2FiMjk3XCIsIFwiIzQ0NjhhZVwiLCBcIiNjOTQ5YTZcIiwgXCIjZDQ4Mjk1XCIsIFwiI2ViNmRjMlwiLCBcIiNkNWIwY2JcIiwgXCIjZmY5ZmZiXCIsXG4gICAgXCIjZmRiMDgyXCIsIFwiI2FmNGQ0NFwiLCBcIiNhNzU5YzRcIiwgXCIjYTllMDNhXCIsIFwiIzBkOTA2YlwiLCBcIiM5ZWUzYmRcIiwgXCIjNWI4ODQ2XCIsIFwiIzBkODk5NVwiLFxuICAgIFwiI2YyNWM1OFwiLCBcIiM3MGFlNGZcIiwgXCIjODQ3Zjc0XCIsIFwiIzkwOTRiYlwiLCBcIiNmZmUyZjFcIiwgXCIjYTY3MTQ5XCIsIFwiIzkzNmM4ZVwiLCBcIiNkMDQ5MDdcIixcbiAgICBcIiNjM2I4YTZcIiwgXCIjY2VmOGM0XCIsIFwiIzdhOTI5M1wiLCBcIiNmZGEyYWJcIiwgXCIjMmVmNmM1XCIsIFwiIzgwNzI0MlwiLCBcIiNjYjk0Y2NcIiwgXCIjYjZiZGQwXCIsXG4gICAgXCIjYjVjNzVkXCIsIFwiI2ZkZTE4OVwiLCBcIiNiN2ZmODBcIiwgXCIjZmEyZDhlXCIsIFwiIzgzOWE1ZlwiLCBcIiMyOGMyYjVcIiwgXCIjZTVlOWUxXCIsIFwiI2JjNzlkOFwiLFxuICAgIFwiIzdlZDhmZVwiLCBcIiM5ZjIwYzNcIiwgXCIjNGY3YTViXCIsIFwiI2Y1MTFmZFwiLCBcIiMwOWM5NTlcIiwgXCIjYmNkMGNlXCIsIFwiIzg2ODVmZFwiLCBcIiM5OGZjZmZcIixcbiAgICBcIiNhZmJmZjlcIiwgXCIjNmQ2OWI0XCIsIFwiIzVmOTlmZFwiLCBcIiNhYWE4N2VcIiwgXCIjYjU5ZGZiXCIsIFwiIzVkODA5ZFwiLCBcIiNkOWE3NDJcIiwgXCIjYWM1Yzg2XCIsXG4gICAgXCIjOTQ2OGQ1XCIsIFwiI2E0YTJiMlwiLCBcIiNiMTM3NmVcIiwgXCIjZDQzZjNkXCIsIFwiIzA1YTlkMVwiLCBcIiNjMzgzNzVcIiwgXCIjMjRiNThlXCIsIFwiIzZlYWJhZlwiLFxuICAgIFwiIzY2YmY3ZlwiLCBcIiM5MmNiYmJcIiwgXCIjZGRiMWVlXCIsIFwiIzFiZTg5NVwiLCBcIiNjN2VjZjlcIiwgXCIjYTZiYWE2XCIsIFwiIzgwNDVjZFwiLCBcIiM1ZjcwZjFcIixcbiAgICBcIiNhOWQ3OTZcIiwgXCIjY2U2MmNiXCIsIFwiIzBlOTU0ZFwiLCBcIiNhOTdkMmZcIiwgXCIjZmNiOGQzXCIsIFwiIzliZmVlM1wiLCBcIiM0ZThkODRcIiwgXCIjZmM2ZDNmXCIsXG4gICAgXCIjN2I5ZmQ0XCIsIFwiIzhjNjE2NVwiLCBcIiM3MjgwNWVcIiwgXCIjZDUzNzYyXCIsIFwiI2YwMGExYlwiLCBcIiNkZTVjOTdcIiwgXCIjOGVhMjhiXCIsIFwiI2ZjY2Q5NVwiLFxuICAgIFwiI2JhOWM1N1wiLCBcIiNiNzlhODJcIiwgXCIjN2M1YTgyXCIsIFwiIzdkN2NhNFwiLCBcIiM5NThhZDZcIiwgXCIjY2Q4MTI2XCIsIFwiI2JkYjBiN1wiLCBcIiMxMGUwZjhcIixcbiAgICBcIiNkY2NjNjlcIiwgXCIjZDZkZTBmXCIsIFwiIzYxNmQzZFwiLCBcIiM5ODVhMjVcIiwgXCIjMzBjN2ZkXCIsIFwiIzBhZWI2NVwiLCBcIiNlM2NkYjRcIiwgXCIjYmQxYmVlXCIsXG4gICAgXCIjYWQ2NjVkXCIsIFwiI2Q3NzA3MFwiLCBcIiM4ZWE1YjhcIiwgXCIjNWI1YWQwXCIsIFwiIzc2NjU1ZVwiLCBcIiM1OTgxMDBcIiwgXCIjODY3NTdlXCIsIFwiIzVlYTA2OFwiLFxuXSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4vVXRpbFwiXG5cbi8qKlxuICogQVRURU5USU9OIFJFU1BPTlNFUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBDb250YWluIHRoZSBhdHRlbnRpb25zIGFuZCBlbWJlZGRpbmdzIGZvciBhbGwgY29tYmluYXRpb25zIG9mIHJldHVybnMgZnJvbSB0aGUgYmFja2VuZFxuICovXG5cbmV4cG9ydCB0eXBlIE1vZGVsSW5mbyA9IHtcbiAgICBubGF5ZXJzOiBudW1iZXJcbiAgICBuaGVhZHM6IG51bWJlclxufVxuXG50eXBlIEFic3RyYWN0QXR0ZW50aW9uUmVzcG9uc2U8VD4gPSB7XG4gICAgYWE6IFRcbn1cblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTVUxUUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHJlc3VsdHMgdGhhdCBhcmUgZW5jYXNlZCBpbiB0aGUgJ2FhJyBhbmQgJ2FiJyBrZXlzIHJldHVybmVkXG4gKi9cbmV4cG9ydCB0eXBlIEF0dGVudGlvblJlc3BvbnNlID0gQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxBdHRlbnRpb25NZXRhUmVzdWx0PlxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uTWV0YVJlc3VsdCA9IEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PEZ1bGxTaW5nbGVUb2tlbkluZm9bXT5cblxuZXhwb3J0IHR5cGUgRnVsbFNpbmdsZVRva2VuSW5mbyA9IHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZW1iZWRkaW5nczogbnVtYmVyW10sXG4gICAgY29udGV4dHM6IG51bWJlcltdLFxuICAgIGJwZV90b2tlbjogc3RyaW5nLFxuICAgIGJwZV9wb3M6IHN0cmluZyxcbiAgICBicGVfZGVwOiBzdHJpbmcsXG4gICAgYnBlX2lzX2VudDogYm9vbGVhbixcbiAgICB0b3BrX3dvcmRzOiBzdHJpbmdbXSxcbiAgICB0b3BrX3Byb2JzOiBudW1iZXJbXVxufVxuXG5pbnRlcmZhY2UgQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8VD4ge1xuICAgIGF0dDogbnVtYmVyW11bXVtdLFxuICAgIGxlZnQ6IFQsXG4gICAgcmlnaHQ6IFQsXG59XG5cbi8qKlxuICogU0VBUkNIIFJFU1VMVCBUWVBFU1xuICovXG5cbmludGVyZmFjZSBNYXRjaGVkVG9rQXR0IHtcbiAgICBhdHQ6IG51bWJlcltdXG4gICAgb2Zmc2V0X3RvX21heDogbnVtYmVyXG4gICAgbG9jX29mX21heDogbnVtYmVyXG59XG5cblxuaW50ZXJmYWNlIE1hdGNoZWRBdHRlbnRpb25zIHtcbiAgICBpbjogTWF0Y2hlZFRva0F0dCxcbiAgICBvdXQ6IE1hdGNoZWRUb2tBdHQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFpc3NTZWFyY2hSZXN1bHRzIHtcbiAgICBzZW50ZW5jZTogc3RyaW5nXG4gICAgaW5kZXg6IG51bWJlclxuICAgIG5leHRfaW5kZXg6IG51bWJlclxuICAgIG1hdGNoOiBzdHJpbmdcbiAgICBtYXRjaF9wbHVzXzE6IHN0cmluZ1xuICAgIG1hdGNoZWRfYXR0OiBNYXRjaGVkQXR0ZW50aW9uc1xuICAgIG1hdGNoZWRfYXR0X3BsdXNfMTogTWF0Y2hlZEF0dGVudGlvbnNcbiAgICB0b2tlbnM6IFRva2VuRmFpc3NNYXRjaFtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5GYWlzc01hdGNoIHtcbiAgICB0b2tlbjogc3RyaW5nXG4gICAgcG9zOiBzdHJpbmdcbiAgICBkZXA6IHN0cmluZ1xuICAgIGlzX2VudDogc3RyaW5nXG4gICAgaXNfbWF0Y2g6IGJvb2xlYW5cbiAgICBpc19uZXh0X3dvcmQ6IGJvb2xlYW5cbiAgICBpbndhcmQ6IG51bWJlcltdXG4gICAgb3V0d2FyZDogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBFVkVOVCBUWVBFU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRXZlbnQge1xuICAgIHNlbD86IEQzU2VsLFxuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyIHwgXCJudWxsXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FbWJlZGRpbmdFdmVudCBleHRlbmRzIFRva2VuRXZlbnQge1xuICAgIGVtYmVkZGluZ3M6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIEhlYWRCb3hFdmVudCA9IHtcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlcixcbiAgICBoZWFkOiBudW1iZXIsXG59XG5cbi8qKlxuICogTUlTQ0VMTEFORU9VUyBUWVBFU1xuICovXG5cbmV4cG9ydCB0eXBlIFNlbnRlbmNlT3B0aW9ucyA9IFwiYWJcIiB8IFwiYmFcIiB8IFwiYWFcIiB8IFwiYmJcIiB8IFwiYWxsXCI7XG5leHBvcnQgdHlwZSBTaWRlT3B0aW9ucyA9IFwibGVmdFwiIHwgXCJyaWdodFwiXG5leHBvcnQgdHlwZSBTaW1wbGVNZXRhID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiXG5leHBvcnQgdHlwZSBUb2tlbk9wdGlvbnMgPSBcImFcIiB8IFwiYlwiIHwgXCJhbGxcIlxuXG5leHBvcnQgZW51bSBUb2dnbGVkIHtcbiAgICBBRERFRCA9IDAsXG4gICAgUkVNT1ZFRCxcbn1cblxuZXhwb3J0IGVudW0gTm9ybUJ5IHtcbiAgICBSb3cgPSAwLFxuICAgIENvbCxcbiAgICBBbGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBwb3M6IHN0cmluZ1tdLFxuICAgIGRlcDogc3RyaW5nW10sXG4gICAgaXNfZW50OiBhbnksXG4gICAgZW50czogc3RyaW5nW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YU9wdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBpc19lbnQ6IGJvb2xlYW5bXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1ldGFPcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgaXNfZW50OiBzdHJpbmdbXSAvLyBSZXByZXNlbnRpbmcgaGV4IGNvbG9yc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWV0YVNjYWxlIHtcbiAgICBwb3M6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBkZXA6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBpc19lbnQ6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBlbnRzOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgb2Zmc2V0PzogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxufVxuXG5leHBvcnQgZW51bSBNb2RlbEtpbmQge1xuICAgIEJpZGlyZWN0aW9uYWwgPSBcImJpZGlyZWN0aW9uYWxcIixcbiAgICBBdXRvcmVncmVzc2l2ZSA9IFwiYXV0b3JlZ3Jlc3NpdmVcIlxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7ICBcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG4gIH1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogTWFwIGEgbGlzdCBhcyB2YWx1ZXMgdG8gYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBvcmlnaW5hbCBsaXN0XG4gKi9cbi8vIChTdHJpbmcgLT4gYikgIC0+IFtTdHJpbmddIC0+IHtTdHJpbmc6IGJ9XG5leHBvcnQgY29uc3Qgb2JqRnJvbUtleXMgPSBSLmN1cnJ5KChmbiwga2V5cykgPT4gUi56aXBPYmooa2V5cywgUi5tYXAoZm4sIGtleXMpKSkgXG5cbmV4cG9ydCBjb25zdCBhc3NpZ25aZXJvOiAoeDphbnkpID0+IG51bWJlciA9IHggPT4gMDtcblxuLyoqXG4gKiBHaXZlbiBhbiBsaXN0LCBjcmVhdGUgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWxsIDBcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRaZXJvID0gb2JqRnJvbUtleXMoYXNzaWduWmVybykiLCJpbXBvcnQgeyBNYWluR3JhcGhpYyB9IGZyb20gJy4vdmlzL215TWFpbidcbmltcG9ydCB7IEFQSSwgZW1wdHlUb2tlbkRpc3BsYXkgfSBmcm9tICcuL2FwaS9tYWluQXBpJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIgfSBmcm9tICcuL2RhdGEvVG9rZW5XcmFwcGVyJ1xuLy8gaW1wb3J0IHsgVGVzdGVyIH0gZnJvbSBcIi4uL3RzL3Rlc3RcIlxuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1leEJFUlQuaHRtbCEuLi9leEJFUlQuaHRtbFwiO1xuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCJcblxuXG5mdW5jdGlvbiBkb015U3ZnKCkge1xuICAgIHJldHVybiBuZXcgTWFpbkdyYXBoaWMoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRpYyBmaWxlcyBuZWVkZWQgZm9yIHRoZSBkZW1vLiBTYXZlIHRoZSBrZXlzIGFuZCBmaWxlIHBhdGhzIHRvIGEganNvbiBvYmplY3QgdGhhdCBpcyB0aGVuIHdyaXR0ZW4gdG8gYSBmaWxlXG4gKlxuICogVGhpcyB3aWxsIHByaW50IHRoZSBvYmplY3QgYWZ0ZXIgZXZlcnkgY2FsbC4gV2hlbiB0aGUga2V5IGxlbmd0aCBpcyB0aGUgZXhwZWN0ZWQgbGVuZ3RoLCByaWdodCBjbGljayBpbiBjaHJvbWUgYW5kIHNlbGVjdCBcInNhdmUgYXMgZ2xvYmFsIHZhcmlhYmxlXCJcbiAqXG4gKiBUaGVuLCBpbiB0aGUgY29uc29sZSwgdHlwZSBcImNvcHkodGVtcDEpXCIuIFVzZSBzdWJsaW1lIHRleHQgKGl0IGlzIHRoZSBiZXN0IGZvciBoYW5kbGluZyBsYXJnZSBmaWxlcykgdG8gcGFzdGUgdGhpcyBpbnRvIHRoZSBjb2RlIGFuZCBzYXZlIGl0IGFzIF9fX18uanNvblxuICpcbiAqIEBwYXJhbSBzZW50ZW5jZSAtIFRoZSBzZW50ZW5jZSB0byBhbmFseXplXG4gKiBAcGFyYW0gbWFza0luZCAtIFdoaWNoIGluZGV4IHRvIG1hc2sgaW4gdGhlIHNlbnRlbmNlLiBBdG0sIGNhbiBvbmx5IHJlY29yZCBvbmUgbWFza2luZ1xuICogQHBhcmFtIG91dERpY3RQYXRoIC0gV2hlcmUgdG8gc2F2ZSB0aGUgb2JqZWN0IG9mIGhhc2hrZXk6IGZpbGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG4gICAgY29uc3QgbGF5ZXJzID0gXy5yYW5nZSgxMilcblxuICAgIGNvbnN0IEwgPSAwXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9ICAgICAgICAgIC8vIE1hcCBoYXNoIC0+IGNvbnRlbnRzXG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEyKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMobW9kZWxOYW1lLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjAgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIocjAucGF5bG9hZCk7XG5cbiAgICAgICAgICAgIC8vIFVubWFza2VkIHJlc3BvbnNlOlxuICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBjb250ZW50SGFzaCkudGhlbihyMSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTWFza2VkIHdvcmQgYW5kIHNlYXJjaGluZyByZXNwb25zZXM6XG4gICAgICAgICAgICAgICAgdG9rQ2Fwc3VsZS5hLm1hc2sobWFza0luZClcbiAgICAgICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoY29udGVudEhhc2gpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50SGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBcbiAqIE9ic2VydmUgaG93IHRoZSBkZW1vIGNyZWF0aW9uIHByb2Nlc3Mgd29ya3MuXG4gKiBcbiAqIElmIGRlc2lyZWQgdG8gbWFzayBtdWx0aXBsZSB3b3JkcyBpbiB0aGUgaW5wdXQgZm9yIGRlbW8gcHVycG9zZXMsIHRyeSBsb29waW5nIG92ZXIgdGhlIG1hc2sgaW5kcyBhbmQgbWFza2luZyBlYWNoIG9uZSBpbmRpdmlkdWFsbHlcbiAqIFxuICogQHBhcmFtIHNlbnRlbmNlIFRoZSBkZW1vIHNlbnRlbmNlXG4gKiBAcGFyYW0gbWFza0luZCBEZXNpcmVkIGluZGV4IHRvIG1hc2sgKGNhbiBjdXJyZW50bHkgb25seSBhY2NlcHQgYSBzaW5nbGUgbWFzayBpbmRleClcbiAqIEBwYXJhbSBvdXREaWN0UGF0aCBcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdERlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9XG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEpLmZvckVhY2goTCA9PiB7XG4gICAgICAgIGFwaS5nZXRNZXRhQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHNlbnRlbmNlLCBMLCBcIlwiKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwLnBheWxvYWQpO1xuXG4gICAgICAgICAgICAvLyBVbm1hc2tlZCByZXNwb25zZTpcbiAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgZW1wdHlUb2tlbkRpc3BsYXkpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSkudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTApLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVwbFRlc3QoKSB7XG4gICAgLy8gVGVzdGVyLnRlc3RBdHRXcmFwcGVyQ29uc3RydWN0b3IoKVxuICAgIC8vIFRlc3Rlci50ZXN0VXBkYXRlTWFza2VkQXR0ZW50aW9uKClcbiAgICAvLyBUZXN0ZXIudGVzdE5qQXJheSgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmFuZG9tQXJyYXlDcmVhdGlvbigpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NXcmFwcGVyKCk7XG4gICAgLy8gVGVzdGVyLnRlc3REM09yZGluYWwoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEZhaXNzU2VhcmNoUmVzdWx0c0hpc3QoKTtcbiAgICAvLyBUZXN0ZXIudGVzdFJlYWRpbmdKU09OKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZG9NeVN2ZygpO1xuICAgIC8vIHJlcGxUZXN0KCk7XG4gICAgLy8gY3JlYXRlRGVtb3MoXCJDaGlja2VuIHRhc3RlcyBhYnNvbHV0ZWx5IGRlbGljaW91cyBpZiB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZ1wiLCA0LCBcIlwiKVxuICAgIGNvbnNvbGUubG9nKFwiRG9uZSBsb2FkaW5nIHdpbmRvd1wiKTtcbn1cbiIsImltcG9ydCAqIGFzIHRwIGZyb20gXCIuL2V0Yy90eXBlc1wiXG5pbXBvcnQgKiBhcyB4XyBmcm9tIFwiLi9ldGMvX1Rvb2xzXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gXCIuL2V0Yy9VUkxIYW5kbGVyXCI7XG5cbmNvbnN0IGZhbHNleSA9IHZhbCA9PiAobmV3IFNldChbJ2ZhbHNlJywgMCwgXCJub1wiLCBmYWxzZSwgbnVsbCwgXCJcIl0pKS5oYXModmFsKVxuY29uc3QgdHJ1dGh5ID0gdmFsID0+ICFmYWxzZXkodmFsKVxuY29uc3QgdG9OdW1iZXIgPSB4ID0+ICt4O1xuXG5cbnR5cGUgSW5zcGVjdG9yT3B0aW9ucyA9IFwiY29udGV4dFwiIHwgXCJlbWJlZGRpbmdzXCIgfCBudWxsXG5cbi8vIE11c3QgYmUgb3B0aW9uYWwgcGFyYW1zIGZvciBpbml0aWFsaXphdGlvbnNcbmludGVyZmFjZSBVUkxQYXJhbWV0ZXJzIHtcbiAgICBzZW50ZW5jZT86IHN0cmluZ1xuICAgIG1vZGVsPzogc3RyaW5nXG4gICAgbW9kZWxLaW5kPzogc3RyaW5nXG4gICAgY29ycHVzPzogc3RyaW5nXG4gICAgbGF5ZXI/OiBudW1iZXJcbiAgICBoZWFkcz86IG51bWJlcltdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgdG9rZW5JbmQ/OiBudW1iZXIgfCAnbnVsbCdcbiAgICB0b2tlblNpZGU/OiB0cC5TaWRlT3B0aW9uc1xuICAgIG1ldGFNYXRjaD86IHRwLlNpbXBsZU1ldGEgfCBudWxsXG4gICAgbWV0YU1heD86IHRwLlNpbXBsZU1ldGEgfCBudWxsXG4gICAgZGlzcGxheUluc3BlY3Rvcj86IEluc3BlY3Rvck9wdGlvbnNcbiAgICBvZmZzZXRJZHhzPzogbnVtYmVyW11cbiAgICBtYXNrSW5kcz86IG51bWJlcltdXG4gICAgaGlkZUNsc1NlcD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNsYXNzIFVJQ29uZmlnIHtcblxuICAgIHByaXZhdGUgX2NvbmY6IFVSTFBhcmFtZXRlcnMgPSB7fVxuICAgIHByaXZhdGUgX2hlYWRTZXQ6IFNldDxudW1iZXI+O1xuICAgIGF0dFR5cGU6IHRwLlNlbnRlbmNlT3B0aW9ucztcbiAgICBfbkhlYWRzOiBudW1iZXIgfCBudWxsO1xuICAgIF9uTGF5ZXJzOiBudW1iZXIgfCBudWxsO1xuICAgIHByaXZhdGUgX3Rva2VuOiB0cC5Ub2tlbkV2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX25IZWFkcyA9IDEyOyAvLyBIb3cgZG8gSSBhdXRvbWF0ZSB0aGlzP1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRUeXBlID0gJ2FhJzsgLy8gRG9uJ3QgYWxsb3cgdGhpcyB0byBiZSBtb2RpZmllZCBieSB0aGUgdXNlci5cbiAgICAgICAgdGhpcy5mcm9tVVJMKClcbiAgICAgICAgdGhpcy50b1VSTChmYWxzZSlcbiAgICB9XG5cblxuICAgIGZyb21VUkwoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYgPSB7XG4gICAgICAgICAgICBtb2RlbDogcGFyYW1zWydtb2RlbCddIHx8ICdiZXJ0LWJhc2UtY2FzZWQnLFxuICAgICAgICAgICAgbW9kZWxLaW5kOiBwYXJhbXNbJ21vZGVsS2luZCddIHx8IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHBhcmFtc1snc2VudGVuY2UnXSB8fCBcIlRoZSBnaXJsIHJhbiB0byBhIGxvY2FsIHB1YiB0byBlc2NhcGUgdGhlIGRpbiBvZiBoZXIgY2l0eS5cIixcbiAgICAgICAgICAgIGNvcnB1czogcGFyYW1zWydjb3JwdXMnXSB8fCAnd296JyxcbiAgICAgICAgICAgIGxheWVyOiBwYXJhbXNbJ2xheWVyJ10gfHwgMSxcbiAgICAgICAgICAgIGhlYWRzOiB0aGlzLl9pbml0SGVhZHMocGFyYW1zWydoZWFkcyddKSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcGFyYW1zWyd0aHJlc2hvbGQnXSB8fCAwLjcsXG4gICAgICAgICAgICB0b2tlbkluZDogcGFyYW1zWyd0b2tlbkluZCddIHx8IG51bGwsXG4gICAgICAgICAgICB0b2tlblNpZGU6IHBhcmFtc1sndG9rZW5TaWRlJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbmRzOiBwYXJhbXNbJ21hc2tJbmRzJ10gfHwgWzldLFxuICAgICAgICAgICAgbWV0YU1hdGNoOiBwYXJhbXNbJ21ldGFNYXRjaCddIHx8IFwicG9zXCIsXG4gICAgICAgICAgICBtZXRhTWF4OiBwYXJhbXNbJ21ldGFNYXgnXSB8fCBcInBvc1wiLFxuICAgICAgICAgICAgZGlzcGxheUluc3BlY3RvcjogcGFyYW1zWydkaXNwbGF5SW5zcGVjdG9yJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG9mZnNldElkeHM6IHRoaXMuX2luaXRPZmZzZXRJZHhzKHBhcmFtc1snb2Zmc2V0SWR4cyddKSxcbiAgICAgICAgICAgIGhpZGVDbHNTZXA6IHRydXRoeShwYXJhbXNbJ2hpZGVDbHNTZXAnXSkgfHwgdHJ1ZSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0geyBzaWRlOiB0aGlzLl9jb25mLnRva2VuU2lkZSwgaW5kOiB0aGlzLl9jb25mLnRva2VuSW5kIH1cblxuICAgIH1cblxuICAgIHRvVVJMKHVwZGF0ZUhpc3RvcnkgPSBmYWxzZSkge1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybCh0aGlzLl9jb25mLCB1cGRhdGVIaXN0b3J5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRPZmZzZXRJZHhzKHY6IChzdHJpbmcgfCBudW1iZXIpW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbLTEsIDAsIDFdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJBcnIgPSBSLm1hcCh0b051bWJlciwgdik7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyQXJyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEhlYWRzKHY6IG51bWJlcltdIHwgbnVsbCkge1xuICAgICAgICBpZiAodiA9PSBudWxsIHx8IHYubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRTZXQobmV3IFNldCh2KSkuX2NvbmYuaGVhZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZHMoKVxuICAgIH1cblxuICAgIG5IZWFkcygpOiBudW1iZXJcbiAgICBuSGVhZHModmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbkhlYWRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkhlYWRzXG4gICAgICAgIHRoaXMuX25IZWFkcyA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG5MYXllcnMoKTogbnVtYmVyXG4gICAgbkxheWVycyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuTGF5ZXJzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkxheWVyc1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRzKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb0hlYWRzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEFsbEhlYWRzKCkge1xuICAgICAgICB0aGlzLmhlYWRTZXQobmV3IFNldChfLnJhbmdlKDAsIHRoaXMuX25IZWFkcykpKVxuICAgIH1cblxuICAgIHNlbGVjdE5vSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KFtdKSlcbiAgICB9XG5cbiAgICB0b2dnbGVIZWFkKGhlYWQ6IG51bWJlcik6IHRwLlRvZ2dsZWQge1xuICAgICAgICBsZXQgb3V0O1xuICAgICAgICBpZiAodGhpcy5oZWFkU2V0KCkuaGFzKGhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRTZXQoKS5kZWxldGUoaGVhZCk7XG4gICAgICAgICAgICBvdXQgPSB0cC5Ub2dnbGVkLlJFTU9WRURcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmFkZChoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuQURERURcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aHJvdWdoIHNldHRlciBmdW5jdGlvbiB0byBlbnN1cmUgdXJsIGlzIHVwZGF0ZWRcbiAgICAgICAgdGhpcy5oZWFkU2V0KHRoaXMuaGVhZFNldCgpKTsgLy8gSSBoYXRlIG11dGFibGUgZGF0YXN0cnVjdHVyZXMuLi4gVGhpcyBpcyBjb25mdXNpbmcuXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIHRvZ2dsZVRva2VuKGU6IHRwLlRva2VuRXZlbnQpOiB0aGlzIHtcbiAgICAgICAgY29uc3QgcGlja2VyID0gUi5waWNrKFsnaW5kJywgJ3NpZGUnXSlcbiAgICAgICAgY29uc3QgY29tcGFyZUV2ZW50ID0gcGlja2VyKGUpXG4gICAgICAgIGNvbnN0IGNvbXBhcmVUb2tlbiA9IHBpY2tlcih0aGlzLnRva2VuKCkpXG5cbiAgICAgICAgaWYgKFIuZXF1YWxzKGNvbXBhcmVUb2tlbiwgY29tcGFyZUV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ybVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuKGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRva2VuKCk6IHRwLlRva2VuRXZlbnQ7XG4gICAgdG9rZW4odmFsOiB0cC5Ub2tlbkV2ZW50KTogdGhpcztcbiAgICB0b2tlbih2YWw/OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlblxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuSW5kID0gdmFsLmluZDtcbiAgICAgICAgdGhpcy5fY29uZi50b2tlblNpZGUgPSB2YWwuc2lkZTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGFzVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLl9jb25mXG4gICAgICAgIGNvbnN0IGFjdHVhbGx5TnVsbCA9ICgoY29uZi50b2tlbkluZCA9PSBudWxsKSAmJiAoY29uZi50b2tlblNpZGUgPT0gbnVsbCkpXG4gICAgICAgIGNvbnN0IHN0ck51bGwgPSAoY29uZi50b2tlbkluZCA9PSBcIm51bGxcIilcbiAgICAgICAgcmV0dXJuICghYWN0dWFsbHlOdWxsKSAmJiAoIXN0ck51bGwpXG4gICAgfVxuXG4gICAgcm1Ub2tlbigpIHtcbiAgICAgICAgdGhpcy50b2tlbih7IGluZDogbnVsbCwgc2lkZTogbnVsbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZW50ZW5jZSgpOiBzdHJpbmc7XG4gICAgc2VudGVuY2UodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIHNlbnRlbmNlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYuc2VudGVuY2VcblxuICAgICAgICB0aGlzLl9jb25mLnNlbnRlbmNlID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyO1xuICAgIHRocmVzaG9sZCh2YWw6IG51bWJlcik6IHRoaXM7XG4gICAgdGhyZXNob2xkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi50aHJlc2hvbGQ7XG5cbiAgICAgICAgdGhpcy5fY29uZi50aHJlc2hvbGQgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5oZWFkc1xuICAgIH1cblxuICAgIGxheWVyKCk6IG51bWJlclxuICAgIGxheWVyKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGxheWVyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYubGF5ZXJcblxuICAgICAgICB0aGlzLl9jb25mLmxheWVyID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGVhZFNldCgpOiBTZXQ8bnVtYmVyPjtcbiAgICBoZWFkU2V0KHZhbDogU2V0PG51bWJlcj4pOiB0aGlzO1xuICAgIGhlYWRTZXQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkU2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGVhZFNldCA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi5oZWFkcyA9IHhfLnNldDJTb3J0ZWRBcnJheSh0aGlzLl9oZWFkU2V0KVxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbWV0YU1hdGNoKCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1hdGNoKHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1hdGNoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tZXRhTWF4O1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1heCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtZXRhTWF4KCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1heCh2YWw6IHRwLlNpbXBsZU1ldGEpOiB0aGlzO1xuICAgIG1ldGFNYXgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXRjaDtcblxuICAgICAgICB0aGlzLl9jb25mLm1ldGFNYXRjaCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYXNrSW5kcygpOiBudW1iZXJbXTtcbiAgICBtYXNrSW5kcyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBtYXNrSW5kcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWFza0luZHM7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tYXNrSW5kcyA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwbGF5SW5zcGVjdG9yKCk6IEluc3BlY3Rvck9wdGlvbnM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw6IEluc3BlY3Rvck9wdGlvbnMpOiB0aGlzO1xuICAgIGRpc3BsYXlJbnNwZWN0b3IodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3I7XG5cbiAgICAgICAgdGhpcy5fY29uZi5kaXNwbGF5SW5zcGVjdG9yID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZnNldElkeHMoKTogbnVtYmVyW107XG4gICAgb2Zmc2V0SWR4cyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBvZmZzZXRJZHhzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5vZmZzZXRJZHhzO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbnVtYmVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYub2Zmc2V0SWR4cyA9IFIubWFwKHRvTnVtYmVyLCB2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGVDbHNTZXAoKTogYm9vbGVhbjtcbiAgICBoaWRlQ2xzU2VwKHZhbDogYm9vbGVhbik6IHRoaXM7XG4gICAgaGlkZUNsc1NlcCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuaGlkZUNsc1NlcDtcblxuICAgICAgICB0aGlzLl9jb25mLmhpZGVDbHNTZXAgPSB0cnV0aHkodmFsKTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtb2RlbCgpOiBzdHJpbmc7XG4gICAgbW9kZWwodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIG1vZGVsKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtb2RlbEtpbmQoKTogc3RyaW5nO1xuICAgIG1vZGVsS2luZCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWxLaW5kKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbEtpbmRcbiAgICAgICAgdGhpcy5fY29uZi5tb2RlbEtpbmQgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgb2Zmc2V0IG5lZWRlZCBmb3IgdGhlIG1vZGVsS2luZCBpbiB0aGUgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBvZmZzZXQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlbEtpbmQoKSkge1xuICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZToge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzaG93TmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxuXG4gICAgZ2V0IG1hdGNoSGlzdG9ncmFtRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSA/IFwiTmV4dFwiIDogXCJNYXRjaGVkXCJcbiAgICB9XG5cbiAgICBjb3JwdXMoKTogc3RyaW5nO1xuICAgIGNvcnB1cyh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgY29ycHVzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5jb3JwdXNcbiAgICAgICAgdGhpcy5fY29uZi5jb3JwdXMgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgRWRnZSwgRWRnZURhdGEgfSBmcm9tIFwiLi9FZGdlQ29ubmVjdG9yXCJcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uRGF0YSA9IG51bWJlcltdW11cblxuZXhwb3J0IGNvbnN0IHNjYWxlTGluZWFyV2lkdGggPSBvcGFjaXR5ID0+IDUgKiBvcGFjaXR5XjAuMzM7XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25HcmFwaCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uRGF0YT57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uRGF0YTsgLy8gVGhlIHBhc3NlZCBkYXRhXG4gICAgZWRnZURhdGE6IEVkZ2VEYXRhOyAvLyBBIHdyYXBwZXIgYXJvdW5kIF9kYXRhLiBVc2VyIHNob3VsZCBub3QgbWluZFxuICAgIHBsb3REYXRhOiBFZGdlW107IC8vIE5lZWRlZCBmb3IgcGxvdHRpbmdcblxuICAgIC8qKiBDT01QT05FTlRTXG4gICAgICogRXhwb3NlIHRoZSBjb21wb25lbnRzIGJlbG9uZ2luZyB0byB0aGUgY2xhc3MgYXMgcHJvcGVydGllcyBvZiB0aGUgY2xhc3MuIFxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNyZWF0ZSBtZXRob2RzIHRoYXQgc3BlY2lmaWNhbGx5IG1vZGlmeSBhIHNpbmdsZSBwYXJ0IG9yIGNvbXBvbmVudCB3aXRob3V0IGhhdmluZyB0byByZXNlbGVjdCBpdC4gXG4gICAgICogTWFrZXMgZm9yIG1vcmUgcmVzcG9uc2l2ZSBhcHBsaWNhdGlvbnNcbiAgICAgKiAqL1xuICAgIHN2ZzogRDNTZWw7XG4gICAgZ3JhcGg6IEQzU2VsO1xuXG4gICAgLy8gVGhlIGJlbG93IGNvbXBvbmVudHMgcmVxdWlyZSBkYXRhXG4gICAgcGF0aHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZXM6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdO1xuICAgIGxpbmtHZW46IGQzLkxpbms8YW55LCBhbnksIGFueT5cblxuICAgIC8vIE9QVElPTlMgV0lUSCBERUZBVUxUU1xuICAgIF90aHJlc2hvbGQgPSAwLjc7IC8vIEFjY3VtdWxhdGlvbiB0aHJlc2hvbGQuIEJldHdlZW4gMC0xXG4gICAgbm9ybUJ5OiB0cC5Ob3JtQnlcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fSAvLyBObyBldmVudHMgbmVlZGVkIGZvciB0aGlzIG9uZVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNiwgLy8gVGhlIGhlaWdodCBvZiB0aGUgZGl2IGJveGVzIGFyb3VuZCB0aGUgU1ZHIGVsZW1lbnRcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIG9mZnNldDogMCwgLy8gU2hvdWxkIEkgb2Zmc2V0IHRoZSBsZWZ0IHNpZGUgYnkgMSBvciBub3Q/XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuZ3JhcGggPSB0aGlzLnN2Zy5zZWxlY3RBbGwoYC5hdG4tY3VydmVgKTtcbiAgICAgICAgdGhpcy5saW5rR2VuID0gZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgLngoZCA9PiBkWzBdKVxuICAgICAgICAgICAgLnkoZCA9PiBkWzFdKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgd2hldGhlciB0byB1c2UgdGhlICdqJyBvciAnaScgYXR0cmlidXRlIHRvIGNhbGN1bGF0ZSBvcGFjaXRpZXNcbiAgICBwcml2YXRlIHNjYWxlSWR4KCk6IFwiaVwiIHwgXCJqXCIge1xuICAgICAgICBzd2l0Y2ggKHRoaXMubm9ybUJ5KSB7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5Db2w6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdqJ1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuUm93OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaSdcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkFsbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2knXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNvbm5lY3Rpb25zIGJldHdlZW4gbG9jYXRpb25zIG9mIHRoZSBTVkcgdXNpbmcgRDMncyBsaW5rR2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25uZWN0aW9ucygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5wYXRocykge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRycyh7XG4gICAgICAgICAgICAgICAgJ2QnOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiB7IHNvdXJjZTogW251bWJlciwgbnVtYmVyXSwgdGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdIH0gPVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IFswLCBvcC5ib3hoZWlnaHQgKiAoZC5pICsgMC41ICsgb3Aub2Zmc2V0KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtvcC53aWR0aCwgb3AuYm94aGVpZ2h0ICogKGQuaiArIDAuNSldIC8vICsgMiBhbGxvd3Mgc21hbGwgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtHZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYXRuLWN1cnZlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyYy1pZHhcIiwgKGQsIGkpID0+IGQuaSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRhcmdldC1pZHhcIiwgKGQsIGkpID0+IGQuaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGhlaWdodCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcImhlaWdodFwiLCB0aGlzLm9wdGlvbnMuaGVpZ2h0ICsgKG9wLm9mZnNldCAqIHRoaXMub3B0aW9ucy5ib3hoZWlnaHQpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2lkdGggb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwid2lkdGhcIiwgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgT3BhY2l0eSBvZiB0aGUgbGluZXMgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLm9wYWNpdHlTY2FsZXNbZFtzZWxmLnNjYWxlSWR4KCldXShkLnYpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRyKCdzdHJva2Utd2lkdGgnLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkW3NlbGYuc2NhbGVJZHgoKV1dKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjYWxlTGluZWFyV2lkdGgodmFsKSAvLzUgKiB2YWxeMC4zMztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVyZW5kZXIgdGhlIGdyYXBoIGluIHRoZSBldmVudCB0aGF0IHRoZSBkYXRhIGNoYW5nZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChcIi5hdG4tY3VydmVcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnBsb3REYXRhXG5cbiAgICAgICAgICAgIHRoaXMucGF0aHMgPSB0aGlzLmdyYXBoXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICAuam9pbigncGF0aCcpO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbm5lY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgb3BhY2l0eSBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlcyBvZiB0aGUgZGF0YSwgZnJvbSAwIHRvIG1heCBvZiBjb250YWluZWQgZGF0YVxuICAgICAqIE5vcm1hbGl6ZSBieSBlYWNoIHNvdXJjZSB0YXJnZXQsIG9yIGFjcm9zcyB0aGUgd2hvbGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNjYWxlcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgIGxldCBhcnIgPSBbXVxuXG4gICAgICAgIC8vIEdyb3VwIG5vcm1hbGl6YXRpb25cbiAgICAgICAgc3dpdGNoICh0aGlzLm5vcm1CeSl7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5Sb3c6XG4gICAgICAgICAgICAgICAgYXJyID0gdGhpcy5lZGdlRGF0YS5leHRlbnQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BhY2l0eVNjYWxlcyBhcyBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXSkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDAuOV0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQ29sOlxuICAgICAgICAgICAgICAgIGFyciA9IHRoaXMuZWRnZURhdGEuZXh0ZW50KDApO1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGFyci5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm9wYWNpdHlTY2FsZXMgYXMgZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W10pLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgdlsxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAwLjldKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkFsbDpcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhJbiA9IGQzLm1heCh0aGlzLnBsb3REYXRhLm1hcCgoZCkgPT4gZC52KSlcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzLnB1c2goZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4SW5dKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAxXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3Igbm9ybWluZyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGRhdGEgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGRhdGEoKTogQXR0ZW50aW9uRGF0YVxuICAgIGRhdGEodmFsdWU6IEF0dGVudGlvbkRhdGEpOiB0aGlzXG4gICAgZGF0YSh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVkZ2VEYXRhID0gbmV3IEVkZ2VEYXRhKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGhlaWdodCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgaGVpZ2h0KCk6IG51bWJlclxuICAgIGhlaWdodCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIGhlaWdodCh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHdpZHRoIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB3aWR0aCgpOiBudW1iZXJcbiAgICB3aWR0aCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIHdpZHRoKHZhbHVlPzogbnVtYmVyKTogdGhpcyB8IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgdGhyZXNob2xkIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyXG4gICAgdGhyZXNob2xkKHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgdGhyZXNob2xkKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcbmltcG9ydCB7IFRlbnNvcjNEIH0gZnJvbSBcIkB0ZW5zb3JmbG93L3RmanNcIjtcblxuLy8gVGhlIGJlbG93IHR3byAoaW50ZXJmYWNlIGFuZCBmdW5jdGlvbikgY2FuIGJlY29tZSBhIGNsYXNzXG5leHBvcnQgdHlwZSBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICByb3dzOiBudW1iZXJbXVtdLFxuICAgIGxhYmVsczogbnVtYmVyW10sXG4gICAgbWF4OiBudW1iZXIsXG59XG5cbi8qKlxuICogRnJvbSBhbiBhdHRlbnRpb24gbWF0cml4IHNlbGVjdGVkIGJ5IGxheWVyLCBzaG93IGEgc3VtbWFyeSBvZiB0aGUgYXR0ZW50aW9ucyBiZWxvbmdpbmcgdG8gZWFjaCBoZWFkLlxuICogXG4gKiBAcGFyYW0gaGVhZE1hdCBUaGUgbWF0cml4IHJlcHJlc2VudGluZyBhbGwgdGhlIGF0dGVudGlvbnMgYnkgaGVhZCAobGF5ZXIgYWxyZWFkeSBzZWxlY3RlZCkgPGhlYWQsIGZyb20sIHRvPlxuICogQHBhcmFtIGhlYWRMaXN0IFRoZSBoZWFkcyB0aGF0IGFyZSBzZWxlY3RlZFxuICogQHBhcmFtIHNpZGUgSXMgdGhpcyB0aGUgcmlnaHQgb3IgdGhlIGxlZnQgZGlzcGxheT9cbiAqIEBwYXJhbSB0b2tlbkluZCBJZiBub3QgbnVsbCwgc2VsZWN0IGp1c3QgdGhlIGluZm9ybWF0aW9uIGZyb20gYSBzaW5nbGUgdG9rZW4gYWNyb3NzIGhlYWRzXG4gKiBAcmV0dXJucyBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gbGFiZWwgdGhlIGhlYWRib3hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGVudGlvbkluZm8oaGVhZE1hdDogbnVtYmVyW11bXVtdLCBoZWFkTGlzdDogbnVtYmVyW10sIHNpZGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJsZWZ0XCIsIHRva2VuOiBudWxsIHwge2luZDogbnVtYmVyLCBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIn09bnVsbCk6IEF0dGVudGlvbkhlYWRCb3hJIHtcbiAgICAvLyBDb2xsZWN0IG9ubHkgZnJvbSBoZWFkbGlzdCwgYXZlcmFnZSBlYWNoIGhlYWQsIHRyYW5zcG9zZSB0byBlYXNlIGl0ZXJhdGlvblxuICAgIGlmIChoZWFkTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogW1tdXSxcbiAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGltID0gbnVsbFxuICAgIC8vIE9ubHkgY2hhbmdlIHRoZSBhdHRlbnRpb24gZ3JhcGggb3Bwb3NpdGUgc2VsZWN0ZWQgdG9rZW5cbiAgICBpZiAodG9rZW4gIT0gbnVsbCAmJiAodG9rZW4uc2lkZSAhPSBzaWRlKSkge1xuICAgICAgICBkaW0gPSB0b2tlbi5zaWRlID09IFwibGVmdFwiID8gLTIgOiAtMSAvLyBBc3NpZ24gdG8gXCJmcm9tXCIgZGlyZWN0aW9uIGlmIFwibGVmdFwiIFxuICAgIH1cblxuICAgIGxldCBheGlzOiBudW1iZXIgPSBzaWRlID09IFwibGVmdFwiID8gMiA6IDE7XG5cbiAgICAvLyBhdmVyYWdlIGFjcm9zcyB0aGUgYXhpcyByZXByZXNlbnRpbmcgdGhlIGF0dGVudGlvbnMuXG4gICAgbGV0IGdhdGhlcmVkTWF0ID0gdGYudGVuc29yM2QoaGVhZE1hdClcbiAgICBpZiAoZGltICE9IG51bGwpIHtcbiAgICAgICAgZ2F0aGVyZWRNYXQgPSBnYXRoZXJlZE1hdC5nYXRoZXIoW3Rva2VuLmluZF0sIGRpbSlcbiAgICB9XG4gICAgbGV0IG5ld01hdCA9IGdhdGhlcmVkTWF0LmdhdGhlcihoZWFkTGlzdCwgMCkubWVhbihbYXhpc10pLnRyYW5zcG9zZSgpO1xuXG4gICAgY29uc3Qgcm93SW5mbyA9IDxudW1iZXJbXVtdPm5ld01hdC5hcnJheVN5bmMoKTtcblxuICAgIGNvbnN0IG91dDogQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgICAgIHJvd3M6IHJvd0luZm8sXG4gICAgICAgIGxhYmVsczogaGVhZExpc3QsXG4gICAgICAgIG1heDogPG51bWJlcj5uZXdNYXQubWF4KCkuYXJyYXlTeW5jKCksXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudE9wdGlvbnMge1xuICAgIGhlYWRIZWlnaHQ6IG51bWJlclxuICAgIGhlYWRXaWR0aDogbnVtYmVyXG4gICAgeFBhZDogbnVtYmVyXG4gICAgeVBhZDogbnVtYmVyXG4gICAgYm94V2lkdGg6IG51bWJlclxuICAgIHRvdGFsV2lkdGg6IG51bWJlclxuICAgIHRvdGFsSGVpZ2h0OiBudW1iZXJcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25IZWFkQm94IGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25IZWFkQm94ST57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICByb3dDc3NOYW1lID0gJ2F0dC1oZWFkJztcbiAgICBib3hDc3NOYW1lID0gJ2F0dC1yZWN0JztcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3ZlclwiLFxuICAgICAgICBib3hNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlTW92ZTogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlTW92ZVwiLFxuICAgICAgICBib3hDbGljazogXCJBdHRlbnRpb25IZWFkQm94X0JveENsaWNrXCIsXG4gICAgfTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25IZWFkQm94STtcblxuICAgIF9jdXJyZW50OiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiA9IHt9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hEaW06IDI2LFxuICAgICAgICB5c2NhbGU6IDEsIC8vIEFtb3VudCB0byBzY2FsZSBib3hoZWlnaHQgdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgeHNjYWxlOiAwLjUsIC8vIEFtb3VudCB0byBzY2FsZSBib3h3aWR0aCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICBzaWRlOiBcImxlZnRcIixcbiAgICAgICAgbWF4V2lkdGg6IDIwMCwgLy8gTWF4aW11bSB3aWR0aCBvZiBTVkdcbiAgICAgICAgb2Zmc2V0OiAwLCAvLyBDaGFuZ2UgdG8gMSBpZiB5b3UgZGVzaXJlIHRoZSBvZmZzZXQgdmlzdWFsaXphdGlvbiBmb3IgQXV0b3JlZ3Jlc3NpdmUgbW9kZWxzXG4gICAgfTtcblxuICAgIC8vIEQzIENvbXBvbmVudHNcbiAgICBoZWFkUm93czogRDNTZWw7XG4gICAgaGVhZENlbGxzOiBEM1NlbDtcbiAgICBvcGFjaXR5U2NhbGU6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50KCk6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+IHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy5fY3VycmVudFxuXG4gICAgICAgIGNvbnN0IG5IZWFkcyA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGhcbiAgICAgICAgY29uc3QgYmFzZUhlYWRXaWR0aCA9IG9wLmJveERpbSAqIG9wLnhzY2FsZVxuXG4gICAgICAgIC8vIFNjYWxlIGhlYWR3aWR0aCBhY2NvcmRpbmcgdG8gbWF4aW11bSB3aWR0aFxuICAgICAgICBjb25zdCBnZXRIZWFkU2NhbGUgPSAobkgpID0+IChNYXRoLm1pbihvcC5tYXhXaWR0aCAvIG5ILCBiYXNlSGVhZFdpZHRoKSAvIGJhc2VIZWFkV2lkdGgpICogb3AueHNjYWxlO1xuXG4gICAgICAgIGN1ci5oZWFkSGVpZ2h0ID0gb3AuYm94RGltICogb3AueXNjYWxlO1xuICAgICAgICBjdXIuaGVhZFdpZHRoID0gZ2V0SGVhZFNjYWxlKG5IZWFkcykgKiBvcC5ib3hEaW07XG4gICAgICAgIGN1ci54UGFkID0gY3VyLmhlYWRXaWR0aDtcbiAgICAgICAgY3VyLnlQYWQgPSAob3AuYm94RGltIC0gY3VyLmhlYWRIZWlnaHQpIC8gMjtcblxuICAgICAgICBjb25zdCBnZXRCb3hXaWR0aCA9IChoZWFkV2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heEJ3aWR0aCA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ3aWR0aCA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGggKiBjdXIuaGVhZFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGQzLnNjYWxlTGluZWFyXG4gICAgICAgICAgICBpZiAoYndpZHRoID4gbWF4QndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1ci5ib3hXaWR0aCA9ICh0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aCk7XG4gICAgICAgIGN1ci50b3RhbFdpZHRoID0gKDIgKiBjdXIueFBhZCkgKyBjdXIuYm94V2lkdGg7XG4gICAgICAgIGN1ci50b3RhbEhlaWdodCA9IChvcC5ib3hEaW0gKiAodGhpcy5fZGF0YS5yb3dzLmxlbmd0aCArIG9wLm9mZnNldCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGJveEV2ZW50ID0gKGkpID0+IHsgcmV0dXJuIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlLCBoZWFkOiBzZWxmLl9kYXRhLmxhYmVsc1tpXSB9IH1cbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy51cGRhdGVDdXJyZW50KClcblxuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuXG4gICAgICAgIHRoaXMucGFyZW50XG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGN1ci50b3RhbFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY3VyLnRvdGFsSGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKHNlbGYuX2RhdGEucm93cylcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBjbGFzczogKGQsIGkpID0+IGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VyLnhQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogKG9wLmJveERpbSAqIChpICsgb3Aub2Zmc2V0KSkgKyBjdXIueVBhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgeyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93c1xuICAgICAgICAgICAgLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gZClcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgeDogKGQsIGkpID0+IGkgKiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRoaXMuYm94Q3NzTmFtZSxcbiAgICAgICAgICAgICAgICBoZWFkOiAoZCwgaSkgPT4gc2VsZi5fZGF0YS5sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5oZWFkV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXIuaGVhZEhlaWdodCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAoZDogbnVtYmVyKSA9PiB0aGlzLm9wYWNpdHlTY2FsZShkKSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdmVyLCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IHNlbGYub3B0aW9uc1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcblxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VNb3ZlLCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgYmFzZVg6IGdldEJhc2VYKCksIGJhc2VZOiBnZXRCYXNlWSgpLCBtb3VzZTogbW91c2UgfSlcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiBcIkhlYWQgXCIgKyAoc2VsZi5fZGF0YS5sYWJlbHNbaV0gKyAxKSlcbiAgICB9XG5cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IHRoaXMub3BhY2l0eVNjYWxlLmRvbWFpbihbMCwgZGF0YS5tYXhdKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge1ZDb21wb25lbnR9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtzcGFjeUNvbG9yc30gZnJvbSAnLi4vZXRjL1NwYWN5SW5mbydcbmltcG9ydCB7U1ZHfSBmcm9tICcuLi9ldGMvU1ZHcGx1cydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5cbmludGVyZmFjZSBNYXJnaW5JbmZvIHtcbiAgICB0b3A6IG51bWJlcixcbiAgICBib3R0b206IG51bWJlcixcbiAgICByaWdodDogbnVtYmVyLFxuICAgIGxlZnQ6IG51bWJlclxufVxuXG4vLyBEZXBlbmRlbnQgb24gdGhlIG9wdGlvbnMgaW4gdGhlIHJlc3BvbnNlXG50eXBlIE1hdGNoZWRNZXRhU2VsZWN0aW9ucyA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJlbnRcIlxuXG5pbnRlcmZhY2UgTWF0Y2hlZE1ldGFDb3VudCB7XG4gICAgcG9zOiBudW1iZXJcbiAgICBkZXA6IG51bWJlclxuICAgIGlzX2VudDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBNYXhBdHRNZXRhQ291bnQge1xuICAgIG9mZnNldDogbnVtYmVyXG59XG5cbnR5cGUgTWF0Y2hlZERhdGFJbnRlcmZhY2UgPSBNYXRjaGVkTWV0YUNvdW50XG50eXBlIE1heEF0dERhdGFJbnRlcmZhY2UgPSBNYXhBdHRNZXRhQ291bnRcbnR5cGUgRGF0YUludGVyZmFjZSA9IE1hdGNoZWREYXRhSW50ZXJmYWNlIHwgTWF4QXR0RGF0YUludGVyZmFjZVxuXG5pbnRlcmZhY2UgQ291bnRlZEhpc3Qge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY291bnQ6IG51bWJlclxufVxuXG50eXBlIFJlbmRlckRhdGFJbnRlcmZhY2UgPSBDb3VudGVkSGlzdFtdXG5cblxuLyoqXG4gKiAgRGF0YSBmb3JtYXR0aW5nIGZ1bmN0aW9uc1xuICovXG5jb25zdCB0b1JlbmRlckRhdGEgPSAob2JqOiB7W3M6IHN0cmluZ106IG51bWJlcn0pOiBSZW5kZXJEYXRhSW50ZXJmYWNlID0+IE9iamVjdC5rZXlzKG9iaikubWFwKChrLCBpKSA9PiB7XG4gICAgcmV0dXJuIHtsYWJlbDogaywgY291bnQ6IG9ialtrXX1cbn0pXG5cbmNvbnN0IHRvU3RyaW5nT3JOdW0gPSAoYTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuYSA9ICthXG4gICAgaWYgKGlzTmFOKG5hKSkge1xuICAgICAgICByZXR1cm4gYVxuICAgIH1cbiAgICByZXR1cm4gbmFcbn1cblxuY29uc3Qgc29ydEJ5TGFiZWwgPSBSLnNvcnRCeShSLmNvbXBvc2UodG9TdHJpbmdPck51bSwgUi5wcm9wKCdsYWJlbCcpKSlcbmNvbnN0IHNvcnRCeUNvdW50ID0gUi5zb3J0QnkoUi5wcm9wKCdjb3VudCcpKVxuXG5jb25zdCB0b09yZGVyZWRSZW5kZXIgPSBSLmNvbXBvc2UoXG4gICAgUi5yZXZlcnNlLFxuICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogZml4XG4gICAgc29ydEJ5Q291bnQsXG4gICAgdG9SZW5kZXJEYXRhXG4pXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNIaXN0b2dyYW08VD4gZXh0ZW5kcyBWQ29tcG9uZW50PFQ+IHtcblxuICAgIGNzc19uYW1lID0gJydcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fVxuXG4gICAgX2N1cnJlbnQgPSB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRDMgQ09NUE9ORU5UU1xuICAgIHN2ZzogRDNTZWxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgICAgIGJhcldpZHRoOiBudW1iZXJcbiAgICAgICAgd2lkdGg6IG51bWJlclxuICAgICAgICBoZWlnaHQ6IG51bWJlclxuICAgICAgICB2YWw6IHN0cmluZ1xuICAgICAgICB4TGFiZWxSb3Q6IG51bWJlclxuICAgICAgICB4TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgICAgICB5TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgIH1cblxuICAgIGF4ZXMgPSB7XG4gICAgICAgIHg6IGQzLnNjYWxlQmFuZCgpLFxuICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLFxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM9e30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICByaWdodDogMzAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcldpZHRoOiAyNSxcbiAgICAgICAgICAgIHdpZHRoOiAxODUsXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMCxcbiAgICAgICAgICAgIHZhbDogXCJwb3NcIiwgLy8gQ2hhbmdlIERlZmF1bHQsIHBhc3MgdGhyb3VnaCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgeExhYmVsUm90OiA0NSxcbiAgICAgICAgICAgIHhMYWJlbE9mZnNldDogMTUsXG4gICAgICAgICAgICB5TGFiZWxPZmZzZXQ6IDUsXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRygpXG4gICAgfVxuXG4gICAgbWV0YSgpOk1hdGNoZWRNZXRhU2VsZWN0aW9uc1xuICAgIG1ldGEodmFsOk1hdGNoZWRNZXRhU2VsZWN0aW9ucyk6IHRoaXNcbiAgICBtZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy52YWwgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuX2RhdGEpXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVYQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCB3aWR0aCA9IG9wLndpZHRoIC0gb3AubWFyZ2luLmxlZnQgLSBvcC5tYXJnaW4ucmlnaHRcblxuICAgICAgICB0aGlzLmF4ZXMueFxuICAgICAgICAgICAgLmRvbWFpbihSLm1hcChSLnByb3AoJ2xhYmVsJyksIHNlbGYucmVuZGVyRGF0YSkpXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoMC4xKVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuY2hhcnQud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVlBeGlzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wLmhlaWdodCAtIG9wLm1hcmdpbi50b3AgLSBvcC5tYXJnaW4uYm90dG9tXG5cbiAgICAgICAgdGhpcy5heGVzLnlcbiAgICAgICAgICAgIC5kb21haW4oWzAsICtkMy5tYXgoUi5tYXAoUi5wcm9wKCdjb3VudCcpLCBzZWxmLnJlbmRlckRhdGEpKV0pXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSlcblxuICAgICAgICB0aGlzLl9jdXJyZW50LmNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVlBeGlzKClcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IGRhdGFbdGhpcy5vcHRpb25zLnZhbF1cbiAgICAgICAgcmV0dXJuIHRvT3JkZXJlZFJlbmRlcihvdXQpXG4gICAgfVxuXG4gICAgd2lkdGgoKTpudW1iZXJcbiAgICB3aWR0aCh2YWw6bnVtYmVyKTp0aGlzXG4gICAgd2lkdGgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCk6bnVtYmVyXG4gICAgaGVpZ2h0KHZhbDpudW1iZXIpOnRoaXNcbiAgICBoZWlnaHQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVZQXhpcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVdpZHRoKCkge1xuICAgICAgICB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdmcuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodClcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpZ1dpZHRoKGRhdGE6IFJlbmRlckRhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiAoZGF0YS5sZW5ndGggKiBvcC5iYXJXaWR0aCkgKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodFxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTpSZW5kZXJEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuaHRtbCgnJylcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudFxuXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpO1xuICAgICAgICB0aGlzLndpZHRoKHRoaXMuZmlnV2lkdGgoZGF0YSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgYXhlc1xuICAgICAgICBjb25zdCBnID0gc2VsZi5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSh7eDogb3AubWFyZ2luLmxlZnQsIHk6b3AubWFyZ2luLnRvcH0pKVxuXG4gICAgICAgIC8vIEhhY2sgdG8gYWxsb3cgY2xlYXJpbmcgdGhpcyBoaXN0b2dyYW1zIHRvIHdvcmtcbiAgICAgICAgc2VsZi5iYXNlID0gZ1xuXG4gICAgICAgIC8vIEZpeCBiZWxvdyBmb3IgcG9zaXRpb25hbCBjaGFuZ2luZ1xuICAgICAgICAgICAgY29uc3QgYXhpc0JvdHRvbSA9IGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoe3g6IDAsIHk6Y3Vyci5jaGFydC5oZWlnaHR9KSlcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNlbGYuYXhlcy54KSlcblxuICAgICAgICAgICAgaWYgKG9wLnZhbCAhPSBcIm9mZnNldFwiKSB7XG4gICAgICAgICAgICAgICAgYXhpc0JvdHRvbVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgb3AueUxhYmVsT2Zmc2V0KSAgIC8vIE1vdmUgYmVsb3cgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnhMYWJlbE9mZnNldCkgIC8vIE9mZnNldCB0byB0aGUgcmlnaHQgYSBiaXRcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZShvcC54TGFiZWxSb3QpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzZWxmLmF4ZXMueSkpXG5cbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLngoZC5sYWJlbCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLnkoZC5jb3VudCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYuYXhlcy54LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY3Vyci5jaGFydC5oZWlnaHQgLSBzZWxmLmF4ZXMueShkLmNvdW50KTsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGsgPT4gc3BhY3lDb2xvcnMuY29sb3JTY2FsZVtvcC52YWxdKGsubGFiZWwpKVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHtkM1MsIEQzU2VsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcbmltcG9ydCAnLi4vZXRjL3hkMydcblxuLy8gSGVscGVyc1xuY29uc3QgY3Vyck1hdGNoSWR4ID0gKGVsZW0pID0+ICsoPEVsZW1lbnQ+ZWxlbS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ21hdGNoaWR4JylcbmNvbnN0IGN1cnJSb3dOdW0gPSAoZWxlbSkgPT4gKyg8RWxlbWVudD5lbGVtLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgncm93bnVtJylcbmNvbnN0IGJhY2tncm91bmRDb2xvciA9IHggPT4gYHJnYmEoMTI4LCAwLCAxNTAsICR7MC42Knh9KWBcblxuZXhwb3J0IGNsYXNzIENvcnB1c0luc3BlY3RvciBleHRlbmRzIFZDb21wb25lbnQ8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1pbnNwZWN0b3InO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXTsgLy8gVGhlIHBhc3NlZCBkYXRhXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3Jfcm93TW91c2VPdXRcIixcbiAgICAgICAgcm93Q2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd0NsaWNrXCIsXG4gICAgICAgIHJvd0RibENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dEYmxDbGlja1wiLFxuICAgICAgICBjZWxsTW91c2VPdmVyOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsTW91c2VPdmVyXCIsXG4gICAgICAgIGNlbGxNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbE1vdXNlT3V0XCIsXG4gICAgICAgIGNlbGxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbENsaWNrXCIsXG4gICAgICAgIGNlbGxEYmxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbERibENsaWNrXCIsXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgc2hvd05leHQ6IGZhbHNlXG4gICAgfVxuXG4gICAgLy8gQ09NUE9ORU5UU1xuICAgIGluc3BlY3RvclJvd3M6IEQzU2VsXG4gICAgaW5zcGVjdG9yQ2VsbHM6IEQzU2VsXG4gICAgc2NhbGVyID0gZDMuc2NhbGVQb3coKS5yYW5nZShbMCwwLjldKS5leHBvbmVudCgyKVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OlNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSb3dzKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YVxuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoXCIuaW5zcGVjdG9yLXJvd1wiKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1yb3cnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBtYXRjaElkeDogZCA9PiBkLmluZGV4LFxuICAgICAgICAgICAgICAgIHJvd051bTogKGQsIGkpID0+IGksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzSW5zcGVjdG9yLmV2ZW50cy5yb3dNb3VzZU92ZXIsIHt9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvckNlbGxzXG4gICAgICAgICAgICAuY2xhc3NlZCgnY2VsbHRvb2x0aXAnLCB0cnVlKVxuICAgICAgICAgICAgLmFwcGVuZCgnc3BhbicpXG4gICAgICAgICAgICAuY2xhc3NlZCgndG9vbHRpcHRleHQnLCB0cnVlKVxuICAgICAgICAgICAgLmh0bWwoKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRpdHlTdHIgPSBkLmlzX2VudCA/IFwiPGJyPkVudGl0eVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9ICg8RWxlbWVudD5uW2ldLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgnYXR0Jykuc2xpY2UoMCwgNylcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRTdHIgPSBgPGJyPkF0dGVudGlvbjogJHthdHR9YFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBQT1M6ICR7ZC5wb3MudG9Mb3dlckNhc2UoKX08YnI+REVQOiAke2QuZGVwLnRvTG93ZXJDYXNlKCl9YCArIGVudGl0eVN0ciArIGF0dFN0clxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMgPSB0aGlzLmluc3BlY3RvclJvd3Muc2VsZWN0QWxsKCcuaW5zcGVjdG9yLWNlbGwnKVxuICAgICAgICAgICAgLmRhdGEoKGQ6dHAuRmFpc3NTZWFyY2hSZXN1bHRzKSA9PiBkLnRva2VucylcbiAgICAgICAgICAgIC5qb2luKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2luc3BlY3Rvci1jZWxsJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdpbmRleC1vZmZzZXQnLCAoZCwgaSwgbjpIVE1MRWxlbWVudFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hJZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAtIG1hdGNoSWR4IFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgcG9zOiBkID0+IGQucG9zLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgZGVwOiBkID0+IGQuZGVwLnRvTG93ZXJDYXNlKCksIFxuICAgICAgICAgICAgICAgIGlzX2VudDogZCA9PiBkLmlzX2VudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC50b2tlbi5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIikpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0Y2hlZC1jZWxsJywgZCA9PiBkLmlzX21hdGNoKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ25leHQtY2VsbCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5zaG93TmV4dCgpICYmIGQuaXNfbmV4dF93b3JkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNsYXNzZWQoJ2dyYXktY2VsbCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSArY3Vyck1hdGNoSWR4KHRoaXMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuc2hvd05leHQoKSAmJiBpID4gaWR4XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIC8vIEhpZ2hsaWdodCB0aGUgY2VsbHMgYXBwcm9wcmlhdGVseVxuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzLmVhY2goKGQsaSxuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjdXJyTWF0Y2hJZHgobltpXSlcbiAgICAgICAgICAgIGlmIChpID09IGlkeCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGQuaW53YXJkXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4QXR0ID0gK2QzLm1heChhdHQpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclJvdyA9IGN1cnJSb3dOdW0obltpXSlcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZXIgPSBzZWxmLnNjYWxlci5kb21haW4oWzAsIG1heEF0dF0pXG5cbiAgICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtjdXJyUm93fSddYClcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChgLmluc3BlY3Rvci1jZWxsYClcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3Ioc2NhbGVyKGF0dFtpXSkpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhdHQnLCAoZCwgaSkgPT4gYXR0W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkVG9vbHRpcCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVJvd3MoKVxuICAgICAgICB0aGlzLmNyZWF0ZUNlbGxzKClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHt9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIC8vIFJlbWVtYmVyIHRoYXQgdGhpcy5fZGF0YSBpcyBkZWZpbmVkIGluIHdyYW5nbGUgd2hpY2ggc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgYmVmb3JlIHJlbmRlclxuICAgICAgICAvLyBhcyBpcyBkZWZpbmVkIGluIHRoZSB1cGRhdGUgZnVuY3Rpb25cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKClcbiAgICB9XG5cbiAgICBzaG93TmV4dCgpOiBib29sZWFuXG4gICAgc2hvd05leHQodjpib29sZWFuKTogdGhpc1xuICAgIHNob3dOZXh0KHY/KSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvd05leHRcblxuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd05leHQgPSB2XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlzL1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0IHsgc3BhY3lDb2xvcnMgfSBmcm9tIFwiLi4vZXRjL1NwYWN5SW5mb1wiXG5pbXBvcnQgXCIuLi9ldGMveGQzXCJcblxuLy8gTmVlZCBhZGRpdG9pbmFsIGhlaWdodCBpbmZvcm1hdGlvbiB0byByZW5kZXIgYm94ZXNcbmludGVyZmFjZSBCYXNlRGF0YUludGVyZmFjZSBleHRlbmRzIHRwLkZhaXNzU2VhcmNoUmVzdWx0cyB7XG4gICAgaGVpZ2h0OiBudW1iZXJcbn1cbnR5cGUgRGF0YUludGVyZmFjZSA9IEJhc2VEYXRhSW50ZXJmYWNlW11cblxuaW50ZXJmYWNlIENvbG9yTWV0YUJhc2VEYXRhIHtcbiAgICBwb3M6IHN0cmluZ1xuICAgIGRlcDogc3RyaW5nXG4gICAgaXNfZW50OiBib29sZWFuXG4gICAgdG9rZW46IHN0cmluZ1xufVxuXG50eXBlIERpc3BsYXlPcHRpb25zID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImVudFwiXG5cbmZ1bmN0aW9uIG1hbmFnZXJEYXRhMk1hdERhdGEoZGF0YUluOiBEYXRhSW50ZXJmYWNlLCBpbmRleE9mZnNldCA9IDAsIHRvUGljayA9IFsncG9zJ10pIHtcblxuICAgIGNvbnN0IG91dE9mUmFuZ2VPYmo6IENvbG9yTWV0YUJhc2VEYXRhID0ge1xuICAgICAgICBwb3M6IG51bGwsXG4gICAgICAgIGRlcDogbnVsbCxcbiAgICAgICAgaXNfZW50OiBudWxsLFxuICAgICAgICB0b2tlbjogbnVsbCxcbiAgICB9XG5cbiAgICBjb25zdCBjaG9vc2VQcm9wcyA9IFIucGljayh0b1BpY2spXG5cbiAgICBjb25zdCBkYXRhT3V0ID0gZGF0YUluLm1hcChkID0+IHtcbiAgICAgICAgY29uc3Qgd29yZElkeCA9IGQuaW5kZXggKyBpbmRleE9mZnNldDtcbiAgICAgICAgaWYgKCh3b3JkSWR4IDwgMCkgfHwgKHdvcmRJZHggPj0gZC50b2tlbnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBvdXRPZlJhbmdlT2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3T2JqID0gY2hvb3NlUHJvcHMoZC50b2tlbnNbd29yZElkeF0pXG5cbiAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBuZXdPYmopXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhT3V0XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcnB1c01hdE1hbmFnZXIgZXh0ZW5kcyBWQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1tYXQtY29udGFpbmVyJ1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGNlbGxXaWR0aDogMTAsXG4gICAgICAgIHRvUGljazogWydwb3MnXSxcbiAgICAgICAgaWR4czogWy0xLCAwLCAxXSxcbiAgICAgICAgZGl2SG92ZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgIGhlaWdodDogNDAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICBtb3VzZU92ZXI6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU92ZXJcIixcbiAgICAgICAgbW91c2VPdXQ6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU91dFwiLFxuICAgICAgICBjbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX0NsaWNrXCIsXG4gICAgICAgIGRibENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfRGJsQ2xpY2tcIixcbiAgICAgICAgcmVjdE1vdXNlT3ZlcjogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RNb3VzZU92ZXJcIixcbiAgICAgICAgcmVjdE1vdXNlT3V0OiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdE1vdXNlT3V0XCIsXG4gICAgICAgIHJlY3RDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RDbGlja1wiLFxuICAgICAgICByZWN0RGJsQ2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0RGJsQ2xpY2tcIixcbiAgICB9XG5cbiAgICAvLyBUaGUgZDMgY29tcG9uZW50cyB0aGF0IGFyZSBzYXZlZCB0byBtYWtlIHJlbmRlcmluZyBmYXN0ZXJcbiAgICBjb3JwdXNNYXRzOiBEM1NlbFxuICAgIHJvd0dyb3VwczogRDNTZWxcbiAgICBkaXZIb3ZlcjogRDNTZWxcblxuICAgIF9jdXJyZW50ID0ge31cbiAgICByb3dDc3NOYW1lID0gJ2luZGV4LW1hdGNoLXJlc3VsdHMnXG4gICAgY2VsbENzc05hbWUgPSAnaW5kZXgtY2VsbC1yZXN1bHQnXG5cbiAgICBfZGF0YTogRGF0YUludGVyZmFjZVxuXG4gICAgc3RhdGljIGNvbG9yU2NhbGU6IHRwLkNvbG9yTWV0YVNjYWxlID0gc3BhY3lDb2xvcnMuY29sb3JTY2FsZTtcblxuICAgIC8vIFNlbGVjdGlvbnNcbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuaWR4cyA9IFstMSwgMCwgMV07XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBnZXQgaWR4cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pZHhzO1xuICAgIH1cblxuICAgIHNldCBpZHhzKHZhbDogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlkeHMgPSB2YWxcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhdGljIGRvbSBlbGVtZW50c1xuICAgIF9pbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb3JwdXNNYXRzID0gdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKVxuICAgICAgICB0aGlzLnJvd0dyb3VwcyA9IHRoaXMuY29ycHVzTWF0cy5zZWxlY3RBbGwoYC4ke3RoaXMucm93Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLmRpdkhvdmVyID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgndGV4dC1jZW50ZXInLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIud2lkdGgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci5oZWlnaHQpICsgJ3B4JylcblxuICAgICAgICB0aGlzLmRpdkhvdmVyLmFwcGVuZCgncCcpXG4gICAgfVxuXG4gICAgcGljayh2YWw6IERpc3BsYXlPcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b1BpY2sgPSBbdmFsXVxuICAgICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuXG4gICAgYWRkUmlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGFkZGVkSWR4ID0gUi5sYXN0KHRoaXMuaWR4cykgKyAxO1xuICAgICAgICB0aGlzLmlkeHMucHVzaChhZGRlZElkeClcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwicmlnaHRcIilcbiAgICB9XG5cbiAgICBhZGRMZWZ0KCkge1xuICAgICAgICBjb25zdCBhZGRlZElkeCA9IHRoaXMuaWR4c1swXSAtIDE7XG4gICAgICAgIGNvbnN0IGFkZERlY3JlbWVudGVkSGVhZDogKHg6IG51bWJlcltdKSA9PiBudW1iZXJbXSA9IHggPT4gUi5pbnNlcnQoMCwgUi5oZWFkKHgpIC0gMSkoeClcbiAgICAgICAgdGhpcy5pZHhzID0gYWRkRGVjcmVtZW50ZWRIZWFkKHRoaXMuaWR4cylcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwibGVmdFwiKVxuICAgIH1cblxuICAgIGtpbGxSaWdodCgpIHtcbiAgICAgICAgdGhpcy5raWxsKE1hdGgubWF4KC4uLnRoaXMuaWR4cykpXG4gICAgfVxuXG4gICAga2lsbExlZnQoKSB7XG4gICAgICAgIHRoaXMua2lsbChNYXRoLm1pbiguLi50aGlzLmlkeHMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlZGdlIHZhbHVlIGZyb20gY29udGFpbmVkIGluZGV4ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkIEluZGV4IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIGtpbGwoZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChkID09IE1hdGgubWluKC4uLnRoaXMuaWR4cykgfHwgZCA9PSBNYXRoLm1heCguLi50aGlzLmlkeHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZHhzID0gUi53aXRob3V0KFtkXSwgdGhpcy5pZHhzKVxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5vZmZzZXQtJHtkfWApLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZGF0YSh2YWw/OiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIHJlbmRlcmluZyBjb2RlLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIGRhdGEgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKS5yZW1vdmUoKVxuXG4gICAgICAgIHRoaXMuaWR4cy5mb3JFYWNoKChpZHhPZmZzZXQsIGkpID0+IHtcbiAgICAgICAgICAgIHNlbGYuYWRkQ29ycHVzTWF0KGlkeE9mZnNldClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW5vdGhlciB3b3JkJ3MgbWV0YSBpbmZvcm1hdGlvbiBtYXRyaXggY29sdW1uIHRvIGVpdGhlciBzaWRlIG9mIHRoZSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIGlkeE9mZnNldCBEaXN0YW5jZSBvZiB3b3JkIGZyb20gbWF0Y2hlZCB3b3JkIGluIHRoZSBzZW50ZW5jZVxuICAgICAqIEBwYXJhbSB0b1RoZSBJbmRpY2F0ZXMgYWRkaW5nIHRvIHRoZSBcImxlZnRcIiBvciB0byB0aGUgXCJyaWdodFwiIG9mIHRoZSBpbmRleFxuICAgICAqL1xuICAgIGFkZENvcnB1c01hdChpZHhPZmZzZXQ6IG51bWJlciwgdG9UaGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgYm94V2lkdGggPSBvcC5jZWxsV2lkdGggKiBvcC50b1BpY2subGVuZ3RoO1xuICAgICAgICBjb25zdCBib3hIZWlnaHQgPSBSLnN1bShSLm1hcChSLnByb3AoJ2hlaWdodCcpLCB0aGlzLl9kYXRhKSlcblxuICAgICAgICBsZXQgY29ycHVzTWF0O1xuXG4gICAgICAgIGlmICh0b1RoZSA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9UaGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5pbnNlcnQoJ2RpdicsIFwiOmZpcnN0LWNoaWxkXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInRvVGhlIG11c3QgaGF2ZSBhcmd1bWVudCBvZiAnbGVmdCcgb3IgJ3JpZ2h0J1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29ycHVzTWF0ID0gY29ycHVzTWF0XG4gICAgICAgICAgICAuZGF0YShbaWR4T2Zmc2V0XSlcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBjb3JwdXMtbWF0IG9mZnNldC0ke2lkeE9mZnNldH1gKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsIGlkeE9mZnNldClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveEhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIHsgaWR4OiBpLCBvZmZzZXQ6IGQsIHZhbDogc2VsZi5vcHRpb25zLnRvUGlja1swXSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdXQsIHsgaWR4OiBpLCBvZmZzZXQ6IGQgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hZGRSb3dHcm91cChjb3JwdXNNYXQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWF0IFRoZSBiYXNlIGRpdiBvbiB3aGljaCB0byBhZGQgbWF0cmljZXMgYW5kIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dHcm91cChtYXQ6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCBoZWlnaHRzID0gUi5tYXAoUi5wcm9wKCdoZWlnaHQnKSwgdGhpcy5fZGF0YSlcblxuICAgICAgICBjb25zdCBbaGVpZ2h0U3VtLCByYXdIZWlnaHRMaXN0XSA9IFIubWFwQWNjdW0oKHgsIHkpID0+IFtSLmFkZCh4LCB5KSwgUi5hZGQoeCwgeSldLCAwLCBoZWlnaHRzKVxuICAgICAgICBjb25zdCBmaXhMaXN0OiAoeDogbnVtYmVyW10pID0+IG51bWJlcltdID0gUi5jb21wb3NlKFIuZHJvcExhc3QoMSksXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBSLnByZXBlbmQoMClcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBoZWlnaHRMaXN0ID0gZml4TGlzdChyYXdIZWlnaHRMaXN0KVxuXG4gICAgICAgIGNvbnN0IHJvd0dyb3VwID0gbWF0LnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IG1hbmFnZXJEYXRhMk1hdERhdGEoc2VsZi5fZGF0YSwgZCwgb3AudG9QaWNrKSlcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwicm93LW51bVwiLCAoZCxpKSA9PiBpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZCA9PiBkLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gU1ZHLnRyYW5zbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodExpc3RbaV0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIG9wLnRvUGljay5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgc2VsZi5hZGRSZWN0KHJvd0dyb3VwLCAwLCBwcm9wKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFJlY3QoZzogRDNTZWwsIHhTaGlmdDogbnVtYmVyLCBwcm9wOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICBjb25zdCByZWN0cyA9IGcuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG9wLmNlbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGQgPT4gZC5oZWlnaHQgLSAzLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogeFNoaWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMS41LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDb3JwdXNNYXRNYW5hZ2VyLmNvbG9yU2NhbGVbcHJvcF0oZFtwcm9wXSkpXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdldEJhc2VYID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IGdldEJhc2VZID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICBnLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLy8gR2V0IG9mZnNldFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkgLy8gQ29sdW1uXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gK2NvbC5hdHRyKCdvZmZzZXQnKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3Zlciwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpIC8vIENvbHVtblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICtjb2wuYXR0cignb2Zmc2V0JylcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU91dCwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMywgM11cbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpIC0gKG9wLmRpdkhvdmVyLndpZHRoICsgZGl2T2Zmc2V0WzBdKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSAtIChvcC5kaXZIb3Zlci5oZWlnaHQgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3ZlclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIFN0cmluZyh0b3ApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGRbcHJvcF0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIERhdGEgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIF9yZW5kZXIoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAnZDMtYXJyYXknXG5pbXBvcnQgKiBhcyBhdSBmcm9tICcuLi9ldGMvYXJyYXlVdGlscydcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5pbXBvcnQgeyBUeXBlZEFycmF5IH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlL2Rpc3QvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkZ2Uge1xuICAgIGk6IG51bWJlciwgLy8gU291cmNlIGluZGV4XG4gICAgajogbnVtYmVyLCAvLyBUYXJnZXQgaW5kZXhcbiAgICB2OiBudW1iZXIsIC8vIFZhbHVlXG59XG5cbi8qKlxuICogQ29udmVydCBkYXRhIG1hdHJpeCB0byBuZWNlc3NhcnkgZGF0YSBhcnJheSB0byBwYXNzIHRvIFNWRyBjb25uZWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9FZGdlcyAoZGF0YTpudW1iZXJbXVtdLCBjdXRvZmZBbXQ9MSkgOiBFZGdlW10ge1xuICAgIGxldCBvdXRBcnI6IEVkZ2VbXSA9IFtdO1xuICAgIGxldCBjdXRvZmY6IG51bWJlcjtcbiAgICBkYXRhLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBjdXRvZmYgPSBjdXRvZmZBbXQgKiBkMy5zdW0ocm93KTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnI6YXUuU29ydEFycmF5ID0gYXUuc29ydFdpdGhJbmRpY2VzKHJvdyk7XG5cbiAgICAgICAgc29ydGVkQXJyLmFyci5mb3JFYWNoKCh2LGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqOiBFZGdlID0ge1xuICAgICAgICAgICAgICAgICAgICBpOiBpLFxuICAgICAgICAgICAgICAgICAgICBqOiBzb3J0ZWRBcnIuc29ydEluZGljZXNbal0sXG4gICAgICAgICAgICAgICAgICAgIHY6IHYsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dEFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIHJldHVybiBvdXRBcnI7XG59XG4vKipcbiAqIENsYXNzIGZvciBpbXBsZW1lbnRpbmcgb3BlcmF0aW9ucyBvbiBBdHRlbnRpb25HcmFwaCBpbXBsZW1lbnRhdGlvbi4gXG4gKiBDbG9zZWx5IHRpZWQgdG8gW1tBdHRlbnRpb25Db25uZWN0b3JdXVxuICovXG5leHBvcnQgY2xhc3MgRWRnZURhdGEge1xuICAgIHJlYWRvbmx5IHRlbnNEYXRhOnRmLlRlbnNvcjtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgZGF0YTpudW1iZXJbXVtdKXtcbiAgICAgICAgdGhpcy50ZW5zRGF0YSA9IHRmLnRlbnNvcihkYXRhKTtcbiAgICB9XG5cbiAgICBtaW4oYXhpcz86bnVtYmVyKTpUeXBlZEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWluKGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgbWF4KGF4aXM/Om51bWJlcik6VHlwZWRBcnJheXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWF4KGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgZXh0ZW50KGF4aXM/Om51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiBkMy56aXAodGhpcy5taW4oYXhpcyksIHRoaXMubWF4KGF4aXMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgZGF0YSB0byBzZW5kIHRvIFNWRyBjaGFydC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYWNjdW11bGF0ZVRocmVzaCAtIEEgZmxvYXQgYmV0d2VlbiAwIGFuZCAxLCBpbmRpY2F0aW5nIHRoZSBhbW91bnQgb2Ygd2VpZ2h0IHRvIGRpc3BsYXkuIERlZmF1bHRzIHRvIDAuNy5cbiAgICAgKi9cbiAgICBmb3JtYXQgKGFjY3VtdWxhdGVUaHJlc2g9MC43KTpFZGdlW10ge1xuICAgICAgICByZXR1cm4gdG9FZGdlcyh0aGlzLmRhdGEsIGFjY3VtdWxhdGVUaHJlc2gpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuXG50eXBlIGluZm9FdmVudEZyb21JID0gKHNlbDogRDNTZWwsIGk6IG51bWJlcikgPT4gdHAuVG9rZW5FdmVudFxudHlwZSBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIsIGVtYmVkOiBudW1iZXJbXSkgPT4gdHAuVG9rZW5FbWJlZGRpbmdFdmVudFxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dFRva2VucyBleHRlbmRzIFZDb21wb25lbnQ8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPntcblxuICAgIGFic3RyYWN0IGNzc19uYW1lOiBzdHJpbmdcbiAgICBhYnN0cmFjdCBob3Zlcl9jc3NfbmFtZTogc3RyaW5nXG4gICAgYWJzdHJhY3Qgc2lkZTogdHAuU2lkZU9wdGlvbnNcbiAgICBlSW5mbzogaW5mb0V2ZW50RnJvbUkgPSAoc2VsLCBpKSA9PiB7IHJldHVybiB7IHNlbDogc2VsLCBzaWRlOiB0aGlzLnNpZGUsIGluZDogaSB9IH1cbiAgICBlRW1iZWRkaW5nOiBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChzZWwsIGksIGVtYmVkKSA9PiB7IHJldHVybiB7IHNlbDogc2VsLCBzaWRlOiB0aGlzLnNpZGUsIGluZDogaSwgZW1iZWRkaW5nczogZW1iZWQgfSB9XG4gICAgZGl2SG92ZXI6IEQzU2VsXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICB0b2tlbk1vdXNlT3ZlcjogXCJUZXh0VG9rZW5fVG9rZW5Nb3VzZU92ZXJcIixcbiAgICAgICAgdG9rZW5Nb3VzZU91dDogXCJUZXh0VG9rZW5fVG9rZW5Nb3VzZU91dFwiLFxuICAgICAgICB0b2tlbkNsaWNrOiBcIlRleHRUb2tlbl9Ub2tlbkNsaWNrXCIsXG4gICAgICAgIHRva2VuRGJsQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuRGJsQ2xpY2tcIixcbiAgICB9O1xuXG4gICAgZGF0YTogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdO1xuXG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNixcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBkaXZIb3Zlcjoge1xuICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgb2Zmc2V0OiBbMywgM10sXG4gICAgICAgICAgICB0ZXh0SW5mbzogXCJXb3VsZCBwcmVkaWN0Li4uXCJcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGV4dEJveGVzOiBEM1NlbFxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBtYXNrKG1hc2tJbmRzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLnBhcmVudC5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5lYWNoKChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgICAgICAgc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgXy5pbmNsdWRlcyhtYXNrSW5kcywgaSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEVtYmVkZGluZyhpbmQ6IG51bWJlcik6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtpbmRdXG4gICAgfVxuXG4gICAgX2luaXQoKSB7IH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG5cbiAgICBfZGl2UGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzMsIDNdXG4gICAgICAgIGNvbnN0IGxlZnQgPSBtb3VzZVswXSArIGdldEJhc2VYKCkgLSAob3AuZGl2SG92ZXIud2lkdGggKyBkaXZPZmZzZXRbMF0pXG4gICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSArIGRpdk9mZnNldFsxXVxuICAgICAgICByZXR1cm4gW2xlZnQsIHRvcF1cbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIFJlc2V0IHRva2VuIGRpc3BsYXlcbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbChcIipcIikucmVtb3ZlKClcblxuICAgICAgICB0aGlzLmRpdkhvdmVyID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0b2staW5mbycsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0LWhvdmVyLWRpc3BsYXknLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQodGhpcy5ob3Zlcl9jc3NfbmFtZSwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLndpZHRoKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIuaGVpZ2h0KSArICdweCcpXG5cbiAgICAgICAgdGhpcy5kaXZIb3ZlclxuICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgncC1pbmZvJywgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC13ZWlnaHQnLCAnYm9sZCcpXG4gICAgICAgICAgICAudGV4dChvcC5kaXZIb3Zlci50ZXh0SW5mbylcblxuXG4gICAgICAgIC8vIEFkZCBibGFuayBkaXZzXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBvZmZzZXQgKCR7dGhpcy5zaWRlfSk6IGAsIG9wLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGJsYW5rRGl2cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5ibGFuay10ZXh0LWJveGApXG5cbiAgICAgICAgYmxhbmtEaXZzLmRhdGEoUi5yYW5nZSgwLCBvcC5vZmZzZXQpKVxuICAgICAgICAgICAgLmpvaW4oXCJkaXZcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmxhbmstdGV4dC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwidG9rZW5cIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZShcImhlaWdodFwiLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IFwiICBcIilcblxuICAgICAgICAvLyBSZW5kZXIgbm9ybWFsIHRleHQgYm94IGRhdGFcbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSA8RDNTZWw+dGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiBgdG9rZW4gJHt0aGlzLmNzc19uYW1lfSB0b2tlbi0ke2l9YClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IGAke3RoaXMuY3NzX25hbWV9LSR7aX1gKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC50ZXh0LnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKS5yZXBsYWNlKFwiXFx1MDEwQVwiLCBcIlxcXFxuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAnbGlnaHRibHVlJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3Zlciwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAwKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCB0b3BdID0gc2VsZi5fZGl2UGxhY2VtZW50KClcblxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgU3RyaW5nKGxlZnQpICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBTdHJpbmcodG9wKSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCIudG9way13b3JkLWJveFwiKVxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoZDMuemlwKGQudG9wa193b3JkcywgZC50b3BrX3Byb2JzKSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJ3AnKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZChcInRvcGstd29yZC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRleHQodyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gd1swXS5yZXBsYWNlKC9cXHUwMTIwL2csIFwiIFwiKS5yZXBsYWNlKC9cXHUwMTBBL2csIFwiXFxcXG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2IgPSB3WzFdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lICsgXCI6IFwiICsgcHJvYlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBzZWxmLmFkZENsaWNrKHNlbGYudGV4dEJveGVzKVxuICAgIH1cblxuICAgIGFkZENsaWNrKHRleHRib3hlczogRDNTZWwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSB0ZXh0Ym94ZXNcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIHNlbGYuZUVtYmVkZGluZyhzZWwsIGksIGQuZW1iZWRkaW5ncykpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdkYmxjbGljaycsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuXG4gICAgY3NzX25hbWUgPSAnbGVmdC10b2tlbic7XG4gICAgaG92ZXJfY3NzX25hbWUgPSAnbGVmdC10b2tlbi1ob3ZlcidcbiAgICBzaWRlOiB0cC5TaWRlT3B0aW9ucyA9ICdsZWZ0JztcbiAgICBvZmZzZXQ6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgUmlnaHRUZXh0VG9rZW4gZXh0ZW5kcyBUZXh0VG9rZW5zIHtcbiAgICBjc3NfbmFtZSA9ICdyaWdodC10b2tlbic7XG4gICAgaG92ZXJfY3NzX25hbWUgPSAncmlnaHQtdG9rZW4taG92ZXInXG4gICAgc2lkZTogdHAuU2lkZU9wdGlvbnMgPSAncmlnaHQnXG4gICAgb2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgX2RpdlBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHNlbGYuYmFzZS5ub2RlKCkpXG4gICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFszLCAzXVxuICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpICsgZGl2T2Zmc2V0WzBdXG4gICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSArIGRpdk9mZnNldFsxXVxuICAgICAgICByZXR1cm4gW2xlZnQsIHRvcF1cbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7RDNTZWwsIFV0aWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQge1NWR30gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqIFxuICogQ29tbW9uIFByb3BlcnRpZXM6XG4gKiAtIGV2ZW50c1xuICogLSBldmVudEhhbmRsZXIgKFYgaW1wb3J0YW50KVxuICogLSBvcHRpb25zIChNYWludGFpbnMgcHVibGljIHN0YXRlLiBDYW4gZXhwb3NlIHRoZXNlIHdpdGggZ2V0L3NldCBmdW5jdGlvbnMgd2l0aCBhdXRvIHVwZGF0ZSlcbiAqIC0gX2N1cnJlbnQgKE1haW50YWlucyBwcml2YXRlIHN0YXRlKVxuICogLSBjc3NOYW1lIChzeW5jZWQgd2l0aCBjb3JyZXNwb25kaW5nIENTUyBmaWxlKVxuICogLSBwYXJlbnQgKEhUTUwgaXMgZGl2IGNvbnRhaW5pbmcgdGhlIGJhc2UsIFNWRyBpcyBTVkcgZWxlbWVudClcbiAqIC0gYmFzZSAoSFRNTCBpcyBkaXYgd2l0aCBjc3NfbmFtZSBlc3RhYmxpc2hlZClcbiAqIC0gX2RhdGEgKERhdGEgdXNlZCB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgY29tcG9uZW50KVxuICogLSBfcmVuZGVyRGF0YSAoRGF0YSBuZWVkZWQgdG8gZGlzcGxheS4gVGhpcyBtYXkgbm90IGJlIG5lZWRlZCwgYnV0IGlzIGN1cnJlbnRseSB1c2VkIGluIGhpc3RvZ3JhbSlcbiAqIFxuICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgLy8gU1RBVElDIEZJRUxEUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHN0YXRpYyBldmVudHM6IHt9ID0ge25vRXZlbnQ6ICdWQ29tcG9uZW50X25vRXZlbnQnfTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxheWVycyBpbiBTVkcgIGZvciBiZyxtYWluLGZnLC4uLlxuICAgICAqL1xuICAgIC8vIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBsYXlvdXQ6IHsgbmFtZTogc3RyaW5nLCBwb3M6IG51bWJlcltdIH1bXSA9IFt7bmFtZTogJ21haW4nLCBwb3M6IFswLCAwXX1dO1xuXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7IC8vIE1vc3RseSBvYnNvbGV0ZSwgbmljZSB0byBoYXZlIHNpbXBsZSBJRCB0byBhc3NpZ24gaW4gQ1NTXG4gICAgcHJvdGVjdGVkIHBhcmVudDogRDNTZWw7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgcHJvdGVjdGVkIGJhc2U6IEQzU2VsOyAvLyBNb3N0bHkgb2Jzb2xldGUsIHJlcHJlc2VudHMgPGc+IGluIHN2Z1xuICAgIHByb3RlY3RlZCBsYXllcnM6IHsgbWFpbj86IEQzU2VsLCBmZz86IEQzU2VsLCBiZz86IEQzU2VsLCBba2V5OiBzdHJpbmddOiBEM1NlbCB9OyAvLyBTdGlsbCB1c2VmdWxcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcHJvdGVjdGVkIF92aXNpYmlsaXR5OiB7IGhpZGRlbjogYm9vbGVhbiwgaGlkZUVsZW1lbnQ/OiBEM1NlbCB8IG51bGw7IFtrZXk6IHN0cmluZ106IGFueSB9OyAvLyBFbmFibGVzIHRyYW5zaXRpb25zIGZyb20gdmlzaWJsZSB0byBpbnZpc2libGUuIE1vc3RseSBvYnNvbGV0ZS5cbiAgICBwcm90ZWN0ZWQgX2RhdGE6IERhdGFJbnRlcmZhY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlckRhdGE6IGFueTsgLy8gVW5uZWNlc3NhcnlcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3NzX25hbWU6IHN0cmluZzsgLy8gTWFrZSB0aGUgc2FtZSBhcyB0aGUgY29ycmVzcG9uZGluZyBjc3MgZmlsZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3VycmVudDoge307IC8vIFByaXZhdGUgc3RhdGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIHRoZSBvYmplY3QgaXRzZWxmLlxuXG4gICAgLy8gQ09OU1RSVUNUT1IgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaW1wbGUgY29uc3RydWN0b3IuIFN1YmNsYXNzZXMgc2hvdWxkIGNhbGwgQHN1cGVySW5pdChvcHRpb25zKSBhcyB3ZWxsLlxuICAgICAqIHNlZSB3aHkgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDM1OTU5NDMvd2h5LWFyZS1kZXJpdmVkLWNsYXNzLXByb3BlcnR5LXZhbHVlcy1ub3Qtc2Vlbi1pbi10aGUtYmFzZS1jbGFzcy1jb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogdGVtcGxhdGU6XG4gICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAvLyAtLSBhY2Nlc3MgdG8gc3ViY2xhc3MgcGFyYW1zOlxuICAgICAgICB0aGlzLnN1cGVySW5pdChvcHRpb25zKTtcbiAgICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IFV0aWwuc2ltcGxlVUlkKHt9KTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuXG4gICAgICAgIC8vIElmIG5vdCBmdXJ0aGVyIHNwZWNpZmllZCAtIGNyZWF0ZSBhIGxvY2FsIGV2ZW50IGhhbmRsZXIgYm91bmQgdG8gdGhlIGJhcyBlbGVtZW50XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8XG4gICAgICAgICAgICBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG5cbiAgICAgICAgLy8gT2JqZWN0IGZvciBzdG9yaW5nIGludGVybmFsIHN0YXRlcyBhbmQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkgPSB7aGlkZGVuOiBmYWxzZX07XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcbiAgICAgICAgdGhpcy5iYXNlID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQodGhpcy5jc3NfbmFtZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgdG8gYmUgY2FsbGVkIGFzIGxhc3QgY2FsbCBpbiBzdWJjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zXG4gICAgICogQHBhcmFtIGRlZmF1bHRMYXllcnMgLS0gY3JlYXRlIHRoZSBkZWZhdWx0IDxnPiBsYXllcnM6IGJnIC0+IG1haW4gLT4gZmdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0U1ZHKG9wdGlvbnM6IHt9ID0ge30sIGRlZmF1bHRMYXllcnMgPSBbJ2JnJywgJ21haW4nLCAnZmcnXSkge1xuICAgICAgICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zIGlmIG5vdCBzcGVjaWZpZWQgaW4gY29uc3RydWN0b3IgY2FsbFxuICAgICAgICAvLyBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIC8vIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICAvLyBjb25zdCBrZXlzID0gbmV3IFNldChbLi4uT2JqZWN0LmtleXMoZGVmYXVsdHMpLCAuLi5PYmplY3Qua2V5cyhvcHRpb25zKV0pO1xuICAgICAgICAvLyBrZXlzLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gKGtleSBpbiBvcHRpb25zKSA/IG9wdGlvbnNba2V5XSA6IGRlZmF1bHRzW2tleV0pO1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSk7XG5cbiAgICAgICAgdGhpcy5sYXllcnMgPSB7fTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZ3JvdXAgZWxlbWVudFxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHN2ZyxcbiAgICAgICAgICAgIHRoaXMuY3NzX25hbWUgKyAnIElEJyArIHRoaXMuaWQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9zKTtcblxuICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBsYXllcnM6IGJhY2tncm91bmQsIG1haW4sIGZvcmVncm91bmRcbiAgICAgICAgaWYgKGRlZmF1bHRMYXllcnMpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBvcmRlciBpcyBpbXBvcnRhbnQgIVxuICAgICAgICAgICAgZGVmYXVsdExheWVycy5mb3JFYWNoKGxheWVyID0+e1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFNWRy5ncm91cCh0aGlzLmJhc2UsIGxheWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIHRoZSBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9pbml0KCk7XG5cbiAgICAvLyBEQVRBIFVQREFURSAmIFJFTkRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIEV2ZXJ5IHRpbWUgZGF0YSBoYXMgY2hhbmdlZCwgdXBkYXRlIGlzIGNhbGxlZCBhbmRcbiAgICAgKiB0cmlnZ2VycyB3cmFuZ2xpbmcgYW5kIHJlLXJlbmRlcmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgdXBkYXRlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmRlckRhdGEgPSB0aGlzLl93cmFuZ2xlKGRhdGEpO1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIHdyYW5nbGluZyBtZXRob2QgLS0gaW1wbGVtZW50IGluIHN1YmNsYXNzLiBSZXR1cm5zIHRoaXMucmVuZGVyRGF0YS5cbiAgICAgKiBTaW1wbGVzdCBpbXBsZW1lbnRhdGlvbjogYHJldHVybiBkYXRhO2BcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhXG4gICAgICogQHJldHVybnMgeyp9IC0tIGRhdGEgaW4gcmVuZGVyIGZvcm1hdFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfd3JhbmdsZShkYXRhKTtcblxuXG4gICAgLyoqXG4gICAgICogSXMgcmVzcG9uc2libGUgZm9yIG1hcHBpbmcgZGF0YSB0byBET00gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVuZGVyRGF0YSBwcmUtcHJvY2Vzc2VkICh3cmFuZ2xlZCkgZGF0YVxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3JlbmRlcihyZW5kZXJEYXRhKTogdm9pZDtcblxuXG4gICAgLy8gVVBEQVRFIE9QVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBpbnN0YW5jZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb25seSB0aGUgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZVJlbmRlciBpZiBvcHRpb24gY2hhbmdlIHJlcXVpcmVzIGEgcmUtcmVuZGVyaW5nIChkZWZhdWx0OmZhbHNlKVxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKHtvcHRpb25zLCByZVJlbmRlciA9IGZhbHNlfSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcHRpb25zW2tdID0gb3B0aW9uc1trXSk7XG4gICAgICAgIGlmIChyZVJlbmRlcikgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT0gQ09OVkVOSUVOQ0UgPT09PVxuICAgIHJlZHJhdygpe1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICBzZXRIaWRlRWxlbWVudChoRTogRDNTZWwpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCA9IGhFO1xuICAgIH1cblxuICAgIGhpZGVWaWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBoRSA9IHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgfHwgdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gICAgICAgICAgICB9KS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmhpZGVWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJhc2UuaHRtbCgnJyk7XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnO1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4uL2FwaS9yZXNwb25zZXMnO1xuaW1wb3J0ICcuLi9ldGMveGQzJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vYXBpL21haW5BcGknXG5pbXBvcnQgeyBVSUNvbmZpZyB9IGZyb20gJy4uL3VpQ29uZmlnJ1xuaW1wb3J0IHsgVGV4dFRva2VucywgTGVmdFRleHRUb2tlbiwgUmlnaHRUZXh0VG9rZW4gfSBmcm9tICcuL1RleHRUb2tlbidcbmltcG9ydCB7IEF0dGVudGlvbkhlYWRCb3gsIGdldEF0dGVudGlvbkluZm8gfSBmcm9tICcuL0F0dGVudGlvbkhlYWRCb3gnXG5pbXBvcnQgeyBBdHRlbnRpb25HcmFwaCB9IGZyb20gJy4vQXR0ZW50aW9uQ29ubmVjdG9yJ1xuaW1wb3J0IHsgQ29ycHVzSW5zcGVjdG9yIH0gZnJvbSAnLi9Db3JwdXNJbnNwZWN0b3InXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIsIHNpZGVUb0xldHRlciB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0IHsgQXR0ZW50aW9uV3JhcHBlciwgbWFrZUZyb21NZXRhUmVzcG9uc2UgfSBmcm9tICcuLi9kYXRhL0F0dGVudGlvbkNhcHN1bGUnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgQ29ycHVzTWF0TWFuYWdlciB9IGZyb20gJy4uL3Zpcy9Db3JwdXNNYXRNYW5hZ2VyJ1xuaW1wb3J0IHsgQ29ycHVzSGlzdG9ncmFtIH0gZnJvbSAnLi4vdmlzL0NvcnB1c0hpc3RvZ3JhbSdcbmltcG9ydCB7IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB9IGZyb20gJy4uL2RhdGEvRmFpc3NTZWFyY2hXcmFwcGVyJ1xuaW1wb3J0IHsgRDNTZWwsIFNlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJztcbmltcG9ydCB7IGZyb20sIGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFNpbXBsZU1ldGEgfSBmcm9tIFwiLi4vZXRjL3R5cGVzXCI7XG5pbXBvcnQgQ2hhbmdlRXZlbnQgPSBKUXVlcnkuQ2hhbmdlRXZlbnQ7XG5cblxuZnVuY3Rpb24gaXNOdWxsVG9rZW4odG9rOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgY29uc3QgaXNTb21lTnVsbCA9IHggPT4ge1xuICAgICAgICByZXR1cm4gKHggPT0gbnVsbCkgfHwgKHggPT0gXCJudWxsXCIpXG4gICAgfVxuICAgIGNvbnN0IHRva0lzTnVsbCA9IHRvayA9PSBudWxsO1xuICAgIGNvbnN0IHRva0hhc051bGwgPSBpc1NvbWVOdWxsKHRvay5zaWRlKSB8fCBpc1NvbWVOdWxsKHRvay5pbmQpXG4gICAgcmV0dXJuIHRva0lzTnVsbCB8fCB0b2tIYXNOdWxsXG59XG5cbmZ1bmN0aW9uIHNob3dCeVNpZGUoZTogdHAuVG9rZW5FdmVudCkge1xuICAgIC8vIENoZWNrIGlmIHNhdmVkIHRva2VuIGluIHVpQ29uZiBpcyBudWxsXG4gICAgaWYgKCFpc051bGxUb2tlbihlKSkge1xuICAgICAgICBjb25zdCBjbGFzc1NlbGVjdG9yID0gZS5zaWRlID09IFwibGVmdFwiID8gXCJzcmMtaWR4XCIgOiBcInRhcmdldC1pZHhcIjtcblxuICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShgLmF0bi1jdXJ2ZVske2NsYXNzU2VsZWN0b3J9PScke2UuaW5kfSddYClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dCeVNpZGUoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCwgbmV3RXZlbnQ6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsVG9rZW4oc2F2ZWRFdmVudCkpIHtcbiAgICAgICAgc2hvd0J5U2lkZShuZXdFdmVudClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dBbGwoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSlcbiAgICAgICAgU2VsLnNldFZpc2libGUoXCIuYXRuLWN1cnZlXCIpXG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0SGVhZChoZWFkOiBudW1iZXIpIHtcbiAgICBjb25zdCBhZmZlY3RlZEhlYWRzID0gZDMuc2VsZWN0QWxsKGAuYXR0LXJlY3RbaGVhZD0nJHtoZWFkfSddYCk7XG4gICAgYWZmZWN0ZWRIZWFkcy5jbGFzc2VkKFwidW5zZWxlY3RlZFwiLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBzZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBzZXRTZWxEaXNhYmxlZChhdHRyOiBib29sZWFuLCBzZWw6IEQzU2VsKSB7XG4gICAgY29uc3QgdmFsID0gYXR0ciA/IHRydWUgOiBudWxsXG4gICAgc2VsLmF0dHIoJ2Rpc2FibGVkJywgdmFsKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYWluR3JhcGhpYyB7XG4gICAgYXBpOiBBUElcbiAgICB1aUNvbmY6IFVJQ29uZmlnXG4gICAgYXR0Q2Fwc3VsZTogQXR0ZW50aW9uV3JhcHBlclxuICAgIHRva0NhcHN1bGU6IFRva2VuV3JhcHBlclxuICAgIHNlbHM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIGluaXRpYWwgZDMgc2VsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAgdml6czogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgdmlzIGNvbXBvbmVudHMgd3JhcHBlZCBhcm91bmQgcGFyZW50IHNlbFxuICAgIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyICAgIC8vIE9yY2hlc3RyYXRlcyBldmVudHMgcmFpc2VkIGZyb20gY29tcG9uZW50c1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFQSSgpXG4gICAgICAgIHRoaXMudWlDb25mID0gbmV3IFVJQ29uZmlnKClcbiAgICAgICAgdGhpcy5za2VsZXRvbkluaXQoKVxuICAgICAgICB0aGlzLm1haW5Jbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGFueSBpbmZvcm1hdGlvbiBvZiBhIHJlc3BvbnNlLlxuICAgICAqIFxuICAgICAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBvbmNlIGFuZCBvbmx5IG9uY2VcbiAgICAgKi9cbiAgICBza2VsZXRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VscyA9IHtcbiAgICAgICAgICAgIGJvZHk6IGQzLnNlbGVjdCgnYm9keScpLFxuICAgICAgICAgICAgYXRuQ29udGFpbmVyOiBkMy5zZWxlY3QoJyNhdG4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBhdG5EaXNwbGF5OiBkMy5zZWxlY3QoXCIjYXRuLWRpc3BsYXlcIiksXG4gICAgICAgICAgICBtb2RlbFNlbGVjdG9yOiBkMy5zZWxlY3QoXCIjbW9kZWwtb3B0aW9uLXNlbGVjdG9yXCIpLFxuICAgICAgICAgICAgY29ycHVzU2VsZWN0b3I6IGQzLnNlbGVjdChcIiNjb3JwdXMtc2VsZWN0XCIpLFxuICAgICAgICAgICAgYXRuSGVhZHM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBkMy5zZWxlY3QoXCIjbGVmdC1hdHQtaGVhZHNcIiksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGQzLnNlbGVjdChcIiNyaWdodC1hdHQtaGVhZHNcIiksXG4gICAgICAgICAgICAgICAgaGVhZEluZm86IGQzLnNlbGVjdChcIiNoZWFkLWluZm8tYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCd0ZXh0LWNlbnRlcicsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBTdHJpbmcoNzApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBTdHJpbmcoMzApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBzZW50ZW5jZUE6IGQzLnNlbGVjdChcIiNmb3JtLXNlbnRlbmNlLWFcIiksXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBkMy5zZWxlY3QoXCIjdXBkYXRlLXNlbnRlbmNlXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbHNUb2dnbGU6IGQzLnNlbGVjdChcIiNjbHMtdG9nZ2xlXCIpLnNlbGVjdChcIi5zd2l0Y2hcIiksXG4gICAgICAgICAgICBsYXllckNoZWNrYm94ZXM6IGQzLnNlbGVjdChcIiNsYXllci1zZWxlY3RcIiksXG4gICAgICAgICAgICBoZWFkQ2hlY2tib3hlczogZDMuc2VsZWN0KFwiI2hlYWQtc2VsZWN0XCIpLFxuICAgICAgICAgICAgY29udGV4dFF1ZXJ5OiBkMy5zZWxlY3QoXCIjc2VhcmNoLWNvbnRleHRzXCIpLFxuICAgICAgICAgICAgZW1iZWRkaW5nUXVlcnk6IGQzLnNlbGVjdChcIiNzZWFyY2gtZW1iZWRkaW5nc1wiKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhZHM6IGQzLnNlbGVjdChcIiNzZWxlY3RlZC1oZWFkc1wiKSxcbiAgICAgICAgICAgIGhlYWRTZWxlY3RBbGw6IGQzLnNlbGVjdChcIiNzZWxlY3QtYWxsLWhlYWRzXCIpLFxuICAgICAgICAgICAgaGVhZFNlbGVjdE5vbmU6IGQzLnNlbGVjdChcIiNzZWxlY3Qtbm8taGVhZHNcIiksXG4gICAgICAgICAgICB0ZXN0Q2hlY2tib3g6IGQzLnNlbGVjdChcIiNzaW1wbGUtZW1iZWQtcXVlcnlcIiksXG4gICAgICAgICAgICB0aHJlc2hTbGlkZXI6IGQzLnNlbGVjdChcIiNteS1yYW5nZVwiKSxcbiAgICAgICAgICAgIGNvcnB1c0luc3BlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zaW1pbGFyLXNlbnRlbmNlcy1kaXZcIiksXG4gICAgICAgICAgICBjb3JwdXNNYXRNYW5hZ2VyOiBkMy5zZWxlY3QoXCIjY29ycHVzLW1hdC1jb250YWluZXJcIiksXG4gICAgICAgICAgICBjb3JwdXNNc2dCb3g6IGQzLnNlbGVjdChcIiNjb3JwdXMtbXNnLWJveFwiKSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZERlc2NyaXB0aW9uOiBkMy5zZWxlY3QoXCIjbWF0Y2gta2luZFwiKSxcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogZDMuc2VsZWN0KFwiI21hdGNoZWQtaGlzdG9ncmFtLWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IGQzLnNlbGVjdChcIiNtYXgtYXR0LWhpc3RvZ3JhbS1jb250YWluZXJcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICAgIGtpbGxMZWZ0OiBkMy5zZWxlY3QoXCIja2lsbC1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIGFkZExlZnQ6IGQzLnNlbGVjdChcIiNtaW51cy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIGFkZFJpZ2h0OiBkMy5zZWxlY3QoXCIjcGx1cy1yaWdodFwiKSxcbiAgICAgICAgICAgICAgICBraWxsUmlnaHQ6IGQzLnNlbGVjdChcIiNraWxsLXJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIHJlZnJlc2g6IGQzLnNlbGVjdChcIiNtYXQtcmVmcmVzaFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGFTZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBkMy5zZWxlY3QoXCIjbWF0Y2hlZC1tZXRhLXNlbGVjdFwiKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IGQzLnNlbGVjdChcIiNtYXgtYXR0LW1ldGEtc2VsZWN0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dGhpcy5zZWxzLmJvZHkubm9kZSgpKTtcblxuICAgICAgICB0aGlzLnZpenMgPSB7XG4gICAgICAgICAgICBsZWZ0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciwgeyBzaWRlOiBcImxlZnRcIiwgfSksXG4gICAgICAgICAgICByaWdodEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwicmlnaHRcIiB9KSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IG5ldyBMZWZ0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBuZXcgUmlnaHRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGVudGlvblN2ZzogbmV3IEF0dGVudGlvbkdyYXBoKHRoaXMuc2Vscy5hdG5EaXNwbGF5LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBjb3JwdXNJbnNwZWN0b3I6IG5ldyBDb3JwdXNJbnNwZWN0b3IodGhpcy5zZWxzLmNvcnB1c0luc3BlY3RvciwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgY29ycHVzTWF0TWFuYWdlcjogbmV3IENvcnB1c01hdE1hbmFnZXIodGhpcy5zZWxzLmNvcnB1c01hdE1hbmFnZXIsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IGlkeHM6IHRoaXMudWlDb25mLm9mZnNldElkeHMoKSB9KSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXhBdHQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRIYW5kbGVyKClcbiAgICB9XG5cbiAgICBwcml2YXRlIG1haW5Jbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICB0aGlzLmFwaS5nZXRNb2RlbERldGFpbHModGhpcy51aUNvbmYubW9kZWwoKSkudGhlbihtZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBtZC5wYXlsb2FkXG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5uTGF5ZXJzKHZhbC5ubGF5ZXJzKS5uSGVhZHModmFsLm5oZWFkcylcbiAgICAgICAgICAgIHRoaXMuaW5pdExheWVycyh0aGlzLnVpQ29uZi5uTGF5ZXJzKCkpXG5cbiAgICAgICAgICAgIHRoaXMuYXBpLmdldE1ldGFBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oYXR0ZW50aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSBhdHRlbnRpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGcm9tUmVzcG9uc2UoYXR0KVxuXG4gICAgICAgICAgICAgICAgLy8gV3JhcCBwb3N0SW5pdCBpbnRvIGZ1bmN0aW9uIHNvIGFzeW5jaHJvbm91cyBjYWxsIGRvZXMgbm90IG1lc3Mgd2l0aCBuZWNlc3NhcnkgaW5pdHNcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRGlzcGxheSA9IHRoaXMudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvRGlzcGxheSA9PSAnY29udGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXJ5Q29udGV4dCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9EaXNwbGF5ID09ICdlbWJlZGRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlFbWJlZGRpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBub3JtQnlcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkgJiYgKCF0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1CeSA9IHRwLk5vcm1CeS5Db2xcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1CeSA9IHRwLk5vcm1CeS5BbGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5ub3JtQnkgPSBub3JtQnlcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tYXNrSW5kcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMgPSB0aGlzLnVpQ29uZi5tYXNrSW5kcygpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIG9ubHkgMSBtYXNrIGluZCBpcyBwcmVzZW50IGZvciBhdXRvcmVncmVzc2l2ZSBtb2RlbHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSg8bnVtYmVyPnRoaXMudWlDb25mLnRva2VuKCkuaW5kKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMubGVmdC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IG5leHQuLi5cIlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLnJpZ2h0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgbmV4dC4uLlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5kaXZIb3Zlci50ZXh0SW5mbyA9IFwiV291bGQgcHJlZGljdCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5yaWdodC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGcm9tUmVzcG9uc2UoYXR0ZW50aW9uOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICB0aGlzLmF0dENhcHN1bGUgPSBtYWtlRnJvbU1ldGFSZXNwb25zZShhdHRlbnRpb24sIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSlcbiAgICAgICAgdGhpcy50b2tDYXBzdWxlID0gbmV3IFRva2VuV3JhcHBlcihhdHRlbnRpb24pO1xuICAgICAgICB0aGlzLl9zdGF0aWNJbml0cygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsZWF2ZUNvcnB1c01zZyhtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzSW5zcGVjdG9yLmhpZGVWaWV3KClcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuaGlkZVZpZXcoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgbGVhdmUgbXNnXCIpO1xuICAgICAgICBTZWwudW5oaWRlRWxlbWVudCh0aGlzLnNlbHMuY29ycHVzTXNnQm94KVxuICAgICAgICB0aGlzLnNlbHMuY29ycHVzTXNnQm94LnRleHQobXNnKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2JpbmRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIChlKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYudWlDb25mLm1vZGVsS2luZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgICAgICBlLnNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsICFlLnNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gc2lkZVRvTGV0dGVyKGUuc2lkZSwgdGhpcy51aUNvbmYuYXR0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlW2xldHRlcl0udG9nZ2xlKGUuaW5kKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbigocmVzcDogcnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgciA9IHJlc3AucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGUudXBkYXRlVG9rZW5zKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyh0aGlzLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvcmVncmVzc2l2ZSBtb2RlbCBkb2Vzbid0IGRvIG1hc2tpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hhdCBraW5kIG9mIG1vZGVsIGlzIHRoaXM/XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3ZlciwgKGU6IHRwLlRva2VuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSwgZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdXQsIChlKSA9PiB7XG4gICAgICAgICAgICBjaG9vc2VTaG93QWxsKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnRvZ2dsZVRva2VuKGUpXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuICAgICAgICAgICAgICAgIHNob3dCeVNpZGUoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva1RvZ2dsZSgpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2Vscy5hdG5IZWFkcy5oZWFkSW5mby5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2Vscy5hdG5IZWFkcy5oZWFkSW5mby5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3V0XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZU1hdCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKHVwZGF0ZU1hdClcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcudXBkYXRlKHVwZGF0ZU1hdClcblxuICAgICAgICAgICAgc2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWRzKHRoaXMudWlDb25mLmhlYWRzKCkpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEoYXR0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUoYXR0KVxuICAgICAgICAgICAgc2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VNb3ZlLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGVhZEluZm8gPSBzZWxmLnNlbHMuYXRuSGVhZHMuaGVhZEluZm9cbiAgICAgICAgICAgIGxldCBsZWZ0LCB0b3AsIGJvcmRlclJhZGl1c1xuXG4gICAgICAgICAgICBpZiAoZS5zaWRlID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzEyLCAzXVxuICAgICAgICAgICAgICAgIGxlZnQgPSBlLm1vdXNlWzBdICsgZS5iYXNlWCAtICgraGVhZEluZm8uc3R5bGUoJ3dpZHRoJykucmVwbGFjZSgncHgnLCAnJykgKyBkaXZPZmZzZXRbMF0pXG4gICAgICAgICAgICAgICAgdG9wID0gZS5tb3VzZVsxXSArIGUuYmFzZVkgLSAoK2hlYWRJbmZvLnN0eWxlKCdoZWlnaHQnKS5yZXBsYWNlKCdweCcsICcnKSArIGRpdk9mZnNldFsxXSlcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXMgPSBcIjhweCA4cHggMXB4IDhweFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbLTEzLCAzXVxuICAgICAgICAgICAgICAgIGxlZnQgPSBlLm1vdXNlWzBdICsgZS5iYXNlWCArIGRpdk9mZnNldFswXVxuICAgICAgICAgICAgICAgIHRvcCA9IGUubW91c2VbMV0gKyBlLmJhc2VZIC0gKCtoZWFkSW5mby5zdHlsZSgnaGVpZ2h0JykucmVwbGFjZSgncHgnLCAnJykgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzID0gXCI4cHggOHB4IDhweCAxcHhcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkSW5mb1xuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndG9wJywgU3RyaW5nKHRvcCkgKyAncHgnKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnYm9yZGVyLXJhZGl1cycsIGJvcmRlclJhZGl1cylcbiAgICAgICAgICAgICAgICAudGV4dChgSGVhZDogJHtlLmluZCArIDF9YClcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3ZlclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIChlOiB7IGhlYWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy51aUNvbmYudG9nZ2xlSGVhZChlLmhlYWQpXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuQURERUQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuUkVNT1ZFRCkge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdmVyLCAoZTogeyB2YWw6IFwicG9zXCIgfCBcImRlcFwiIHwgXCJpc19lbnRcIiwgb2Zmc2V0OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU91dCwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCB0aGUgYmVsb3cgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IHRoZSB3aG9sZSBjb2x1bW5cbiAgICAgICAgICAgIC8vIGNvbnN0IHNlbGVjdG9yID0gYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoc2VsZWN0b3IpLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU92ZXIsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCB0cnVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZDMuc2VsZWN0KGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7ZS5pZHh9J11gKVxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IHJvdy5zZWxlY3QoYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gKVxuICAgICAgICAgICAgd29yZC5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF90b2dnbGVUb2tlblNlbCgpIHtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMudWlDb25mLnRva2VuKClcbiAgICAgICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkID0gZDMuc2VsZWN0KCcuc2VsZWN0ZWQtdG9rZW4nKVxuXG4gICAgICAgIC8vIElmIG5vIHRva2VuIHNob3VsZCBiZSBzZWxlY3RlZCwgdW5zZWxlY3QgYWxsIHRva2Vuc1xuICAgICAgICBpZiAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbDogZDMuU2VsZWN0aW9uPEJhc2VUeXBlLCBhbnksIEJhc2VUeXBlLCBhbnk+ID0gZDMuc2VsZWN0QWxsKCcuc2VsZWN0ZWQtdG9rZW4nKVxuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbGVjdCB0aGUgaW5kaWNhdGVkIHRva2VuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4yU3RyaW5nID0gKGU6IHRwLlRva2VuRXZlbnQpID0+IGAjJHtlLnNpZGV9LXRva2VuLSR7ZS5pbmR9YFxuICAgICAgICAgICAgY29uc3QgbmV3U2VsID0gZDMuc2VsZWN0KHRva2VuMlN0cmluZyhlKSlcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2VsZWN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyB0b2tlbiBzZWxlY3Rpb24sIGlmIGFueVxuICAgICAgICBpZiAoIWFscmVhZHlTZWxlY3RlZC5lbXB0eSgpKSB7XG4gICAgICAgICAgICBhbHJlYWR5U2VsZWN0ZWQuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSgrZS5pbmQpXG4gICAgICAgICAgICB0aGlzLm1hcmtOZXh0VG9nZ2xlKCtlLmluZCwgdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgfVxuXG4gICAgLyoqIEdyYXkgYWxsIHRva2VucyB0aGF0IGhhdmUgaW5kZXggZ3JlYXRlciB0aGFuIGluZCAqL1xuICAgIHByaXZhdGUgZ3JheUJhZFRva3MoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JheVRva3MgPSBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICBzLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgaSA+IGluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnJpZ2h0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKGdyYXlUb2tzKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdyYXlUb2dnbGUoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgICAgICAgICB0aGlzLmdyYXlCYWRUb2tzKGluZClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcudG9rZW4nKS5jbGFzc2VkKCdtYXNrZWQtdG9rZW4nLCBmYWxzZSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya05leHRXb3JkVG9rcyhpbmQ6IG51bWJlciwgTjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1hcmtUb2tzID0gZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHMuY2xhc3NlZChcIm5leHQtdG9rZW5cIiwgaSA9PSBNYXRoLm1pbihpbmQgKyAxLCBOKSlcbiAgICAgICAgfVxuICAgICAgICBkMy5zZWxlY3RBbGwoJy5yaWdodC10b2tlbicpLmVhY2gobWFya1Rva3MpXG4gICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKG1hcmtUb2tzKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFya05leHRUb2dnbGUoaW5kOiBudW1iZXIsIE46IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSlcbiAgICAgICAgICAgIHRoaXMubWFya05leHRXb3JkVG9rcyhpbmQsIE4pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnRva2VuJykuY2xhc3NlZCgnbmV4dC10b2tlbicsIGZhbHNlKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1vZGVsU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIC8vIEJlbG93IGFyZSB0aGUgYXZhaWxhYmxlIG1vZGVscy4gV2lsbCBuZWVkIHRvIGNob29zZSAzIHRvIGJlIGF2YWlsYWJsZSBPTkxZXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLWNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLXVuY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZFwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcImRpc3RpbHJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImFsYmVydC1iYXNlLXYxXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6IFwicm9iZXJ0YS1iYXNlXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJncHQyLW1lZGl1bVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJkaXN0aWxncHQyXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBSLm1hcChSLnByb3AoJ25hbWUnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZHMgPSBSLm1hcChSLnByb3AoJ2tpbmQnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZG1hcCA9IFIuemlwT2JqKG5hbWVzLCBraW5kcylcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5zZWxlY3RBbGwoJy5tb2RlbC1vcHRpb24nKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdvcHRpb24nKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21vZGVsLW9wdGlvbicsIHRydWUpXG4gICAgICAgICAgICAucHJvcGVydHkoJ3ZhbHVlJywgZCA9PiBkLm5hbWUpXG4gICAgICAgICAgICAuYXR0cihcIm1vZGVsa2luZFwiLCBkID0+IGQua2luZClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5uYW1lKVxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIHRoaXMudWlDb25mLm1vZGVsKCkpO1xuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgY29uc3QgbW5hbWUgPSBtZS5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWwobW5hbWUpO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWxLaW5kKGtpbmRtYXBbbW5hbWVdKTtcbiAgICAgICAgICAgIGlmIChraW5kbWFwW21uYW1lXSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU0VUVElORyBNQVNLIElORFNcIik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHMoW10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1haW5Jbml0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENvcnB1c1NlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgY29kZTogXCJ3b3pcIiwgZGlzcGxheTogXCJXaXphcmQgb2YgT3pcIiB9LFxuICAgICAgICAgICAgeyBjb2RlOiBcIndpa2lcIiwgZGlzcGxheTogXCJXaWtpcGVkaWFcIiB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zZWxzLmNvcnB1c1NlbGVjdG9yLnNlbGVjdEFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQuY29kZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kaXNwbGF5KVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLmNvcnB1cyhtZS5wcm9wZXJ0eSgndmFsdWUnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudWlDb25mLmNvcnB1cygpKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhdGljSW5pdHMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRTZW50ZW5jZUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdE1vZGVsU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRDb3JwdXNTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW5pdFF1ZXJ5Rm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0QWRkZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgdGhpcy5faW5pdE1ldGFTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdFRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QWRkZXIoKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVVybE9mZnNldElkeHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmlkeHMpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXhDb3JwdXNNYXRIZWlnaHRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3V3JhcHBlZCA9IHRoaXMuX3dyYXBSZXN1bHRzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEobmV3V3JhcHBlZC5kYXRhKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRMZWZ0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmFkZExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbFJpZ2h0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmtpbGxSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5raWxsTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsTGVmdCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5yZWZyZXNoLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLnRleHQoKSAhPSAnJykgZml4Q29ycHVzTWF0SGVpZ2h0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gb25yZXNpemVcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWV0YVNlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy5faW5pdE1hdGNoZWRXb3JkU2VsZWN0b3IodGhpcy5zZWxzLm1ldGFTZWxlY3Rvci5tYXRjaGVkV29yZClcbiAgICAgICAgdGhpcy5faW5pdE1heEF0dFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF4QXR0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNYXhBdHRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXgoKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIC8vIERvIHRvZ2dsZVxuICAgICAgICAgICAgc2VsLnNlbGVjdEFsbCgnLmFjdGl2ZScpLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tZXRhTWF4KHZhbClcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC5tZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF0Y2hlZFdvcmRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSA8U2ltcGxlTWV0YT5kMy5zZWxlY3QodGhpcykuYXR0cigndmFsdWUnKVxuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1hdGNoKHZhbClcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlU2VhcmNoaW5nKGF0dHI6IGJvb2xlYW4pIHtcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmNvbnRleHRRdWVyeSlcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmVtYmVkZGluZ1F1ZXJ5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbDogdHAuU2ltcGxlTWV0YSkge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzSW5zcGVjdG9yLnNob3dOZXh0KHRoaXMudWlDb25mLnNob3dOZXh0KVxuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5waWNrKHZhbClcbiAgICAgICAgdGhpcy52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQubWV0YSh2YWwpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNlbnRlbmNlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3BsYWNlaG9sZGVyJywgXCJFbnRlciBuZXcgc2VudGVuY2UgdG8gYW5hbHl6ZVwiKVxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigndmFsdWUnLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpKVxuXG4gICAgICAgIGNvbnN0IGNsZWFySW5zcGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdE5ld1NlbnRlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJlbmNlcyBvZiAnIycgaW4gc2VudGVuY2UgYXMgdGhpcyBjYXVzZXMgdGhlIEFQSSB0byBicmVha1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2VfYTogc3RyaW5nID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLnByb3BlcnR5KFwidmFsdWVcIikucmVwbGFjZSgvXFwjL2csICcnKVxuXG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgZm9ybSBpcyBmaWxsZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBpZiAoc2VudGVuY2VfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgc2VudGVuY2VfYSwgdGhpcy51aUNvbmYubGF5ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnNlbnRlbmNlKHNlbnRlbmNlX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5ybVRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnNwZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25FbnRlciA9IFIuY3VycnkoKGtleUNvZGUsIGYsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0ga2V5Q29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXJTdWJtaXQgPSBvbkVudGVyKDEzLCBzdWJtaXROZXdTZW50ZW5jZSlcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnNlbHMuZm9ybS5idXR0b247XG4gICAgICAgIGNvbnN0IGlucHV0Qm94ID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBO1xuXG4gICAgICAgIGJ0bi5vbihcImNsaWNrXCIsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuICAgICAgICBpbnB1dEJveC5vbigna2V5cHJlc3MnLCBvbkVudGVyU3VibWl0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaEVtYmVkcygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2tlbiA9IHRoaXMudWlDb25mLnRva2VuKCk7XG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMudml6cy50b2tlbnNbc2F2ZWRUb2tlbi5zaWRlXS5nZXRFbWJlZGRpbmcoc2F2ZWRUb2tlbi5pbmQpXG4gICAgICAgIHJldHVybiBvdXQuZW1iZWRkaW5nc1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmNvbnRleHRzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VBUkNISU5HIEVNQkVERElOR1NcIik7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gdGhpcy5fZ2V0U2VhcmNoRW1iZWRzKClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcbiAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci5zaG93TmV4dChzZWxmLnVpQ29uZi5zaG93TmV4dClcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHNlbGYuYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBlbWJlZCwgbGF5ZXIsIGhlYWRzLCBrKVxuICAgICAgICAgICAgLnRoZW4oKHZhbDogcnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGVhdmVDb3JwdXNNc2coYEVtYmVkZGluZ3MgYXJlIG5vdCBhdmFpbGFibGUgZm9yIG1vZGVsICcke3NlbGYudWlDb25mLm1vZGVsKCl9JyBhbmQgY29ycHVzICcke3NlbGYudWlDb25mLmNvcnB1cygpfScgYXQgdGhpcyB0aW1lLmApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdmFsLnBheWxvYWRcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLnVuaGlkZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci51bmhpZGVWaWV3KClcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRlZFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXRjaGVkSGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkRGVzY3JpcHRpb24udGV4dCh0aGlzLnVpQ29uZi5tYXRjaEhpc3RvZ3JhbURlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1BVENIRVI6IFwiLCBzZWxmLnNlbHMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLnVwZGF0ZShjb3VudGVkVmFscylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5kaXNwbGF5SW5zcGVjdG9yKCdlbWJlZGRpbmdzJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hJTkcgQ09OVEVYVFNcIik7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9nZXRTZWFyY2hDb250ZXh0KClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcbiAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci5zaG93TmV4dChzZWxmLnVpQ29uZi5zaG93TmV4dClcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgc2VsZi5hcGkuZ2V0TmVhcmVzdENvbnRleHRzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBjb250ZXh0LCBsYXllciwgaGVhZHMsIGspXG4gICAgICAgICAgICAudGhlbigodmFsOiByc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxlYXZlQ29ycHVzTXNnKGBDb250ZXh0cyBhcmUgbm90IGF2YWlsYWJsZSBmb3IgbW9kZWwgJyR7c2VsZi51aUNvbmYubW9kZWwoKX0nIGFuZCBjb3JwdXMgJyR7c2VsZi51aUNvbmYuY29ycHVzKCl9JyBhdCB0aGlzIHRpbWUuYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB2YWwucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJISURJTkdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodilcblxuICAgICAgICAgICAgICAgICAgICBTZWwuaGlkZUVsZW1lbnQoc2VsZi5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51bmhpZGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudW5oaWRlVmlldygpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudGVkVmFscyA9IHdyYXBwZWRWYWxzLmdldE1hdGNoZWRIaXN0b2dyYW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQudXBkYXRlKGNvdW50ZWRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YShzZWxmLnVpQ29uZi5tZXRhTWF4KCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hDb250ZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIiwgdGhpcy51aUNvbmYudG9rZW4oKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hFbWJlZGRpbmdzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hpbmdEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnVpQ29uZi5oZWFkcygpLmxlbmd0aCA9PSAwKSB8fCAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGlzYWJsZXIoKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVTZWFyY2hpbmcodGhpcy5fc2VhcmNoaW5nRGlzYWJsZWQoKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0UXVlcnlGb3JtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb250ZXh0UXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUNvbnRleHQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5lbWJlZGRpbmdRdWVyeS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX3F1ZXJ5RW1iZWRkaW5ncygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVuZGVySGVhZFN1bW1hcnkoKSB7XG4gICAgICAgIHRoaXMuc2Vscy5zZWxlY3RlZEhlYWRzXG4gICAgICAgICAgICAuaHRtbChSLmpvaW4oJywgJywgdGhpcy51aUNvbmYuaGVhZHMoKS5tYXAoaCA9PiBoICsgMSkpKVxuICAgIH1cblxuICAgIC8vIE1vZGlmeSBmYWlzcyByZXN1bHRzIHdpdGggY29ycmVzcG9uZGluZyBoZWlnaHRzXG4gICAgcHJpdmF0ZSBfd3JhcFJlc3VsdHMocmV0dXJuZWRGYWlzc1Jlc3VsdHM6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IGQzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1yb3cnKVxuXG4gICAgICAgIC8vIERvbid0IGp1c3QgdXNlIG9mZnNldEhlaWdodCBzaW5jZSB0aGF0IHJvdW5kcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSByb3dzLm5vZGVzKCkubWFwKChuOiBIVE1MRWxlbWVudCkgPT4gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG5cbiAgICAgICAgY29uc3QgbmV3VmFscyA9IHJldHVybmVkRmFpc3NSZXN1bHRzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGhlaWdodHNbaV0sIHYpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBuZXcgRmFpc3NTZWFyY2hSZXN1bHRXcmFwcGVyKG5ld1ZhbHMsIHRoaXMudWlDb25mLnNob3dOZXh0KVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVkVmFsc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdExheWVycyhuTGF5ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gc2VsZi5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgwLCBuTGF5ZXJzKSlcbiAgICAgICAgICAgIC5qb2luKFwibGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnV0dG9uIGxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBsYXJnZXN0IGxheWVyIGF2YWlsYWJsZSBpZiB1aUNvbmYubGF5ZXIoKSA+IG5ldyBuTGF5ZXJzXG4gICAgICAgICAgICAgICAgaWYgKGQgPT0gc2VsZi51aUNvbmYubGF5ZXIoKSkgeyAvLyBKYXZhc2NyaXB0IGlzIDAgaW5kZXhlZCFcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0FjdGl2ZSAmJiBkID09IG5MYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIoZClcbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IGQgKyAxKVxuICAgICAgICAgICAgLmFwcGVuZChcImlucHV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInR5cGVcIiwgXCJyYWRpb1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoZWNrYm94LWlubGluZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJuYW1lXCIsIFwibGF5ZXJib3hcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiaGVhZFwiLCBkID0+IGQpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBcImxheWVyQ2hlY2tib3hcIiArIGkpXG4gICAgICAgIC8vIC50ZXh0KChkLCBpKSA9PiBkICsgXCIgXCIpXG5cbiAgICAgICAgZnJvbUV2ZW50KGNoZWNrYm94ZXMubm9kZXMoKSwgJ2NoYW5nZScpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gZDMuc2VsZWN0KDxCYXNlVHlwZT5lLnRhcmdldCkuZGF0dW0oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteURhdGEsIFwiLS0tIG15RGF0YVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMubGF5ZXJDaGVja2JveGVzLnNlbGVjdEFsbChcIi5sYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCBkID0+IGQgPT09IG15RGF0YSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWFwKCh2OiBFdmVudCkgPT4gK2QzLnNlbGVjdCg8QmFzZVR5cGU+di50YXJnZXQpLmRhdHVtKCkpLFxuICAgICAgICAgICAgdGFwKHYgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGxheWVyOiBcIiwgdik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubGF5ZXIodik7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3dpdGNoTWFwKCh2KSA9PiBmcm9tKHNlbGYuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMoc2VsZi51aUNvbmYubW9kZWwoKSwgc2VsZi50b2tDYXBzdWxlLmEsIHNlbGYudWlDb25mLnNlbnRlbmNlKCksIHYpKSlcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyhzZWxmLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIHNlbGYuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IGAjbGF5ZXJDaGVja2JveCR7dGhpcy51aUNvbmYubGF5ZXIoKX1gXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGF5ZXIgSUQ6IFwiLCBsYXllcklkKTtcbiAgICAgICAgZDMuc2VsZWN0KGxheWVySWQpLmF0dHIoXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiKVxuXG4gICAgICAgIC8vIEluaXQgdGhyZXNob2xkIHN0dWZmXG4gICAgICAgIGNvbnN0IGRpc3BUaHJlc2ggPSAodGhyZXNoKSA9PiBNYXRoLnJvdW5kKHRocmVzaCAqIDEwMClcbiAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuXG4gICAgICAgIHRoaXMuc2Vscy50aHJlc2hTbGlkZXIub24oXCJpbnB1dFwiLCBfLnRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSA8SFRNTElucHV0RWxlbWVudD50aGlzO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYudGhyZXNob2xkKCtub2RlLnZhbHVlIC8gMTAwKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI215LXJhbmdlLXZhbHVlJykudGV4dChkaXNwVGhyZXNoKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKSlcbiAgICAgICAgICAgIHNlbGYudml6cy5hdHRlbnRpb25TdmcudGhyZXNob2xkKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKVxuICAgICAgICB9LCAxMDApKVxuXG4gICAgICAgIHRoaXMuc2Vscy5oZWFkU2VsZWN0QWxsLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0QWxsSGVhZHMoKTtcbiAgICAgICAgICAgIHNlbGYuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3ROb25lLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi51aUNvbmYuc2VsZWN0Tm9IZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKTtcbiAgICAgICAgICAgIHNlbGYucmVuZGVyU3ZnKClcbiAgICAgICAgICAgIHNlbGYucmVuZGVyQXR0SGVhZCgpXG4gICAgICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgX2luaXRUb2dnbGUoKSB7XG4gICAgICAgIGZyb21FdmVudCh0aGlzLnNlbHMuY2xzVG9nZ2xlLm5vZGUoKSwgJ2lucHV0JykucGlwZShcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogRklYICFcbiAgICAgICAgICAgIG1hcChlID0+IGUuc3JjRWxlbWVudC5jaGVja2VkKSxcbiAgICAgICAgKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCh2KVxuICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS56ZXJvZWQodilcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXR0SGVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckF0dEhlYWQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRzID0gXy5yYW5nZSgwLCB0aGlzLnVpQ29uZi5fbkhlYWRzKVxuICAgICAgICBjb25zdCBmb2N1c0F0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5hdHRcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnVpQ29uZi5oYXNUb2tlbigpID8gdGhpcy51aUNvbmYudG9rZW4oKSA6IG51bGxcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGxlZnRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwibGVmdFwiLCB0b2tlbik7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByaWdodEF0dEluZm8gPSBnZXRBdHRlbnRpb25JbmZvKGZvY3VzQXR0LCBoZWFkcywgXCJyaWdodFwiLCB0b2tlbik7XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLmxlZnRIZWFkcy51cGRhdGUobGVmdEF0dEluZm8pXG4gICAgICAgIHRoaXMudml6cy5yaWdodEhlYWRzLnVwZGF0ZShyaWdodEF0dEluZm8pXG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlXG4gICAgICAgIGhlYWRzLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oZWFkU2V0KCkuaGFzKGgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMF1dXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMV1dXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJub3c6IFwiLCB0aGlzLnVpQ29uZi5vZmZzZXQpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0LnVwZGF0ZShsZWZ0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC5tYXNrKGxlZnQubWFza0luZHMpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0LnVwZGF0ZShyaWdodC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0Lm1hc2socmlnaHQubWFza0luZHMpO1xuICAgICAgICAvLyBkaXNwbGF5U2VsZWN0ZWRUb2tlblxuICAgIH1cblxuICAgIHJlbmRlclN2ZygpIHtcbiAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5vcHRpb25zLm9mZnNldCA9IHRoaXMudWlDb25mLm9mZnNldFxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==