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
const bpeTokens = ["[CLS]", "[SEP]", "<s>", "</s>"];
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
/*! exports provided: Toggled, ModelKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggled", function() { return Toggled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelKind", function() { return ModelKind; });
var Toggled;
(function (Toggled) {
    Toggled[Toggled["ADDED"] = 0] = "ADDED";
    Toggled[Toggled["REMOVED"] = 1] = "REMOVED";
})(Toggled || (Toggled = {}));
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
        const strNull = ((conf.tokenInd == "null") || (conf.tokenSide == "") || (conf.tokenSide == "null"));
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
                return 1;
            }
            default: {
                return 0;
            }
        }
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




const scaleLinearWidth = opacity => 5 * opacity ^ 0.33;
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
            offset: 0,
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
        if (this.paths != null) {
            // paths.transition().duration(500).attr('opacity', (d) => {
            this.paths.attr('opacity', (d) => {
                const val = this.opacityScales[d.i](d.v);
                return val;
            });
            this.paths.attr('stroke-width', (d) => {
                const val = this.opacityScales[d.i](d.v);
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
            offset: 0
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
        this._data = data;
        this.data = this._data;
        return this._data;
    }
    _render(data) {
        // Reset token display
        this.base.selectAll("*").remove();
        const op = this.options;
        const self = this;
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
            return d.text.replace("\u0120", " ");
        })
            .on('mouseover', function (d, i) {
            const sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 'lightblue');
            self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i));
        })
            .on('mouseout', function (d, i) {
            let sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 0);
            self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i));
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
        this.side = 'left';
        this.offset = 1;
    }
}
class RightTextToken extends TextTokens {
    constructor(d3Parent, eventHandler, options = {}) {
        super(d3Parent, eventHandler);
        this.css_name = 'right-token';
        this.side = 'right';
        this.offset = 0;
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
                this.vizs.attentionSvg.normByGroup = this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive ? true : false;
                if (this.uiConf.maskInds().length > 0) {
                    this.tokCapsule.a.maskInds = this.uiConf.maskInds();
                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(resp => {
                        const r = resp.payload;
                        console.log("R: ", r);
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
                if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(this.uiConf.token().ind);
                    }
                    // if (this.uiConf.maskInds().length > 0) {
                    //     this.uiConf.maskInds([this.uiConf.maskInds()[0]])
                    //     this.grayToggle(this.uiConf.maskInds[0])
                    // }
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
                        self.tokCapsule.updateEmbeddings(r);
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
            this.uiConf.toggleToken(e);
            this._toggleTokenSel();
            showBySide(e);
            if (this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive) {
                self.grayToggle(+e.ind);
            }
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
    _initModelSelection() {
        const self = this;
        // Below are the available models. Will need to choose 3 to be available ONLY
        const data = [
            { name: "bert-base-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            // { name: "bert-base-uncased", kind: tp.ModelKind.Bidirectional },
            // { name: "distilbert-base-uncased", kind: tp.ModelKind.Bidirectional },
            // { name: "distilroberta-base", kind: tp.ModelKind.Bidirectional },
            { name: "roberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "gpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
            // { name: "gpt2-medium", kind: tp.ModelKind.Autoregressive },
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
        const wrappedVals = new _data_FaissSearchWrapper__WEBPACK_IMPORTED_MODULE_16__["FaissSearchResultWrapper"](newVals);
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
            if (d == self.uiConf.layer() - 1) { // Javascript is 0 indexed!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL215TWFpbi50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vbm9kZS1mZXRjaCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpP2E4YjciLCJ3ZWJwYWNrOi8vL3N0cmluZ19kZWNvZGVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQjs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBTyxNQUFNLE9BQU8sR0FBRztJQUN0QiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFF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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6Q0g7QUFBQTtBQUFBLDRIQUE0SDtBQUNySCxNQUFNLFNBQVMsR0FBRztJQUNyQixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUN0RixTQUFTLEVBQUUsU0FB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LFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRztRQUVsRixDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7WUFDNUMsYUFBYTtZQUNiLE1BQU0sR0FBRyxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxTQUFTO1lBQzNELE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO1lBQzNDLE1BQU0sR0FBRyxHQUFHLHlDQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxTQUFTO1lBQzNELE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBUyxDQUFDLEVBQUUsQ0FBQztZQUMxQixNQUFNLEtBQUssR0FBRyx3Q0FB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Ozs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3RzL21haW4udHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImV4QkVSVC5odG1sXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImV4cG9ydCBjb25zdCBEZW1vQVBJID0ge1xuXHRcIjUyN2ZkYWM0NDA0YmY5YmE1NDEyNjQ2YWQ0NTc5NTBkNDQ4Mjc2MmNcIjogXCI1MjdmZGFjNDQwNGJmOWJhNTQxMjY0NmFkNDU3OTUwZDQ0ODI3NjJjLmpzb25cIixcblx0XCI1OWI0YWNjMDVmMWQ4MGVjYmVmMWMyM2VhZjJmZGExMDIyMmNiMjU3XCI6IFwiNTliNGFjYzA1ZjFkODBlY2JlZjFjMjNlYWYyZmRhMTAyMjJjYjI1Ny5qc29uXCIsXG5cdFwiMzU0OTkyZjJlZTIzNjYwNGM4NzRhM2E2MjdlNDA0MmJjNjg1ODZmOFwiOiBcIjM1NDk5MmYyZWUyMzY2MDRjODc0YTNhNjI3ZTQwNDJiYzY4NTg2ZjguanNvblwiLFxuXHRcIjUwMTVlNWEzMTg2MDVjZWE2ODA4NTM4ZGIxNGQ4YWYxNjg4N2IwNzZcIjogXCI1MDE1ZTVhMzE4NjA1Y2VhNjgwODUzOGRiMTRkOGFmMTY4ODdiMDc2Lmpzb25cIixcblx0XCIzYzlhYTE1MmFjODk0MzA2MDQwNzAzYzUwOTU1OTliMTk5Y2FkMWE5XCI6IFwiM2M5YWExNTJhYzg5NDMwNjA0MDcwM2M1MDk1NTk5YjE5OWNhZDFhOS5qc29uXCIsXG5cdFwiMGZlY2UwYzg3MjAzZTgzYWZkMTY3NGI1YWVlYmFlZDBmNWZhMDU2MlwiOiBcIjBmZWNlMGM4NzIwM2U4M2FmZDE2NzRiNWFlZWJhZWQwZjVmYTA1NjIuanNvblwiLFxuXHRcImQzYTBlNDA0NWVhNDhhMjc1Y2U1MWE2YWYwMjgwNDA2MDYwZjQ3Y2ZcIjogXCJkM2EwZTQwNDVlYTQ4YTI3NWNlNTFhNmFmMDI4MDQwNjA2MGY0N2NmLmpzb25cIixcblx0XCJlZDk4ZDc1MWFiOWI2YTRhMGU4NWU5MzMyYjQyMGE0YzEzYWI3NWE3XCI6IFwiZWQ5OGQ3NTFhYjliNmE0YTBlODVlOTMzMmI0MjBhNGMxM2FiNzVhNy5qc29uXCIsXG5cdFwiMGQyNGFlMDhlZWIyMWFmODJjNjY2Y2JlMmFjMDY0NmVkOWM5ZDlhNlwiOiBcIjBkMjRhZTA4ZWViMjFhZjgyYzY2NmNiZTJhYzA2NDZlZDljOWQ5YTYuanNvblwiLFxuXHRcIjZkZTA1M2IzYjhhNGQ5MDQ3ODBjOWE2NTQ1YTBhNjNjYmJiMmIxNDRcIjogXCI2ZGUwNTNiM2I4YTRkOTA0NzgwYzlhNjU0NWEwYTYzY2JiYjJiMTQ0Lmpzb25cIixcblx0XCJmNjhkZjIzMzY1ZmFmMDJmOWMwMTQzOTM0NWJlZDY2OTM2ZWQ4NWY3XCI6IFwiZjY4ZGYyMzM2NWZhZjAyZjljMDE0MzkzNDViZWQ2NjkzNmVkODVmNy5qc29uXCIsXG5cdFwiNDYwOGNiNGZjMDBiNDNmZmY2ODA5OGU4NTY3NmZhZDU3Yzk0MGYwMlwiOiBcIjQ2MDhjYjRmYzAwYjQzZmZmNjgwOThlODU2NzZmYWQ1N2M5NDBmMDIuanNvblwiLFxuXHRcImRmY2Q1MDE0NmRhOGQ4MTIyYTVhNTdjMmEzYzBhYmNlNTAzYmE5NGJcIjogXCJkZmNkNTAxNDZkYThkODEyMmE1YTU3YzJhM2MwYWJjZTUwM2JhOTRiLmpzb25cIixcblx0XCIzNGM4NjI5ZDQyNjVkN2YzZWRlM2FkZDQyZjM2MTNiMjA1ZDk0YzFjXCI6IFwiMzRjODYyOWQ0MjY1ZDdmM2VkZTNhZGQ0MmYzNjEzYjIwNWQ5NGMxYy5qc29uXCIsXG5cdFwiZGIyZGMyNTJhNzg2NjUwZjY0Mzk1YTBmNWQxODFjMDgzMTAxOWNiZlwiOiBcImRiMmRjMjUyYTc4NjY1MGY2NDM5NWEwZjVkMTgxYzA4MzEwMTljYmYuanNvblwiLFxuXHRcImRhNDU5N2Q3M2Q0NDQ3NTdiZGU5MTc2Mzk1YmYzMWFhZDMzMzQxMzFcIjogXCJkYTQ1OTdkNzNkNDQ0NzU3YmRlOTE3NjM5NWJmMzFhYWQzMzM0MTMxLmpzb25cIixcblx0XCJhMmViZjEzZDNjOTM3MWZjZjczOGI5NjUxODI0ZTJjM2NkMWZmOGUwXCI6IFwiYTJlYmYxM2QzYzkzNzFmY2Y3MzhiOTY1MTgyNGUyYzNjZDFmZjhlMC5qc29uXCIsXG5cdFwiYmM0MTkyMzhjMjBkZDFjNWNmZTFjYzQyN2FiM2QxZTMxMzUzNDM2YVwiOiBcImJjNDE5MjM4YzIwZGQxYzVjZmUxY2M0MjdhYjNkMWUzMTM1MzQzNmEuanNvblwiLFxuXHRcIjg0ZThiZTlmZTU2MmZiZDA0ODdjMDNiNTVjYzZiNGYzZmI4Y2Q3ODdcIjogXCI4NGU4YmU5ZmU1NjJmYmQwNDg3YzAzYjU1Y2M2YjRmM2ZiOGNkNzg3Lmpzb25cIixcblx0XCIyMDdlNmM5OGEwZTE0OWRjN2U2ZWQ2NzExODI5NmQ4YThjODliM2MzXCI6IFwiMjA3ZTZjOThhMGUxNDlkYzdlNmVkNjcxMTgyOTZkOGE4Yzg5YjNjMy5qc29uXCIsXG5cdFwiYzE4NWE5MzQ5YmE1YTMyNWFjZjg1MTRlOWI1MGRlNzEyODA0ODhhYVwiOiBcImMxODVhOTM0OWJhNWEzMjVhY2Y4NTE0ZTliNTBkZTcxMjgwNDg4YWEuanNvblwiLFxuXHRcImRkZTQ4MWE1Y2QzNjY3YWU4YzZjNWI1ZTE0MjFkYzg4MmI2YTJkZDZcIjogXCJkZGU0ODFhNWNkMzY2N2FlOGM2YzViNWUxNDIxZGM4ODJiNmEyZGQ2Lmpzb25cIixcblx0XCJmNjNlMTRlOTM1ZDk4OTQ4YjRhMGViYzk2NjM0MDBkYmU0MjYzMzQ4XCI6IFwiZjYzZTE0ZTkzNWQ5ODk0OGI0YTBlYmM5NjYzNDAwZGJlNDI2MzM0OC5qc29uXCIsXG5cdFwiNzliOTY0ZDFhNWM4NTRkZWFlYWNlMjY4MTNmOTY5OTRiYjgyYWVmMlwiOiBcIjc5Yjk2NGQxYTVjODU0ZGVhZWFjZTI2ODEzZjk2OTk0YmI4MmFlZjIuanNvblwiLFxuXHRcIjNiMTE2OGVjOTZhZjAwYzRlODg3MzQxZTkyYTg3OGY4NzUyZTFkMTdcIjogXCIzYjExNjhlYzk2YWYwMGM0ZTg4NzM0MWU5MmE4NzhmODc1MmUxZDE3Lmpzb25cIixcblx0XCI4YzQ2MmJjMjk4ZTMxODNlZmE4ZDllODYzZTI1ZWE1ZDg5ODA2YjAzXCI6IFwiOGM0NjJiYzI5OGUzMTgzZWZhOGQ5ZTg2M2UyNWVhNWQ4OTgwNmIwMy5qc29uXCIsXG5cdFwiOTkzOTY5OGVkYWEyNWJiYWU5ZWUxZDI3ODY0ZTY5OGYxMzk2M2YwNlwiOiBcIjk5Mzk2OThlZGFhMjViYmFlOWVlMWQyNzg2NGU2OThmMTM5NjNmMDYuanNvblwiLFxuXHRcIjczZjFlZTQ5N2IzZTdiNjM5NGU1NTcyNmIxOGRiZjlkNTE0ZGNlYTZcIjogXCI3M2YxZWU0OTdiM2U3YjYzOTRlNTU3MjZiMThkYmY5ZDUxNGRjZWE2Lmpzb25cIixcblx0XCJjN2NkYjgwYmY4MTNlMWRlMjQxMjYwYWVkZTZjZDI4ZWE2NWNjZmFlXCI6IFwiYzdjZGI4MGJmODEzZTFkZTI0MTI2MGFlZGU2Y2QyOGVhNjVjY2ZhZS5qc29uXCIsXG5cdFwiYTk2ZmVkMTZlYWIxYmY2ZDA4ZTQwMDFjMDI4OTRkOWM1NDlkZjYyN1wiOiBcImE5NmZlZDE2ZWFiMWJmNmQwOGU0MDAxYzAyODk0ZDljNTQ5ZGY2MjcuanNvblwiLFxuXHRcImE4ZWFmMTBkYThkYzc1YjQyZTcyYmRjNzA5MTc3NjI0N2ZmZjk2NTdcIjogXCJhOGVhZjEwZGE4ZGM3NWI0MmU3MmJkYzcwOTE3NzYyNDdmZmY5NjU3Lmpzb25cIixcblx0XCJhODE5NGYyMzA5ZTFjNzFlOTc3ZWY4ZDNiZTU3MmFlMDBiMGU5MWYyXCI6IFwiYTgxOTRmMjMwOWUxYzcxZTk3N2VmOGQzYmU1NzJhZTAwYjBlOTFmMi5qc29uXCIsXG5cdFwiMmY0YTE1YjY2ZmNmYjBjN2E0M2EzM2Q5Mzc2Mzk5MDI4MmJmYzVhYVwiOiBcIjJmNGExNWI2NmZjZmIwYzdhNDNhMzNkOTM3NjM5OTAyODJiZmM1YWEuanNvblwiLFxuXHRcIjA2MDk1Y2VmNGE3ZjQ5YjE4ZjE1M2U2N2UzM2ZkZGI4MzFhMTViNDZcIjogXCIwNjA5NWNlZjRhN2Y0OWIxOGYxNTNlNjdlMzNmZGRiODMxYTE1YjQ2Lmpzb25cIixcblx0XCI0YzkzZWFmMGMwY2U1NmYxZTVkNTEwMDkxNmFiZjRkMzFlYjM1ZGE1XCI6IFwiNGM5M2VhZjBjMGNlNTZmMWU1ZDUxMDA5MTZhYmY0ZDMxZWIzNWRhNS5qc29uXCIsXG5cdFwiZjhjNDBjNjdjODUxYTA0ODlmNzQ4MGM5OWIzMWI0ZjYwNmMwMTg0YlwiOiBcImY4YzQwYzY3Yzg1MWEwNDg5Zjc0ODBjOTliMzFiNGY2MDZjMDE4NGIuanNvblwiLFxuXHRcImU0ZTcxZjZlYTU3YmUyZTA1ZDYyYWYwODI1YTgwZjE0NDQyMWUwMmRcIjogXCJlNGU3MWY2ZWE1N2JlMmUwNWQ2MmFmMDgyNWE4MGYxNDQ0MjFlMDJkLmpzb25cIixcblx0XCJlN2Q5ZDUyMDg4Mjc4MmM3Y2ZiZmZlYWRhYWYyMmI0YzBhMDgxYzdjXCI6IFwiZTdkOWQ1MjA4ODI3ODJjN2NmYmZmZWFkYWFmMjJiNGMwYTA4MWM3Yy5qc29uXCIsXG5cdFwiNGFhNGViMTBlYWQ0NGEwYTNjMmRkOTU0MDcwMTdhOTI4MTM4YjMyYlwiOiBcIjRhYTRlYjEwZWFkNDRhMGEzYzJkZDk1NDA3MDE3YTkyODEzOGIzMmIuanNvblwiLFxuXHRcImRhMzFkNTVlZThjYjAxYmNkYjI5NTcyY2I5MDJiOGU3OTk2ODViZTJcIjogXCJkYTMxZDU1ZWU4Y2IwMWJjZGIyOTU3MmNiOTAyYjhlNzk5Njg1YmUyLmpzb25cIixcblx0XCJlNDI3MTgxZmIwMmJiZjE5ZjdiYmI2NWM5ZDkzODlkMmQ5YTQxODEyXCI6IFwiZTQyNzE4MWZiMDJiYmYxOWY3YmJiNjVjOWQ5Mzg5ZDJkOWE0MTgxMi5qc29uXCIsXG5cdFwiYmJjYWI5ZTFjYTYwYTg1MWZkN2VjZmRhODBkZTQ3MGFmYTc0MDkzNlwiOiBcImJiY2FiOWUxY2E2MGE4NTFmZDdlY2ZkYTgwZGU0NzBhZmE3NDA5MzYuanNvblwiLFxuXHRcIjRkZTk2YWEyMDUwNzY4NjNjOWZiNGVhOTllMmJhODZmYTEzMWZmNzZcIjogXCI0ZGU5NmFhMjA1MDc2ODYzYzlmYjRlYTk5ZTJiYTg2ZmExMzFmZjc2Lmpzb25cIixcblx0XCJlNGM2ZDFiMzAwNGUzY2RkMGM4NzlhNTk2MzliNWNlOTkzMjA3YTk5XCI6IFwiZTRjNmQxYjMwMDRlM2NkZDBjODc5YTU5NjM5YjVjZTk5MzIwN2E5OS5qc29uXCIsXG5cdFwiZmJjOWRhNzliOGJmMzlkYzk5OTg0MDg1MjY3NDFmODExYTEzZTZhYVwiOiBcImZiYzlkYTc5YjhiZjM5ZGM5OTk4NDA4NTI2NzQxZjgxMWExM2U2YWEuanNvblwiLFxuXHRcIjUyODU1NGVlNGU2MTVjNjEyODdjNDBlZDlhMmFlYTY5YjkxYWY2YzlcIjogXCI1Mjg1NTRlZTRlNjE1YzYxMjg3YzQwZWQ5YTJhZWE2OWI5MWFmNmM5Lmpzb25cIixcblx0XCI1ZTcwNzNjMDNjMzdkMTk4MjZiMmZiNGE2NTk5Y2NhZWRkZTQ5MmU0XCI6IFwiNWU3MDczYzAzYzM3ZDE5ODI2YjJmYjRhNjU5OWNjYWVkZGU0OTJlNC5qc29uXCIsXG5cdFwiNzFjNGE4ODZjZGVlNThhMzcxYWUyMTE1MzExYjE1MGU4NGU1NTVmNlwiOiBcIjcxYzRhODg2Y2RlZTU4YTM3MWFlMjExNTMxMWIxNTBlODRlNTU1ZjYuanNvblwiLFxuXHRcIjRiY2UwOTcwYTQ2NWZlOWI5NjMwNWUwNmFmMTljNWQ5Yzk3ZDdjYzNcIjogXCI0YmNlMDk3MGE0NjVmZTliOTYzMDVlMDZhZjE5YzVkOWM5N2Q3Y2MzLmpzb25cIixcblx0XCJlZmRiMWYwYTcwZjIyZjgwZmYzY2VhMGNiNzliZWM3MTdmYzhiNmY3XCI6IFwiZWZkYjFmMGE3MGYyMmY4MGZmM2NlYTBjYjc5YmVjNzE3ZmM4YjZmNy5qc29uXCIsXG5cdFwiMTc0YzZmNzg2ZDEzOWNlMTExMzgxMDQ1ZDYwZDI1NjgyYTE2OGI5OVwiOiBcIjE3NGM2Zjc4NmQxMzljZTExMTM4MTA0NWQ2MGQyNTY4MmExNjhiOTkuanNvblwiLFxuXHRcImE4YzIzZTg4ZDZjYTZkNGVmZDI2NDZiMDc0MmMwZmEzMmRiZDU1YTRcIjogXCJhOGMyM2U4OGQ2Y2E2ZDRlZmQyNjQ2YjA3NDJjMGZhMzJkYmQ1NWE0Lmpzb25cIixcblx0XCJmNjk0OWMyODc1MmRlMzVhODcwZWZkZTMwODU4NWFjZDQ2YTI1Mjc4XCI6IFwiZjY5NDljMjg3NTJkZTM1YTg3MGVmZGUzMDg1ODVhY2Q0NmEyNTI3OC5qc29uXCIsXG5cdFwiYzFiZGI4Y2JhZmQ1ZDVkOGY2YmRhMmI0ZGIxNmI2YmMyZDYyZTE4YVwiOiBcImMxYmRiOGNiYWZkNWQ1ZDhmNmJkYTJiNGRiMTZiNmJjMmQ2MmUxOGEuanNvblwiLFxuXHRcIjJiODFhOGY2MDIyNTFjZjQwYjQ2ODJjOGNlZGIzOTY2YjkxMmQ3YzZcIjogXCIyYjgxYThmNjAyMjUxY2Y0MGI0NjgyYzhjZWRiMzk2NmI5MTJkN2M2Lmpzb25cIixcblx0XCI4Zjk0ZTg0M2QyNTEwMDQ3ZmQxYWY0NmYyNDlhZmU4N2ZmNDljYzJmXCI6IFwiOGY5NGU4NDNkMjUxMDA0N2ZkMWFmNDZmMjQ5YWZlODdmZjQ5Y2MyZi5qc29uXCIsXG5cdFwiNGUzZGRiNTE1NTBjMDNjNjRmZGJlNTU5MjUyNjY2NTEwMGQzMjkzMFwiOiBcIjRlM2RkYjUxNTUwYzAzYzY0ZmRiZTU1OTI1MjY2NjUxMDBkMzI5MzAuanNvblwiLFxuXHRcImY4MTZiMjNhZjlhYTQzMTJjODBlNjY4YTY2YTE1NmM5MzRjYjMzMGNcIjogXCJmODE2YjIzYWY5YWE0MzEyYzgwZTY2OGE2NmExNTZjOTM0Y2IzMzBjLmpzb25cIixcblx0XCIyZmUwNWE5MTFhNTc0YjhhNmQ0YjA1ZWIxM2RiOWUwOWFhYWNhZDJkXCI6IFwiMmZlMDVhOTExYTU3NGI4YTZkNGIwNWViMTNkYjllMDlhYWFjYWQyZC5qc29uXCIsXG5cdFwiNWM3MTQ5NjcyNjM5NWFhYTRkMGE2NTM3M2ZkMTY1MWI1YTBlNmIxZlwiOiBcIjVjNzE0OTY3MjYzOTVhYWE0ZDBhNjUzNzNmZDE2NTFiNWEwZTZiMWYuanNvblwiLFxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBUb2tlbkRpc3BsYXkgfSBmcm9tICcuLi9kYXRhL1Rva2VuV3JhcHBlcidcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIHJzcCBmcm9tICcuL3Jlc3BvbnNlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBEZW1vQVBJIH0gZnJvbSAnLi9kZW1vQVBJJ1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdvYmplY3QtaGFzaCdcbmltcG9ydCB7IG1ha2VVcmwsIHRvUGF5bG9hZCB9IGZyb20gJy4uL2V0Yy9hcGlIZWxwZXJzJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gJy4uL2V0Yy9VUkxIYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGVtcHR5VG9rZW5EaXNwbGF5ID0gbmV3IFRva2VuRGlzcGxheSgpXG5cbmNvbnN0IGJhc2V1cmwgPSBVUkxIYW5kbGVyLmJhc2ljVVJMKClcblxuLyoqXG4gKiBBIHJld3JpdGUgb2YgYGQzLWZldGNoYCdzIGBkMy5qc29uYCBjYWxsYmFjay4gSWYgYW4gYXBpIGNhbGwgZmFpbHMsIG1ha2UgYSBiYWNrdXAgY2FsbCB0byBzcGVjaWZpZWQgdXJsIGFuZCBwYXlsb2FkLCBpZiBzcGVjaWZpZWQuXG4gKiBcbiAqIEBwYXJhbSByZXNwb25zZSBPYmplY3QgZXhwZWN0ZWQgYXQgdGltZSBvZiBjYWxsYmFja1xuICogQHBhcmFtIGJhY2t1cFVybCBCYWNrdXAgdXJsIGluIHRoZSBldmVudCBvZiBmYWlsXG4gKiBAcGFyYW0gYmFja3VwUGF5bG9hZCBCYWNrdXAgcGF5bG9hZCBpZiBtYWtpbmcgYSBwb3N0IHJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gcmVzcG9uc2VKc29uKHJlc3BvbnNlLCBiYWNrdXBVcmwgPSBudWxsLCBiYWNrdXBQYXlsb2FkID0gbnVsbCkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgaWYgKGJhY2t1cFVybCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNUQVRJQyBGSUxFIE5PVCBGT1VORFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpLnRoZW4ocmVzcG9uc2VKc29uKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG59XG5cbi8qKlxuICogQ2hlY2sgZmlyc3QgaWYgdGhlIGluZm9ybWF0aW9uIGJlaW5nIHNlbnQgZXhpc3RzIGluIGEgc3RhdGljIGRlbW8gZmlsZS4gSWYgaXQgZG9lcywgc2VuZCB0aGF0LiBPdGhlcndpc2UsIG1ha2UgYSBub3JtYWwgY2FsbCB0byB0aGUgc2VydmVyLlxuICogXG4gKiBAcGFyYW0gdG9TZW5kIFRoZSBwYWNrZXQgb2YgaW5mb3JtYXRpb24gdG8gc2VuZCB0byBhbiBBUEkgZW5kcG9pbnRcbiAqIEBwYXJhbSBiYWNrdXBVcmwgQmFja3VwIHVybCBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZGVtbyBmaWxlIGlzIG5vdCBmb3VuZFxuICogQHBhcmFtIGJhY2t1cFBheWxvYWQgQmFja3VwIHBheWxvYWQgaWYgZGVtbyBmaWxlIG5vdCBmb3VuZCwgZm9yIFBPU1QgcmVxdWVzdHMgb25seVxuICovXG5mdW5jdGlvbiBjaGVja0RlbW9BUEkodG9TZW5kLCBiYWNrdXBVcmwgPSBudWxsLCBiYWNrdXBQYXlsb2FkID0gbnVsbCkge1xuICAgIGNvbnN0IGhzaCA9IGhhc2guc2hhMSh0b1NlbmQpO1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tJTkcgREVNT0FQSTogXCIgKyBoc2gpO1xuICAgIGlmIChEZW1vQVBJLmhhc093blByb3BlcnR5KGhzaCkpIHtcbiAgICAgICAgLy8gUmVsaWVzIG9uIGEgc3ltYm9saWMgbGluayBiZWluZyBwcmVzZW50IGluIHRoZSBkaXN0IGZvbGRlciB0byB0aGUgZGVtbyBmb2xkZXJcbiAgICAgICAgY29uc3QgcGF0aCA9ICcuL2RlbW8vJyArIERlbW9BUElbaHNoXVxuICAgICAgICBjb25zb2xlLmxvZyhcIlRSWUlORyBUTyBTRU5ESU5HIFNUQVRJQzogXCIsIHBhdGgpO1xuICAgICAgICBjb25zdCBmb2xsb3cgPSAocmVzcG9uc2UpID0+IHJlc3BvbnNlSnNvbihyZXNwb25zZSwgYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKVxuICAgICAgICByZXR1cm4gZmV0Y2gocGF0aCkudGhlbihmb2xsb3cpXG4gICAgfVxuICAgIHJldHVybiBkMy5qc29uKGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZClcbn1cblxuXG5leHBvcnQgY2xhc3MgQVBJIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZVVSTDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlVVJMID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVSTCA9IGJhc2V1cmwgKyAnL2FwaSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlbERldGFpbHMobW9kZWw6IHN0cmluZywgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLk1vZGVsRGV0YWlsUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArIFwiL2dldC1tb2RlbC1kZXRhaWxzXCIsIHRvU2VuZClcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cblxuICAgIGdldE1ldGFBdHRlbnRpb25zKG1vZGVsOiBzdHJpbmcsIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHNlbnRlbmNlLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyBcIi9hdHRlbmQrbWV0YVwiLCB0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmpcbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRpc3BsYXkgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIHRoYXQgd2FzIGFscmVhZHkgcGFyc2VkIGZyb20gdGhlIHBhc3NlZCBzZW50ZW5jZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYSBUaGUgZGlzcGxheWVkIHRva2VucyBpbiB0aGUgY29sdW1ucyBcbiAgICAgKiBAcGFyYW0gc2VudGVuY2VBIFRoZSBvcmlnaW5hbCBzZW50ZW5jZSB0aGF0IGxlZCB0byB0aGUgdG9rZW5pemVkIGluZm9ybWF0aW9uIGluIGBhYFxuICAgICAqIEBwYXJhbSBsYXllciBXaGljaCBsYXllciB0byBzZWFyY2ggYXRcbiAgICAgKiBAcGFyYW0gaGFzaE9iaiBJZiBub3QgbnVsbCwgc3RvcmUgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSByZXNwb25zZXMgaW50byB0aGUgcGFzc2VkIG9iamVjdC4gVXNlZCBmb3IgY3JlYXRpbmcgZGVtb3MuXG4gICAgICovXG4gICAgdXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbDogc3RyaW5nLCB0b2tlbnM6IFRva2VuRGlzcGxheSwgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICB0b2tlbnM6IFIubWFwKFIucHJvcCgndGV4dCcpLCB0b2tlbnMudG9rZW5EYXRhKSxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBzZW50ZW5jZSxcblxuICAgICAgICAgICAgLy8gRW1wdHkgbWFza3MgbmVlZCB0byBiZSBzZW50IGFzIGEgbnVtYmVyLCB1bmZvcnR1bmF0ZWx5LiBDaG9vc2luZyAtMSBmb3IgdGhpc1xuICAgICAgICAgICAgbWFzazogdG9rZW5zLm1hc2tJbmRzLmxlbmd0aCA/IHRva2Vucy5tYXNrSW5kcyA6IFstMV0sXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvdXBkYXRlLW1hc2snKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRvUGF5bG9hZCh0b1NlbmQpXG5cblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGFzaCBhbmQgdmFsdWUgdG8gaGFzaE9iaiBmb3IgZGVtbyBwdXJwb3Nlc1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsLCBwYXlsb2FkKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gUE9TVCBcIiArIHVybCwgcGF5bG9hZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZW1iZWRkaW5nIEVtYmVkZGluZyBvZiB0aGUgd29yZFxuICAgICAqIEBwYXJhbSBsYXllciBJbiB0aGUgbCd0aCBsYXllclxuICAgICAqIEBwYXJhbSBrIGhvdyBtYW55IHJlc3VsdHMgdG8gcmV0cmlldmVcbiAgICAgKi9cbiAgICBnZXROZWFyZXN0RW1iZWRkaW5ncyhtb2RlbDogc3RyaW5nLCBjb3JwdXM6IHN0cmluZywgZW1iZWRkaW5nOiBudW1iZXJbXSwgbGF5ZXI6IG51bWJlciwgaGVhZHM6IG51bWJlcltdLCBrID0gMTAsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5OZWFyZXN0TmVpZ2hib3JSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBjb3JwdXM6IGNvcnB1cyxcbiAgICAgICAgICAgIGVtYmVkZGluZzogZW1iZWRkaW5nLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgaGVhZHM6IGhlYWRzLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy9rLW5lYXJlc3QtZW1iZWRkaW5ncycsIHRvU2VuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICBnZXROZWFyZXN0Q29udGV4dHMobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGNvbnRleHQ6IG51bWJlcltdLCBsYXllcjogbnVtYmVyLCBoZWFkczogbnVtYmVyW10sIGsgPSAxMCwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIGNvcnB1czogY29ycHVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWNvbnRleHRzJywgdG9TZW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cbn07XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vKipcbiAqIE5vdGVzOlxuICogXG4gKiAtIEFsc28gZW5jYXBzdWxhdGUgdGhlIENMUy9TRVAgaW5mbyB2cy4gbm8gQ0xTL1NFUCBpbmZvXG4gKiAtIFdoZW4gbGF5ZXIgZm9ybWF0IGNoYW5nZXMgZnJvbSBsaXN0LCBkcm9wIHRoZSBpbmRleCBpbnRvIGNvbmYubGF5ZXJcbiAqL1xuXG5jb25zdCBicGVUb2tlbnMgPSBbXCJbQ0xTXVwiLCBcIltTRVBdXCIsIFwiPHM+XCIsIFwiPC9zPlwiXVxuY29uc3QgZmluZEJhZEluZGV4ZXMgPSAoeDogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSA9PiB4Xy5maW5kQWxsSW5kZXhlcyh4Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnJvbU1ldGFSZXNwb25zZShyOnRwLkF0dGVudGlvblJlc3BvbnNlLCBpc1plcm9lZCl7XG4gICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgIGNvbnN0IGN1cnJQYWlyID0gcltrZXldXG4gICAgY29uc3QgbGVmdCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIubGVmdFxuICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuICAgIGNvbnN0IGxlZnRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMobGVmdC5tYXAodCA9PiB0LnRleHQpLCAoYSkgPT4gXy5pbmNsdWRlcyhicGVUb2tlbnMsIGEpKVxuICAgIGNvbnN0IHJpZ2h0WmVybyA9IHhfLmZpbmRBbGxJbmRleGVzKHJpZ2h0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgcmV0dXJuIG5ldyBBdHRlbnRpb25XcmFwcGVyKGN1cnJQYWlyLmF0dCwgW2xlZnRaZXJvLCByaWdodFplcm9dLCBpc1plcm9lZClcbn1cblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbldyYXBwZXIge1xuICAgIHByb3RlY3RlZCBfYXR0Om51bWJlcltdW11bXVxuICAgIHByb3RlY3RlZCBfYXR0VGVuc29yOnRmLlRlbnNvcjNEXG4gICAgcHJvdGVjdGVkIF96ZXJvZWRBdHRUZW5zb3I6dGYuVGVuc29yM0RcblxuICAgIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV0gLy8gSW5kZXhlcyBmb3IgdGhlIENMUyBhbmQgU0VQIHRva2Vuc1xuICAgIGlzWmVyb2VkOiBib29sZWFuXG4gICAgbkxheWVycyA9IDEyO1xuICAgIG5IZWFkcyA9IDEyO1xuXG4gICAgY29uc3RydWN0b3IoYXR0Om51bWJlcltdW11bXSwgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXT1bW10sW11dLCBpc1plcm9lZD10cnVlKXtcbiAgICAgICAgdGhpcy5pbml0KGF0dCwgYmFkVG9rcywgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgaW5pdChhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkKSB7XG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSBpc1plcm9lZFxuICAgICAgICB0aGlzLl9hdHQgPSBhdHQ7XG4gICAgICAgIHRoaXMuX3plcm9lZEF0dFRlbnNvciA9IHplcm9Sb3dDb2wodGYudGVuc29yM2QoYXR0KSwgYmFkVG9rc1swXSwgYmFkVG9rc1sxXSlcbiAgICAgICAgdGhpcy5fYXR0VGVuc29yID0gdGYudGVuc29yM2QoYXR0KSAvLyBJZiBJIHB1dCB0aGlzIGZpcnN0LCBidWZmZXIgbW9kaWZpY2F0aW9ucyBjaGFuZ2UgdGhpcyB0b28uXG4gICAgICAgIHRoaXMuYmFkVG9rcyA9IGJhZFRva3M7XG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbU5vcm1hbChyOnRwLkF0dGVudGlvblJlc3BvbnNlLCBpc1plcm9lZCl7XG4gICAgICAgIGNvbnN0IGtleSA9ICdhYScgLy8gQ2hhbmdlIHRoaXMgaWYgYmFja2VuZCByZXNwb25zZSBjaGFuZ2VzIHRvIGJlIHNpbXBsZXJcbiAgICAgICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICAgICAgY29uc3QgbGVmdCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIubGVmdFxuICAgICAgICBjb25zdCByaWdodCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIucmlnaHRcblxuICAgICAgICBjb25zdCBsZWZ0WmVybyA9IGZpbmRCYWRJbmRleGVzKGxlZnQpXG4gICAgICAgIGNvbnN0IHJpZ2h0WmVybyA9IGZpbmRCYWRJbmRleGVzKHJpZ2h0KVxuICAgICAgICB0aGlzLmluaXQoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxuICAgIH1cblxuICAgIGdldCBhdHRUZW5zb3IoKSB7XG4gICAgICAgIGNvbnN0IHRlbnMgPSB0aGlzLmlzWmVyb2VkID8gdGhpcy5femVyb2VkQXR0VGVuc29yIDogdGhpcy5fYXR0VGVuc29yXG4gICAgICAgIHJldHVybiB0ZW5zXG4gICAgfVxuXG4gICAgZ2V0IGF0dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0VGVuc29yLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgemVyb2VkKCk6IGJvb2xlYW5cbiAgICB6ZXJvZWQodmFsOmJvb2xlYW4pOiB0aGlzXG4gICAgemVyb2VkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5pc1plcm9lZFxuICAgICAgICB0aGlzLmlzWmVyb2VkID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlWmVyb2luZygpIHtcbiAgICAgICAgdGhpcy56ZXJvZWQoIXRoaXMuemVyb2VkKCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9ieUhlYWRzKGhlYWRzOm51bWJlcltdKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIGlmIChoZWFkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRmLnplcm9zTGlrZSh0aGlzLl9ieUhlYWQoMCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDx0Zi5UZW5zb3IyRD50aGlzLmF0dFRlbnNvci5nYXRoZXIoaGVhZHMsIDApLnN1bSgwKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZChoZWFkOm51bWJlcik6dGYuVGVuc29yMkQge1xuICAgICAgICByZXR1cm4gKDx0Zi5UZW5zb3IyRD50aGlzLmF0dFRlbnNvci5nYXRoZXIoW2hlYWRdLCAwKS5zcXVlZXplKFswXSkpXG4gICAgfVxuXG4gICAgYnlIZWFkcyhoZWFkczpudW1iZXJbXSk6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ieUhlYWRzKGhlYWRzKS5hcnJheVN5bmMoKVxuICAgIH1cblxuICAgIGJ5SGVhZChoZWFkOm51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ieUhlYWQoaGVhZCkuYXJyYXlTeW5jKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHplcm9Sb3dDb2wodGVuczp0Zi5UZW5zb3IzRCwgcm93czpudW1iZXJbXSwgY29sczpudW1iZXJbXSk6dGYuVGVuc29yM0Qge1xuICAgIGxldCBvdXRUZW5zID0gdGVucy5jbG9uZSgpXG4gICAgbGV0IGF0YiA9IG91dFRlbnMuYnVmZmVyU3luYygpXG4gICAgXy5yYW5nZShhdGIuc2hhcGVbMF0pLmZvckVhY2goKGhlYWQpID0+IHtcbiAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCByb3dzIHRvIDBcbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKHJvd3MsIGkpKSB7XG4gICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXRiLnNldCgwLCBoZWFkLCBpLCBqKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBjb2xzIHRvIDBcbiAgICAgICAgICAgIF8ucmFuZ2UoYXRiLnNoYXBlWzJdKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY29scywgaikpXG4gICAgICAgICAgICAgICAgICAgIF8ucmFuZ2UoYXRiLnNoYXBlWzFdKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0VGVuc1xufSIsImltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICdkMy1hcnJheSdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge1NwYWN5SW5mb30gZnJvbSAnLi4vZXRjL1NwYWN5SW5mbydcbmltcG9ydCB7aW5pdFplcm99IGZyb20gJy4uL2V0Yy94cmFtZGEnXG5cbi8vIElmIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgZG9uJ3QgdHJ5IHRvIG1ha2UgbG93ZXJjYXNlXG5jb25zdCBtYWtlU3RyaW5nTG93ZXIgPSBSLmlmRWxzZShSLmlzKFN0cmluZyksIFIudG9Mb3dlciwgUi5pZGVudGl0eSlcblxuZnVuY3Rpb24gYXJnTWF4KGFycmF5Om51bWJlcltdKSB7XG4gIHJldHVybiBbXS5tYXAuY2FsbChhcnJheSwgKHgsIGkpID0+IFt4LCBpXSkucmVkdWNlKChyLCBhKSA9PiAoYVswXSA+IHJbMF0gPyBhIDogcikpWzFdO1xufVxuXG5jb25zdCBnZXRNYXhUb2tlbiA9IChkOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHMpID0+IGQudG9rZW5zW2FyZ01heChkLm1hdGNoZWRfYXR0Lm91dC5hdHQpXVxuXG5cbmV4cG9ydCBjbGFzcyBGYWlzc1NlYXJjaFJlc3VsdFdyYXBwZXIge1xuICAgIGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHBvc2l0aW9uIGluZm8gaW50ZXJwcmV0YWJsZSBieSB0aGUgaGlzdG9ncmFtXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvdW50T2JqIFJlcHJlc2VudHMgdGhlIGluZm9ycm1hdGlvbiB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIGhpc3RvZ3JhbVxuICAgICAqL1xuICAgIGNvdW50UG9zSW5mbygpIHtcbiAgICAgICAgY29uc3QgYXR0T2Zmc2V0cyA9IHRoaXMuZGF0YS5tYXAoKGQsaSkgPT4gK2QubWF0Y2hlZF9hdHQub3V0Lm9mZnNldF90b19tYXgpXG5cbiAgICAgICAgY29uc3QgY3RPYmogPSB7XG4gICAgICAgICAgICBvZmZzZXQ6IGluaXRaZXJvKGF0dE9mZnNldHMpXG4gICAgICAgIH1cblxuICAgICAgICBhdHRPZmZzZXRzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdE9iaikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgICAgICAgIGN0T2JqW2tdW3ZdICs9IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGN0T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXhBdHRLZXlzKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgLy8gVGhlIGtleXMgaW4gdGhlIGJlbG93IG9iamVjdCBkaWN0YXRlIHdoYXQgd2UgY291bnRcbiAgICAgICAgY29uc3QgY291bnRPYmogPSB7XG4gICAgICAgICAgICBwb3M6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmRlcCksXG4gICAgICAgICAgICBpc19lbnQ6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heE1hdGNoID0gZ2V0TWF4VG9rZW4oZClcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXhNYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBuZXdDb3VudE9iaiA9IE9iamVjdC5hc3NpZ24oY291bnRPYmosIHRoaXMuY291bnRQb3NJbmZvKCkpXG4gICAgICAgIHJldHVybiBuZXdDb3VudE9ialxuICAgIH1cblxuICAgIGNvdW50TWF0Y2hlZEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBkLnRva2Vuc1tkLmluZGV4ICsgaW5kZXhPZmZzZXRdXG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvdW50T2JqKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1ha2VTdHJpbmdMb3dlcihTdHJpbmcobWF0Y2hba10pKVxuICAgICAgICAgICAgICAgIGNvdW50T2JqW2tdW3ZhbF0gKz0gMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvdW50T2JqXG4gICAgfVxuXG4gICAgZ2V0TWF0Y2hlZEhpc3RvZ3JhbShpbmRleE9mZnNldD0wKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsSGlzdCA9IHRoaXMuY291bnRNYXRjaGVkS2V5cyhpbmRleE9mZnNldClcbiAgICAgICAgY29uc3QgZmlsdGVyWmVyb3MgPSAodmFsLCBrZXkpID0+IHZhbCAhPSAwO1xuICAgICAgICBjb25zdCBub25aZXJvID0gUi5tYXAoUi5waWNrQnkoZmlsdGVyWmVyb3MpLCB0b3RhbEhpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG5cbiAgICBnZXRNYXhBdHRIaXN0b2dyYW0oKSB7XG4gICAgICAgIC8vIGNvbnN0IHRvdGFsSGlzdCA9IHRoaXMuY291bnRQb3NJbmZvKClcbiAgICAgICAgY29uc3QgbmV3SGlzdCA9IHRoaXMuY291bnRNYXhBdHRLZXlzKClcbiAgICAgICAgY29uc3QgZmlsdGVyWmVyb3MgPSAodmFsLCBrZXkpID0+IHZhbCAhPSAwO1xuICAgICAgICBjb25zdCBub25aZXJvID0gUi5tYXAoUi5waWNrQnkoZmlsdGVyWmVyb3MpLCBuZXdIaXN0KVxuXG4gICAgICAgIHJldHVybiBub25aZXJvXG4gICAgfVxufSIsImltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogVGhlIG9yaWdpbmFsIHRva2VucywgYW5kIHRoZSBpbmRleGVzIHRoYXQgbmVlZCB0byBiZSBtYXNrZWRcbiAqL1xuIGNvbnN0IGVtcHR5RnVsbFJlc3BvbnNlOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10gPSBbe1xuICAgICB0ZXh0OiAnW1NFUF0nLFxuICAgICBlbWJlZGRpbmdzOiBbXSxcbiAgICAgY29udGV4dHM6IFtdLFxuICAgICBicGVfdG9rZW46ICcnLFxuICAgICBicGVfcG9zOiAnJyxcbiAgICAgYnBlX2RlcDogJycsXG4gICAgIGJwZV9pc19lbnQ6IG51bGwsXG4gfV1cblxuZXhwb3J0IGNsYXNzIFRva2VuRGlzcGxheSAge1xuICAgIHRva2VuRGF0YTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW11cbiAgICBtYXNrSW5kczpudW1iZXJbXVxuXG4gICAgY29uc3RydWN0b3IodG9rZW5zPWVtcHR5RnVsbFJlc3BvbnNlLCBtYXNrSW5kcz1bXSl7XG4gICAgICAgIHRoaXMudG9rZW5EYXRhID0gdG9rZW5zO1xuICAgICAgICB0aGlzLm1hc2tJbmRzID0gbWFza0luZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVzaCBpZHggdG8gdGhlIG1hc2sgaWR4IGxpc3QgaW4gb3JkZXIgZnJvbSBzbWFsbGVzdCB0byBsYXJnZXN0XG4gICAgICovXG4gICAgbWFzayh2YWwpIHtcbiAgICAgICAgY29uc3QgY3VyckluZCA9IF8uaW5kZXhPZih0aGlzLm1hc2tJbmRzLCB2YWwpXG4gICAgICAgIGlmIChjdXJySW5kID09IC0xKSB7XG4gICAgICAgICAgICB4Xy5vcmRlcmVkSW5zZXJ0Xyh0aGlzLm1hc2tJbmRzLCB2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2YWx9IGFscmVhZHkgaW4gbWFza0luZHMhYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hc2tJbmRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSh2YWwpIHtcbiAgICAgICAgY29uc3QgY3VyckluZCA9IF8uaW5kZXhPZih0aGlzLm1hc2tJbmRzLCB2YWwpXG4gICAgICAgIGlmIChjdXJySW5kID09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTWFza2luZyAke3ZhbH1gKTtcbiAgICAgICAgICAgIHRoaXMubWFzayh2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVW5tYXNraW5nICR7dmFsfWApO1xuICAgICAgICAgICAgdGhpcy51bm1hc2sodmFsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5tYXNrKHZhbCkge1xuICAgICAgICBfLnB1bGwodGhpcy5tYXNrSW5kcywgdmFsKTtcbiAgICB9XG5cbiAgICByZXNldE1hc2soKSB7XG4gICAgICAgIHRoaXMubWFza0luZHMgPSBbXTtcbiAgICB9XG5cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuRGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uY2F0KG90aGVyOiBUb2tlbkRpc3BsYXkpIHtcbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gXy5jb25jYXQodGhpcy50b2tlbkRhdGEsIG90aGVyLnRva2VuRGF0YSk7XG4gICAgICAgIGNvbnN0IG5ld01hc2sgPSBfLmNvbmNhdCh0aGlzLm1hc2tJbmRzLCBvdGhlci5tYXNrSW5kcy5tYXAoeCA9PiB4ICsgdGhpcy5sZW5ndGgoKSkpO1xuICAgICAgICByZXR1cm4gbmV3IFRva2VuRGlzcGxheShuZXdUb2tlbnMsIG5ld01hc2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRva2VuV3JhcHBlciB7XG4gICAgYTogVG9rZW5EaXNwbGF5XG5cbiAgICBjb25zdHJ1Y3RvcihyOnRwLkF0dGVudGlvblJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tUmVzcG9uc2Uocik7XG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zQSA9IHIuYWEubGVmdDtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tQ29tcG9uZW50cyh0b2tlbnNBLCBbXSlcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tQ29tcG9uZW50cyhhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSwgbWFza0E6bnVtYmVyW10pe1xuICAgICAgICB0aGlzLmEgPSBuZXcgVG9rZW5EaXNwbGF5KGEsIG1hc2tBKVxuICAgIH1cblxuICAgIHVwZGF0ZUVtYmVkZGluZ3MocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gci5hYS5sZWZ0XG5cbiAgICAgICAgY29uc3QgcGFpcnMgPSBSLnppcCh0aGlzLmEudG9rZW5EYXRhLCBuZXdUb2tlbnMpXG5cbiAgICAgICAgcGFpcnMuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgZFswXS5lbWJlZGRpbmdzID0gZFsxXS5lbWJlZGRpbmdzXG4gICAgICAgICAgICBkWzBdLmNvbnRleHRzID0gZFsxXS5jb250ZXh0c1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFzayB0aGUgYXBwcm9wcmlhdGUgc2VudGVuY2UgYXQgdGhlIGluZGV4IGluZGljYXRlZFxuICAgICAqL1xuICAgIG1hc2soc0lEOnRwLlRva2VuT3B0aW9ucywgaWR4Om51bWJlcil7XG4gICAgICAgIHRoaXNbc0lEXS5tYXNrKGlkeClcbiAgICAgICAgY29uc3Qgb3B0cyA9IFtcImFcIiwgXCJiXCJdXG4gICAgICAgIGNvbnN0IE5hID0gdGhpcy5hLmxlbmd0aCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVUb0xldHRlcihzaWRlOnRwLlNpZGVPcHRpb25zLCBhdHlwZTp0cC5TZW50ZW5jZU9wdGlvbnMpe1xuICAgIC8vIGNvbnN0IGF0eXBlID0gY29uZi5hdHRUeXBlO1xuICAgIGlmIChhdHlwZSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcImFsbFwiXG4gICAgfVxuICAgIGNvbnN0IG91dCA9IHNpZGUgPT0gXCJsZWZ0XCIgPyBhdHlwZVswXSA6IGF0eXBlWzFdIC8vIE5vIHR5cGUgY2hlY2tpbmc/XG4gICAgcmV0dXJuIG91dFxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIHN0YXRpYyB0cmFuc2xhdGUoe3gsIHl9KTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZyk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRycyh7XG4gICAgICAgICAgICBjbGFzczogY2xhc3NlcyxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFNWRy50cmFuc2xhdGUocG9zKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRycyh7eDogMCwgeTogLTIwLCBjbGFzczogY2xhc3Nlc30pXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHRwIGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge0NPTE9SUzIwMH0gZnJvbSAnLi4vZXRjL2NvbG9ycycgXG5cbmV4cG9ydCBjbGFzcyBTcGFjeUluZm8ge1xuICAgIGNvbG9yU2NhbGU6dHAuQ29sb3JNZXRhU2NhbGVcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IHRoaXMuY3JlYXRlQ29sb3JTY2FsZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgRW5nbGlzaE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ3B1bmN0JywgJ3N5bScsICd4JywgJ2FkaicsICd2ZXJiJywgJ2NvbmonLCAnbnVtJywgJ2V0JywgJ2FkdicsICd4JywgJ2FkcCcsICdub3VuJywgJ3Byb3BuJywgJ3BhcnQnLCAncHJvbicsICdzcGFjZScsICdpbnRqJ10sXG4gICAgICAgIGRlcDogWydyb290JywgJ1JPT1QnLCAnYWNsJywgJ2Fjb21wJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhZ2VudCcsICdhbW9kJywgJ2FwcG9zJywgJ2F0dHInLCAnYXV4JywgJ2F1eHBhc3MnLCAnY2FzZScsICdjYycsICdjY29tcCcsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsIFxuICAgICAgICAnY3N1YmpwYXNzJywgJ2RhdGl2ZScsICdkZXAnLCAnZGV0JywgJ2RvYmonLCAnZXhwbCcsICdpbnRqJywgJ21hcmsnLCAnbWV0YScsICduZWcnLCAnbm4nLCAnbm91bm1vZCcsICducG1vZCcsICduc3ViaicsICduc3VianBhc3MnLCAnbnVtbW9kJywgJ29wcmQnLCBcbiAgICAgICAgJ29iaicsICdvYmwnLCAncGFyYXRheGlzJywgJ3Bjb21wJywgJ3BvYmonLCAncG9zcycsICdwcmVjb25qJywgJ3ByZWRldCcsICdwcmVwJywgJ3BydCcsICdwdW5jdCcsICdxdWFudG1vZCcsICdyZWxjbCcsICdyb290JywgJ3hjb21wJywgJ25wYWR2bW9kJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic29sZXRlLiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IGlzIGluY2x1ZGVkIHdoZW4gdHJhaW5lZCBvbiB0aGUgdW5pdmVyc2FsIGNvcnB1c1xuICAgICAqL1xuICAgIHN0YXRpYyBVbml2ZXJzYWxNZXRhT3B0aW9uczogdHAuTWV0YU9wdGlvbnMgPSB7XG4gICAgICAgIHBvczogWydhZGonLCAnYWRwJywgJ2FkdicsICdhdXgnLCAnY29uaicsICdjY29uaicsICdkZXQnLCAnaW50aicsICdub3VuJywgJ251bScsICdwYXJ0JywgJ3Byb24nLCAncHJvcG4nLCAncHVuY3QnLCAnc2NvbmonLCAnc3ltJywgJ3ZlcmInLCAneCcsICdzcGFjZSddLFxuICAgICAgICBkZXA6IFsnYWNsJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhbW9kJywgJ2FwcG9zJywgJ2F1eCcsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NsZicsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsICdkZXAnLCAnZGV0JywgJ2Rpc2NvdXJzZScsIFxuICAgICAgICAgICAgICAgICdkaXNsb2NhdGVkJywgJ2V4cGwnLCAnZml4ZWQnLCAnZmxhdCcsICdnb2Vzd2l0aCcsICdpb2JqJywgJ2xpc3QnLCAnbWFyaycsICdubW9kJywgJ25zdWJqJywgJ251bW1vZCcsICdvYmonLCAnb2JsJywgJ29ycGhhbicsICdwYXJhdGF4aXMnLCAncHVuY3QnLCAncmVwYXJhbmR1bScsIFxuICAgICAgICAgICAgICAgICdyb290JywgJ3ZvY2F0aXZlJywgJ3hjb21wJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIHN0YXRpYyBUb3RhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBSLnVuaW9uKFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMucG9zLCBTcGFjeUluZm8uVW5pdmVyc2FsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgZGVwOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmRlcCxcbiAgICAgICAgaXNfZW50OiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmlzX2VudCxcbiAgICAgICAgZW50czogU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5lbnRzLFxuICAgIH1cblxuICAgIGNyZWF0ZUNvbG9yU2NhbGVzKCk6IHRwLkNvbG9yTWV0YVNjYWxle1xuICAgICAgICBjb25zdCB0b1NjYWxlID0gKGtleXM6IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IFIuemlwT2JqKFIubWFwKFN0cmluZywga2V5cyksIENPTE9SUzIwMC5zbGljZSgwLCBrZXlzLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gayA9PiBSLnByb3BPcihcImJsYWNrXCIsIGssIG9iailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG15Q29sb3JzID0ge1xuICAgICAgICAgICAgcG9zOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICAgICAgZW50czogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5lbnRzKSxcbiAgICAgICAgICAgIG9mZnNldDogZDMuc2NhbGVPcmRpbmFsKCkucmFuZ2UoWydibGFjayddKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDx0cC5Db2xvck1ldGFTY2FsZT48dW5rbm93bj5teUNvbG9yc1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNwYWN5Q29sb3JzID0gbmV3IFNwYWN5SW5mbygpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgVVJMSGFuZGxlciB7XG5cbiAgICBzdGF0aWMgYmFzaWNVUkwoKSB7XG4gICAgICAgIGNvbnN0IHVybF9wYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTIpLmpvaW4oJy8nKTtcblxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICh1cmxfcGF0aC5sZW5ndGggPyB1cmxfcGF0aCA6ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGFsbCBVUkwgcGFyYW1ldGVycyBpbnRvIGEgbWFwLlxuICAgICAqIEByZXR1cm5zIHtNYXB9IHRoZSB1cmwgcGFyYW1ldGVycyBhcyBhIGtleS12YWx1ZSBzdG9yZSAoRVM2IG1hcClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHBhcmFtZXRlcnMoKTogb2JqZWN0IHtcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tOiAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDkwNTUxL3BhcnNlLXF1ZXJ5LXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGNvbnN0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJzLCBcIi0tLSB2YXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSB7fTtcblxuICAgICAgICBjb25zdCBpc0ludCA9IHggPT4gKC9eWzAtOV0rJC8pLnRlc3QoeCk7XG4gICAgICAgIGNvbnN0IGlzRmxvYXQgPSB4ID0+ICgvXlswLTldK1xcLlswLTldKiQvKS50ZXN0KHgpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVDYXN0ID0gdmFsID0+IHtcbiAgICAgICAgICAgIGlmIChpc0ludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGbG9hdCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlOlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFycy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcmF3X3ZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0c1sxXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcmF3X3ZhbHVlLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3X3ZhbHVlID0gcmF3X3ZhbHVlLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyYXdfdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSBpc0FycmF5ID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gcmF3X3ZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IHR5cGVDYXN0KHZhbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IHR5cGVDYXN0KHJhd192YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsUGFyYW1ldGVycztcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFVSTCBzdHJpbmcgZnJvbSBhIG1hcCBvZiB1cmwgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7e319IHVybFBhcmFtZXRlcnMgLSB0aGUgbWFwIG9mIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFVSSSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsU3RyaW5nKHVybFBhcmFtZXRlcnM6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBhdHRyID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtZXRlcnMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdXJsUGFyYW1ldGVyc1trXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB2YWx1ZSA9ICcuLicgKyB2LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICBhdHRyLnB1c2goZW5jb2RlVVJJKGsgKyAnPScgKyB2YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBsZXQgcmVzID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXMgKz0gJz8nICsgYXR0ci5qb2luKCcmJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVSTFBhcmFtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYW55W10sIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgICAgIGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybChjdXJyZW50UGFyYW1zLCBhZGRUb0Jyb3dzZXJIaXN0b3J5KTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBHZW5lcmF0ZXMgYSBrZXktdmFsdWUgbWFwIG9mIGFsbCBVUkwgcGFyYW1zIGFuZCByZXBsYWNlcyByZXBsYWNlS2V5c1xuICAgIC8vICAqIEBwYXJhbSB1cGRhdGVLZXlzXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHVwZGF0ZVVSTFBhcmFtcyh1cGRhdGVLZXlzKSB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgLy8gICAgIE9iamVjdC5rZXlzKHVwZGF0ZUtleXMpLmZvckVhY2goKGspID0+IGN1cnJlbnRQYXJhbXNba10gPSB1cGRhdGVLZXlzW2tdKVxuICAgIC8vICAgICByZXR1cm4gY3VycmVudFBhcmFtcztcbiAgICAvLyB9XG5cblxuICAgIHN0YXRpYyB1cGRhdGVVcmwodXJsUGFyYW1ldGVyczogb2JqZWN0LCBhZGRUb0Jyb3dzZXJIaXN0b3J5ID0gdHJ1ZSkge1xuICAgICAgICBpZiAoYWRkVG9Ccm93c2VySGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHsgcHJlZml4ID0gJycgfSk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfaWRfY291bnRlciArPSAxO1xuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB0aGVfdW5pcXVlX2lkX2NvdW50ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBEM1NlbCA9IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+XG5cbi8qKlxuICogU2VsZWN0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIHNob3VsZCBiZSBzdGF0aWMgbWV0aG9kcyBpbiB0aGUgYmVsb3cgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbCB7XG4gICAgc3RhdGljIHNldFNlbFZpc2libGUgPSAoeDogRDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgIHN0YXRpYyBzZXRWaXNpYmxlID0gKHg6IHN0cmluZykgPT4gU2VsLnNldFNlbFZpc2libGUoZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBzZXRIaWRkZW4gPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgaGlkZUVsZW1lbnQgPSAoaEU6IEQzU2VsKSA9PiBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnfSlcbiAgICBzdGF0aWMgdW5oaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGx9KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvb3NlT2JqZWN0IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIGFzY09yZGVyKG4xLCBuMikge1xuICAgIGlmIChuMSA8IG4yKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAobjEgPiBuMikgeyBcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQge2ZpbmRBbGxJbmRleGVzLCBpbnNlcnRBdF8sIG9yZGVyZWRJbnNlcnRfLCBzZXQyU29ydGVkQXJyYXl9XG5cbi8qKlxuICogRmluZCBhbGwgaW5kZXhlcyB0aGF0IG1hdGNoIGEgcGFydGljdWxhciBwcmVkaWNhdGVcbiAqL1xuZnVuY3Rpb24gZmluZEFsbEluZGV4ZXM8VD4oYXJyYXk6QXJyYXk8VD4sIHByZWRpY2F0ZTooYTpUKSA9PiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIGxldCBmcm9tSW5kZXg9MDtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHdoaWxlIChpICE9IC0xKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpKTtcbiAgICAgICAgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGkrMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIGluc2VydEF0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGluZDpudW1iZXIpOkFycmF5PFQ+IHtcbiAgICBhcnJheS5zcGxpY2UoaW5kLCAwLCB2YWwpO1xuICAgIHJldHVybiBhcnJheVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzZXQgdG8gYW4gb3JkZXJlZCBhcnJheVxuICovXG5mdW5jdGlvbiBzZXQyU29ydGVkQXJyYXk8VD4oaW5wdXQ6U2V0PFQ+KTpBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoYXNjT3JkZXIpXG59XG5cbi8qKlxuICogSW5zZXJ0IGEgdmFsdWUgaW50byBhcnJheSBpbiBzb3J0ZWQgb3JkZXIgSU4gUExBQ0VcbiAqIFxuICogV0FSTklORzogT25seSBoYW5kbGVzIG51bWJlcnMsIHNvcnRlZCBmcm9tIGxlYXN0IHRvIGdyZWF0ZXN0XG4gKiAtIEFzc3VtZXMgYWxyZWFkeSBzb3J0ZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZEluc2VydF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBjb2xkc3RhcnQ9ZmFsc2UpOkFycmF5PFQ+IHtcbiAgICAvLyBSZXNvcnQgYXJyYXkgaWYgZGVzaXJlZFxuICAgIGlmIChjb2xkc3RhcnQpIHtcbiAgICAgICAgYXJyYXkuc29ydChhc2NPcmRlcilcbiAgICB9XG5cbiAgICBjb25zdCBpbmQgPSBfLnNvcnRlZEluZGV4KGFycmF5LCB2YWwpO1xuICAgIHJldHVybiBpbnNlcnRBdF8oYXJyYXksIHZhbCwgaW5kKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmRvbShsZW46bnVtYmVyKXtcbiAgY29uc3QgYTpudW1iZXJbXSA9IG5ldyBBcnJheShsZW4pLmZpbGwoMClcblxuICByZXR1cm4gYS5tYXAoKHgpID0+IHtyZXR1cm4gXy5yYW5kb20oLTUsIDUsIHRydWUpfSlcbn0iLCIvKipcbiAqIENvbnZlcnQgYSBKUyBvYmplY3QgaW50byBHRVQgVVJMIHBhcmFtZXRlcnNcbiAqIFxuICogQHBhcmFtIGJhc2UgQmFzZSBVUkwgYXRvcCB3aGljaCB0byBhZGQgR0VUIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHRvIGluc2VydCBpbnRvIGEgVVJMIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVybChiYXNlOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6c3RyaW5nIHtcbiAgICBpZiAocGFyYW1zKXtcbiAgICAgICAgbGV0IG91dDogc3RyaW5nID0gYmFzZSArIFwiP1wiO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCggayA9PiB7XG4gICAgICAgICAgICBvdXQgKz0gaztcbiAgICAgICAgICAgIG91dCArPSAnPSc7XG4gICAgICAgICAgICBvdXQgKz0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgb3V0ICs9IFwiJlwiO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3V0LnJlcGxhY2UoLyYkL2csIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGluZm9ybWF0aW9uIGluIEdFVCByZXF1ZXN0IGludG8gdGhlIG1lc3NhZ2UgZm9yIGEgUE9TVCByZXF1ZXN0ICAgIFxuICovXG5leHBvcnQgY29uc3QgdG9QYXlsb2FkID0gKHRvU2VuZCkgPT4ge3JldHVybiB7XG4gICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkodG9TZW5kKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG59fSIsIi8vIFtbdmFsLCBpbmRdLCBbdmFsLCBpbmRdLi4uXVxudHlwZSBDb21wRm5JbmQgPSAoYTpudW1iZXJbXSwgYjpudW1iZXJbXSkgPT4gbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRBcnJheSB7XG4gICAgYXJyOiBudW1iZXJbXSxcbiAgICBzb3J0SW5kaWNlczogbnVtYmVyW10sXG59XG5cbi8qKlxuICogQ29waWVzIGFuZCBzb3J0cyBhbiBhcnJheSB3aGlsZSBrZWVwaW5nIHRyYWNrIG9mIHRoZSBpbmRpY2VzLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzb3J0aW5nIG1heCAtPiBtaW4uXG4gKiBcbiAqIEBwYXJhbSBhcnIgLSBBcnJheSB0byBiZSBjb3BpZWQgYW5kIHNvcnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFdpdGhJbmRpY2VzKGFycjpudW1iZXJbXSwgZm4/OkNvbXBGbkluZCk6IFNvcnRBcnJheSB7XG4gICAgLy8gSWYgZm4gaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHNvcnRpbmcgYnkgbWF4IHZhbHVlXG4gICAgaWYgKCFmbikge1xuICAgICAgICBmbiA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV0IG91dDpTb3J0QXJyYXkgPSB7XG4gICAgICAgIGFycjogW10sXG4gICAgICAgIHNvcnRJbmRpY2VzOiBbXVxuICAgIH07XG5cbiAgICBsZXQgaWR4VHJhY2tlcjogbnVtYmVyW11bXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkeFRyYWNrZXJbaV0gPSBbYXJyW2ldLCBpXTtcbiAgICB9XG5cbiAgICBpZHhUcmFja2VyLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgb3V0LnNvcnRJbmRpY2VzLnB1c2goaWR4VHJhY2tlcltqXVsxXSk7XG4gICAgICBvdXQuYXJyW2pdID0gaWR4VHJhY2tlcltqXVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9IiwiLy8gQ29sb3JzIHdlcmUgZ2VuZXJhdGVkIHRvIGJlIGFzIHZpc3VhbGx5IGRpc3RpbmN0IGFzIHBvc3NpYmxlIGJ5OiBodHRwOi8vam5ubm5uLmdpdGh1Yi5pby9jYXRlZ29yeS1jb2xvcnMtY29uc3RyYWluZWQuaHRtbFxuZXhwb3J0IGNvbnN0IENPTE9SUzIwMCA9IFtcbiAgICBcIiMzOTU3ZmZcIiwgXCIjZDNmZTE0XCIsIFwiI2M5MDgwYVwiLCBcIiNmZWM3ZjhcIiwgXCIjMGI3YjNlXCIsIFwiIzBiZjBlOVwiLCBcIiNjMjAzYzhcIiwgXCIjZmQ5YjM5XCIsIFxuICAgIFwiIzg4ODU5M1wiLCBcIiM5MDY0MDdcIiwgXCIjOThiYTdmXCIsIFwiI2ZlNjc5NFwiLCBcIiMxMGIwZmZcIiwgXCIjYWM3YmZmXCIsIFwiI2ZlZTdjMFwiLCBcIiM5NjRjNjNcIixcbiAgICBcIiMxZGE0OWNcIiwgXCIjMGFkODExXCIsIFwiI2JiZDlmZFwiLCBcIiNmZTZjZmVcIiwgXCIjMjk3MTkyXCIsIFwiI2QxYTA5Y1wiLCBcIiM3ODU3OWVcIiwgXCIjODFmZmFkXCIsXG4gICAgXCIjNzM5NDAwXCIsIFwiI2NhNjk0OVwiLCBcIiNkOWJmMDFcIiwgXCIjNjQ2YTU4XCIsIFwiI2Q1MDk3ZVwiLCBcIiNiYjczYTlcIiwgXCIjY2NmNmU5XCIsIFwiIzljYjRiNlwiLFxuICAgIFwiI2I2YTdkNFwiLCBcIiM5ZThjNjJcIiwgXCIjNmU4M2M4XCIsIFwiIzAxYWY2NFwiLCBcIiNhNzFhZmRcIiwgXCIjY2ZlNTg5XCIsIFwiI2Q0Y2NkMVwiLCBcIiNmZDQxMDlcIixcbiAgICBcIiNiZjhmMGVcIiwgXCIjMmY3ODZlXCIsIFwiIzRlZDFhNVwiLCBcIiNkOGJiN2RcIiwgXCIjYTU0NTA5XCIsIFwiIzZhOTI3NlwiLCBcIiNhNDc3N2FcIiwgXCIjZmMxMmM5XCIsXG4gICAgXCIjNjA2ZjE1XCIsIFwiIzNjYzRkOVwiLCBcIiNmMzFjNGVcIiwgXCIjNzM2MTZmXCIsIFwiI2YwOTdjNlwiLCBcIiNmYzg3NzJcIiwgXCIjOTJhNmZlXCIsIFwiIzg3NWI0NFwiLFxuICAgIFwiIzY5OWFiM1wiLCBcIiM5NGJjMTlcIiwgXCIjN2Q1YmYwXCIsIFwiI2QyNGRmZVwiLCBcIiNjODViNzRcIiwgXCIjNjhmZjU3XCIsIFwiI2I2MjM0N1wiLCBcIiM5OTRiOTFcIixcbiAgICBcIiM2NDZiOGNcIiwgXCIjOTc3YWI0XCIsIFwiI2Q2OTRmZFwiLCBcIiNjNGQ1YjVcIiwgXCIjZmRjNGJkXCIsIFwiIzFjYWUwNVwiLCBcIiM3YmQ5NzJcIiwgXCIjZTk3MDBhXCIsXG4gICAgXCIjZDA4ZjVkXCIsIFwiIzhiYjllMVwiLCBcIiNmZGU5NDVcIiwgXCIjYTI5ZDk4XCIsIFwiIzE2ODJmYlwiLCBcIiM5YWQ5ZTBcIiwgXCIjZDZjYWZlXCIsIFwiIzhkODMyOFwiLFxuICAgIFwiI2IwOTFhN1wiLCBcIiM2NDc1NzlcIiwgXCIjMWY4ZDExXCIsIFwiI2U3ZWFmZFwiLCBcIiNiOTY2MGJcIiwgXCIjYTRhNjQ0XCIsIFwiI2ZlYzI0Y1wiLCBcIiNiMTE2OGNcIixcbiAgICBcIiMxODhjYzFcIiwgXCIjN2FiMjk3XCIsIFwiIzQ0NjhhZVwiLCBcIiNjOTQ5YTZcIiwgXCIjZDQ4Mjk1XCIsIFwiI2ViNmRjMlwiLCBcIiNkNWIwY2JcIiwgXCIjZmY5ZmZiXCIsXG4gICAgXCIjZmRiMDgyXCIsIFwiI2FmNGQ0NFwiLCBcIiNhNzU5YzRcIiwgXCIjYTllMDNhXCIsIFwiIzBkOTA2YlwiLCBcIiM5ZWUzYmRcIiwgXCIjNWI4ODQ2XCIsIFwiIzBkODk5NVwiLFxuICAgIFwiI2YyNWM1OFwiLCBcIiM3MGFlNGZcIiwgXCIjODQ3Zjc0XCIsIFwiIzkwOTRiYlwiLCBcIiNmZmUyZjFcIiwgXCIjYTY3MTQ5XCIsIFwiIzkzNmM4ZVwiLCBcIiNkMDQ5MDdcIixcbiAgICBcIiNjM2I4YTZcIiwgXCIjY2VmOGM0XCIsIFwiIzdhOTI5M1wiLCBcIiNmZGEyYWJcIiwgXCIjMmVmNmM1XCIsIFwiIzgwNzI0MlwiLCBcIiNjYjk0Y2NcIiwgXCIjYjZiZGQwXCIsXG4gICAgXCIjYjVjNzVkXCIsIFwiI2ZkZTE4OVwiLCBcIiNiN2ZmODBcIiwgXCIjZmEyZDhlXCIsIFwiIzgzOWE1ZlwiLCBcIiMyOGMyYjVcIiwgXCIjZTVlOWUxXCIsIFwiI2JjNzlkOFwiLFxuICAgIFwiIzdlZDhmZVwiLCBcIiM5ZjIwYzNcIiwgXCIjNGY3YTViXCIsIFwiI2Y1MTFmZFwiLCBcIiMwOWM5NTlcIiwgXCIjYmNkMGNlXCIsIFwiIzg2ODVmZFwiLCBcIiM5OGZjZmZcIixcbiAgICBcIiNhZmJmZjlcIiwgXCIjNmQ2OWI0XCIsIFwiIzVmOTlmZFwiLCBcIiNhYWE4N2VcIiwgXCIjYjU5ZGZiXCIsIFwiIzVkODA5ZFwiLCBcIiNkOWE3NDJcIiwgXCIjYWM1Yzg2XCIsXG4gICAgXCIjOTQ2OGQ1XCIsIFwiI2E0YTJiMlwiLCBcIiNiMTM3NmVcIiwgXCIjZDQzZjNkXCIsIFwiIzA1YTlkMVwiLCBcIiNjMzgzNzVcIiwgXCIjMjRiNThlXCIsIFwiIzZlYWJhZlwiLFxuICAgIFwiIzY2YmY3ZlwiLCBcIiM5MmNiYmJcIiwgXCIjZGRiMWVlXCIsIFwiIzFiZTg5NVwiLCBcIiNjN2VjZjlcIiwgXCIjYTZiYWE2XCIsIFwiIzgwNDVjZFwiLCBcIiM1ZjcwZjFcIixcbiAgICBcIiNhOWQ3OTZcIiwgXCIjY2U2MmNiXCIsIFwiIzBlOTU0ZFwiLCBcIiNhOTdkMmZcIiwgXCIjZmNiOGQzXCIsIFwiIzliZmVlM1wiLCBcIiM0ZThkODRcIiwgXCIjZmM2ZDNmXCIsXG4gICAgXCIjN2I5ZmQ0XCIsIFwiIzhjNjE2NVwiLCBcIiM3MjgwNWVcIiwgXCIjZDUzNzYyXCIsIFwiI2YwMGExYlwiLCBcIiNkZTVjOTdcIiwgXCIjOGVhMjhiXCIsIFwiI2ZjY2Q5NVwiLFxuICAgIFwiI2JhOWM1N1wiLCBcIiNiNzlhODJcIiwgXCIjN2M1YTgyXCIsIFwiIzdkN2NhNFwiLCBcIiM5NThhZDZcIiwgXCIjY2Q4MTI2XCIsIFwiI2JkYjBiN1wiLCBcIiMxMGUwZjhcIixcbiAgICBcIiNkY2NjNjlcIiwgXCIjZDZkZTBmXCIsIFwiIzYxNmQzZFwiLCBcIiM5ODVhMjVcIiwgXCIjMzBjN2ZkXCIsIFwiIzBhZWI2NVwiLCBcIiNlM2NkYjRcIiwgXCIjYmQxYmVlXCIsXG4gICAgXCIjYWQ2NjVkXCIsIFwiI2Q3NzA3MFwiLCBcIiM4ZWE1YjhcIiwgXCIjNWI1YWQwXCIsIFwiIzc2NjU1ZVwiLCBcIiM1OTgxMDBcIiwgXCIjODY3NTdlXCIsIFwiIzVlYTA2OFwiLFxuXSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4vVXRpbFwiXG5cbi8qKlxuICogQVRURU5USU9OIFJFU1BPTlNFUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBDb250YWluIHRoZSBhdHRlbnRpb25zIGFuZCBlbWJlZGRpbmdzIGZvciBhbGwgY29tYmluYXRpb25zIG9mIHJldHVybnMgZnJvbSB0aGUgYmFja2VuZFxuICovXG5cbmV4cG9ydCB0eXBlIE1vZGVsSW5mbyA9IHtcbiAgICBubGF5ZXJzOiBudW1iZXJcbiAgICBuaGVhZHM6IG51bWJlclxufVxuXG50eXBlIEFic3RyYWN0QXR0ZW50aW9uUmVzcG9uc2U8VD4gPSB7XG4gICAgYWE6IFRcbn1cblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTVUxUUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHJlc3VsdHMgdGhhdCBhcmUgZW5jYXNlZCBpbiB0aGUgJ2FhJyBhbmQgJ2FiJyBrZXlzIHJldHVybmVkXG4gKi9cbmV4cG9ydCB0eXBlIEF0dGVudGlvblJlc3BvbnNlID0gQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxBdHRlbnRpb25NZXRhUmVzdWx0PlxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uTWV0YVJlc3VsdCA9IEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PEZ1bGxTaW5nbGVUb2tlbkluZm9bXT5cblxuZXhwb3J0IHR5cGUgRnVsbFNpbmdsZVRva2VuSW5mbyA9IHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZW1iZWRkaW5nczogbnVtYmVyW10sXG4gICAgY29udGV4dHM6IG51bWJlcltdLFxuICAgIGJwZV90b2tlbjogc3RyaW5nLFxuICAgIGJwZV9wb3M6IHN0cmluZyxcbiAgICBicGVfZGVwOiBzdHJpbmcsXG4gICAgYnBlX2lzX2VudDogYm9vbGVhbixcbn1cblxuaW50ZXJmYWNlIEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PFQ+IHtcbiAgICBhdHQ6IG51bWJlcltdW11bXSxcbiAgICBsZWZ0OiBULFxuICAgIHJpZ2h0OiBULFxufVxuXG4vKipcbiAqIFNFQVJDSCBSRVNVTFQgVFlQRVNcbiAqL1xuXG5pbnRlcmZhY2UgTWF0Y2hlZFRva0F0dCB7XG4gICAgYXR0OiBudW1iZXJbXVxuICAgIG9mZnNldF90b19tYXg6IG51bWJlclxuICAgIGxvY19vZl9tYXg6IG51bWJlclxufVxuXG5cbmludGVyZmFjZSBNYXRjaGVkQXR0ZW50aW9ucyB7XG4gICAgaW46IE1hdGNoZWRUb2tBdHQsXG4gICAgb3V0OiBNYXRjaGVkVG9rQXR0LFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZhaXNzU2VhcmNoUmVzdWx0cyB7XG4gICAgc2VudGVuY2U6IHN0cmluZ1xuICAgIGluZGV4OiBudW1iZXJcbiAgICBtYXRjaDogc3RyaW5nXG4gICAgbWF0Y2hlZF9hdHQ6IE1hdGNoZWRBdHRlbnRpb25zXG4gICAgdG9rZW5zOiBUb2tlbkZhaXNzTWF0Y2hbXVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRmFpc3NNYXRjaCB7XG4gICAgdG9rZW46IHN0cmluZ1xuICAgIHBvczogc3RyaW5nXG4gICAgZGVwOiBzdHJpbmdcbiAgICBpc19lbnQ6IHN0cmluZ1xuICAgIGlzX21hdGNoOiBib29sZWFuXG4gICAgaW53YXJkOiBudW1iZXJbXVxuICAgIG91dHdhcmQ6IG51bWJlcltdXG59XG5cbi8qKlxuICogRVZFTlQgVFlQRVNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUb2tlbkV2ZW50IHtcbiAgICBzZWw/OiBEM1NlbCxcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlciB8IFwibnVsbFwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRW1iZWRkaW5nRXZlbnQgZXh0ZW5kcyBUb2tlbkV2ZW50IHtcbiAgICBlbWJlZGRpbmdzOiBudW1iZXJbXVxufVxuXG5leHBvcnQgdHlwZSBIZWFkQm94RXZlbnQgPSB7XG4gICAgc2lkZTogU2lkZU9wdGlvbnMsXG4gICAgaW5kOiBudW1iZXIsXG4gICAgaGVhZDogbnVtYmVyLFxufVxuXG4vKipcbiAqIE1JU0NFTExBTkVPVVMgVFlQRVNcbiAqL1xuXG5leHBvcnQgdHlwZSBTZW50ZW5jZU9wdGlvbnMgPSBcImFiXCIgfCBcImJhXCIgfCBcImFhXCIgfCBcImJiXCIgfCBcImFsbFwiO1xuZXhwb3J0IHR5cGUgU2lkZU9wdGlvbnMgPSBcImxlZnRcIiB8IFwicmlnaHRcIlxuZXhwb3J0IHR5cGUgU2ltcGxlTWV0YSA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJpc19lbnRcIlxuZXhwb3J0IHR5cGUgVG9rZW5PcHRpb25zID0gXCJhXCIgfCBcImJcIiB8IFwiYWxsXCJcblxuZXhwb3J0IGVudW0gVG9nZ2xlZCB7XG4gICAgQURERUQgPSAwLFxuICAgIFJFTU9WRUQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgcG9zOiBzdHJpbmdbXSxcbiAgICBkZXA6IHN0cmluZ1tdLFxuICAgIGlzX2VudDogYW55LFxuICAgIGVudHM6IHN0cmluZ1tdLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFPcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgaXNfZW50OiBib29sZWFuW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JNZXRhT3B0aW9ucyBleHRlbmRzIEFic3RyYWN0TWV0YU9wdGlvbnMge1xuICAgIGlzX2VudDogc3RyaW5nW10gLy8gUmVwcmVzZW50aW5nIGhleCBjb2xvcnNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1ldGFTY2FsZSB7XG4gICAgcG9zOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgZGVwOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgaXNfZW50OiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgZW50czogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxuICAgIG9mZnNldD86IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbn1cblxuZXhwb3J0IGVudW0gTW9kZWxLaW5kIHtcbiAgICBCaWRpcmVjdGlvbmFsID0gXCJiaWRpcmVjdGlvbmFsXCIsXG4gICAgQXV0b3JlZ3Jlc3NpdmUgPSBcImF1dG9yZWdyZXNzaXZlXCJcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdGhpcy5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkgeyAgXG4gICAgdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSwgIXRoaXMuY2xhc3NlZChjbGFzc05hbWUpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ2luaXRpYWwnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHZhciBpc0hpZGRlbiA9IHRoaXMuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnbm9uZSc7XG4gICAgcmV0dXJuIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCBpc0hpZGRlbiA/ICdpbmhlcml0JyA6ICdub25lJyk7XG59XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xuICB9XG5cbmQzLnNlbGVjdGlvbi5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24odGFnTmFtZSkgeyAgXG4gICAgdmFyIGVsZW1lbnRzID0gW107XG4gIFxuICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZDMuc2VsZWN0QWxsKGVsZW1lbnRzKTtcbn0iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG4vKipcbiAqIE1hcCBhIGxpc3QgYXMgdmFsdWVzIHRvIGFuIG9iamVjdCB3aG9zZSBrZXlzIGFyZSB0aGUgb3JpZ2luYWwgbGlzdFxuICovXG4vLyAoU3RyaW5nIC0+IGIpICAtPiBbU3RyaW5nXSAtPiB7U3RyaW5nOiBifVxuZXhwb3J0IGNvbnN0IG9iakZyb21LZXlzID0gUi5jdXJyeSgoZm4sIGtleXMpID0+IFIuemlwT2JqKGtleXMsIFIubWFwKGZuLCBrZXlzKSkpIFxuXG5leHBvcnQgY29uc3QgYXNzaWduWmVybzogKHg6YW55KSA9PiBudW1iZXIgPSB4ID0+IDA7XG5cbi8qKlxuICogR2l2ZW4gYW4gbGlzdCwgY3JlYXRlIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFsbCAwXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0WmVybyA9IG9iakZyb21LZXlzKGFzc2lnblplcm8pIiwiaW1wb3J0IHsgTWFpbkdyYXBoaWMgfSBmcm9tICcuL3Zpcy9teU1haW4nXG5pbXBvcnQgeyBBUEksIGVtcHR5VG9rZW5EaXNwbGF5IH0gZnJvbSAnLi9hcGkvbWFpbkFwaSdcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgVG9rZW5XcmFwcGVyIH0gZnJvbSAnLi9kYXRhL1Rva2VuV3JhcHBlcidcbi8vIGltcG9ydCB7IFRlc3RlciB9IGZyb20gXCIuLi90cy90ZXN0XCJcblxuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9ZXhCRVJULmh0bWwhLi4vZXhCRVJULmh0bWxcIjtcbmltcG9ydCBcIiFmaWxlLWxvYWRlcj9uYW1lPWluZGV4Lmh0bWwhLi4vaW5kZXguaHRtbFwiO1xuaW1wb3J0IFwiLi4vY3NzL21haW4uc2Nzc1wiXG5cblxuZnVuY3Rpb24gZG9NeVN2ZygpIHtcbiAgICByZXR1cm4gbmV3IE1haW5HcmFwaGljKClcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzdGF0aWMgZmlsZXMgbmVlZGVkIGZvciB0aGUgZGVtby4gU2F2ZSB0aGUga2V5cyBhbmQgZmlsZSBwYXRocyB0byBhIGpzb24gb2JqZWN0IHRoYXQgaXMgdGhlbiB3cml0dGVuIHRvIGEgZmlsZVxuICpcbiAqIFRoaXMgd2lsbCBwcmludCB0aGUgb2JqZWN0IGFmdGVyIGV2ZXJ5IGNhbGwuIFdoZW4gdGhlIGtleSBsZW5ndGggaXMgdGhlIGV4cGVjdGVkIGxlbmd0aCwgcmlnaHQgY2xpY2sgaW4gY2hyb21lIGFuZCBzZWxlY3QgXCJzYXZlIGFzIGdsb2JhbCB2YXJpYWJsZVwiXG4gKlxuICogVGhlbiwgaW4gdGhlIGNvbnNvbGUsIHR5cGUgXCJjb3B5KHRlbXAxKVwiLiBVc2Ugc3VibGltZSB0ZXh0IChpdCBpcyB0aGUgYmVzdCBmb3IgaGFuZGxpbmcgbGFyZ2UgZmlsZXMpIHRvIHBhc3RlIHRoaXMgaW50byB0aGUgY29kZSBhbmQgc2F2ZSBpdCBhcyBfX19fLmpzb25cbiAqXG4gKiBAcGFyYW0gc2VudGVuY2UgLSBUaGUgc2VudGVuY2UgdG8gYW5hbHl6ZVxuICogQHBhcmFtIG1hc2tJbmQgLSBXaGljaCBpbmRleCB0byBtYXNrIGluIHRoZSBzZW50ZW5jZS4gQXRtLCBjYW4gb25seSByZWNvcmQgb25lIG1hc2tpbmdcbiAqIEBwYXJhbSBvdXREaWN0UGF0aCAtIFdoZXJlIHRvIHNhdmUgdGhlIG9iamVjdCBvZiBoYXNoa2V5OiBmaWxlcGF0aFxuICovXG5mdW5jdGlvbiBjcmVhdGVEZW1vcyhzZW50ZW5jZSwgbWFza0luZDogbnVtYmVyLCBtb2RlbE5hbWU6IHN0cmluZywgY29ycHVzTmFtZTogc3RyaW5nLCBvdXREaWN0UGF0aCkge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoKVxuICAgIGNvbnN0IGxheWVycyA9IF8ucmFuZ2UoMTIpXG5cbiAgICBjb25zdCBMID0gMFxuXG4gICAgY29uc3QgY29udGVudEhhc2ggPSB7fSAgICAgICAgICAvLyBNYXAgaGFzaCAtPiBjb250ZW50c1xuXG4gICAgLy8gR2V0IHRoZSBiYXNlIHJldHVybiBmb3IgYWxsIHBhZ2UgaW5pdGlhbGl6YXRpb25zXG4gICAgXy5yYW5nZSgxMikuZm9yRWFjaChMID0+IHtcbiAgICAgICAgYXBpLmdldE1ldGFBdHRlbnRpb25zKG1vZGVsTmFtZSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwLnBheWxvYWQpO1xuXG4gICAgICAgICAgICAvLyBVbm1hc2tlZCByZXNwb25zZTpcbiAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBjb250ZW50SGFzaCkudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBlbWJlZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1iZWRkaW5nID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5lbWJlZGRpbmdzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0RW1iZWRkaW5ncyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGVtYmVkZGluZywgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5jb250ZXh0c1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdENvbnRleHRzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgY29udGV4dCwgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGNvbnRlbnRIYXNoKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudEhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogXG4gKiBPYnNlcnZlIGhvdyB0aGUgZGVtbyBjcmVhdGlvbiBwcm9jZXNzIHdvcmtzLlxuICogXG4gKiBJZiBkZXNpcmVkIHRvIG1hc2sgbXVsdGlwbGUgd29yZHMgaW4gdGhlIGlucHV0IGZvciBkZW1vIHB1cnBvc2VzLCB0cnkgbG9vcGluZyBvdmVyIHRoZSBtYXNrIGluZHMgYW5kIG1hc2tpbmcgZWFjaCBvbmUgaW5kaXZpZHVhbGx5XG4gKiBcbiAqIEBwYXJhbSBzZW50ZW5jZSBUaGUgZGVtbyBzZW50ZW5jZVxuICogQHBhcmFtIG1hc2tJbmQgRGVzaXJlZCBpbmRleCB0byBtYXNrIChjYW4gY3VycmVudGx5IG9ubHkgYWNjZXB0IGEgc2luZ2xlIG1hc2sgaW5kZXgpXG4gKiBAcGFyYW0gb3V0RGljdFBhdGggXG4gKi9cbmZ1bmN0aW9uIGluc3BlY3REZW1vcyhzZW50ZW5jZSwgbWFza0luZDogbnVtYmVyLCBtb2RlbE5hbWU6IHN0cmluZywgY29ycHVzTmFtZTogc3RyaW5nLCBvdXREaWN0UGF0aCkge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoKVxuXG4gICAgY29uc3QgY29udGVudEhhc2ggPSB7fVxuXG4gICAgLy8gR2V0IHRoZSBiYXNlIHJldHVybiBmb3IgYWxsIHBhZ2UgaW5pdGlhbGl6YXRpb25zXG4gICAgXy5yYW5nZSgxKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMobW9kZWxOYW1lLCBzZW50ZW5jZSwgTCwgXCJcIikudGhlbihyMCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tDYXBzdWxlID0gbmV3IFRva2VuV3JhcHBlcihyMC5wYXlsb2FkKTtcblxuICAgICAgICAgICAgLy8gVW5tYXNrZWQgcmVzcG9uc2U6XG4gICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGVtcHR5VG9rZW5EaXNwbGF5KS50aGVuKHIxID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNYXNrZWQgd29yZCBhbmQgc2VhcmNoaW5nIHJlc3BvbnNlczpcbiAgICAgICAgICAgICAgICB0b2tDYXBzdWxlLmEubWFzayhtYXNrSW5kKVxuICAgICAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgZW1wdHlUb2tlbkRpc3BsYXkpLnRoZW4ocjIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyMik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBlbWJlZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1iZWRkaW5nID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5lbWJlZGRpbmdzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0RW1iZWRkaW5ncyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGVtYmVkZGluZywgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5jb250ZXh0c1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdENvbnRleHRzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgY29udGV4dCwgTCwgXy5yYW5nZSgxMiksIDUwKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlcGxUZXN0KCkge1xuICAgIC8vIFRlc3Rlci50ZXN0QXR0V3JhcHBlckNvbnN0cnVjdG9yKClcbiAgICAvLyBUZXN0ZXIudGVzdFVwZGF0ZU1hc2tlZEF0dGVudGlvbigpXG4gICAgLy8gVGVzdGVyLnRlc3ROakFyYXkoKTtcbiAgICAvLyBUZXN0ZXIudGVzdFJhbmRvbUFycmF5Q3JlYXRpb24oKTtcbiAgICAvLyBUZXN0ZXIudGVzdEZhaXNzV3JhcHBlcigpO1xuICAgIC8vIFRlc3Rlci50ZXN0RDNPcmRpbmFsKCk7XG4gICAgLy8gVGVzdGVyLnRlc3RGYWlzc1NlYXJjaFJlc3VsdHNIaXN0KCk7XG4gICAgLy8gVGVzdGVyLnRlc3RSZWFkaW5nSlNPTigpO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGRvTXlTdmcoKTtcbiAgICAvLyByZXBsVGVzdCgpO1xuICAgIC8vIGNyZWF0ZURlbW9zKFwiQ2hpY2tlbiB0YXN0ZXMgYWJzb2x1dGVseSBkZWxpY2lvdXMgaWYgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcIiwgNCwgXCJcIilcbiAgICBjb25zb2xlLmxvZyhcIkRvbmUgbG9hZGluZyB3aW5kb3dcIik7XG59XG4iLCJpbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi9ldGMvdHlwZXNcIlxuaW1wb3J0ICogYXMgeF8gZnJvbSBcIi4vZXRjL19Ub29sc1wiXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFVSTEhhbmRsZXIgfSBmcm9tIFwiLi9ldGMvVVJMSGFuZGxlclwiO1xuXG5jb25zdCBmYWxzZXkgPSB2YWwgPT4gKG5ldyBTZXQoWydmYWxzZScsIDAsIFwibm9cIiwgZmFsc2UsIG51bGwsIFwiXCJdKSkuaGFzKHZhbClcbmNvbnN0IHRydXRoeSA9IHZhbCA9PiAhZmFsc2V5KHZhbClcbmNvbnN0IHRvTnVtYmVyID0geCA9PiAreDtcblxuXG50eXBlIEluc3BlY3Rvck9wdGlvbnMgPSBcImNvbnRleHRcIiB8IFwiZW1iZWRkaW5nc1wiIHwgbnVsbFxuXG4vLyBNdXN0IGJlIG9wdGlvbmFsIHBhcmFtcyBmb3IgaW5pdGlhbGl6YXRpb25zXG5pbnRlcmZhY2UgVVJMUGFyYW1ldGVycyB7XG4gICAgc2VudGVuY2U/OiBzdHJpbmdcbiAgICBtb2RlbD86IHN0cmluZ1xuICAgIG1vZGVsS2luZD86IHN0cmluZ1xuICAgIGNvcnB1cz86IHN0cmluZ1xuICAgIGxheWVyPzogbnVtYmVyXG4gICAgaGVhZHM/OiBudW1iZXJbXVxuICAgIHRocmVzaG9sZD86IG51bWJlclxuICAgIHRva2VuSW5kPzogbnVtYmVyIHwgJ251bGwnXG4gICAgdG9rZW5TaWRlPzogdHAuU2lkZU9wdGlvbnNcbiAgICBtZXRhTWF0Y2g/OiB0cC5TaW1wbGVNZXRhIHwgbnVsbFxuICAgIG1ldGFNYXg/OiB0cC5TaW1wbGVNZXRhIHwgbnVsbFxuICAgIGRpc3BsYXlJbnNwZWN0b3I/OiBJbnNwZWN0b3JPcHRpb25zXG4gICAgb2Zmc2V0SWR4cz86IG51bWJlcltdXG4gICAgbWFza0luZHM/OiBudW1iZXJbXVxuICAgIGhpZGVDbHNTZXA/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjbGFzcyBVSUNvbmZpZyB7XG5cbiAgICBwcml2YXRlIF9jb25mOiBVUkxQYXJhbWV0ZXJzID0ge31cbiAgICBwcml2YXRlIF9oZWFkU2V0OiBTZXQ8bnVtYmVyPjtcbiAgICBhdHRUeXBlOiB0cC5TZW50ZW5jZU9wdGlvbnM7XG4gICAgX25IZWFkczogbnVtYmVyIHwgbnVsbDtcbiAgICBfbkxheWVyczogbnVtYmVyIHwgbnVsbDtcbiAgICBwcml2YXRlIF90b2tlbjogdHAuVG9rZW5FdmVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9uSGVhZHMgPSAxMjsgLy8gSG93IGRvIEkgYXV0b21hdGUgdGhpcz9cbiAgICAgICAgdGhpcy5fbkxheWVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuYXR0VHlwZSA9ICdhYSc7IC8vIERvbid0IGFsbG93IHRoaXMgdG8gYmUgbW9kaWZpZWQgYnkgdGhlIHVzZXIuXG4gICAgICAgIHRoaXMuZnJvbVVSTCgpXG4gICAgICAgIHRoaXMudG9VUkwoZmFsc2UpXG4gICAgfVxuXG5cbiAgICBmcm9tVVJMKCkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnNcblxuICAgICAgICB0aGlzLl9jb25mID0ge1xuICAgICAgICAgICAgbW9kZWw6IHBhcmFtc1snbW9kZWwnXSB8fCAnYmVydC1iYXNlLWNhc2VkJyxcbiAgICAgICAgICAgIG1vZGVsS2luZDogcGFyYW1zWydtb2RlbEtpbmQnXSB8fCB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBwYXJhbXNbJ3NlbnRlbmNlJ10gfHwgXCJUaGUgZ2lybCByYW4gdG8gYSBsb2NhbCBwdWIgdG8gZXNjYXBlIHRoZSBkaW4gb2YgaGVyIGNpdHkuXCIsXG4gICAgICAgICAgICBjb3JwdXM6IHBhcmFtc1snY29ycHVzJ10gfHwgJ3dveicsXG4gICAgICAgICAgICBsYXllcjogcGFyYW1zWydsYXllciddIHx8IDEsXG4gICAgICAgICAgICBoZWFkczogdGhpcy5faW5pdEhlYWRzKHBhcmFtc1snaGVhZHMnXSksXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IHBhcmFtc1sndGhyZXNob2xkJ10gfHwgMC43LFxuICAgICAgICAgICAgdG9rZW5JbmQ6IHBhcmFtc1sndG9rZW5JbmQnXSB8fCBudWxsLFxuICAgICAgICAgICAgdG9rZW5TaWRlOiBwYXJhbXNbJ3Rva2VuU2lkZSddIHx8IG51bGwsXG4gICAgICAgICAgICBtYXNrSW5kczogcGFyYW1zWydtYXNrSW5kcyddIHx8IFs5XSxcbiAgICAgICAgICAgIG1ldGFNYXRjaDogcGFyYW1zWydtZXRhTWF0Y2gnXSB8fCBcInBvc1wiLFxuICAgICAgICAgICAgbWV0YU1heDogcGFyYW1zWydtZXRhTWF4J10gfHwgXCJwb3NcIixcbiAgICAgICAgICAgIGRpc3BsYXlJbnNwZWN0b3I6IHBhcmFtc1snZGlzcGxheUluc3BlY3RvciddIHx8IG51bGwsXG4gICAgICAgICAgICBvZmZzZXRJZHhzOiB0aGlzLl9pbml0T2Zmc2V0SWR4cyhwYXJhbXNbJ29mZnNldElkeHMnXSksXG4gICAgICAgICAgICBoaWRlQ2xzU2VwOiB0cnV0aHkocGFyYW1zWydoaWRlQ2xzU2VwJ10pIHx8IHRydWUsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b2tlbiA9IHsgc2lkZTogdGhpcy5fY29uZi50b2tlblNpZGUsIGluZDogdGhpcy5fY29uZi50b2tlbkluZCB9XG5cbiAgICB9XG5cbiAgICB0b1VSTCh1cGRhdGVIaXN0b3J5ID0gZmFsc2UpIHtcbiAgICAgICAgVVJMSGFuZGxlci51cGRhdGVVcmwodGhpcy5fY29uZiwgdXBkYXRlSGlzdG9yeSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0T2Zmc2V0SWR4cyh2OiAoc3RyaW5nIHwgbnVtYmVyKVtdIHwgbnVsbCkge1xuICAgICAgICBpZiAodiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gWy0xLCAwLCAxXVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyQXJyID0gUi5tYXAodG9OdW1iZXIsIHYpO1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlckFycjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRIZWFkcyh2OiBudW1iZXJbXSB8IG51bGwpIHtcbiAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB2Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5oZWFkU2V0KG5ldyBTZXQodikpLl9jb25mLmhlYWRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRzKClcbiAgICB9XG5cbiAgICBuSGVhZHMoKTogbnVtYmVyXG4gICAgbkhlYWRzKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIG5IZWFkcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX25IZWFkc1xuICAgICAgICB0aGlzLl9uSGVhZHMgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBuTGF5ZXJzKCk6IG51bWJlclxuICAgIG5MYXllcnModmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbkxheWVycyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX25MYXllcnNcbiAgICAgICAgdGhpcy5fbkxheWVycyA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdEFsbEhlYWRzKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkcygpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEhlYWRzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Tm9IZWFkcygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RBbGxIZWFkcygpIHtcbiAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQoXy5yYW5nZSgwLCB0aGlzLl9uSGVhZHMpKSlcbiAgICB9XG5cbiAgICBzZWxlY3ROb0hlYWRzKCkge1xuICAgICAgICB0aGlzLmhlYWRTZXQobmV3IFNldChbXSkpXG4gICAgfVxuXG4gICAgdG9nZ2xlSGVhZChoZWFkOiBudW1iZXIpOiB0cC5Ub2dnbGVkIHtcbiAgICAgICAgbGV0IG91dDtcbiAgICAgICAgaWYgKHRoaXMuaGVhZFNldCgpLmhhcyhoZWFkKSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkU2V0KCkuZGVsZXRlKGhlYWQpO1xuICAgICAgICAgICAgb3V0ID0gdHAuVG9nZ2xlZC5SRU1PVkVEXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRTZXQoKS5hZGQoaGVhZCk7XG4gICAgICAgICAgICBvdXQgPSB0cC5Ub2dnbGVkLkFEREVEXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdGhyb3VnaCBzZXR0ZXIgZnVuY3Rpb24gdG8gZW5zdXJlIHVybCBpcyB1cGRhdGVkXG4gICAgICAgIHRoaXMuaGVhZFNldCh0aGlzLmhlYWRTZXQoKSk7IC8vIEkgaGF0ZSBtdXRhYmxlIGRhdGFzdHJ1Y3R1cmVzLi4uIFRoaXMgaXMgY29uZnVzaW5nLlxuXG4gICAgICAgIHJldHVybiBvdXRcbiAgICB9XG5cbiAgICB0b2dnbGVUb2tlbihlOiB0cC5Ub2tlbkV2ZW50KTogdGhpcyB7XG4gICAgICAgIGNvbnN0IHBpY2tlciA9IFIucGljayhbJ2luZCcsICdzaWRlJ10pXG4gICAgICAgIGNvbnN0IGNvbXBhcmVFdmVudCA9IHBpY2tlcihlKVxuICAgICAgICBjb25zdCBjb21wYXJlVG9rZW4gPSBwaWNrZXIodGhpcy50b2tlbigpKVxuXG4gICAgICAgIGlmIChSLmVxdWFscyhjb21wYXJlVG9rZW4sIGNvbXBhcmVFdmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMucm1Ub2tlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2tlbihlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b2tlbigpOiB0cC5Ub2tlbkV2ZW50O1xuICAgIHRva2VuKHZhbDogdHAuVG9rZW5FdmVudCk6IHRoaXM7XG4gICAgdG9rZW4odmFsPzogdHAuVG9rZW5FdmVudCkge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5cblxuICAgICAgICB0aGlzLl90b2tlbiA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi50b2tlbkluZCA9IHZhbC5pbmQ7XG4gICAgICAgIHRoaXMuX2NvbmYudG9rZW5TaWRlID0gdmFsLnNpZGU7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGhhc1Rva2VuKCkge1xuICAgICAgICBjb25zdCBjb25mID0gdGhpcy5fY29uZlxuICAgICAgICBjb25zdCBhY3R1YWxseU51bGwgPSAoKGNvbmYudG9rZW5JbmQgPT0gbnVsbCkgJiYgKGNvbmYudG9rZW5TaWRlID09IG51bGwpKVxuICAgICAgICBjb25zdCBzdHJOdWxsID0gKChjb25mLnRva2VuSW5kID09IFwibnVsbFwiKSB8fCAoY29uZi50b2tlblNpZGUgPT0gXCJcIikgfHwgKGNvbmYudG9rZW5TaWRlID09IFwibnVsbFwiKSlcbiAgICAgICAgcmV0dXJuICghYWN0dWFsbHlOdWxsKSAmJiAoIXN0ck51bGwpXG4gICAgfVxuXG4gICAgcm1Ub2tlbigpIHtcbiAgICAgICAgdGhpcy50b2tlbih7IGluZDogbnVsbCwgc2lkZTogbnVsbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZW50ZW5jZSgpOiBzdHJpbmc7XG4gICAgc2VudGVuY2UodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIHNlbnRlbmNlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYuc2VudGVuY2VcblxuICAgICAgICB0aGlzLl9jb25mLnNlbnRlbmNlID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyO1xuICAgIHRocmVzaG9sZCh2YWw6IG51bWJlcik6IHRoaXM7XG4gICAgdGhyZXNob2xkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi50aHJlc2hvbGQ7XG5cbiAgICAgICAgdGhpcy5fY29uZi50aHJlc2hvbGQgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5oZWFkc1xuICAgIH1cblxuICAgIGxheWVyKCk6IG51bWJlclxuICAgIGxheWVyKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGxheWVyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYubGF5ZXJcblxuICAgICAgICB0aGlzLl9jb25mLmxheWVyID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGVhZFNldCgpOiBTZXQ8bnVtYmVyPjtcbiAgICBoZWFkU2V0KHZhbDogU2V0PG51bWJlcj4pOiB0aGlzO1xuICAgIGhlYWRTZXQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkU2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGVhZFNldCA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi5oZWFkcyA9IHhfLnNldDJTb3J0ZWRBcnJheSh0aGlzLl9oZWFkU2V0KVxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbWV0YU1hdGNoKCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1hdGNoKHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1hdGNoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tZXRhTWF4O1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1heCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtZXRhTWF4KCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1heCh2YWw6IHRwLlNpbXBsZU1ldGEpOiB0aGlzO1xuICAgIG1ldGFNYXgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXRjaDtcblxuICAgICAgICB0aGlzLl9jb25mLm1ldGFNYXRjaCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYXNrSW5kcygpOiBudW1iZXJbXTtcbiAgICBtYXNrSW5kcyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBtYXNrSW5kcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWFza0luZHM7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tYXNrSW5kcyA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwbGF5SW5zcGVjdG9yKCk6IEluc3BlY3Rvck9wdGlvbnM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw6IEluc3BlY3Rvck9wdGlvbnMpOiB0aGlzO1xuICAgIGRpc3BsYXlJbnNwZWN0b3IodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3I7XG5cbiAgICAgICAgdGhpcy5fY29uZi5kaXNwbGF5SW5zcGVjdG9yID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZnNldElkeHMoKTogbnVtYmVyW107XG4gICAgb2Zmc2V0SWR4cyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBvZmZzZXRJZHhzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5vZmZzZXRJZHhzO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbnVtYmVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYub2Zmc2V0SWR4cyA9IFIubWFwKHRvTnVtYmVyLCB2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGVDbHNTZXAoKTogYm9vbGVhbjtcbiAgICBoaWRlQ2xzU2VwKHZhbDogYm9vbGVhbik6IHRoaXM7XG4gICAgaGlkZUNsc1NlcCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuaGlkZUNsc1NlcDtcblxuICAgICAgICB0aGlzLl9jb25mLmhpZGVDbHNTZXAgPSB0cnV0aHkodmFsKTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtb2RlbCgpOiBzdHJpbmc7XG4gICAgbW9kZWwodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIG1vZGVsKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtb2RlbEtpbmQoKTogc3RyaW5nO1xuICAgIG1vZGVsS2luZCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWxLaW5kKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbEtpbmRcbiAgICAgICAgdGhpcy5fY29uZi5tb2RlbEtpbmQgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgb2Zmc2V0IG5lZWRlZCBmb3IgdGhlIG1vZGVsS2luZCBpbiB0aGUgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBvZmZzZXQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlbEtpbmQoKSkge1xuICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZToge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvcnB1cygpOiBzdHJpbmc7XG4gICAgY29ycHVzKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBjb3JwdXModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmNvcnB1c1xuICAgICAgICB0aGlzLl9jb25mLmNvcnB1cyA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBFZGdlLCBFZGdlRGF0YSB9IGZyb20gXCIuL0VkZ2VDb25uZWN0b3JcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uRGF0YSA9IG51bWJlcltdW11cblxuZXhwb3J0IGNvbnN0IHNjYWxlTGluZWFyV2lkdGggPSBvcGFjaXR5ID0+IDUgKiBvcGFjaXR5XjAuMzM7XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25HcmFwaCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uRGF0YT57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICBfY3VycmVudDoge307XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uRGF0YTsgLy8gVGhlIHBhc3NlZCBkYXRhXG4gICAgZWRnZURhdGE6IEVkZ2VEYXRhOyAvLyBBIHdyYXBwZXIgYXJvdW5kIF9kYXRhLiBVc2VyIHNob3VsZCBub3QgbWluZFxuICAgIHBsb3REYXRhOiBFZGdlW107IC8vIE5lZWRlZCBmb3IgcGxvdHRpbmdcblxuICAgIC8qKiBDT01QT05FTlRTXG4gICAgICogRXhwb3NlIHRoZSBjb21wb25lbnRzIGJlbG9uZ2luZyB0byB0aGUgY2xhc3MgYXMgcHJvcGVydGllcyBvZiB0aGUgY2xhc3MuIFxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNyZWF0ZSBtZXRob2RzIHRoYXQgc3BlY2lmaWNhbGx5IG1vZGlmeSBhIHNpbmdsZSBwYXJ0IG9yIGNvbXBvbmVudCB3aXRob3V0IGhhdmluZyB0byByZXNlbGVjdCBpdC4gXG4gICAgICogTWFrZXMgZm9yIG1vcmUgcmVzcG9uc2l2ZSBhcHBsaWNhdGlvbnNcbiAgICAgKiAqL1xuICAgIHN2ZzogRDNTZWw7XG4gICAgZ3JhcGg6IEQzU2VsO1xuXG4gICAgLy8gVGhlIGJlbG93IGNvbXBvbmVudHMgcmVxdWlyZSBkYXRhXG4gICAgcGF0aHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZXM6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdO1xuICAgIGxpbmtHZW46IGQzLkxpbms8YW55LCBhbnksIGFueT5cblxuICAgIC8vIE9QVElPTlMgV0lUSCBERUZBVUxUU1xuICAgIF90aHJlc2hvbGQgPSAwLjc7IC8vIEFjY3VtdWxhdGlvbiB0aHJlc2hvbGQuIEJldHdlZW4gMC0xXG4gICAgbm9ybUJ5R3JvdXAgPSBmYWxzZTsgLy8gV2hldGhlciB0byBub3JtYWxpemUgY29ubmVjdGlvbiB3aWR0aCBieSBzcmMtZ3JvdXAgb3Igbm90XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge30gLy8gTm8gZXZlbnRzIG5lZWRlZCBmb3IgdGhpcyBvbmVcblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGJveGhlaWdodDogMjYsIC8vIFRoZSBoZWlnaHQgb2YgdGhlIGRpdiBib3hlcyBhcm91bmQgdGhlIFNWRyBlbGVtZW50XG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICBvZmZzZXQ6IDAsIC8vIFNob3VsZCBJIG9mZnNldCB0aGUgbGVmdCBzaWRlIGJ5IDEgb3Igbm90P1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmdyYXBoID0gdGhpcy5zdmcuc2VsZWN0QWxsKGAuYXRuLWN1cnZlYCk7XG4gICAgICAgIHRoaXMubGlua0dlbiA9IGQzLmxpbmtIb3Jpem9udGFsKClcbiAgICAgICAgICAgIC54KGQgPT4gZFswXSlcbiAgICAgICAgICAgIC55KGQgPT4gZFsxXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGNvbm5lY3Rpb25zIGJldHdlZW4gbG9jYXRpb25zIG9mIHRoZSBTVkcgdXNpbmcgRDMncyBsaW5rR2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVDb25uZWN0aW9ucygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5wYXRocykge1xuICAgICAgICAgICAgdGhpcy5wYXRocy5hdHRycyh7XG4gICAgICAgICAgICAgICAgJ2QnOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiB7IHNvdXJjZTogW251bWJlciwgbnVtYmVyXSwgdGFyZ2V0OiBbbnVtYmVyLCBudW1iZXJdIH0gPVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IFswLCBvcC5ib3hoZWlnaHQgKiAoZC5pICsgMC41ICsgb3Aub2Zmc2V0KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFtvcC53aWR0aCwgb3AuYm94aGVpZ2h0ICogKGQuaiArIDAuNSldIC8vICsgMiBhbGxvd3Mgc21hbGwgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtHZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2xhc3MnOiAnYXRuLWN1cnZlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyYy1pZHhcIiwgKGQsIGkpID0+IGQuaSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRhcmdldC1pZHhcIiwgKGQsIGkpID0+IGQuaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGhlaWdodCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAodGhpcy5zdmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdmcuYXR0cihcImhlaWdodFwiLCB0aGlzLm9wdGlvbnMuaGVpZ2h0ICsgKG9wLm9mZnNldCAqIHRoaXMub3B0aW9ucy5ib3hoZWlnaHQpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgd2lkdGggb2YgdGhlIFNWR1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwid2lkdGhcIiwgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgT3BhY2l0eSBvZiB0aGUgbGluZXMgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGF0aHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gcGF0aHMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuYXR0cignb3BhY2l0eScsIChkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkLmldKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ3N0cm9rZS13aWR0aCcsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5vcGFjaXR5U2NhbGVzW2QuaV0oZC52KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVMaW5lYXJXaWR0aCh2YWwpIC8vNSAqIHZhbF4wLjMzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXJlbmRlciB0aGUgZ3JhcGggaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRhdGEgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGggIT0gbnVsbCkge1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmF0bi1jdXJ2ZVwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucGxvdERhdGFcblxuICAgICAgICAgICAgdGhpcy5wYXRocyA9IHRoaXMuZ3JhcGhcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgIC5qb2luKCdwYXRoJyk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBvcGFjaXR5IGFjY29yZGluZyB0byB0aGUgdmFsdWVzIG9mIHRoZSBkYXRhLCBmcm9tIDAgdG8gbWF4IG9mIGNvbnRhaW5lZCBkYXRhXG4gICAgICogTm9ybWFsaXplIGJ5IGVhY2ggc291cmNlIHRhcmdldCwgb3IgYWNyb3NzIHRoZSB3aG9sZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2NhbGVzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcblxuICAgICAgICAvLyBHcm91cCBub3JtYWxpemF0aW9uXG4gICAgICAgIGlmICh0aGlzLm5vcm1CeUdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmVkZ2VEYXRhLmV4dGVudCgxKTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAodGhpcy5vcGFjaXR5U2NhbGVzIGFzIGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgMC45XSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXphdGlvbiBhY3Jvc3MgdGhlIHdob2xlXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWF4SW4gPSBkMy5tYXgodGhpcy5wbG90RGF0YS5tYXAoKGQpID0+IGQudikpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMucHVzaChkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIG1heEluXSlcbiAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSBkYXRhIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBkYXRhKCk6IEF0dGVudGlvbkRhdGFcbiAgICBkYXRhKHZhbHVlOiBBdHRlbnRpb25EYXRhKTogdGhpc1xuICAgIGRhdGEodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RhdGEgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lZGdlRGF0YSA9IG5ldyBFZGdlRGF0YSh2YWx1ZSk7XG4gICAgICAgIHRoaXMucGxvdERhdGEgPSB0aGlzLmVkZ2VEYXRhLmZvcm1hdCh0aGlzLl90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSBoZWlnaHQgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGhlaWdodCgpOiBudW1iZXJcbiAgICBoZWlnaHQodmFsdWU6IG51bWJlcik6IHRoaXNcbiAgICBoZWlnaHQodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSB3aWR0aCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgd2lkdGgoKTogbnVtYmVyXG4gICAgd2lkdGgodmFsdWU6IG51bWJlcik6IHRoaXNcbiAgICB3aWR0aCh2YWx1ZT86IG51bWJlcik6IHRoaXMgfCBudW1iZXIge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHRocmVzaG9sZCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgdGhyZXNob2xkKCk6IG51bWJlclxuICAgIHRocmVzaG9sZCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIHRocmVzaG9sZCh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90aHJlc2hvbGQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogQXR0ZW50aW9uRGF0YSkge1xuICAgICAgICB0aGlzLnN2Zy5odG1sKCcnKVxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCJcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5cbi8vIFRoZSBiZWxvdyB0d28gKGludGVyZmFjZSBhbmQgZnVuY3Rpb24pIGNhbiBiZWNvbWUgYSBjbGFzc1xuZXhwb3J0IHR5cGUgQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgcm93czogbnVtYmVyW11bXSxcbiAgICBsYWJlbHM6IG51bWJlcltdLFxuICAgIG1heDogbnVtYmVyLFxufVxuXG4vKipcbiAqIEZyb20gYW4gYXR0ZW50aW9uIG1hdHJpeCBzZWxlY3RlZCBieSBsYXllciwgc2hvdyBhIHN1bW1hcnkgb2YgdGhlIGF0dGVudGlvbnMgYmVsb25naW5nIHRvIGVhY2ggaGVhZC5cbiAqIFxuICogQHBhcmFtIGhlYWRNYXQgVGhlIG1hdHJpeCByZXByZXNlbnRpbmcgYWxsIHRoZSBhdHRlbnRpb25zIGJ5IGhlYWQgKGxheWVyIGFscmVhZHkgc2VsZWN0ZWQpXG4gKiBAcGFyYW0gaGVhZExpc3QgVGhlIGhlYWRzIHRoYXQgYXJlIHNlbGVjdGVkXG4gKiBAcGFyYW0gc2lkZSBJcyB0aGlzIHRoZSByaWdodCBvciB0aGUgbGVmdCBkaXNwbGF5P1xuICogQHJldHVybnMgSW5mb3JtYXRpb24gbmVlZGVkIHRvIGxhYmVsIHRoZSBoZWFkYm94XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRlbnRpb25JbmZvKGhlYWRNYXQ6IG51bWJlcltdW11bXSwgaGVhZExpc3Q6IG51bWJlcltdLCBzaWRlOiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9IFwibGVmdFwiKTogQXR0ZW50aW9uSGVhZEJveEkge1xuICAgIC8vIENvbGxlY3Qgb25seSBmcm9tIGhlYWRsaXN0LCBhdmVyYWdlIGVhY2ggaGVhZCwgdHJhbnNwb3NlIHRvIGVhc2UgaXRlcmF0aW9uXG4gICAgaWYgKGhlYWRMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiBbW11dLFxuICAgICAgICAgICAgbGFiZWxzOiBbXSxcbiAgICAgICAgICAgIG1heDogMCxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBheGlzOiBudW1iZXIgPSBzaWRlID09IFwibGVmdFwiID8gMiA6IDE7XG5cbiAgICAvLyBhdmVyYWdlIGFjcm9zcyB0aGUgYXhpcyByZXByZXNlbnRpbmcgdGhlIGF0dGVudGlvbnMuXG4gICAgbGV0IGdhdGhlcmVkTWF0ID0gdGYudGVuc29yM2QoaGVhZE1hdCkuZ2F0aGVyKGhlYWRMaXN0LCAwKS5tZWFuKFtheGlzXSkudHJhbnNwb3NlKCk7XG5cbiAgICBjb25zdCByb3dJbmZvID0gPG51bWJlcltdW10+Z2F0aGVyZWRNYXQuYXJyYXlTeW5jKCk7XG5cbiAgICBjb25zdCBvdXQ6IEF0dGVudGlvbkhlYWRCb3hJID0ge1xuICAgICAgICByb3dzOiByb3dJbmZvLFxuICAgICAgICBsYWJlbHM6IGhlYWRMaXN0LFxuICAgICAgICBtYXg6IDxudW1iZXI+Z2F0aGVyZWRNYXQubWF4KCkuYXJyYXlTeW5jKCksXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dFxufVxuXG5pbnRlcmZhY2UgQ3VycmVudE9wdGlvbnMge1xuICAgIGhlYWRIZWlnaHQ6IG51bWJlclxuICAgIGhlYWRXaWR0aDogbnVtYmVyXG4gICAgeFBhZDogbnVtYmVyXG4gICAgeVBhZDogbnVtYmVyXG4gICAgYm94V2lkdGg6IG51bWJlclxuICAgIHRvdGFsV2lkdGg6IG51bWJlclxuICAgIHRvdGFsSGVpZ2h0OiBudW1iZXJcbn07XG5cbmV4cG9ydCBjbGFzcyBBdHRlbnRpb25IZWFkQm94IGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25IZWFkQm94ST57XG4gICAgY3NzX25hbWUgPSAnJztcbiAgICByb3dDc3NOYW1lID0gJ2F0dC1oZWFkJztcbiAgICBib3hDc3NOYW1lID0gJ2F0dC1yZWN0JztcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X1Jvd01vdXNlT3V0XCIsXG4gICAgICAgIGJveE1vdXNlT3ZlcjogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3ZlclwiLFxuICAgICAgICBib3hNb3VzZU91dDogXCJBdHRlbnRpb25IZWFkQm94X0JveE1vdXNlT3V0XCIsXG4gICAgICAgIGJveENsaWNrOiBcIkF0dGVudGlvbkhlYWRCb3hfQm94Q2xpY2tcIixcbiAgICB9O1xuXG4gICAgX2RhdGE6IEF0dGVudGlvbkhlYWRCb3hJO1xuXG4gICAgX2N1cnJlbnQ6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+ID0ge31cblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGJveERpbTogMjYsXG4gICAgICAgIHlzY2FsZTogMSwgLy8gQW1vdW50IHRvIHNjYWxlIGJveGhlaWdodCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICB4c2NhbGU6IDAuNSwgLy8gQW1vdW50IHRvIHNjYWxlIGJveHdpZHRoIHRvIGdldCBpbmRpdmlkdWFsIGhlYWRzXG4gICAgICAgIHNpZGU6IFwibGVmdFwiLFxuICAgICAgICBtYXhXaWR0aDogMjAwLCAvLyBNYXhpbXVtIHdpZHRoIG9mIFNWR1xuICAgICAgICBvZmZzZXQ6IDAsIC8vIDEgaWYgZm9yIGF1dG9yZWdyZXNzaXZlIG1vZGVsc1xuICAgIH07XG5cbiAgICAvLyBEMyBDb21wb25lbnRzXG4gICAgaGVhZFJvd3M6IEQzU2VsO1xuICAgIGhlYWRDZWxsczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlOiBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIF9pbml0KCkge1xuICAgICAgICB0aGlzLmhlYWRSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5yb3dDc3NOYW1lfWApXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93cy5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgMV0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ3VycmVudCgpOiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMuX2N1cnJlbnRcblxuICAgICAgICBjb25zdCBuSGVhZHMgPSB0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoXG4gICAgICAgIGNvbnN0IGJhc2VIZWFkV2lkdGggPSBvcC5ib3hEaW0gKiBvcC54c2NhbGVcblxuICAgICAgICAvLyBTY2FsZSBoZWFkd2lkdGggYWNjb3JkaW5nIHRvIG1heGltdW0gd2lkdGhcbiAgICAgICAgY29uc3QgZ2V0SGVhZFNjYWxlID0gKG5IKSA9PiAoTWF0aC5taW4ob3AubWF4V2lkdGggLyBuSCwgYmFzZUhlYWRXaWR0aCkgLyBiYXNlSGVhZFdpZHRoKSAqIG9wLnhzY2FsZTtcblxuICAgICAgICBjdXIuaGVhZEhlaWdodCA9IG9wLmJveERpbSAqIG9wLnlzY2FsZTtcbiAgICAgICAgY3VyLmhlYWRXaWR0aCA9IGdldEhlYWRTY2FsZShuSGVhZHMpICogb3AuYm94RGltO1xuICAgICAgICBjdXIueFBhZCA9IGN1ci5oZWFkV2lkdGg7XG4gICAgICAgIGN1ci55UGFkID0gKG9wLmJveERpbSAtIGN1ci5oZWFkSGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgY29uc3QgZ2V0Qm94V2lkdGggPSAoaGVhZFdpZHRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXhCd2lkdGggPSAxMDA7XG4gICAgICAgICAgICBjb25zdCBid2lkdGggPSB0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBkMy5zY2FsZUxpbmVhclxuICAgICAgICAgICAgaWYgKGJ3aWR0aCA+IG1heEJ3aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjdXIuYm94V2lkdGggPSAodGhpcy5fZGF0YS5yb3dzWzBdLmxlbmd0aCAqIGN1ci5oZWFkV2lkdGgpO1xuICAgICAgICBjdXIudG90YWxXaWR0aCA9ICgyICogY3VyLnhQYWQpICsgY3VyLmJveFdpZHRoO1xuICAgICAgICBjdXIudG90YWxIZWlnaHQgPSAob3AuYm94RGltICogKHRoaXMuX2RhdGEucm93cy5sZW5ndGggKyBvcC5vZmZzZXQpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBib3hFdmVudCA9IChpKSA9PiB7IHJldHVybiB7IGluZDogaSwgc2lkZTogb3Auc2lkZSwgaGVhZDogc2VsZi5fZGF0YS5sYWJlbHNbaV0gfSB9XG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMudXBkYXRlQ3VycmVudCgpXG5cbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuXG4gICAgICAgIHRoaXMucGFyZW50XG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIGN1ci50b3RhbFdpZHRoKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgY3VyLnRvdGFsSGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHtzZWxmLnJvd0Nzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKHNlbGYuX2RhdGEucm93cylcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBjbGFzczogKGQsIGkpID0+IGAke3NlbGYucm93Q3NzTmFtZX0gJHtzZWxmLnJvd0Nzc05hbWV9LSR7aX1gLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY3VyLnhQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogKG9wLmJveERpbSAqIChpICsgb3Aub2Zmc2V0KSkgKyBjdXIueVBhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmJveFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgeyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaGVhZENlbGxzID0gdGhpcy5oZWFkUm93c1xuICAgICAgICAgICAgLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGQgPT4gZClcbiAgICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgeDogKGQsIGkpID0+IGkgKiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHRoaXMuYm94Q3NzTmFtZSxcbiAgICAgICAgICAgICAgICBoZWFkOiAoZCwgaSkgPT4gc2VsZi5fZGF0YS5sYWJlbHNbaV0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5oZWFkV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXIuaGVhZEhlaWdodCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAoZDogbnVtYmVyKSA9PiB0aGlzLm9wYWNpdHlTY2FsZShkKSxcbiAgICAgICAgICAgICAgICBmaWxsOiBcImJsdWVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdmVyLCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFwcGVuZChcInN2Zzp0aXRsZVwiKVxuICAgICAgICAgICAgLnRleHQoKGQsIGkpID0+IFwiSGVhZCBcIiArIChzZWxmLl9kYXRhLmxhYmVsc1tpXSArIDEpKVxuICAgIH1cblxuXG4gICAgX3dyYW5nbGUoZGF0YTogQXR0ZW50aW9uSGVhZEJveEkpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlID0gdGhpcy5vcGFjaXR5U2NhbGUuZG9tYWluKFswLCBkYXRhLm1heF0pXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogQXR0ZW50aW9uSGVhZEJveEkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgfVxufSIsImltcG9ydCB7VkNvbXBvbmVudH0gZnJvbSAnLi9WaXNDb21wb25lbnQnXG5pbXBvcnQge3NwYWN5Q29sb3JzfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtTVkd9IGZyb20gJy4uL2V0Yy9TVkdwbHVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCc7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyJztcblxuaW50ZXJmYWNlIE1hcmdpbkluZm8ge1xuICAgIHRvcDogbnVtYmVyLFxuICAgIGJvdHRvbTogbnVtYmVyLFxuICAgIHJpZ2h0OiBudW1iZXIsXG4gICAgbGVmdDogbnVtYmVyXG59XG5cbi8vIERlcGVuZGVudCBvbiB0aGUgb3B0aW9ucyBpbiB0aGUgcmVzcG9uc2VcbnR5cGUgTWF0Y2hlZE1ldGFTZWxlY3Rpb25zID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImVudFwiXG5cbmludGVyZmFjZSBNYXRjaGVkTWV0YUNvdW50IHtcbiAgICBwb3M6IG51bWJlclxuICAgIGRlcDogbnVtYmVyXG4gICAgaXNfZW50OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIE1heEF0dE1ldGFDb3VudCB7XG4gICAgb2Zmc2V0OiBudW1iZXJcbn1cblxudHlwZSBNYXRjaGVkRGF0YUludGVyZmFjZSA9IE1hdGNoZWRNZXRhQ291bnRcbnR5cGUgTWF4QXR0RGF0YUludGVyZmFjZSA9IE1heEF0dE1ldGFDb3VudFxudHlwZSBEYXRhSW50ZXJmYWNlID0gTWF0Y2hlZERhdGFJbnRlcmZhY2UgfCBNYXhBdHREYXRhSW50ZXJmYWNlXG5cbmludGVyZmFjZSBDb3VudGVkSGlzdCB7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjb3VudDogbnVtYmVyXG59XG5cbnR5cGUgUmVuZGVyRGF0YUludGVyZmFjZSA9IENvdW50ZWRIaXN0W11cblxuXG4vKipcbiAqICBEYXRhIGZvcm1hdHRpbmcgZnVuY3Rpb25zXG4gKi9cbmNvbnN0IHRvUmVuZGVyRGF0YSA9IChvYmo6IHtbczogc3RyaW5nXTogbnVtYmVyfSk6IFJlbmRlckRhdGFJbnRlcmZhY2UgPT4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGssIGkpID0+IHtcbiAgICByZXR1cm4ge2xhYmVsOiBrLCBjb3VudDogb2JqW2tdfVxufSlcblxuY29uc3QgdG9TdHJpbmdPck51bSA9IChhOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5hID0gK2FcbiAgICBpZiAoaXNOYU4obmEpKSB7XG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuICAgIHJldHVybiBuYVxufVxuXG5jb25zdCBzb3J0QnlMYWJlbCA9IFIuc29ydEJ5KFIuY29tcG9zZSh0b1N0cmluZ09yTnVtLCBSLnByb3AoJ2xhYmVsJykpKVxuY29uc3Qgc29ydEJ5Q291bnQgPSBSLnNvcnRCeShSLnByb3AoJ2NvdW50JykpXG5cbmNvbnN0IHRvT3JkZXJlZFJlbmRlciA9IFIuY29tcG9zZShcbiAgICBSLnJldmVyc2UsXG4gICAgLy8gQHRzLWlnbm9yZSAtLSBUT0RPOiBmaXhcbiAgICBzb3J0QnlDb3VudCxcbiAgICB0b1JlbmRlckRhdGFcbilcblxuZXhwb3J0IGNsYXNzIENvcnB1c0hpc3RvZ3JhbTxUPiBleHRlbmRzIFZDb21wb25lbnQ8VD4ge1xuXG4gICAgY3NzX25hbWUgPSAnJ1xuXG4gICAgc3RhdGljIGV2ZW50cyA9IHt9XG5cbiAgICBfY3VycmVudCA9IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIHdpZHRoOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEMyBDT01QT05FTlRTXG4gICAgc3ZnOiBEM1NlbFxuXG4gICAgb3B0aW9uczoge1xuICAgICAgICBtYXJnaW46IE1hcmdpbkluZm9cbiAgICAgICAgYmFyV2lkdGg6IG51bWJlclxuICAgICAgICB3aWR0aDogbnVtYmVyXG4gICAgICAgIGhlaWdodDogbnVtYmVyXG4gICAgICAgIHZhbDogc3RyaW5nXG4gICAgICAgIHhMYWJlbFJvdDogbnVtYmVyXG4gICAgICAgIHhMYWJlbE9mZnNldDogbnVtYmVyXG4gICAgICAgIHlMYWJlbE9mZnNldDogbnVtYmVyXG4gICAgfVxuXG4gICAgYXhlcyA9IHtcbiAgICAgICAgeDogZDMuc2NhbGVCYW5kKCksXG4gICAgICAgIHk6IGQzLnNjYWxlTGluZWFyKCksXG4gICAgfVxuXG5cbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucz17fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDUwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyV2lkdGg6IDI1LFxuICAgICAgICAgICAgd2lkdGg6IDE4NSxcbiAgICAgICAgICAgIGhlaWdodDogMjMwLFxuICAgICAgICAgICAgdmFsOiBcInBvc1wiLCAvLyBDaGFuZ2UgRGVmYXVsdCwgcGFzcyB0aHJvdWdoIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICB4TGFiZWxSb3Q6IDQ1LFxuICAgICAgICAgICAgeExhYmVsT2Zmc2V0OiAxNSxcbiAgICAgICAgICAgIHlMYWJlbE9mZnNldDogNSxcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKClcbiAgICB9XG5cbiAgICBtZXRhKCk6TWF0Y2hlZE1ldGFTZWxlY3Rpb25zXG4gICAgbWV0YSh2YWw6TWF0Y2hlZE1ldGFTZWxlY3Rpb25zKTogdGhpc1xuICAgIG1ldGEodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLnZhbCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5fZGF0YSlcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfaW5pdCgpIHt9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVhBeGlzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gb3Aud2lkdGggLSBvcC5tYXJnaW4ubGVmdCAtIG9wLm1hcmdpbi5yaWdodFxuXG4gICAgICAgIHRoaXMuYXhlcy54XG4gICAgICAgICAgICAuZG9tYWluKFIubWFwKFIucHJvcCgnbGFiZWwnKSwgc2VsZi5yZW5kZXJEYXRhKSlcbiAgICAgICAgICAgIC5yYW5nZVJvdW5kKFswLCB3aWR0aF0pXG4gICAgICAgICAgICAucGFkZGluZygwLjEpXG5cbiAgICAgICAgdGhpcy5fY3VycmVudC5jaGFydC53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlWUF4aXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3AuaGVpZ2h0IC0gb3AubWFyZ2luLnRvcCAtIG9wLm1hcmdpbi5ib3R0b21cblxuICAgICAgICB0aGlzLmF4ZXMueVxuICAgICAgICAgICAgLmRvbWFpbihbMCwgK2QzLm1heChSLm1hcChSLnByb3AoJ2NvdW50JyksIHNlbGYucmVuZGVyRGF0YSkpXSlcbiAgICAgICAgICAgIC5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQXhlcygpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVYQXhpcygpXG4gICAgICAgIHRoaXMuY3JlYXRlWUF4aXMoKVxuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gZGF0YVt0aGlzLm9wdGlvbnMudmFsXVxuICAgICAgICByZXR1cm4gdG9PcmRlcmVkUmVuZGVyKG91dClcbiAgICB9XG5cbiAgICB3aWR0aCgpOm51bWJlclxuICAgIHdpZHRoKHZhbDpudW1iZXIpOnRoaXNcbiAgICB3aWR0aCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMud2lkdGggPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVYQXhpcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWlnaHQoKTpudW1iZXJcbiAgICBoZWlnaHQodmFsOm51bWJlcik6dGhpc1xuICAgIGhlaWdodCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVlBeGlzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlV2lkdGgoKSB7XG4gICAgICAgIHRoaXMuc3ZnLmF0dHIoJ3dpZHRoJywgdGhpcy5vcHRpb25zLndpZHRoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGVpZ2h0KCkge1xuICAgICAgICB0aGlzLnN2Zy5hdHRyKCdoZWlnaHQnLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KVxuICAgIH1cblxuICAgIHByaXZhdGUgZmlnV2lkdGgoZGF0YTogUmVuZGVyRGF0YUludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIChkYXRhLmxlbmd0aCAqIG9wLmJhcldpZHRoKSArIG9wLm1hcmdpbi5sZWZ0ICsgb3AubWFyZ2luLnJpZ2h0XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOlJlbmRlckRhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudDtcblxuICAgICAgICB0aGlzLnBhcmVudC5odG1sKCcnKVxuICAgICAgICB0aGlzLnN2ZyA9IHRoaXMucGFyZW50XG5cbiAgICAgICAgdGhpcy5jcmVhdGVBeGVzKCk7XG4gICAgICAgIHRoaXMud2lkdGgodGhpcy5maWdXaWR0aChkYXRhKSk7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBheGVzXG4gICAgICAgIGNvbnN0IGcgPSBzZWxmLnN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHt4OiBvcC5tYXJnaW4ubGVmdCwgeTpvcC5tYXJnaW4udG9wfSkpXG5cbiAgICAgICAgLy8gSGFjayB0byBhbGxvdyBjbGVhcmluZyB0aGlzIGhpc3RvZ3JhbXMgdG8gd29ya1xuICAgICAgICBzZWxmLmJhc2UgPSBnXG5cbiAgICAgICAgLy8gRml4IGJlbG93IGZvciBwb3NpdGlvbmFsIGNoYW5naW5nXG4gICAgICAgICAgICBjb25zdCBheGlzQm90dG9tID0gZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSh7eDogMCwgeTpjdXJyLmNoYXJ0LmhlaWdodH0pKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2VsZi5heGVzLngpKVxuXG4gICAgICAgICAgICBpZiAob3AudmFsICE9IFwib2Zmc2V0XCIpIHtcbiAgICAgICAgICAgICAgICBheGlzQm90dG9tXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCBvcC55TGFiZWxPZmZzZXQpICAgLy8gTW92ZSBiZWxvdyB0aGUgYXhpc1xuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgb3AueExhYmVsT2Zmc2V0KSAgLy8gT2Zmc2V0IHRvIHRoZSByaWdodCBhIGJpdFxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcucm90YXRlKG9wLnhMYWJlbFJvdCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHNlbGYuYXhlcy55KSlcblxuICAgICAgICBnLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgIC5qb2luKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcbiAgICAgICAgICAgIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLmF4ZXMueChkLmxhYmVsKTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLmF4ZXMueShkLmNvdW50KTsgfSlcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgc2VsZi5heGVzLnguYmFuZHdpZHRoKCkpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjdXJyLmNoYXJ0LmhlaWdodCAtIHNlbGYuYXhlcy55KGQuY291bnQpOyB9KVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgayA9PiBzcGFjeUNvbG9ycy5jb2xvclNjYWxlW29wLnZhbF0oay5sYWJlbCkpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQge2QzUywgRDNTZWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuaW1wb3J0ICcuLi9ldGMveGQzJ1xuXG4vLyBIZWxwZXJzXG5jb25zdCBjdXJyTWF0Y2hJZHggPSAoZWxlbSkgPT4gKyg8RWxlbWVudD5lbGVtLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgnbWF0Y2hpZHgnKVxuY29uc3QgY3VyclJvd051bSA9IChlbGVtKSA9PiArKDxFbGVtZW50PmVsZW0ucGFyZW50Tm9kZSkuZ2V0QXR0cmlidXRlKCdyb3dudW0nKVxuY29uc3QgYmFja2dyb3VuZENvbG9yID0geCA9PiBgcmdiYSgxMjgsIDAsIDE1MCwgJHswLjYqeH0pYFxuXG5leHBvcnQgY2xhc3MgQ29ycHVzSW5zcGVjdG9yIGV4dGVuZHMgVkNvbXBvbmVudDx0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXT57XG4gICAgY3NzX25hbWUgPSAnY29ycHVzLWluc3BlY3Rvcic7XG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgX2RhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdOyAvLyBUaGUgcGFzc2VkIGRhdGFcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJDb3JwdXNJbnNwZWN0b3Jfcm93TW91c2VPdmVyXCIsXG4gICAgICAgIHJvd01vdXNlT3V0OiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dNb3VzZU91dFwiLFxuICAgICAgICByb3dDbGljazogXCJDb3JwdXNJbnNwZWN0b3Jfcm93Q2xpY2tcIixcbiAgICAgICAgcm93RGJsQ2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd0RibENsaWNrXCIsXG4gICAgICAgIGNlbGxNb3VzZU92ZXI6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxNb3VzZU92ZXJcIixcbiAgICAgICAgY2VsbE1vdXNlT3V0OiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsTW91c2VPdXRcIixcbiAgICAgICAgY2VsbENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsQ2xpY2tcIixcbiAgICAgICAgY2VsbERibENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsRGJsQ2xpY2tcIixcbiAgICB9XG5cbiAgICBvcHRpb25zID0ge31cblxuICAgIC8vIENPTVBPTkVOVFNcbiAgICBpbnNwZWN0b3JSb3dzOiBEM1NlbFxuICAgIGluc3BlY3RvckNlbGxzOiBEM1NlbFxuICAgIHNjYWxlciA9IGQzLnNjYWxlUG93KCkucmFuZ2UoWzAsMC45XSkuZXhwb25lbnQoMilcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzpTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5zdXBlckluaXRIVE1MKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUm93cygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcblxuICAgICAgICB0aGlzLmluc3BlY3RvclJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKFwiLmluc3BlY3Rvci1yb3dcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbnNwZWN0b3Itcm93JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgbWF0Y2hJZHg6IGQgPT4gZC5pbmRleCxcbiAgICAgICAgICAgICAgICByb3dOdW06IChkLCBpKSA9PiBpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c0luc3BlY3Rvci5ldmVudHMucm93TW91c2VPdmVyLCB7fSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb29sdGlwKCkge1xuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzID0gdGhpcy5pbnNwZWN0b3JDZWxsc1xuICAgICAgICAgICAgLmNsYXNzZWQoJ2NlbGx0b29sdGlwJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hcHBlbmQoJ3NwYW4nKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3Rvb2x0aXB0ZXh0JywgdHJ1ZSlcbiAgICAgICAgICAgIC5odG1sKChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50aXR5U3RyID0gZC5pc19lbnQgPyBcIjxicj5FbnRpdHlcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSAoPEVsZW1lbnQ+bltpXS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ2F0dCcpLnNsaWNlKDAsIDcpXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0U3RyID0gYDxicj5BdHRlbnRpb246ICR7YXR0fWBcblxuICAgICAgICAgICAgICAgIHJldHVybiBgUE9TOiAke2QucG9zLnRvTG93ZXJDYXNlKCl9PGJyPkRFUDogJHtkLmRlcC50b0xvd2VyQ2FzZSgpfWAgKyBlbnRpdHlTdHIgKyBhdHRTdHJcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzID0gdGhpcy5pbnNwZWN0b3JSb3dzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1jZWxsJylcbiAgICAgICAgICAgIC5kYXRhKChkOnRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnMpXG4gICAgICAgICAgICAuam9pbignZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbnNwZWN0b3ItY2VsbCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignaW5kZXgtb2Zmc2V0JywgKGQsIGksIG46SFRNTEVsZW1lbnRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoSWR4ID0gY3Vyck1hdGNoSWR4KG5baV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgLSBtYXRjaElkeCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHBvczogZCA9PiBkLnBvcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIGRlcDogZCA9PiBkLmRlcC50b0xvd2VyQ2FzZSgpLCBcbiAgICAgICAgICAgICAgICBpc19lbnQ6IGQgPT4gZC5pc19lbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGV4dChkID0+IGQudG9rZW4ucmVwbGFjZShcIlxcdTAxMjBcIiwgXCIgXCIpKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21hdGNoZWQtY2VsbCcsIGQgPT4gZC5pc19tYXRjaClcblxuICAgICAgICAvLyBIaWdobGlnaHQgdGhlIGNlbGxzIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgdGhpcy5pbnNwZWN0b3JDZWxscy5lYWNoKChkLGksbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gY3Vyck1hdGNoSWR4KG5baV0pXG4gICAgICAgICAgICBpZiAoaSA9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSBkLmlud2FyZFxuICAgICAgICAgICAgICAgIGNvbnN0IG1heEF0dCA9ICtkMy5tYXgoYXR0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJSb3cgPSBjdXJyUm93TnVtKG5baV0pXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVyID0gc2VsZi5zY2FsZXIuZG9tYWluKFswLCBtYXhBdHRdKVxuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7Y3VyclJvd30nXWApXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoYC5pbnNwZWN0b3ItY2VsbGApXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yKHNjYWxlcihhdHRbaV0pKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXR0JywgKGQsIGkpID0+IGF0dFtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLmFkZFRvb2x0aXAoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKClcbiAgICAgICAgdGhpcy5jcmVhdGVDZWxscygpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgX3dyYW5nbGUoZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW10pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGFcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICAvLyBSZW1lbWJlciB0aGF0IHRoaXMuX2RhdGEgaXMgZGVmaW5lZCBpbiB3cmFuZ2xlIHdoaWNoIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIGJlZm9yZSByZW5kZXJcbiAgICAgICAgLy8gYXMgaXMgZGVmaW5lZCBpbiB0aGUgdXBkYXRlIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlzL1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0IHsgc3BhY3lDb2xvcnMgfSBmcm9tIFwiLi4vZXRjL1NwYWN5SW5mb1wiXG5pbXBvcnQgXCIuLi9ldGMveGQzXCJcblxuLy8gTmVlZCBhZGRpdG9pbmFsIGhlaWdodCBpbmZvcm1hdGlvbiB0byByZW5kZXIgYm94ZXNcbmludGVyZmFjZSBCYXNlRGF0YUludGVyZmFjZSBleHRlbmRzIHRwLkZhaXNzU2VhcmNoUmVzdWx0cyB7XG4gICAgaGVpZ2h0OiBudW1iZXJcbn1cbnR5cGUgRGF0YUludGVyZmFjZSA9IEJhc2VEYXRhSW50ZXJmYWNlW11cblxuaW50ZXJmYWNlIENvbG9yTWV0YUJhc2VEYXRhIHtcbiAgICBwb3M6IHN0cmluZ1xuICAgIGRlcDogc3RyaW5nXG4gICAgaXNfZW50OiBib29sZWFuXG4gICAgdG9rZW46IHN0cmluZ1xufVxuXG50eXBlIERpc3BsYXlPcHRpb25zID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImVudFwiXG5cbmZ1bmN0aW9uIG1hbmFnZXJEYXRhMk1hdERhdGEoZGF0YUluOiBEYXRhSW50ZXJmYWNlLCBpbmRleE9mZnNldCA9IDAsIHRvUGljayA9IFsncG9zJ10pIHtcblxuICAgIGNvbnN0IG91dE9mUmFuZ2VPYmo6IENvbG9yTWV0YUJhc2VEYXRhID0ge1xuICAgICAgICBwb3M6IG51bGwsXG4gICAgICAgIGRlcDogbnVsbCxcbiAgICAgICAgaXNfZW50OiBudWxsLFxuICAgICAgICB0b2tlbjogbnVsbCxcbiAgICB9XG5cbiAgICBjb25zdCBjaG9vc2VQcm9wcyA9IFIucGljayh0b1BpY2spXG5cbiAgICBjb25zdCBkYXRhT3V0ID0gZGF0YUluLm1hcChkID0+IHtcbiAgICAgICAgY29uc3Qgd29yZElkeCA9IGQuaW5kZXggKyBpbmRleE9mZnNldDtcbiAgICAgICAgaWYgKCh3b3JkSWR4IDwgMCkgfHwgKHdvcmRJZHggPj0gZC50b2tlbnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBvdXRPZlJhbmdlT2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3T2JqID0gY2hvb3NlUHJvcHMoZC50b2tlbnNbd29yZElkeF0pXG5cbiAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBuZXdPYmopXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhT3V0XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcnB1c01hdE1hbmFnZXIgZXh0ZW5kcyBWQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1tYXQtY29udGFpbmVyJ1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGNlbGxXaWR0aDogMTAsXG4gICAgICAgIHRvUGljazogWydwb3MnXSxcbiAgICAgICAgaWR4czogWy0xLCAwLCAxXSxcbiAgICAgICAgZGl2SG92ZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgIGhlaWdodDogNDAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICBtb3VzZU92ZXI6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU92ZXJcIixcbiAgICAgICAgbW91c2VPdXQ6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU91dFwiLFxuICAgICAgICBjbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX0NsaWNrXCIsXG4gICAgICAgIGRibENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfRGJsQ2xpY2tcIixcbiAgICAgICAgcmVjdE1vdXNlT3ZlcjogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RNb3VzZU92ZXJcIixcbiAgICAgICAgcmVjdE1vdXNlT3V0OiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdE1vdXNlT3V0XCIsXG4gICAgICAgIHJlY3RDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RDbGlja1wiLFxuICAgICAgICByZWN0RGJsQ2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0RGJsQ2xpY2tcIixcbiAgICB9XG5cbiAgICAvLyBUaGUgZDMgY29tcG9uZW50cyB0aGF0IGFyZSBzYXZlZCB0byBtYWtlIHJlbmRlcmluZyBmYXN0ZXJcbiAgICBjb3JwdXNNYXRzOiBEM1NlbFxuICAgIHJvd0dyb3VwczogRDNTZWxcbiAgICBkaXZIb3ZlcjogRDNTZWxcblxuICAgIF9jdXJyZW50ID0ge31cbiAgICByb3dDc3NOYW1lID0gJ2luZGV4LW1hdGNoLXJlc3VsdHMnXG4gICAgY2VsbENzc05hbWUgPSAnaW5kZXgtY2VsbC1yZXN1bHQnXG5cbiAgICBfZGF0YTogRGF0YUludGVyZmFjZVxuXG4gICAgc3RhdGljIGNvbG9yU2NhbGU6IHRwLkNvbG9yTWV0YVNjYWxlID0gc3BhY3lDb2xvcnMuY29sb3JTY2FsZTtcblxuICAgIC8vIFNlbGVjdGlvbnNcbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuaWR4cyA9IFstMSwgMCwgMV07XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBnZXQgaWR4cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pZHhzO1xuICAgIH1cblxuICAgIHNldCBpZHhzKHZhbDogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlkeHMgPSB2YWxcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhdGljIGRvbSBlbGVtZW50c1xuICAgIF9pbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb3JwdXNNYXRzID0gdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKVxuICAgICAgICB0aGlzLnJvd0dyb3VwcyA9IHRoaXMuY29ycHVzTWF0cy5zZWxlY3RBbGwoYC4ke3RoaXMucm93Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLmRpdkhvdmVyID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgndGV4dC1jZW50ZXInLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIud2lkdGgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci5oZWlnaHQpICsgJ3B4JylcblxuICAgICAgICB0aGlzLmRpdkhvdmVyLmFwcGVuZCgncCcpXG4gICAgfVxuXG4gICAgcGljayh2YWw6IERpc3BsYXlPcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b1BpY2sgPSBbdmFsXVxuICAgICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuXG4gICAgYWRkUmlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGFkZGVkSWR4ID0gUi5sYXN0KHRoaXMuaWR4cykgKyAxO1xuICAgICAgICB0aGlzLmlkeHMucHVzaChhZGRlZElkeClcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwicmlnaHRcIilcbiAgICB9XG5cbiAgICBhZGRMZWZ0KCkge1xuICAgICAgICBjb25zdCBhZGRlZElkeCA9IHRoaXMuaWR4c1swXSAtIDE7XG4gICAgICAgIGNvbnN0IGFkZERlY3JlbWVudGVkSGVhZDogKHg6IG51bWJlcltdKSA9PiBudW1iZXJbXSA9IHggPT4gUi5pbnNlcnQoMCwgUi5oZWFkKHgpIC0gMSkoeClcbiAgICAgICAgdGhpcy5pZHhzID0gYWRkRGVjcmVtZW50ZWRIZWFkKHRoaXMuaWR4cylcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwibGVmdFwiKVxuICAgIH1cblxuICAgIGtpbGxSaWdodCgpIHtcbiAgICAgICAgdGhpcy5raWxsKE1hdGgubWF4KC4uLnRoaXMuaWR4cykpXG4gICAgfVxuXG4gICAga2lsbExlZnQoKSB7XG4gICAgICAgIHRoaXMua2lsbChNYXRoLm1pbiguLi50aGlzLmlkeHMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlZGdlIHZhbHVlIGZyb20gY29udGFpbmVkIGluZGV4ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkIEluZGV4IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIGtpbGwoZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChkID09IE1hdGgubWluKC4uLnRoaXMuaWR4cykgfHwgZCA9PSBNYXRoLm1heCguLi50aGlzLmlkeHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZHhzID0gUi53aXRob3V0KFtkXSwgdGhpcy5pZHhzKVxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5vZmZzZXQtJHtkfWApLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZGF0YSh2YWw/OiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIHJlbmRlcmluZyBjb2RlLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIGRhdGEgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKS5yZW1vdmUoKVxuXG4gICAgICAgIHRoaXMuaWR4cy5mb3JFYWNoKChpZHhPZmZzZXQsIGkpID0+IHtcbiAgICAgICAgICAgIHNlbGYuYWRkQ29ycHVzTWF0KGlkeE9mZnNldClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW5vdGhlciB3b3JkJ3MgbWV0YSBpbmZvcm1hdGlvbiBtYXRyaXggY29sdW1uIHRvIGVpdGhlciBzaWRlIG9mIHRoZSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIGlkeE9mZnNldCBEaXN0YW5jZSBvZiB3b3JkIGZyb20gbWF0Y2hlZCB3b3JkIGluIHRoZSBzZW50ZW5jZVxuICAgICAqIEBwYXJhbSB0b1RoZSBJbmRpY2F0ZXMgYWRkaW5nIHRvIHRoZSBcImxlZnRcIiBvciB0byB0aGUgXCJyaWdodFwiIG9mIHRoZSBpbmRleFxuICAgICAqL1xuICAgIGFkZENvcnB1c01hdChpZHhPZmZzZXQ6IG51bWJlciwgdG9UaGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgYm94V2lkdGggPSBvcC5jZWxsV2lkdGggKiBvcC50b1BpY2subGVuZ3RoO1xuICAgICAgICBjb25zdCBib3hIZWlnaHQgPSBSLnN1bShSLm1hcChSLnByb3AoJ2hlaWdodCcpLCB0aGlzLl9kYXRhKSlcblxuICAgICAgICBsZXQgY29ycHVzTWF0O1xuXG4gICAgICAgIGlmICh0b1RoZSA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9UaGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5pbnNlcnQoJ2RpdicsIFwiOmZpcnN0LWNoaWxkXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInRvVGhlIG11c3QgaGF2ZSBhcmd1bWVudCBvZiAnbGVmdCcgb3IgJ3JpZ2h0J1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29ycHVzTWF0ID0gY29ycHVzTWF0XG4gICAgICAgICAgICAuZGF0YShbaWR4T2Zmc2V0XSlcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBjb3JwdXMtbWF0IG9mZnNldC0ke2lkeE9mZnNldH1gKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsIGlkeE9mZnNldClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveEhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIHsgaWR4OiBpLCBvZmZzZXQ6IGQsIHZhbDogc2VsZi5vcHRpb25zLnRvUGlja1swXSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdXQsIHsgaWR4OiBpLCBvZmZzZXQ6IGQgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hZGRSb3dHcm91cChjb3JwdXNNYXQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWF0IFRoZSBiYXNlIGRpdiBvbiB3aGljaCB0byBhZGQgbWF0cmljZXMgYW5kIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dHcm91cChtYXQ6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCBoZWlnaHRzID0gUi5tYXAoUi5wcm9wKCdoZWlnaHQnKSwgdGhpcy5fZGF0YSlcblxuICAgICAgICBjb25zdCBbaGVpZ2h0U3VtLCByYXdIZWlnaHRMaXN0XSA9IFIubWFwQWNjdW0oKHgsIHkpID0+IFtSLmFkZCh4LCB5KSwgUi5hZGQoeCwgeSldLCAwLCBoZWlnaHRzKVxuICAgICAgICBjb25zdCBmaXhMaXN0OiAoeDogbnVtYmVyW10pID0+IG51bWJlcltdID0gUi5jb21wb3NlKFIuZHJvcExhc3QoMSksXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBSLnByZXBlbmQoMClcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBoZWlnaHRMaXN0ID0gZml4TGlzdChyYXdIZWlnaHRMaXN0KVxuXG4gICAgICAgIGNvbnN0IHJvd0dyb3VwID0gbWF0LnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IG1hbmFnZXJEYXRhMk1hdERhdGEoc2VsZi5fZGF0YSwgZCwgb3AudG9QaWNrKSlcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwicm93LW51bVwiLCAoZCxpKSA9PiBpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZCA9PiBkLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gU1ZHLnRyYW5zbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodExpc3RbaV0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIG9wLnRvUGljay5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgc2VsZi5hZGRSZWN0KHJvd0dyb3VwLCAwLCBwcm9wKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFJlY3QoZzogRDNTZWwsIHhTaGlmdDogbnVtYmVyLCBwcm9wOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICBjb25zdCByZWN0cyA9IGcuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG9wLmNlbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGQgPT4gZC5oZWlnaHQgLSAzLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogeFNoaWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMS41LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDb3JwdXNNYXRNYW5hZ2VyLmNvbG9yU2NhbGVbcHJvcF0oZFtwcm9wXSkpXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdldEJhc2VYID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IGdldEJhc2VZID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICBnLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLy8gR2V0IG9mZnNldFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkgLy8gQ29sdW1uXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gK2NvbC5hdHRyKCdvZmZzZXQnKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3Zlciwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpIC8vIENvbHVtblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICtjb2wuYXR0cignb2Zmc2V0JylcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU91dCwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMywgM11cbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpIC0gKG9wLmRpdkhvdmVyLndpZHRoICsgZGl2T2Zmc2V0WzBdKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSAtIChvcC5kaXZIb3Zlci5oZWlnaHQgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3ZlclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIFN0cmluZyh0b3ApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGRbcHJvcF0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIERhdGEgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIF9yZW5kZXIoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAnZDMtYXJyYXknXG5pbXBvcnQgKiBhcyBhdSBmcm9tICcuLi9ldGMvYXJyYXlVdGlscydcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5pbXBvcnQgeyBUeXBlZEFycmF5IH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlL2Rpc3QvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkZ2Uge1xuICAgIGk6IG51bWJlciwgLy8gU291cmNlIGluZGV4XG4gICAgajogbnVtYmVyLCAvLyBUYXJnZXQgaW5kZXhcbiAgICB2OiBudW1iZXIsIC8vIFZhbHVlXG59XG5cbi8qKlxuICogQ29udmVydCBkYXRhIG1hdHJpeCB0byBuZWNlc3NhcnkgZGF0YSBhcnJheSB0byBwYXNzIHRvIFNWRyBjb25uZWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9FZGdlcyAoZGF0YTpudW1iZXJbXVtdLCBjdXRvZmZBbXQ9MSkgOiBFZGdlW10ge1xuICAgIGxldCBvdXRBcnI6IEVkZ2VbXSA9IFtdO1xuICAgIGxldCBjdXRvZmY6IG51bWJlcjtcbiAgICBkYXRhLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBjdXRvZmYgPSBjdXRvZmZBbXQgKiBkMy5zdW0ocm93KTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnI6YXUuU29ydEFycmF5ID0gYXUuc29ydFdpdGhJbmRpY2VzKHJvdyk7XG5cbiAgICAgICAgc29ydGVkQXJyLmFyci5mb3JFYWNoKCh2LGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqOiBFZGdlID0ge1xuICAgICAgICAgICAgICAgICAgICBpOiBpLFxuICAgICAgICAgICAgICAgICAgICBqOiBzb3J0ZWRBcnIuc29ydEluZGljZXNbal0sXG4gICAgICAgICAgICAgICAgICAgIHY6IHYsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dEFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIHJldHVybiBvdXRBcnI7XG59XG4vKipcbiAqIENsYXNzIGZvciBpbXBsZW1lbnRpbmcgb3BlcmF0aW9ucyBvbiBBdHRlbnRpb25HcmFwaCBpbXBsZW1lbnRhdGlvbi4gXG4gKiBDbG9zZWx5IHRpZWQgdG8gW1tBdHRlbnRpb25Db25uZWN0b3JdXVxuICovXG5leHBvcnQgY2xhc3MgRWRnZURhdGEge1xuICAgIHJlYWRvbmx5IHRlbnNEYXRhOnRmLlRlbnNvcjtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgZGF0YTpudW1iZXJbXVtdKXtcbiAgICAgICAgdGhpcy50ZW5zRGF0YSA9IHRmLnRlbnNvcihkYXRhKTtcbiAgICB9XG5cbiAgICBtaW4oYXhpcz86bnVtYmVyKTpUeXBlZEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWluKGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgbWF4KGF4aXM/Om51bWJlcik6VHlwZWRBcnJheXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWF4KGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgZXh0ZW50KGF4aXM/Om51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiBkMy56aXAodGhpcy5taW4oYXhpcyksIHRoaXMubWF4KGF4aXMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgZGF0YSB0byBzZW5kIHRvIFNWRyBjaGFydC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYWNjdW11bGF0ZVRocmVzaCAtIEEgZmxvYXQgYmV0d2VlbiAwIGFuZCAxLCBpbmRpY2F0aW5nIHRoZSBhbW91bnQgb2Ygd2VpZ2h0IHRvIGRpc3BsYXkuIERlZmF1bHRzIHRvIDAuNy5cbiAgICAgKi9cbiAgICBmb3JtYXQgKGFjY3VtdWxhdGVUaHJlc2g9MC43KTpFZGdlW10ge1xuICAgICAgICByZXR1cm4gdG9FZGdlcyh0aGlzLmRhdGEsIGFjY3VtdWxhdGVUaHJlc2gpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuXG50eXBlIGluZm9FdmVudEZyb21JID0gKHNlbDogRDNTZWwsIGk6IG51bWJlcikgPT4gdHAuVG9rZW5FdmVudFxudHlwZSBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIsIGVtYmVkOiBudW1iZXJbXSkgPT4gdHAuVG9rZW5FbWJlZGRpbmdFdmVudFxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dFRva2VucyBleHRlbmRzIFZDb21wb25lbnQ8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPntcblxuICAgIGFic3RyYWN0IGNzc19uYW1lOiBzdHJpbmdcbiAgICBhYnN0cmFjdCBzaWRlOiB0cC5TaWRlT3B0aW9uc1xuICAgIGVJbmZvOiBpbmZvRXZlbnRGcm9tSSA9IChzZWwsIGkpID0+IHsgcmV0dXJuIHsgc2VsOiBzZWwsIHNpZGU6IHRoaXMuc2lkZSwgaW5kOiBpIH0gfVxuICAgIGVFbWJlZGRpbmc6IGluZm9FbWJlZGRpbmdFdmVudEZyb21JID0gKHNlbCwgaSwgZW1iZWQpID0+IHsgcmV0dXJuIHsgc2VsOiBzZWwsIHNpZGU6IHRoaXMuc2lkZSwgaW5kOiBpLCBlbWJlZGRpbmdzOiBlbWJlZCB9IH1cblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHRva2VuTW91c2VPdmVyOiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3ZlclwiLFxuICAgICAgICB0b2tlbk1vdXNlT3V0OiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3V0XCIsXG4gICAgICAgIHRva2VuQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuQ2xpY2tcIixcbiAgICAgICAgdG9rZW5EYmxDbGljazogXCJUZXh0VG9rZW5fVG9rZW5EYmxDbGlja1wiLFxuICAgIH07XG5cbiAgICBkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW107XG5cbiAgICBfY3VycmVudDoge307XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgdGV4dEJveGVzOiBEM1NlbFxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBtYXNrKG1hc2tJbmRzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLnBhcmVudC5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5lYWNoKChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgICAgICAgc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgXy5pbmNsdWRlcyhtYXNrSW5kcywgaSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEVtYmVkZGluZyhpbmQ6IG51bWJlcik6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtpbmRdXG4gICAgfVxuXG4gICAgX2luaXQoKSB7IH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pIHtcbiAgICAgICAgLy8gUmVzZXQgdG9rZW4gZGlzcGxheVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKVxuXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBBZGQgYmxhbmsgZGl2c1xuICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgb2Zmc2V0ICgke3RoaXMuc2lkZX0pOiBgLCBvcC5vZmZzZXQpO1xuICAgICAgICBjb25zdCBibGFua0RpdnMgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuYmxhbmstdGV4dC1ib3hgKVxuXG4gICAgICAgIGJsYW5rRGl2cy5kYXRhKFIucmFuZ2UoMCwgb3Aub2Zmc2V0KSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImJsYW5rLXRleHQtYm94XCIsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChcInRva2VuXCIsIHRydWUpXG4gICAgICAgICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgb3AuYm94aGVpZ2h0ICsgJ3B4JylcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiBcIiAgXCIpXG5cblxuICAgICAgICAvLyBSZW5kZXIgbm9ybWFsIHRleHQgYm94IGRhdGFcbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSA8RDNTZWw+dGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiBgdG9rZW4gJHt0aGlzLmNzc19uYW1lfSB0b2tlbi0ke2l9YClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IGAke3RoaXMuY3NzX25hbWV9LSR7aX1gKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC50ZXh0LnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsLnN0eWxlKCdiYWNrZ3JvdW5kJywgJ2xpZ2h0Ymx1ZScpO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU92ZXIsIHNlbGYuZUluZm8oc2VsLCBpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbC5zdHlsZSgnYmFja2dyb3VuZCcsIDApXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3V0LCBzZWxmLmVJbmZvKHNlbCwgaSkpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkQ2xpY2soc2VsZi50ZXh0Qm94ZXMpXG4gICAgfVxuXG4gICAgYWRkQ2xpY2sodGV4dGJveGVzOiBEM1NlbCl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYudGV4dEJveGVzID0gdGV4dGJveGVzXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCBzZWxmLmVFbWJlZGRpbmcoc2VsLCBpLCBkLmVtYmVkZGluZ3MpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZGJsY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIHNlbGYuZUluZm8oc2VsLCBpKSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRUZXh0VG9rZW4gZXh0ZW5kcyBUZXh0VG9rZW5zIHtcblxuICAgIGNzc19uYW1lID0gJ2xlZnQtdG9rZW4nO1xuICAgIHNpZGU6IHRwLlNpZGVPcHRpb25zID0gJ2xlZnQnO1xuICAgIG9mZnNldDogbnVtYmVyID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBSaWdodFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuICAgIGNzc19uYW1lID0gJ3JpZ2h0LXRva2VuJztcbiAgICBzaWRlOiB0cC5TaWRlT3B0aW9ucyA9ICdyaWdodCdcbiAgICBvZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgSGVuZHJpayBTdHJvYmVsdCAoaGVuZHJpay5zdHJvYmVsdC5jb20pIG9uIDEyLzMvMTYuXG4gKiBNb2RpZmllZCBieSBCZW4gSG9vdmVyIG9uIDQvMTYvMjAxOVxuICovXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7RDNTZWwsIFV0aWx9IGZyb20gXCIuLi9ldGMvVXRpbFwiO1xuaW1wb3J0IHtTaW1wbGVFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQge1NWR30gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCI7XG5cbi8qKlxuICogU2hvdWxkIGhhdmUgVkNvbXBvbmVudEhUTUwgYW5kIFZDb21wb25lbnRTVkdcbiAqIFxuICogQ29tbW9uIFByb3BlcnRpZXM6XG4gKiAtIGV2ZW50c1xuICogLSBldmVudEhhbmRsZXIgKFYgaW1wb3J0YW50KVxuICogLSBvcHRpb25zIChNYWludGFpbnMgcHVibGljIHN0YXRlLiBDYW4gZXhwb3NlIHRoZXNlIHdpdGggZ2V0L3NldCBmdW5jdGlvbnMgd2l0aCBhdXRvIHVwZGF0ZSlcbiAqIC0gX2N1cnJlbnQgKE1haW50YWlucyBwcml2YXRlIHN0YXRlKVxuICogLSBjc3NOYW1lIChzeW5jZWQgd2l0aCBjb3JyZXNwb25kaW5nIENTUyBmaWxlKVxuICogLSBwYXJlbnQgKEhUTUwgaXMgZGl2IGNvbnRhaW5pbmcgdGhlIGJhc2UsIFNWRyBpcyBTVkcgZWxlbWVudClcbiAqIC0gYmFzZSAoSFRNTCBpcyBkaXYgd2l0aCBjc3NfbmFtZSBlc3RhYmxpc2hlZClcbiAqIC0gX2RhdGEgKERhdGEgdXNlZCB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgY29tcG9uZW50KVxuICogLSBfcmVuZGVyRGF0YSAoRGF0YSBuZWVkZWQgdG8gZGlzcGxheS4gVGhpcyBtYXkgbm90IGJlIG5lZWRlZCwgYnV0IGlzIGN1cnJlbnRseSB1c2VkIGluIGhpc3RvZ3JhbSlcbiAqIFxuICogQ29tbW9uIE1ldGhvZHM6XG4gKiAtIGNvbnN0cnVjdG9yXG4gKiAtIF9yZW5kZXIoKSAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB3aXRoIGBfdXBkYXRlRGF0YSgpYCB0aGF0IHVwZGF0ZXMgYWxsIGRhdGEgYXQgb25jZVxuICogLSB1cGRhdGUoKSAgICAgICBDb25zaWRlciByZXBsYWNpbmcgdGhpcyB3aXRoIGBkYXRhKClgIHRoYXQgYXV0byB1cGRhdGVzIGRhdGFcbiAqIC0gcmVkcmF3KClcbiAqIC0gZGVzdHJveSgpXG4gKi9cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZDb21wb25lbnQ8RGF0YUludGVyZmFjZT4ge1xuXG4gICAgLy8gU1RBVElDIEZJRUxEUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0aWMgcHJvcGVydHkgdGhhdCBjb250YWlucyBhbGwgY2xhc3MgcmVsYXRlZCBldmVudHMuXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGFuZCBldmVudCBzdHJpbmdzIGhhdmUgdG8gYmUgdW5pcXVlISFcbiAgICAgKi9cblxuICAgIHN0YXRpYyBldmVudHM6IHt9ID0ge25vRXZlbnQ6ICdWQ29tcG9uZW50X25vRXZlbnQnfTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxheWVycyBpbiBTVkcgIGZvciBiZyxtYWluLGZnLC4uLlxuICAgICAqL1xuICAgIC8vIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBsYXlvdXQ6IHsgbmFtZTogc3RyaW5nLCBwb3M6IG51bWJlcltdIH1bXSA9IFt7bmFtZTogJ21haW4nLCBwb3M6IFswLCAwXX1dO1xuXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7IC8vIE1vc3RseSBvYnNvbGV0ZSwgbmljZSB0byBoYXZlIHNpbXBsZSBJRCB0byBhc3NpZ24gaW4gQ1NTXG4gICAgcHJvdGVjdGVkIHBhcmVudDogRDNTZWw7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgcHJvdGVjdGVkIGJhc2U6IEQzU2VsOyAvLyBNb3N0bHkgb2Jzb2xldGUsIHJlcHJlc2VudHMgPGc+IGluIHN2Z1xuICAgIHByb3RlY3RlZCBsYXllcnM6IHsgbWFpbj86IEQzU2VsLCBmZz86IEQzU2VsLCBiZz86IEQzU2VsLCBba2V5OiBzdHJpbmddOiBEM1NlbCB9OyAvLyBTdGlsbCB1c2VmdWxcbiAgICBwcm90ZWN0ZWQgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXI7XG4gICAgcHJvdGVjdGVkIF92aXNpYmlsaXR5OiB7IGhpZGRlbjogYm9vbGVhbiwgaGlkZUVsZW1lbnQ/OiBEM1NlbCB8IG51bGw7IFtrZXk6IHN0cmluZ106IGFueSB9OyAvLyBFbmFibGVzIHRyYW5zaXRpb25zIGZyb20gdmlzaWJsZSB0byBpbnZpc2libGUuIE1vc3RseSBvYnNvbGV0ZS5cbiAgICBwcm90ZWN0ZWQgX2RhdGE6IERhdGFJbnRlcmZhY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlckRhdGE6IGFueTsgLy8gVW5uZWNlc3NhcnlcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3NzX25hbWU6IHN0cmluZzsgLy8gTWFrZSB0aGUgc2FtZSBhcyB0aGUgY29ycmVzcG9uZGluZyBjc3MgZmlsZVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfY3VycmVudDoge307IC8vIFByaXZhdGUgc3RhdGUgaW5mb3JtYXRpb24gY29udGFpbmVkIGluIHRoZSBvYmplY3QgaXRzZWxmLlxuXG4gICAgLy8gQ09OU1RSVUNUT1IgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaW1wbGUgY29uc3RydWN0b3IuIFN1YmNsYXNzZXMgc2hvdWxkIGNhbGwgQHN1cGVySW5pdChvcHRpb25zKSBhcyB3ZWxsLlxuICAgICAqIHNlZSB3aHkgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDM1OTU5NDMvd2h5LWFyZS1kZXJpdmVkLWNsYXNzLXByb3BlcnR5LXZhbHVlcy1ub3Qtc2Vlbi1pbi10aGUtYmFzZS1jbGFzcy1jb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogdGVtcGxhdGU6XG4gICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAvLyAtLSBhY2Nlc3MgdG8gc3ViY2xhc3MgcGFyYW1zOlxuICAgICAgICB0aGlzLnN1cGVySW5pdChvcHRpb25zKTtcbiAgICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtEM1NlbH0gZDNwYXJlbnQgIEQzIHNlbGVjdGlvbiBvZiBwYXJlbnQgU1ZHIERPTSBFbGVtZW50XG4gICAgICogQHBhcmFtIHtTaW1wbGVFdmVudEhhbmRsZXJ9IGV2ZW50SGFuZGxlciBhIGdsb2JhbCBldmVudCBoYW5kbGVyIG9iamVjdCBvciAnbnVsbCcgZm9yIGxvY2FsIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IFV0aWwuc2ltcGxlVUlkKHt9KTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IGQzcGFyZW50O1xuXG4gICAgICAgIC8vIElmIG5vdCBmdXJ0aGVyIHNwZWNpZmllZCAtIGNyZWF0ZSBhIGxvY2FsIGV2ZW50IGhhbmRsZXIgYm91bmQgdG8gdGhlIGJhcyBlbGVtZW50XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyIHx8XG4gICAgICAgICAgICBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKHRoaXMucGFyZW50Lm5vZGUoKSk7XG5cbiAgICAgICAgLy8gT2JqZWN0IGZvciBzdG9yaW5nIGludGVybmFsIHN0YXRlcyBhbmQgdmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkgPSB7aGlkZGVuOiBmYWxzZX07XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0SFRNTChvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcbiAgICAgICAgdGhpcy5iYXNlID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgICAgLmNsYXNzZWQodGhpcy5jc3NfbmFtZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgdG8gYmUgY2FsbGVkIGFzIGxhc3QgY2FsbCBpbiBzdWJjbGFzcyBjb25zdHJ1Y3Rvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3t9fSBvcHRpb25zXG4gICAgICogQHBhcmFtIGRlZmF1bHRMYXllcnMgLS0gY3JlYXRlIHRoZSBkZWZhdWx0IDxnPiBsYXllcnM6IGJnIC0+IG1haW4gLT4gZmdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3VwZXJJbml0U1ZHKG9wdGlvbnM6IHt9ID0ge30sIGRlZmF1bHRMYXllcnMgPSBbJ2JnJywgJ21haW4nLCAnZmcnXSkge1xuICAgICAgICAvLyBTZXQgZGVmYXVsdCBvcHRpb25zIGlmIG5vdCBzcGVjaWZpZWQgaW4gY29uc3RydWN0b3IgY2FsbFxuICAgICAgICAvLyBjb25zdCBkZWZhdWx0cyA9IHRoaXMuZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIC8vIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICAvLyBjb25zdCBrZXlzID0gbmV3IFNldChbLi4uT2JqZWN0LmtleXMoZGVmYXVsdHMpLCAuLi5PYmplY3Qua2V5cyhvcHRpb25zKV0pO1xuICAgICAgICAvLyBrZXlzLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gKGtleSBpbiBvcHRpb25zKSA/IG9wdGlvbnNba2V5XSA6IGRlZmF1bHRzW2tleV0pO1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSk7XG5cbiAgICAgICAgdGhpcy5sYXllcnMgPSB7fTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJhc2UgZ3JvdXAgZWxlbWVudFxuICAgICAgICBjb25zdCBzdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5iYXNlID0gU1ZHLmdyb3VwKHN2ZyxcbiAgICAgICAgICAgIHRoaXMuY3NzX25hbWUgKyAnIElEJyArIHRoaXMuaWQsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9zKTtcblxuICAgICAgICAvLyBjcmVhdGUgZGVmYXVsdCBsYXllcnM6IGJhY2tncm91bmQsIG1haW4sIGZvcmVncm91bmRcbiAgICAgICAgaWYgKGRlZmF1bHRMYXllcnMpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBvcmRlciBpcyBpbXBvcnRhbnQgIVxuICAgICAgICAgICAgZGVmYXVsdExheWVycy5mb3JFYWNoKGxheWVyID0+e1xuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzW2xheWVyXSA9IFNWRy5ncm91cCh0aGlzLmJhc2UsIGxheWVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gY3JlYXRlIHRoZSBzdGF0aWMgRE9NIGVsZW1lbnRzXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9pbml0KCk7XG5cbiAgICAvLyBEQVRBIFVQREFURSAmIFJFTkRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIEV2ZXJ5IHRpbWUgZGF0YSBoYXMgY2hhbmdlZCwgdXBkYXRlIGlzIGNhbGxlZCBhbmRcbiAgICAgKiB0cmlnZ2VycyB3cmFuZ2xpbmcgYW5kIHJlLXJlbmRlcmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB7Kn0gLS0tXG4gICAgICovXG4gICAgdXBkYXRlKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJlbmRlckRhdGEgPSB0aGlzLl93cmFuZ2xlKGRhdGEpO1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEYXRhIHdyYW5nbGluZyBtZXRob2QgLS0gaW1wbGVtZW50IGluIHN1YmNsYXNzLiBSZXR1cm5zIHRoaXMucmVuZGVyRGF0YS5cbiAgICAgKiBTaW1wbGVzdCBpbXBsZW1lbnRhdGlvbjogYHJldHVybiBkYXRhO2BcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhXG4gICAgICogQHJldHVybnMgeyp9IC0tIGRhdGEgaW4gcmVuZGVyIGZvcm1hdFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfd3JhbmdsZShkYXRhKTtcblxuXG4gICAgLyoqXG4gICAgICogSXMgcmVzcG9uc2libGUgZm9yIG1hcHBpbmcgZGF0YSB0byBET00gZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVuZGVyRGF0YSBwcmUtcHJvY2Vzc2VkICh3cmFuZ2xlZCkgZGF0YVxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3JlbmRlcihyZW5kZXJEYXRhKTogdm9pZDtcblxuXG4gICAgLy8gVVBEQVRFIE9QVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBpbnN0YW5jZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb25seSB0aGUgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSB1cGRhdGVkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZVJlbmRlciBpZiBvcHRpb24gY2hhbmdlIHJlcXVpcmVzIGEgcmUtcmVuZGVyaW5nIChkZWZhdWx0OmZhbHNlKVxuICAgICAqIEByZXR1cm5zIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGVPcHRpb25zKHtvcHRpb25zLCByZVJlbmRlciA9IGZhbHNlfSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGsgPT4gdGhpcy5vcHRpb25zW2tdID0gb3B0aW9uc1trXSk7XG4gICAgICAgIGlmIChyZVJlbmRlcikgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT0gQ09OVkVOSUVOQ0UgPT09PVxuICAgIHJlZHJhdygpe1xuICAgICAgICB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cbiAgICBzZXRIaWRlRWxlbWVudChoRTogRDNTZWwpIHtcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCA9IGhFO1xuICAgIH1cblxuICAgIGhpZGVWaWV3KCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBoRSA9IHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgfHwgdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gICAgICAgICAgICB9KS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmhpZGVWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGUodGhpcy5kYXRhKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJhc2UuaHRtbCgnJyk7XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnO1xuaW1wb3J0ICogYXMgcnNwIGZyb20gJy4uL2FwaS9yZXNwb25zZXMnO1xuaW1wb3J0ICcuLi9ldGMveGQzJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vYXBpL21haW5BcGknXG5pbXBvcnQgeyBVSUNvbmZpZyB9IGZyb20gJy4uL3VpQ29uZmlnJ1xuaW1wb3J0IHsgVGV4dFRva2VucywgTGVmdFRleHRUb2tlbiwgUmlnaHRUZXh0VG9rZW4gfSBmcm9tICcuL1RleHRUb2tlbidcbmltcG9ydCB7IEF0dGVudGlvbkhlYWRCb3gsIGdldEF0dGVudGlvbkluZm8gfSBmcm9tICcuL0F0dGVudGlvbkhlYWRCb3gnXG5pbXBvcnQgeyBBdHRlbnRpb25HcmFwaCB9IGZyb20gJy4vQXR0ZW50aW9uQ29ubmVjdG9yJ1xuaW1wb3J0IHsgQ29ycHVzSW5zcGVjdG9yIH0gZnJvbSAnLi9Db3JwdXNJbnNwZWN0b3InXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIsIHNpZGVUb0xldHRlciB9IGZyb20gJy4uL2RhdGEvVG9rZW5XcmFwcGVyJ1xuaW1wb3J0IHsgQXR0ZW50aW9uV3JhcHBlciwgbWFrZUZyb21NZXRhUmVzcG9uc2UgfSBmcm9tICcuLi9kYXRhL0F0dGVudGlvbkNhcHN1bGUnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyJ1xuaW1wb3J0IHsgQ29ycHVzTWF0TWFuYWdlciB9IGZyb20gJy4uL3Zpcy9Db3JwdXNNYXRNYW5hZ2VyJ1xuaW1wb3J0IHsgQ29ycHVzSGlzdG9ncmFtIH0gZnJvbSAnLi4vdmlzL0NvcnB1c0hpc3RvZ3JhbSdcbmltcG9ydCB7IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB9IGZyb20gJy4uL2RhdGEvRmFpc3NTZWFyY2hXcmFwcGVyJ1xuaW1wb3J0IHsgRDNTZWwsIFNlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJztcbmltcG9ydCB7IGZyb20sIGZyb21FdmVudCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQmFzZVR5cGUgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IFNpbXBsZU1ldGEgfSBmcm9tIFwiLi4vZXRjL3R5cGVzXCI7XG5pbXBvcnQgQ2hhbmdlRXZlbnQgPSBKUXVlcnkuQ2hhbmdlRXZlbnQ7XG5cblxuZnVuY3Rpb24gaXNOdWxsVG9rZW4odG9rOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgY29uc3QgaXNTb21lTnVsbCA9IHggPT4ge1xuICAgICAgICByZXR1cm4gKHggPT0gbnVsbCkgfHwgKHggPT0gXCJudWxsXCIpXG4gICAgfVxuICAgIGNvbnN0IHRva0lzTnVsbCA9IHRvayA9PSBudWxsO1xuICAgIGNvbnN0IHRva0hhc051bGwgPSBpc1NvbWVOdWxsKHRvay5zaWRlKSB8fCBpc1NvbWVOdWxsKHRvay5pbmQpXG4gICAgcmV0dXJuIHRva0lzTnVsbCB8fCB0b2tIYXNOdWxsXG59XG5cbmZ1bmN0aW9uIHNob3dCeVNpZGUoZTogdHAuVG9rZW5FdmVudCkge1xuICAgIC8vIENoZWNrIGlmIHNhdmVkIHRva2VuIGluIHVpQ29uZiBpcyBudWxsXG4gICAgaWYgKCFpc051bGxUb2tlbihlKSkge1xuICAgICAgICBjb25zdCBjbGFzc1NlbGVjdG9yID0gZS5zaWRlID09IFwibGVmdFwiID8gXCJzcmMtaWR4XCIgOiBcInRhcmdldC1pZHhcIjtcblxuICAgICAgICBTZWwuc2V0SGlkZGVuKFwiLmF0bi1jdXJ2ZVwiKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShgLmF0bi1jdXJ2ZVske2NsYXNzU2VsZWN0b3J9PScke2UuaW5kfSddYClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dCeVNpZGUoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCwgbmV3RXZlbnQ6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsVG9rZW4oc2F2ZWRFdmVudCkpIHtcbiAgICAgICAgc2hvd0J5U2lkZShuZXdFdmVudClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNob29zZVNob3dBbGwoc2F2ZWRFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSlcbiAgICAgICAgU2VsLnNldFZpc2libGUoXCIuYXRuLWN1cnZlXCIpXG59XG5cbmZ1bmN0aW9uIHVuc2VsZWN0SGVhZChoZWFkOiBudW1iZXIpIHtcbiAgICBjb25zdCBhZmZlY3RlZEhlYWRzID0gZDMuc2VsZWN0QWxsKGAuYXR0LXJlY3RbaGVhZD0nJHtoZWFkfSddYCk7XG4gICAgYWZmZWN0ZWRIZWFkcy5jbGFzc2VkKFwidW5zZWxlY3RlZFwiLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBzZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBzZXRTZWxEaXNhYmxlZChhdHRyOiBib29sZWFuLCBzZWw6IEQzU2VsKSB7XG4gICAgY29uc3QgdmFsID0gYXR0ciA/IHRydWUgOiBudWxsXG4gICAgc2VsLmF0dHIoJ2Rpc2FibGVkJywgdmFsKVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYWluR3JhcGhpYyB7XG4gICAgYXBpOiBBUElcbiAgICB1aUNvbmY6IFVJQ29uZmlnXG4gICAgYXR0Q2Fwc3VsZTogQXR0ZW50aW9uV3JhcHBlclxuICAgIHRva0NhcHN1bGU6IFRva2VuV3JhcHBlclxuICAgIHNlbHM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIGluaXRpYWwgZDMgc2VsZWN0aW9ucyBvZiBvYmplY3RzXG4gICAgdml6czogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgdmlzIGNvbXBvbmVudHMgd3JhcHBlZCBhcm91bmQgcGFyZW50IHNlbFxuICAgIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyICAgIC8vIE9yY2hlc3RyYXRlcyBldmVudHMgcmFpc2VkIGZyb20gY29tcG9uZW50c1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFQSSgpXG4gICAgICAgIHRoaXMudWlDb25mID0gbmV3IFVJQ29uZmlnKClcbiAgICAgICAgdGhpcy5za2VsZXRvbkluaXQoKVxuICAgICAgICB0aGlzLm1haW5Jbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb25zIHRoYXQgY2FuIGJlIGNhbGxlZCB3aXRob3V0IGFueSBpbmZvcm1hdGlvbiBvZiBhIHJlc3BvbnNlLlxuICAgICAqIFxuICAgICAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBvbmNlIGFuZCBvbmx5IG9uY2VcbiAgICAgKi9cbiAgICBza2VsZXRvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VscyA9IHtcbiAgICAgICAgICAgIGJvZHk6IGQzLnNlbGVjdCgnYm9keScpLFxuICAgICAgICAgICAgYXRuQ29udGFpbmVyOiBkMy5zZWxlY3QoJyNhdG4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBhdG5EaXNwbGF5OiBkMy5zZWxlY3QoXCIjYXRuLWRpc3BsYXlcIiksXG4gICAgICAgICAgICBtb2RlbFNlbGVjdG9yOiBkMy5zZWxlY3QoXCIjbW9kZWwtb3B0aW9uLXNlbGVjdG9yXCIpLFxuICAgICAgICAgICAgY29ycHVzU2VsZWN0b3I6IGQzLnNlbGVjdChcIiNjb3JwdXMtc2VsZWN0XCIpLFxuICAgICAgICAgICAgYXRuSGVhZHM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBkMy5zZWxlY3QoXCIjbGVmdC1hdHQtaGVhZHNcIiksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGQzLnNlbGVjdChcIiNyaWdodC1hdHQtaGVhZHNcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIHNlbnRlbmNlQTogZDMuc2VsZWN0KFwiI2Zvcm0tc2VudGVuY2UtYVwiKSxcbiAgICAgICAgICAgICAgICBidXR0b246IGQzLnNlbGVjdChcIiN1cGRhdGUtc2VudGVuY2VcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogZDMuc2VsZWN0KFwiI2xlZnQtdG9rZW5zXCIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBkMy5zZWxlY3QoXCIjcmlnaHQtdG9rZW5zXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsc1RvZ2dsZTogZDMuc2VsZWN0KFwiI2Nscy10b2dnbGVcIikuc2VsZWN0KFwiLnN3aXRjaFwiKSxcbiAgICAgICAgICAgIGxheWVyQ2hlY2tib3hlczogZDMuc2VsZWN0KFwiI2xheWVyLXNlbGVjdFwiKSxcbiAgICAgICAgICAgIGhlYWRDaGVja2JveGVzOiBkMy5zZWxlY3QoXCIjaGVhZC1zZWxlY3RcIiksXG4gICAgICAgICAgICBjb250ZXh0UXVlcnk6IGQzLnNlbGVjdChcIiNzZWFyY2gtY29udGV4dHNcIiksXG4gICAgICAgICAgICBlbWJlZGRpbmdRdWVyeTogZDMuc2VsZWN0KFwiI3NlYXJjaC1lbWJlZGRpbmdzXCIpLFxuICAgICAgICAgICAgc2VsZWN0ZWRIZWFkczogZDMuc2VsZWN0KFwiI3NlbGVjdGVkLWhlYWRzXCIpLFxuICAgICAgICAgICAgaGVhZFNlbGVjdEFsbDogZDMuc2VsZWN0KFwiI3NlbGVjdC1hbGwtaGVhZHNcIiksXG4gICAgICAgICAgICBoZWFkU2VsZWN0Tm9uZTogZDMuc2VsZWN0KFwiI3NlbGVjdC1uby1oZWFkc1wiKSxcbiAgICAgICAgICAgIHRlc3RDaGVja2JveDogZDMuc2VsZWN0KFwiI3NpbXBsZS1lbWJlZC1xdWVyeVwiKSxcbiAgICAgICAgICAgIHRocmVzaFNsaWRlcjogZDMuc2VsZWN0KFwiI215LXJhbmdlXCIpLFxuICAgICAgICAgICAgY29ycHVzSW5zcGVjdG9yOiBkMy5zZWxlY3QoXCIjY29ycHVzLXNpbWlsYXItc2VudGVuY2VzLWRpdlwiKSxcbiAgICAgICAgICAgIGNvcnB1c01hdE1hbmFnZXI6IGQzLnNlbGVjdChcIiNjb3JwdXMtbWF0LWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgIGNvcnB1c01zZ0JveDogZDMuc2VsZWN0KFwiI2NvcnB1cy1tc2ctYm94XCIpLFxuICAgICAgICAgICAgaGlzdG9ncmFtczoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBkMy5zZWxlY3QoXCIjbWF0Y2hlZC1oaXN0b2dyYW0tY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogZDMuc2VsZWN0KFwiI21heC1hdHQtaGlzdG9ncmFtLWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAga2lsbExlZnQ6IGQzLnNlbGVjdChcIiNraWxsLWxlZnRcIiksXG4gICAgICAgICAgICAgICAgYWRkTGVmdDogZDMuc2VsZWN0KFwiI21pbnVzLWxlZnRcIiksXG4gICAgICAgICAgICAgICAgYWRkUmlnaHQ6IGQzLnNlbGVjdChcIiNwbHVzLXJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIGtpbGxSaWdodDogZDMuc2VsZWN0KFwiI2tpbGwtcmlnaHRcIiksXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogZDMuc2VsZWN0KFwiI21hdC1yZWZyZXNoXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IGQzLnNlbGVjdChcIiNtYXRjaGVkLW1ldGEtc2VsZWN0XCIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogZDMuc2VsZWN0KFwiI21heC1hdHQtbWV0YS1zZWxlY3RcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbmV3IFNpbXBsZUV2ZW50SGFuZGxlcig8RWxlbWVudD50aGlzLnNlbHMuYm9keS5ub2RlKCkpO1xuXG4gICAgICAgIHRoaXMudml6cyA9IHtcbiAgICAgICAgICAgIGxlZnRIZWFkczogbmV3IEF0dGVudGlvbkhlYWRCb3godGhpcy5zZWxzLmF0bkhlYWRzLmxlZnQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwibGVmdFwiLCB9KSxcbiAgICAgICAgICAgIHJpZ2h0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIsIHsgc2lkZTogXCJyaWdodFwiIH0pLFxuICAgICAgICAgICAgdG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogbmV3IExlZnRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IG5ldyBSaWdodFRleHRUb2tlbih0aGlzLnNlbHMudG9rZW5zLnJpZ2h0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0ZW50aW9uU3ZnOiBuZXcgQXR0ZW50aW9uR3JhcGgodGhpcy5zZWxzLmF0bkRpc3BsYXksIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIGNvcnB1c0luc3BlY3RvcjogbmV3IENvcnB1c0luc3BlY3Rvcih0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBjb3JwdXNNYXRNYW5hZ2VyOiBuZXcgQ29ycHVzTWF0TWFuYWdlcih0aGlzLnNlbHMuY29ycHVzTWF0TWFuYWdlciwgdGhpcy5ldmVudEhhbmRsZXIsIHsgaWR4czogdGhpcy51aUNvbmYub2Zmc2V0SWR4cygpIH0pLFxuICAgICAgICAgICAgaGlzdG9ncmFtczoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBuZXcgQ29ycHVzSGlzdG9ncmFtKHRoaXMuc2Vscy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICAgICAgbWF4QXR0OiBuZXcgQ29ycHVzSGlzdG9ncmFtKHRoaXMuc2Vscy5oaXN0b2dyYW1zLm1heEF0dCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudEhhbmRsZXIoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWFpbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHRoaXMuYXBpLmdldE1vZGVsRGV0YWlscyh0aGlzLnVpQ29uZi5tb2RlbCgpKS50aGVuKG1kID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1kLnBheWxvYWRcbiAgICAgICAgICAgIHRoaXMudWlDb25mLm5MYXllcnModmFsLm5sYXllcnMpLm5IZWFkcyh2YWwubmhlYWRzKVxuICAgICAgICAgICAgdGhpcy5pbml0TGF5ZXJzKHRoaXMudWlDb25mLm5MYXllcnMoKSlcblxuICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihhdHRlbnRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dCA9IGF0dGVudGlvbi5wYXlsb2FkO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZyb21SZXNwb25zZShhdHQpXG5cbiAgICAgICAgICAgICAgICAvLyBXcmFwIHBvc3RJbml0IGludG8gZnVuY3Rpb24gc28gYXN5bmNocm9ub3VzIGNhbGwgZG9lcyBub3QgbWVzcyB3aXRoIG5lY2Vzc2FyeSBpbml0c1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9EaXNwbGF5ID0gdGhpcy51aUNvbmYuZGlzcGxheUluc3BlY3RvcigpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICAgICAgICAgICAgICBpZiAodG9EaXNwbGF5ID09ICdjb250ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlDb250ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0Rpc3BsYXkgPT0gJ2VtYmVkZGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWVyeUVtYmVkZGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5ub3JtQnlHcm91cCA9IHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tYXNrSW5kcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMgPSB0aGlzLnVpQ29uZi5tYXNrSW5kcygpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlI6IFwiLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUudXBkYXRlRW1iZWRkaW5ncyhyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgcG9zdFJlc3BvbnNlRGlzcGxheUNsZWFudXAoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIG9ubHkgMSBtYXNrIGluZCBpcyBwcmVzZW50IGZvciBhdXRvcmVncmVzc2l2ZSBtb2RlbHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSg8bnVtYmVyPnRoaXMudWlDb25mLnRva2VuKCkuaW5kKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMudWlDb25mLm1hc2tJbmRzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy51aUNvbmYubWFza0luZHMoW3RoaXMudWlDb25mLm1hc2tJbmRzKClbMF1dKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5ncmF5VG9nZ2xlKHRoaXMudWlDb25mLm1hc2tJbmRzWzBdKVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEZyb21SZXNwb25zZShhdHRlbnRpb246IHRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuYXR0Q2Fwc3VsZSA9IG1ha2VGcm9tTWV0YVJlc3BvbnNlKGF0dGVudGlvbiwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKVxuICAgICAgICB0aGlzLnRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKGF0dGVudGlvbik7XG4gICAgICAgIHRoaXMuX3N0YXRpY0luaXRzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGxlYXZlQ29ycHVzTXNnKG1zZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudml6cy5jb3JwdXNJbnNwZWN0b3IuaGlkZVZpZXcoKVxuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5oaWRlVmlldygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBsZWF2ZSBtc2dcIik7XG4gICAgICAgIFNlbC51bmhpZGVFbGVtZW50KHRoaXMuc2Vscy5jb3JwdXNNc2dCb3gpXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNNc2dCb3gudGV4dChtc2cpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYmluZEV2ZW50SGFuZGxlcigpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgKGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZi51aUNvbmYubW9kZWxLaW5kKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGUuc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgIWUuc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBzaWRlVG9MZXR0ZXIoZS5zaWRlLCB0aGlzLnVpQ29uZi5hdHRUeXBlKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGVbbGV0dGVyXS50b2dnbGUoZS5pbmQpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKChyZXNwOiByc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZS51cGRhdGVFbWJlZGRpbmdzKHIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5tYXNrSW5kcyh0aGlzLnRva0NhcHN1bGUuYS5tYXNrSW5kcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRvcmVncmVzc2l2ZSBtb2RlbCBkb2Vzbid0IGRvIG1hc2tpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hhdCBraW5kIG9mIG1vZGVsIGlzIHRoaXM/XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3ZlciwgKGU6IHRwLlRva2VuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNob29zZVNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSwgZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdXQsIChlKSA9PiB7XG4gICAgICAgICAgICBjaG9vc2VTaG93QWxsKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCAoZTogdHAuVG9rZW5FdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aUNvbmYudG9nZ2xlVG9rZW4oZSlcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKClcbiAgICAgICAgICAgIHNob3dCeVNpZGUoZSlcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmdyYXlUb2dnbGUoK2UuaW5kKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHNwZWNpYWwgb24gcm93IG1vdXNlIG92ZXJcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdXRcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlTWF0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEodXBkYXRlTWF0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUodXBkYXRlTWF0KVxuXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZShhdHQpXG4gICAgICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hDbGljaywgKGU6IHsgaGVhZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnVpQ29uZi50b2dnbGVIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5BRERFRCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gdHAuVG9nZ2xlZC5SRU1PVkVEKSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuICAgICAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIChlOiB7IHZhbDogXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiLCBvZmZzZXQ6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICAvLyBVbmNvbW1lbnQgdGhlIGJlbG93IGlmIHlvdSB3YW50IHRvIG1vZGlmeSB0aGUgd2hvbGUgY29sdW1uXG4gICAgICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYFxuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKHNlbGVjdG9yKS5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgdHJ1ZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIGZhbHNlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3ZlciwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGQzLnNlbGVjdChgLmluc3BlY3Rvci1yb3dbcm93bnVtPScke2UuaWR4fSddYClcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSByb3cuc2VsZWN0KGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYClcbiAgICAgICAgICAgIHdvcmQuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdXQsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgX3RvZ2dsZVRva2VuU2VsKCkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy51aUNvbmYudG9rZW4oKVxuICAgICAgICBjb25zdCBhbHJlYWR5U2VsZWN0ZWQgPSBkMy5zZWxlY3QoJy5zZWxlY3RlZC10b2tlbicpXG5cbiAgICAgICAgLy8gSWYgbm8gdG9rZW4gc2hvdWxkIGJlIHNlbGVjdGVkLCB1bnNlbGVjdCBhbGwgdG9rZW5zXG4gICAgICAgIGlmICghdGhpcy51aUNvbmYuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3U2VsOiBkMy5TZWxlY3Rpb248QmFzZVR5cGUsIGFueSwgQmFzZVR5cGUsIGFueT4gPSBkMy5zZWxlY3RBbGwoJy5zZWxlY3RlZC10b2tlbicpXG4gICAgICAgICAgICBpZiAoIW5ld1NlbC5lbXB0eSgpKSBuZXdTZWwuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgc2VsZWN0IHRoZSBpbmRpY2F0ZWQgdG9rZW5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbjJTdHJpbmcgPSAoZTogdHAuVG9rZW5FdmVudCkgPT4gYCMke2Uuc2lkZX0tdG9rZW4tJHtlLmluZH1gXG4gICAgICAgICAgICBjb25zdCBuZXdTZWwgPSBkMy5zZWxlY3QodG9rZW4yU3RyaW5nKGUpKVxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBzZWxlY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICBpZiAoIW5ld1NlbC5lbXB0eSgpKSBuZXdTZWwuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzIHRva2VuIHNlbGVjdGlvbiwgaWYgYW55XG4gICAgICAgIGlmICghYWxyZWFkeVNlbGVjdGVkLmVtcHR5KCkpIHtcbiAgICAgICAgICAgIGFscmVhZHlTZWxlY3RlZC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JheVRvZ2dsZSgrZS5pbmQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgfVxuXG4gICAgLyoqIEdyYXkgYWxsIHRva2VucyB0aGF0IGhhdmUgaW5kZXggZ3JlYXRlciB0aGFuIGluZCAqL1xuICAgIHByaXZhdGUgZ3JheUJhZFRva3MoaW5kOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudWlDb25mLm1vZGVsS2luZCgpID09IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgZ3JheVRva3MgPSBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICBzLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgaSA+IGluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnJpZ2h0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLmxlZnQtdG9rZW4nKS5lYWNoKGdyYXlUb2tzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncmF5VG9nZ2xlKGluZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKVxuICAgICAgICAgICAgdGhpcy5ncmF5QmFkVG9rcyhpbmQpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnLnRva2VuJykuY2xhc3NlZCgnbWFza2VkLXRva2VuJywgZmFsc2UpXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TW9kZWxTZWxlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgLy8gQmVsb3cgYXJlIHRoZSBhdmFpbGFibGUgbW9kZWxzLiBXaWxsIG5lZWQgdG8gY2hvb3NlIDMgdG8gYmUgYXZhaWxhYmxlIE9OTFlcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJiZXJ0LWJhc2UtY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJiZXJ0LWJhc2UtdW5jYXNlZFwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcImRpc3RpbGJlcnQtYmFzZS11bmNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6IFwiZGlzdGlscm9iZXJ0YS1iYXNlXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwicm9iZXJ0YS1iYXNlXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJncHQyLW1lZGl1bVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaXN0aWxncHQyXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZSB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBSLm1hcChSLnByb3AoJ25hbWUnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZHMgPSBSLm1hcChSLnByb3AoJ2tpbmQnKSkoZGF0YSlcbiAgICAgICAgY29uc3Qga2luZG1hcCA9IFIuemlwT2JqKG5hbWVzLCBraW5kcylcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5zZWxlY3RBbGwoJy5tb2RlbC1vcHRpb24nKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKCdvcHRpb24nKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21vZGVsLW9wdGlvbicsIHRydWUpXG4gICAgICAgICAgICAucHJvcGVydHkoJ3ZhbHVlJywgZCA9PiBkLm5hbWUpXG4gICAgICAgICAgICAuYXR0cihcIm1vZGVsa2luZFwiLCBkID0+IGQua2luZClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5uYW1lKVxuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLnByb3BlcnR5KCd2YWx1ZScsIHRoaXMudWlDb25mLm1vZGVsKCkpO1xuXG4gICAgICAgIHRoaXMuc2Vscy5tb2RlbFNlbGVjdG9yLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgY29uc3QgbW5hbWUgPSBtZS5wcm9wZXJ0eSgndmFsdWUnKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWwobW5hbWUpO1xuICAgICAgICAgICAgc2VsZi51aUNvbmYubW9kZWxLaW5kKGtpbmRtYXBbbW5hbWVdKTtcbiAgICAgICAgICAgIGlmIChraW5kbWFwW21uYW1lXSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJFU0VUVElORyBNQVNLIElORFNcIik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHMoW10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1haW5Jbml0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENvcnB1c1NlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgY29kZTogXCJ3b3pcIiwgZGlzcGxheTogXCJXaXphcmQgb2YgT3pcIiB9LFxuICAgICAgICAgICAgeyBjb2RlOiBcIndpa2lcIiwgZGlzcGxheTogXCJXaWtpcGVkaWFcIiB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zZWxzLmNvcnB1c1NlbGVjdG9yLnNlbGVjdEFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQuY29kZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kaXNwbGF5KVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLmNvcnB1cyhtZS5wcm9wZXJ0eSgndmFsdWUnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudWlDb25mLmNvcnB1cygpKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhdGljSW5pdHMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRTZW50ZW5jZUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdE1vZGVsU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRDb3JwdXNTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW5pdFF1ZXJ5Rm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0QWRkZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgdGhpcy5faW5pdE1ldGFTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdFRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QWRkZXIoKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVVybE9mZnNldElkeHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmlkeHMpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXhDb3JwdXNNYXRIZWlnaHRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3V3JhcHBlZCA9IHRoaXMuX3dyYXBSZXN1bHRzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEobmV3V3JhcHBlZC5kYXRhKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRMZWZ0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmFkZExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbFJpZ2h0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmtpbGxSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5raWxsTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsTGVmdCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5yZWZyZXNoLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLnRleHQoKSAhPSAnJykgZml4Q29ycHVzTWF0SGVpZ2h0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gb25yZXNpemVcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWV0YVNlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy5faW5pdE1hdGNoZWRXb3JkU2VsZWN0b3IodGhpcy5zZWxzLm1ldGFTZWxlY3Rvci5tYXRjaGVkV29yZClcbiAgICAgICAgdGhpcy5faW5pdE1heEF0dFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF4QXR0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNYXhBdHRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXgoKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIC8vIERvIHRvZ2dsZVxuICAgICAgICAgICAgc2VsLnNlbGVjdEFsbCgnLmFjdGl2ZScpLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tZXRhTWF4KHZhbClcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC5tZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF0Y2hlZFdvcmRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSA8U2ltcGxlTWV0YT5kMy5zZWxlY3QodGhpcykuYXR0cigndmFsdWUnKVxuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1hdGNoKHZhbClcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlU2VhcmNoaW5nKGF0dHI6IGJvb2xlYW4pIHtcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmNvbnRleHRRdWVyeSlcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmVtYmVkZGluZ1F1ZXJ5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbDogdHAuU2ltcGxlTWV0YSkge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5waWNrKHZhbClcbiAgICAgICAgdGhpcy52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQubWV0YSh2YWwpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNlbnRlbmNlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3BsYWNlaG9sZGVyJywgXCJFbnRlciBuZXcgc2VudGVuY2UgdG8gYW5hbHl6ZVwiKVxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigndmFsdWUnLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpKVxuXG4gICAgICAgIGNvbnN0IGNsZWFySW5zcGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdE5ld1NlbnRlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJlbmNlcyBvZiAnIycgaW4gc2VudGVuY2UgYXMgdGhpcyBjYXVzZXMgdGhlIEFQSSB0byBicmVha1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2VfYTogc3RyaW5nID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLnByb3BlcnR5KFwidmFsdWVcIikucmVwbGFjZSgvXFwjL2csICcnKVxuXG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgZm9ybSBpcyBmaWxsZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBpZiAoc2VudGVuY2VfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgc2VudGVuY2VfYSwgdGhpcy51aUNvbmYubGF5ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLnNlbnRlbmNlKHNlbnRlbmNlX2EpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5ybVRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tDYXBzdWxlLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZVRva2VuU2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnNwZWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb25FbnRlciA9IFIuY3VycnkoKGtleUNvZGUsIGYsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSAhPT0ga2V5Q29kZSkgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXJTdWJtaXQgPSBvbkVudGVyKDEzLCBzdWJtaXROZXdTZW50ZW5jZSlcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnNlbHMuZm9ybS5idXR0b247XG4gICAgICAgIGNvbnN0IGlucHV0Qm94ID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBO1xuXG4gICAgICAgIGJ0bi5vbihcImNsaWNrXCIsIHN1Ym1pdE5ld1NlbnRlbmNlKVxuICAgICAgICBpbnB1dEJveC5vbigna2V5cHJlc3MnLCBvbkVudGVyU3VibWl0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaEVtYmVkcygpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRUb2tlbiA9IHRoaXMudWlDb25mLnRva2VuKCk7XG4gICAgICAgIGNvbnN0IG91dCA9IHRoaXMudml6cy50b2tlbnNbc2F2ZWRUb2tlbi5zaWRlXS5nZXRFbWJlZGRpbmcoc2F2ZWRUb2tlbi5pbmQpXG4gICAgICAgIHJldHVybiBvdXQuZW1iZWRkaW5nc1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmNvbnRleHRzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRW1iZWRkaW5ncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VBUkNISU5HIEVNQkVERElOR1NcIik7XG4gICAgICAgIGNvbnN0IGVtYmVkID0gdGhpcy5fZ2V0U2VhcmNoRW1iZWRzKClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgIHNlbGYuYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBlbWJlZCwgbGF5ZXIsIGhlYWRzLCBrKVxuICAgICAgICAgICAgLnRoZW4oKHZhbDogcnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGVhdmVDb3JwdXNNc2coYEVtYmVkZGluZ3MgYXJlIG5vdCBhdmFpbGFibGUgZm9yIG1vZGVsICcke3NlbGYudWlDb25mLm1vZGVsKCl9JyBhbmQgY29ycHVzICcke3NlbGYudWlDb25mLmNvcnB1cygpfScgYXQgdGhpcyB0aW1lLmApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdmFsLnBheWxvYWRcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLnVuaGlkZVZpZXcoKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci51bmhpZGVWaWV3KClcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRlZFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXRjaGVkSGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLnVwZGF0ZShjb3VudGVkVmFscylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5kaXNwbGF5SW5zcGVjdG9yKCdlbWJlZGRpbmdzJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29ycHVzSW5zcGVjdG9yRnJvbU1ldGEodGhpcy51aUNvbmYubWV0YU1hdGNoKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJTRUFSQ0hJTkcgQ09OVEVYVFNcIik7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9nZXRTZWFyY2hDb250ZXh0KClcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLnVpQ29uZi5sYXllcigpXG4gICAgICAgIGNvbnN0IGhlYWRzID0gc2VsZi51aUNvbmYuaGVhZHMoKVxuICAgICAgICBjb25zdCBrID0gNTBcblxuICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgc2VsZi5hcGkuZ2V0TmVhcmVzdENvbnRleHRzKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudWlDb25mLmNvcnB1cygpLCBjb250ZXh0LCBsYXllciwgaGVhZHMsIGspXG4gICAgICAgICAgICAudGhlbigodmFsOiByc3AuTmVhcmVzdE5laWdoYm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgaGVpZ2h0cyBvZiBjb3JwdXMgaW5zcGVjdG9yIHJvd3MuXG4gICAgICAgICAgICAgICAgaWYgKHZhbC5zdGF0dXMgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxlYXZlQ29ycHVzTXNnKGBDb250ZXh0cyBhcmUgbm90IGF2YWlsYWJsZSBmb3IgbW9kZWwgJyR7c2VsZi51aUNvbmYubW9kZWwoKX0nIGFuZCBjb3JwdXMgJyR7c2VsZi51aUNvbmYuY29ycHVzKCl9JyBhdCB0aGlzIHRpbWUuYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB2YWwucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJISURJTkdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodilcblxuICAgICAgICAgICAgICAgICAgICBTZWwuaGlkZUVsZW1lbnQoc2VsZi5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51bmhpZGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudW5oaWRlVmlldygpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudGVkVmFscyA9IHdyYXBwZWRWYWxzLmdldE1hdGNoZWRIaXN0b2dyYW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQudXBkYXRlKGNvdW50ZWRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YShzZWxmLnVpQ29uZi5tZXRhTWF4KCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUNvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hDb250ZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIiwgdGhpcy51aUNvbmYudG9rZW4oKSk7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hFbWJlZGRpbmdzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hpbmdEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnVpQ29uZi5oZWFkcygpLmxlbmd0aCA9PSAwKSB8fCAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoRGlzYWJsZXIoKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVTZWFyY2hpbmcodGhpcy5fc2VhcmNoaW5nRGlzYWJsZWQoKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0UXVlcnlGb3JtKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb250ZXh0UXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUNvbnRleHQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5lbWJlZGRpbmdRdWVyeS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX3F1ZXJ5RW1iZWRkaW5ncygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVuZGVySGVhZFN1bW1hcnkoKSB7XG4gICAgICAgIHRoaXMuc2Vscy5zZWxlY3RlZEhlYWRzXG4gICAgICAgICAgICAuaHRtbChSLmpvaW4oJywgJywgdGhpcy51aUNvbmYuaGVhZHMoKS5tYXAoaCA9PiBoICsgMSkpKVxuICAgIH1cblxuICAgIC8vIE1vZGlmeSBmYWlzcyByZXN1bHRzIHdpdGggY29ycmVzcG9uZGluZyBoZWlnaHRzXG4gICAgcHJpdmF0ZSBfd3JhcFJlc3VsdHMocmV0dXJuZWRGYWlzc1Jlc3VsdHM6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG5cbiAgICAgICAgY29uc3Qgcm93cyA9IGQzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1yb3cnKVxuXG4gICAgICAgIC8vIERvbid0IGp1c3QgdXNlIG9mZnNldEhlaWdodCBzaW5jZSB0aGF0IHJvdW5kcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgIGNvbnN0IGhlaWdodHMgPSByb3dzLm5vZGVzKCkubWFwKChuOiBIVE1MRWxlbWVudCkgPT4gbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpXG5cbiAgICAgICAgY29uc3QgbmV3VmFscyA9IHJldHVybmVkRmFpc3NSZXN1bHRzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGhlaWdodHNbaV0sIHYpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gbmV3IEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlcihuZXdWYWxzKVxuXG4gICAgICAgIHJldHVybiB3cmFwcGVkVmFsc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdExheWVycyhuTGF5ZXJzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBoYXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gc2VsZi5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgLmRhdGEoXy5yYW5nZSgwLCBuTGF5ZXJzKSlcbiAgICAgICAgICAgIC5qb2luKFwibGFiZWxcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJidG4gYnV0dG9uIGxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKCdhY3RpdmUnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBsYXJnZXN0IGxheWVyIGF2YWlsYWJsZSBpZiB1aUNvbmYubGF5ZXIoKSA+IG5ldyBuTGF5ZXJzXG4gICAgICAgICAgICAgICAgaWYgKGQgPT0gc2VsZi51aUNvbmYubGF5ZXIoKSAtIDEpIHsgLy8gSmF2YXNjcmlwdCBpcyAwIGluZGV4ZWQhXG4gICAgICAgICAgICAgICAgICAgIGhhc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNBY3RpdmUgJiYgZCA9PSBuTGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLmxheWVyKGQpXG4gICAgICAgICAgICAgICAgICAgIGhhc0FjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiBkICsgMSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJpbnB1dFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0eXBlXCIsIFwicmFkaW9cIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGVja2JveC1pbmxpbmVcIilcbiAgICAgICAgICAgIC5hdHRyKFwibmFtZVwiLCBcImxheWVyYm94XCIpXG4gICAgICAgICAgICAvLyAuYXR0cihcImhlYWRcIiwgZCA9PiBkKVxuICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCAoZCwgaSkgPT4gXCJsYXllckNoZWNrYm94XCIgKyBpKVxuICAgICAgICAvLyAudGV4dCgoZCwgaSkgPT4gZCArIFwiIFwiKVxuXG4gICAgICAgIGZyb21FdmVudChjaGVja2JveGVzLm5vZGVzKCksICdjaGFuZ2UnKS5waXBlKFxuICAgICAgICAgICAgdGFwKChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG15RGF0YSA9IGQzLnNlbGVjdCg8QmFzZVR5cGU+ZS50YXJnZXQpLmRhdHVtKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlEYXRhLCBcIi0tLSBteURhdGFcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmxheWVyQ2hlY2tib3hlcy5zZWxlY3RBbGwoXCIubGF5ZXJDaGVja2JveFwiKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgZCA9PiBkID09PSBteURhdGEpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcCgodjogRXZlbnQpID0+ICtkMy5zZWxlY3QoPEJhc2VUeXBlPnYudGFyZ2V0KS5kYXR1bSgpKSxcbiAgICAgICAgICAgIHRhcCh2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBsYXllcjogXCIsIHYpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLmxheWVyKHYpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgodikgPT4gZnJvbShzZWxmLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudG9rQ2Fwc3VsZS5hLCBzZWxmLnVpQ29uZi5zZW50ZW5jZSgpLCB2KSkpXG4gICAgICAgICkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChyZXNwOiByc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHJlc3AucGF5bG9hZDtcbiAgICAgICAgICAgICAgICBzZWxmLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZS51cGRhdGVFbWJlZGRpbmdzKHIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHNlbGYudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgc2VsZi5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllcklkID0gYCNsYXllckNoZWNrYm94JHt0aGlzLnVpQ29uZi5sYXllcigpfWBcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXllciBJRDogXCIsIGxheWVySWQpO1xuICAgICAgICBkMy5zZWxlY3QobGF5ZXJJZCkuYXR0cihcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpXG5cbiAgICAgICAgLy8gSW5pdCB0aHJlc2hvbGQgc3R1ZmZcbiAgICAgICAgY29uc3QgZGlzcFRocmVzaCA9ICh0aHJlc2gpID0+IE1hdGgucm91bmQodGhyZXNoICogMTAwKVxuICAgICAgICBkMy5zZWxlY3QoJyNteS1yYW5nZS12YWx1ZScpLnRleHQoZGlzcFRocmVzaChzZWxmLnVpQ29uZi50aHJlc2hvbGQoKSkpXG5cbiAgICAgICAgdGhpcy5zZWxzLnRocmVzaFNsaWRlci5vbihcImlucHV0XCIsIF8udGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXM7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi50aHJlc2hvbGQoK25vZGUudmFsdWUgLyAxMDApO1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuICAgICAgICAgICAgc2VsZi52aXpzLmF0dGVudGlvblN2Zy50aHJlc2hvbGQoc2VsZi51aUNvbmYudGhyZXNob2xkKCkpXG4gICAgICAgIH0sIDEwMCkpXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3RBbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3RBbGxIZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuaGVhZFNlbGVjdE5vbmUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3ROb0hlYWRzKCk7XG4gICAgICAgICAgICBzZWxmLl9zZWFyY2hEaXNhYmxlcigpO1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBfaW5pdFRvZ2dsZSgpIHtcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuc2Vscy5jbHNUb2dnbGUubm9kZSgpLCAnaW5wdXQnKS5waXBlKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtLSBUT0RPOiBGSVggIVxuICAgICAgICAgICAgbWFwKGUgPT4gZS5zcmNFbGVtZW50LmNoZWNrZWQpLFxuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnplcm9lZCh2KVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyQXR0SGVhZCgpIHtcbiAgICAgICAgY29uc3QgaGVhZHMgPSBfLnJhbmdlKDAsIHRoaXMudWlDb25mLl9uSGVhZHMpXG4gICAgICAgIGNvbnN0IGZvY3VzQXR0ID0gdGhpcy5hdHRDYXBzdWxlLmF0dFxuICAgICAgICBjb25zdCBsZWZ0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcImxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcInJpZ2h0XCIpO1xuICAgICAgICB0aGlzLnZpenMubGVmdEhlYWRzLm9wdGlvbnMub2Zmc2V0ID0gdGhpcy51aUNvbmYub2Zmc2V0XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMudXBkYXRlKGxlZnRBdHRJbmZvKVxuICAgICAgICB0aGlzLnZpenMucmlnaHRIZWFkcy51cGRhdGUocmlnaHRBdHRJbmZvKVxuICAgICAgICB0aGlzLl9yZW5kZXJIZWFkU3VtbWFyeSgpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZVxuICAgICAgICBoZWFkcy5mb3JFYWNoKChoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51aUNvbmYuaGVhZFNldCgpLmhhcyhoKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHJlbmRlclRva2VucygpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudG9rQ2Fwc3VsZVt0aGlzLnVpQ29uZi5hdHRUeXBlWzBdXVxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudG9rQ2Fwc3VsZVt0aGlzLnVpQ29uZi5hdHRUeXBlWzFdXVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm93OiBcIiwgdGhpcy51aUNvbmYub2Zmc2V0KTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0Lm9wdGlvbnMub2Zmc2V0ID0gdGhpcy51aUNvbmYub2Zmc2V0XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC51cGRhdGUobGVmdC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQubWFzayhsZWZ0Lm1hc2tJbmRzKTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5yaWdodC51cGRhdGUocmlnaHQudG9rZW5EYXRhKTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5yaWdodC5tYXNrKHJpZ2h0Lm1hc2tJbmRzKTtcbiAgICAgICAgLy8gZGlzcGxheVNlbGVjdGVkVG9rZW5cbiAgICB9XG5cbiAgICByZW5kZXJTdmcoKSB7XG4gICAgICAgIGNvbnN0IGF0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWRzKHRoaXMudWlDb25mLmhlYWRzKCkpXG4gICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25Tdmcub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgY29uc3Qgc3ZnID0gPEF0dGVudGlvbkdyYXBoPnRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpO1xuICAgICAgICBzdmcudXBkYXRlKGF0dClcbiAgICAgICAgY29uc3QgbWF4VG9rZW5zID0gXy5tYXgoW3RoaXMudG9rQ2Fwc3VsZS5hLmxlbmd0aCgpXSlcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gc3ZnLm9wdGlvbnMuYm94aGVpZ2h0ICogbWF4VG9rZW5zXG4gICAgICAgIHN2Zy5oZWlnaHQobmV3SGVpZ2h0KVxuXG4gICAgICAgIC8vIERvbid0IHJlZGlzcGxheSBldmVyeXRoaW5nIGlmIG9uZSB0b2tlbiBpcyBzZWxlY3RlZFxuICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=