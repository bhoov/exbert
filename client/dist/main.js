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
                this.vizs.attentionSvg.normBy = this.uiConf.modelKind() == _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive ? _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].Col : _etc_types__WEBPACK_IMPORTED_MODULE_3__["NormBy"].All;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVGV4dFRva2VuLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9WaXNDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL215TWFpbi50cyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vbm9kZS1mZXRjaCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpP2E4YjciLCJ3ZWJwYWNrOi8vL3N0cmluZ19kZWNvZGVyIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLHFCQUF1QixpQjs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixnQjs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBTyxNQUFNLE9BQU8sR0FBRztJQUN0QiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFF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U0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNO1FBQ3BKLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUNsSixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ3JCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTO1FBQzVKLFVBQVUsQ0FBQztDQUN0QjtBQUVEOztHQUVHO0FBQ0ksOEJBQW9CLEdBQW1CO0lBQzFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQztJQUN4SixHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVztRQUMzSSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsWUFBWTtRQUNoSyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUNwQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ3JCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTO1FBQzVKLFVBQVUsQ0FBQztDQUN0QjtBQUVNLDBCQUFnQixHQUFtQjtJQUN0QyxHQUFHLEVBQUUsMkNBQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7SUFDbEYsR0FBRyxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO0lBQ3JDLE1BQU0sRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTTtJQUMzQyxJQUFJLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUk7Q0FDMUM7QUFvQkUsTUFBTSxXQUFXLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVEM0M7QUFBQTtBQUFBOztHQUVHO0FBRUksTUFBTSxVQUFVO0lBRW5CLE1BQU0sQ0FBQyxRQUFRO1FBQ1gsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sS0FBSyxVQUFVO1FBQ2pCLDZGQUE2RjtRQUM3RixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU5QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFekIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1osT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuQztpQkFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1lBQ0QsUUFBUTtZQUNSLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUdELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFOUMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2dCQUVELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2lCQUMxQztxQkFBTSxJQUFJLE9BQU8sRUFBRTtvQkFDaEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ0gsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDNUM7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUM7SUFFekIsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQXFCO1FBQ2xDLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDeEM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUdILE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDOUI7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQVcsRUFBRSxLQUFxQixFQUFFLG1CQUFtQixHQUFHLElBQUk7UUFDaEYsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELE1BQU07SUFDTiwwRUFBMEU7SUFDMUUsdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTix1Q0FBdUM7SUFDdkMsbURBQW1EO0lBQ25ELCtFQUErRTtJQUMvRSw0QkFBNEI7SUFDNUIsSUFBSTtJQUdKLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBcUIsRUFBRSxtQkFBbUIsR0FBRyxJQUFJO1FBQzlELElBQUksbUJBQW1CLEVBQUU7WUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFDdEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFDekMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ3RIRDtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUd6Qjs7O0dBR0c7QUFDSCxJQUFJLHFCQUFxQixHQUFHLENBQUMsQ0FBQztBQUV2QixNQUFNLElBQUk7SUFDYixNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUM1QixxQkFBcUIsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxNQUFNLEdBQUcscUJBQXFCLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBSUQ7O0dBRUc7QUFDSSxNQUFNLEdBQUc7O0FBQ0wsaUJBQWEsR0FBRyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO0FBQzdELGdCQUFZLEdBQUcsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQztBQUMzRCxjQUFVLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsNENBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5RCxhQUFTLEdBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsNENBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RCxlQUFXLEdBQUcsQ0FBQyxFQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsU0FBUyxFQUFFLENBQUM7SUFDWixnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0NBQUMsQ0FBQztBQUNwRCxpQkFBYSxHQUFHLENBQUMsRUFBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3JCLFNBQVMsRUFBRSxDQUFDO0lBQ1osZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixTQUFTLEVBQUUsSUFBSTtDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsQzdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkI7QUFFM0IsU0FBUyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDcEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUNiO1NBQ0ksSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2QsT0FBTyxDQUFDLENBQUM7S0FDWjtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVrRTtBQUVuRTs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFJLEtBQWMsRUFBRSxTQUEwQjtJQUNqRSxJQUFJLFNBQVMsR0FBQyxDQUFDLENBQUM7SUFDaEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRWpCLElBQUksQ0FBQyxHQUFHLGdEQUFXLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxHQUFHLGdEQUFXLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUFBLENBQUM7QUFFRixTQUFTLFNBQVMsQ0FBSSxLQUFjLEVBQUUsR0FBSyxFQUFFLEdBQVU7SUFDbkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLE9BQU8sS0FBSztBQUNoQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLGVBQWUsQ0FBSSxLQUFZO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzNDLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsY0FBYyxDQUFJLEtBQWMsRUFBRSxHQUFLLEVBQUUsU0FBUyxHQUFDLEtBQUs7SUFDN0QsMEJBQTBCO0lBQzFCLElBQUksU0FBUyxFQUFFO1FBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdkI7SUFFRCxNQUFNLEdBQUcsR0FBRyxrREFBYSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUNyQyxDQUFDO0FBRU0sU0FBUyxVQUFVLENBQUMsR0FBVTtJQUNuQyxNQUFNLENBQUMsR0FBWSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXpDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUUsT0FBTyw2Q0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBQyxDQUFDO0FBQ3JELENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5REQ7QUFBQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFDSSxTQUFTLE9BQU8sQ0FBQyxJQUFZLEVBQUUsTUFBZTtJQUNqRCxJQUFJLE1BQU0sRUFBQztRQUNQLElBQUksR0FBRyxHQUFXLElBQUksR0FBRyxHQUFHLENBQUM7UUFFN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNULEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDWCxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDZixDQUFDLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDO1NBQ0k7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0FBQ0wsQ0FBQztBQUFBLENBQUM7QUFFRjs7R0FFRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFBRSxPQUFPO1FBQ3pDLE1BQU0sRUFBQyxNQUFNO1FBQ2IsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzNCLE9BQU8sRUFBRTtZQUNELGNBQWMsRUFBRSxpQ0FBaUM7U0FDcEQ7S0FDUjtBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4QkY7QUFBQTtBQUFBOzs7O0dBSUc7QUFDSSxTQUFTLGVBQWUsQ0FBQyxHQUFZLEVBQUUsRUFBYTtJQUN2RCx5REFBeUQ7SUFDekQsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNMLEVBQUUsR0FBRyxVQUFTLElBQUksRUFBRSxLQUFLO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO0tBQ0o7SUFFRCxJQUFJLEdBQUcsR0FBYTtRQUNoQixHQUFHLEVBQUUsRUFBRTtRQUNQLFdBQVcsRUFBRSxFQUFFO0tBQ2xCLENBQUM7SUFFRixJQUFJLFVBQVUsR0FBZSxFQUFFO0lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUM3QjtJQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJLEVBQUUsS0FBSztRQUNsQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pDSDtBQUFBO0FBQUEsNEhBQTRIO0FBQ3JILE1BQU0sU0FBUyxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQ3RGLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0NBQ3pGOzs7Ozs7Ozs7Ozs7O0FDOEVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBWSxPQUdYO0FBSEQs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Q0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFFckIsc0RBQXNEO1FBQ3RELFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFBQSxDQUFDO0lBRUYsTUFBTTtRQUNGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7O0FDcDdCRCxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3RzL21haW4udHNcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImV4QkVSVC5odG1sXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsImV4cG9ydCBjb25zdCBEZW1vQVBJID0ge1xuXHRcIjUyN2ZkYWM0NDA0YmY5YmE1NDEyNjQ2YWQ0NTc5NTBkNDQ4Mjc2MmNcIjogXCI1MjdmZGFjNDQwNGJmOWJhNTQxMjY0NmFkNDU3OTUwZDQ0ODI3NjJjLmpzb25cIixcblx0XCI1OWI0YWNjMDVmMWQ4MGVjYmVmMWMyM2VhZjJmZGExMDIyMmNiMjU3XCI6IFwiNTliNGFjYzA1ZjFkODBlY2JlZjFjMjNlYWYyZmRhMTAyMjJjYjI1Ny5qc29uXCIsXG5cdFwiMzU0OTkyZjJlZTIzNjYwNGM4NzRhM2E2MjdlNDA0MmJjNjg1ODZmOFwiOiBcIjM1NDk5MmYyZWUyMzY2MDRjODc0YTNhNjI3ZTQwNDJiYzY4NTg2ZjguanNvblwiLFxuXHRcIjUwMTVlNWEzMTg2MDVjZWE2ODA4NTM4ZGIxNGQ4YWYxNjg4N2IwNzZcIjogXCI1MDE1ZTVhMzE4NjA1Y2VhNjgwODUzOGRiMTRkOGFmMTY4ODdiMDc2Lmpzb25cIixcblx0XCIzYzlhYTE1MmFjODk0MzA2MDQwNzAzYzUwOTU1OTliMTk5Y2FkMWE5XCI6IFwiM2M5YWExNTJhYzg5NDMwNjA0MDcwM2M1MDk1NTk5YjE5OWNhZDFhOS5qc29uXCIsXG5cdFwiMGZlY2UwYzg3MjAzZTgzYWZkMTY3NGI1YWVlYmFlZDBmNWZhMDU2MlwiOiBcIjBmZWNlMGM4NzIwM2U4M2FmZDE2NzRiNWFlZWJhZWQwZjVmYTA1NjIuanNvblwiLFxuXHRcImQzYTBlNDA0NWVhNDhhMjc1Y2U1MWE2YWYwMjgwNDA2MDYwZjQ3Y2ZcIjogXCJkM2EwZTQwNDVlYTQ4YTI3NWNlNTFhNmFmMDI4MDQwNjA2MGY0N2NmLmpzb25cIixcblx0XCJlZDk4ZDc1MWFiOWI2YTRhMGU4NWU5MzMyYjQyMGE0YzEzYWI3NWE3XCI6IFwiZWQ5OGQ3NTFhYjliNmE0YTBlODVlOTMzMmI0MjBhNGMxM2FiNzVhNy5qc29uXCIsXG5cdFwiMGQyNGFlMDhlZWIyMWFmODJjNjY2Y2JlMmFjMDY0NmVkOWM5ZDlhNlwiOiBcIjBkMjRhZTA4ZWViMjFhZjgyYzY2NmNiZTJhYzA2NDZlZDljOWQ5YTYuanNvblwiLFxuXHRcIjZkZTA1M2IzYjhhNGQ5MDQ3ODBjOWE2NTQ1YTBhNjNjYmJiMmIxNDRcIjogXCI2ZGUwNTNiM2I4YTRkOTA0NzgwYzlhNjU0NWEwYTYzY2JiYjJiMTQ0Lmpzb25cIixcblx0XCJmNjhkZjIzMzY1ZmFmMDJmOWMwMTQzOTM0NWJlZDY2OTM2ZWQ4NWY3XCI6IFwiZjY4ZGYyMzM2NWZhZjAyZjljMDE0MzkzNDViZWQ2NjkzNmVkODVmNy5qc29uXCIsXG5cdFwiNDYwOGNiNGZjMDBiNDNmZmY2ODA5OGU4NTY3NmZhZDU3Yzk0MGYwMlwiOiBcIjQ2MDhjYjRmYzAwYjQzZmZmNjgwOThlODU2NzZmYWQ1N2M5NDBmMDIuanNvblwiLFxuXHRcImRmY2Q1MDE0NmRhOGQ4MTIyYTVhNTdjMmEzYzBhYmNlNTAzYmE5NGJcIjogXCJkZmNkNTAxNDZkYThkODEyMmE1YTU3YzJhM2MwYWJjZTUwM2JhOTRiLmpzb25cIixcblx0XCIzNGM4NjI5ZDQyNjVkN2YzZWRlM2FkZDQyZjM2MTNiMjA1ZDk0YzFjXCI6IFwiMzRjODYyOWQ0MjY1ZDdmM2VkZTNhZGQ0MmYzNjEzYjIwNWQ5NGMxYy5qc29uXCIsXG5cdFwiZGIyZGMyNTJhNzg2NjUwZjY0Mzk1YTBmNWQxODFjMDgzMTAxOWNiZlwiOiBcImRiMmRjMjUyYTc4NjY1MGY2NDM5NWEwZjVkMTgxYzA4MzEwMTljYmYuanNvblwiLFxuXHRcImRhNDU5N2Q3M2Q0NDQ3NTdiZGU5MTc2Mzk1YmYzMWFhZDMzMzQxMzFcIjogXCJkYTQ1OTdkNzNkNDQ0NzU3YmRlOTE3NjM5NWJmMzFhYWQzMzM0MTMxLmpzb25cIixcblx0XCJhMmViZjEzZDNjOTM3MWZjZjczOGI5NjUxODI0ZTJjM2NkMWZmOGUwXCI6IFwiYTJlYmYxM2QzYzkzNzFmY2Y3MzhiOTY1MTgyNGUyYzNjZDFmZjhlMC5qc29uXCIsXG5cdFwiYmM0MTkyMzhjMjBkZDFjNWNmZTFjYzQyN2FiM2QxZTMxMzUzNDM2YVwiOiBcImJjNDE5MjM4YzIwZGQxYzVjZmUxY2M0MjdhYjNkMWUzMTM1MzQzNmEuanNvblwiLFxuXHRcIjg0ZThiZTlmZTU2MmZiZDA0ODdjMDNiNTVjYzZiNGYzZmI4Y2Q3ODdcIjogXCI4NGU4YmU5ZmU1NjJmYmQwNDg3YzAzYjU1Y2M2YjRmM2ZiOGNkNzg3Lmpzb25cIixcblx0XCIyMDdlNmM5OGEwZTE0OWRjN2U2ZWQ2NzExODI5NmQ4YThjODliM2MzXCI6IFwiMjA3ZTZjOThhMGUxNDlkYzdlNmVkNjcxMTgyOTZkOGE4Yzg5YjNjMy5qc29uXCIsXG5cdFwiYzE4NWE5MzQ5YmE1YTMyNWFjZjg1MTRlOWI1MGRlNzEyODA0ODhhYVwiOiBcImMxODVhOTM0OWJhNWEzMjVhY2Y4NTE0ZTliNTBkZTcxMjgwNDg4YWEuanNvblwiLFxuXHRcImRkZTQ4MWE1Y2QzNjY3YWU4YzZjNWI1ZTE0MjFkYzg4MmI2YTJkZDZcIjogXCJkZGU0ODFhNWNkMzY2N2FlOGM2YzViNWUxNDIxZGM4ODJiNmEyZGQ2Lmpzb25cIixcblx0XCJmNjNlMTRlOTM1ZDk4OTQ4YjRhMGViYzk2NjM0MDBkYmU0MjYzMzQ4XCI6IFwiZjYzZTE0ZTkzNWQ5ODk0OGI0YTBlYmM5NjYzNDAwZGJlNDI2MzM0OC5qc29uXCIsXG5cdFwiNzliOTY0ZDFhNWM4NTRkZWFlYWNlMjY4MTNmOTY5OTRiYjgyYWVmMlwiOiBcIjc5Yjk2NGQxYTVjODU0ZGVhZWFjZTI2ODEzZjk2OTk0YmI4MmFlZjIuanNvblwiLFxuXHRcIjNiMTE2OGVjOTZhZjAwYzRlODg3MzQxZTkyYTg3OGY4NzUyZTFkMTdcIjogXCIzYjExNjhlYzk2YWYwMGM0ZTg4NzM0MWU5MmE4NzhmODc1MmUxZDE3Lmpzb25cIixcblx0XCI4YzQ2MmJjMjk4ZTMxODNlZmE4ZDllODYzZTI1ZWE1ZDg5ODA2YjAzXCI6IFwiOGM0NjJiYzI5OGUzMTgzZWZhOGQ5ZTg2M2UyNWVhNWQ4OTgwNmIwMy5qc29uXCIsXG5cdFwiOTkzOTY5OGVkYWEyNWJiYWU5ZWUxZDI3ODY0ZTY5OGYxMzk2M2YwNlwiOiBcIjk5Mzk2OThlZGFhMjViYmFlOWVlMWQyNzg2NGU2OThmMTM5NjNmMDYuanNvblwiLFxuXHRcIjczZjFlZTQ5N2IzZTdiNjM5NGU1NTcyNmIxOGRiZjlkNTE0ZGNlYTZcIjogXCI3M2YxZWU0OTdiM2U3YjYzOTRlNTU3MjZiMThkYmY5ZDUxNGRjZWE2Lmpzb25cIixcblx0XCJjN2NkYjgwYmY4MTNlMWRlMjQxMjYwYWVkZTZjZDI4ZWE2NWNjZmFlXCI6IFwiYzdjZGI4MGJmODEzZTFkZTI0MTI2MGFlZGU2Y2QyOGVhNjVjY2ZhZS5qc29uXCIsXG5cdFwiYTk2ZmVkMTZlYWIxYmY2ZDA4ZTQwMDFjMDI4OTRkOWM1NDlkZjYyN1wiOiBcImE5NmZlZDE2ZWFiMWJmNmQwOGU0MDAxYzAyODk0ZDljNTQ5ZGY2MjcuanNvblwiLFxuXHRcImE4ZWFmMTBkYThkYzc1YjQyZTcyYmRjNzA5MTc3NjI0N2ZmZjk2NTdcIjogXCJhOGVhZjEwZGE4ZGM3NWI0MmU3MmJkYzcwOTE3NzYyNDdmZmY5NjU3Lmpzb25cIixcblx0XCJhODE5NGYyMzA5ZTFjNzFlOTc3ZWY4ZDNiZTU3MmFlMDBiMGU5MWYyXCI6IFwiYTgxOTRmMjMwOWUxYzcxZTk3N2VmOGQzYmU1NzJhZTAwYjBlOTFmMi5qc29uXCIsXG5cdFwiMmY0YTE1YjY2ZmNmYjBjN2E0M2EzM2Q5Mzc2Mzk5MDI4MmJmYzVhYVwiOiBcIjJmNGExNWI2NmZjZmIwYzdhNDNhMzNkOTM3NjM5OTAyODJiZmM1YWEuanNvblwiLFxuXHRcIjA2MDk1Y2VmNGE3ZjQ5YjE4ZjE1M2U2N2UzM2ZkZGI4MzFhMTViNDZcIjogXCIwNjA5NWNlZjRhN2Y0OWIxOGYxNTNlNjdlMzNmZGRiODMxYTE1YjQ2Lmpzb25cIixcblx0XCI0YzkzZWFmMGMwY2U1NmYxZTVkNTEwMDkxNmFiZjRkMzFlYjM1ZGE1XCI6IFwiNGM5M2VhZjBjMGNlNTZmMWU1ZDUxMDA5MTZhYmY0ZDMxZWIzNWRhNS5qc29uXCIsXG5cdFwiZjhjNDBjNjdjODUxYTA0ODlmNzQ4MGM5OWIzMWI0ZjYwNmMwMTg0YlwiOiBcImY4YzQwYzY3Yzg1MWEwNDg5Zjc0ODBjOTliMzFiNGY2MDZjMDE4NGIuanNvblwiLFxuXHRcImU0ZTcxZjZlYTU3YmUyZTA1ZDYyYWYwODI1YTgwZjE0NDQyMWUwMmRcIjogXCJlNGU3MWY2ZWE1N2JlMmUwNWQ2MmFmMDgyNWE4MGYxNDQ0MjFlMDJkLmpzb25cIixcblx0XCJlN2Q5ZDUyMDg4Mjc4MmM3Y2ZiZmZlYWRhYWYyMmI0YzBhMDgxYzdjXCI6IFwiZTdkOWQ1MjA4ODI3ODJjN2NmYmZmZWFkYWFmMjJiNGMwYTA4MWM3Yy5qc29uXCIsXG5cdFwiNGFhNGViMTBlYWQ0NGEwYTNjMmRkOTU0MDcwMTdhOTI4MTM4YjMyYlwiOiBcIjRhYTRlYjEwZWFkNDRhMGEzYzJkZDk1NDA3MDE3YTkyODEzOGIzMmIuanNvblwiLFxuXHRcImRhMzFkNTVlZThjYjAxYmNkYjI5NTcyY2I5MDJiOGU3OTk2ODViZTJcIjogXCJkYTMxZDU1ZWU4Y2IwMWJjZGIyOTU3MmNiOTAyYjhlNzk5Njg1YmUyLmpzb25cIixcblx0XCJlNDI3MTgxZmIwMmJiZjE5ZjdiYmI2NWM5ZDkzODlkMmQ5YTQxODEyXCI6IFwiZTQyNzE4MWZiMDJiYmYxOWY3YmJiNjVjOWQ5Mzg5ZDJkOWE0MTgxMi5qc29uXCIsXG5cdFwiYmJjYWI5ZTFjYTYwYTg1MWZkN2VjZmRhODBkZTQ3MGFmYTc0MDkzNlwiOiBcImJiY2FiOWUxY2E2MGE4NTFmZDdlY2ZkYTgwZGU0NzBhZmE3NDA5MzYuanNvblwiLFxuXHRcIjRkZTk2YWEyMDUwNzY4NjNjOWZiNGVhOTllMmJhODZmYTEzMWZmNzZcIjogXCI0ZGU5NmFhMjA1MDc2ODYzYzlmYjRlYTk5ZTJiYTg2ZmExMzFmZjc2Lmpzb25cIixcblx0XCJlNGM2ZDFiMzAwNGUzY2RkMGM4NzlhNTk2MzliNWNlOTkzMjA3YTk5XCI6IFwiZTRjNmQxYjMwMDRlM2NkZDBjODc5YTU5NjM5YjVjZTk5MzIwN2E5OS5qc29uXCIsXG5cdFwiZmJjOWRhNzliOGJmMzlkYzk5OTg0MDg1MjY3NDFmODExYTEzZTZhYVwiOiBcImZiYzlkYTc5YjhiZjM5ZGM5OTk4NDA4NTI2NzQxZjgxMWExM2U2YWEuanNvblwiLFxuXHRcIjUyODU1NGVlNGU2MTVjNjEyODdjNDBlZDlhMmFlYTY5YjkxYWY2YzlcIjogXCI1Mjg1NTRlZTRlNjE1YzYxMjg3YzQwZWQ5YTJhZWE2OWI5MWFmNmM5Lmpzb25cIixcblx0XCI1ZTcwNzNjMDNjMzdkMTk4MjZiMmZiNGE2NTk5Y2NhZWRkZTQ5MmU0XCI6IFwiNWU3MDczYzAzYzM3ZDE5ODI2YjJmYjRhNjU5OWNjYWVkZGU0OTJlNC5qc29uXCIsXG5cdFwiNzFjNGE4ODZjZGVlNThhMzcxYWUyMTE1MzExYjE1MGU4NGU1NTVmNlwiOiBcIjcxYzRhODg2Y2RlZTU4YTM3MWFlMjExNTMxMWIxNTBlODRlNTU1ZjYuanNvblwiLFxuXHRcIjRiY2UwOTcwYTQ2NWZlOWI5NjMwNWUwNmFmMTljNWQ5Yzk3ZDdjYzNcIjogXCI0YmNlMDk3MGE0NjVmZTliOTYzMDVlMDZhZjE5YzVkOWM5N2Q3Y2MzLmpzb25cIixcblx0XCJlZmRiMWYwYTcwZjIyZjgwZmYzY2VhMGNiNzliZWM3MTdmYzhiNmY3XCI6IFwiZWZkYjFmMGE3MGYyMmY4MGZmM2NlYTBjYjc5YmVjNzE3ZmM4YjZmNy5qc29uXCIsXG5cdFwiMTc0YzZmNzg2ZDEzOWNlMTExMzgxMDQ1ZDYwZDI1NjgyYTE2OGI5OVwiOiBcIjE3NGM2Zjc4NmQxMzljZTExMTM4MTA0NWQ2MGQyNTY4MmExNjhiOTkuanNvblwiLFxuXHRcImE4YzIzZTg4ZDZjYTZkNGVmZDI2NDZiMDc0MmMwZmEzMmRiZDU1YTRcIjogXCJhOGMyM2U4OGQ2Y2E2ZDRlZmQyNjQ2YjA3NDJjMGZhMzJkYmQ1NWE0Lmpzb25cIixcblx0XCJmNjk0OWMyODc1MmRlMzVhODcwZWZkZTMwODU4NWFjZDQ2YTI1Mjc4XCI6IFwiZjY5NDljMjg3NTJkZTM1YTg3MGVmZGUzMDg1ODVhY2Q0NmEyNTI3OC5qc29uXCIsXG5cdFwiYzFiZGI4Y2JhZmQ1ZDVkOGY2YmRhMmI0ZGIxNmI2YmMyZDYyZTE4YVwiOiBcImMxYmRiOGNiYWZkNWQ1ZDhmNmJkYTJiNGRiMTZiNmJjMmQ2MmUxOGEuanNvblwiLFxuXHRcIjJiODFhOGY2MDIyNTFjZjQwYjQ2ODJjOGNlZGIzOTY2YjkxMmQ3YzZcIjogXCIyYjgxYThmNjAyMjUxY2Y0MGI0NjgyYzhjZWRiMzk2NmI5MTJkN2M2Lmpzb25cIixcblx0XCI4Zjk0ZTg0M2QyNTEwMDQ3ZmQxYWY0NmYyNDlhZmU4N2ZmNDljYzJmXCI6IFwiOGY5NGU4NDNkMjUxMDA0N2ZkMWFmNDZmMjQ5YWZlODdmZjQ5Y2MyZi5qc29uXCIsXG5cdFwiNGUzZGRiNTE1NTBjMDNjNjRmZGJlNTU5MjUyNjY2NTEwMGQzMjkzMFwiOiBcIjRlM2RkYjUxNTUwYzAzYzY0ZmRiZTU1OTI1MjY2NjUxMDBkMzI5MzAuanNvblwiLFxuXHRcImY4MTZiMjNhZjlhYTQzMTJjODBlNjY4YTY2YTE1NmM5MzRjYjMzMGNcIjogXCJmODE2YjIzYWY5YWE0MzEyYzgwZTY2OGE2NmExNTZjOTM0Y2IzMzBjLmpzb25cIixcblx0XCIyZmUwNWE5MTFhNTc0YjhhNmQ0YjA1ZWIxM2RiOWUwOWFhYWNhZDJkXCI6IFwiMmZlMDVhOTExYTU3NGI4YTZkNGIwNWViMTNkYjllMDlhYWFjYWQyZC5qc29uXCIsXG5cdFwiNWM3MTQ5NjcyNjM5NWFhYTRkMGE2NTM3M2ZkMTY1MWI1YTBlNmIxZlwiOiBcIjVjNzE0OTY3MjYzOTVhYWE0ZDBhNjUzNzNmZDE2NTFiNWEwZTZiMWYuanNvblwiLFxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IGRlYnVnIH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBUb2tlbkRpc3BsYXkgfSBmcm9tICcuLi9kYXRhL1Rva2VuV3JhcHBlcidcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIHJzcCBmcm9tICcuL3Jlc3BvbnNlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBEZW1vQVBJIH0gZnJvbSAnLi9kZW1vQVBJJ1xuaW1wb3J0ICogYXMgaGFzaCBmcm9tICdvYmplY3QtaGFzaCdcbmltcG9ydCB7IG1ha2VVcmwsIHRvUGF5bG9hZCB9IGZyb20gJy4uL2V0Yy9hcGlIZWxwZXJzJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gJy4uL2V0Yy9VUkxIYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGVtcHR5VG9rZW5EaXNwbGF5ID0gbmV3IFRva2VuRGlzcGxheSgpXG5cbmNvbnN0IGJhc2V1cmwgPSBVUkxIYW5kbGVyLmJhc2ljVVJMKClcblxuLyoqXG4gKiBBIHJld3JpdGUgb2YgYGQzLWZldGNoYCdzIGBkMy5qc29uYCBjYWxsYmFjay4gSWYgYW4gYXBpIGNhbGwgZmFpbHMsIG1ha2UgYSBiYWNrdXAgY2FsbCB0byBzcGVjaWZpZWQgdXJsIGFuZCBwYXlsb2FkLCBpZiBzcGVjaWZpZWQuXG4gKiBcbiAqIEBwYXJhbSByZXNwb25zZSBPYmplY3QgZXhwZWN0ZWQgYXQgdGltZSBvZiBjYWxsYmFja1xuICogQHBhcmFtIGJhY2t1cFVybCBCYWNrdXAgdXJsIGluIHRoZSBldmVudCBvZiBmYWlsXG4gKiBAcGFyYW0gYmFja3VwUGF5bG9hZCBCYWNrdXAgcGF5bG9hZCBpZiBtYWtpbmcgYSBwb3N0IHJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gcmVzcG9uc2VKc29uKHJlc3BvbnNlLCBiYWNrdXBVcmwgPSBudWxsLCBiYWNrdXBQYXlsb2FkID0gbnVsbCkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgaWYgKGJhY2t1cFVybCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNUQVRJQyBGSUxFIE5PVCBGT1VORFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpLnRoZW4ocmVzcG9uc2VKc29uKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG59XG5cbi8qKlxuICogQ2hlY2sgZmlyc3QgaWYgdGhlIGluZm9ybWF0aW9uIGJlaW5nIHNlbnQgZXhpc3RzIGluIGEgc3RhdGljIGRlbW8gZmlsZS4gSWYgaXQgZG9lcywgc2VuZCB0aGF0LiBPdGhlcndpc2UsIG1ha2UgYSBub3JtYWwgY2FsbCB0byB0aGUgc2VydmVyLlxuICogXG4gKiBAcGFyYW0gdG9TZW5kIFRoZSBwYWNrZXQgb2YgaW5mb3JtYXRpb24gdG8gc2VuZCB0byBhbiBBUEkgZW5kcG9pbnRcbiAqIEBwYXJhbSBiYWNrdXBVcmwgQmFja3VwIHVybCBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZGVtbyBmaWxlIGlzIG5vdCBmb3VuZFxuICogQHBhcmFtIGJhY2t1cFBheWxvYWQgQmFja3VwIHBheWxvYWQgaWYgZGVtbyBmaWxlIG5vdCBmb3VuZCwgZm9yIFBPU1QgcmVxdWVzdHMgb25seVxuICovXG5mdW5jdGlvbiBjaGVja0RlbW9BUEkodG9TZW5kLCBiYWNrdXBVcmwgPSBudWxsLCBiYWNrdXBQYXlsb2FkID0gbnVsbCkge1xuICAgIGNvbnN0IGhzaCA9IGhhc2guc2hhMSh0b1NlbmQpO1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tJTkcgREVNT0FQSTogXCIgKyBoc2gpO1xuICAgIGlmIChEZW1vQVBJLmhhc093blByb3BlcnR5KGhzaCkpIHtcbiAgICAgICAgLy8gUmVsaWVzIG9uIGEgc3ltYm9saWMgbGluayBiZWluZyBwcmVzZW50IGluIHRoZSBkaXN0IGZvbGRlciB0byB0aGUgZGVtbyBmb2xkZXJcbiAgICAgICAgY29uc3QgcGF0aCA9ICcuL2RlbW8vJyArIERlbW9BUElbaHNoXVxuICAgICAgICBjb25zb2xlLmxvZyhcIlRSWUlORyBUTyBTRU5ESU5HIFNUQVRJQzogXCIsIHBhdGgpO1xuICAgICAgICBjb25zdCBmb2xsb3cgPSAocmVzcG9uc2UpID0+IHJlc3BvbnNlSnNvbihyZXNwb25zZSwgYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKVxuICAgICAgICByZXR1cm4gZmV0Y2gocGF0aCkudGhlbihmb2xsb3cpXG4gICAgfVxuICAgIHJldHVybiBkMy5qc29uKGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZClcbn1cblxuXG5leHBvcnQgY2xhc3MgQVBJIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZVVSTDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5iYXNlVVJMID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVSTCA9IGJhc2V1cmwgKyAnL2FwaSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2RlbERldGFpbHMobW9kZWw6IHN0cmluZywgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLk1vZGVsRGV0YWlsUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArIFwiL2dldC1tb2RlbC1kZXRhaWxzXCIsIHRvU2VuZClcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cblxuICAgIGdldE1ldGFBdHRlbnRpb25zKG1vZGVsOiBzdHJpbmcsIHNlbnRlbmNlOiBzdHJpbmcsIGxheWVyOiBudW1iZXIsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHNlbnRlbmNlLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyBcIi9hdHRlbmQrbWV0YVwiLCB0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmpcbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRpc3BsYXkgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIHRoYXQgd2FzIGFscmVhZHkgcGFyc2VkIGZyb20gdGhlIHBhc3NlZCBzZW50ZW5jZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYSBUaGUgZGlzcGxheWVkIHRva2VucyBpbiB0aGUgY29sdW1ucyBcbiAgICAgKiBAcGFyYW0gc2VudGVuY2VBIFRoZSBvcmlnaW5hbCBzZW50ZW5jZSB0aGF0IGxlZCB0byB0aGUgdG9rZW5pemVkIGluZm9ybWF0aW9uIGluIGBhYFxuICAgICAqIEBwYXJhbSBsYXllciBXaGljaCBsYXllciB0byBzZWFyY2ggYXRcbiAgICAgKiBAcGFyYW0gaGFzaE9iaiBJZiBub3QgbnVsbCwgc3RvcmUgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSByZXNwb25zZXMgaW50byB0aGUgcGFzc2VkIG9iamVjdC4gVXNlZCBmb3IgY3JlYXRpbmcgZGVtb3MuXG4gICAgICovXG4gICAgdXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbDogc3RyaW5nLCB0b2tlbnM6IFRva2VuRGlzcGxheSwgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICB0b2tlbnM6IFIubWFwKFIucHJvcCgndGV4dCcpLCB0b2tlbnMudG9rZW5EYXRhKSxcbiAgICAgICAgICAgIHNlbnRlbmNlOiBzZW50ZW5jZSxcblxuICAgICAgICAgICAgLy8gRW1wdHkgbWFza3MgbmVlZCB0byBiZSBzZW50IGFzIGEgbnVtYmVyLCB1bmZvcnR1bmF0ZWx5LiBDaG9vc2luZyAtMSBmb3IgdGhpc1xuICAgICAgICAgICAgbWFzazogdG9rZW5zLm1hc2tJbmRzLmxlbmd0aCA/IHRva2Vucy5tYXNrSW5kcyA6IFstMV0sXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvdXBkYXRlLW1hc2snKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRvUGF5bG9hZCh0b1NlbmQpXG5cblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGFzaCBhbmQgdmFsdWUgdG8gaGFzaE9iaiBmb3IgZGVtbyBwdXJwb3Nlc1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsLCBwYXlsb2FkKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gUE9TVCBcIiArIHVybCwgcGF5bG9hZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybCwgcGF5bG9hZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gZW1iZWRkaW5nIEVtYmVkZGluZyBvZiB0aGUgd29yZFxuICAgICAqIEBwYXJhbSBsYXllciBJbiB0aGUgbCd0aCBsYXllclxuICAgICAqIEBwYXJhbSBrIGhvdyBtYW55IHJlc3VsdHMgdG8gcmV0cmlldmVcbiAgICAgKi9cbiAgICBnZXROZWFyZXN0RW1iZWRkaW5ncyhtb2RlbDogc3RyaW5nLCBjb3JwdXM6IHN0cmluZywgZW1iZWRkaW5nOiBudW1iZXJbXSwgbGF5ZXI6IG51bWJlciwgaGVhZHM6IG51bWJlcltdLCBrID0gMTAsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHJzcC5OZWFyZXN0TmVpZ2hib3JSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBjb3JwdXM6IGNvcnB1cyxcbiAgICAgICAgICAgIGVtYmVkZGluZzogZW1iZWRkaW5nLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgaGVhZHM6IGhlYWRzLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy9rLW5lYXJlc3QtZW1iZWRkaW5ncycsIHRvU2VuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICBnZXROZWFyZXN0Q29udGV4dHMobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGNvbnRleHQ6IG51bWJlcltdLCBsYXllcjogbnVtYmVyLCBoZWFkczogbnVtYmVyW10sIGsgPSAxMCwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8cnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHRvU2VuZCA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgICAgIGNvcnB1czogY29ycHVzLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgICAgIGhlYWRzOiBoZWFkcyxcbiAgICAgICAgICAgIGs6IGssXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHRoaXMuYmFzZVVSTCArICcvay1uZWFyZXN0LWNvbnRleHRzJywgdG9TZW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gR0VUIFwiICsgdXJsKTtcblxuICAgICAgICBpZiAoaGFzaE9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoYXNoLnNoYTEodG9TZW5kKVxuICAgICAgICAgICAgZDMuanNvbih1cmwpLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaGFzaE9ialtrZXldID0gcjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2tEZW1vQVBJKHRvU2VuZCwgdXJsKVxuICAgIH1cbn07XG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vKipcbiAqIE5vdGVzOlxuICogXG4gKiAtIEFsc28gZW5jYXBzdWxhdGUgdGhlIENMUy9TRVAgaW5mbyB2cy4gbm8gQ0xTL1NFUCBpbmZvXG4gKiAtIFdoZW4gbGF5ZXIgZm9ybWF0IGNoYW5nZXMgZnJvbSBsaXN0LCBkcm9wIHRoZSBpbmRleCBpbnRvIGNvbmYubGF5ZXJcbiAqL1xuXG5jb25zdCBicGVUb2tlbnMgPSBbXCJbQ0xTXVwiLCBcIltTRVBdXCIsIFwiPHM+XCIsIFwiPC9zPlwiXVxuY29uc3QgZmluZEJhZEluZGV4ZXMgPSAoeDogdHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdKSA9PiB4Xy5maW5kQWxsSW5kZXhlcyh4Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnJvbU1ldGFSZXNwb25zZShyOnRwLkF0dGVudGlvblJlc3BvbnNlLCBpc1plcm9lZCl7XG4gICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgIGNvbnN0IGN1cnJQYWlyID0gcltrZXldXG4gICAgY29uc3QgbGVmdCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIubGVmdFxuICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuICAgIGNvbnN0IGxlZnRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMobGVmdC5tYXAodCA9PiB0LnRleHQpLCAoYSkgPT4gXy5pbmNsdWRlcyhicGVUb2tlbnMsIGEpKVxuICAgIGNvbnN0IHJpZ2h0WmVybyA9IHhfLmZpbmRBbGxJbmRleGVzKHJpZ2h0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgcmV0dXJuIG5ldyBBdHRlbnRpb25XcmFwcGVyKGN1cnJQYWlyLmF0dCwgW2xlZnRaZXJvLCByaWdodFplcm9dLCBpc1plcm9lZClcbn1cblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbldyYXBwZXIge1xuICAgIHByb3RlY3RlZCBfYXR0Om51bWJlcltdW11bXVxuICAgIHByb3RlY3RlZCBfYXR0VGVuc29yOnRmLlRlbnNvcjNEXG4gICAgcHJvdGVjdGVkIF96ZXJvZWRBdHRUZW5zb3I6dGYuVGVuc29yM0RcblxuICAgIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV0gLy8gSW5kZXhlcyBmb3IgdGhlIENMUyBhbmQgU0VQIHRva2Vuc1xuICAgIGlzWmVyb2VkOiBib29sZWFuXG4gICAgbkxheWVycyA9IDEyO1xuICAgIG5IZWFkcyA9IDEyO1xuXG4gICAgY29uc3RydWN0b3IoYXR0Om51bWJlcltdW11bXSwgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXT1bW10sW11dLCBpc1plcm9lZD10cnVlKXtcbiAgICAgICAgdGhpcy5pbml0KGF0dCwgYmFkVG9rcywgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgaW5pdChhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkKSB7XG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSBpc1plcm9lZFxuICAgICAgICB0aGlzLl9hdHQgPSBhdHQ7XG4gICAgICAgIHRoaXMuX3plcm9lZEF0dFRlbnNvciA9IHplcm9Sb3dDb2wodGYudGVuc29yM2QoYXR0KSwgYmFkVG9rc1swXSwgYmFkVG9rc1sxXSlcbiAgICAgICAgdGhpcy5fYXR0VGVuc29yID0gdGYudGVuc29yM2QoYXR0KSAvLyBJZiBJIHB1dCB0aGlzIGZpcnN0LCBidWZmZXIgbW9kaWZpY2F0aW9ucyBjaGFuZ2UgdGhpcyB0b28uXG4gICAgICAgIHRoaXMuYmFkVG9rcyA9IGJhZFRva3M7XG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbU5vcm1hbChyOnRwLkF0dGVudGlvblJlc3BvbnNlLCBpc1plcm9lZCl7XG4gICAgICAgIGNvbnN0IGtleSA9ICdhYScgLy8gQ2hhbmdlIHRoaXMgaWYgYmFja2VuZCByZXNwb25zZSBjaGFuZ2VzIHRvIGJlIHNpbXBsZXJcbiAgICAgICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICAgICAgY29uc3QgbGVmdCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIubGVmdFxuICAgICAgICBjb25zdCByaWdodCA9IDx0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10+Y3VyclBhaXIucmlnaHRcblxuICAgICAgICBjb25zdCBsZWZ0WmVybyA9IGZpbmRCYWRJbmRleGVzKGxlZnQpXG4gICAgICAgIGNvbnN0IHJpZ2h0WmVybyA9IGZpbmRCYWRJbmRleGVzKHJpZ2h0KVxuICAgICAgICB0aGlzLmluaXQoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxuICAgIH1cblxuICAgIGdldCBhdHRUZW5zb3IoKSB7XG4gICAgICAgIGNvbnN0IHRlbnMgPSB0aGlzLmlzWmVyb2VkID8gdGhpcy5femVyb2VkQXR0VGVuc29yIDogdGhpcy5fYXR0VGVuc29yXG4gICAgICAgIHJldHVybiB0ZW5zXG4gICAgfVxuXG4gICAgZ2V0IGF0dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0VGVuc29yLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgemVyb2VkKCk6IGJvb2xlYW5cbiAgICB6ZXJvZWQodmFsOmJvb2xlYW4pOiB0aGlzXG4gICAgemVyb2VkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5pc1plcm9lZFxuICAgICAgICB0aGlzLmlzWmVyb2VkID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlWmVyb2luZygpIHtcbiAgICAgICAgdGhpcy56ZXJvZWQoIXRoaXMuemVyb2VkKCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9ieUhlYWRzKGhlYWRzOm51bWJlcltdKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIGlmIChoZWFkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRmLnplcm9zTGlrZSh0aGlzLl9ieUhlYWQoMCkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDx0Zi5UZW5zb3IyRD50aGlzLmF0dFRlbnNvci5nYXRoZXIoaGVhZHMsIDApLnN1bSgwKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZChoZWFkOm51bWJlcik6dGYuVGVuc29yMkQge1xuICAgICAgICByZXR1cm4gKDx0Zi5UZW5zb3IyRD50aGlzLmF0dFRlbnNvci5nYXRoZXIoW2hlYWRdLCAwKS5zcXVlZXplKFswXSkpXG4gICAgfVxuXG4gICAgYnlIZWFkcyhoZWFkczpudW1iZXJbXSk6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ieUhlYWRzKGhlYWRzKS5hcnJheVN5bmMoKVxuICAgIH1cblxuICAgIGJ5SGVhZChoZWFkOm51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ieUhlYWQoaGVhZCkuYXJyYXlTeW5jKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHplcm9Sb3dDb2wodGVuczp0Zi5UZW5zb3IzRCwgcm93czpudW1iZXJbXSwgY29sczpudW1iZXJbXSk6dGYuVGVuc29yM0Qge1xuICAgIGxldCBvdXRUZW5zID0gdGVucy5jbG9uZSgpXG4gICAgbGV0IGF0YiA9IG91dFRlbnMuYnVmZmVyU3luYygpXG4gICAgXy5yYW5nZShhdGIuc2hhcGVbMF0pLmZvckVhY2goKGhlYWQpID0+IHtcbiAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCByb3dzIHRvIDBcbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKHJvd3MsIGkpKSB7XG4gICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXRiLnNldCgwLCBoZWFkLCBpLCBqKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBjb2xzIHRvIDBcbiAgICAgICAgICAgIF8ucmFuZ2UoYXRiLnNoYXBlWzJdKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoY29scywgaikpXG4gICAgICAgICAgICAgICAgICAgIF8ucmFuZ2UoYXRiLnNoYXBlWzFdKS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gb3V0VGVuc1xufSIsImltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICdkMy1hcnJheSdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge1NwYWN5SW5mb30gZnJvbSAnLi4vZXRjL1NwYWN5SW5mbydcbmltcG9ydCB7aW5pdFplcm99IGZyb20gJy4uL2V0Yy94cmFtZGEnXG5cbi8vIElmIHZhbHVlIGlzIG5vdCBhIHN0cmluZywgZG9uJ3QgdHJ5IHRvIG1ha2UgbG93ZXJjYXNlXG5jb25zdCBtYWtlU3RyaW5nTG93ZXIgPSBSLmlmRWxzZShSLmlzKFN0cmluZyksIFIudG9Mb3dlciwgUi5pZGVudGl0eSlcblxuZnVuY3Rpb24gYXJnTWF4KGFycmF5Om51bWJlcltdKSB7XG4gIHJldHVybiBbXS5tYXAuY2FsbChhcnJheSwgKHgsIGkpID0+IFt4LCBpXSkucmVkdWNlKChyLCBhKSA9PiAoYVswXSA+IHJbMF0gPyBhIDogcikpWzFdO1xufVxuXG5jb25zdCBnZXRNYXhUb2tlbiA9IChkOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHMpID0+IGQudG9rZW5zW2FyZ01heChkLm1hdGNoZWRfYXR0Lm91dC5hdHQpXVxuXG5cbmV4cG9ydCBjbGFzcyBGYWlzc1NlYXJjaFJlc3VsdFdyYXBwZXIge1xuICAgIGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHBvc2l0aW9uIGluZm8gaW50ZXJwcmV0YWJsZSBieSB0aGUgaGlzdG9ncmFtXG4gICAgICogXG4gICAgICogQHBhcmFtIGNvdW50T2JqIFJlcHJlc2VudHMgdGhlIGluZm9ycm1hdGlvbiB0byBiZSBkaXNwbGF5ZWQgYnkgdGhlIGhpc3RvZ3JhbVxuICAgICAqL1xuICAgIGNvdW50UG9zSW5mbygpIHtcbiAgICAgICAgY29uc3QgYXR0T2Zmc2V0cyA9IHRoaXMuZGF0YS5tYXAoKGQsaSkgPT4gK2QubWF0Y2hlZF9hdHQub3V0Lm9mZnNldF90b19tYXgpXG5cbiAgICAgICAgY29uc3QgY3RPYmogPSB7XG4gICAgICAgICAgICBvZmZzZXQ6IGluaXRaZXJvKGF0dE9mZnNldHMpXG4gICAgICAgIH1cblxuICAgICAgICBhdHRPZmZzZXRzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjdE9iaikuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICAgICAgICAgIGN0T2JqW2tdW3ZdICs9IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGN0T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXhBdHRLZXlzKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgLy8gVGhlIGtleXMgaW4gdGhlIGJlbG93IG9iamVjdCBkaWN0YXRlIHdoYXQgd2UgY291bnRcbiAgICAgICAgY29uc3QgY291bnRPYmogPSB7XG4gICAgICAgICAgICBwb3M6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmRlcCksXG4gICAgICAgICAgICBpc19lbnQ6IGluaXRaZXJvKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heE1hdGNoID0gZ2V0TWF4VG9rZW4oZClcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXhNYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBuZXdDb3VudE9iaiA9IE9iamVjdC5hc3NpZ24oY291bnRPYmosIHRoaXMuY291bnRQb3NJbmZvKCkpXG4gICAgICAgIHJldHVybiBuZXdDb3VudE9ialxuICAgIH1cblxuICAgIGNvdW50TWF0Y2hlZEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBkLnRva2Vuc1tkLmluZGV4ICsgaW5kZXhPZmZzZXRdXG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvdW50T2JqKS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1ha2VTdHJpbmdMb3dlcihTdHJpbmcobWF0Y2hba10pKVxuICAgICAgICAgICAgICAgIGNvdW50T2JqW2tdW3ZhbF0gKz0gMTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvdW50T2JqXG4gICAgfVxuXG4gICAgZ2V0TWF0Y2hlZEhpc3RvZ3JhbShpbmRleE9mZnNldD0wKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsSGlzdCA9IHRoaXMuY291bnRNYXRjaGVkS2V5cyhpbmRleE9mZnNldClcbiAgICAgICAgY29uc3QgZmlsdGVyWmVyb3MgPSAodmFsLCBrZXkpID0+IHZhbCAhPSAwO1xuICAgICAgICBjb25zdCBub25aZXJvID0gUi5tYXAoUi5waWNrQnkoZmlsdGVyWmVyb3MpLCB0b3RhbEhpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG5cbiAgICBnZXRNYXhBdHRIaXN0b2dyYW0oKSB7XG4gICAgICAgIC8vIGNvbnN0IHRvdGFsSGlzdCA9IHRoaXMuY291bnRQb3NJbmZvKClcbiAgICAgICAgY29uc3QgbmV3SGlzdCA9IHRoaXMuY291bnRNYXhBdHRLZXlzKClcbiAgICAgICAgY29uc3QgZmlsdGVyWmVyb3MgPSAodmFsLCBrZXkpID0+IHZhbCAhPSAwO1xuICAgICAgICBjb25zdCBub25aZXJvID0gUi5tYXAoUi5waWNrQnkoZmlsdGVyWmVyb3MpLCBuZXdIaXN0KVxuXG4gICAgICAgIHJldHVybiBub25aZXJvXG4gICAgfVxufSIsImltcG9ydCAqIGFzIHhfIGZyb20gJy4uL2V0Yy9fVG9vbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogVGhlIG9yaWdpbmFsIHRva2VucywgYW5kIHRoZSBpbmRleGVzIHRoYXQgbmVlZCB0byBiZSBtYXNrZWRcbiAqL1xuIGNvbnN0IGVtcHR5RnVsbFJlc3BvbnNlOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10gPSBbe1xuICAgICB0ZXh0OiAnW1NFUF0nLFxuICAgICBlbWJlZGRpbmdzOiBbXSxcbiAgICAgY29udGV4dHM6IFtdLFxuICAgICBicGVfdG9rZW46ICcnLFxuICAgICBicGVfcG9zOiAnJyxcbiAgICAgYnBlX2RlcDogJycsXG4gICAgIGJwZV9pc19lbnQ6IG51bGwsXG4gICAgIHRvcGtfd29yZHM6IFtdLFxuICAgICB0b3BrX3Byb2JzOiBbXVxuIH1dXG5cbmV4cG9ydCBjbGFzcyBUb2tlbkRpc3BsYXkgIHtcbiAgICB0b2tlbkRhdGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdXG4gICAgbWFza0luZHM6bnVtYmVyW11cblxuICAgIGNvbnN0cnVjdG9yKHRva2Vucz1lbXB0eUZ1bGxSZXNwb25zZSwgbWFza0luZHM9W10pe1xuICAgICAgICB0aGlzLnRva2VuRGF0YSA9IHRva2VucztcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IG1hc2tJbmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2ggaWR4IHRvIHRoZSBtYXNrIGlkeCBsaXN0IGluIG9yZGVyIGZyb20gc21hbGxlc3QgdG8gbGFyZ2VzdFxuICAgICAqL1xuICAgIG1hc2sodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgeF8ub3JkZXJlZEluc2VydF8odGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsfSBhbHJlYWR5IGluIG1hc2tJbmRzIWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXNrSW5kcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUodmFsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJbmQgPSBfLmluZGV4T2YodGhpcy5tYXNrSW5kcywgdmFsKVxuICAgICAgICBpZiAoY3VyckluZCA9PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLm1hc2sodmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFVubWFza2luZyAke3ZhbH1gKTtcbiAgICAgICAgICAgIHRoaXMudW5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubWFzayh2YWwpIHtcbiAgICAgICAgXy5wdWxsKHRoaXMubWFza0luZHMsIHZhbCk7XG4gICAgfVxuXG4gICAgcmVzZXRNYXNrKCkge1xuICAgICAgICB0aGlzLm1hc2tJbmRzID0gW107XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbkRhdGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbmNhdChvdGhlcjogVG9rZW5EaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IG5ld1Rva2VucyA9IF8uY29uY2F0KHRoaXMudG9rZW5EYXRhLCBvdGhlci50b2tlbkRhdGEpO1xuICAgICAgICBjb25zdCBuZXdNYXNrID0gXy5jb25jYXQodGhpcy5tYXNrSW5kcywgb3RoZXIubWFza0luZHMubWFwKHggPT4geCArIHRoaXMubGVuZ3RoKCkpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbkRpc3BsYXkobmV3VG9rZW5zLCBuZXdNYXNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbldyYXBwZXIge1xuICAgIGE6IFRva2VuRGlzcGxheVxuXG4gICAgY29uc3RydWN0b3Iocjp0cC5BdHRlbnRpb25SZXNwb25zZSl7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlc3BvbnNlKHIpO1xuICAgIH1cblxuICAgIHVwZGF0ZUZyb21SZXNwb25zZShyOnRwLkF0dGVudGlvblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHRva2Vuc0EgPSByLmFhLmxlZnQ7XG4gICAgICAgIHRoaXMudXBkYXRlRnJvbUNvbXBvbmVudHModG9rZW5zQSwgW10pXG4gICAgfVxuXG4gICAgdXBkYXRlRnJvbUNvbXBvbmVudHMoYTp0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10sIG1hc2tBOm51bWJlcltdKXtcbiAgICAgICAgdGhpcy5hID0gbmV3IFRva2VuRGlzcGxheShhLCBtYXNrQSlcbiAgICB9XG5cbiAgICB1cGRhdGVUb2tlbnMocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZGVzaXJlZEtleXMgPSBbJ2NvbnRleHRzJywgJ2VtYmVkZGluZ3MnLCAndG9wa19wcm9icycsICd0b3BrX3dvcmRzJ11cbiAgICAgICAgY29uc3QgbmV3VG9rZW5zID0gci5hYS5sZWZ0Lm1hcCh2ID0+IFIucGljayhkZXNpcmVkS2V5cywgdikpXG5cbiAgICAgICAgY29uc3QgcGFpcnMgPSBSLnppcCh0aGlzLmEudG9rZW5EYXRhLCBuZXdUb2tlbnMpXG5cbiAgICAgICAgcGFpcnMuZm9yRWFjaCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZFsxXSkubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgIGRbMF1ba10gPSBkWzFdW2tdXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFzayB0aGUgYXBwcm9wcmlhdGUgc2VudGVuY2UgYXQgdGhlIGluZGV4IGluZGljYXRlZFxuICAgICAqL1xuICAgIG1hc2soc0lEOnRwLlRva2VuT3B0aW9ucywgaWR4Om51bWJlcil7XG4gICAgICAgIHRoaXNbc0lEXS5tYXNrKGlkeClcbiAgICAgICAgY29uc3Qgb3B0cyA9IFtcImFcIiwgXCJiXCJdXG4gICAgICAgIGNvbnN0IE5hID0gdGhpcy5hLmxlbmd0aCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGVUb0xldHRlcihzaWRlOnRwLlNpZGVPcHRpb25zLCBhdHlwZTp0cC5TZW50ZW5jZU9wdGlvbnMpe1xuICAgIC8vIGNvbnN0IGF0eXBlID0gY29uZi5hdHRUeXBlO1xuICAgIGlmIChhdHlwZSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHJldHVybiBcImFsbFwiXG4gICAgfVxuICAgIGNvbnN0IG91dCA9IHNpZGUgPT0gXCJsZWZ0XCIgPyBhdHlwZVswXSA6IGF0eXBlWzFdIC8vIE5vIHR5cGUgY2hlY2tpbmc/XG4gICAgcmV0dXJuIG91dFxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCJcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCdcblxuLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkcge1xuICAgIHN0YXRpYyB0cmFuc2xhdGUoe3gsIHl9KTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsXCIgKyB5ICsgXCIpXCJcbiAgICB9XG5cbiAgICBzdGF0aWMgcm90YXRlKGRlZyk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGByb3RhdGUoJHtkZWd9KWBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ3JvdXAocGFyZW50LCBjbGFzc2VzLCBwb3MgPSB7eDogMCwgeTogMH0pIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRycyh7XG4gICAgICAgICAgICBjbGFzczogY2xhc3NlcyxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFNWRy50cmFuc2xhdGUocG9zKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU1ZHTWVhc3VyZW1lbnRzIHtcblxuICAgIHByaXZhdGUgbWVhc3VyZUVsZW1lbnQ6IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoYmFzZUVsZW1lbnQsIGNsYXNzZXMgPSAnJykge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50ID0gYmFzZUVsZW1lbnQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRycyh7eDogMCwgeTogLTIwLCBjbGFzczogY2xhc3Nlc30pXG5cbiAgICB9XG5cbiAgICB0ZXh0TGVuZ3RoKHRleHQsIHN0eWxlID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LmF0dHIoJ3N0eWxlJywgc3R5bGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgIGNvbnN0IHRsID0gKDxTVkdUZXh0RWxlbWVudD4gdGhpcy5tZWFzdXJlRWxlbWVudC5ub2RlKCkpLmdldENvbXB1dGVkVGV4dExlbmd0aCgpO1xuICAgICAgICB0aGlzLm1lYXN1cmVFbGVtZW50LnRleHQoJycpO1xuXG4gICAgICAgIHJldHVybiB0bDtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICogTW9kaWZpZWQgYnkgaG9vIG9uIDQvMTYvMTkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVFdmVudEhhbmRsZXIge1xuXG4gICAgZWxlbWVudDogRWxlbWVudDtcbiAgICBldmVudExpc3RlbmVyczogb2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXVxuICAgIH1cblxuICAgIGJpbmQoZXZlbnROYW1lczogc3RyaW5nLCBldmVudEZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzLnNwbGl0KCcgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaCh7ZXZlbnROYW1lLCBldmVudEZ1bmN0aW9ufSk7XG4gICAgICAgICAgICBjb25zdCBldmVudEZ1bmN0aW9uV3JhcCA9IGUgPT4gZXZlbnRGdW5jdGlvbihlLmRldGFpbCwgZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50RnVuY3Rpb25XcmFwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnROYW1lOiBzdHJpbmcsIGRldGFpbDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHRwIGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge0NPTE9SUzIwMH0gZnJvbSAnLi4vZXRjL2NvbG9ycycgXG5cbmV4cG9ydCBjbGFzcyBTcGFjeUluZm8ge1xuICAgIGNvbG9yU2NhbGU6dHAuQ29sb3JNZXRhU2NhbGVcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29sb3JTY2FsZSA9IHRoaXMuY3JlYXRlQ29sb3JTY2FsZXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgRW5nbGlzaE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ3B1bmN0JywgJ3N5bScsICd4JywgJ2FkaicsICd2ZXJiJywgJ2NvbmonLCAnbnVtJywgJ2V0JywgJ2FkdicsICd4JywgJ2FkcCcsICdub3VuJywgJ3Byb3BuJywgJ3BhcnQnLCAncHJvbicsICdzcGFjZScsICdpbnRqJ10sXG4gICAgICAgIGRlcDogWydyb290JywgJ1JPT1QnLCAnYWNsJywgJ2Fjb21wJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhZ2VudCcsICdhbW9kJywgJ2FwcG9zJywgJ2F0dHInLCAnYXV4JywgJ2F1eHBhc3MnLCAnY2FzZScsICdjYycsICdjY29tcCcsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsIFxuICAgICAgICAnY3N1YmpwYXNzJywgJ2RhdGl2ZScsICdkZXAnLCAnZGV0JywgJ2RvYmonLCAnZXhwbCcsICdpbnRqJywgJ21hcmsnLCAnbWV0YScsICduZWcnLCAnbm4nLCAnbm91bm1vZCcsICducG1vZCcsICduc3ViaicsICduc3VianBhc3MnLCAnbnVtbW9kJywgJ29wcmQnLCBcbiAgICAgICAgJ29iaicsICdvYmwnLCAncGFyYXRheGlzJywgJ3Bjb21wJywgJ3BvYmonLCAncG9zcycsICdwcmVjb25qJywgJ3ByZWRldCcsICdwcmVwJywgJ3BydCcsICdwdW5jdCcsICdxdWFudG1vZCcsICdyZWxjbCcsICdyb290JywgJ3hjb21wJywgJ25wYWR2bW9kJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ic29sZXRlLiBSZXByZXNlbnRzIHRoZSBpbmZvcm1hdGlvbiB0aGF0IGlzIGluY2x1ZGVkIHdoZW4gdHJhaW5lZCBvbiB0aGUgdW5pdmVyc2FsIGNvcnB1c1xuICAgICAqL1xuICAgIHN0YXRpYyBVbml2ZXJzYWxNZXRhT3B0aW9uczogdHAuTWV0YU9wdGlvbnMgPSB7XG4gICAgICAgIHBvczogWydhZGonLCAnYWRwJywgJ2FkdicsICdhdXgnLCAnY29uaicsICdjY29uaicsICdkZXQnLCAnaW50aicsICdub3VuJywgJ251bScsICdwYXJ0JywgJ3Byb24nLCAncHJvcG4nLCAncHVuY3QnLCAnc2NvbmonLCAnc3ltJywgJ3ZlcmInLCAneCcsICdzcGFjZSddLFxuICAgICAgICBkZXA6IFsnYWNsJywgJ2FkdmNsJywgJ2Fkdm1vZCcsICdhbW9kJywgJ2FwcG9zJywgJ2F1eCcsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NsZicsICdjb21wb3VuZCcsICdjb25qJywgJ2NvcCcsICdjc3ViaicsICdkZXAnLCAnZGV0JywgJ2Rpc2NvdXJzZScsIFxuICAgICAgICAgICAgICAgICdkaXNsb2NhdGVkJywgJ2V4cGwnLCAnZml4ZWQnLCAnZmxhdCcsICdnb2Vzd2l0aCcsICdpb2JqJywgJ2xpc3QnLCAnbWFyaycsICdubW9kJywgJ25zdWJqJywgJ251bW1vZCcsICdvYmonLCAnb2JsJywgJ29ycGhhbicsICdwYXJhdGF4aXMnLCAncHVuY3QnLCAncmVwYXJhbmR1bScsIFxuICAgICAgICAgICAgICAgICdyb290JywgJ3ZvY2F0aXZlJywgJ3hjb21wJ10sXG4gICAgICAgIGlzX2VudDogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgZW50czogWydwZXJzb24nLCAnbm9ycCcsICdmYWMnLCAnb3JnJywgJ2dwZScsICdsb2MnLCAncHJvZHVjdCcsICdldmVudCcsICd3b3JrX29mX2FydCcsICdsYXcnLCAnbGFuZ3VhZ2UnLCAnZGF0ZScsICd0aW1lJywgJ3BlcmNlbnQnLCAnbW9uZXknLCAncXVhbnRpdHknLCAnb3JkaW5hbCcsIFxuICAgICAgICAgICAgICAgICdjYXJkaW5hbCddLFxuICAgIH1cblxuICAgIHN0YXRpYyBUb3RhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBSLnVuaW9uKFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMucG9zLCBTcGFjeUluZm8uVW5pdmVyc2FsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgZGVwOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmRlcCxcbiAgICAgICAgaXNfZW50OiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmlzX2VudCxcbiAgICAgICAgZW50czogU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5lbnRzLFxuICAgIH1cblxuICAgIGNyZWF0ZUNvbG9yU2NhbGVzKCk6IHRwLkNvbG9yTWV0YVNjYWxle1xuICAgICAgICBjb25zdCB0b1NjYWxlID0gKGtleXM6IEFycmF5PG51bWJlcnxzdHJpbmd8Ym9vbGVhbj4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IFIuemlwT2JqKFIubWFwKFN0cmluZywga2V5cyksIENPTE9SUzIwMC5zbGljZSgwLCBrZXlzLmxlbmd0aCkpXG4gICAgICAgICAgICByZXR1cm4gayA9PiBSLnByb3BPcihcImJsYWNrXCIsIGssIG9iailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG15Q29sb3JzID0ge1xuICAgICAgICAgICAgcG9zOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLnBvcyksXG4gICAgICAgICAgICBkZXA6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICAgICAgZW50czogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5lbnRzKSxcbiAgICAgICAgICAgIG9mZnNldDogZDMuc2NhbGVPcmRpbmFsKCkucmFuZ2UoWydibGFjayddKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDx0cC5Db2xvck1ldGFTY2FsZT48dW5rbm93bj5teUNvbG9yc1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNwYWN5Q29sb3JzID0gbmV3IFNwYWN5SW5mbygpOyIsIi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgVVJMSGFuZGxlciB7XG5cbiAgICBzdGF0aWMgYmFzaWNVUkwoKSB7XG4gICAgICAgIGNvbnN0IHVybF9wYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTIpLmpvaW4oJy8nKTtcblxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICh1cmxfcGF0aC5sZW5ndGggPyB1cmxfcGF0aCA6ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGFsbCBVUkwgcGFyYW1ldGVycyBpbnRvIGEgbWFwLlxuICAgICAqIEByZXR1cm5zIHtNYXB9IHRoZSB1cmwgcGFyYW1ldGVycyBhcyBhIGtleS12YWx1ZSBzdG9yZSAoRVM2IG1hcClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHBhcmFtZXRlcnMoKTogb2JqZWN0IHtcbiAgICAgICAgLy8gQWRhcHRlZCBmcm9tOiAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDkwNTUxL3BhcnNlLXF1ZXJ5LXN0cmluZy1pbi1qYXZhc2NyaXB0XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGNvbnN0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgICBjb25zb2xlLmxvZyh2YXJzLCBcIi0tLSB2YXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSB7fTtcblxuICAgICAgICBjb25zdCBpc0ludCA9IHggPT4gKC9eWzAtOV0rJC8pLnRlc3QoeCk7XG4gICAgICAgIGNvbnN0IGlzRmxvYXQgPSB4ID0+ICgvXlswLTldK1xcLlswLTldKiQvKS50ZXN0KHgpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVDYXN0ID0gdmFsID0+IHtcbiAgICAgICAgICAgIGlmIChpc0ludCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWwsIDEwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGbG9hdCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlOlxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFycy5mb3JFYWNoKHYgPT4ge1xuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0cyA9IHYuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzBdKTtcbiAgICAgICAgICAgICAgICBsZXQgcmF3X3ZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0c1sxXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcmF3X3ZhbHVlLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3X3ZhbHVlID0gcmF3X3ZhbHVlLnNsaWNlKDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyYXdfdmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSBpc0FycmF5ID8gW10gOiAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gcmF3X3ZhbHVlLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IHR5cGVDYXN0KHZhbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IHR5cGVDYXN0KHJhd192YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXJsUGFyYW1ldGVycztcblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGFuIFVSTCBzdHJpbmcgZnJvbSBhIG1hcCBvZiB1cmwgcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7e319IHVybFBhcmFtZXRlcnMgLSB0aGUgbWFwIG9mIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIGFuIFVSSSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgdXJsU3RyaW5nKHVybFBhcmFtZXRlcnM6IG9iamVjdCkge1xuICAgICAgICBjb25zdCBhdHRyID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHVybFBhcmFtZXRlcnMpLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdXJsUGFyYW1ldGVyc1trXTtcbiAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2O1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHYpKSB2YWx1ZSA9ICcuLicgKyB2LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICBhdHRyLnB1c2goZW5jb2RlVVJJKGsgKyAnPScgKyB2YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBsZXQgcmVzID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgICAgICBpZiAoYXR0ci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXMgKz0gJz8nICsgYXR0ci5qb2luKCcmJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVVSTFBhcmFtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYW55W10sIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgICAgIGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybChjdXJyZW50UGFyYW1zLCBhZGRUb0Jyb3dzZXJIaXN0b3J5KTtcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBHZW5lcmF0ZXMgYSBrZXktdmFsdWUgbWFwIG9mIGFsbCBVUkwgcGFyYW1zIGFuZCByZXBsYWNlcyByZXBsYWNlS2V5c1xuICAgIC8vICAqIEBwYXJhbSB1cGRhdGVLZXlzXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIHVwZGF0ZVVSTFBhcmFtcyh1cGRhdGVLZXlzKSB7XG4gICAgLy8gICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSBVUkxIYW5kbGVyLnBhcmFtZXRlcnM7XG4gICAgLy8gICAgIE9iamVjdC5rZXlzKHVwZGF0ZUtleXMpLmZvckVhY2goKGspID0+IGN1cnJlbnRQYXJhbXNba10gPSB1cGRhdGVLZXlzW2tdKVxuICAgIC8vICAgICByZXR1cm4gY3VycmVudFBhcmFtcztcbiAgICAvLyB9XG5cblxuICAgIHN0YXRpYyB1cGRhdGVVcmwodXJsUGFyYW1ldGVyczogb2JqZWN0LCBhZGRUb0Jyb3dzZXJIaXN0b3J5ID0gdHJ1ZSkge1xuICAgICAgICBpZiAoYWRkVG9Ccm93c2VySGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVybFBhcmFtZXRlcnMsICcnLFxuICAgICAgICAgICAgICAgIFVSTEhhbmRsZXIudXJsU3RyaW5nKHVybFBhcmFtZXRlcnMpKVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZnllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xubGV0IHRoZV91bmlxdWVfaWRfY291bnRlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVdGlsIHtcbiAgICBzdGF0aWMgc2ltcGxlVUlkKHsgcHJlZml4ID0gJycgfSk6IHN0cmluZyB7XG4gICAgICAgIHRoZV91bmlxdWVfaWRfY291bnRlciArPSAxO1xuXG4gICAgICAgIHJldHVybiBwcmVmaXggKyB0aGVfdW5pcXVlX2lkX2NvdW50ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBEM1NlbCA9IGQzLlNlbGVjdGlvbjxhbnksIGFueSwgYW55LCBhbnk+XG5cbi8qKlxuICogU2VsZWN0aW9uIHV0aWxpdHkgZnVuY3Rpb25zIHNob3VsZCBiZSBzdGF0aWMgbWV0aG9kcyBpbiB0aGUgYmVsb3cgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbCB7XG4gICAgc3RhdGljIHNldFNlbFZpc2libGUgPSAoeDogRDNTZWwpID0+IHguYXR0cihcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpXG4gICAgc3RhdGljIHNldFNlbEhpZGRlbiA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKVxuICAgIHN0YXRpYyBzZXRWaXNpYmxlID0gKHg6IHN0cmluZykgPT4gU2VsLnNldFNlbFZpc2libGUoZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBzZXRIaWRkZW4gPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsSGlkZGVuKGQzLnNlbGVjdEFsbCh4KSlcbiAgICBzdGF0aWMgaGlkZUVsZW1lbnQgPSAoaEU6IEQzU2VsKSA9PiBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ25vbmUnfSlcbiAgICBzdGF0aWMgdW5oaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGx9KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvb3NlT2JqZWN0IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgZDNTPFQgZXh0ZW5kcyBCYXNlVHlwZSwgVSA9IGFueT4gPSBkMy5TZWxlY3Rpb248VCwgVSwgYW55LCBhbnk+IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbmZ1bmN0aW9uIGFzY09yZGVyKG4xLCBuMikge1xuICAgIGlmIChuMSA8IG4yKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgZWxzZSBpZiAobjEgPiBuMikgeyBcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQge2ZpbmRBbGxJbmRleGVzLCBpbnNlcnRBdF8sIG9yZGVyZWRJbnNlcnRfLCBzZXQyU29ydGVkQXJyYXl9XG5cbi8qKlxuICogRmluZCBhbGwgaW5kZXhlcyB0aGF0IG1hdGNoIGEgcGFydGljdWxhciBwcmVkaWNhdGVcbiAqL1xuZnVuY3Rpb24gZmluZEFsbEluZGV4ZXM8VD4oYXJyYXk6QXJyYXk8VD4sIHByZWRpY2F0ZTooYTpUKSA9PiBib29sZWFuKTogbnVtYmVyW10ge1xuICAgIGxldCBmcm9tSW5kZXg9MDtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gICAgbGV0IGkgPSBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHdoaWxlIChpICE9IC0xKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChpKTtcbiAgICAgICAgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGkrMSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIGluc2VydEF0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGluZDpudW1iZXIpOkFycmF5PFQ+IHtcbiAgICBhcnJheS5zcGxpY2UoaW5kLCAwLCB2YWwpO1xuICAgIHJldHVybiBhcnJheVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzZXQgdG8gYW4gb3JkZXJlZCBhcnJheVxuICovXG5mdW5jdGlvbiBzZXQyU29ydGVkQXJyYXk8VD4oaW5wdXQ6U2V0PFQ+KTpBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oaW5wdXQpLnNvcnQoYXNjT3JkZXIpXG59XG5cbi8qKlxuICogSW5zZXJ0IGEgdmFsdWUgaW50byBhcnJheSBpbiBzb3J0ZWQgb3JkZXIgSU4gUExBQ0VcbiAqIFxuICogV0FSTklORzogT25seSBoYW5kbGVzIG51bWJlcnMsIHNvcnRlZCBmcm9tIGxlYXN0IHRvIGdyZWF0ZXN0XG4gKiAtIEFzc3VtZXMgYWxyZWFkeSBzb3J0ZWQgYXJyYXlcbiAqL1xuZnVuY3Rpb24gb3JkZXJlZEluc2VydF88VD4oYXJyYXk6QXJyYXk8VD4sIHZhbDpULCBjb2xkc3RhcnQ9ZmFsc2UpOkFycmF5PFQ+IHtcbiAgICAvLyBSZXNvcnQgYXJyYXkgaWYgZGVzaXJlZFxuICAgIGlmIChjb2xkc3RhcnQpIHtcbiAgICAgICAgYXJyYXkuc29ydChhc2NPcmRlcilcbiAgICB9XG5cbiAgICBjb25zdCBpbmQgPSBfLnNvcnRlZEluZGV4KGFycmF5LCB2YWwpO1xuICAgIHJldHVybiBpbnNlcnRBdF8oYXJyYXksIHZhbCwgaW5kKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhbmRvbShsZW46bnVtYmVyKXtcbiAgY29uc3QgYTpudW1iZXJbXSA9IG5ldyBBcnJheShsZW4pLmZpbGwoMClcblxuICByZXR1cm4gYS5tYXAoKHgpID0+IHtyZXR1cm4gXy5yYW5kb20oLTUsIDUsIHRydWUpfSlcbn0iLCIvKipcbiAqIENvbnZlcnQgYSBKUyBvYmplY3QgaW50byBHRVQgVVJMIHBhcmFtZXRlcnNcbiAqIFxuICogQHBhcmFtIGJhc2UgQmFzZSBVUkwgYXRvcCB3aGljaCB0byBhZGQgR0VUIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBwYXJhbXMgT2JqZWN0IHRvIGluc2VydCBpbnRvIGEgVVJMIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVybChiYXNlOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCk6c3RyaW5nIHtcbiAgICBpZiAocGFyYW1zKXtcbiAgICAgICAgbGV0IG91dDogc3RyaW5nID0gYmFzZSArIFwiP1wiO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCggayA9PiB7XG4gICAgICAgICAgICBvdXQgKz0gaztcbiAgICAgICAgICAgIG91dCArPSAnPSc7XG4gICAgICAgICAgICBvdXQgKz0gcGFyYW1zW2tdO1xuICAgICAgICAgICAgb3V0ICs9IFwiJlwiO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb3V0LnJlcGxhY2UoLyYkL2csIFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJhc2U7XG4gICAgfVxufTtcblxuLyoqXG4gKiBDb252ZXJ0IGluZm9ybWF0aW9uIGluIEdFVCByZXF1ZXN0IGludG8gdGhlIG1lc3NhZ2UgZm9yIGEgUE9TVCByZXF1ZXN0ICAgIFxuICovXG5leHBvcnQgY29uc3QgdG9QYXlsb2FkID0gKHRvU2VuZCkgPT4ge3JldHVybiB7XG4gICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkodG9TZW5kKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgICB9XG59fSIsIi8vIFtbdmFsLCBpbmRdLCBbdmFsLCBpbmRdLi4uXVxudHlwZSBDb21wRm5JbmQgPSAoYTpudW1iZXJbXSwgYjpudW1iZXJbXSkgPT4gbnVtYmVyO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRBcnJheSB7XG4gICAgYXJyOiBudW1iZXJbXSxcbiAgICBzb3J0SW5kaWNlczogbnVtYmVyW10sXG59XG5cbi8qKlxuICogQ29waWVzIGFuZCBzb3J0cyBhbiBhcnJheSB3aGlsZSBrZWVwaW5nIHRyYWNrIG9mIHRoZSBpbmRpY2VzLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBzb3J0aW5nIG1heCAtPiBtaW4uXG4gKiBcbiAqIEBwYXJhbSBhcnIgLSBBcnJheSB0byBiZSBjb3BpZWQgYW5kIHNvcnRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFdpdGhJbmRpY2VzKGFycjpudW1iZXJbXSwgZm4/OkNvbXBGbkluZCk6IFNvcnRBcnJheSB7XG4gICAgLy8gSWYgZm4gaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHNvcnRpbmcgYnkgbWF4IHZhbHVlXG4gICAgaWYgKCFmbikge1xuICAgICAgICBmbiA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgbGV0IG91dDpTb3J0QXJyYXkgPSB7XG4gICAgICAgIGFycjogW10sXG4gICAgICAgIHNvcnRJbmRpY2VzOiBbXVxuICAgIH07XG5cbiAgICBsZXQgaWR4VHJhY2tlcjogbnVtYmVyW11bXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlkeFRyYWNrZXJbaV0gPSBbYXJyW2ldLCBpXTtcbiAgICB9XG5cbiAgICBpZHhUcmFja2VyLnNvcnQoZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgIHJldHVybiBsZWZ0WzBdID4gcmlnaHRbMF0gPyAtMSA6IDE7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgb3V0LnNvcnRJbmRpY2VzLnB1c2goaWR4VHJhY2tlcltqXVsxXSk7XG4gICAgICBvdXQuYXJyW2pdID0gaWR4VHJhY2tlcltqXVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9IiwiLy8gQ29sb3JzIHdlcmUgZ2VuZXJhdGVkIHRvIGJlIGFzIHZpc3VhbGx5IGRpc3RpbmN0IGFzIHBvc3NpYmxlIGJ5OiBodHRwOi8vam5ubm5uLmdpdGh1Yi5pby9jYXRlZ29yeS1jb2xvcnMtY29uc3RyYWluZWQuaHRtbFxuZXhwb3J0IGNvbnN0IENPTE9SUzIwMCA9IFtcbiAgICBcIiMzOTU3ZmZcIiwgXCIjZDNmZTE0XCIsIFwiI2M5MDgwYVwiLCBcIiNmZWM3ZjhcIiwgXCIjMGI3YjNlXCIsIFwiIzBiZjBlOVwiLCBcIiNjMjAzYzhcIiwgXCIjZmQ5YjM5XCIsIFxuICAgIFwiIzg4ODU5M1wiLCBcIiM5MDY0MDdcIiwgXCIjOThiYTdmXCIsIFwiI2ZlNjc5NFwiLCBcIiMxMGIwZmZcIiwgXCIjYWM3YmZmXCIsIFwiI2ZlZTdjMFwiLCBcIiM5NjRjNjNcIixcbiAgICBcIiMxZGE0OWNcIiwgXCIjMGFkODExXCIsIFwiI2JiZDlmZFwiLCBcIiNmZTZjZmVcIiwgXCIjMjk3MTkyXCIsIFwiI2QxYTA5Y1wiLCBcIiM3ODU3OWVcIiwgXCIjODFmZmFkXCIsXG4gICAgXCIjNzM5NDAwXCIsIFwiI2NhNjk0OVwiLCBcIiNkOWJmMDFcIiwgXCIjNjQ2YTU4XCIsIFwiI2Q1MDk3ZVwiLCBcIiNiYjczYTlcIiwgXCIjY2NmNmU5XCIsIFwiIzljYjRiNlwiLFxuICAgIFwiI2I2YTdkNFwiLCBcIiM5ZThjNjJcIiwgXCIjNmU4M2M4XCIsIFwiIzAxYWY2NFwiLCBcIiNhNzFhZmRcIiwgXCIjY2ZlNTg5XCIsIFwiI2Q0Y2NkMVwiLCBcIiNmZDQxMDlcIixcbiAgICBcIiNiZjhmMGVcIiwgXCIjMmY3ODZlXCIsIFwiIzRlZDFhNVwiLCBcIiNkOGJiN2RcIiwgXCIjYTU0NTA5XCIsIFwiIzZhOTI3NlwiLCBcIiNhNDc3N2FcIiwgXCIjZmMxMmM5XCIsXG4gICAgXCIjNjA2ZjE1XCIsIFwiIzNjYzRkOVwiLCBcIiNmMzFjNGVcIiwgXCIjNzM2MTZmXCIsIFwiI2YwOTdjNlwiLCBcIiNmYzg3NzJcIiwgXCIjOTJhNmZlXCIsIFwiIzg3NWI0NFwiLFxuICAgIFwiIzY5OWFiM1wiLCBcIiM5NGJjMTlcIiwgXCIjN2Q1YmYwXCIsIFwiI2QyNGRmZVwiLCBcIiNjODViNzRcIiwgXCIjNjhmZjU3XCIsIFwiI2I2MjM0N1wiLCBcIiM5OTRiOTFcIixcbiAgICBcIiM2NDZiOGNcIiwgXCIjOTc3YWI0XCIsIFwiI2Q2OTRmZFwiLCBcIiNjNGQ1YjVcIiwgXCIjZmRjNGJkXCIsIFwiIzFjYWUwNVwiLCBcIiM3YmQ5NzJcIiwgXCIjZTk3MDBhXCIsXG4gICAgXCIjZDA4ZjVkXCIsIFwiIzhiYjllMVwiLCBcIiNmZGU5NDVcIiwgXCIjYTI5ZDk4XCIsIFwiIzE2ODJmYlwiLCBcIiM5YWQ5ZTBcIiwgXCIjZDZjYWZlXCIsIFwiIzhkODMyOFwiLFxuICAgIFwiI2IwOTFhN1wiLCBcIiM2NDc1NzlcIiwgXCIjMWY4ZDExXCIsIFwiI2U3ZWFmZFwiLCBcIiNiOTY2MGJcIiwgXCIjYTRhNjQ0XCIsIFwiI2ZlYzI0Y1wiLCBcIiNiMTE2OGNcIixcbiAgICBcIiMxODhjYzFcIiwgXCIjN2FiMjk3XCIsIFwiIzQ0NjhhZVwiLCBcIiNjOTQ5YTZcIiwgXCIjZDQ4Mjk1XCIsIFwiI2ViNmRjMlwiLCBcIiNkNWIwY2JcIiwgXCIjZmY5ZmZiXCIsXG4gICAgXCIjZmRiMDgyXCIsIFwiI2FmNGQ0NFwiLCBcIiNhNzU5YzRcIiwgXCIjYTllMDNhXCIsIFwiIzBkOTA2YlwiLCBcIiM5ZWUzYmRcIiwgXCIjNWI4ODQ2XCIsIFwiIzBkODk5NVwiLFxuICAgIFwiI2YyNWM1OFwiLCBcIiM3MGFlNGZcIiwgXCIjODQ3Zjc0XCIsIFwiIzkwOTRiYlwiLCBcIiNmZmUyZjFcIiwgXCIjYTY3MTQ5XCIsIFwiIzkzNmM4ZVwiLCBcIiNkMDQ5MDdcIixcbiAgICBcIiNjM2I4YTZcIiwgXCIjY2VmOGM0XCIsIFwiIzdhOTI5M1wiLCBcIiNmZGEyYWJcIiwgXCIjMmVmNmM1XCIsIFwiIzgwNzI0MlwiLCBcIiNjYjk0Y2NcIiwgXCIjYjZiZGQwXCIsXG4gICAgXCIjYjVjNzVkXCIsIFwiI2ZkZTE4OVwiLCBcIiNiN2ZmODBcIiwgXCIjZmEyZDhlXCIsIFwiIzgzOWE1ZlwiLCBcIiMyOGMyYjVcIiwgXCIjZTVlOWUxXCIsIFwiI2JjNzlkOFwiLFxuICAgIFwiIzdlZDhmZVwiLCBcIiM5ZjIwYzNcIiwgXCIjNGY3YTViXCIsIFwiI2Y1MTFmZFwiLCBcIiMwOWM5NTlcIiwgXCIjYmNkMGNlXCIsIFwiIzg2ODVmZFwiLCBcIiM5OGZjZmZcIixcbiAgICBcIiNhZmJmZjlcIiwgXCIjNmQ2OWI0XCIsIFwiIzVmOTlmZFwiLCBcIiNhYWE4N2VcIiwgXCIjYjU5ZGZiXCIsIFwiIzVkODA5ZFwiLCBcIiNkOWE3NDJcIiwgXCIjYWM1Yzg2XCIsXG4gICAgXCIjOTQ2OGQ1XCIsIFwiI2E0YTJiMlwiLCBcIiNiMTM3NmVcIiwgXCIjZDQzZjNkXCIsIFwiIzA1YTlkMVwiLCBcIiNjMzgzNzVcIiwgXCIjMjRiNThlXCIsIFwiIzZlYWJhZlwiLFxuICAgIFwiIzY2YmY3ZlwiLCBcIiM5MmNiYmJcIiwgXCIjZGRiMWVlXCIsIFwiIzFiZTg5NVwiLCBcIiNjN2VjZjlcIiwgXCIjYTZiYWE2XCIsIFwiIzgwNDVjZFwiLCBcIiM1ZjcwZjFcIixcbiAgICBcIiNhOWQ3OTZcIiwgXCIjY2U2MmNiXCIsIFwiIzBlOTU0ZFwiLCBcIiNhOTdkMmZcIiwgXCIjZmNiOGQzXCIsIFwiIzliZmVlM1wiLCBcIiM0ZThkODRcIiwgXCIjZmM2ZDNmXCIsXG4gICAgXCIjN2I5ZmQ0XCIsIFwiIzhjNjE2NVwiLCBcIiM3MjgwNWVcIiwgXCIjZDUzNzYyXCIsIFwiI2YwMGExYlwiLCBcIiNkZTVjOTdcIiwgXCIjOGVhMjhiXCIsIFwiI2ZjY2Q5NVwiLFxuICAgIFwiI2JhOWM1N1wiLCBcIiNiNzlhODJcIiwgXCIjN2M1YTgyXCIsIFwiIzdkN2NhNFwiLCBcIiM5NThhZDZcIiwgXCIjY2Q4MTI2XCIsIFwiI2JkYjBiN1wiLCBcIiMxMGUwZjhcIixcbiAgICBcIiNkY2NjNjlcIiwgXCIjZDZkZTBmXCIsIFwiIzYxNmQzZFwiLCBcIiM5ODVhMjVcIiwgXCIjMzBjN2ZkXCIsIFwiIzBhZWI2NVwiLCBcIiNlM2NkYjRcIiwgXCIjYmQxYmVlXCIsXG4gICAgXCIjYWQ2NjVkXCIsIFwiI2Q3NzA3MFwiLCBcIiM4ZWE1YjhcIiwgXCIjNWI1YWQwXCIsIFwiIzc2NjU1ZVwiLCBcIiM1OTgxMDBcIiwgXCIjODY3NTdlXCIsIFwiIzVlYTA2OFwiLFxuXSIsImltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4vVXRpbFwiXG5cbi8qKlxuICogQVRURU5USU9OIFJFU1BPTlNFUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBDb250YWluIHRoZSBhdHRlbnRpb25zIGFuZCBlbWJlZGRpbmdzIGZvciBhbGwgY29tYmluYXRpb25zIG9mIHJldHVybnMgZnJvbSB0aGUgYmFja2VuZFxuICovXG5cbmV4cG9ydCB0eXBlIE1vZGVsSW5mbyA9IHtcbiAgICBubGF5ZXJzOiBudW1iZXJcbiAgICBuaGVhZHM6IG51bWJlclxufVxuXG50eXBlIEFic3RyYWN0QXR0ZW50aW9uUmVzcG9uc2U8VD4gPSB7XG4gICAgYWE6IFRcbn1cblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTVUxUUyBGUk9NIEJBQ0tFTkRcbiAqXG4gKiBUaGVzZSBhcmUgdGhlIHJlc3VsdHMgdGhhdCBhcmUgZW5jYXNlZCBpbiB0aGUgJ2FhJyBhbmQgJ2FiJyBrZXlzIHJldHVybmVkXG4gKi9cbmV4cG9ydCB0eXBlIEF0dGVudGlvblJlc3BvbnNlID0gQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxBdHRlbnRpb25NZXRhUmVzdWx0PlxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uTWV0YVJlc3VsdCA9IEFic3RyYWN0QXR0ZW50aW9uUmVzdWx0PEZ1bGxTaW5nbGVUb2tlbkluZm9bXT5cblxuZXhwb3J0IHR5cGUgRnVsbFNpbmdsZVRva2VuSW5mbyA9IHtcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZW1iZWRkaW5nczogbnVtYmVyW10sXG4gICAgY29udGV4dHM6IG51bWJlcltdLFxuICAgIGJwZV90b2tlbjogc3RyaW5nLFxuICAgIGJwZV9wb3M6IHN0cmluZyxcbiAgICBicGVfZGVwOiBzdHJpbmcsXG4gICAgYnBlX2lzX2VudDogYm9vbGVhbixcbiAgICB0b3BrX3dvcmRzOiBzdHJpbmdbXSxcbiAgICB0b3BrX3Byb2JzOiBudW1iZXJbXVxufVxuXG5pbnRlcmZhY2UgQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8VD4ge1xuICAgIGF0dDogbnVtYmVyW11bXVtdLFxuICAgIGxlZnQ6IFQsXG4gICAgcmlnaHQ6IFQsXG59XG5cbi8qKlxuICogU0VBUkNIIFJFU1VMVCBUWVBFU1xuICovXG5cbmludGVyZmFjZSBNYXRjaGVkVG9rQXR0IHtcbiAgICBhdHQ6IG51bWJlcltdXG4gICAgb2Zmc2V0X3RvX21heDogbnVtYmVyXG4gICAgbG9jX29mX21heDogbnVtYmVyXG59XG5cblxuaW50ZXJmYWNlIE1hdGNoZWRBdHRlbnRpb25zIHtcbiAgICBpbjogTWF0Y2hlZFRva0F0dCxcbiAgICBvdXQ6IE1hdGNoZWRUb2tBdHQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFpc3NTZWFyY2hSZXN1bHRzIHtcbiAgICBzZW50ZW5jZTogc3RyaW5nXG4gICAgaW5kZXg6IG51bWJlclxuICAgIG1hdGNoOiBzdHJpbmdcbiAgICBtYXRjaGVkX2F0dDogTWF0Y2hlZEF0dGVudGlvbnNcbiAgICB0b2tlbnM6IFRva2VuRmFpc3NNYXRjaFtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5GYWlzc01hdGNoIHtcbiAgICB0b2tlbjogc3RyaW5nXG4gICAgcG9zOiBzdHJpbmdcbiAgICBkZXA6IHN0cmluZ1xuICAgIGlzX2VudDogc3RyaW5nXG4gICAgaXNfbWF0Y2g6IGJvb2xlYW5cbiAgICBpbndhcmQ6IG51bWJlcltdXG4gICAgb3V0d2FyZDogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBFVkVOVCBUWVBFU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRXZlbnQge1xuICAgIHNlbD86IEQzU2VsLFxuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyIHwgXCJudWxsXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FbWJlZGRpbmdFdmVudCBleHRlbmRzIFRva2VuRXZlbnQge1xuICAgIGVtYmVkZGluZ3M6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIEhlYWRCb3hFdmVudCA9IHtcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlcixcbiAgICBoZWFkOiBudW1iZXIsXG59XG5cbi8qKlxuICogTUlTQ0VMTEFORU9VUyBUWVBFU1xuICovXG5cbmV4cG9ydCB0eXBlIFNlbnRlbmNlT3B0aW9ucyA9IFwiYWJcIiB8IFwiYmFcIiB8IFwiYWFcIiB8IFwiYmJcIiB8IFwiYWxsXCI7XG5leHBvcnQgdHlwZSBTaWRlT3B0aW9ucyA9IFwibGVmdFwiIHwgXCJyaWdodFwiXG5leHBvcnQgdHlwZSBTaW1wbGVNZXRhID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiXG5leHBvcnQgdHlwZSBUb2tlbk9wdGlvbnMgPSBcImFcIiB8IFwiYlwiIHwgXCJhbGxcIlxuXG5leHBvcnQgZW51bSBUb2dnbGVkIHtcbiAgICBBRERFRCA9IDAsXG4gICAgUkVNT1ZFRCxcbn1cblxuZXhwb3J0IGVudW0gTm9ybUJ5IHtcbiAgICBSb3cgPSAwLFxuICAgIENvbCxcbiAgICBBbGxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBwb3M6IHN0cmluZ1tdLFxuICAgIGRlcDogc3RyaW5nW10sXG4gICAgaXNfZW50OiBhbnksXG4gICAgZW50czogc3RyaW5nW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YU9wdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBpc19lbnQ6IGJvb2xlYW5bXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1ldGFPcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgaXNfZW50OiBzdHJpbmdbXSAvLyBSZXByZXNlbnRpbmcgaGV4IGNvbG9yc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWV0YVNjYWxlIHtcbiAgICBwb3M6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBkZXA6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBpc19lbnQ6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBlbnRzOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgb2Zmc2V0PzogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxufVxuXG5leHBvcnQgZW51bSBNb2RlbEtpbmQge1xuICAgIEJpZGlyZWN0aW9uYWwgPSBcImJpZGlyZWN0aW9uYWxcIixcbiAgICBBdXRvcmVncmVzc2l2ZSA9IFwiYXV0b3JlZ3Jlc3NpdmVcIlxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7ICBcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG4gIH1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogTWFwIGEgbGlzdCBhcyB2YWx1ZXMgdG8gYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBvcmlnaW5hbCBsaXN0XG4gKi9cbi8vIChTdHJpbmcgLT4gYikgIC0+IFtTdHJpbmddIC0+IHtTdHJpbmc6IGJ9XG5leHBvcnQgY29uc3Qgb2JqRnJvbUtleXMgPSBSLmN1cnJ5KChmbiwga2V5cykgPT4gUi56aXBPYmooa2V5cywgUi5tYXAoZm4sIGtleXMpKSkgXG5cbmV4cG9ydCBjb25zdCBhc3NpZ25aZXJvOiAoeDphbnkpID0+IG51bWJlciA9IHggPT4gMDtcblxuLyoqXG4gKiBHaXZlbiBhbiBsaXN0LCBjcmVhdGUgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWxsIDBcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRaZXJvID0gb2JqRnJvbUtleXMoYXNzaWduWmVybykiLCJpbXBvcnQgeyBNYWluR3JhcGhpYyB9IGZyb20gJy4vdmlzL215TWFpbidcbmltcG9ydCB7IEFQSSwgZW1wdHlUb2tlbkRpc3BsYXkgfSBmcm9tICcuL2FwaS9tYWluQXBpJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIgfSBmcm9tICcuL2RhdGEvVG9rZW5XcmFwcGVyJ1xuLy8gaW1wb3J0IHsgVGVzdGVyIH0gZnJvbSBcIi4uL3RzL3Rlc3RcIlxuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1leEJFUlQuaHRtbCEuLi9leEJFUlQuaHRtbFwiO1xuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCJcblxuXG5mdW5jdGlvbiBkb015U3ZnKCkge1xuICAgIHJldHVybiBuZXcgTWFpbkdyYXBoaWMoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRpYyBmaWxlcyBuZWVkZWQgZm9yIHRoZSBkZW1vLiBTYXZlIHRoZSBrZXlzIGFuZCBmaWxlIHBhdGhzIHRvIGEganNvbiBvYmplY3QgdGhhdCBpcyB0aGVuIHdyaXR0ZW4gdG8gYSBmaWxlXG4gKlxuICogVGhpcyB3aWxsIHByaW50IHRoZSBvYmplY3QgYWZ0ZXIgZXZlcnkgY2FsbC4gV2hlbiB0aGUga2V5IGxlbmd0aCBpcyB0aGUgZXhwZWN0ZWQgbGVuZ3RoLCByaWdodCBjbGljayBpbiBjaHJvbWUgYW5kIHNlbGVjdCBcInNhdmUgYXMgZ2xvYmFsIHZhcmlhYmxlXCJcbiAqXG4gKiBUaGVuLCBpbiB0aGUgY29uc29sZSwgdHlwZSBcImNvcHkodGVtcDEpXCIuIFVzZSBzdWJsaW1lIHRleHQgKGl0IGlzIHRoZSBiZXN0IGZvciBoYW5kbGluZyBsYXJnZSBmaWxlcykgdG8gcGFzdGUgdGhpcyBpbnRvIHRoZSBjb2RlIGFuZCBzYXZlIGl0IGFzIF9fX18uanNvblxuICpcbiAqIEBwYXJhbSBzZW50ZW5jZSAtIFRoZSBzZW50ZW5jZSB0byBhbmFseXplXG4gKiBAcGFyYW0gbWFza0luZCAtIFdoaWNoIGluZGV4IHRvIG1hc2sgaW4gdGhlIHNlbnRlbmNlLiBBdG0sIGNhbiBvbmx5IHJlY29yZCBvbmUgbWFza2luZ1xuICogQHBhcmFtIG91dERpY3RQYXRoIC0gV2hlcmUgdG8gc2F2ZSB0aGUgb2JqZWN0IG9mIGhhc2hrZXk6IGZpbGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG4gICAgY29uc3QgbGF5ZXJzID0gXy5yYW5nZSgxMilcblxuICAgIGNvbnN0IEwgPSAwXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9ICAgICAgICAgIC8vIE1hcCBoYXNoIC0+IGNvbnRlbnRzXG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEyKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMobW9kZWxOYW1lLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjAgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIocjAucGF5bG9hZCk7XG5cbiAgICAgICAgICAgIC8vIFVubWFza2VkIHJlc3BvbnNlOlxuICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBjb250ZW50SGFzaCkudGhlbihyMSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTWFza2VkIHdvcmQgYW5kIHNlYXJjaGluZyByZXNwb25zZXM6XG4gICAgICAgICAgICAgICAgdG9rQ2Fwc3VsZS5hLm1hc2sobWFza0luZClcbiAgICAgICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGNvbnRlbnRIYXNoKS50aGVuKHIyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoY29udGVudEhhc2gpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50SGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuLyoqXG4gKiBcbiAqIE9ic2VydmUgaG93IHRoZSBkZW1vIGNyZWF0aW9uIHByb2Nlc3Mgd29ya3MuXG4gKiBcbiAqIElmIGRlc2lyZWQgdG8gbWFzayBtdWx0aXBsZSB3b3JkcyBpbiB0aGUgaW5wdXQgZm9yIGRlbW8gcHVycG9zZXMsIHRyeSBsb29waW5nIG92ZXIgdGhlIG1hc2sgaW5kcyBhbmQgbWFza2luZyBlYWNoIG9uZSBpbmRpdmlkdWFsbHlcbiAqIFxuICogQHBhcmFtIHNlbnRlbmNlIFRoZSBkZW1vIHNlbnRlbmNlXG4gKiBAcGFyYW0gbWFza0luZCBEZXNpcmVkIGluZGV4IHRvIG1hc2sgKGNhbiBjdXJyZW50bHkgb25seSBhY2NlcHQgYSBzaW5nbGUgbWFzayBpbmRleClcbiAqIEBwYXJhbSBvdXREaWN0UGF0aCBcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdERlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9XG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEpLmZvckVhY2goTCA9PiB7XG4gICAgICAgIGFwaS5nZXRNZXRhQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHNlbnRlbmNlLCBMLCBcIlwiKS50aGVuKHIwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva0NhcHN1bGUgPSBuZXcgVG9rZW5XcmFwcGVyKHIwLnBheWxvYWQpO1xuXG4gICAgICAgICAgICAvLyBVbm1hc2tlZCByZXNwb25zZTpcbiAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgZW1wdHlUb2tlbkRpc3BsYXkpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSkudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWJlZGRpbmcgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RFbWJlZGRpbmdzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgZW1iZWRkaW5nLCBMLCBfLnJhbmdlKDEyKSwgNTAsIGNvbnRlbnRIYXNoKS50aGVuKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByMlsnYWEnXVsnbGVmdCddW21hc2tJbmRdLmNvbnRleHRzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0Q29udGV4dHMobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBjb250ZXh0LCBMLCBfLnJhbmdlKDEyKSwgNTApLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVwbFRlc3QoKSB7XG4gICAgLy8gVGVzdGVyLnRlc3RBdHRXcmFwcGVyQ29uc3RydWN0b3IoKVxuICAgIC8vIFRlc3Rlci50ZXN0VXBkYXRlTWFza2VkQXR0ZW50aW9uKClcbiAgICAvLyBUZXN0ZXIudGVzdE5qQXJheSgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmFuZG9tQXJyYXlDcmVhdGlvbigpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NXcmFwcGVyKCk7XG4gICAgLy8gVGVzdGVyLnRlc3REM09yZGluYWwoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEZhaXNzU2VhcmNoUmVzdWx0c0hpc3QoKTtcbiAgICAvLyBUZXN0ZXIudGVzdFJlYWRpbmdKU09OKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZG9NeVN2ZygpO1xuICAgIC8vIHJlcGxUZXN0KCk7XG4gICAgLy8gY3JlYXRlRGVtb3MoXCJDaGlja2VuIHRhc3RlcyBhYnNvbHV0ZWx5IGRlbGljaW91cyBpZiB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZ1wiLCA0LCBcIlwiKVxuICAgIGNvbnNvbGUubG9nKFwiRG9uZSBsb2FkaW5nIHdpbmRvd1wiKTtcbn1cbiIsImltcG9ydCAqIGFzIHRwIGZyb20gXCIuL2V0Yy90eXBlc1wiXG5pbXBvcnQgKiBhcyB4XyBmcm9tIFwiLi9ldGMvX1Rvb2xzXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVVJMSGFuZGxlciB9IGZyb20gXCIuL2V0Yy9VUkxIYW5kbGVyXCI7XG5cbmNvbnN0IGZhbHNleSA9IHZhbCA9PiAobmV3IFNldChbJ2ZhbHNlJywgMCwgXCJub1wiLCBmYWxzZSwgbnVsbCwgXCJcIl0pKS5oYXModmFsKVxuY29uc3QgdHJ1dGh5ID0gdmFsID0+ICFmYWxzZXkodmFsKVxuY29uc3QgdG9OdW1iZXIgPSB4ID0+ICt4O1xuXG5cbnR5cGUgSW5zcGVjdG9yT3B0aW9ucyA9IFwiY29udGV4dFwiIHwgXCJlbWJlZGRpbmdzXCIgfCBudWxsXG5cbi8vIE11c3QgYmUgb3B0aW9uYWwgcGFyYW1zIGZvciBpbml0aWFsaXphdGlvbnNcbmludGVyZmFjZSBVUkxQYXJhbWV0ZXJzIHtcbiAgICBzZW50ZW5jZT86IHN0cmluZ1xuICAgIG1vZGVsPzogc3RyaW5nXG4gICAgbW9kZWxLaW5kPzogc3RyaW5nXG4gICAgY29ycHVzPzogc3RyaW5nXG4gICAgbGF5ZXI/OiBudW1iZXJcbiAgICBoZWFkcz86IG51bWJlcltdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgdG9rZW5JbmQ/OiBudW1iZXIgfCAnbnVsbCdcbiAgICB0b2tlblNpZGU/OiB0cC5TaWRlT3B0aW9uc1xuICAgIG1ldGFNYXRjaD86IHRwLlNpbXBsZU1ldGEgfCBudWxsXG4gICAgbWV0YU1heD86IHRwLlNpbXBsZU1ldGEgfCBudWxsXG4gICAgZGlzcGxheUluc3BlY3Rvcj86IEluc3BlY3Rvck9wdGlvbnNcbiAgICBvZmZzZXRJZHhzPzogbnVtYmVyW11cbiAgICBtYXNrSW5kcz86IG51bWJlcltdXG4gICAgaGlkZUNsc1NlcD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNsYXNzIFVJQ29uZmlnIHtcblxuICAgIHByaXZhdGUgX2NvbmY6IFVSTFBhcmFtZXRlcnMgPSB7fVxuICAgIHByaXZhdGUgX2hlYWRTZXQ6IFNldDxudW1iZXI+O1xuICAgIGF0dFR5cGU6IHRwLlNlbnRlbmNlT3B0aW9ucztcbiAgICBfbkhlYWRzOiBudW1iZXIgfCBudWxsO1xuICAgIF9uTGF5ZXJzOiBudW1iZXIgfCBudWxsO1xuICAgIHByaXZhdGUgX3Rva2VuOiB0cC5Ub2tlbkV2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX25IZWFkcyA9IDEyOyAvLyBIb3cgZG8gSSBhdXRvbWF0ZSB0aGlzP1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRUeXBlID0gJ2FhJzsgLy8gRG9uJ3QgYWxsb3cgdGhpcyB0byBiZSBtb2RpZmllZCBieSB0aGUgdXNlci5cbiAgICAgICAgdGhpcy5mcm9tVVJMKClcbiAgICAgICAgdGhpcy50b1VSTChmYWxzZSlcbiAgICB9XG5cblxuICAgIGZyb21VUkwoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYgPSB7XG4gICAgICAgICAgICBtb2RlbDogcGFyYW1zWydtb2RlbCddIHx8ICdiZXJ0LWJhc2UtY2FzZWQnLFxuICAgICAgICAgICAgbW9kZWxLaW5kOiBwYXJhbXNbJ21vZGVsS2luZCddIHx8IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHBhcmFtc1snc2VudGVuY2UnXSB8fCBcIlRoZSBnaXJsIHJhbiB0byBhIGxvY2FsIHB1YiB0byBlc2NhcGUgdGhlIGRpbiBvZiBoZXIgY2l0eS5cIixcbiAgICAgICAgICAgIGNvcnB1czogcGFyYW1zWydjb3JwdXMnXSB8fCAnd296JyxcbiAgICAgICAgICAgIGxheWVyOiBwYXJhbXNbJ2xheWVyJ10gfHwgMSxcbiAgICAgICAgICAgIGhlYWRzOiB0aGlzLl9pbml0SGVhZHMocGFyYW1zWydoZWFkcyddKSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogcGFyYW1zWyd0aHJlc2hvbGQnXSB8fCAwLjcsXG4gICAgICAgICAgICB0b2tlbkluZDogcGFyYW1zWyd0b2tlbkluZCddIHx8IG51bGwsXG4gICAgICAgICAgICB0b2tlblNpZGU6IHBhcmFtc1sndG9rZW5TaWRlJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG1hc2tJbmRzOiBwYXJhbXNbJ21hc2tJbmRzJ10gfHwgWzldLFxuICAgICAgICAgICAgbWV0YU1hdGNoOiBwYXJhbXNbJ21ldGFNYXRjaCddIHx8IFwicG9zXCIsXG4gICAgICAgICAgICBtZXRhTWF4OiBwYXJhbXNbJ21ldGFNYXgnXSB8fCBcInBvc1wiLFxuICAgICAgICAgICAgZGlzcGxheUluc3BlY3RvcjogcGFyYW1zWydkaXNwbGF5SW5zcGVjdG9yJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIG9mZnNldElkeHM6IHRoaXMuX2luaXRPZmZzZXRJZHhzKHBhcmFtc1snb2Zmc2V0SWR4cyddKSxcbiAgICAgICAgICAgIGhpZGVDbHNTZXA6IHRydXRoeShwYXJhbXNbJ2hpZGVDbHNTZXAnXSkgfHwgdHJ1ZSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0geyBzaWRlOiB0aGlzLl9jb25mLnRva2VuU2lkZSwgaW5kOiB0aGlzLl9jb25mLnRva2VuSW5kIH1cblxuICAgIH1cblxuICAgIHRvVVJMKHVwZGF0ZUhpc3RvcnkgPSBmYWxzZSkge1xuICAgICAgICBVUkxIYW5kbGVyLnVwZGF0ZVVybCh0aGlzLl9jb25mLCB1cGRhdGVIaXN0b3J5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRPZmZzZXRJZHhzKHY6IChzdHJpbmcgfCBudW1iZXIpW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBbLTEsIDAsIDFdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJBcnIgPSBSLm1hcCh0b051bWJlciwgdik7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyQXJyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEhlYWRzKHY6IG51bWJlcltdIHwgbnVsbCkge1xuICAgICAgICBpZiAodiA9PSBudWxsIHx8IHYubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWRTZXQobmV3IFNldCh2KSkuX2NvbmYuaGVhZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZHMoKVxuICAgIH1cblxuICAgIG5IZWFkcygpOiBudW1iZXJcbiAgICBuSGVhZHModmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbkhlYWRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkhlYWRzXG4gICAgICAgIHRoaXMuX25IZWFkcyA9IHZhbFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG5MYXllcnMoKTogbnVtYmVyXG4gICAgbkxheWVycyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuTGF5ZXJzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fbkxheWVyc1xuICAgICAgICB0aGlzLl9uTGF5ZXJzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRzKCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsSGVhZHMoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROb0hlYWRzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEFsbEhlYWRzKCkge1xuICAgICAgICB0aGlzLmhlYWRTZXQobmV3IFNldChfLnJhbmdlKDAsIHRoaXMuX25IZWFkcykpKVxuICAgIH1cblxuICAgIHNlbGVjdE5vSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KFtdKSlcbiAgICB9XG5cbiAgICB0b2dnbGVIZWFkKGhlYWQ6IG51bWJlcik6IHRwLlRvZ2dsZWQge1xuICAgICAgICBsZXQgb3V0O1xuICAgICAgICBpZiAodGhpcy5oZWFkU2V0KCkuaGFzKGhlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRTZXQoKS5kZWxldGUoaGVhZCk7XG4gICAgICAgICAgICBvdXQgPSB0cC5Ub2dnbGVkLlJFTU9WRURcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmFkZChoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuQURERURcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aHJvdWdoIHNldHRlciBmdW5jdGlvbiB0byBlbnN1cmUgdXJsIGlzIHVwZGF0ZWRcbiAgICAgICAgdGhpcy5oZWFkU2V0KHRoaXMuaGVhZFNldCgpKTsgLy8gSSBoYXRlIG11dGFibGUgZGF0YXN0cnVjdHVyZXMuLi4gVGhpcyBpcyBjb25mdXNpbmcuXG5cbiAgICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIHRvZ2dsZVRva2VuKGU6IHRwLlRva2VuRXZlbnQpOiB0aGlzIHtcbiAgICAgICAgY29uc3QgcGlja2VyID0gUi5waWNrKFsnaW5kJywgJ3NpZGUnXSlcbiAgICAgICAgY29uc3QgY29tcGFyZUV2ZW50ID0gcGlja2VyKGUpXG4gICAgICAgIGNvbnN0IGNvbXBhcmVUb2tlbiA9IHBpY2tlcih0aGlzLnRva2VuKCkpXG5cbiAgICAgICAgaWYgKFIuZXF1YWxzKGNvbXBhcmVUb2tlbiwgY29tcGFyZUV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ybVRva2VuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuKGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRva2VuKCk6IHRwLlRva2VuRXZlbnQ7XG4gICAgdG9rZW4odmFsOiB0cC5Ub2tlbkV2ZW50KTogdGhpcztcbiAgICB0b2tlbih2YWw/OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlblxuXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuSW5kID0gdmFsLmluZDtcbiAgICAgICAgdGhpcy5fY29uZi50b2tlblNpZGUgPSB2YWwuc2lkZTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGFzVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbmYgPSB0aGlzLl9jb25mXG4gICAgICAgIGNvbnN0IGFjdHVhbGx5TnVsbCA9ICgoY29uZi50b2tlbkluZCA9PSBudWxsKSAmJiAoY29uZi50b2tlblNpZGUgPT0gbnVsbCkpXG4gICAgICAgIGNvbnN0IHN0ck51bGwgPSAoY29uZi50b2tlbkluZCA9PSBcIm51bGxcIilcbiAgICAgICAgcmV0dXJuICghYWN0dWFsbHlOdWxsKSAmJiAoIXN0ck51bGwpXG4gICAgfVxuXG4gICAgcm1Ub2tlbigpIHtcbiAgICAgICAgdGhpcy50b2tlbih7IGluZDogbnVsbCwgc2lkZTogbnVsbCB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZW50ZW5jZSgpOiBzdHJpbmc7XG4gICAgc2VudGVuY2UodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIHNlbnRlbmNlKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYuc2VudGVuY2VcblxuICAgICAgICB0aGlzLl9jb25mLnNlbnRlbmNlID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwodHJ1ZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyO1xuICAgIHRocmVzaG9sZCh2YWw6IG51bWJlcik6IHRoaXM7XG4gICAgdGhyZXNob2xkKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi50aHJlc2hvbGQ7XG5cbiAgICAgICAgdGhpcy5fY29uZi50aHJlc2hvbGQgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZHMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5oZWFkc1xuICAgIH1cblxuICAgIGxheWVyKCk6IG51bWJlclxuICAgIGxheWVyKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIGxheWVyKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmYubGF5ZXJcblxuICAgICAgICB0aGlzLl9jb25mLmxheWVyID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgaGVhZFNldCgpOiBTZXQ8bnVtYmVyPjtcbiAgICBoZWFkU2V0KHZhbDogU2V0PG51bWJlcj4pOiB0aGlzO1xuICAgIGhlYWRTZXQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkU2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGVhZFNldCA9IHZhbDtcbiAgICAgICAgdGhpcy5fY29uZi5oZWFkcyA9IHhfLnNldDJTb3J0ZWRBcnJheSh0aGlzLl9oZWFkU2V0KVxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbWV0YU1hdGNoKCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1hdGNoKHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1hdGNoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tZXRhTWF4O1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1heCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtZXRhTWF4KCk6IHRwLlNpbXBsZU1ldGE7XG4gICAgbWV0YU1heCh2YWw6IHRwLlNpbXBsZU1ldGEpOiB0aGlzO1xuICAgIG1ldGFNYXgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXRjaDtcblxuICAgICAgICB0aGlzLl9jb25mLm1ldGFNYXRjaCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYXNrSW5kcygpOiBudW1iZXJbXTtcbiAgICBtYXNrSW5kcyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBtYXNrSW5kcyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWFza0luZHM7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tYXNrSW5kcyA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkaXNwbGF5SW5zcGVjdG9yKCk6IEluc3BlY3Rvck9wdGlvbnM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw6IEluc3BlY3Rvck9wdGlvbnMpOiB0aGlzO1xuICAgIGRpc3BsYXlJbnNwZWN0b3IodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3I7XG5cbiAgICAgICAgdGhpcy5fY29uZi5kaXNwbGF5SW5zcGVjdG9yID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9mZnNldElkeHMoKTogbnVtYmVyW107XG4gICAgb2Zmc2V0SWR4cyh2YWw6IG51bWJlcltdKTogdGhpcztcbiAgICBvZmZzZXRJZHhzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5vZmZzZXRJZHhzO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdG8gbnVtYmVyc1xuXG4gICAgICAgIHRoaXMuX2NvbmYub2Zmc2V0SWR4cyA9IFIubWFwKHRvTnVtYmVyLCB2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGVDbHNTZXAoKTogYm9vbGVhbjtcbiAgICBoaWRlQ2xzU2VwKHZhbDogYm9vbGVhbik6IHRoaXM7XG4gICAgaGlkZUNsc1NlcCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuaGlkZUNsc1NlcDtcblxuICAgICAgICB0aGlzLl9jb25mLmhpZGVDbHNTZXAgPSB0cnV0aHkodmFsKTtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtb2RlbCgpOiBzdHJpbmc7XG4gICAgbW9kZWwodmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIG1vZGVsKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtb2RlbEtpbmQoKTogc3RyaW5nO1xuICAgIG1vZGVsS2luZCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWxLaW5kKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tb2RlbEtpbmRcbiAgICAgICAgdGhpcy5fY29uZi5tb2RlbEtpbmQgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgb2Zmc2V0IG5lZWRlZCBmb3IgdGhlIG1vZGVsS2luZCBpbiB0aGUgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIGdldCBvZmZzZXQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlbEtpbmQoKSkge1xuICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5BdXRvcmVncmVzc2l2ZToge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvcnB1cygpOiBzdHJpbmc7XG4gICAgY29ycHVzKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBjb3JwdXModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLmNvcnB1c1xuICAgICAgICB0aGlzLl9jb25mLmNvcnB1cyA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBFZGdlLCBFZGdlRGF0YSB9IGZyb20gXCIuL0VkZ2VDb25uZWN0b3JcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuXG5leHBvcnQgdHlwZSBBdHRlbnRpb25EYXRhID0gbnVtYmVyW11bXVxuXG5leHBvcnQgY29uc3Qgc2NhbGVMaW5lYXJXaWR0aCA9IG9wYWNpdHkgPT4gNSAqIG9wYWNpdHleMC4zMztcblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbkdyYXBoIGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25EYXRhPntcbiAgICBjc3NfbmFtZSA9ICcnO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25EYXRhOyAvLyBUaGUgcGFzc2VkIGRhdGFcbiAgICBlZGdlRGF0YTogRWRnZURhdGE7IC8vIEEgd3JhcHBlciBhcm91bmQgX2RhdGEuIFVzZXIgc2hvdWxkIG5vdCBtaW5kXG4gICAgcGxvdERhdGE6IEVkZ2VbXTsgLy8gTmVlZGVkIGZvciBwbG90dGluZ1xuXG4gICAgLyoqIENPTVBPTkVOVFNcbiAgICAgKiBFeHBvc2UgdGhlIGNvbXBvbmVudHMgYmVsb25naW5nIHRvIHRoZSBjbGFzcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzcy4gXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY3JlYXRlIG1ldGhvZHMgdGhhdCBzcGVjaWZpY2FsbHkgbW9kaWZ5IGEgc2luZ2xlIHBhcnQgb3IgY29tcG9uZW50IHdpdGhvdXQgaGF2aW5nIHRvIHJlc2VsZWN0IGl0LiBcbiAgICAgKiBNYWtlcyBmb3IgbW9yZSByZXNwb25zaXZlIGFwcGxpY2F0aW9uc1xuICAgICAqICovXG4gICAgc3ZnOiBEM1NlbDtcbiAgICBncmFwaDogRDNTZWw7XG5cbiAgICAvLyBUaGUgYmVsb3cgY29tcG9uZW50cyByZXF1aXJlIGRhdGFcbiAgICBwYXRoczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlczogZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W107XG4gICAgbGlua0dlbjogZDMuTGluazxhbnksIGFueSwgYW55PlxuXG4gICAgLy8gT1BUSU9OUyBXSVRIIERFRkFVTFRTXG4gICAgX3RocmVzaG9sZCA9IDAuNzsgLy8gQWNjdW11bGF0aW9uIHRocmVzaG9sZC4gQmV0d2VlbiAwLTFcbiAgICBub3JtQnk6IHRwLk5vcm1CeVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHt9IC8vIE5vIGV2ZW50cyBuZWVkZWQgZm9yIHRoaXMgb25lXG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LCAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBkaXYgYm94ZXMgYXJvdW5kIHRoZSBTVkcgZWxlbWVudFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgb2Zmc2V0OiAwLCAvLyBTaG91bGQgSSBvZmZzZXQgdGhlIGxlZnQgc2lkZSBieSAxIG9yIG5vdD9cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5ncmFwaCA9IHRoaXMuc3ZnLnNlbGVjdEFsbChgLmF0bi1jdXJ2ZWApO1xuICAgICAgICB0aGlzLmxpbmtHZW4gPSBkMy5saW5rSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAueChkID0+IGRbMF0pXG4gICAgICAgICAgICAueShkID0+IGRbMV0pO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB3aGV0aGVyIHRvIHVzZSB0aGUgJ2onIG9yICdpJyBhdHRyaWJ1dGUgdG8gY2FsY3VsYXRlIG9wYWNpdGllc1xuICAgIHByaXZhdGUgc2NhbGVJZHgoKTogXCJpXCIgfCBcImpcIiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5ub3JtQnkpIHtcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LkNvbDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2onXG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5Sb3c6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpJ1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQWxsOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaSdcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY29ubmVjdGlvbnMgYmV0d2VlbiBsb2NhdGlvbnMgb2YgdGhlIFNWRyB1c2luZyBEMydzIGxpbmtHZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUNvbm5lY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHJzKHtcbiAgICAgICAgICAgICAgICAnZCc6IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHsgc291cmNlOiBbbnVtYmVyLCBudW1iZXJdLCB0YXJnZXQ6IFtudW1iZXIsIG51bWJlcl0gfSA9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogWzAsIG9wLmJveGhlaWdodCAqIChkLmkgKyAwLjUgKyBvcC5vZmZzZXQpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW29wLndpZHRoLCBvcC5ib3hoZWlnaHQgKiAoZC5qICsgMC41KV0gLy8gKyAyIGFsbG93cyBzbWFsbCBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0dlbihkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdhdG4tY3VydmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjLWlkeFwiLCAoZCwgaSkgPT4gZC5pKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGFyZ2V0LWlkeFwiLCAoZCwgaSkgPT4gZC5qKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgaGVpZ2h0IG9mIHRoZSBTVkdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMub3B0aW9ucy5oZWlnaHQgKyAob3Aub2Zmc2V0ICogdGhpcy5vcHRpb25zLmJveGhlaWdodCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ZnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZnLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLm9wdGlvbnMud2lkdGgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBPcGFjaXR5IG9mIHRoZSBsaW5lcyBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlIG9mIHRoZSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVPcGFjaXR5KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMucGF0aHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gcGF0aHMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCkuYXR0cignb3BhY2l0eScsIChkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ29wYWNpdHknLCAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3BhY2l0eVNjYWxlc1tkW3NlbGYuc2NhbGVJZHgoKV1dKGQudik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHIoJ3N0cm9rZS13aWR0aCcsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5vcGFjaXR5U2NhbGVzW2Rbc2VsZi5zY2FsZUlkeCgpXV0oZC52KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NhbGVMaW5lYXJXaWR0aCh2YWwpIC8vNSAqIHZhbF4wLjMzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXJlbmRlciB0aGUgZ3JhcGggaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRhdGEgY2hhbmdlc1xuICAgICAqL1xuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGggIT0gbnVsbCkge1xuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiLmF0bi1jdXJ2ZVwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucGxvdERhdGFcblxuICAgICAgICAgICAgdGhpcy5wYXRocyA9IHRoaXMuZ3JhcGhcbiAgICAgICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgICAgIC5qb2luKCdwYXRoJyk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29ubmVjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBvcGFjaXR5IGFjY29yZGluZyB0byB0aGUgdmFsdWVzIG9mIHRoZSBkYXRhLCBmcm9tIDAgdG8gbWF4IG9mIGNvbnRhaW5lZCBkYXRhXG4gICAgICogTm9ybWFsaXplIGJ5IGVhY2ggc291cmNlIHRhcmdldCwgb3IgYWNyb3NzIHRoZSB3aG9sZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlU2NhbGVzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcbiAgICAgICAgbGV0IGFyciA9IFtdXG5cbiAgICAgICAgLy8gR3JvdXAgbm9ybWFsaXphdGlvblxuICAgICAgICBzd2l0Y2ggKHRoaXMubm9ybUJ5KXtcbiAgICAgICAgICAgIGNhc2UgdHAuTm9ybUJ5LlJvdzpcbiAgICAgICAgICAgICAgICBhcnIgPSB0aGlzLmVkZ2VEYXRhLmV4dGVudCgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBhcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAodGhpcy5vcGFjaXR5U2NhbGVzIGFzIGQzLlNjYWxlTGluZWFyPGFueSwgYW55PltdKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHZbMV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgMC45XSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRwLk5vcm1CeS5Db2w6XG4gICAgICAgICAgICAgICAgYXJyID0gdGhpcy5lZGdlRGF0YS5leHRlbnQoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICAgICAgYXJyLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BhY2l0eVNjYWxlcyBhcyBkMy5TY2FsZUxpbmVhcjxhbnksIGFueT5bXSkucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCB2WzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDAuOV0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0cC5Ob3JtQnkuQWxsOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heEluID0gZDMubWF4KHRoaXMucGxvdERhdGEubWFwKChkKSA9PiBkLnYpKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZXMucHVzaChkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZG9tYWluKFswLCBtYXhJbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDFdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vciBub3JtaW5nIHNwZWNpZmllZFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgZGF0YSBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgZGF0YSgpOiBBdHRlbnRpb25EYXRhXG4gICAgZGF0YSh2YWx1ZTogQXR0ZW50aW9uRGF0YSk6IHRoaXNcbiAgICBkYXRhKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZWRnZURhdGEgPSBuZXcgRWRnZURhdGEodmFsdWUpO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgaGVpZ2h0IGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBoZWlnaHQoKTogbnVtYmVyXG4gICAgaGVpZ2h0KHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgaGVpZ2h0KHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgPSB2YWx1ZVxuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgd2lkdGggaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHdpZHRoKCk6IG51bWJlclxuICAgIHdpZHRoKHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgd2lkdGgodmFsdWU/OiBudW1iZXIpOiB0aGlzIHwgbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXNzIC8gbW9kaWZ5IHRoZSB0aHJlc2hvbGQgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHRocmVzaG9sZCgpOiBudW1iZXJcbiAgICB0aHJlc2hvbGQodmFsdWU6IG51bWJlcik6IHRoaXNcbiAgICB0aHJlc2hvbGQodmFsdWU/KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdGhyZXNob2xkID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGxvdERhdGEgPSB0aGlzLmVkZ2VEYXRhLmZvcm1hdCh0aGlzLl90aHJlc2hvbGQpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNjYWxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogQXR0ZW50aW9uRGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5zdmcuaHRtbCgnJylcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IFNWRyB9IGZyb20gXCIuLi9ldGMvU1ZHcGx1c1wiXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuXG4vLyBUaGUgYmVsb3cgdHdvIChpbnRlcmZhY2UgYW5kIGZ1bmN0aW9uKSBjYW4gYmVjb21lIGEgY2xhc3NcbmV4cG9ydCB0eXBlIEF0dGVudGlvbkhlYWRCb3hJID0ge1xuICAgIHJvd3M6IG51bWJlcltdW10sXG4gICAgbGFiZWxzOiBudW1iZXJbXSxcbiAgICBtYXg6IG51bWJlcixcbn1cblxuLyoqXG4gKiBGcm9tIGFuIGF0dGVudGlvbiBtYXRyaXggc2VsZWN0ZWQgYnkgbGF5ZXIsIHNob3cgYSBzdW1tYXJ5IG9mIHRoZSBhdHRlbnRpb25zIGJlbG9uZ2luZyB0byBlYWNoIGhlYWQuXG4gKiBcbiAqIEBwYXJhbSBoZWFkTWF0IFRoZSBtYXRyaXggcmVwcmVzZW50aW5nIGFsbCB0aGUgYXR0ZW50aW9ucyBieSBoZWFkIChsYXllciBhbHJlYWR5IHNlbGVjdGVkKVxuICogQHBhcmFtIGhlYWRMaXN0IFRoZSBoZWFkcyB0aGF0IGFyZSBzZWxlY3RlZFxuICogQHBhcmFtIHNpZGUgSXMgdGhpcyB0aGUgcmlnaHQgb3IgdGhlIGxlZnQgZGlzcGxheT9cbiAqIEByZXR1cm5zIEluZm9ybWF0aW9uIG5lZWRlZCB0byBsYWJlbCB0aGUgaGVhZGJveFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXR0ZW50aW9uSW5mbyhoZWFkTWF0OiBudW1iZXJbXVtdW10sIGhlYWRMaXN0OiBudW1iZXJbXSwgc2lkZTogXCJyaWdodFwiIHwgXCJsZWZ0XCIgPSBcImxlZnRcIik6IEF0dGVudGlvbkhlYWRCb3hJIHtcbiAgICAvLyBDb2xsZWN0IG9ubHkgZnJvbSBoZWFkbGlzdCwgYXZlcmFnZSBlYWNoIGhlYWQsIHRyYW5zcG9zZSB0byBlYXNlIGl0ZXJhdGlvblxuICAgIGlmIChoZWFkTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogW1tdXSxcbiAgICAgICAgICAgIGxhYmVsczogW10sXG4gICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYXhpczogbnVtYmVyID0gc2lkZSA9PSBcImxlZnRcIiA/IDIgOiAxO1xuXG4gICAgLy8gYXZlcmFnZSBhY3Jvc3MgdGhlIGF4aXMgcmVwcmVzZW50aW5nIHRoZSBhdHRlbnRpb25zLlxuICAgIGxldCBnYXRoZXJlZE1hdCA9IHRmLnRlbnNvcjNkKGhlYWRNYXQpLmdhdGhlcihoZWFkTGlzdCwgMCkubWVhbihbYXhpc10pLnRyYW5zcG9zZSgpO1xuXG4gICAgY29uc3Qgcm93SW5mbyA9IDxudW1iZXJbXVtdPmdhdGhlcmVkTWF0LmFycmF5U3luYygpO1xuXG4gICAgY29uc3Qgb3V0OiBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICAgICAgcm93czogcm93SW5mbyxcbiAgICAgICAgbGFiZWxzOiBoZWFkTGlzdCxcbiAgICAgICAgbWF4OiA8bnVtYmVyPmdhdGhlcmVkTWF0Lm1heCgpLmFycmF5U3luYygpLFxuICAgIH1cblxuICAgIHJldHVybiBvdXRcbn1cblxuaW50ZXJmYWNlIEN1cnJlbnRPcHRpb25zIHtcbiAgICBoZWFkSGVpZ2h0OiBudW1iZXJcbiAgICBoZWFkV2lkdGg6IG51bWJlclxuICAgIHhQYWQ6IG51bWJlclxuICAgIHlQYWQ6IG51bWJlclxuICAgIGJveFdpZHRoOiBudW1iZXJcbiAgICB0b3RhbFdpZHRoOiBudW1iZXJcbiAgICB0b3RhbEhlaWdodDogbnVtYmVyXG59O1xuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uSGVhZEJveCBleHRlbmRzIFZDb21wb25lbnQ8QXR0ZW50aW9uSGVhZEJveEk+e1xuICAgIGNzc19uYW1lID0gJyc7XG4gICAgcm93Q3NzTmFtZSA9ICdhdHQtaGVhZCc7XG4gICAgYm94Q3NzTmFtZSA9ICdhdHQtcmVjdCc7XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQXR0ZW50aW9uSGVhZEJveF9Sb3dNb3VzZU92ZXJcIixcbiAgICAgICAgcm93TW91c2VPdXQ6IFwiQXR0ZW50aW9uSGVhZEJveF9Sb3dNb3VzZU91dFwiLFxuICAgICAgICBib3hNb3VzZU92ZXI6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU92ZXJcIixcbiAgICAgICAgYm94TW91c2VPdXQ6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hNb3VzZU91dFwiLFxuICAgICAgICBib3hDbGljazogXCJBdHRlbnRpb25IZWFkQm94X0JveENsaWNrXCIsXG4gICAgfTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25IZWFkQm94STtcblxuICAgIF9jdXJyZW50OiBQYXJ0aWFsPEN1cnJlbnRPcHRpb25zPiA9IHt9XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hEaW06IDI2LFxuICAgICAgICB5c2NhbGU6IDEsIC8vIEFtb3VudCB0byBzY2FsZSBib3hoZWlnaHQgdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgeHNjYWxlOiAwLjUsIC8vIEFtb3VudCB0byBzY2FsZSBib3h3aWR0aCB0byBnZXQgaW5kaXZpZHVhbCBoZWFkc1xuICAgICAgICBzaWRlOiBcImxlZnRcIixcbiAgICAgICAgbWF4V2lkdGg6IDIwMCwgLy8gTWF4aW11bSB3aWR0aCBvZiBTVkdcbiAgICAgICAgb2Zmc2V0OiAwLCAvLyAxIGlmIGZvciBhdXRvcmVncmVzc2l2ZSBtb2RlbHNcbiAgICB9O1xuXG4gICAgLy8gRDMgQ29tcG9uZW50c1xuICAgIGhlYWRSb3dzOiBEM1NlbDtcbiAgICBoZWFkQ2VsbHM6IEQzU2VsO1xuICAgIG9wYWNpdHlTY2FsZTogZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0U1ZHKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBfaW5pdCgpIHtcbiAgICAgICAgdGhpcy5oZWFkUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3RoaXMucm93Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLmhlYWRDZWxscyA9IHRoaXMuaGVhZFJvd3Muc2VsZWN0QWxsKGAke3RoaXMuYm94Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIDFdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUN1cnJlbnQoKTogUGFydGlhbDxDdXJyZW50T3B0aW9ucz4ge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLl9jdXJyZW50XG5cbiAgICAgICAgY29uc3QgbkhlYWRzID0gdGhpcy5fZGF0YS5yb3dzWzBdLmxlbmd0aFxuICAgICAgICBjb25zdCBiYXNlSGVhZFdpZHRoID0gb3AuYm94RGltICogb3AueHNjYWxlXG5cbiAgICAgICAgLy8gU2NhbGUgaGVhZHdpZHRoIGFjY29yZGluZyB0byBtYXhpbXVtIHdpZHRoXG4gICAgICAgIGNvbnN0IGdldEhlYWRTY2FsZSA9IChuSCkgPT4gKE1hdGgubWluKG9wLm1heFdpZHRoIC8gbkgsIGJhc2VIZWFkV2lkdGgpIC8gYmFzZUhlYWRXaWR0aCkgKiBvcC54c2NhbGU7XG5cbiAgICAgICAgY3VyLmhlYWRIZWlnaHQgPSBvcC5ib3hEaW0gKiBvcC55c2NhbGU7XG4gICAgICAgIGN1ci5oZWFkV2lkdGggPSBnZXRIZWFkU2NhbGUobkhlYWRzKSAqIG9wLmJveERpbTtcbiAgICAgICAgY3VyLnhQYWQgPSBjdXIuaGVhZFdpZHRoO1xuICAgICAgICBjdXIueVBhZCA9IChvcC5ib3hEaW0gLSBjdXIuaGVhZEhlaWdodCkgLyAyO1xuXG4gICAgICAgIGNvbnN0IGdldEJveFdpZHRoID0gKGhlYWRXaWR0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF4QndpZHRoID0gMTAwO1xuICAgICAgICAgICAgY29uc3QgYndpZHRoID0gdGhpcy5fZGF0YS5yb3dzWzBdLmxlbmd0aCAqIGN1ci5oZWFkV2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gZDMuc2NhbGVMaW5lYXJcbiAgICAgICAgICAgIGlmIChid2lkdGggPiBtYXhCd2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY3VyLmJveFdpZHRoID0gKHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGggKiBjdXIuaGVhZFdpZHRoKTtcbiAgICAgICAgY3VyLnRvdGFsV2lkdGggPSAoMiAqIGN1ci54UGFkKSArIGN1ci5ib3hXaWR0aDtcbiAgICAgICAgY3VyLnRvdGFsSGVpZ2h0ID0gKG9wLmJveERpbSAqICh0aGlzLl9kYXRhLnJvd3MubGVuZ3RoICsgb3Aub2Zmc2V0KSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3QgYm94RXZlbnQgPSAoaSkgPT4geyByZXR1cm4geyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUsIGhlYWQ6IHNlbGYuX2RhdGEubGFiZWxzW2ldIH0gfVxuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLnVwZGF0ZUN1cnJlbnQoKVxuXG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcblxuICAgICAgICB0aGlzLnBhcmVudFxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBjdXIudG90YWxXaWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGN1ci50b3RhbEhlaWdodClcblxuICAgICAgICB0aGlzLmhlYWRSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShzZWxmLl9kYXRhLnJvd3MpXG4gICAgICAgICAgICAuam9pbihcImdcIilcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgY2xhc3M6IChkLCBpKSA9PiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVkcudHJhbnNsYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGN1ci54UGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IChvcC5ib3hEaW0gKiAoaSArIG9wLm9mZnNldCkpICsgY3VyLnlQYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IGN1ci5ib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGN1ci5oZWFkSGVpZ2h0LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU92ZXIsIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3V0LCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmhlYWRDZWxscyA9IHRoaXMuaGVhZFJvd3NcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoYCR7dGhpcy5ib3hDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IGQpXG4gICAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHg6IChkLCBpKSA9PiBpICogY3VyLmhlYWRXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB0aGlzLmJveENzc05hbWUsXG4gICAgICAgICAgICAgICAgaGVhZDogKGQsIGkpID0+IHNlbGYuX2RhdGEubGFiZWxzW2ldLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXIuaGVhZFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY3VyLmhlYWRIZWlnaHQsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogKGQ6IG51bWJlcikgPT4gdGhpcy5vcGFjaXR5U2NhbGUoZCksXG4gICAgICAgICAgICAgICAgZmlsbDogXCJibHVlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3ZlciwgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3V0LCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJjbGlja1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6dGl0bGVcIilcbiAgICAgICAgICAgIC50ZXh0KChkLCBpKSA9PiBcIkhlYWQgXCIgKyAoc2VsZi5fZGF0YS5sYWJlbHNbaV0gKyAxKSlcbiAgICB9XG5cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm9wYWNpdHlTY2FsZSA9IHRoaXMub3BhY2l0eVNjYWxlLmRvbWFpbihbMCwgZGF0YS5tYXhdKVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6IEF0dGVudGlvbkhlYWRCb3hJKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQge1ZDb21wb25lbnR9IGZyb20gJy4vVmlzQ29tcG9uZW50J1xuaW1wb3J0IHtzcGFjeUNvbG9yc30gZnJvbSAnLi4vZXRjL1NwYWN5SW5mbydcbmltcG9ydCB7U1ZHfSBmcm9tICcuLi9ldGMvU1ZHcGx1cydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcic7XG5cbmludGVyZmFjZSBNYXJnaW5JbmZvIHtcbiAgICB0b3A6IG51bWJlcixcbiAgICBib3R0b206IG51bWJlcixcbiAgICByaWdodDogbnVtYmVyLFxuICAgIGxlZnQ6IG51bWJlclxufVxuXG4vLyBEZXBlbmRlbnQgb24gdGhlIG9wdGlvbnMgaW4gdGhlIHJlc3BvbnNlXG50eXBlIE1hdGNoZWRNZXRhU2VsZWN0aW9ucyA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJlbnRcIlxuXG5pbnRlcmZhY2UgTWF0Y2hlZE1ldGFDb3VudCB7XG4gICAgcG9zOiBudW1iZXJcbiAgICBkZXA6IG51bWJlclxuICAgIGlzX2VudDogbnVtYmVyXG59XG5cbmludGVyZmFjZSBNYXhBdHRNZXRhQ291bnQge1xuICAgIG9mZnNldDogbnVtYmVyXG59XG5cbnR5cGUgTWF0Y2hlZERhdGFJbnRlcmZhY2UgPSBNYXRjaGVkTWV0YUNvdW50XG50eXBlIE1heEF0dERhdGFJbnRlcmZhY2UgPSBNYXhBdHRNZXRhQ291bnRcbnR5cGUgRGF0YUludGVyZmFjZSA9IE1hdGNoZWREYXRhSW50ZXJmYWNlIHwgTWF4QXR0RGF0YUludGVyZmFjZVxuXG5pbnRlcmZhY2UgQ291bnRlZEhpc3Qge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY291bnQ6IG51bWJlclxufVxuXG50eXBlIFJlbmRlckRhdGFJbnRlcmZhY2UgPSBDb3VudGVkSGlzdFtdXG5cblxuLyoqXG4gKiAgRGF0YSBmb3JtYXR0aW5nIGZ1bmN0aW9uc1xuICovXG5jb25zdCB0b1JlbmRlckRhdGEgPSAob2JqOiB7W3M6IHN0cmluZ106IG51bWJlcn0pOiBSZW5kZXJEYXRhSW50ZXJmYWNlID0+IE9iamVjdC5rZXlzKG9iaikubWFwKChrLCBpKSA9PiB7XG4gICAgcmV0dXJuIHtsYWJlbDogaywgY291bnQ6IG9ialtrXX1cbn0pXG5cbmNvbnN0IHRvU3RyaW5nT3JOdW0gPSAoYTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuYSA9ICthXG4gICAgaWYgKGlzTmFOKG5hKSkge1xuICAgICAgICByZXR1cm4gYVxuICAgIH1cbiAgICByZXR1cm4gbmFcbn1cblxuY29uc3Qgc29ydEJ5TGFiZWwgPSBSLnNvcnRCeShSLmNvbXBvc2UodG9TdHJpbmdPck51bSwgUi5wcm9wKCdsYWJlbCcpKSlcbmNvbnN0IHNvcnRCeUNvdW50ID0gUi5zb3J0QnkoUi5wcm9wKCdjb3VudCcpKVxuXG5jb25zdCB0b09yZGVyZWRSZW5kZXIgPSBSLmNvbXBvc2UoXG4gICAgUi5yZXZlcnNlLFxuICAgIC8vIEB0cy1pZ25vcmUgLS0gVE9ETzogZml4XG4gICAgc29ydEJ5Q291bnQsXG4gICAgdG9SZW5kZXJEYXRhXG4pXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNIaXN0b2dyYW08VD4gZXh0ZW5kcyBWQ29tcG9uZW50PFQ+IHtcblxuICAgIGNzc19uYW1lID0gJydcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fVxuXG4gICAgX2N1cnJlbnQgPSB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRDMgQ09NUE9ORU5UU1xuICAgIHN2ZzogRDNTZWxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbWFyZ2luOiBNYXJnaW5JbmZvXG4gICAgICAgIGJhcldpZHRoOiBudW1iZXJcbiAgICAgICAgd2lkdGg6IG51bWJlclxuICAgICAgICBoZWlnaHQ6IG51bWJlclxuICAgICAgICB2YWw6IHN0cmluZ1xuICAgICAgICB4TGFiZWxSb3Q6IG51bWJlclxuICAgICAgICB4TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgICAgICB5TGFiZWxPZmZzZXQ6IG51bWJlclxuICAgIH1cblxuICAgIGF4ZXMgPSB7XG4gICAgICAgIHg6IGQzLnNjYWxlQmFuZCgpLFxuICAgICAgICB5OiBkMy5zY2FsZUxpbmVhcigpLFxuICAgIH1cblxuXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM9e30pIHtcbiAgICAgICAgc3VwZXIoZDNwYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgICByaWdodDogMzAsXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcbiAgICAgICAgICAgICAgICBsZWZ0OiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcldpZHRoOiAyNSxcbiAgICAgICAgICAgIHdpZHRoOiAxODUsXG4gICAgICAgICAgICBoZWlnaHQ6IDIzMCxcbiAgICAgICAgICAgIHZhbDogXCJwb3NcIiwgLy8gQ2hhbmdlIERlZmF1bHQsIHBhc3MgdGhyb3VnaCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgeExhYmVsUm90OiA0NSxcbiAgICAgICAgICAgIHhMYWJlbE9mZnNldDogMTUsXG4gICAgICAgICAgICB5TGFiZWxPZmZzZXQ6IDUsXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRygpXG4gICAgfVxuXG4gICAgbWV0YSgpOk1hdGNoZWRNZXRhU2VsZWN0aW9uc1xuICAgIG1ldGEodmFsOk1hdGNoZWRNZXRhU2VsZWN0aW9ucyk6IHRoaXNcbiAgICBtZXRhKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy52YWwgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuX2RhdGEpXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVYQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCB3aWR0aCA9IG9wLndpZHRoIC0gb3AubWFyZ2luLmxlZnQgLSBvcC5tYXJnaW4ucmlnaHRcblxuICAgICAgICB0aGlzLmF4ZXMueFxuICAgICAgICAgICAgLmRvbWFpbihSLm1hcChSLnByb3AoJ2xhYmVsJyksIHNlbGYucmVuZGVyRGF0YSkpXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbMCwgd2lkdGhdKVxuICAgICAgICAgICAgLnBhZGRpbmcoMC4xKVxuXG4gICAgICAgIHRoaXMuX2N1cnJlbnQuY2hhcnQud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVlBeGlzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9wLmhlaWdodCAtIG9wLm1hcmdpbi50b3AgLSBvcC5tYXJnaW4uYm90dG9tXG5cbiAgICAgICAgdGhpcy5heGVzLnlcbiAgICAgICAgICAgIC5kb21haW4oWzAsICtkMy5tYXgoUi5tYXAoUi5wcm9wKCdjb3VudCcpLCBzZWxmLnJlbmRlckRhdGEpKV0pXG4gICAgICAgICAgICAucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSlcblxuICAgICAgICB0aGlzLl9jdXJyZW50LmNoYXJ0LmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUF4ZXMoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKVxuICAgICAgICB0aGlzLmNyZWF0ZVlBeGlzKClcbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IGRhdGFbdGhpcy5vcHRpb25zLnZhbF1cbiAgICAgICAgcmV0dXJuIHRvT3JkZXJlZFJlbmRlcihvdXQpXG4gICAgfVxuXG4gICAgd2lkdGgoKTpudW1iZXJcbiAgICB3aWR0aCh2YWw6bnVtYmVyKTp0aGlzXG4gICAgd2lkdGgodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLndpZHRoID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWEF4aXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVpZ2h0KCk6bnVtYmVyXG4gICAgaGVpZ2h0KHZhbDpudW1iZXIpOnRoaXNcbiAgICBoZWlnaHQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlaWdodCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVZQXhpcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVdpZHRoKCkge1xuICAgICAgICB0aGlzLnN2Zy5hdHRyKCd3aWR0aCcsIHRoaXMub3B0aW9ucy53aWR0aClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgdGhpcy5zdmcuYXR0cignaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodClcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpZ1dpZHRoKGRhdGE6IFJlbmRlckRhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiAoZGF0YS5sZW5ndGggKiBvcC5iYXJXaWR0aCkgKyBvcC5tYXJnaW4ubGVmdCArIG9wLm1hcmdpbi5yaWdodFxuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTpSZW5kZXJEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQuaHRtbCgnJylcbiAgICAgICAgdGhpcy5zdmcgPSB0aGlzLnBhcmVudFxuXG4gICAgICAgIHRoaXMuY3JlYXRlQXhlcygpO1xuICAgICAgICB0aGlzLndpZHRoKHRoaXMuZmlnV2lkdGgoZGF0YSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgYXhlc1xuICAgICAgICBjb25zdCBnID0gc2VsZi5zdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnRyYW5zbGF0ZSh7eDogb3AubWFyZ2luLmxlZnQsIHk6b3AubWFyZ2luLnRvcH0pKVxuXG4gICAgICAgIC8vIEhhY2sgdG8gYWxsb3cgY2xlYXJpbmcgdGhpcyBoaXN0b2dyYW1zIHRvIHdvcmtcbiAgICAgICAgc2VsZi5iYXNlID0gZ1xuXG4gICAgICAgIC8vIEZpeCBiZWxvdyBmb3IgcG9zaXRpb25hbCBjaGFuZ2luZ1xuICAgICAgICAgICAgY29uc3QgYXhpc0JvdHRvbSA9IGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoe3g6IDAsIHk6Y3Vyci5jaGFydC5oZWlnaHR9KSlcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHNlbGYuYXhlcy54KSlcblxuICAgICAgICAgICAgaWYgKG9wLnZhbCAhPSBcIm9mZnNldFwiKSB7XG4gICAgICAgICAgICAgICAgYXhpc0JvdHRvbVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgb3AueUxhYmVsT2Zmc2V0KSAgIC8vIE1vdmUgYmVsb3cgdGhlIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIG9wLnhMYWJlbE9mZnNldCkgIC8vIE9mZnNldCB0byB0aGUgcmlnaHQgYSBiaXRcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgU1ZHLnJvdGF0ZShvcC54TGFiZWxSb3QpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdChzZWxmLmF4ZXMueSkpXG5cbiAgICAgICAgZy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAuam9pbigncmVjdCcpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLngoZC5sYWJlbCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5heGVzLnkoZC5jb3VudCk7IH0pXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHNlbGYuYXhlcy54LmJhbmR3aWR0aCgpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY3Vyci5jaGFydC5oZWlnaHQgLSBzZWxmLmF4ZXMueShkLmNvdW50KTsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGsgPT4gc3BhY3lDb2xvcnMuY29sb3JTY2FsZVtvcC52YWxdKGsubGFiZWwpKVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHtkM1MsIEQzU2VsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IFZDb21wb25lbnQgfSBmcm9tIFwiLi9WaXNDb21wb25lbnRcIjtcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcbmltcG9ydCAnLi4vZXRjL3hkMydcblxuLy8gSGVscGVyc1xuY29uc3QgY3Vyck1hdGNoSWR4ID0gKGVsZW0pID0+ICsoPEVsZW1lbnQ+ZWxlbS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ21hdGNoaWR4JylcbmNvbnN0IGN1cnJSb3dOdW0gPSAoZWxlbSkgPT4gKyg8RWxlbWVudD5lbGVtLnBhcmVudE5vZGUpLmdldEF0dHJpYnV0ZSgncm93bnVtJylcbmNvbnN0IGJhY2tncm91bmRDb2xvciA9IHggPT4gYHJnYmEoMTI4LCAwLCAxNTAsICR7MC42Knh9KWBcblxuZXhwb3J0IGNsYXNzIENvcnB1c0luc3BlY3RvciBleHRlbmRzIFZDb21wb25lbnQ8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1pbnNwZWN0b3InO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXTsgLy8gVGhlIHBhc3NlZCBkYXRhXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICByb3dNb3VzZU92ZXI6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd01vdXNlT3ZlclwiLFxuICAgICAgICByb3dNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3Jfcm93TW91c2VPdXRcIixcbiAgICAgICAgcm93Q2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd0NsaWNrXCIsXG4gICAgICAgIHJvd0RibENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dEYmxDbGlja1wiLFxuICAgICAgICBjZWxsTW91c2VPdmVyOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsTW91c2VPdmVyXCIsXG4gICAgICAgIGNlbGxNb3VzZU91dDogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbE1vdXNlT3V0XCIsXG4gICAgICAgIGNlbGxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbENsaWNrXCIsXG4gICAgICAgIGNlbGxEYmxDbGljazogXCJDb3JwdXNJbnNwZWN0b3JfY2VsbERibENsaWNrXCIsXG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHt9XG5cbiAgICAvLyBDT01QT05FTlRTXG4gICAgaW5zcGVjdG9yUm93czogRDNTZWxcbiAgICBpbnNwZWN0b3JDZWxsczogRDNTZWxcbiAgICBzY2FsZXIgPSBkMy5zY2FsZVBvdygpLnJhbmdlKFswLDAuOV0pLmV4cG9uZW50KDIpXG5cbiAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86U2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJvd3MoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhXG5cbiAgICAgICAgdGhpcy5pbnNwZWN0b3JSb3dzID0gdGhpcy5iYXNlLnNlbGVjdEFsbChcIi5pbnNwZWN0b3Itcm93XCIpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5zcGVjdG9yLXJvdycsIHRydWUpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIG1hdGNoSWR4OiBkID0+IGQuaW5kZXgsXG4gICAgICAgICAgICAgICAgcm93TnVtOiAoZCwgaSkgPT4gaSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNJbnNwZWN0b3IuZXZlbnRzLnJvd01vdXNlT3Zlciwge30pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy5pbnNwZWN0b3JDZWxscyA9IHRoaXMuaW5zcGVjdG9yQ2VsbHNcbiAgICAgICAgICAgIC5jbGFzc2VkKCdjZWxsdG9vbHRpcCcsIHRydWUpXG4gICAgICAgICAgICAuYXBwZW5kKCdzcGFuJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0b29sdGlwdGV4dCcsIHRydWUpXG4gICAgICAgICAgICAuaHRtbCgoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0eVN0ciA9IGQuaXNfZW50ID8gXCI8YnI+RW50aXR5XCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ID0gKDxFbGVtZW50Pm5baV0ucGFyZW50Tm9kZSkuZ2V0QXR0cmlidXRlKCdhdHQnKS5zbGljZSgwLCA3KVxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dFN0ciA9IGA8YnI+QXR0ZW50aW9uOiAke2F0dH1gXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYFBPUzogJHtkLnBvcy50b0xvd2VyQ2FzZSgpfTxicj5ERVA6ICR7ZC5kZXAudG9Mb3dlckNhc2UoKX1gICsgZW50aXR5U3RyICsgYXR0U3RyXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2VsbHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG5cbiAgICAgICAgdGhpcy5pbnNwZWN0b3JDZWxscyA9IHRoaXMuaW5zcGVjdG9yUm93cy5zZWxlY3RBbGwoJy5pbnNwZWN0b3ItY2VsbCcpXG4gICAgICAgICAgICAuZGF0YSgoZDp0cC5GYWlzc1NlYXJjaFJlc3VsdHMpID0+IGQudG9rZW5zKVxuICAgICAgICAgICAgLmpvaW4oJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5zcGVjdG9yLWNlbGwnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ2luZGV4LW9mZnNldCcsIChkLCBpLCBuOkhUTUxFbGVtZW50W10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaElkeCA9IGN1cnJNYXRjaElkeChuW2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiBpIC0gbWF0Y2hJZHggXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICBwb3M6IGQgPT4gZC5wb3MudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBkZXA6IGQgPT4gZC5kZXAudG9Mb3dlckNhc2UoKSwgXG4gICAgICAgICAgICAgICAgaXNfZW50OiBkID0+IGQuaXNfZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLnRva2VuLnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKSlcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXRjaGVkLWNlbGwnLCBkID0+IGQuaXNfbWF0Y2gpXG5cbiAgICAgICAgLy8gSGlnaGxpZ2h0IHRoZSBjZWxscyBhcHByb3ByaWF0ZWx5XG4gICAgICAgIHRoaXMuaW5zcGVjdG9yQ2VsbHMuZWFjaCgoZCxpLG4pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGN1cnJNYXRjaElkeChuW2ldKVxuICAgICAgICAgICAgaWYgKGkgPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ID0gZC5pbndhcmRcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhBdHQgPSArZDMubWF4KGF0dClcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUm93ID0gY3VyclJvd051bShuW2ldKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlciA9IHNlbGYuc2NhbGVyLmRvbWFpbihbMCwgbWF4QXR0XSlcblxuICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChgLmluc3BlY3Rvci1yb3dbcm93bnVtPScke2N1cnJSb3d9J11gKVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKGAuaW5zcGVjdG9yLWNlbGxgKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhY2tncm91bmRDb2xvcihzY2FsZXIoYXR0W2ldKSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2F0dCcsIChkLCBpKSA9PiBhdHRbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZi5hZGRUb29sdGlwKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUm93cygpXG4gICAgICAgIHRoaXMuY3JlYXRlQ2VsbHMoKVxuICAgIH1cblxuICAgIF9pbml0KCkge31cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIF9yZW5kZXIoZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW10pIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhhdCB0aGlzLl9kYXRhIGlzIGRlZmluZWQgaW4gd3JhbmdsZSB3aGljaCBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBiZWZvcmUgcmVuZGVyXG4gICAgICAgIC8vIGFzIGlzIGRlZmluZWQgaW4gdGhlIHVwZGF0ZSBmdW5jdGlvblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJ1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gJy4uL3Zpcy9WaXNDb21wb25lbnQnXG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIi4uL2V0Yy9TVkdwbHVzXCJcbmltcG9ydCB7IHNwYWN5Q29sb3JzIH0gZnJvbSBcIi4uL2V0Yy9TcGFjeUluZm9cIlxuaW1wb3J0IFwiLi4vZXRjL3hkM1wiXG5cbi8vIE5lZWQgYWRkaXRvaW5hbCBoZWlnaHQgaW5mb3JtYXRpb24gdG8gcmVuZGVyIGJveGVzXG5pbnRlcmZhY2UgQmFzZURhdGFJbnRlcmZhY2UgZXh0ZW5kcyB0cC5GYWlzc1NlYXJjaFJlc3VsdHMge1xuICAgIGhlaWdodDogbnVtYmVyXG59XG50eXBlIERhdGFJbnRlcmZhY2UgPSBCYXNlRGF0YUludGVyZmFjZVtdXG5cbmludGVyZmFjZSBDb2xvck1ldGFCYXNlRGF0YSB7XG4gICAgcG9zOiBzdHJpbmdcbiAgICBkZXA6IHN0cmluZ1xuICAgIGlzX2VudDogYm9vbGVhblxuICAgIHRva2VuOiBzdHJpbmdcbn1cblxudHlwZSBEaXNwbGF5T3B0aW9ucyA9IFwicG9zXCIgfCBcImRlcFwiIHwgXCJlbnRcIlxuXG5mdW5jdGlvbiBtYW5hZ2VyRGF0YTJNYXREYXRhKGRhdGFJbjogRGF0YUludGVyZmFjZSwgaW5kZXhPZmZzZXQgPSAwLCB0b1BpY2sgPSBbJ3BvcyddKSB7XG5cbiAgICBjb25zdCBvdXRPZlJhbmdlT2JqOiBDb2xvck1ldGFCYXNlRGF0YSA9IHtcbiAgICAgICAgcG9zOiBudWxsLFxuICAgICAgICBkZXA6IG51bGwsXG4gICAgICAgIGlzX2VudDogbnVsbCxcbiAgICAgICAgdG9rZW46IG51bGwsXG4gICAgfVxuXG4gICAgY29uc3QgY2hvb3NlUHJvcHMgPSBSLnBpY2sodG9QaWNrKVxuXG4gICAgY29uc3QgZGF0YU91dCA9IGRhdGFJbi5tYXAoZCA9PiB7XG4gICAgICAgIGNvbnN0IHdvcmRJZHggPSBkLmluZGV4ICsgaW5kZXhPZmZzZXQ7XG4gICAgICAgIGlmICgod29yZElkeCA8IDApIHx8ICh3b3JkSWR4ID49IGQudG9rZW5zLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBSLmFzc29jKCdoZWlnaHQnLCBkLmhlaWdodCwgb3V0T2ZSYW5nZU9iailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld09iaiA9IGNob29zZVByb3BzKGQudG9rZW5zW3dvcmRJZHhdKVxuXG4gICAgICAgIHJldHVybiBSLmFzc29jKCdoZWlnaHQnLCBkLmhlaWdodCwgbmV3T2JqKVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YU91dFxufVxuXG5cbmV4cG9ydCBjbGFzcyBDb3JwdXNNYXRNYW5hZ2VyIGV4dGVuZHMgVkNvbXBvbmVudDxEYXRhSW50ZXJmYWNlPntcbiAgICBjc3NfbmFtZSA9ICdjb3JwdXMtbWF0LWNvbnRhaW5lcidcbiAgICBvcHRpb25zID0ge1xuICAgICAgICBjZWxsV2lkdGg6IDEwLFxuICAgICAgICB0b1BpY2s6IFsncG9zJ10sXG4gICAgICAgIGlkeHM6IFstMSwgMCwgMV0sXG4gICAgICAgIGRpdkhvdmVyOiB7XG4gICAgICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDQwIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgbW91c2VPdmVyOiBcIkNvcnB1c01hdE1hbmFnZXJfTW91c2VPdmVyXCIsXG4gICAgICAgIG1vdXNlT3V0OiBcIkNvcnB1c01hdE1hbmFnZXJfTW91c2VPdXRcIixcbiAgICAgICAgY2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9DbGlja1wiLFxuICAgICAgICBkYmxDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX0RibENsaWNrXCIsXG4gICAgICAgIHJlY3RNb3VzZU92ZXI6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0TW91c2VPdmVyXCIsXG4gICAgICAgIHJlY3RNb3VzZU91dDogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RNb3VzZU91dFwiLFxuICAgICAgICByZWN0Q2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0Q2xpY2tcIixcbiAgICAgICAgcmVjdERibENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdERibENsaWNrXCIsXG4gICAgfVxuXG4gICAgLy8gVGhlIGQzIGNvbXBvbmVudHMgdGhhdCBhcmUgc2F2ZWQgdG8gbWFrZSByZW5kZXJpbmcgZmFzdGVyXG4gICAgY29ycHVzTWF0czogRDNTZWxcbiAgICByb3dHcm91cHM6IEQzU2VsXG4gICAgZGl2SG92ZXI6IEQzU2VsXG5cbiAgICBfY3VycmVudCA9IHt9XG4gICAgcm93Q3NzTmFtZSA9ICdpbmRleC1tYXRjaC1yZXN1bHRzJ1xuICAgIGNlbGxDc3NOYW1lID0gJ2luZGV4LWNlbGwtcmVzdWx0J1xuXG4gICAgX2RhdGE6IERhdGFJbnRlcmZhY2VcblxuICAgIHN0YXRpYyBjb2xvclNjYWxlOiB0cC5Db2xvck1ldGFTY2FsZSA9IHNwYWN5Q29sb3JzLmNvbG9yU2NhbGU7XG5cbiAgICAvLyBTZWxlY3Rpb25zXG4gICAgY29uc3RydWN0b3IoZDNwYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihkM3BhcmVudCwgZXZlbnRIYW5kbGVyKVxuICAgICAgICB0aGlzLmlkeHMgPSBbLTEsIDAsIDFdO1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgZ2V0IGlkeHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWR4cztcbiAgICB9XG5cbiAgICBzZXQgaWR4cyh2YWw6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pZHhzID0gdmFsXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHN0YXRpYyBkb20gZWxlbWVudHNcbiAgICBfaW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29ycHVzTWF0cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5jb3JwdXMtbWF0JylcbiAgICAgICAgdGhpcy5yb3dHcm91cHMgPSB0aGlzLmNvcnB1c01hdHMuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5kaXZIb3ZlciA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbWF0LWhvdmVyLWRpc3BsYXknLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3RleHQtY2VudGVyJywgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLndpZHRoKSArICdweCcpXG4gICAgICAgICAgICAuc3R5bGUoJ2hlaWdodCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIuaGVpZ2h0KSArICdweCcpXG5cbiAgICAgICAgdGhpcy5kaXZIb3Zlci5hcHBlbmQoJ3AnKVxuICAgIH1cblxuICAgIHBpY2sodmFsOiBEaXNwbGF5T3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMudG9QaWNrID0gW3ZhbF1cbiAgICAgICAgdGhpcy5yZWRyYXcoKVxuICAgIH1cblxuICAgIGFkZFJpZ2h0KCkge1xuICAgICAgICBjb25zdCBhZGRlZElkeCA9IFIubGFzdCh0aGlzLmlkeHMpICsgMTtcbiAgICAgICAgdGhpcy5pZHhzLnB1c2goYWRkZWRJZHgpXG4gICAgICAgIHRoaXMuYWRkQ29ycHVzTWF0KGFkZGVkSWR4LCBcInJpZ2h0XCIpXG4gICAgfVxuXG4gICAgYWRkTGVmdCgpIHtcbiAgICAgICAgY29uc3QgYWRkZWRJZHggPSB0aGlzLmlkeHNbMF0gLSAxO1xuICAgICAgICBjb25zdCBhZGREZWNyZW1lbnRlZEhlYWQ6ICh4OiBudW1iZXJbXSkgPT4gbnVtYmVyW10gPSB4ID0+IFIuaW5zZXJ0KDAsIFIuaGVhZCh4KSAtIDEpKHgpXG4gICAgICAgIHRoaXMuaWR4cyA9IGFkZERlY3JlbWVudGVkSGVhZCh0aGlzLmlkeHMpXG4gICAgICAgIHRoaXMuYWRkQ29ycHVzTWF0KGFkZGVkSWR4LCBcImxlZnRcIilcbiAgICB9XG5cbiAgICBraWxsUmlnaHQoKSB7XG4gICAgICAgIHRoaXMua2lsbChNYXRoLm1heCguLi50aGlzLmlkeHMpKVxuICAgIH1cblxuICAgIGtpbGxMZWZ0KCkge1xuICAgICAgICB0aGlzLmtpbGwoTWF0aC5taW4oLi4udGhpcy5pZHhzKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWRnZSB2YWx1ZSBmcm9tIGNvbnRhaW5lZCBpbmRleGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZCBJbmRleCB0byByZW1vdmVcbiAgICAgKi9cbiAgICBraWxsKGQ6IG51bWJlcikge1xuICAgICAgICBpZiAoZCAhPSAwKSB7XG4gICAgICAgICAgICBpZiAoZCA9PSBNYXRoLm1pbiguLi50aGlzLmlkeHMpIHx8IGQgPT0gTWF0aC5tYXgoLi4udGhpcy5pZHhzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWR4cyA9IFIud2l0aG91dChbZF0sIHRoaXMuaWR4cylcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAub2Zmc2V0LSR7ZH1gKS5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGRhdGEodmFsPzogRGF0YUludGVyZmFjZSkge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWFpbiByZW5kZXJpbmcgY29kZSwgY2FsbGVkIHdoZW5ldmVyIHRoZSBkYXRhIGNoYW5nZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoJy5jb3JwdXMtbWF0JykucmVtb3ZlKClcblxuICAgICAgICB0aGlzLmlkeHMuZm9yRWFjaCgoaWR4T2Zmc2V0LCBpKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmFkZENvcnB1c01hdChpZHhPZmZzZXQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGFub3RoZXIgd29yZCdzIG1ldGEgaW5mb3JtYXRpb24gbWF0cml4IGNvbHVtbiB0byBlaXRoZXIgc2lkZSBvZiB0aGUgaW5kZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZHhPZmZzZXQgRGlzdGFuY2Ugb2Ygd29yZCBmcm9tIG1hdGNoZWQgd29yZCBpbiB0aGUgc2VudGVuY2VcbiAgICAgKiBAcGFyYW0gdG9UaGUgSW5kaWNhdGVzIGFkZGluZyB0byB0aGUgXCJsZWZ0XCIgb3IgdG8gdGhlIFwicmlnaHRcIiBvZiB0aGUgaW5kZXhcbiAgICAgKi9cbiAgICBhZGRDb3JwdXNNYXQoaWR4T2Zmc2V0OiBudW1iZXIsIHRvVGhlOiBcInJpZ2h0XCIgfCBcImxlZnRcIiA9IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGJveFdpZHRoID0gb3AuY2VsbFdpZHRoICogb3AudG9QaWNrLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYm94SGVpZ2h0ID0gUi5zdW0oUi5tYXAoUi5wcm9wKCdoZWlnaHQnKSwgdGhpcy5fZGF0YSkpXG5cbiAgICAgICAgbGV0IGNvcnB1c01hdDtcblxuICAgICAgICBpZiAodG9UaGUgPT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBjb3JwdXNNYXQgPSB0aGlzLmJhc2UuYXBwZW5kKCdkaXYnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvVGhlID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICBjb3JwdXNNYXQgPSB0aGlzLmJhc2UuaW5zZXJ0KCdkaXYnLCBcIjpmaXJzdC1jaGlsZFwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJ0b1RoZSBtdXN0IGhhdmUgYXJndW1lbnQgb2YgJ2xlZnQnIG9yICdyaWdodCdcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcnB1c01hdCA9IGNvcnB1c01hdFxuICAgICAgICAgICAgLmRhdGEoW2lkeE9mZnNldF0pXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCBgY29ycHVzLW1hdCBvZmZzZXQtJHtpZHhPZmZzZXR9YClcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCBpZHhPZmZzZXQpXG4gICAgICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogYm94V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBib3hIZWlnaHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdmVyLCB7IGlkeDogaSwgb2Zmc2V0OiBkLCB2YWw6IHNlbGYub3B0aW9ucy50b1BpY2tbMF0gfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3V0LCB7IGlkeDogaSwgb2Zmc2V0OiBkIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYWRkUm93R3JvdXAoY29ycHVzTWF0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG1hdCBUaGUgYmFzZSBkaXYgb24gd2hpY2ggdG8gYWRkIG1hdHJpY2VzIGFuZCByb3dzXG4gICAgICovXG4gICAgYWRkUm93R3JvdXAobWF0OiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0cyA9IFIubWFwKFIucHJvcCgnaGVpZ2h0JyksIHRoaXMuX2RhdGEpXG5cbiAgICAgICAgY29uc3QgW2hlaWdodFN1bSwgcmF3SGVpZ2h0TGlzdF0gPSBSLm1hcEFjY3VtKCh4LCB5KSA9PiBbUi5hZGQoeCwgeSksIFIuYWRkKHgsIHkpXSwgMCwgaGVpZ2h0cylcbiAgICAgICAgY29uc3QgZml4TGlzdDogKHg6IG51bWJlcltdKSA9PiBudW1iZXJbXSA9IFIuY29tcG9zZShSLmRyb3BMYXN0KDEpLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgUi5wcmVwZW5kKDApXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgaGVpZ2h0TGlzdCA9IGZpeExpc3QocmF3SGVpZ2h0TGlzdClcblxuICAgICAgICBjb25zdCByb3dHcm91cCA9IG1hdC5zZWxlY3RBbGwoYC4ke3NlbGYucm93Q3NzTmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZCA9PiBtYW5hZ2VyRGF0YTJNYXREYXRhKHNlbGYuX2RhdGEsIGQsIG9wLnRvUGljaykpXG4gICAgICAgICAgICAuam9pbihcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7c2VsZi5yb3dDc3NOYW1lfSAke3NlbGYucm93Q3NzTmFtZX0tJHtpfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcInJvdy1udW1cIiwgKGQsaSkgPT4gaSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGQgPT4gZC5oZWlnaHQpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IFNWRy50cmFuc2xhdGUoe1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiBoZWlnaHRMaXN0W2ldLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICAgICAgfSlcblxuICAgICAgICBvcC50b1BpY2suZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgIHNlbGYuYWRkUmVjdChyb3dHcm91cCwgMCwgcHJvcClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRSZWN0KGc6IEQzU2VsLCB4U2hpZnQ6IG51bWJlciwgcHJvcDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zXG5cbiAgICAgICAgY29uc3QgcmVjdHMgPSBnLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBvcC5jZWxsV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBkID0+IGQuaGVpZ2h0IC0gMyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVkcudHJhbnNsYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHhTaGlmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDEuNSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ29ycHVzTWF0TWFuYWdlci5jb2xvclNjYWxlW3Byb3BdKGRbcHJvcF0pKVxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBnZXRCYXNlWCA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxuICAgICAgICBjb25zdCBnZXRCYXNlWSA9ICgpID0+ICg8SFRNTEVsZW1lbnQ+c2VsZi5iYXNlLm5vZGUoKSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG5cbiAgICAgICAgZy5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgIC8vIEdldCBvZmZzZXRcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpIC8vIENvbHVtblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICtjb2wuYXR0cignb2Zmc2V0JylcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU92ZXIsIHtpZHg6IGksIG9mZnNldDogb2Zmc2V0fSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRpdkhvdmVyLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gZDMuc2VsZWN0KHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlKSAvLyBDb2x1bW5cbiAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSArY29sLmF0dHIoJ29mZnNldCcpXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdXQsIHtpZHg6IGksIG9mZnNldDogb2Zmc2V0fSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHNlbGYuYmFzZS5ub2RlKCkpXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2T2Zmc2V0ID0gWzMsIDNdXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IG1vdXNlWzBdICsgZ2V0QmFzZVgoKSAtIChvcC5kaXZIb3Zlci53aWR0aCArIGRpdk9mZnNldFswXSlcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSBtb3VzZVsxXSArIGdldEJhc2VZKCkgLSAob3AuZGl2SG92ZXIuaGVpZ2h0ICsgZGl2T2Zmc2V0WzFdKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgU3RyaW5nKGxlZnQpICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBTdHJpbmcodG9wKSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoJ3AnKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChkW3Byb3BdKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0YSBEYXRhIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBfcmVuZGVyKGRhdGE6IERhdGFJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRGF0YSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgYXUgZnJvbSAnLi4vZXRjL2FycmF5VXRpbHMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzJ1xuaW1wb3J0IHsgVHlwZWRBcnJheSB9IGZyb20gJ0B0ZW5zb3JmbG93L3RmanMtY29yZS9kaXN0L3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBFZGdlIHtcbiAgICBpOiBudW1iZXIsIC8vIFNvdXJjZSBpbmRleFxuICAgIGo6IG51bWJlciwgLy8gVGFyZ2V0IGluZGV4XG4gICAgdjogbnVtYmVyLCAvLyBWYWx1ZVxufVxuXG4vKipcbiAqIENvbnZlcnQgZGF0YSBtYXRyaXggdG8gbmVjZXNzYXJ5IGRhdGEgYXJyYXkgdG8gcGFzcyB0byBTVkcgY29ubmVjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRWRnZXMgKGRhdGE6bnVtYmVyW11bXSwgY3V0b2ZmQW10PTEpIDogRWRnZVtdIHtcbiAgICBsZXQgb3V0QXJyOiBFZGdlW10gPSBbXTtcbiAgICBsZXQgY3V0b2ZmOiBudW1iZXI7XG4gICAgZGF0YS5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgY3V0b2ZmID0gY3V0b2ZmQW10ICogZDMuc3VtKHJvdyk7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgY29uc3Qgc29ydGVkQXJyOmF1LlNvcnRBcnJheSA9IGF1LnNvcnRXaXRoSW5kaWNlcyhyb3cpO1xuXG4gICAgICAgIHNvcnRlZEFyci5hcnIuZm9yRWFjaCgodixqKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnRlciA8IGN1dG9mZikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iajogRWRnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaTogaSxcbiAgICAgICAgICAgICAgICAgICAgajogc29ydGVkQXJyLnNvcnRJbmRpY2VzW2pdLFxuICAgICAgICAgICAgICAgICAgICB2OiB2LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRBcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICByZXR1cm4gb3V0QXJyO1xufVxuLyoqXG4gKiBDbGFzcyBmb3IgaW1wbGVtZW50aW5nIG9wZXJhdGlvbnMgb24gQXR0ZW50aW9uR3JhcGggaW1wbGVtZW50YXRpb24uIFxuICogQ2xvc2VseSB0aWVkIHRvIFtbQXR0ZW50aW9uQ29ubmVjdG9yXV1cbiAqL1xuZXhwb3J0IGNsYXNzIEVkZ2VEYXRhIHtcbiAgICByZWFkb25seSB0ZW5zRGF0YTp0Zi5UZW5zb3I7XG5cbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGRhdGE6bnVtYmVyW11bXSl7XG4gICAgICAgIHRoaXMudGVuc0RhdGEgPSB0Zi50ZW5zb3IoZGF0YSk7XG4gICAgfVxuXG4gICAgbWluKGF4aXM/Om51bWJlcik6VHlwZWRBcnJheSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1pbihheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIG1heChheGlzPzpudW1iZXIpOlR5cGVkQXJyYXl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbnNEYXRhLm1heChheGlzKS5kYXRhU3luYygpO1xuICAgIH1cblxuICAgIGV4dGVudChheGlzPzpudW1iZXIpOm51bWJlcltdW10ge1xuICAgICAgICByZXR1cm4gZDMuemlwKHRoaXMubWluKGF4aXMpLCB0aGlzLm1heChheGlzKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgdGhlIGRhdGEgdG8gc2VuZCB0byBTVkcgY2hhcnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIGFjY3VtdWxhdGVUaHJlc2ggLSBBIGZsb2F0IGJldHdlZW4gMCBhbmQgMSwgaW5kaWNhdGluZyB0aGUgYW1vdW50IG9mIHdlaWdodCB0byBkaXNwbGF5LiBEZWZhdWx0cyB0byAwLjcuXG4gICAgICovXG4gICAgZm9ybWF0IChhY2N1bXVsYXRlVGhyZXNoPTAuNyk6RWRnZVtdIHtcbiAgICAgICAgcmV0dXJuIHRvRWRnZXModGhpcy5kYXRhLCBhY2N1bXVsYXRlVGhyZXNoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgKiBhcyB0cCBmcm9tIFwiLi4vZXRjL3R5cGVzXCJcblxudHlwZSBpbmZvRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIpID0+IHRwLlRva2VuRXZlbnRcbnR5cGUgaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoc2VsOiBEM1NlbCwgaTogbnVtYmVyLCBlbWJlZDogbnVtYmVyW10pID0+IHRwLlRva2VuRW1iZWRkaW5nRXZlbnRcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRleHRUb2tlbnMgZXh0ZW5kcyBWQ29tcG9uZW50PHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT57XG5cbiAgICBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nXG4gICAgYWJzdHJhY3QgaG92ZXJfY3NzX25hbWU6IHN0cmluZ1xuICAgIGFic3RyYWN0IHNpZGU6IHRwLlNpZGVPcHRpb25zXG4gICAgZUluZm86IGluZm9FdmVudEZyb21JID0gKHNlbCwgaSkgPT4geyByZXR1cm4geyBzZWw6IHNlbCwgc2lkZTogdGhpcy5zaWRlLCBpbmQ6IGkgfSB9XG4gICAgZUVtYmVkZGluZzogaW5mb0VtYmVkZGluZ0V2ZW50RnJvbUkgPSAoc2VsLCBpLCBlbWJlZCkgPT4geyByZXR1cm4geyBzZWw6IHNlbCwgc2lkZTogdGhpcy5zaWRlLCBpbmQ6IGksIGVtYmVkZGluZ3M6IGVtYmVkIH0gfVxuICAgIGRpdkhvdmVyOiBEM1NlbFxuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgdG9rZW5Nb3VzZU92ZXI6IFwiVGV4dFRva2VuX1Rva2VuTW91c2VPdmVyXCIsXG4gICAgICAgIHRva2VuTW91c2VPdXQ6IFwiVGV4dFRva2VuX1Rva2VuTW91c2VPdXRcIixcbiAgICAgICAgdG9rZW5DbGljazogXCJUZXh0VG9rZW5fVG9rZW5DbGlja1wiLFxuICAgICAgICB0b2tlbkRibENsaWNrOiBcIlRleHRUb2tlbl9Ub2tlbkRibENsaWNrXCIsXG4gICAgfTtcblxuICAgIGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXTtcblxuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGJveGhlaWdodDogMjYsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgZGl2SG92ZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgICAgIG9mZnNldDogWzMsIDNdLFxuICAgICAgICAgICAgdGV4dEluZm86IFwiV291bGQgcHJlZGljdC4uLlwiXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHRleHRCb3hlczogRDNTZWxcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdEhUTUwob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbWFzayhtYXNrSW5kczogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc2VsZWN0QWxsKGAuJHt0aGlzLmNzc19uYW1lfWApXG4gICAgICAgICAgICAuZWFjaCgoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgICAgICAgIHNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsIF8uaW5jbHVkZXMobWFza0luZHMsIGkpKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRFbWJlZGRpbmcoaW5kOiBudW1iZXIpOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbaW5kXVxuICAgIH1cblxuICAgIF9pbml0KCkgeyB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgX2RpdlBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgZ2V0QmFzZVggPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgY29uc3QgZ2V0QmFzZVkgPSAoKSA9PiAoPEhUTUxFbGVtZW50PnNlbGYuYmFzZS5ub2RlKCkpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9uc1xuICAgICAgICBjb25zdCBtb3VzZSA9IGQzLm1vdXNlKHNlbGYuYmFzZS5ub2RlKCkpXG4gICAgICAgIGNvbnN0IGRpdk9mZnNldCA9IFszLCAzXVxuICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpIC0gKG9wLmRpdkhvdmVyLndpZHRoICsgZGl2T2Zmc2V0WzBdKVxuICAgICAgICBjb25zdCB0b3AgPSBtb3VzZVsxXSArIGdldEJhc2VZKCkgKyBkaXZPZmZzZXRbMV1cbiAgICAgICAgcmV0dXJuIFtsZWZ0LCB0b3BdXG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyBSZXNldCB0b2tlbiBkaXNwbGF5XG4gICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgdGhpcy5kaXZIb3ZlciA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCgndG9rLWluZm8nLCB0cnVlKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21hdC1ob3Zlci1kaXNwbGF5JywgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKHRoaXMuaG92ZXJfY3NzX25hbWUsIHRydWUpXG4gICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci53aWR0aCkgKyAncHgnKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBTdHJpbmcodGhpcy5vcHRpb25zLmRpdkhvdmVyLmhlaWdodCkgKyAncHgnKVxuXG4gICAgICAgICAgICB0aGlzLmRpdkhvdmVyXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgncCcpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ3AtaW5mbycsIHRydWUpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXdlaWdodCcsICdib2xkJylcbiAgICAgICAgICAgICAgICAudGV4dChvcC5kaXZIb3Zlci50ZXh0SW5mbylcblxuXG4gICAgICAgIC8vIEFkZCBibGFuayBkaXZzXG4gICAgICAgIGNvbnNvbGUubG9nKGBJbnRlcm5hbCBvZmZzZXQgKCR7dGhpcy5zaWRlfSk6IGAsIG9wLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGJsYW5rRGl2cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5ibGFuay10ZXh0LWJveGApXG5cbiAgICAgICAgYmxhbmtEaXZzLmRhdGEoUi5yYW5nZSgwLCBvcC5vZmZzZXQpKVxuICAgICAgICAgICAgLmpvaW4oXCJkaXZcIilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwiYmxhbmstdGV4dC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5jbGFzc2VkKFwidG9rZW5cIiwgdHJ1ZSlcbiAgICAgICAgICAgIC5zdHlsZShcImhlaWdodFwiLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IFwiICBcIilcblxuICAgICAgICAvLyBSZW5kZXIgbm9ybWFsIHRleHQgYm94IGRhdGFcbiAgICAgICAgc2VsZi50ZXh0Qm94ZXMgPSA8RDNTZWw+dGhpcy5iYXNlLnNlbGVjdEFsbChgLiR7dGhpcy5jc3NfbmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIChkLCBpKSA9PiBgdG9rZW4gJHt0aGlzLmNzc19uYW1lfSB0b2tlbi0ke2l9YClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IGAke3RoaXMuY3NzX25hbWV9LSR7aX1gKVxuICAgICAgICAgICAgLnN0eWxlKCdoZWlnaHQnLCBvcC5ib3hoZWlnaHQgKyAncHgnKVxuICAgICAgICAgICAgLnRleHQoKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC50ZXh0LnJlcGxhY2UoXCJcXHUwMTIwXCIsIFwiIFwiKS5yZXBsYWNlKFwiXFx1MDEwQVwiLCBcIlxcXFxuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAnbGlnaHRibHVlJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3Zlciwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAwKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0LCB0b3BdID0gc2VsZi5fZGl2UGxhY2VtZW50KClcblxuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCdsZWZ0JywgU3RyaW5nKGxlZnQpICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBTdHJpbmcodG9wKSArICdweCcpXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCIudG9way13b3JkLWJveFwiKVxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoZDMuemlwKGQudG9wa193b3JkcywgZC50b3BrX3Byb2JzKSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJ3AnKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NlZChcInRvcGstd29yZC1ib3hcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgLnRleHQodyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gd1swXS5yZXBsYWNlKC9cXHUwMTIwL2csIFwiIFwiKS5yZXBsYWNlKC9cXHUwMTBBL2csIFwiXFxcXG5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2IgPSB3WzFdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lICsgXCI6IFwiICsgcHJvYlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGYuYWRkQ2xpY2soc2VsZi50ZXh0Qm94ZXMpXG4gICAgfVxuXG4gICAgYWRkQ2xpY2sodGV4dGJveGVzOiBEM1NlbCl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYudGV4dEJveGVzID0gdGV4dGJveGVzXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgKGQsIGksIG4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSBkMy5zZWxlY3QobltpXSk7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkNsaWNrLCBzZWxmLmVFbWJlZGRpbmcoc2VsLCBpLCBkLmVtYmVkZGluZ3MpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignZGJsY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIHNlbGYuZUluZm8oc2VsLCBpKSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExlZnRUZXh0VG9rZW4gZXh0ZW5kcyBUZXh0VG9rZW5zIHtcblxuICAgIGNzc19uYW1lID0gJ2xlZnQtdG9rZW4nO1xuICAgIGhvdmVyX2Nzc19uYW1lID0gJ2xlZnQtdG9rZW4taG92ZXInXG4gICAgc2lkZTogdHAuU2lkZU9wdGlvbnMgPSAnbGVmdCc7XG4gICAgb2Zmc2V0OiBudW1iZXIgPSAxO1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIFJpZ2h0VGV4dFRva2VuIGV4dGVuZHMgVGV4dFRva2VucyB7XG4gICAgY3NzX25hbWUgPSAncmlnaHQtdG9rZW4nO1xuICAgIGhvdmVyX2Nzc19uYW1lID0gJ3JpZ2h0LXRva2VuLWhvdmVyJ1xuICAgIHNpZGU6IHRwLlNpZGVPcHRpb25zID0gJ3JpZ2h0J1xuICAgIG9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIF9kaXZQbGFjZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGdldEJhc2VYID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IGdldEJhc2VZID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgbW91c2UgPSBkMy5tb3VzZShzZWxmLmJhc2Uubm9kZSgpKVxuICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMywgM11cbiAgICAgICAgY29uc3QgbGVmdCA9IG1vdXNlWzBdICsgZ2V0QmFzZVgoKSArIGRpdk9mZnNldFswXVxuICAgICAgICBjb25zdCB0b3AgPSBtb3VzZVsxXSArIGdldEJhc2VZKCkgKyBkaXZPZmZzZXRbMV1cbiAgICAgICAgcmV0dXJuIFtsZWZ0LCB0b3BdXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEhlbmRyaWsgU3Ryb2JlbHQgKGhlbmRyaWsuc3Ryb2JlbHQuY29tKSBvbiAxMi8zLzE2LlxuICogTW9kaWZpZWQgYnkgQmVuIEhvb3ZlciBvbiA0LzE2LzIwMTlcbiAqL1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQge0QzU2VsLCBVdGlsfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7U2ltcGxlRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHtTVkd9IGZyb20gXCIuLi9ldGMvU1ZHcGx1c1wiO1xuXG4vKipcbiAqIFNob3VsZCBoYXZlIFZDb21wb25lbnRIVE1MIGFuZCBWQ29tcG9uZW50U1ZHXG4gKiBcbiAqIENvbW1vbiBQcm9wZXJ0aWVzOlxuICogLSBldmVudHNcbiAqIC0gZXZlbnRIYW5kbGVyIChWIGltcG9ydGFudClcbiAqIC0gb3B0aW9ucyAoTWFpbnRhaW5zIHB1YmxpYyBzdGF0ZS4gQ2FuIGV4cG9zZSB0aGVzZSB3aXRoIGdldC9zZXQgZnVuY3Rpb25zIHdpdGggYXV0byB1cGRhdGUpXG4gKiAtIF9jdXJyZW50IChNYWludGFpbnMgcHJpdmF0ZSBzdGF0ZSlcbiAqIC0gY3NzTmFtZSAoc3luY2VkIHdpdGggY29ycmVzcG9uZGluZyBDU1MgZmlsZSlcbiAqIC0gcGFyZW50IChIVE1MIGlzIGRpdiBjb250YWluaW5nIHRoZSBiYXNlLCBTVkcgaXMgU1ZHIGVsZW1lbnQpXG4gKiAtIGJhc2UgKEhUTUwgaXMgZGl2IHdpdGggY3NzX25hbWUgZXN0YWJsaXNoZWQpXG4gKiAtIF9kYXRhIChEYXRhIHVzZWQgdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbXBvbmVudClcbiAqIC0gX3JlbmRlckRhdGEgKERhdGEgbmVlZGVkIHRvIGRpc3BsYXkuIFRoaXMgbWF5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpcyBjdXJyZW50bHkgdXNlZCBpbiBoaXN0b2dyYW0pXG4gKiBcbiAqIENvbW1vbiBNZXRob2RzOlxuICogLSBjb25zdHJ1Y3RvclxuICogLSBfcmVuZGVyKCkgICAgICBDb25zaWRlciByZXBsYWNpbmcgd2l0aCBgX3VwZGF0ZURhdGEoKWAgdGhhdCB1cGRhdGVzIGFsbCBkYXRhIGF0IG9uY2VcbiAqIC0gdXBkYXRlKCkgICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHRoaXMgd2l0aCBgZGF0YSgpYCB0aGF0IGF1dG8gdXBkYXRlcyBkYXRhXG4gKiAtIHJlZHJhdygpXG4gKiAtIGRlc3Ryb3koKVxuICovXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+IHtcblxuICAgIC8vIFNUQVRJQyBGSUVMRFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGljIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYWxsIGNsYXNzIHJlbGF0ZWQgZXZlbnRzLlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiBhbmQgZXZlbnQgc3RyaW5ncyBoYXZlIHRvIGJlIHVuaXF1ZSEhXG4gICAgICovXG5cbiAgICBzdGF0aWMgZXZlbnRzOiB7fSA9IHtub0V2ZW50OiAnVkNvbXBvbmVudF9ub0V2ZW50J307XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBsYXllcnMgaW4gU1ZHICBmb3IgYmcsbWFpbixmZywuLi5cbiAgICAgKi9cbiAgICAvLyBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgbGF5b3V0OiB7IG5hbWU6IHN0cmluZywgcG9zOiBudW1iZXJbXSB9W10gPSBbe25hbWU6ICdtYWluJywgcG9zOiBbMCwgMF19XTtcblxuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nOyAvLyBNb3N0bHkgb2Jzb2xldGUsIG5pY2UgdG8gaGF2ZSBzaW1wbGUgSUQgdG8gYXNzaWduIGluIENTU1xuICAgIHByb3RlY3RlZCBwYXJlbnQ6IEQzU2VsO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICAgIHByb3RlY3RlZCBiYXNlOiBEM1NlbDsgLy8gTW9zdGx5IG9ic29sZXRlLCByZXByZXNlbnRzIDxnPiBpbiBzdmdcbiAgICBwcm90ZWN0ZWQgbGF5ZXJzOiB7IG1haW4/OiBEM1NlbCwgZmc/OiBEM1NlbCwgYmc/OiBEM1NlbCwgW2tleTogc3RyaW5nXTogRDNTZWwgfTsgLy8gU3RpbGwgdXNlZnVsXG4gICAgcHJvdGVjdGVkIGV2ZW50SGFuZGxlcjogU2ltcGxlRXZlbnRIYW5kbGVyO1xuICAgIHByb3RlY3RlZCBfdmlzaWJpbGl0eTogeyBoaWRkZW46IGJvb2xlYW4sIGhpZGVFbGVtZW50PzogRDNTZWwgfCBudWxsOyBba2V5OiBzdHJpbmddOiBhbnkgfTsgLy8gRW5hYmxlcyB0cmFuc2l0aW9ucyBmcm9tIHZpc2libGUgdG8gaW52aXNpYmxlLiBNb3N0bHkgb2Jzb2xldGUuXG4gICAgcHJvdGVjdGVkIF9kYXRhOiBEYXRhSW50ZXJmYWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJEYXRhOiBhbnk7IC8vIFVubmVjZXNzYXJ5XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNzc19uYW1lOiBzdHJpbmc7IC8vIE1ha2UgdGhlIHNhbWUgYXMgdGhlIGNvcnJlc3BvbmRpbmcgY3NzIGZpbGVcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2N1cnJlbnQ6IHt9OyAvLyBQcml2YXRlIHN0YXRlIGluZm9ybWF0aW9uIGNvbnRhaW5lZCBpbiB0aGUgb2JqZWN0IGl0c2VsZi5cblxuICAgIC8vIENPTlNUUlVDVE9SID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogU2ltcGxlIGNvbnN0cnVjdG9yLiBTdWJjbGFzc2VzIHNob3VsZCBjYWxsIEBzdXBlckluaXQob3B0aW9ucykgYXMgd2VsbC5cbiAgICAgKiBzZWUgd2h5IGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQzNTk1OTQzL3doeS1hcmUtZGVyaXZlZC1jbGFzcy1wcm9wZXJ0eS12YWx1ZXMtbm90LXNlZW4taW4tdGhlLWJhc2UtY2xhc3MtY29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIHRlbXBsYXRlOlxuICAgICBjb25zdHJ1Y3RvcihkM1BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBzdXBlcihkM1BhcmVudCwgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgLy8gLS0gYWNjZXNzIHRvIHN1YmNsYXNzIHBhcmFtczpcbiAgICAgICAgdGhpcy5zdXBlckluaXQob3B0aW9ucyk7XG4gICAgIH1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RDNTZWx9IGQzcGFyZW50ICBEMyBzZWxlY3Rpb24gb2YgcGFyZW50IFNWRyBET00gRWxlbWVudFxuICAgICAqIEBwYXJhbSB7U2ltcGxlRXZlbnRIYW5kbGVyfSBldmVudEhhbmRsZXIgYSBnbG9iYWwgZXZlbnQgaGFuZGxlciBvYmplY3Qgb3IgJ251bGwnIGZvciBsb2NhbCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaWQgPSBVdGlsLnNpbXBsZVVJZCh7fSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBkM3BhcmVudDtcblxuICAgICAgICAvLyBJZiBub3QgZnVydGhlciBzcGVjaWZpZWQgLSBjcmVhdGUgYSBsb2NhbCBldmVudCBoYW5kbGVyIGJvdW5kIHRvIHRoZSBiYXMgZWxlbWVudFxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlciB8fFxuICAgICAgICAgICAgbmV3IFNpbXBsZUV2ZW50SGFuZGxlcih0aGlzLnBhcmVudC5ub2RlKCkpO1xuXG4gICAgICAgIC8vIE9iamVjdCBmb3Igc3RvcmluZyBpbnRlcm5hbCBzdGF0ZXMgYW5kIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5ID0ge2hpZGRlbjogZmFsc2V9O1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1cGVySW5pdEhUTUwob3B0aW9uczoge30gPSB7fSkge1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XSk7XG4gICAgICAgIHRoaXMuYmFzZSA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKHRoaXMuY3NzX25hbWUsIHRydWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIHRvIGJlIGNhbGxlZCBhcyBsYXN0IGNhbGwgaW4gc3ViY2xhc3MgY29uc3RydWN0b3IuXG4gICAgICogXG4gICAgICogQHBhcmFtIHt7fX0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSBkZWZhdWx0TGF5ZXJzIC0tIGNyZWF0ZSB0aGUgZGVmYXVsdCA8Zz4gbGF5ZXJzOiBiZyAtPiBtYWluIC0+IGZnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN1cGVySW5pdFNWRyhvcHRpb25zOiB7fSA9IHt9LCBkZWZhdWx0TGF5ZXJzID0gWydiZycsICdtYWluJywgJ2ZnJ10pIHtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHQgb3B0aW9ucyBpZiBub3Qgc3BlY2lmaWVkIGluIGNvbnN0cnVjdG9yIGNhbGxcbiAgICAgICAgLy8gY29uc3QgZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRPcHRpb25zO1xuICAgICAgICAvLyB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgICAgLy8gY29uc3Qga2V5cyA9IG5ldyBTZXQoWy4uLk9iamVjdC5rZXlzKGRlZmF1bHRzKSwgLi4uT2JqZWN0LmtleXMob3B0aW9ucyldKTtcbiAgICAgICAgLy8ga2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLm9wdGlvbnNba2V5XSA9IChrZXkgaW4gb3B0aW9ucykgPyBvcHRpb25zW2tleV0gOiBkZWZhdWx0c1trZXldKTtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV0pO1xuXG4gICAgICAgIHRoaXMubGF5ZXJzID0ge307XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBiYXNlIGdyb3VwIGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuYmFzZSA9IFNWRy5ncm91cChzdmcsXG4gICAgICAgICAgICB0aGlzLmNzc19uYW1lICsgJyBJRCcgKyB0aGlzLmlkLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcyk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGRlZmF1bHQgbGF5ZXJzOiBiYWNrZ3JvdW5kLCBtYWluLCBmb3JlZ3JvdW5kXG4gICAgICAgIGlmIChkZWZhdWx0TGF5ZXJzKSB7XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gb3JkZXIgaXMgaW1wb3J0YW50ICFcbiAgICAgICAgICAgIGRlZmF1bHRMYXllcnMuZm9yRWFjaChsYXllciA9PntcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVyc1tsYXllcl0gPSBTVkcuZ3JvdXAodGhpcy5iYXNlLCBsYXllcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGJlIG92ZXJ3cml0dGVuIHRvIGNyZWF0ZSB0aGUgc3RhdGljIERPTSBlbGVtZW50c1xuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEByZXR1cm4geyp9IC0tLVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfaW5pdCgpO1xuXG4gICAgLy8gREFUQSBVUERBVEUgJiBSRU5ERVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSB0aW1lIGRhdGEgaGFzIGNoYW5nZWQsIHVwZGF0ZSBpcyBjYWxsZWQgYW5kXG4gICAgICogdHJpZ2dlcnMgd3JhbmdsaW5nIGFuZCByZS1yZW5kZXJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBkYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm4geyp9IC0tLVxuICAgICAqL1xuICAgIHVwZGF0ZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHJldHVybjtcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhID0gdGhpcy5fd3JhbmdsZShkYXRhKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGF0YSB3cmFuZ2xpbmcgbWV0aG9kIC0tIGltcGxlbWVudCBpbiBzdWJjbGFzcy4gUmV0dXJucyB0aGlzLnJlbmRlckRhdGEuXG4gICAgICogU2ltcGxlc3QgaW1wbGVtZW50YXRpb246IGByZXR1cm4gZGF0YTtgXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgZGF0YVxuICAgICAqIEByZXR1cm5zIHsqfSAtLSBkYXRhIGluIHJlbmRlciBmb3JtYXRcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX3dyYW5nbGUoZGF0YSk7XG5cblxuICAgIC8qKlxuICAgICAqIElzIHJlc3BvbnNpYmxlIGZvciBtYXBwaW5nIGRhdGEgdG8gRE9NIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbmRlckRhdGEgcHJlLXByb2Nlc3NlZCAod3JhbmdsZWQpIGRhdGFcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0tXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9yZW5kZXIocmVuZGVyRGF0YSk6IHZvaWQ7XG5cblxuICAgIC8vIFVQREFURSBPUFRJT05TID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgaW5zdGFuY2Ugb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9ubHkgdGhlIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVSZW5kZXIgaWYgb3B0aW9uIGNoYW5nZSByZXF1aXJlcyBhIHJlLXJlbmRlcmluZyAoZGVmYXVsdDpmYWxzZSlcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0tXG4gICAgICovXG4gICAgdXBkYXRlT3B0aW9ucyh7b3B0aW9ucywgcmVSZW5kZXIgPSBmYWxzZX0pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHRoaXMub3B0aW9uc1trXSA9IG9wdGlvbnNba10pO1xuICAgICAgICBpZiAocmVSZW5kZXIpIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuXG4gICAgLy8gPT09IENPTlZFTklFTkNFID09PT1cbiAgICByZWRyYXcoKXtcbiAgICAgICAgdGhpcy5fcmVuZGVyKHRoaXMucmVuZGVyRGF0YSk7XG4gICAgfVxuXG4gICAgc2V0SGlkZUVsZW1lbnQoaEU6IEQzU2VsKSB7XG4gICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgPSBoRTtcbiAgICB9XG5cbiAgICBoaWRlVmlldygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikge1xuICAgICAgICAgICAgY29uc3QgaEUgPSB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50IHx8IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgICAgICAgICAgfSkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5oaWRlVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSB7XG4gICAgICAgICAgICBjb25zdCBoRSA9IHRoaXMuX3Zpc2liaWxpdHkuaGlkZUVsZW1lbnQgfHwgdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBoRS50cmFuc2l0aW9uKCkuc3R5bGVzKHtcbiAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDEsXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogbnVsbCxcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlKHRoaXMuZGF0YSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5iYXNlLmh0bWwoJycpO1xuICAgIH1cblxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJztcbmltcG9ydCAqIGFzIHJzcCBmcm9tICcuLi9hcGkvcmVzcG9uc2VzJztcbmltcG9ydCAnLi4vZXRjL3hkMydcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2FwaS9tYWluQXBpJ1xuaW1wb3J0IHsgVUlDb25maWcgfSBmcm9tICcuLi91aUNvbmZpZydcbmltcG9ydCB7IFRleHRUb2tlbnMsIExlZnRUZXh0VG9rZW4sIFJpZ2h0VGV4dFRva2VuIH0gZnJvbSAnLi9UZXh0VG9rZW4nXG5pbXBvcnQgeyBBdHRlbnRpb25IZWFkQm94LCBnZXRBdHRlbnRpb25JbmZvIH0gZnJvbSAnLi9BdHRlbnRpb25IZWFkQm94J1xuaW1wb3J0IHsgQXR0ZW50aW9uR3JhcGggfSBmcm9tICcuL0F0dGVudGlvbkNvbm5lY3RvcidcbmltcG9ydCB7IENvcnB1c0luc3BlY3RvciB9IGZyb20gJy4vQ29ycHVzSW5zcGVjdG9yJ1xuaW1wb3J0IHsgVG9rZW5XcmFwcGVyLCBzaWRlVG9MZXR0ZXIgfSBmcm9tICcuLi9kYXRhL1Rva2VuV3JhcHBlcidcbmltcG9ydCB7IEF0dGVudGlvbldyYXBwZXIsIG1ha2VGcm9tTWV0YVJlc3BvbnNlIH0gZnJvbSAnLi4vZGF0YS9BdHRlbnRpb25DYXBzdWxlJ1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlcidcbmltcG9ydCB7IENvcnB1c01hdE1hbmFnZXIgfSBmcm9tICcuLi92aXMvQ29ycHVzTWF0TWFuYWdlcidcbmltcG9ydCB7IENvcnB1c0hpc3RvZ3JhbSB9IGZyb20gJy4uL3Zpcy9Db3JwdXNIaXN0b2dyYW0nXG5pbXBvcnQgeyBGYWlzc1NlYXJjaFJlc3VsdFdyYXBwZXIgfSBmcm9tICcuLi9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlcidcbmltcG9ydCB7IEQzU2VsLCBTZWwgfSBmcm9tICcuLi9ldGMvVXRpbCc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQsIGludGVydmFsIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcbmltcG9ydCB7IEJhc2VUeXBlIH0gZnJvbSBcImQzXCI7XG5pbXBvcnQgeyBTaW1wbGVNZXRhIH0gZnJvbSBcIi4uL2V0Yy90eXBlc1wiO1xuaW1wb3J0IENoYW5nZUV2ZW50ID0gSlF1ZXJ5LkNoYW5nZUV2ZW50O1xuXG5cbmZ1bmN0aW9uIGlzTnVsbFRva2VuKHRvazogdHAuVG9rZW5FdmVudCkge1xuICAgIGNvbnN0IGlzU29tZU51bGwgPSB4ID0+IHtcbiAgICAgICAgcmV0dXJuICh4ID09IG51bGwpIHx8ICh4ID09IFwibnVsbFwiKVxuICAgIH1cbiAgICBjb25zdCB0b2tJc051bGwgPSB0b2sgPT0gbnVsbDtcbiAgICBjb25zdCB0b2tIYXNOdWxsID0gaXNTb21lTnVsbCh0b2suc2lkZSkgfHwgaXNTb21lTnVsbCh0b2suaW5kKVxuICAgIHJldHVybiB0b2tJc051bGwgfHwgdG9rSGFzTnVsbFxufVxuXG5mdW5jdGlvbiBzaG93QnlTaWRlKGU6IHRwLlRva2VuRXZlbnQpIHtcbiAgICAvLyBDaGVjayBpZiBzYXZlZCB0b2tlbiBpbiB1aUNvbmYgaXMgbnVsbFxuICAgIGlmICghaXNOdWxsVG9rZW4oZSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NTZWxlY3RvciA9IGUuc2lkZSA9PSBcImxlZnRcIiA/IFwic3JjLWlkeFwiIDogXCJ0YXJnZXQtaWR4XCI7XG5cbiAgICAgICAgU2VsLnNldEhpZGRlbihcIi5hdG4tY3VydmVcIilcbiAgICAgICAgU2VsLnNldFZpc2libGUoYC5hdG4tY3VydmVbJHtjbGFzc1NlbGVjdG9yfT0nJHtlLmluZH0nXWApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaG9vc2VTaG93QnlTaWRlKHNhdmVkRXZlbnQ6IHRwLlRva2VuRXZlbnQsIG5ld0V2ZW50OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbFRva2VuKHNhdmVkRXZlbnQpKSB7XG4gICAgICAgIHNob3dCeVNpZGUobmV3RXZlbnQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaG9vc2VTaG93QWxsKHNhdmVkRXZlbnQ6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBpZiAoaXNOdWxsVG9rZW4oc2F2ZWRFdmVudCkpXG4gICAgICAgIFNlbC5zZXRWaXNpYmxlKFwiLmF0bi1jdXJ2ZVwiKVxufVxuXG5mdW5jdGlvbiB1bnNlbGVjdEhlYWQoaGVhZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWZmZWN0ZWRIZWFkcyA9IGQzLnNlbGVjdEFsbChgLmF0dC1yZWN0W2hlYWQ9JyR7aGVhZH0nXWApO1xuICAgIGFmZmVjdGVkSGVhZHMuY2xhc3NlZChcInVuc2VsZWN0ZWRcIiwgdHJ1ZSlcbn1cblxuZnVuY3Rpb24gc2VsZWN0SGVhZChoZWFkOiBudW1iZXIpIHtcbiAgICBjb25zdCBhZmZlY3RlZEhlYWRzID0gZDMuc2VsZWN0QWxsKGAuYXR0LXJlY3RbaGVhZD0nJHtoZWFkfSddYCk7XG4gICAgYWZmZWN0ZWRIZWFkcy5jbGFzc2VkKFwidW5zZWxlY3RlZFwiLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gc2V0U2VsRGlzYWJsZWQoYXR0cjogYm9vbGVhbiwgc2VsOiBEM1NlbCkge1xuICAgIGNvbnN0IHZhbCA9IGF0dHIgPyB0cnVlIDogbnVsbFxuICAgIHNlbC5hdHRyKCdkaXNhYmxlZCcsIHZhbClcbn1cblxuXG5leHBvcnQgY2xhc3MgTWFpbkdyYXBoaWMge1xuICAgIGFwaTogQVBJXG4gICAgdWlDb25mOiBVSUNvbmZpZ1xuICAgIGF0dENhcHN1bGU6IEF0dGVudGlvbldyYXBwZXJcbiAgICB0b2tDYXBzdWxlOiBUb2tlbldyYXBwZXJcbiAgICBzZWxzOiBhbnkgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250YWlucyBpbml0aWFsIGQzIHNlbGVjdGlvbnMgb2Ygb2JqZWN0c1xuICAgIHZpenM6IGFueSAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIHZpcyBjb21wb25lbnRzIHdyYXBwZWQgYXJvdW5kIHBhcmVudCBzZWxcbiAgICBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlciAgICAvLyBPcmNoZXN0cmF0ZXMgZXZlbnRzIHJhaXNlZCBmcm9tIGNvbXBvbmVudHNcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwaSA9IG5ldyBBUEkoKVxuICAgICAgICB0aGlzLnVpQ29uZiA9IG5ldyBVSUNvbmZpZygpXG4gICAgICAgIHRoaXMuc2tlbGV0b25Jbml0KClcbiAgICAgICAgdGhpcy5tYWluSW5pdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBjYWxsZWQgd2l0aG91dCBhbnkgaW5mb3JtYXRpb24gb2YgYSByZXNwb25zZS5cbiAgICAgKiBcbiAgICAgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgb25jZSBhbmQgb25seSBvbmNlXG4gICAgICovXG4gICAgc2tlbGV0b25Jbml0KCkge1xuICAgICAgICB0aGlzLnNlbHMgPSB7XG4gICAgICAgICAgICBib2R5OiBkMy5zZWxlY3QoJ2JvZHknKSxcbiAgICAgICAgICAgIGF0bkNvbnRhaW5lcjogZDMuc2VsZWN0KCcjYXRuLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYXRuRGlzcGxheTogZDMuc2VsZWN0KFwiI2F0bi1kaXNwbGF5XCIpLFxuICAgICAgICAgICAgbW9kZWxTZWxlY3RvcjogZDMuc2VsZWN0KFwiI21vZGVsLW9wdGlvbi1zZWxlY3RvclwiKSxcbiAgICAgICAgICAgIGNvcnB1c1NlbGVjdG9yOiBkMy5zZWxlY3QoXCIjY29ycHVzLXNlbGVjdFwiKSxcbiAgICAgICAgICAgIGF0bkhlYWRzOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogZDMuc2VsZWN0KFwiI2xlZnQtYXR0LWhlYWRzXCIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBkMy5zZWxlY3QoXCIjcmlnaHQtYXR0LWhlYWRzXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBzZW50ZW5jZUE6IGQzLnNlbGVjdChcIiNmb3JtLXNlbnRlbmNlLWFcIiksXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBkMy5zZWxlY3QoXCIjdXBkYXRlLXNlbnRlbmNlXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LXRva2Vuc1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbHNUb2dnbGU6IGQzLnNlbGVjdChcIiNjbHMtdG9nZ2xlXCIpLnNlbGVjdChcIi5zd2l0Y2hcIiksXG4gICAgICAgICAgICBsYXllckNoZWNrYm94ZXM6IGQzLnNlbGVjdChcIiNsYXllci1zZWxlY3RcIiksXG4gICAgICAgICAgICBoZWFkQ2hlY2tib3hlczogZDMuc2VsZWN0KFwiI2hlYWQtc2VsZWN0XCIpLFxuICAgICAgICAgICAgY29udGV4dFF1ZXJ5OiBkMy5zZWxlY3QoXCIjc2VhcmNoLWNvbnRleHRzXCIpLFxuICAgICAgICAgICAgZW1iZWRkaW5nUXVlcnk6IGQzLnNlbGVjdChcIiNzZWFyY2gtZW1iZWRkaW5nc1wiKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSGVhZHM6IGQzLnNlbGVjdChcIiNzZWxlY3RlZC1oZWFkc1wiKSxcbiAgICAgICAgICAgIGhlYWRTZWxlY3RBbGw6IGQzLnNlbGVjdChcIiNzZWxlY3QtYWxsLWhlYWRzXCIpLFxuICAgICAgICAgICAgaGVhZFNlbGVjdE5vbmU6IGQzLnNlbGVjdChcIiNzZWxlY3Qtbm8taGVhZHNcIiksXG4gICAgICAgICAgICB0ZXN0Q2hlY2tib3g6IGQzLnNlbGVjdChcIiNzaW1wbGUtZW1iZWQtcXVlcnlcIiksXG4gICAgICAgICAgICB0aHJlc2hTbGlkZXI6IGQzLnNlbGVjdChcIiNteS1yYW5nZVwiKSxcbiAgICAgICAgICAgIGNvcnB1c0luc3BlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zaW1pbGFyLXNlbnRlbmNlcy1kaXZcIiksXG4gICAgICAgICAgICBjb3JwdXNNYXRNYW5hZ2VyOiBkMy5zZWxlY3QoXCIjY29ycHVzLW1hdC1jb250YWluZXJcIiksXG4gICAgICAgICAgICBjb3JwdXNNc2dCb3g6IGQzLnNlbGVjdChcIiNjb3JwdXMtbXNnLWJveFwiKSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogZDMuc2VsZWN0KFwiI21hdGNoZWQtaGlzdG9ncmFtLWNvbnRhaW5lclwiKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IGQzLnNlbGVjdChcIiNtYXgtYXR0LWhpc3RvZ3JhbS1jb250YWluZXJcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICAgIGtpbGxMZWZ0OiBkMy5zZWxlY3QoXCIja2lsbC1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIGFkZExlZnQ6IGQzLnNlbGVjdChcIiNtaW51cy1sZWZ0XCIpLFxuICAgICAgICAgICAgICAgIGFkZFJpZ2h0OiBkMy5zZWxlY3QoXCIjcGx1cy1yaWdodFwiKSxcbiAgICAgICAgICAgICAgICBraWxsUmlnaHQ6IGQzLnNlbGVjdChcIiNraWxsLXJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgIHJlZnJlc2g6IGQzLnNlbGVjdChcIiNtYXQtcmVmcmVzaFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGFTZWxlY3Rvcjoge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRXb3JkOiBkMy5zZWxlY3QoXCIjbWF0Y2hlZC1tZXRhLXNlbGVjdFwiKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IGQzLnNlbGVjdChcIiNtYXgtYXR0LW1ldGEtc2VsZWN0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IG5ldyBTaW1wbGVFdmVudEhhbmRsZXIoPEVsZW1lbnQ+dGhpcy5zZWxzLmJvZHkubm9kZSgpKTtcblxuICAgICAgICB0aGlzLnZpenMgPSB7XG4gICAgICAgICAgICBsZWZ0SGVhZHM6IG5ldyBBdHRlbnRpb25IZWFkQm94KHRoaXMuc2Vscy5hdG5IZWFkcy5sZWZ0LCB0aGlzLmV2ZW50SGFuZGxlciwgeyBzaWRlOiBcImxlZnRcIiwgfSksXG4gICAgICAgICAgICByaWdodEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IHNpZGU6IFwicmlnaHRcIiB9KSxcbiAgICAgICAgICAgIHRva2Vuczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IG5ldyBMZWZ0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBuZXcgUmlnaHRUZXh0VG9rZW4odGhpcy5zZWxzLnRva2Vucy5yaWdodCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGVudGlvblN2ZzogbmV3IEF0dGVudGlvbkdyYXBoKHRoaXMuc2Vscy5hdG5EaXNwbGF5LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBjb3JwdXNJbnNwZWN0b3I6IG5ldyBDb3JwdXNJbnNwZWN0b3IodGhpcy5zZWxzLmNvcnB1c0luc3BlY3RvciwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgY29ycHVzTWF0TWFuYWdlcjogbmV3IENvcnB1c01hdE1hbmFnZXIodGhpcy5zZWxzLmNvcnB1c01hdE1hbmFnZXIsIHRoaXMuZXZlbnRIYW5kbGVyLCB7IGlkeHM6IHRoaXMudWlDb25mLm9mZnNldElkeHMoKSB9KSxcbiAgICAgICAgICAgIGhpc3RvZ3JhbXM6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZCwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgICAgIG1heEF0dDogbmV3IENvcnB1c0hpc3RvZ3JhbSh0aGlzLnNlbHMuaGlzdG9ncmFtcy5tYXhBdHQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9iaW5kRXZlbnRIYW5kbGVyKClcbiAgICB9XG5cbiAgICBwcml2YXRlIG1haW5Jbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICB0aGlzLmFwaS5nZXRNb2RlbERldGFpbHModGhpcy51aUNvbmYubW9kZWwoKSkudGhlbihtZCA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBtZC5wYXlsb2FkXG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5uTGF5ZXJzKHZhbC5ubGF5ZXJzKS5uSGVhZHModmFsLm5oZWFkcylcbiAgICAgICAgICAgIHRoaXMuaW5pdExheWVycyh0aGlzLnVpQ29uZi5uTGF5ZXJzKCkpXG5cbiAgICAgICAgICAgIHRoaXMuYXBpLmdldE1ldGFBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oYXR0ZW50aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSBhdHRlbnRpb24ucGF5bG9hZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGcm9tUmVzcG9uc2UoYXR0KVxuXG4gICAgICAgICAgICAgICAgLy8gV3JhcCBwb3N0SW5pdCBpbnRvIGZ1bmN0aW9uIHNvIGFzeW5jaHJvbm91cyBjYWxsIGRvZXMgbm90IG1lc3Mgd2l0aCBuZWNlc3NhcnkgaW5pdHNcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlVG9rZW5TZWwoKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRGlzcGxheSA9IHRoaXMudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvRGlzcGxheSA9PSAnY29udGV4dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3F1ZXJ5Q29udGV4dCgpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9EaXNwbGF5ID09ICdlbWJlZGRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlFbWJlZGRpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25Tdmcubm9ybUJ5ID0gdGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlID8gdHAuTm9ybUJ5LkNvbCA6IHRwLk5vcm1CeS5BbGxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51aUNvbmYubWFza0luZHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzID0gdGhpcy51aUNvbmYubWFza0luZHMoKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy50b2tDYXBzdWxlLmEsIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS51cGRhdGVUb2tlbnMocilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBvbmx5IDEgbWFzayBpbmQgaXMgcHJlc2VudCBmb3IgYXV0b3JlZ3Jlc3NpdmUgbW9kZWxzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oYXNUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXlUb2dnbGUoPG51bWJlcj50aGlzLnVpQ29uZi50b2tlbigpLmluZClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5kaXZIb3Zlci50ZXh0SW5mbyA9IFwiV291bGQgcHJlZGljdCBuZXh0Li4uXCJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5yaWdodC5vcHRpb25zLmRpdkhvdmVyLnRleHRJbmZvID0gXCJXb3VsZCBwcmVkaWN0IG5leHQuLi5cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLnRva2Vucy5sZWZ0Lm9wdGlvbnMuZGl2SG92ZXIudGV4dEluZm8gPSBcIldvdWxkIHByZWRpY3QgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy50b2tlbnMucmlnaHQub3B0aW9ucy5kaXZIb3Zlci50ZXh0SW5mbyA9IFwiV291bGQgcHJlZGljdCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RnJvbVJlc3BvbnNlKGF0dGVudGlvbjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5hdHRDYXBzdWxlID0gbWFrZUZyb21NZXRhUmVzcG9uc2UoYXR0ZW50aW9uLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpXG4gICAgICAgIHRoaXMudG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIoYXR0ZW50aW9uKTtcbiAgICAgICAgdGhpcy5fc3RhdGljSW5pdHMoKVxuICAgIH1cblxuICAgIHByaXZhdGUgbGVhdmVDb3JwdXNNc2cobXNnOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c0luc3BlY3Rvci5oaWRlVmlldygpXG4gICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmhpZGVWaWV3KClcbiAgICAgICAgY29uc29sZS5sb2coXCJSdW5uaW5nIGxlYXZlIG1zZ1wiKTtcbiAgICAgICAgU2VsLnVuaGlkZUVsZW1lbnQodGhpcy5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgdGhpcy5zZWxzLmNvcnB1c01zZ0JveC50ZXh0KG1zZylcbiAgICB9XG5cbiAgICBwcml2YXRlIF9iaW5kRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbkRibENsaWNrLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChzZWxmLnVpQ29uZi5tb2RlbEtpbmQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zZWwuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiLCAhZS5zZWwuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldHRlciA9IHNpZGVUb0xldHRlcihlLnNpZGUsIHRoaXMudWlDb25mLmF0dFR5cGUpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9rQ2Fwc3VsZVtsZXR0ZXJdLnRvZ2dsZShlLmluZClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy50b2tDYXBzdWxlLmEsIHRoaXMudWlDb25mLnNlbnRlbmNlKCksIHRoaXMudWlDb25mLmxheWVyKCkpLnRoZW4oKHJlc3A6IHJzcC5BdHRlbnRpb25EZXRhaWxzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dENhcHN1bGUudXBkYXRlRnJvbU5vcm1hbChyLCB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZVRva2VucyhyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHModGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b3JlZ3Jlc3NpdmUgbW9kZWwgZG9lc24ndCBkbyBtYXNraW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldoYXQga2luZCBvZiBtb2RlbCBpcyB0aGlzP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU92ZXIsIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjaG9vc2VTaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCksIGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3V0LCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0FsbCh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5DbGljaywgKGU6IHRwLlRva2VuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlDb25mLnRvZ2dsZVRva2VuKGUpXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG4gICAgICAgICAgICBzaG93QnlTaWRlKGUpXG4gICAgICAgICAgICBpZiAodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ncmF5VG9nZ2xlKCtlLmluZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdmVyLCAoZTogdHAuSGVhZEJveEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBzcGVjaWFsIG9uIHJvdyBtb3VzZSBvdmVyXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU91dCwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3V0XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU92ZXIsIChlOiB0cC5IZWFkQm94RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZU1hdCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKHVwZGF0ZU1hdClcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcudXBkYXRlKHVwZGF0ZU1hdClcblxuICAgICAgICAgICAgc2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdXQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWRzKHRoaXMudWlDb25mLmhlYWRzKCkpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLmRhdGEoYXR0KVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy51cGRhdGUoYXR0KVxuICAgICAgICAgICAgc2hvd0J5U2lkZSh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94Q2xpY2ssIChlOiB7IGhlYWQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy51aUNvbmYudG9nZ2xlSGVhZChlLmhlYWQpXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuQURERUQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IHRwLlRvZ2dsZWQuUkVNT1ZFRCkge1xuICAgICAgICAgICAgICAgIHVuc2VsZWN0SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdmVyLCAoZTogeyB2YWw6IFwicG9zXCIgfCBcImRlcFwiIHwgXCJpc19lbnRcIiwgb2Zmc2V0OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBiZWxvdyBpZiB5b3Ugd2FudCB0byBtb2RpZnkgdGhlIHdob2xlIGNvbHVtblxuICAgICAgICAgICAgLy8gY29uc3Qgc2VsZWN0b3IgPSBgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWBcbiAgICAgICAgICAgIC8vIGQzLnNlbGVjdEFsbChzZWxlY3RvcikuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIHRydWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU91dCwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCB0aGUgYmVsb3cgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IHRoZSB3aG9sZSBjb2x1bW5cbiAgICAgICAgICAgIC8vIGNvbnN0IHNlbGVjdG9yID0gYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoc2VsZWN0b3IpLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCBmYWxzZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU92ZXIsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkMy5zZWxlY3QoYC5pbnNwZWN0b3Itcm93W3Jvd251bT0nJHtlLmlkeH0nXWApXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gcm93LnNlbGVjdChgLmluc3BlY3Rvci1jZWxsW2luZGV4LW9mZnNldD0nJHtlLm9mZnNldH0nXWApXG4gICAgICAgICAgICB3b3JkLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCB0cnVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3V0LCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZDMuc2VsZWN0KGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7ZS5pZHh9J11gKVxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IHJvdy5zZWxlY3QoYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gKVxuICAgICAgICAgICAgd29yZC5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF90b2dnbGVUb2tlblNlbCgpIHtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMudWlDb25mLnRva2VuKClcbiAgICAgICAgY29uc3QgYWxyZWFkeVNlbGVjdGVkID0gZDMuc2VsZWN0KCcuc2VsZWN0ZWQtdG9rZW4nKVxuXG4gICAgICAgIC8vIElmIG5vIHRva2VuIHNob3VsZCBiZSBzZWxlY3RlZCwgdW5zZWxlY3QgYWxsIHRva2Vuc1xuICAgICAgICBpZiAoIXRoaXMudWlDb25mLmhhc1Rva2VuKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbDogZDMuU2VsZWN0aW9uPEJhc2VUeXBlLCBhbnksIEJhc2VUeXBlLCBhbnk+ID0gZDMuc2VsZWN0QWxsKCcuc2VsZWN0ZWQtdG9rZW4nKVxuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UsIHNlbGVjdCB0aGUgaW5kaWNhdGVkIHRva2VuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4yU3RyaW5nID0gKGU6IHRwLlRva2VuRXZlbnQpID0+IGAjJHtlLnNpZGV9LXRva2VuLSR7ZS5pbmR9YFxuICAgICAgICAgICAgY29uc3QgbmV3U2VsID0gZDMuc2VsZWN0KHRva2VuMlN0cmluZyhlKSlcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc2VsZWN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKCFuZXdTZWwuZW1wdHkoKSkgbmV3U2VsLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyB0b2tlbiBzZWxlY3Rpb24sIGlmIGFueVxuICAgICAgICBpZiAoIWFscmVhZHlTZWxlY3RlZC5lbXB0eSgpKSB7XG4gICAgICAgICAgICBhbHJlYWR5U2VsZWN0ZWQuY2xhc3NlZCgnc2VsZWN0ZWQtdG9rZW4nLCBmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXlUb2dnbGUoK2UuaW5kKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VhcmNoRGlzYWJsZXIoKVxuICAgIH1cblxuICAgIC8qKiBHcmF5IGFsbCB0b2tlbnMgdGhhdCBoYXZlIGluZGV4IGdyZWF0ZXIgdGhhbiBpbmQgKi9cbiAgICBwcml2YXRlIGdyYXlCYWRUb2tzKGluZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnVpQ29uZi5tb2RlbEtpbmQoKSA9PSB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyYXlUb2tzID0gZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgcy5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsIGkgPiBpbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy5yaWdodC10b2tlbicpLmVhY2goZ3JheVRva3MpXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy5sZWZ0LXRva2VuJykuZWFjaChncmF5VG9rcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ3JheVRvZ2dsZShpbmQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSlcbiAgICAgICAgICAgIHRoaXMuZ3JheUJhZFRva3MoaW5kKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoJy50b2tlbicpLmNsYXNzZWQoJ21hc2tlZC10b2tlbicsIGZhbHNlKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1vZGVsU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIC8vIEJlbG93IGFyZSB0aGUgYXZhaWxhYmxlIG1vZGVscy4gV2lsbCBuZWVkIHRvIGNob29zZSAzIHRvIGJlIGF2YWlsYWJsZSBPTkxZXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLWNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6IFwiYmVydC1iYXNlLXVuY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIC8vIHsgbmFtZTogXCJkaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZFwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgLy8geyBuYW1lOiBcImRpc3RpbHJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImdwdDJcIiwga2luZDogdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlIH0sXG4gICAgICAgICAgICAvLyB7IG5hbWU6IFwiZ3B0Mi1tZWRpdW1cIiwga2luZDogdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGlzdGlsZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIGNvbnN0IG5hbWVzID0gUi5tYXAoUi5wcm9wKCduYW1lJykpKGRhdGEpXG4gICAgICAgIGNvbnN0IGtpbmRzID0gUi5tYXAoUi5wcm9wKCdraW5kJykpKGRhdGEpXG4gICAgICAgIGNvbnN0IGtpbmRtYXAgPSBSLnppcE9iaihuYW1lcywga2luZHMpXG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3Iuc2VsZWN0QWxsKCcubW9kZWwtb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtb2RlbC1vcHRpb24nLCB0cnVlKVxuICAgICAgICAgICAgLnByb3BlcnR5KCd2YWx1ZScsIGQgPT4gZC5uYW1lKVxuICAgICAgICAgICAgLmF0dHIoXCJtb2RlbGtpbmRcIiwgZCA9PiBkLmtpbmQpXG4gICAgICAgICAgICAudGV4dChkID0+IGQubmFtZSlcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCB0aGlzLnVpQ29uZi5tb2RlbCgpKTtcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIGNvbnN0IG1uYW1lID0gbWUucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsKG1uYW1lKTtcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsS2luZChraW5kbWFwW21uYW1lXSk7XG4gICAgICAgICAgICBpZiAoa2luZG1hcFttbmFtZV0gPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSRVNFVFRJTkcgTUFTSyBJTkRTXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKFtdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5tYWluSW5pdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRDb3JwdXNTZWxlY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IGNvZGU6IFwid296XCIsIGRpc3BsYXk6IFwiV2l6YXJkIG9mIE96XCIgfSxcbiAgICAgICAgICAgIHsgY29kZTogXCJ3aWtpXCIsIGRpc3BsYXk6IFwiV2lraXBlZGlhXCIgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuc2Vscy5jb3JwdXNTZWxlY3Rvci5zZWxlY3RBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgICAgLmpvaW4oJ29wdGlvbicpXG4gICAgICAgICAgICAucHJvcGVydHkoJ3ZhbHVlJywgZCA9PiBkLmNvZGUpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGlzcGxheSlcblxuICAgICAgICB0aGlzLnNlbHMuY29ycHVzU2VsZWN0b3Iub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5jb3JwdXMobWUucHJvcGVydHkoJ3ZhbHVlJykpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmLnVpQ29uZi5jb3JwdXMoKSk7XG4gICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXRpY0luaXRzKCkge1xuICAgICAgICB0aGlzLl9pbml0U2VudGVuY2VGb3JtKCk7XG4gICAgICAgIHRoaXMuX2luaXRNb2RlbFNlbGVjdGlvbigpO1xuICAgICAgICB0aGlzLl9pbml0Q29ycHVzU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRRdWVyeUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdEFkZGVyKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG4gICAgICAgIHRoaXMuX2luaXRNZXRhU2VsZWN0b3JzKCk7XG4gICAgICAgIHRoaXMuX2luaXRUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdEFkZGVyKCkge1xuICAgICAgICBjb25zdCB1cGRhdGVVcmxPZmZzZXRJZHhzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aUNvbmYub2Zmc2V0SWR4cyh0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5pZHhzKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZml4Q29ycHVzTWF0SGVpZ2h0cyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1dyYXBwZWQgPSB0aGlzLl93cmFwUmVzdWx0cyh0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5kYXRhKCkpXG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5kYXRhKG5ld1dyYXBwZWQuZGF0YSlcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMuYWRkUmlnaHQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuYWRkUmlnaHQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMuYWRkTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRMZWZ0KClcbiAgICAgICAgICAgIHVwZGF0ZVVybE9mZnNldElkeHMoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5idXR0b25zLmtpbGxSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsUmlnaHQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbExlZnQub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIua2lsbExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMucmVmcmVzaC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmaXhDb3JwdXNNYXRIZWlnaHRzKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgb25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxzLmNvcnB1c0luc3BlY3Rvci50ZXh0KCkgIT0gJycpIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG9ucmVzaXplXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1ldGFTZWxlY3RvcnMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRNYXRjaGVkV29yZFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF0Y2hlZFdvcmQpXG4gICAgICAgIHRoaXMuX2luaXRNYXhBdHRTZWxlY3Rvcih0aGlzLnNlbHMubWV0YVNlbGVjdG9yLm1heEF0dClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF4QXR0U2VsZWN0b3Ioc2VsOiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjaG9vc2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXMgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgICAgICBtcy5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbChgbGFiZWxbdmFsdWU9JHt2YWx1ZX1dYClcbiAgICAgICAgICAgIGVsLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBjaG9vc2VTZWxlY3RlZCh0aGlzLnVpQ29uZi5tZXRhTWF4KCkpXG5cbiAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgIGVsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IDxTaW1wbGVNZXRhPmQzLnNlbGVjdCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1heCh2YWwpXG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YSh2YWwpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1hdGNoZWRXb3JkU2VsZWN0b3Ioc2VsOiBEM1NlbCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBjb25zdCBjaG9vc2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXMgPSBzZWwuc2VsZWN0QWxsKCdsYWJlbCcpXG4gICAgICAgICAgICBtcy5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbChgbGFiZWxbdmFsdWU9JHt2YWx1ZX1dYClcbiAgICAgICAgICAgIGVsLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBjaG9vc2VTZWxlY3RlZCh0aGlzLnVpQ29uZi5tZXRhTWF0Y2goKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJylcblxuICAgICAgICAgICAgLy8gRG8gdG9nZ2xlXG4gICAgICAgICAgICBzZWwuc2VsZWN0QWxsKCcuYWN0aXZlJykuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpXG4gICAgICAgICAgICBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1ldGFNYXRjaCh2YWwpXG4gICAgICAgICAgICBzZWxmLl91cGRhdGVDb3JwdXNJbnNwZWN0b3JGcm9tTWV0YSh2YWwpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzYWJsZVNlYXJjaGluZyhhdHRyOiBib29sZWFuKSB7XG4gICAgICAgIHNldFNlbERpc2FibGVkKGF0dHIsIHRoaXMuc2Vscy5jb250ZXh0UXVlcnkpXG4gICAgICAgIHNldFNlbERpc2FibGVkKGF0dHIsIHRoaXMuc2Vscy5lbWJlZGRpbmdRdWVyeSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVDb3JwdXNJbnNwZWN0b3JGcm9tTWV0YSh2YWw6IHRwLlNpbXBsZU1ldGEpIHtcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIucGljayh2YWwpXG4gICAgICAgIHRoaXMudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLm1ldGEodmFsKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRTZW50ZW5jZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQS5hdHRyKCdwbGFjZWhvbGRlcicsIFwiRW50ZXIgbmV3IHNlbnRlbmNlIHRvIGFuYWx5emVcIilcbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3ZhbHVlJywgdGhpcy51aUNvbmYuc2VudGVuY2UoKSlcblxuICAgICAgICBjb25zdCBjbGVhckluc3BlY3RvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC5jbGVhcigpO1xuICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJtaXROZXdTZW50ZW5jZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgYWxsIG9jY3VyZW5jZXMgb2YgJyMnIGluIHNlbnRlbmNlIGFzIHRoaXMgY2F1c2VzIHRoZSBBUEkgdG8gYnJlYWtcbiAgICAgICAgICAgIGNvbnN0IHNlbnRlbmNlX2E6IHN0cmluZyA9IHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQS5wcm9wZXJ0eShcInZhbHVlXCIpLnJlcGxhY2UoL1xcIy9nLCAnJylcblxuICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgaWYgdGhlIGZvcm0gaXMgZmlsbGVkIGNvcnJlY3RseVxuICAgICAgICAgICAgaWYgKHNlbnRlbmNlX2EubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICAgICAgICAgIHRoaXMuYXBpLmdldE1ldGFBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHNlbnRlbmNlX2EsIHRoaXMudWlDb25mLmxheWVyKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwOiByc3AuQXR0ZW50aW9uRGV0YWlsc1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcmVzcC5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5zZW50ZW5jZShzZW50ZW5jZV9hKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbmYucm1Ub2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS51cGRhdGVGcm9tUmVzcG9uc2Uocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW5zcGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXIgPSBSLmN1cnJ5KChrZXlDb2RlLCBmLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgIT09IGtleUNvZGUpIHJldHVybjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbkVudGVyU3VibWl0ID0gb25FbnRlcigxMywgc3VibWl0TmV3U2VudGVuY2UpXG5cbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5zZWxzLmZvcm0uYnV0dG9uO1xuICAgICAgICBjb25zdCBpbnB1dEJveCA9IHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQTtcblxuICAgICAgICBidG4ub24oXCJjbGlja1wiLCBzdWJtaXROZXdTZW50ZW5jZSlcbiAgICAgICAgaW5wdXRCb3gub24oJ2tleXByZXNzJywgb25FbnRlclN1Ym1pdClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTZWFyY2hFbWJlZHMoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmVtYmVkZGluZ3NcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzYXZlZFRva2VuID0gdGhpcy51aUNvbmYudG9rZW4oKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gdGhpcy52aXpzLnRva2Vuc1tzYXZlZFRva2VuLnNpZGVdLmdldEVtYmVkZGluZyhzYXZlZFRva2VuLmluZClcbiAgICAgICAgcmV0dXJuIG91dC5jb250ZXh0c1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaEVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNFQVJDSElORyBFTUJFRERJTkdTXCIpO1xuICAgICAgICBjb25zdCBlbWJlZCA9IHRoaXMuX2dldFNlYXJjaEVtYmVkcygpXG4gICAgICAgIGNvbnN0IGxheWVyID0gc2VsZi51aUNvbmYubGF5ZXIoKVxuICAgICAgICBjb25zdCBoZWFkcyA9IHNlbGYudWlDb25mLmhlYWRzKClcbiAgICAgICAgY29uc3QgayA9IDUwXG5cbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICBzZWxmLmFwaS5nZXROZWFyZXN0RW1iZWRkaW5ncyhzZWxmLnVpQ29uZi5tb2RlbCgpLCBzZWxmLnVpQ29uZi5jb3JwdXMoKSwgZW1iZWQsIGxheWVyLCBoZWFkcywgaylcbiAgICAgICAgICAgIC50aGVuKCh2YWw6IHJzcC5OZWFyZXN0TmVpZ2hib3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWwuc3RhdHVzID09IDQwNikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxlYXZlQ29ycHVzTXNnKGBFbWJlZGRpbmdzIGFyZSBub3QgYXZhaWxhYmxlIGZvciBtb2RlbCAnJHtzZWxmLnVpQ29uZi5tb2RlbCgpfScgYW5kIGNvcnB1cyAnJHtzZWxmLnVpQ29uZi5jb3JwdXMoKX0nIGF0IHRoaXMgdGltZS5gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHZhbC5wYXlsb2FkXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51bmhpZGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudW5oaWRlVmlldygpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodHMgb2YgY29ycHVzIGluc3BlY3RvciByb3dzLlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzSW5zcGVjdG9yLnVwZGF0ZSh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVkVmFscyA9IHNlbGYuX3dyYXBSZXN1bHRzKHYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ZWRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF0Y2hlZEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXhBdHRIaXN0b2dyYW0oKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLnVwZGF0ZSh3cmFwcGVkVmFscy5kYXRhKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXRjaGVkV29yZC51cGRhdGUoY291bnRlZFZhbHMpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC51cGRhdGUob2Zmc2V0VmFscylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignZW1iZWRkaW5ncycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoQ29udGV4dCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0VBUkNISU5HIENPTlRFWFRTXCIpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5fZ2V0U2VhcmNoQ29udGV4dCgpXG4gICAgICAgIGNvbnN0IGxheWVyID0gc2VsZi51aUNvbmYubGF5ZXIoKVxuICAgICAgICBjb25zdCBoZWFkcyA9IHNlbGYudWlDb25mLmhlYWRzKClcbiAgICAgICAgY29uc3QgayA9IDUwXG5cbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuXG4gICAgICAgIHNlbGYuYXBpLmdldE5lYXJlc3RDb250ZXh0cyhzZWxmLnVpQ29uZi5tb2RlbCgpLCBzZWxmLnVpQ29uZi5jb3JwdXMoKSwgY29udGV4dCwgbGF5ZXIsIGhlYWRzLCBrKVxuICAgICAgICAgICAgLnRoZW4oKHZhbDogcnNwLk5lYXJlc3ROZWlnaGJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodHMgb2YgY29ycHVzIGluc3BlY3RvciByb3dzLlxuICAgICAgICAgICAgICAgIGlmICh2YWwuc3RhdHVzID09IDQwNikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRleHRzIGFyZSBub3QgYXZhaWxhYmxlIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZWF2ZUNvcnB1c01zZyhgQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUgZm9yIG1vZGVsICcke3NlbGYudWlDb25mLm1vZGVsKCl9JyBhbmQgY29ycHVzICcke3NlbGYudWlDb25mLmNvcnB1cygpfScgYXQgdGhpcyB0aW1lLmApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdmFsLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSElESU5HXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudXBkYXRlKHYpXG5cbiAgICAgICAgICAgICAgICAgICAgU2VsLmhpZGVFbGVtZW50KHNlbGYuc2Vscy5jb3JwdXNNc2dCb3gpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudW5oaWRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLnVuaGlkZVZpZXcoKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRWYWxzID0gc2VsZi5fd3JhcFJlc3VsdHModilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRlZFZhbHMgPSB3cmFwcGVkVmFscy5nZXRNYXRjaGVkSGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VmFscyA9IHdyYXBwZWRWYWxzLmdldE1heEF0dEhpc3RvZ3JhbSgpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLnVwZGF0ZSh3cmFwcGVkVmFscy5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLnVwZGF0ZShjb3VudGVkVmFscylcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0LnVwZGF0ZShvZmZzZXRWYWxzKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoJ2NvbnRleHQnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3JwdXNJbnNwZWN0b3JGcm9tTWV0YSh0aGlzLnVpQ29uZi5tZXRhTWF0Y2goKSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF4QXR0Lm1ldGEoc2VsZi51aUNvbmYubWV0YU1heCgpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnlDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgdGhpcy5fc2VhcmNoQ29udGV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYXMgdG9sZCB0byBzaG93IGluc3BlY3RvciBidXQgd2FzIG5vdCBnaXZlbiBhIHNlbGVjdGVkIHRva2VuIGVtYmVkZGluZ1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnlFbWJlZGRpbmdzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy51aUNvbmYuaGFzVG9rZW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbjogXCIsIHRoaXMudWlDb25mLnRva2VuKCkpO1xuICAgICAgICAgICAgdGhpcy5fc2VhcmNoRW1iZWRkaW5ncygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYXMgdG9sZCB0byBzaG93IGluc3BlY3RvciBidXQgd2FzIG5vdCBnaXZlbiBhIHNlbGVjdGVkIHRva2VuIGVtYmVkZGluZ1wiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2VhcmNoaW5nRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy51aUNvbmYuaGVhZHMoKS5sZW5ndGggPT0gMCkgfHwgKCF0aGlzLnVpQ29uZi5oYXNUb2tlbigpKVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaERpc2FibGVyKCkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlU2VhcmNoaW5nKHRoaXMuX3NlYXJjaGluZ0Rpc2FibGVkKCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFF1ZXJ5Rm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICB0aGlzLnNlbHMuY29udGV4dFF1ZXJ5Lm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fcXVlcnlDb250ZXh0KClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuZW1iZWRkaW5nUXVlcnkub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9xdWVyeUVtYmVkZGluZ3MoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbmRlckhlYWRTdW1tYXJ5KCkge1xuICAgICAgICB0aGlzLnNlbHMuc2VsZWN0ZWRIZWFkc1xuICAgICAgICAgICAgLmh0bWwoUi5qb2luKCcsICcsIHRoaXMudWlDb25mLmhlYWRzKCkubWFwKGggPT4gaCArIDEpKSlcbiAgICB9XG5cbiAgICAvLyBNb2RpZnkgZmFpc3MgcmVzdWx0cyB3aXRoIGNvcnJlc3BvbmRpbmcgaGVpZ2h0c1xuICAgIHByaXZhdGUgX3dyYXBSZXN1bHRzKHJldHVybmVkRmFpc3NSZXN1bHRzOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuXG4gICAgICAgIGNvbnN0IHJvd3MgPSBkMy5zZWxlY3RBbGwoJy5pbnNwZWN0b3Itcm93JylcblxuICAgICAgICAvLyBEb24ndCBqdXN0IHVzZSBvZmZzZXRIZWlnaHQgc2luY2UgdGhhdCByb3VuZHMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAgICAgICBjb25zdCBoZWlnaHRzID0gcm93cy5ub2RlcygpLm1hcCgobjogSFRNTEVsZW1lbnQpID0+IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KVxuXG4gICAgICAgIGNvbnN0IG5ld1ZhbHMgPSByZXR1cm5lZEZhaXNzUmVzdWx0cy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBSLmFzc29jKCdoZWlnaHQnLCBoZWlnaHRzW2ldLCB2KVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3cmFwcGVkVmFscyA9IG5ldyBGYWlzc1NlYXJjaFJlc3VsdFdyYXBwZXIobmV3VmFscylcblxuICAgICAgICByZXR1cm4gd3JhcHBlZFZhbHNcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRMYXllcnMobkxheWVyczogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgaGFzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHNlbGYuc2Vscy5sYXllckNoZWNrYm94ZXMuc2VsZWN0QWxsKFwiLmxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5kYXRhKF8ucmFuZ2UoMCwgbkxheWVycykpXG4gICAgICAgICAgICAuam9pbihcImxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnRuIGJ1dHRvbiBsYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdG8gbGFyZ2VzdCBsYXllciBhdmFpbGFibGUgaWYgdWlDb25mLmxheWVyKCkgPiBuZXcgbkxheWVyc1xuICAgICAgICAgICAgICAgIGlmIChkID09IHNlbGYudWlDb25mLmxheWVyKCkgLSAxKSB7IC8vIEphdmFzY3JpcHQgaXMgMCBpbmRleGVkIVxuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzQWN0aXZlICYmIGQgPT0gbkxheWVycykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcihkKVxuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4gZCArIDEpXG4gICAgICAgICAgICAuYXBwZW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcInJhZGlvXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hlY2tib3gtaW5saW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIm5hbWVcIiwgXCJsYXllcmJveFwiKVxuICAgICAgICAgICAgLy8gLmF0dHIoXCJoZWFkXCIsIGQgPT4gZClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IFwibGF5ZXJDaGVja2JveFwiICsgaSlcbiAgICAgICAgLy8gLnRleHQoKGQsIGkpID0+IGQgKyBcIiBcIilcblxuICAgICAgICBmcm9tRXZlbnQoY2hlY2tib3hlcy5ub2RlcygpLCAnY2hhbmdlJykucGlwZShcbiAgICAgICAgICAgIHRhcCgoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBteURhdGEgPSBkMy5zZWxlY3QoPEJhc2VUeXBlPmUudGFyZ2V0KS5kYXR1bSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15RGF0YSwgXCItLS0gbXlEYXRhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5sYXllckNoZWNrYm94ZXMuc2VsZWN0QWxsKFwiLmxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIGQgPT4gZCA9PT0gbXlEYXRhKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKHY6IEV2ZW50KSA9PiArZDMuc2VsZWN0KDxCYXNlVHlwZT52LnRhcmdldCkuZGF0dW0oKSksXG4gICAgICAgICAgICB0YXAodiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgbGF5ZXI6IFwiLCB2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcih2KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHYpID0+IGZyb20oc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhzZWxmLnVpQ29uZi5tb2RlbCgpLCBzZWxmLnRva0NhcHN1bGUuYSwgc2VsZi51aUNvbmYuc2VudGVuY2UoKSwgdikpKVxuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocmVzcDogcnNwLkF0dGVudGlvbkRldGFpbHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSByZXNwLnBheWxvYWQ7XG4gICAgICAgICAgICAgICAgc2VsZi5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGUudXBkYXRlVG9rZW5zKHIpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLm1hc2tJbmRzKHNlbGYudG9rQ2Fwc3VsZS5hLm1hc2tJbmRzKVxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgc2VsZi5fdG9nZ2xlVG9rZW5TZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllcklkID0gYCNsYXllckNoZWNrYm94JHt0aGlzLnVpQ29uZi5sYXllcigpfWBcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXllciBJRDogXCIsIGxheWVySWQpO1xuICAgICAgICBkMy5zZWxlY3QobGF5ZXJJZCkuYXR0cihcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIpXG5cbiAgICAgICAgLy8gSW5pdCB0aHJlc2hvbGQgc3R1ZmZcbiAgICAgICAgY29uc3QgZGlzcFRocmVzaCA9ICh0aHJlc2gpID0+IE1hdGgucm91bmQodGhyZXNoICogMTAwKVxuICAgICAgICBkMy5zZWxlY3QoJyNteS1yYW5nZS12YWx1ZScpLnRleHQoZGlzcFRocmVzaChzZWxmLnVpQ29uZi50aHJlc2hvbGQoKSkpXG5cbiAgICAgICAgdGhpcy5zZWxzLnRocmVzaFNsaWRlci5vbihcImlucHV0XCIsIF8udGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXM7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi50aHJlc2hvbGQoK25vZGUudmFsdWUgLyAxMDApO1xuICAgICAgICAgICAgZDMuc2VsZWN0KCcjbXktcmFuZ2UtdmFsdWUnKS50ZXh0KGRpc3BUaHJlc2goc2VsZi51aUNvbmYudGhyZXNob2xkKCkpKVxuICAgICAgICAgICAgc2VsZi52aXpzLmF0dGVudGlvblN2Zy50aHJlc2hvbGQoc2VsZi51aUNvbmYudGhyZXNob2xkKCkpXG4gICAgICAgIH0sIDEwMCkpXG5cbiAgICAgICAgdGhpcy5zZWxzLmhlYWRTZWxlY3RBbGwub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3RBbGxIZWFkcygpO1xuICAgICAgICAgICAgc2VsZi5fc2VhcmNoRGlzYWJsZXIoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuaGVhZFNlbGVjdE5vbmUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5zZWxlY3ROb0hlYWRzKCk7XG4gICAgICAgICAgICBzZWxmLl9zZWFyY2hEaXNhYmxlcigpO1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJTdmcoKVxuICAgICAgICAgICAgc2VsZi5yZW5kZXJBdHRIZWFkKClcbiAgICAgICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBfaW5pdFRvZ2dsZSgpIHtcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuc2Vscy5jbHNUb2dnbGUubm9kZSgpLCAnaW5wdXQnKS5waXBlKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtLSBUT0RPOiBGSVggIVxuICAgICAgICAgICAgbWFwKGUgPT4gZS5zcmNFbGVtZW50LmNoZWNrZWQpLFxuICAgICAgICApLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB2ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5oaWRlQ2xzU2VwKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnplcm9lZCh2KVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3ZnKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyQXR0SGVhZCgpIHtcbiAgICAgICAgY29uc3QgaGVhZHMgPSBfLnJhbmdlKDAsIHRoaXMudWlDb25mLl9uSGVhZHMpXG4gICAgICAgIGNvbnN0IGZvY3VzQXR0ID0gdGhpcy5hdHRDYXBzdWxlLmF0dFxuICAgICAgICBjb25zdCBsZWZ0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcImxlZnRcIik7XG4gICAgICAgIGNvbnN0IHJpZ2h0QXR0SW5mbyA9IGdldEF0dGVudGlvbkluZm8oZm9jdXNBdHQsIGhlYWRzLCBcInJpZ2h0XCIpO1xuICAgICAgICB0aGlzLnZpenMubGVmdEhlYWRzLm9wdGlvbnMub2Zmc2V0ID0gdGhpcy51aUNvbmYub2Zmc2V0XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMudXBkYXRlKGxlZnRBdHRJbmZvKVxuICAgICAgICB0aGlzLnZpenMucmlnaHRIZWFkcy51cGRhdGUocmlnaHRBdHRJbmZvKVxuICAgICAgICB0aGlzLl9yZW5kZXJIZWFkU3VtbWFyeSgpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZVxuICAgICAgICBoZWFkcy5mb3JFYWNoKChoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51aUNvbmYuaGVhZFNldCgpLmhhcyhoKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5zZWxlY3RIZWFkKGgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIHJlbmRlclRva2VucygpIHtcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMudG9rQ2Fwc3VsZVt0aGlzLnVpQ29uZi5hdHRUeXBlWzBdXVxuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMudG9rQ2Fwc3VsZVt0aGlzLnVpQ29uZi5hdHRUeXBlWzFdXVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm93OiBcIiwgdGhpcy51aUNvbmYub2Zmc2V0KTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0Lm9wdGlvbnMub2Zmc2V0ID0gdGhpcy51aUNvbmYub2Zmc2V0XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC51cGRhdGUobGVmdC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQubWFzayhsZWZ0Lm1hc2tJbmRzKTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5yaWdodC51cGRhdGUocmlnaHQudG9rZW5EYXRhKTtcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5yaWdodC5tYXNrKHJpZ2h0Lm1hc2tJbmRzKTtcbiAgICAgICAgLy8gZGlzcGxheVNlbGVjdGVkVG9rZW5cbiAgICB9XG5cbiAgICByZW5kZXJTdmcoKSB7XG4gICAgICAgIGNvbnN0IGF0dCA9IHRoaXMuYXR0Q2Fwc3VsZS5ieUhlYWRzKHRoaXMudWlDb25mLmhlYWRzKCkpXG4gICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25Tdmcub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgY29uc3Qgc3ZnID0gPEF0dGVudGlvbkdyYXBoPnRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YShhdHQpO1xuICAgICAgICBzdmcudXBkYXRlKGF0dClcbiAgICAgICAgY29uc3QgbWF4VG9rZW5zID0gXy5tYXgoW3RoaXMudG9rQ2Fwc3VsZS5hLmxlbmd0aCgpXSlcbiAgICAgICAgY29uc3QgbmV3SGVpZ2h0ID0gc3ZnLm9wdGlvbnMuYm94aGVpZ2h0ICogbWF4VG9rZW5zXG4gICAgICAgIHN2Zy5oZWlnaHQobmV3SGVpZ2h0KVxuXG4gICAgICAgIC8vIERvbid0IHJlZGlzcGxheSBldmVyeXRoaW5nIGlmIG9uZSB0b2tlbiBpcyBzZWxlY3RlZFxuICAgICAgICBzaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCkpXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBdHRIZWFkKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=