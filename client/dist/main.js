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
            offset: 0,
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
            self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i));
        })
            .on('mouseout', function (d, i) {
            let sel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
            sel.style('background', 0);
            self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i));
        })
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
                    self.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((r) => {
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
                const ename = `#right-token-${+e.ind + 1}`;
                const toMaskSel = d3__WEBPACK_IMPORTED_MODULE_0__["select"](ename);
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.right-token').each(function () {
                    const s = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this);
                    const crit = (s.node() == toMaskSel.node() && !s.classed('masked-token'));
                    s.classed("masked-token", crit);
                });
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
        // Below are the available models. Will need to choose 3 to be available ONLY
        const data = [
            { name: "bert-base-cased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "bert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilbert-base-uncased", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "distilroberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "roberta-base", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Bidirectional },
            { name: "gpt2", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
            { name: "gpt2-medium", kind: _etc_types__WEBPACK_IMPORTED_MODULE_3__["ModelKind"].Autoregressive },
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
            if (val == 406) {
                console.log("Embeddings are not available!");
                self.leaveCorpusMsg("Embeddings are not available at this time.");
            }
            else {
                const v = val;
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
            if (val == 406) {
                console.log("Contexts are not available!");
                self.leaveCorpusMsg("Contexts are not available at this time.");
            }
            else {
                const v = val;
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
                this.sels.body.style("cursor", "default");
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9leEJFUlQuaHRtbCIsIndlYnBhY2s6Ly8vLi9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3RzL2FwaS9kZW1vQVBJLnRzIiwid2VicGFjazovLy8uL3RzL2FwaS9tYWluQXBpLnRzIiwid2VicGFjazovLy8uL3RzL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL0ZhaXNzU2VhcmNoV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9kYXRhL1Rva2VuV3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU1ZHcGx1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy9TcGFjeUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1VSTEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL1V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXRjL19Ub29scy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXBpSGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvYXJyYXlVdGlscy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldGMveGQzLnRzIiwid2VicGFjazovLy8uL3RzL2V0Yy94cmFtZGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy91aUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQXR0ZW50aW9uQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9BdHRlbnRpb25IZWFkQm94LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9Db3JwdXNIaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL0NvcnB1c0luc3BlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvQ29ycHVzTWF0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRWRnZUNvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvRm9ybWF0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdmlzL1RleHRUb2tlbi50cyIsIndlYnBhY2s6Ly8vLi90cy92aXMvVmlzQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3RzL3Zpcy9teU1haW4udHMiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL25vZGUtZmV0Y2ggKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKT9hOGI3Iiwid2VicGFjazovLy9zdHJpbmdfZGVjb2RlciAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixxQkFBdUIsaUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQU8sTUFBTSxPQUFPLEdBQUc7SUFDdEIsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7SUFDM0YsMENBQTBDLEVBQUUsK0NBQStDO0lBQzNGLDBDQUEwQyxFQUFFLCtDQUErQztJQUMzRiwwQ0FBMEMsRUFBRSwrQ0FBK0M7Q0FDM0Y7Ozs7Ozs7Ozs7Ozs7QUM3REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUUwQjtBQUV6QjtBQUNTO0FBQ0E7QUFDbUI7QUFDUDtBQUV4QyxNQUFNLGlCQUFpQixHQUFHLElBQUksK0RBQVksRUFBRTtBQUVuRCxNQUFNLE9BQU8sR0FBRywwREFBVSxDQUFDLFFBQVEsRUFBRTtBQUVyQzs7Ozs7O0dBTUc7QUFDSCxTQUFTLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxHQUFHLElBQUksRUFBRSxhQUFhLEdBQUcsSUFBSTtJQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtRQUNkLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RDtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztLQUMvRDtJQUNELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRTtBQUMxQixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsR0FBRyxJQUFJLEVBQUUsYUFBYSxHQUFHLElBQUk7SUFDaEUsTUFBTSxHQUFHLEdBQUcsZ0RBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksZ0RBQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDN0IsZ0ZBQWdGO1FBQ2hGLE1BQU0sSUFBSSxHQUFHLFNBQVMsR0FBRyxnREFBTyxDQUFDLEdBQUcsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUM7UUFDN0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNsQztJQUNELE9BQU8sdUNBQU8sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDO0FBQzVDLENBQUM7QUFHTSxNQUFNLEdBQUc7SUFFWixZQUFvQixVQUFrQixJQUFJO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWEsRUFBRSxVQUFxQixJQUFJO1FBQ3BELE1BQU0sTUFBTSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUVELE1BQU0sR0FBRyxHQUFHLCtEQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsRUFBRSxNQUFNLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFOUIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxHQUFHLGdEQUFTLENBQUMsTUFBTSxDQUFDO1lBQzdCLHVDQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLFVBQXFCLElBQUk7UUFDdkYsTUFBTSxNQUFNLEdBQUc7WUFDWCxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLCtEQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLEVBQUUsTUFBTSxDQUFDO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLGdDQUFnQztRQUNoQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsTUFBTSxHQUFHLEdBQUcsZ0RBQVMsQ0FBQyxNQUFNLENBQUM7WUFDN0IsdUNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxPQUFPLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsc0JBQXNCLENBQUMsS0FBYSxFQUFFLE1BQW9CLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsVUFBcUIsSUFBSTtRQUNsSCxNQUFNLE1BQU0sR0FBRztZQUNYLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLHlDQUFLLENBQUMsMENBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQy9DLFFBQVEsRUFBRSxRQUFRO1lBRWxCLCtFQUErRTtZQUMvRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUVELE1BQU0sR0FBRyxHQUFHLCtEQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsQ0FBQztRQUNuRCxNQUFNLE9BQU8sR0FBRyxpRUFBUyxDQUFDLE1BQU0sQ0FBQztRQUdqQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsa0RBQWtEO1lBQ2xELE1BQU0sR0FBRyxHQUFHLGdEQUFTLENBQUMsTUFBTSxDQUFDO1lBQzdCLHVDQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLFNBQW1CLEVBQUUsS0FBYSxFQUFFLEtBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFVBQXFCLElBQUk7UUFDdEksTUFBTSxNQUFNLEdBQUc7WUFDWCxLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLENBQUMsRUFBRSxDQUFDO1NBQ1A7UUFFRCxNQUFNLEdBQUcsR0FBRywrREFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFOUIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxHQUFHLGdEQUFTLENBQUMsTUFBTSxDQUFDO1lBQzdCLHVDQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQztTQUNMO1FBRUQsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFpQixFQUFFLEtBQWEsRUFBRSxLQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxVQUFxQixJQUFJO1FBQ2xJLE1BQU0sTUFBTSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixDQUFDLEVBQUUsQ0FBQztTQUNQO1FBRUQsTUFBTSxHQUFHLEdBQUcsK0RBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixNQUFNLEdBQUcsR0FBRyxnREFBUyxDQUFDLE1BQU0sQ0FBQztZQUM3Qix1Q0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUM7U0FDTDtRQUVELE9BQU8sWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzNMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNRO0FBRUc7QUFFdEM7Ozs7O0dBS0c7QUFFSCxNQUFNLFNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztBQUNuRCxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQTJCLEVBQUUsRUFBRSxDQUFDLHlEQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLCtDQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZILFNBQVMsb0JBQW9CLENBQUMsQ0FBc0IsRUFBRSxRQUFRO0lBQ2pFLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBQyx3REFBd0Q7SUFDekUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN2QixNQUFNLElBQUksR0FBNkIsUUFBUSxDQUFDLElBQUk7SUFDcEQsTUFBTSxLQUFLLEdBQTZCLFFBQVEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sUUFBUSxHQUFHLHlEQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLCtDQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLE1BQU0sU0FBUyxHQUFHLHlEQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLCtDQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVGLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUM5RSxDQUFDO0FBRU0sTUFBTSxnQkFBZ0I7SUFVekIsWUFBWSxHQUFnQixFQUFFLFVBQTZCLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsR0FBQyxJQUFJO1FBSGpGLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBR1IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQWdCLEVBQUUsVUFBNkIsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyx5REFBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyx5REFBVyxDQUFDLEdBQUcsQ0FBQyxFQUFDLDZEQUE2RDtRQUNoRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsQ0FBc0IsRUFBRSxRQUFRO1FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBQyx3REFBd0Q7UUFDekUsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2QixNQUFNLElBQUksR0FBNkIsUUFBUSxDQUFDLElBQUk7UUFDcEQsTUFBTSxLQUFLLEdBQTZCLFFBQVEsQ0FBQyxLQUFLO1FBRXRELE1BQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFDckMsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVO1FBQ3BFLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDSCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0lBQ3JDLENBQUM7SUFJRCxNQUFNLENBQUMsR0FBSTtRQUNQLElBQUksR0FBRyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRztRQUNuQixPQUFPLElBQUk7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVTLFFBQVEsQ0FBQyxLQUFjO1FBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbkIsT0FBTywwREFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFxQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBRTtJQUNoRSxDQUFDO0lBRVMsT0FBTyxDQUFDLElBQVc7UUFDekIsT0FBcUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRTtJQUN2RSxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRTtJQUMzQyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO0lBQ3pDLENBQUM7Q0FDSjtBQUVELFNBQVMsVUFBVSxDQUFDLElBQWdCLEVBQUUsSUFBYSxFQUFFLElBQWE7SUFDOUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtJQUMxQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFO0lBQzlCLDRDQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ25DLDRDQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2hDLGdCQUFnQjtZQUNoQixJQUFJLCtDQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUNyQiw0Q0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQzthQUNMO1lBRUQsZ0JBQWdCO1lBQ2hCLDRDQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLCtDQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDbkIsNENBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUM7WUFDVixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRixPQUFPLE9BQU87QUFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUI7QUFDUztBQUNnQjtBQUNKO0FBRXRDLHdEQUF3RDtBQUN4RCxNQUFNLGVBQWUsR0FBRyw0Q0FBUSxDQUFDLHdDQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsNkNBQVMsRUFBRSw4Q0FBVSxDQUFDO0FBRXJFLFNBQVMsTUFBTSxDQUFDLEtBQWM7SUFDNUIsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR2xGLE1BQU0sd0JBQXdCO0lBR2pDLFlBQVksSUFBNkI7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsWUFBWTtRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFM0UsTUFBTSxLQUFLLEdBQUc7WUFDVixNQUFNLEVBQUUsNERBQVEsQ0FBQyxVQUFVLENBQUM7U0FDL0I7UUFFRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztRQUVGLE9BQU8sS0FBSztJQUNoQixDQUFDO0lBRUQsZUFBZSxDQUFDLFdBQVcsR0FBQyxDQUFDO1FBQ3pCLHFEQUFxRDtRQUNyRCxNQUFNLFFBQVEsR0FBRztZQUNiLEdBQUcsRUFBRSw0REFBUSxDQUFDLHdEQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQzdDLEdBQUcsRUFBRSw0REFBUSxDQUFDLHdEQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQzdDLE1BQU0sRUFBRSw0REFBUSxDQUFDLHdEQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsTUFBTSxHQUFHLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEUsT0FBTyxXQUFXO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUMsQ0FBQztRQUMxQixxREFBcUQ7UUFDckQsTUFBTSxRQUFRLEdBQUc7WUFDYixHQUFHLEVBQUUsNERBQVEsQ0FBQyx3REFBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUM3QyxHQUFHLEVBQUUsNERBQVEsQ0FBQyx3REFBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUM3QyxNQUFNLEVBQUUsNERBQVEsQ0FBQyx3REFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztTQUN0RDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7WUFFN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE1BQU0sR0FBRyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsT0FBTyxRQUFRO0lBQ25CLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxXQUFXLEdBQUMsQ0FBQztRQUM3QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQ3BELE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sR0FBRyx5Q0FBSyxDQUFDLDRDQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxDQUFDO1FBRXZELE9BQU8sT0FBTztJQUNsQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2Qsd0NBQXdDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDdEMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzNDLE1BQU0sT0FBTyxHQUFHLHlDQUFLLENBQUMsNENBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUM7UUFFckQsT0FBTyxPQUFPO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3RHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ1I7QUFFRDtBQUUxQjs7R0FFRztBQUNGLE1BQU0saUJBQWlCLEdBQTZCLENBQUM7UUFDakQsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsRUFBRTtRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO1FBQ1gsVUFBVSxFQUFFLElBQUk7S0FDbkIsQ0FBQztBQUVJLE1BQU0sWUFBWTtJQUlyQixZQUFZLE1BQU0sR0FBQyxpQkFBaUIsRUFBRSxRQUFRLEdBQUMsRUFBRTtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsR0FBRztRQUNKLE1BQU0sT0FBTyxHQUFHLDhDQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7UUFDN0MsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDZix5REFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztTQUN4QzthQUNJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBRztRQUNOLE1BQU0sT0FBTyxHQUFHLDhDQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7UUFDN0MsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQjthQUNJO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUc7UUFDTiwyQ0FBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFNBQVM7UUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFtQjtRQUN0QixNQUFNLFNBQVMsR0FBRyw2Q0FBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sT0FBTyxHQUFHLDZDQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQUVNLE1BQU0sWUFBWTtJQUdyQixZQUFZLENBQXNCO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsQ0FBc0I7UUFDckMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELG9CQUFvQixDQUFDLENBQTBCLEVBQUUsS0FBYztRQUMzRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLENBQXVCO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUUzQixNQUFNLEtBQUssR0FBRyx5Q0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQztRQUVoRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUNqQyxDQUFDLENBQUM7SUFFTixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsR0FBbUIsRUFBRSxHQUFVO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN2QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDSjtBQUVNLFNBQVMsWUFBWSxDQUFDLElBQW1CLEVBQUUsS0FBd0I7SUFDdEUsOEJBQThCO0lBQzlCLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRTtRQUNoQixPQUFPLEtBQUs7S0FDZjtJQUNELE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLG9CQUFvQjtJQUNyRSxPQUFPLEdBQUc7QUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcEhEO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBRzNCOzs7R0FHRztBQUNJLE1BQU0sR0FBRztJQUNaLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDO1FBQ25CLE9BQU8sWUFBWSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRztRQUNiLE9BQU8sVUFBVSxHQUFHLEdBQUc7SUFDM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7UUFDNUMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM1QixLQUFLLEVBQUUsT0FBTztZQUNkLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUNsQyxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBRU0sTUFBTSxlQUFlO0lBSXhCLFlBQVksV0FBVyxFQUFFLE9BQU8sR0FBRyxFQUFFO1FBQ2pDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDM0MsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBRTlDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixNQUFNLEVBQUUsR0FBcUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdCLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQUE7QUFBQTs7O0dBR0c7QUFDSSxNQUFNLGtCQUFrQjtJQUszQixZQUFZLE9BQWdCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRTtJQUM1QixDQUFDO0lBRUQsSUFBSSxDQUFDLFVBQWtCLEVBQUUsYUFBdUI7UUFDNUMsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUM7WUFDckQsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFpQixFQUFFLE1BQWM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0I7QUFDRTtBQUNhO0FBRWhDLE1BQU0sU0FBUztJQUdsQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQWdDRCxpQkFBaUI7UUFDYixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQWtDLEVBQUUsRUFBRTtZQUNuRCxNQUFNLEdBQUcsR0FBRyw0Q0FBUSxDQUFDLHlDQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLHFEQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLDRDQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDekMsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFHO1lBQ2IsR0FBRyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQzVDLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUM1QyxNQUFNLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDbEQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQzlDLE1BQU0sRUFBRSwrQ0FBZSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFtQyxRQUFRO0lBQy9DLENBQUM7O0FBN0NNLDRCQUFrQixHQUFtQjtJQUN4QyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQ25JLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU87UUFDdEssV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU07UUFDcEosS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ2xKLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDckIsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVM7UUFDNUosVUFBVSxDQUFDO0NBQ3RCO0FBRUQ7O0dBRUc7QUFDSSw4QkFBb0IsR0FBbUI7SUFDMUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDO0lBQ3hKLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXO1FBQzNJLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZO1FBQ2hLLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDckIsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVM7UUFDNUosVUFBVSxDQUFDO0NBQ3RCO0FBRU0sMEJBQWdCLEdBQW1CO0lBQ3RDLEdBQUcsRUFBRSwyQ0FBTyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztJQUNsRixHQUFHLEVBQUUsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEdBQUc7SUFDckMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO0lBQzNDLElBQUksRUFBRSxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSTtDQUMxQztBQW9CRSxNQUFNLFdBQVcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDNUQzQztBQUFBO0FBQUE7O0dBRUc7QUFFSSxNQUFNLFVBQVU7SUFFbkIsTUFBTSxDQUFDLFFBQVE7UUFDWCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1RSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxLQUFLLFVBQVU7UUFDakIsNkZBQTZGO1FBQzdGLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUV6QixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDWixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ25DO2lCQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakM7WUFDRCxRQUFRO1lBQ1IsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO1FBR0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksU0FBUyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLE9BQU8sRUFBRTtvQkFDVCxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDdEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQzFDO3FCQUFNLElBQUksT0FBTyxFQUFFO29CQUNoQixhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7eUJBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTtvQkFDSCxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUV6QixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBcUI7UUFDbEMsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUFFLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUN4QztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBR0gsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUM5QjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBVyxFQUFFLEtBQXFCLEVBQUUsbUJBQW1CLEdBQUcsSUFBSTtRQUNoRixNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzVDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDM0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsTUFBTTtJQUNOLDBFQUEwRTtJQUMxRSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLHVDQUF1QztJQUN2QyxtREFBbUQ7SUFDbkQsK0VBQStFO0lBQy9FLDRCQUE0QjtJQUM1QixJQUFJO0lBR0osTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFxQixFQUFFLG1CQUFtQixHQUFHLElBQUk7UUFDOUQsSUFBSSxtQkFBbUIsRUFBRTtZQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUN0QyxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUN6QyxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDdEhEO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBR3pCOzs7R0FHRztBQUNILElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBRXZCLE1BQU0sSUFBSTtJQUNiLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBQzVCLHFCQUFxQixJQUFJLENBQUMsQ0FBQztRQUUzQixPQUFPLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFJRDs7R0FFRztBQUNJLE1BQU0sR0FBRzs7QUFDTCxpQkFBYSxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7QUFDN0QsZ0JBQVksR0FBRyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDO0FBQzNELGNBQVUsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyw0Q0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlELGFBQVMsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyw0Q0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVELGVBQVcsR0FBRyxDQUFDLEVBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNuQixTQUFTLEVBQUUsQ0FBQztJQUNaLGdCQUFnQixFQUFFLE1BQU07SUFDeEIsU0FBUyxFQUFFLE1BQU07Q0FBQyxDQUFDO0FBQ3BELGlCQUFhLEdBQUcsQ0FBQyxFQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDckIsU0FBUyxFQUFFLENBQUM7SUFDWixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFNBQVMsRUFBRSxJQUFJO0NBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xDN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUUzQixTQUFTLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUNwQixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDVCxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2I7U0FDSSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDZCxPQUFPLENBQUMsQ0FBQztLQUNaO0lBQ0QsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBRWtFO0FBRW5FOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQUksS0FBYyxFQUFFLFNBQTBCO0lBQ2pFLElBQUksU0FBUyxHQUFDLENBQUMsQ0FBQztJQUNoQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFFakIsSUFBSSxDQUFDLEdBQUcsZ0RBQVcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQixDQUFDLEdBQUcsZ0RBQVcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBQyxDQUFDLENBQUM7S0FDekM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBQUEsQ0FBQztBQUVGLFNBQVMsU0FBUyxDQUFJLEtBQWMsRUFBRSxHQUFLLEVBQUUsR0FBVTtJQUNuRCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUIsT0FBTyxLQUFLO0FBQ2hCLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUFJLEtBQVk7SUFDcEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDM0MsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxjQUFjLENBQUksS0FBYyxFQUFFLEdBQUssRUFBRSxTQUFTLEdBQUMsS0FBSztJQUM3RCwwQkFBMEI7SUFDMUIsSUFBSSxTQUFTLEVBQUU7UUFDWCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN2QjtJQUVELE1BQU0sR0FBRyxHQUFHLGtEQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3JDLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxHQUFVO0lBQ25DLE1BQU0sQ0FBQyxHQUFZLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRSxPQUFPLDZDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFDLENBQUM7QUFDckQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlERDtBQUFBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUNJLFNBQVMsT0FBTyxDQUFDLElBQVksRUFBRSxNQUFlO0lBQ2pELElBQUksTUFBTSxFQUFDO1FBQ1AsSUFBSSxHQUFHLEdBQVcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUU3QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDLENBQUMsRUFBRTtZQUM3QixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ1QsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNYLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDakM7U0FDSTtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDO0FBQUEsQ0FBQztBQUVGOztHQUVHO0FBQ0ksTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUFFLE9BQU87UUFDekMsTUFBTSxFQUFDLE1BQU07UUFDYixJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDM0IsT0FBTyxFQUFFO1lBQ0QsY0FBYyxFQUFFLGlDQUFpQztTQUNwRDtLQUNSO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hCRjtBQUFBO0FBQUE7Ozs7R0FJRztBQUNJLFNBQVMsZUFBZSxDQUFDLEdBQVksRUFBRSxFQUFhO0lBQ3ZELHlEQUF5RDtJQUN6RCxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ0wsRUFBRSxHQUFHLFVBQVMsSUFBSSxFQUFFLEtBQUs7WUFDekIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FDSjtJQUVELElBQUksR0FBRyxHQUFhO1FBQ2hCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsV0FBVyxFQUFFLEVBQUU7S0FDbEIsQ0FBQztJQUVGLElBQUksVUFBVSxHQUFlLEVBQUU7SUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUksRUFBRSxLQUFLO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7O0FDekNIO0FBQUE7QUFBQSw0SEFBNEg7QUFDckgsTUFBTSxTQUFTLEdBQUc7SUFDckIsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVB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QUN6QixDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7OztBQzE0QkQsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi90cy9tYWluLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJleEJFUlQuaHRtbFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCJleHBvcnQgY29uc3QgRGVtb0FQSSA9IHtcblx0XCI1MjdmZGFjNDQwNGJmOWJhNTQxMjY0NmFkNDU3OTUwZDQ0ODI3NjJjXCI6IFwiNTI3ZmRhYzQ0MDRiZjliYTU0MTI2NDZhZDQ1Nzk1MGQ0NDgyNzYyYy5qc29uXCIsXG5cdFwiNTliNGFjYzA1ZjFkODBlY2JlZjFjMjNlYWYyZmRhMTAyMjJjYjI1N1wiOiBcIjU5YjRhY2MwNWYxZDgwZWNiZWYxYzIzZWFmMmZkYTEwMjIyY2IyNTcuanNvblwiLFxuXHRcIjM1NDk5MmYyZWUyMzY2MDRjODc0YTNhNjI3ZTQwNDJiYzY4NTg2ZjhcIjogXCIzNTQ5OTJmMmVlMjM2NjA0Yzg3NGEzYTYyN2U0MDQyYmM2ODU4NmY4Lmpzb25cIixcblx0XCI1MDE1ZTVhMzE4NjA1Y2VhNjgwODUzOGRiMTRkOGFmMTY4ODdiMDc2XCI6IFwiNTAxNWU1YTMxODYwNWNlYTY4MDg1MzhkYjE0ZDhhZjE2ODg3YjA3Ni5qc29uXCIsXG5cdFwiM2M5YWExNTJhYzg5NDMwNjA0MDcwM2M1MDk1NTk5YjE5OWNhZDFhOVwiOiBcIjNjOWFhMTUyYWM4OTQzMDYwNDA3MDNjNTA5NTU5OWIxOTljYWQxYTkuanNvblwiLFxuXHRcIjBmZWNlMGM4NzIwM2U4M2FmZDE2NzRiNWFlZWJhZWQwZjVmYTA1NjJcIjogXCIwZmVjZTBjODcyMDNlODNhZmQxNjc0YjVhZWViYWVkMGY1ZmEwNTYyLmpzb25cIixcblx0XCJkM2EwZTQwNDVlYTQ4YTI3NWNlNTFhNmFmMDI4MDQwNjA2MGY0N2NmXCI6IFwiZDNhMGU0MDQ1ZWE0OGEyNzVjZTUxYTZhZjAyODA0MDYwNjBmNDdjZi5qc29uXCIsXG5cdFwiZWQ5OGQ3NTFhYjliNmE0YTBlODVlOTMzMmI0MjBhNGMxM2FiNzVhN1wiOiBcImVkOThkNzUxYWI5YjZhNGEwZTg1ZTkzMzJiNDIwYTRjMTNhYjc1YTcuanNvblwiLFxuXHRcIjBkMjRhZTA4ZWViMjFhZjgyYzY2NmNiZTJhYzA2NDZlZDljOWQ5YTZcIjogXCIwZDI0YWUwOGVlYjIxYWY4MmM2NjZjYmUyYWMwNjQ2ZWQ5YzlkOWE2Lmpzb25cIixcblx0XCI2ZGUwNTNiM2I4YTRkOTA0NzgwYzlhNjU0NWEwYTYzY2JiYjJiMTQ0XCI6IFwiNmRlMDUzYjNiOGE0ZDkwNDc4MGM5YTY1NDVhMGE2M2NiYmIyYjE0NC5qc29uXCIsXG5cdFwiZjY4ZGYyMzM2NWZhZjAyZjljMDE0MzkzNDViZWQ2NjkzNmVkODVmN1wiOiBcImY2OGRmMjMzNjVmYWYwMmY5YzAxNDM5MzQ1YmVkNjY5MzZlZDg1ZjcuanNvblwiLFxuXHRcIjQ2MDhjYjRmYzAwYjQzZmZmNjgwOThlODU2NzZmYWQ1N2M5NDBmMDJcIjogXCI0NjA4Y2I0ZmMwMGI0M2ZmZjY4MDk4ZTg1Njc2ZmFkNTdjOTQwZjAyLmpzb25cIixcblx0XCJkZmNkNTAxNDZkYThkODEyMmE1YTU3YzJhM2MwYWJjZTUwM2JhOTRiXCI6IFwiZGZjZDUwMTQ2ZGE4ZDgxMjJhNWE1N2MyYTNjMGFiY2U1MDNiYTk0Yi5qc29uXCIsXG5cdFwiMzRjODYyOWQ0MjY1ZDdmM2VkZTNhZGQ0MmYzNjEzYjIwNWQ5NGMxY1wiOiBcIjM0Yzg2MjlkNDI2NWQ3ZjNlZGUzYWRkNDJmMzYxM2IyMDVkOTRjMWMuanNvblwiLFxuXHRcImRiMmRjMjUyYTc4NjY1MGY2NDM5NWEwZjVkMTgxYzA4MzEwMTljYmZcIjogXCJkYjJkYzI1MmE3ODY2NTBmNjQzOTVhMGY1ZDE4MWMwODMxMDE5Y2JmLmpzb25cIixcblx0XCJkYTQ1OTdkNzNkNDQ0NzU3YmRlOTE3NjM5NWJmMzFhYWQzMzM0MTMxXCI6IFwiZGE0NTk3ZDczZDQ0NDc1N2JkZTkxNzYzOTViZjMxYWFkMzMzNDEzMS5qc29uXCIsXG5cdFwiYTJlYmYxM2QzYzkzNzFmY2Y3MzhiOTY1MTgyNGUyYzNjZDFmZjhlMFwiOiBcImEyZWJmMTNkM2M5MzcxZmNmNzM4Yjk2NTE4MjRlMmMzY2QxZmY4ZTAuanNvblwiLFxuXHRcImJjNDE5MjM4YzIwZGQxYzVjZmUxY2M0MjdhYjNkMWUzMTM1MzQzNmFcIjogXCJiYzQxOTIzOGMyMGRkMWM1Y2ZlMWNjNDI3YWIzZDFlMzEzNTM0MzZhLmpzb25cIixcblx0XCI4NGU4YmU5ZmU1NjJmYmQwNDg3YzAzYjU1Y2M2YjRmM2ZiOGNkNzg3XCI6IFwiODRlOGJlOWZlNTYyZmJkMDQ4N2MwM2I1NWNjNmI0ZjNmYjhjZDc4Ny5qc29uXCIsXG5cdFwiMjA3ZTZjOThhMGUxNDlkYzdlNmVkNjcxMTgyOTZkOGE4Yzg5YjNjM1wiOiBcIjIwN2U2Yzk4YTBlMTQ5ZGM3ZTZlZDY3MTE4Mjk2ZDhhOGM4OWIzYzMuanNvblwiLFxuXHRcImMxODVhOTM0OWJhNWEzMjVhY2Y4NTE0ZTliNTBkZTcxMjgwNDg4YWFcIjogXCJjMTg1YTkzNDliYTVhMzI1YWNmODUxNGU5YjUwZGU3MTI4MDQ4OGFhLmpzb25cIixcblx0XCJkZGU0ODFhNWNkMzY2N2FlOGM2YzViNWUxNDIxZGM4ODJiNmEyZGQ2XCI6IFwiZGRlNDgxYTVjZDM2NjdhZThjNmM1YjVlMTQyMWRjODgyYjZhMmRkNi5qc29uXCIsXG5cdFwiZjYzZTE0ZTkzNWQ5ODk0OGI0YTBlYmM5NjYzNDAwZGJlNDI2MzM0OFwiOiBcImY2M2UxNGU5MzVkOTg5NDhiNGEwZWJjOTY2MzQwMGRiZTQyNjMzNDguanNvblwiLFxuXHRcIjc5Yjk2NGQxYTVjODU0ZGVhZWFjZTI2ODEzZjk2OTk0YmI4MmFlZjJcIjogXCI3OWI5NjRkMWE1Yzg1NGRlYWVhY2UyNjgxM2Y5Njk5NGJiODJhZWYyLmpzb25cIixcblx0XCIzYjExNjhlYzk2YWYwMGM0ZTg4NzM0MWU5MmE4NzhmODc1MmUxZDE3XCI6IFwiM2IxMTY4ZWM5NmFmMDBjNGU4ODczNDFlOTJhODc4Zjg3NTJlMWQxNy5qc29uXCIsXG5cdFwiOGM0NjJiYzI5OGUzMTgzZWZhOGQ5ZTg2M2UyNWVhNWQ4OTgwNmIwM1wiOiBcIjhjNDYyYmMyOThlMzE4M2VmYThkOWU4NjNlMjVlYTVkODk4MDZiMDMuanNvblwiLFxuXHRcIjk5Mzk2OThlZGFhMjViYmFlOWVlMWQyNzg2NGU2OThmMTM5NjNmMDZcIjogXCI5OTM5Njk4ZWRhYTI1YmJhZTllZTFkMjc4NjRlNjk4ZjEzOTYzZjA2Lmpzb25cIixcblx0XCI3M2YxZWU0OTdiM2U3YjYzOTRlNTU3MjZiMThkYmY5ZDUxNGRjZWE2XCI6IFwiNzNmMWVlNDk3YjNlN2I2Mzk0ZTU1NzI2YjE4ZGJmOWQ1MTRkY2VhNi5qc29uXCIsXG5cdFwiYzdjZGI4MGJmODEzZTFkZTI0MTI2MGFlZGU2Y2QyOGVhNjVjY2ZhZVwiOiBcImM3Y2RiODBiZjgxM2UxZGUyNDEyNjBhZWRlNmNkMjhlYTY1Y2NmYWUuanNvblwiLFxuXHRcImE5NmZlZDE2ZWFiMWJmNmQwOGU0MDAxYzAyODk0ZDljNTQ5ZGY2MjdcIjogXCJhOTZmZWQxNmVhYjFiZjZkMDhlNDAwMWMwMjg5NGQ5YzU0OWRmNjI3Lmpzb25cIixcblx0XCJhOGVhZjEwZGE4ZGM3NWI0MmU3MmJkYzcwOTE3NzYyNDdmZmY5NjU3XCI6IFwiYThlYWYxMGRhOGRjNzViNDJlNzJiZGM3MDkxNzc2MjQ3ZmZmOTY1Ny5qc29uXCIsXG5cdFwiYTgxOTRmMjMwOWUxYzcxZTk3N2VmOGQzYmU1NzJhZTAwYjBlOTFmMlwiOiBcImE4MTk0ZjIzMDllMWM3MWU5NzdlZjhkM2JlNTcyYWUwMGIwZTkxZjIuanNvblwiLFxuXHRcIjJmNGExNWI2NmZjZmIwYzdhNDNhMzNkOTM3NjM5OTAyODJiZmM1YWFcIjogXCIyZjRhMTViNjZmY2ZiMGM3YTQzYTMzZDkzNzYzOTkwMjgyYmZjNWFhLmpzb25cIixcblx0XCIwNjA5NWNlZjRhN2Y0OWIxOGYxNTNlNjdlMzNmZGRiODMxYTE1YjQ2XCI6IFwiMDYwOTVjZWY0YTdmNDliMThmMTUzZTY3ZTMzZmRkYjgzMWExNWI0Ni5qc29uXCIsXG5cdFwiNGM5M2VhZjBjMGNlNTZmMWU1ZDUxMDA5MTZhYmY0ZDMxZWIzNWRhNVwiOiBcIjRjOTNlYWYwYzBjZTU2ZjFlNWQ1MTAwOTE2YWJmNGQzMWViMzVkYTUuanNvblwiLFxuXHRcImY4YzQwYzY3Yzg1MWEwNDg5Zjc0ODBjOTliMzFiNGY2MDZjMDE4NGJcIjogXCJmOGM0MGM2N2M4NTFhMDQ4OWY3NDgwYzk5YjMxYjRmNjA2YzAxODRiLmpzb25cIixcblx0XCJlNGU3MWY2ZWE1N2JlMmUwNWQ2MmFmMDgyNWE4MGYxNDQ0MjFlMDJkXCI6IFwiZTRlNzFmNmVhNTdiZTJlMDVkNjJhZjA4MjVhODBmMTQ0NDIxZTAyZC5qc29uXCIsXG5cdFwiZTdkOWQ1MjA4ODI3ODJjN2NmYmZmZWFkYWFmMjJiNGMwYTA4MWM3Y1wiOiBcImU3ZDlkNTIwODgyNzgyYzdjZmJmZmVhZGFhZjIyYjRjMGEwODFjN2MuanNvblwiLFxuXHRcIjRhYTRlYjEwZWFkNDRhMGEzYzJkZDk1NDA3MDE3YTkyODEzOGIzMmJcIjogXCI0YWE0ZWIxMGVhZDQ0YTBhM2MyZGQ5NTQwNzAxN2E5MjgxMzhiMzJiLmpzb25cIixcblx0XCJkYTMxZDU1ZWU4Y2IwMWJjZGIyOTU3MmNiOTAyYjhlNzk5Njg1YmUyXCI6IFwiZGEzMWQ1NWVlOGNiMDFiY2RiMjk1NzJjYjkwMmI4ZTc5OTY4NWJlMi5qc29uXCIsXG5cdFwiZTQyNzE4MWZiMDJiYmYxOWY3YmJiNjVjOWQ5Mzg5ZDJkOWE0MTgxMlwiOiBcImU0MjcxODFmYjAyYmJmMTlmN2JiYjY1YzlkOTM4OWQyZDlhNDE4MTIuanNvblwiLFxuXHRcImJiY2FiOWUxY2E2MGE4NTFmZDdlY2ZkYTgwZGU0NzBhZmE3NDA5MzZcIjogXCJiYmNhYjllMWNhNjBhODUxZmQ3ZWNmZGE4MGRlNDcwYWZhNzQwOTM2Lmpzb25cIixcblx0XCI0ZGU5NmFhMjA1MDc2ODYzYzlmYjRlYTk5ZTJiYTg2ZmExMzFmZjc2XCI6IFwiNGRlOTZhYTIwNTA3Njg2M2M5ZmI0ZWE5OWUyYmE4NmZhMTMxZmY3Ni5qc29uXCIsXG5cdFwiZTRjNmQxYjMwMDRlM2NkZDBjODc5YTU5NjM5YjVjZTk5MzIwN2E5OVwiOiBcImU0YzZkMWIzMDA0ZTNjZGQwYzg3OWE1OTYzOWI1Y2U5OTMyMDdhOTkuanNvblwiLFxuXHRcImZiYzlkYTc5YjhiZjM5ZGM5OTk4NDA4NTI2NzQxZjgxMWExM2U2YWFcIjogXCJmYmM5ZGE3OWI4YmYzOWRjOTk5ODQwODUyNjc0MWY4MTFhMTNlNmFhLmpzb25cIixcblx0XCI1Mjg1NTRlZTRlNjE1YzYxMjg3YzQwZWQ5YTJhZWE2OWI5MWFmNmM5XCI6IFwiNTI4NTU0ZWU0ZTYxNWM2MTI4N2M0MGVkOWEyYWVhNjliOTFhZjZjOS5qc29uXCIsXG5cdFwiNWU3MDczYzAzYzM3ZDE5ODI2YjJmYjRhNjU5OWNjYWVkZGU0OTJlNFwiOiBcIjVlNzA3M2MwM2MzN2QxOTgyNmIyZmI0YTY1OTljY2FlZGRlNDkyZTQuanNvblwiLFxuXHRcIjcxYzRhODg2Y2RlZTU4YTM3MWFlMjExNTMxMWIxNTBlODRlNTU1ZjZcIjogXCI3MWM0YTg4NmNkZWU1OGEzNzFhZTIxMTUzMTFiMTUwZTg0ZTU1NWY2Lmpzb25cIixcblx0XCI0YmNlMDk3MGE0NjVmZTliOTYzMDVlMDZhZjE5YzVkOWM5N2Q3Y2MzXCI6IFwiNGJjZTA5NzBhNDY1ZmU5Yjk2MzA1ZTA2YWYxOWM1ZDljOTdkN2NjMy5qc29uXCIsXG5cdFwiZWZkYjFmMGE3MGYyMmY4MGZmM2NlYTBjYjc5YmVjNzE3ZmM4YjZmN1wiOiBcImVmZGIxZjBhNzBmMjJmODBmZjNjZWEwY2I3OWJlYzcxN2ZjOGI2ZjcuanNvblwiLFxuXHRcIjE3NGM2Zjc4NmQxMzljZTExMTM4MTA0NWQ2MGQyNTY4MmExNjhiOTlcIjogXCIxNzRjNmY3ODZkMTM5Y2UxMTEzODEwNDVkNjBkMjU2ODJhMTY4Yjk5Lmpzb25cIixcblx0XCJhOGMyM2U4OGQ2Y2E2ZDRlZmQyNjQ2YjA3NDJjMGZhMzJkYmQ1NWE0XCI6IFwiYThjMjNlODhkNmNhNmQ0ZWZkMjY0NmIwNzQyYzBmYTMyZGJkNTVhNC5qc29uXCIsXG5cdFwiZjY5NDljMjg3NTJkZTM1YTg3MGVmZGUzMDg1ODVhY2Q0NmEyNTI3OFwiOiBcImY2OTQ5YzI4NzUyZGUzNWE4NzBlZmRlMzA4NTg1YWNkNDZhMjUyNzguanNvblwiLFxuXHRcImMxYmRiOGNiYWZkNWQ1ZDhmNmJkYTJiNGRiMTZiNmJjMmQ2MmUxOGFcIjogXCJjMWJkYjhjYmFmZDVkNWQ4ZjZiZGEyYjRkYjE2YjZiYzJkNjJlMThhLmpzb25cIixcblx0XCIyYjgxYThmNjAyMjUxY2Y0MGI0NjgyYzhjZWRiMzk2NmI5MTJkN2M2XCI6IFwiMmI4MWE4ZjYwMjI1MWNmNDBiNDY4MmM4Y2VkYjM5NjZiOTEyZDdjNi5qc29uXCIsXG5cdFwiOGY5NGU4NDNkMjUxMDA0N2ZkMWFmNDZmMjQ5YWZlODdmZjQ5Y2MyZlwiOiBcIjhmOTRlODQzZDI1MTAwNDdmZDFhZjQ2ZjI0OWFmZTg3ZmY0OWNjMmYuanNvblwiLFxuXHRcIjRlM2RkYjUxNTUwYzAzYzY0ZmRiZTU1OTI1MjY2NjUxMDBkMzI5MzBcIjogXCI0ZTNkZGI1MTU1MGMwM2M2NGZkYmU1NTkyNTI2NjY1MTAwZDMyOTMwLmpzb25cIixcblx0XCJmODE2YjIzYWY5YWE0MzEyYzgwZTY2OGE2NmExNTZjOTM0Y2IzMzBjXCI6IFwiZjgxNmIyM2FmOWFhNDMxMmM4MGU2NjhhNjZhMTU2YzkzNGNiMzMwYy5qc29uXCIsXG5cdFwiMmZlMDVhOTExYTU3NGI4YTZkNGIwNWViMTNkYjllMDlhYWFjYWQyZFwiOiBcIjJmZTA1YTkxMWE1NzRiOGE2ZDRiMDVlYjEzZGI5ZTA5YWFhY2FkMmQuanNvblwiLFxuXHRcIjVjNzE0OTY3MjYzOTVhYWE0ZDBhNjUzNzNmZDE2NTFiNWEwZTZiMWZcIjogXCI1YzcxNDk2NzI2Mzk1YWFhNGQwYTY1MzczZmQxNjUxYjVhMGU2YjFmLmpzb25cIixcbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHsgVG9rZW5EaXNwbGF5IH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgKiBhcyB0cCBmcm9tICcuLi9ldGMvdHlwZXMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgRGVtb0FQSSB9IGZyb20gJy4vZGVtb0FQSSdcbmltcG9ydCAqIGFzIGhhc2ggZnJvbSAnb2JqZWN0LWhhc2gnXG5pbXBvcnQgeyBtYWtlVXJsLCB0b1BheWxvYWQgfSBmcm9tICcuLi9ldGMvYXBpSGVscGVycydcbmltcG9ydCB7IFVSTEhhbmRsZXIgfSBmcm9tICcuLi9ldGMvVVJMSGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBlbXB0eVRva2VuRGlzcGxheSA9IG5ldyBUb2tlbkRpc3BsYXkoKVxuXG5jb25zdCBiYXNldXJsID0gVVJMSGFuZGxlci5iYXNpY1VSTCgpXG5cbi8qKlxuICogQSByZXdyaXRlIG9mIGBkMy1mZXRjaGAncyBgZDMuanNvbmAgY2FsbGJhY2suIElmIGFuIGFwaSBjYWxsIGZhaWxzLCBtYWtlIGEgYmFja3VwIGNhbGwgdG8gc3BlY2lmaWVkIHVybCBhbmQgcGF5bG9hZCwgaWYgc3BlY2lmaWVkLlxuICogXG4gKiBAcGFyYW0gcmVzcG9uc2UgT2JqZWN0IGV4cGVjdGVkIGF0IHRpbWUgb2YgY2FsbGJhY2tcbiAqIEBwYXJhbSBiYWNrdXBVcmwgQmFja3VwIHVybCBpbiB0aGUgZXZlbnQgb2YgZmFpbFxuICogQHBhcmFtIGJhY2t1cFBheWxvYWQgQmFja3VwIHBheWxvYWQgaWYgbWFraW5nIGEgcG9zdCByZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIHJlc3BvbnNlSnNvbihyZXNwb25zZSwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGlmIChiYWNrdXBVcmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVEFUSUMgRklMRSBOT1QgRk9VTkRcIik7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYmFja3VwVXJsLCBiYWNrdXBQYXlsb2FkKS50aGVuKHJlc3BvbnNlSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxufVxuXG4vKipcbiAqIENoZWNrIGZpcnN0IGlmIHRoZSBpbmZvcm1hdGlvbiBiZWluZyBzZW50IGV4aXN0cyBpbiBhIHN0YXRpYyBkZW1vIGZpbGUuIElmIGl0IGRvZXMsIHNlbmQgdGhhdC4gT3RoZXJ3aXNlLCBtYWtlIGEgbm9ybWFsIGNhbGwgdG8gdGhlIHNlcnZlci5cbiAqIFxuICogQHBhcmFtIHRvU2VuZCBUaGUgcGFja2V0IG9mIGluZm9ybWF0aW9uIHRvIHNlbmQgdG8gYW4gQVBJIGVuZHBvaW50XG4gKiBAcGFyYW0gYmFja3VwVXJsIEJhY2t1cCB1cmwgaW4gdGhlIGV2ZW50IHRoYXQgdGhlIGRlbW8gZmlsZSBpcyBub3QgZm91bmRcbiAqIEBwYXJhbSBiYWNrdXBQYXlsb2FkIEJhY2t1cCBwYXlsb2FkIGlmIGRlbW8gZmlsZSBub3QgZm91bmQsIGZvciBQT1NUIHJlcXVlc3RzIG9ubHlcbiAqL1xuZnVuY3Rpb24gY2hlY2tEZW1vQVBJKHRvU2VuZCwgYmFja3VwVXJsID0gbnVsbCwgYmFja3VwUGF5bG9hZCA9IG51bGwpIHtcbiAgICBjb25zdCBoc2ggPSBoYXNoLnNoYTEodG9TZW5kKTtcbiAgICBjb25zb2xlLmxvZyhcIkNIRUNLSU5HIERFTU9BUEk6IFwiICsgaHNoKTtcbiAgICBpZiAoRGVtb0FQSS5oYXNPd25Qcm9wZXJ0eShoc2gpKSB7XG4gICAgICAgIC8vIFJlbGllcyBvbiBhIHN5bWJvbGljIGxpbmsgYmVpbmcgcHJlc2VudCBpbiB0aGUgZGlzdCBmb2xkZXIgdG8gdGhlIGRlbW8gZm9sZGVyXG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi9kZW1vLycgKyBEZW1vQVBJW2hzaF1cbiAgICAgICAgY29uc29sZS5sb2coXCJUUllJTkcgVE8gU0VORElORyBTVEFUSUM6IFwiLCBwYXRoKTtcbiAgICAgICAgY29uc3QgZm9sbG93ID0gKHJlc3BvbnNlKSA9PiByZXNwb25zZUpzb24ocmVzcG9uc2UsIGJhY2t1cFVybCwgYmFja3VwUGF5bG9hZClcbiAgICAgICAgcmV0dXJuIGZldGNoKHBhdGgpLnRoZW4oZm9sbG93KVxuICAgIH1cbiAgICByZXR1cm4gZDMuanNvbihiYWNrdXBVcmwsIGJhY2t1cFBheWxvYWQpXG59XG5cblxuZXhwb3J0IGNsYXNzIEFQSSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VVUkw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVSTCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVUkwgPSBiYXNldXJsICsgJy9hcGknO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kZWxEZXRhaWxzKG1vZGVsOiBzdHJpbmcsIGhhc2hPYmo6IHt9IHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHRwLk1vZGVsSW5mbz4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgXCIvZ2V0LW1vZGVsLWRldGFpbHNcIiwgdG9TZW5kKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxuXG4gICAgZ2V0TWV0YUF0dGVudGlvbnMobW9kZWw6IHN0cmluZywgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8dHAuQXR0ZW50aW9uUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgc2VudGVuY2U6IHNlbnRlbmNlLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyBcIi9hdHRlbmQrbWV0YVwiLCB0b1NlbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmpcbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGRpc3BsYXkgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIHRoYXQgd2FzIGFscmVhZHkgcGFyc2VkIGZyb20gdGhlIHBhc3NlZCBzZW50ZW5jZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYSBUaGUgZGlzcGxheWVkIHRva2VucyBpbiB0aGUgY29sdW1ucyBcbiAgICAgKiBAcGFyYW0gc2VudGVuY2VBIFRoZSBvcmlnaW5hbCBzZW50ZW5jZSB0aGF0IGxlZCB0byB0aGUgdG9rZW5pemVkIGluZm9ybWF0aW9uIGluIGBhYFxuICAgICAqIEBwYXJhbSBsYXllciBXaGljaCBsYXllciB0byBzZWFyY2ggYXRcbiAgICAgKiBAcGFyYW0gaGFzaE9iaiBJZiBub3QgbnVsbCwgc3RvcmUgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSByZXNwb25zZXMgaW50byB0aGUgcGFzc2VkIG9iamVjdC4gVXNlZCBmb3IgY3JlYXRpbmcgZGVtb3MuXG4gICAgICovXG4gICAgdXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbDogc3RyaW5nLCB0b2tlbnM6IFRva2VuRGlzcGxheSwgc2VudGVuY2U6IHN0cmluZywgbGF5ZXI6IG51bWJlciwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8dHAuQXR0ZW50aW9uUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgdG9rZW5zOiBSLm1hcChSLnByb3AoJ3RleHQnKSwgdG9rZW5zLnRva2VuRGF0YSksXG4gICAgICAgICAgICBzZW50ZW5jZTogc2VudGVuY2UsXG5cbiAgICAgICAgICAgIC8vIEVtcHR5IG1hc2tzIG5lZWQgdG8gYmUgc2VudCBhcyBhIG51bWJlciwgdW5mb3J0dW5hdGVseS4gQ2hvb3NpbmcgLTEgZm9yIHRoaXNcbiAgICAgICAgICAgIG1hc2s6IHRva2Vucy5tYXNrSW5kcy5sZW5ndGggPyB0b2tlbnMubWFza0luZHMgOiBbLTFdLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gbWFrZVVybCh0aGlzLmJhc2VVUkwgKyAnL3VwZGF0ZS1tYXNrJyk7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0b1BheWxvYWQodG9TZW5kKVxuXG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQWRkIGhhc2ggYW5kIHZhbHVlIHRvIGhhc2hPYmogZm9yIGRlbW8gcHVycG9zZXNcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCwgcGF5bG9hZCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIFBPU1QgXCIgKyB1cmwsIHBheWxvYWQpO1xuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwsIHBheWxvYWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGVtYmVkZGluZyBFbWJlZGRpbmcgb2YgdGhlIHdvcmRcbiAgICAgKiBAcGFyYW0gbGF5ZXIgSW4gdGhlIGwndGggbGF5ZXJcbiAgICAgKiBAcGFyYW0gayBob3cgbWFueSByZXN1bHRzIHRvIHJldHJpZXZlXG4gICAgICovXG4gICAgZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGVtYmVkZGluZzogbnVtYmVyW10sIGxheWVyOiBudW1iZXIsIGhlYWRzOiBudW1iZXJbXSwgayA9IDEwLCBoYXNoT2JqOiB7fSB8IG51bGwgPSBudWxsKTogUHJvbWlzZTx0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSB8IG51bWJlcj4ge1xuICAgICAgICBjb25zdCB0b1NlbmQgPSB7XG4gICAgICAgICAgICBtb2RlbDogbW9kZWwsXG4gICAgICAgICAgICBjb3JwdXM6IGNvcnB1cyxcbiAgICAgICAgICAgIGVtYmVkZGluZzogZW1iZWRkaW5nLFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgaGVhZHM6IGhlYWRzLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy9rLW5lYXJlc3QtZW1iZWRkaW5ncycsIHRvU2VuZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIEdFVCBcIiArIHVybCk7XG5cbiAgICAgICAgaWYgKGhhc2hPYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaGFzaC5zaGExKHRvU2VuZClcbiAgICAgICAgICAgIGQzLmpzb24odXJsKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGhhc2hPYmpba2V5XSA9IHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrRGVtb0FQSSh0b1NlbmQsIHVybClcbiAgICB9XG5cbiAgICBnZXROZWFyZXN0Q29udGV4dHMobW9kZWw6IHN0cmluZywgY29ycHVzOiBzdHJpbmcsIGNvbnRleHQ6IG51bWJlcltdLCBsYXllcjogbnVtYmVyLCBoZWFkczogbnVtYmVyW10sIGsgPSAxMCwgaGFzaE9iajoge30gfCBudWxsID0gbnVsbCk6IFByb21pc2U8dHAuRmFpc3NTZWFyY2hSZXN1bHRzW10gfCBudW1iZXI+IHtcbiAgICAgICAgY29uc3QgdG9TZW5kID0ge1xuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgY29ycHVzOiBjb3JwdXMsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgaGVhZHM6IGhlYWRzLFxuICAgICAgICAgICAgazogayxcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodGhpcy5iYXNlVVJMICsgJy9rLW5lYXJlc3QtY29udGV4dHMnLCB0b1NlbmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBHRVQgXCIgKyB1cmwpO1xuXG4gICAgICAgIGlmIChoYXNoT2JqICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGhhc2guc2hhMSh0b1NlbmQpXG4gICAgICAgICAgICBkMy5qc29uKHVybCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBoYXNoT2JqW2tleV0gPSByO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVja0RlbW9BUEkodG9TZW5kLCB1cmwpXG4gICAgfVxufTtcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgeF8gZnJvbSAnLi4vZXRjL19Ub29scydcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5cbi8qKlxuICogTm90ZXM6XG4gKiBcbiAqIC0gQWxzbyBlbmNhcHN1bGF0ZSB0aGUgQ0xTL1NFUCBpbmZvIHZzLiBubyBDTFMvU0VQIGluZm9cbiAqIC0gV2hlbiBsYXllciBmb3JtYXQgY2hhbmdlcyBmcm9tIGxpc3QsIGRyb3AgdGhlIGluZGV4IGludG8gY29uZi5sYXllclxuICovXG5cbmNvbnN0IGJwZVRva2VucyA9IFtcIltDTFNdXCIsIFwiW1NFUF1cIiwgXCI8cz5cIiwgXCI8L3M+XCJdXG5jb25zdCBmaW5kQmFkSW5kZXhlcyA9ICh4OiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pID0+IHhfLmZpbmRBbGxJbmRleGVzKHgubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGcm9tTWV0YVJlc3BvbnNlKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICBjb25zdCBrZXkgPSAnYWEnIC8vIENoYW5nZSB0aGlzIGlmIGJhY2tlbmQgcmVzcG9uc2UgY2hhbmdlcyB0byBiZSBzaW1wbGVyXG4gICAgY29uc3QgY3VyclBhaXIgPSByW2tleV1cbiAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgY29uc3QgcmlnaHQgPSA8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPmN1cnJQYWlyLnJpZ2h0XG4gICAgY29uc3QgbGVmdFplcm8gPSB4Xy5maW5kQWxsSW5kZXhlcyhsZWZ0Lm1hcCh0ID0+IHQudGV4dCksIChhKSA9PiBfLmluY2x1ZGVzKGJwZVRva2VucywgYSkpXG4gICAgY29uc3QgcmlnaHRaZXJvID0geF8uZmluZEFsbEluZGV4ZXMocmlnaHQubWFwKHQgPT4gdC50ZXh0KSwgKGEpID0+IF8uaW5jbHVkZXMoYnBlVG9rZW5zLCBhKSlcbiAgICByZXR1cm4gbmV3IEF0dGVudGlvbldyYXBwZXIoY3VyclBhaXIuYXR0LCBbbGVmdFplcm8sIHJpZ2h0WmVyb10sIGlzWmVyb2VkKVxufVxuXG5leHBvcnQgY2xhc3MgQXR0ZW50aW9uV3JhcHBlciB7XG4gICAgcHJvdGVjdGVkIF9hdHQ6bnVtYmVyW11bXVtdXG4gICAgcHJvdGVjdGVkIF9hdHRUZW5zb3I6dGYuVGVuc29yM0RcbiAgICBwcm90ZWN0ZWQgX3plcm9lZEF0dFRlbnNvcjp0Zi5UZW5zb3IzRFxuXG4gICAgYmFkVG9rczpbbnVtYmVyW10sIG51bWJlcltdXSAvLyBJbmRleGVzIGZvciB0aGUgQ0xTIGFuZCBTRVAgdG9rZW5zXG4gICAgaXNaZXJvZWQ6IGJvb2xlYW5cbiAgICBuTGF5ZXJzID0gMTI7XG4gICAgbkhlYWRzID0gMTI7XG5cbiAgICBjb25zdHJ1Y3RvcihhdHQ6bnVtYmVyW11bXVtdLCBiYWRUb2tzOltudW1iZXJbXSwgbnVtYmVyW11dPVtbXSxbXV0sIGlzWmVyb2VkPXRydWUpe1xuICAgICAgICB0aGlzLmluaXQoYXR0LCBiYWRUb2tzLCBpc1plcm9lZClcbiAgICB9XG5cbiAgICBpbml0KGF0dDpudW1iZXJbXVtdW10sIGJhZFRva3M6W251bWJlcltdLCBudW1iZXJbXV09W1tdLFtdXSwgaXNaZXJvZWQpIHtcbiAgICAgICAgdGhpcy5pc1plcm9lZCA9IGlzWmVyb2VkXG4gICAgICAgIHRoaXMuX2F0dCA9IGF0dDtcbiAgICAgICAgdGhpcy5femVyb2VkQXR0VGVuc29yID0gemVyb1Jvd0NvbCh0Zi50ZW5zb3IzZChhdHQpLCBiYWRUb2tzWzBdLCBiYWRUb2tzWzFdKVxuICAgICAgICB0aGlzLl9hdHRUZW5zb3IgPSB0Zi50ZW5zb3IzZChhdHQpIC8vIElmIEkgcHV0IHRoaXMgZmlyc3QsIGJ1ZmZlciBtb2RpZmljYXRpb25zIGNoYW5nZSB0aGlzIHRvby5cbiAgICAgICAgdGhpcy5iYWRUb2tzID0gYmFkVG9rcztcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tTm9ybWFsKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2UsIGlzWmVyb2VkKXtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2FhJyAvLyBDaGFuZ2UgdGhpcyBpZiBiYWNrZW5kIHJlc3BvbnNlIGNoYW5nZXMgdG8gYmUgc2ltcGxlclxuICAgICAgICBjb25zdCBjdXJyUGFpciA9IHJba2V5XVxuICAgICAgICBjb25zdCBsZWZ0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5sZWZ0XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gPHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXT5jdXJyUGFpci5yaWdodFxuXG4gICAgICAgIGNvbnN0IGxlZnRaZXJvID0gZmluZEJhZEluZGV4ZXMobGVmdClcbiAgICAgICAgY29uc3QgcmlnaHRaZXJvID0gZmluZEJhZEluZGV4ZXMocmlnaHQpXG4gICAgICAgIHRoaXMuaW5pdChjdXJyUGFpci5hdHQsIFtsZWZ0WmVybywgcmlnaHRaZXJvXSwgaXNaZXJvZWQpXG4gICAgfVxuXG4gICAgZ2V0IGF0dFRlbnNvcigpIHtcbiAgICAgICAgY29uc3QgdGVucyA9IHRoaXMuaXNaZXJvZWQgPyB0aGlzLl96ZXJvZWRBdHRUZW5zb3IgOiB0aGlzLl9hdHRUZW5zb3JcbiAgICAgICAgcmV0dXJuIHRlbnNcbiAgICB9XG5cbiAgICBnZXQgYXR0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRUZW5zb3IuYXJyYXlTeW5jKClcbiAgICB9XG5cbiAgICB6ZXJvZWQoKTogYm9vbGVhblxuICAgIHplcm9lZCh2YWw6Ym9vbGVhbik6IHRoaXNcbiAgICB6ZXJvZWQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLmlzWmVyb2VkXG4gICAgICAgIHRoaXMuaXNaZXJvZWQgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVaZXJvaW5nKCkge1xuICAgICAgICB0aGlzLnplcm9lZCghdGhpcy56ZXJvZWQoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2J5SGVhZHMoaGVhZHM6bnVtYmVyW10pOnRmLlRlbnNvcjJEIHtcbiAgICAgICAgaWYgKGhlYWRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGYuemVyb3NMaWtlKHRoaXMuX2J5SGVhZCgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihoZWFkcywgMCkuc3VtKDApKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBfYnlIZWFkKGhlYWQ6bnVtYmVyKTp0Zi5UZW5zb3IyRCB7XG4gICAgICAgIHJldHVybiAoPHRmLlRlbnNvcjJEPnRoaXMuYXR0VGVuc29yLmdhdGhlcihbaGVhZF0sIDApLnNxdWVlemUoWzBdKSlcbiAgICB9XG5cbiAgICBieUhlYWRzKGhlYWRzOm51bWJlcltdKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZHMoaGVhZHMpLmFycmF5U3luYygpXG4gICAgfVxuXG4gICAgYnlIZWFkKGhlYWQ6bnVtYmVyKTpudW1iZXJbXVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J5SGVhZChoZWFkKS5hcnJheVN5bmMoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gemVyb1Jvd0NvbCh0ZW5zOnRmLlRlbnNvcjNELCByb3dzOm51bWJlcltdLCBjb2xzOm51bWJlcltdKTp0Zi5UZW5zb3IzRCB7XG4gICAgbGV0IG91dFRlbnMgPSB0ZW5zLmNsb25lKClcbiAgICBsZXQgYXRiID0gb3V0VGVucy5idWZmZXJTeW5jKClcbiAgICBfLnJhbmdlKGF0Yi5zaGFwZVswXSkuZm9yRWFjaCgoaGVhZCkgPT4ge1xuICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsxXSkuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0IHJvd3MgdG8gMFxuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMocm93cywgaSkpIHtcbiAgICAgICAgICAgICAgICBfLnJhbmdlKGF0Yi5zaGFwZVsyXSkuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdGIuc2V0KDAsIGhlYWQsIGksIGopXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGNvbHMgdG8gMFxuICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMl0pLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhjb2xzLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgXy5yYW5nZShhdGIuc2hhcGVbMV0pLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0Yi5zZXQoMCwgaGVhZCwgaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBvdXRUZW5zXG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgJ2QzLWFycmF5J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7U3BhY3lJbmZvfSBmcm9tICcuLi9ldGMvU3BhY3lJbmZvJ1xuaW1wb3J0IHtpbml0WmVyb30gZnJvbSAnLi4vZXRjL3hyYW1kYSdcblxuLy8gSWYgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCBkb24ndCB0cnkgdG8gbWFrZSBsb3dlcmNhc2VcbmNvbnN0IG1ha2VTdHJpbmdMb3dlciA9IFIuaWZFbHNlKFIuaXMoU3RyaW5nKSwgUi50b0xvd2VyLCBSLmlkZW50aXR5KVxuXG5mdW5jdGlvbiBhcmdNYXgoYXJyYXk6bnVtYmVyW10pIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGFycmF5LCAoeCwgaSkgPT4gW3gsIGldKS5yZWR1Y2UoKHIsIGEpID0+IChhWzBdID4gclswXSA/IGEgOiByKSlbMV07XG59XG5cbmNvbnN0IGdldE1heFRva2VuID0gKGQ6IHRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnNbYXJnTWF4KGQubWF0Y2hlZF9hdHQub3V0LmF0dCldXG5cblxuZXhwb3J0IGNsYXNzIEZhaXNzU2VhcmNoUmVzdWx0V3JhcHBlciB7XG4gICAgZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW11cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcG9zaXRpb24gaW5mbyBpbnRlcnByZXRhYmxlIGJ5IHRoZSBoaXN0b2dyYW1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gY291bnRPYmogUmVwcmVzZW50cyB0aGUgaW5mb3JybWF0aW9uIHRvIGJlIGRpc3BsYXllZCBieSB0aGUgaGlzdG9ncmFtXG4gICAgICovXG4gICAgY291bnRQb3NJbmZvKCkge1xuICAgICAgICBjb25zdCBhdHRPZmZzZXRzID0gdGhpcy5kYXRhLm1hcCgoZCxpKSA9PiArZC5tYXRjaGVkX2F0dC5vdXQub2Zmc2V0X3RvX21heClcblxuICAgICAgICBjb25zdCBjdE9iaiA9IHtcbiAgICAgICAgICAgIG9mZnNldDogaW5pdFplcm8oYXR0T2Zmc2V0cylcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dE9mZnNldHMuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGN0T2JqKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgY3RPYmpba11bdl0gKz0gMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY3RPYmpcbiAgICB9XG5cbiAgICBjb3VudE1heEF0dEtleXMoaW5kZXhPZmZzZXQ9MCkge1xuICAgICAgICAvLyBUaGUga2V5cyBpbiB0aGUgYmVsb3cgb2JqZWN0IGRpY3RhdGUgd2hhdCB3ZSBjb3VudFxuICAgICAgICBjb25zdCBjb3VudE9iaiA9IHtcbiAgICAgICAgICAgIHBvczogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuZGVwKSxcbiAgICAgICAgICAgIGlzX2VudDogaW5pdFplcm8oU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMuaXNfZW50KSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF4TWF0Y2ggPSBnZXRNYXhUb2tlbihkKVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb3VudE9iaikuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBtYWtlU3RyaW5nTG93ZXIoU3RyaW5nKG1heE1hdGNoW2tdKSlcbiAgICAgICAgICAgICAgICBjb3VudE9ialtrXVt2YWxdICs9IDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IG5ld0NvdW50T2JqID0gT2JqZWN0LmFzc2lnbihjb3VudE9iaiwgdGhpcy5jb3VudFBvc0luZm8oKSlcbiAgICAgICAgcmV0dXJuIG5ld0NvdW50T2JqXG4gICAgfVxuXG4gICAgY291bnRNYXRjaGVkS2V5cyhpbmRleE9mZnNldD0wKSB7XG4gICAgICAgIC8vIFRoZSBrZXlzIGluIHRoZSBiZWxvdyBvYmplY3QgZGljdGF0ZSB3aGF0IHdlIGNvdW50XG4gICAgICAgIGNvbnN0IGNvdW50T2JqID0ge1xuICAgICAgICAgICAgcG9zOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICAgICAgZGVwOiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiBpbml0WmVybyhTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5pc19lbnQpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGQudG9rZW5zW2QuaW5kZXggKyBpbmRleE9mZnNldF1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMoY291bnRPYmopLmZvckVhY2goayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWFrZVN0cmluZ0xvd2VyKFN0cmluZyhtYXRjaFtrXSkpXG4gICAgICAgICAgICAgICAgY291bnRPYmpba11bdmFsXSArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY291bnRPYmpcbiAgICB9XG5cbiAgICBnZXRNYXRjaGVkSGlzdG9ncmFtKGluZGV4T2Zmc2V0PTApIHtcbiAgICAgICAgY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudE1hdGNoZWRLZXlzKGluZGV4T2Zmc2V0KVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIHRvdGFsSGlzdClcblxuICAgICAgICByZXR1cm4gbm9uWmVyb1xuICAgIH1cblxuICAgIGdldE1heEF0dEhpc3RvZ3JhbSgpIHtcbiAgICAgICAgLy8gY29uc3QgdG90YWxIaXN0ID0gdGhpcy5jb3VudFBvc0luZm8oKVxuICAgICAgICBjb25zdCBuZXdIaXN0ID0gdGhpcy5jb3VudE1heEF0dEtleXMoKVxuICAgICAgICBjb25zdCBmaWx0ZXJaZXJvcyA9ICh2YWwsIGtleSkgPT4gdmFsICE9IDA7XG4gICAgICAgIGNvbnN0IG5vblplcm8gPSBSLm1hcChSLnBpY2tCeShmaWx0ZXJaZXJvcyksIG5ld0hpc3QpXG5cbiAgICAgICAgcmV0dXJuIG5vblplcm9cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgeF8gZnJvbSAnLi4vZXRjL19Ub29scydcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0ICogYXMgdHAgZnJvbSAnLi4vZXRjL3R5cGVzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuLyoqXG4gKiBUaGUgb3JpZ2luYWwgdG9rZW5zLCBhbmQgdGhlIGluZGV4ZXMgdGhhdCBuZWVkIHRvIGJlIG1hc2tlZFxuICovXG4gY29uc3QgZW1wdHlGdWxsUmVzcG9uc2U6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSA9IFt7XG4gICAgIHRleHQ6ICdbU0VQXScsXG4gICAgIGVtYmVkZGluZ3M6IFtdLFxuICAgICBjb250ZXh0czogW10sXG4gICAgIGJwZV90b2tlbjogJycsXG4gICAgIGJwZV9wb3M6ICcnLFxuICAgICBicGVfZGVwOiAnJyxcbiAgICAgYnBlX2lzX2VudDogbnVsbCxcbiB9XVxuXG5leHBvcnQgY2xhc3MgVG9rZW5EaXNwbGF5ICB7XG4gICAgdG9rZW5EYXRhOnRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXVxuICAgIG1hc2tJbmRzOm51bWJlcltdXG5cbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnM9ZW1wdHlGdWxsUmVzcG9uc2UsIG1hc2tJbmRzPVtdKXtcbiAgICAgICAgdGhpcy50b2tlbkRhdGEgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMubWFza0luZHMgPSBtYXNrSW5kcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoIGlkeCB0byB0aGUgbWFzayBpZHggbGlzdCBpbiBvcmRlciBmcm9tIHNtYWxsZXN0IHRvIGxhcmdlc3RcbiAgICAgKi9cbiAgICBtYXNrKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIHhfLm9yZGVyZWRJbnNlcnRfKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZhbH0gYWxyZWFkeSBpbiBtYXNrSW5kcyFgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFza0luZHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKHZhbCkge1xuICAgICAgICBjb25zdCBjdXJySW5kID0gXy5pbmRleE9mKHRoaXMubWFza0luZHMsIHZhbClcbiAgICAgICAgaWYgKGN1cnJJbmQgPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNYXNraW5nICR7dmFsfWApO1xuICAgICAgICAgICAgdGhpcy5tYXNrKHZhbClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbm1hc2tpbmcgJHt2YWx9YCk7XG4gICAgICAgICAgICB0aGlzLnVubWFzayh2YWwpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bm1hc2sodmFsKSB7XG4gICAgICAgIF8ucHVsbCh0aGlzLm1hc2tJbmRzLCB2YWwpO1xuICAgIH1cblxuICAgIHJlc2V0TWFzaygpIHtcbiAgICAgICAgdGhpcy5tYXNrSW5kcyA9IFtdO1xuICAgIH1cblxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5EYXRhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25jYXQob3RoZXI6IFRva2VuRGlzcGxheSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSBfLmNvbmNhdCh0aGlzLnRva2VuRGF0YSwgb3RoZXIudG9rZW5EYXRhKTtcbiAgICAgICAgY29uc3QgbmV3TWFzayA9IF8uY29uY2F0KHRoaXMubWFza0luZHMsIG90aGVyLm1hc2tJbmRzLm1hcCh4ID0+IHggKyB0aGlzLmxlbmd0aCgpKSk7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW5EaXNwbGF5KG5ld1Rva2VucywgbmV3TWFzayk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5XcmFwcGVyIHtcbiAgICBhOiBUb2tlbkRpc3BsYXlcblxuICAgIGNvbnN0cnVjdG9yKHI6dHAuQXR0ZW50aW9uUmVzcG9uc2Upe1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXNwb25zZShyKTtcbiAgICB9XG5cbiAgICB1cGRhdGVGcm9tUmVzcG9uc2Uocjp0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCB0b2tlbnNBID0gci5hYS5sZWZ0O1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21Db21wb25lbnRzKHRva2Vuc0EsIFtdKVxuICAgIH1cblxuICAgIHVwZGF0ZUZyb21Db21wb25lbnRzKGE6dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdLCBtYXNrQTpudW1iZXJbXSl7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBUb2tlbkRpc3BsYXkoYSwgbWFza0EpXG4gICAgfVxuXG4gICAgdXBkYXRlRW1iZWRkaW5ncyhyOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICBjb25zdCBuZXdUb2tlbnMgPSByLmFhLmxlZnRcblxuICAgICAgICBjb25zdCBwYWlycyA9IFIuemlwKHRoaXMuYS50b2tlbkRhdGEsIG5ld1Rva2VucylcblxuICAgICAgICBwYWlycy5mb3JFYWNoKChkLCBpKSA9PiB7XG4gICAgICAgICAgICBkWzBdLmVtYmVkZGluZ3MgPSBkWzFdLmVtYmVkZGluZ3NcbiAgICAgICAgICAgIGRbMF0uY29udGV4dHMgPSBkWzFdLmNvbnRleHRzXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXNrIHRoZSBhcHByb3ByaWF0ZSBzZW50ZW5jZSBhdCB0aGUgaW5kZXggaW5kaWNhdGVkXG4gICAgICovXG4gICAgbWFzayhzSUQ6dHAuVG9rZW5PcHRpb25zLCBpZHg6bnVtYmVyKXtcbiAgICAgICAgdGhpc1tzSURdLm1hc2soaWR4KVxuICAgICAgICBjb25zdCBvcHRzID0gW1wiYVwiLCBcImJcIl1cbiAgICAgICAgY29uc3QgTmEgPSB0aGlzLmEubGVuZ3RoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lkZVRvTGV0dGVyKHNpZGU6dHAuU2lkZU9wdGlvbnMsIGF0eXBlOnRwLlNlbnRlbmNlT3B0aW9ucyl7XG4gICAgLy8gY29uc3QgYXR5cGUgPSBjb25mLmF0dFR5cGU7XG4gICAgaWYgKGF0eXBlID09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiYWxsXCJcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gc2lkZSA9PSBcImxlZnRcIiA/IGF0eXBlWzBdIDogYXR5cGVbMV0gLy8gTm8gdHlwZSBjaGVja2luZz9cbiAgICByZXR1cm4gb3V0XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIlxuaW1wb3J0ICdkMy1zZWxlY3Rpb24tbXVsdGknXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJ1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWRyB7XG4gICAgc3RhdGljIHRyYW5zbGF0ZSh7eCwgeX0pOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIHggKyBcIixcIiArIHkgKyBcIilcIlxuICAgIH1cblxuICAgIHN0YXRpYyByb3RhdGUoZGVnKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gYHJvdGF0ZSgke2RlZ30pYFxuICAgIH1cblxuICAgIHN0YXRpYyBncm91cChwYXJlbnQsIGNsYXNzZXMsIHBvcyA9IHt4OiAwLCB5OiAwfSkge1xuICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZCgnZycpLmF0dHJzKHtcbiAgICAgICAgICAgIGNsYXNzOiBjbGFzc2VzLFxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogU1ZHLnRyYW5zbGF0ZShwb3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNZWFzdXJlbWVudHMge1xuXG4gICAgcHJpdmF0ZSBtZWFzdXJlRWxlbWVudDogZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihiYXNlRWxlbWVudCwgY2xhc3NlcyA9ICcnKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQgPSBiYXNlRWxlbWVudC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHJzKHt4OiAwLCB5OiAtMjAsIGNsYXNzOiBjbGFzc2VzfSlcblxuICAgIH1cblxuICAgIHRleHRMZW5ndGgodGV4dCwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQuYXR0cignc3R5bGUnLCBzdHlsZSk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgY29uc3QgdGwgPSAoPFNWR1RleHRFbGVtZW50PiB0aGlzLm1lYXN1cmVFbGVtZW50Lm5vZGUoKSkuZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoKCk7XG4gICAgICAgIHRoaXMubWVhc3VyZUVsZW1lbnQudGV4dCgnJyk7XG5cbiAgICAgICAgcmV0dXJuIHRsO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgaGVuIG9uIDUvMTUvMTcuXG4gKiBNb2RpZmllZCBieSBob28gb24gNC8xNi8xOS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50SGFuZGxlciB7XG5cbiAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgIGV2ZW50TGlzdGVuZXJzOiBvYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXG4gICAgfVxuXG4gICAgYmluZChldmVudE5hbWVzOiBzdHJpbmcsIGV2ZW50RnVuY3Rpb246IEZ1bmN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMuc3BsaXQoJyAnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHtldmVudE5hbWUsIGV2ZW50RnVuY3Rpb259KTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RnVuY3Rpb25XcmFwID0gZSA9PiBldmVudEZ1bmN0aW9uKGUuZGV0YWlsLCBlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRGdW5jdGlvbldyYXAsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgZGV0YWlsOiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbH0pKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdHAgZnJvbSAnLi90eXBlcydcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Q09MT1JTMjAwfSBmcm9tICcuLi9ldGMvY29sb3JzJyBcblxuZXhwb3J0IGNsYXNzIFNwYWN5SW5mbyB7XG4gICAgY29sb3JTY2FsZTp0cC5Db2xvck1ldGFTY2FsZVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gdGhpcy5jcmVhdGVDb2xvclNjYWxlcygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBFbmdsaXNoTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFsncHVuY3QnLCAnc3ltJywgJ3gnLCAnYWRqJywgJ3ZlcmInLCAnY29uaicsICdudW0nLCAnZXQnLCAnYWR2JywgJ3gnLCAnYWRwJywgJ25vdW4nLCAncHJvcG4nLCAncGFydCcsICdwcm9uJywgJ3NwYWNlJywgJ2ludGonXSxcbiAgICAgICAgZGVwOiBbJ3Jvb3QnLCAnUk9PVCcsICdhY2wnLCAnYWNvbXAnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2FnZW50JywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXR0cicsICdhdXgnLCAnYXV4cGFzcycsICdjYXNlJywgJ2NjJywgJ2Njb21wJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgXG4gICAgICAgICdjc3VianBhc3MnLCAnZGF0aXZlJywgJ2RlcCcsICdkZXQnLCAnZG9iaicsICdleHBsJywgJ2ludGonLCAnbWFyaycsICdtZXRhJywgJ25lZycsICdubicsICdub3VubW9kJywgJ25wbW9kJywgJ25zdWJqJywgJ25zdWJqcGFzcycsICdudW1tb2QnLCAnb3ByZCcsIFxuICAgICAgICAnb2JqJywgJ29ibCcsICdwYXJhdGF4aXMnLCAncGNvbXAnLCAncG9iaicsICdwb3NzJywgJ3ByZWNvbmonLCAncHJlZGV0JywgJ3ByZXAnLCAncHJ0JywgJ3B1bmN0JywgJ3F1YW50bW9kJywgJ3JlbGNsJywgJ3Jvb3QnLCAneGNvbXAnLCAnbnBhZHZtb2QnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2Jzb2xldGUuIFJlcHJlc2VudHMgdGhlIGluZm9ybWF0aW9uIHRoYXQgaXMgaW5jbHVkZWQgd2hlbiB0cmFpbmVkIG9uIHRoZSB1bml2ZXJzYWwgY29ycHVzXG4gICAgICovXG4gICAgc3RhdGljIFVuaXZlcnNhbE1ldGFPcHRpb25zOiB0cC5NZXRhT3B0aW9ucyA9IHtcbiAgICAgICAgcG9zOiBbJ2FkaicsICdhZHAnLCAnYWR2JywgJ2F1eCcsICdjb25qJywgJ2Njb25qJywgJ2RldCcsICdpbnRqJywgJ25vdW4nLCAnbnVtJywgJ3BhcnQnLCAncHJvbicsICdwcm9wbicsICdwdW5jdCcsICdzY29uaicsICdzeW0nLCAndmVyYicsICd4JywgJ3NwYWNlJ10sXG4gICAgICAgIGRlcDogWydhY2wnLCAnYWR2Y2wnLCAnYWR2bW9kJywgJ2Ftb2QnLCAnYXBwb3MnLCAnYXV4JywgJ2Nhc2UnLCAnY2MnLCAnY2NvbXAnLCAnY2xmJywgJ2NvbXBvdW5kJywgJ2NvbmonLCAnY29wJywgJ2NzdWJqJywgJ2RlcCcsICdkZXQnLCAnZGlzY291cnNlJywgXG4gICAgICAgICAgICAgICAgJ2Rpc2xvY2F0ZWQnLCAnZXhwbCcsICdmaXhlZCcsICdmbGF0JywgJ2dvZXN3aXRoJywgJ2lvYmonLCAnbGlzdCcsICdtYXJrJywgJ25tb2QnLCAnbnN1YmonLCAnbnVtbW9kJywgJ29iaicsICdvYmwnLCAnb3JwaGFuJywgJ3BhcmF0YXhpcycsICdwdW5jdCcsICdyZXBhcmFuZHVtJywgXG4gICAgICAgICAgICAgICAgJ3Jvb3QnLCAndm9jYXRpdmUnLCAneGNvbXAnXSxcbiAgICAgICAgaXNfZW50OiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICBlbnRzOiBbJ3BlcnNvbicsICdub3JwJywgJ2ZhYycsICdvcmcnLCAnZ3BlJywgJ2xvYycsICdwcm9kdWN0JywgJ2V2ZW50JywgJ3dvcmtfb2ZfYXJ0JywgJ2xhdycsICdsYW5ndWFnZScsICdkYXRlJywgJ3RpbWUnLCAncGVyY2VudCcsICdtb25leScsICdxdWFudGl0eScsICdvcmRpbmFsJywgXG4gICAgICAgICAgICAgICAgJ2NhcmRpbmFsJ10sXG4gICAgfVxuXG4gICAgc3RhdGljIFRvdGFsTWV0YU9wdGlvbnM6IHRwLk1ldGFPcHRpb25zID0ge1xuICAgICAgICBwb3M6IFIudW5pb24oU3BhY3lJbmZvLkVuZ2xpc2hNZXRhT3B0aW9ucy5wb3MsIFNwYWN5SW5mby5Vbml2ZXJzYWxNZXRhT3B0aW9ucy5wb3MpLFxuICAgICAgICBkZXA6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuZGVwLFxuICAgICAgICBpc19lbnQ6IFNwYWN5SW5mby5FbmdsaXNoTWV0YU9wdGlvbnMuaXNfZW50LFxuICAgICAgICBlbnRzOiBTcGFjeUluZm8uRW5nbGlzaE1ldGFPcHRpb25zLmVudHMsXG4gICAgfVxuXG4gICAgY3JlYXRlQ29sb3JTY2FsZXMoKTogdHAuQ29sb3JNZXRhU2NhbGV7XG4gICAgICAgIGNvbnN0IHRvU2NhbGUgPSAoa2V5czogQXJyYXk8bnVtYmVyfHN0cmluZ3xib29sZWFuPikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0gUi56aXBPYmooUi5tYXAoU3RyaW5nLCBrZXlzKSwgQ09MT1JTMjAwLnNsaWNlKDAsIGtleXMubGVuZ3RoKSlcbiAgICAgICAgICAgIHJldHVybiBrID0+IFIucHJvcE9yKFwiYmxhY2tcIiwgaywgb2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbXlDb2xvcnMgPSB7XG4gICAgICAgICAgICBwb3M6IHRvU2NhbGUoU3BhY3lJbmZvLlRvdGFsTWV0YU9wdGlvbnMucG9zKSxcbiAgICAgICAgICAgIGRlcDogdG9TY2FsZShTcGFjeUluZm8uVG90YWxNZXRhT3B0aW9ucy5kZXApLFxuICAgICAgICAgICAgaXNfZW50OiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmlzX2VudCksXG4gICAgICAgICAgICBlbnRzOiB0b1NjYWxlKFNwYWN5SW5mby5Ub3RhbE1ldGFPcHRpb25zLmVudHMpLFxuICAgICAgICAgICAgb2Zmc2V0OiBkMy5zY2FsZU9yZGluYWwoKS5yYW5nZShbJ2JsYWNrJ10pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPHRwLkNvbG9yTWV0YVNjYWxlPjx1bmtub3duPm15Q29sb3JzXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3BhY3lDb2xvcnMgPSBuZXcgU3BhY3lJbmZvKCk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGhlbiBvbiA1LzE1LzE3LlxuICovXG5cbmV4cG9ydCBjbGFzcyBVUkxIYW5kbGVyIHtcblxuICAgIHN0YXRpYyBiYXNpY1VSTCgpIHtcbiAgICAgICAgY29uc3QgdXJsX3BhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMikuam9pbignLycpO1xuXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgKHVybF9wYXRoLmxlbmd0aCA/IHVybF9wYXRoIDogJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgYWxsIFVSTCBwYXJhbWV0ZXJzIGludG8gYSBtYXAuXG4gICAgICogQHJldHVybnMge01hcH0gdGhlIHVybCBwYXJhbWV0ZXJzIGFzIGEga2V5LXZhbHVlIHN0b3JlIChFUzYgbWFwKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgcGFyYW1ldGVycygpOiBvYmplY3Qge1xuICAgICAgICAvLyBBZGFwdGVkIGZyb206ICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwOTA1NTEvcGFyc2UtcXVlcnktc3RyaW5nLWluLWphdmFzY3JpcHRcbiAgICAgICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgY29uc3QgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhcnMsIFwiLS0tIHZhcnNcIik7XG5cbiAgICAgICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGlzSW50ID0geCA9PiAoL15bMC05XSskLykudGVzdCh4KTtcbiAgICAgICAgY29uc3QgaXNGbG9hdCA9IHggPT4gKC9eWzAtOV0rXFwuWzAtOV0qJC8pLnRlc3QoeCk7XG5cbiAgICAgICAgY29uc3QgdHlwZUNhc3QgPSB2YWwgPT4ge1xuICAgICAgICAgICAgaWYgKGlzSW50KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Zsb2F0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2U6XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXJzLmZvckVhY2godiA9PiB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRzID0gdi5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHNbMF0pO1xuICAgICAgICAgICAgICAgIGxldCByYXdfdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzWzFdKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSByYXdfdmFsdWUuc3RhcnRzV2l0aCgnLi4nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByYXdfdmFsdWUgPSByYXdfdmFsdWUuc2xpY2UoMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJhd192YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybFBhcmFtZXRlcnNba2V5XSA9IGlzQXJyYXkgPyBbXSA6ICcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbWV0ZXJzW2tleV0gPSByYXdfdmFsdWUuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWwgPT4gdHlwZUNhc3QodmFsKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1ldGVyc1trZXldID0gdHlwZUNhc3QocmF3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYW4gVVJMIHN0cmluZyBmcm9tIGEgbWFwIG9mIHVybCBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHt7fX0gdXJsUGFyYW1ldGVycyAtIHRoZSBtYXAgb2YgcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IC0gYW4gVVJJIHN0cmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyB1cmxTdHJpbmcodXJsUGFyYW1ldGVyczogb2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModXJsUGFyYW1ldGVycykuZm9yRWFjaChrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB1cmxQYXJhbWV0ZXJzW2tdO1xuICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHY7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHZhbHVlID0gJy4uJyArIHYuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIGF0dHIucHVzaChlbmNvZGVVUkkoayArICc9JyArIHZhbHVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGxldCByZXMgPSB1cmwuc3Vic3RyaW5nKHVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgICAgIGlmIChhdHRyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlcyArPSAnPycgKyBhdHRyLmpvaW4oJyYnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgdXBkYXRlVVJMUGFyYW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBhbnlbXSwgYWRkVG9Ccm93c2VySGlzdG9yeSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAgICAgY3VycmVudFBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIFVSTEhhbmRsZXIudXBkYXRlVXJsKGN1cnJlbnRQYXJhbXMsIGFkZFRvQnJvd3Nlckhpc3RvcnkpO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEdlbmVyYXRlcyBhIGtleS12YWx1ZSBtYXAgb2YgYWxsIFVSTCBwYXJhbXMgYW5kIHJlcGxhY2VzIHJlcGxhY2VLZXlzXG4gICAgLy8gICogQHBhcmFtIHVwZGF0ZUtleXNcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgdXBkYXRlVVJMUGFyYW1zKHVwZGF0ZUtleXMpIHtcbiAgICAvLyAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IFVSTEhhbmRsZXIucGFyYW1ldGVycztcbiAgICAvLyAgICAgT2JqZWN0LmtleXModXBkYXRlS2V5cykuZm9yRWFjaCgoaykgPT4gY3VycmVudFBhcmFtc1trXSA9IHVwZGF0ZUtleXNba10pXG4gICAgLy8gICAgIHJldHVybiBjdXJyZW50UGFyYW1zO1xuICAgIC8vIH1cblxuXG4gICAgc3RhdGljIHVwZGF0ZVVybCh1cmxQYXJhbWV0ZXJzOiBvYmplY3QsIGFkZFRvQnJvd3Nlckhpc3RvcnkgPSB0cnVlKSB7XG4gICAgICAgIGlmIChhZGRUb0Jyb3dzZXJIaXN0b3J5KSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodXJsUGFyYW1ldGVycywgJycsXG4gICAgICAgICAgICAgICAgVVJMSGFuZGxlci51cmxTdHJpbmcodXJsUGFyYW1ldGVycykpXG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IEJhc2VUeXBlIH0gZnJvbSBcImQzXCI7XG5cbi8qKlxuICogQ3JlYXRlZCBieSBoZW4gb24gNS8xNS8xNy5cbiAqIE1vZGlmeWVkIGJ5IGhvbyBvbiA0LzE2LzE5LlxuICovXG5sZXQgdGhlX3VuaXF1ZV9pZF9jb3VudGVyID0gMDtcblxuZXhwb3J0IGNsYXNzIFV0aWwge1xuICAgIHN0YXRpYyBzaW1wbGVVSWQoeyBwcmVmaXggPSAnJyB9KTogc3RyaW5nIHtcbiAgICAgICAgdGhlX3VuaXF1ZV9pZF9jb3VudGVyICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIHByZWZpeCArIHRoZV91bmlxdWVfaWRfY291bnRlcjtcbiAgICB9XG59XG5cbmV4cG9ydCB0eXBlIEQzU2VsID0gZDMuU2VsZWN0aW9uPGFueSwgYW55LCBhbnksIGFueT5cblxuLyoqXG4gKiBTZWxlY3Rpb24gdXRpbGl0eSBmdW5jdGlvbnMgc2hvdWxkIGJlIHN0YXRpYyBtZXRob2RzIGluIHRoZSBiZWxvdyBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgU2VsIHtcbiAgICBzdGF0aWMgc2V0U2VsVmlzaWJsZSA9ICh4OiBEM1NlbCkgPT4geC5hdHRyKFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIilcbiAgICBzdGF0aWMgc2V0U2VsSGlkZGVuID0gKHg6IEQzU2VsKSA9PiB4LmF0dHIoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gICAgc3RhdGljIHNldFZpc2libGUgPSAoeDogc3RyaW5nKSA9PiBTZWwuc2V0U2VsVmlzaWJsZShkMy5zZWxlY3RBbGwoeCkpXG4gICAgc3RhdGljIHNldEhpZGRlbiA9ICh4OiBzdHJpbmcpID0+IFNlbC5zZXRTZWxIaWRkZW4oZDMuc2VsZWN0QWxsKHgpKVxuICAgIHN0YXRpYyBoaWRlRWxlbWVudCA9IChoRTogRDNTZWwpID0+IGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZSd9KVxuICAgIHN0YXRpYyB1bmhpZGVFbGVtZW50ID0gKGhFOiBEM1NlbCkgPT4gaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogbnVsbH0pXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9vc2VPYmplY3Qge1xuICAgIFtrZXk6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBkM1M8VCBleHRlbmRzIEJhc2VUeXBlLCBVID0gYW55PiA9IGQzLlNlbGVjdGlvbjxULCBVLCBhbnksIGFueT4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuZnVuY3Rpb24gYXNjT3JkZXIobjEsIG4yKSB7XG4gICAgaWYgKG4xIDwgbjIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChuMSA+IG4yKSB7IFxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCB7ZmluZEFsbEluZGV4ZXMsIGluc2VydEF0Xywgb3JkZXJlZEluc2VydF8sIHNldDJTb3J0ZWRBcnJheX1cblxuLyoqXG4gKiBGaW5kIGFsbCBpbmRleGVzIHRoYXQgbWF0Y2ggYSBwYXJ0aWN1bGFyIHByZWRpY2F0ZVxuICovXG5mdW5jdGlvbiBmaW5kQWxsSW5kZXhlczxUPihhcnJheTpBcnJheTxUPiwgcHJlZGljYXRlOihhOlQpID0+IGJvb2xlYW4pOiBudW1iZXJbXSB7XG4gICAgbGV0IGZyb21JbmRleD0wO1xuICAgIGxldCByZXN1bHRzID0gW107XG5cbiAgICBsZXQgaSA9IF8uZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCk7XG4gICAgd2hpbGUgKGkgIT0gLTEpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGkpO1xuICAgICAgICBpID0gXy5maW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgaSsxKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xufTtcblxuZnVuY3Rpb24gaW5zZXJ0QXRfPFQ+KGFycmF5OkFycmF5PFQ+LCB2YWw6VCwgaW5kOm51bWJlcik6QXJyYXk8VD4ge1xuICAgIGFycmF5LnNwbGljZShpbmQsIDAsIHZhbCk7XG4gICAgcmV0dXJuIGFycmF5XG59XG5cbi8qKlxuICogQ29udmVydCBhIHNldCB0byBhbiBvcmRlcmVkIGFycmF5XG4gKi9cbmZ1bmN0aW9uIHNldDJTb3J0ZWRBcnJheTxUPihpbnB1dDpTZXQ8VD4pOkFycmF5PFQ+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShpbnB1dCkuc29ydChhc2NPcmRlcilcbn1cblxuLyoqXG4gKiBJbnNlcnQgYSB2YWx1ZSBpbnRvIGFycmF5IGluIHNvcnRlZCBvcmRlciBJTiBQTEFDRVxuICogXG4gKiBXQVJOSU5HOiBPbmx5IGhhbmRsZXMgbnVtYmVycywgc29ydGVkIGZyb20gbGVhc3QgdG8gZ3JlYXRlc3RcbiAqIC0gQXNzdW1lcyBhbHJlYWR5IHNvcnRlZCBhcnJheVxuICovXG5mdW5jdGlvbiBvcmRlcmVkSW5zZXJ0XzxUPihhcnJheTpBcnJheTxUPiwgdmFsOlQsIGNvbGRzdGFydD1mYWxzZSk6QXJyYXk8VD4ge1xuICAgIC8vIFJlc29ydCBhcnJheSBpZiBkZXNpcmVkXG4gICAgaWYgKGNvbGRzdGFydCkge1xuICAgICAgICBhcnJheS5zb3J0KGFzY09yZGVyKVxuICAgIH1cblxuICAgIGNvbnN0IGluZCA9IF8uc29ydGVkSW5kZXgoYXJyYXksIHZhbCk7XG4gICAgcmV0dXJuIGluc2VydEF0XyhhcnJheSwgdmFsLCBpbmQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmFuZG9tKGxlbjpudW1iZXIpe1xuICBjb25zdCBhOm51bWJlcltdID0gbmV3IEFycmF5KGxlbikuZmlsbCgwKVxuXG4gIHJldHVybiBhLm1hcCgoeCkgPT4ge3JldHVybiBfLnJhbmRvbSgtNSwgNSwgdHJ1ZSl9KVxufSIsIi8qKlxuICogQ29udmVydCBhIEpTIG9iamVjdCBpbnRvIEdFVCBVUkwgcGFyYW1ldGVyc1xuICogXG4gKiBAcGFyYW0gYmFzZSBCYXNlIFVSTCBhdG9wIHdoaWNoIHRvIGFkZCBHRVQgcGFyYW1ldGVyc1xuICogQHBhcmFtIHBhcmFtcyBPYmplY3QgdG8gaW5zZXJ0IGludG8gYSBVUkwgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVXJsKGJhc2U6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KTpzdHJpbmcge1xuICAgIGlmIChwYXJhbXMpe1xuICAgICAgICBsZXQgb3V0OiBzdHJpbmcgPSBiYXNlICsgXCI/XCI7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKCBrID0+IHtcbiAgICAgICAgICAgIG91dCArPSBrO1xuICAgICAgICAgICAgb3V0ICs9ICc9JztcbiAgICAgICAgICAgIG91dCArPSBwYXJhbXNba107XG4gICAgICAgICAgICBvdXQgKz0gXCImXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvdXQucmVwbGFjZSgvJiQvZywgXCJcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgaW5mb3JtYXRpb24gaW4gR0VUIHJlcXVlc3QgaW50byB0aGUgbWVzc2FnZSBmb3IgYSBQT1NUIHJlcXVlc3QgICAgXG4gKi9cbmV4cG9ydCBjb25zdCB0b1BheWxvYWQgPSAodG9TZW5kKSA9PiB7cmV0dXJuIHtcbiAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgYm9keTpKU09OLnN0cmluZ2lmeSh0b1NlbmQpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiXG4gICAgICAgIH1cbn19IiwiLy8gW1t2YWwsIGluZF0sIFt2YWwsIGluZF0uLi5dXG50eXBlIENvbXBGbkluZCA9IChhOm51bWJlcltdLCBiOm51bWJlcltdKSA9PiBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydEFycmF5IHtcbiAgICBhcnI6IG51bWJlcltdLFxuICAgIHNvcnRJbmRpY2VzOiBudW1iZXJbXSxcbn1cblxuLyoqXG4gKiBDb3BpZXMgYW5kIHNvcnRzIGFuIGFycmF5IHdoaWxlIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGluZGljZXMuIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHNvcnRpbmcgbWF4IC0+IG1pbi5cbiAqIFxuICogQHBhcmFtIGFyciAtIEFycmF5IHRvIGJlIGNvcGllZCBhbmQgc29ydGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0V2l0aEluZGljZXMoYXJyOm51bWJlcltdLCBmbj86Q29tcEZuSW5kKTogU29ydEFycmF5IHtcbiAgICAvLyBJZiBmbiBpcyBub3QgcHJvdmlkZWQsIGRlZmF1bHQgdG8gc29ydGluZyBieSBtYXggdmFsdWVcbiAgICBpZiAoIWZuKSB7XG4gICAgICAgIGZuID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGxlZnRbMF0gPiByaWdodFswXSA/IC0xIDogMTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBsZXQgb3V0OlNvcnRBcnJheSA9IHtcbiAgICAgICAgYXJyOiBbXSxcbiAgICAgICAgc29ydEluZGljZXM6IFtdXG4gICAgfTtcblxuICAgIGxldCBpZHhUcmFja2VyOiBudW1iZXJbXVtdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaWR4VHJhY2tlcltpXSA9IFthcnJbaV0sIGldO1xuICAgIH1cblxuICAgIGlkeFRyYWNrZXIuc29ydChmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgICAgcmV0dXJuIGxlZnRbMF0gPiByaWdodFswXSA/IC0xIDogMTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICBvdXQuc29ydEluZGljZXMucHVzaChpZHhUcmFja2VyW2pdWzFdKTtcbiAgICAgIG91dC5hcnJbal0gPSBpZHhUcmFja2VyW2pdWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH0iLCIvLyBDb2xvcnMgd2VyZSBnZW5lcmF0ZWQgdG8gYmUgYXMgdmlzdWFsbHkgZGlzdGluY3QgYXMgcG9zc2libGUgYnk6IGh0dHA6Ly9qbm5ubm4uZ2l0aHViLmlvL2NhdGVnb3J5LWNvbG9ycy1jb25zdHJhaW5lZC5odG1sXG5leHBvcnQgY29uc3QgQ09MT1JTMjAwID0gW1xuICAgIFwiIzM5NTdmZlwiLCBcIiNkM2ZlMTRcIiwgXCIjYzkwODBhXCIsIFwiI2ZlYzdmOFwiLCBcIiMwYjdiM2VcIiwgXCIjMGJmMGU5XCIsIFwiI2MyMDNjOFwiLCBcIiNmZDliMzlcIiwgXG4gICAgXCIjODg4NTkzXCIsIFwiIzkwNjQwN1wiLCBcIiM5OGJhN2ZcIiwgXCIjZmU2Nzk0XCIsIFwiIzEwYjBmZlwiLCBcIiNhYzdiZmZcIiwgXCIjZmVlN2MwXCIsIFwiIzk2NGM2M1wiLFxuICAgIFwiIzFkYTQ5Y1wiLCBcIiMwYWQ4MTFcIiwgXCIjYmJkOWZkXCIsIFwiI2ZlNmNmZVwiLCBcIiMyOTcxOTJcIiwgXCIjZDFhMDljXCIsIFwiIzc4NTc5ZVwiLCBcIiM4MWZmYWRcIixcbiAgICBcIiM3Mzk0MDBcIiwgXCIjY2E2OTQ5XCIsIFwiI2Q5YmYwMVwiLCBcIiM2NDZhNThcIiwgXCIjZDUwOTdlXCIsIFwiI2JiNzNhOVwiLCBcIiNjY2Y2ZTlcIiwgXCIjOWNiNGI2XCIsXG4gICAgXCIjYjZhN2Q0XCIsIFwiIzllOGM2MlwiLCBcIiM2ZTgzYzhcIiwgXCIjMDFhZjY0XCIsIFwiI2E3MWFmZFwiLCBcIiNjZmU1ODlcIiwgXCIjZDRjY2QxXCIsIFwiI2ZkNDEwOVwiLFxuICAgIFwiI2JmOGYwZVwiLCBcIiMyZjc4NmVcIiwgXCIjNGVkMWE1XCIsIFwiI2Q4YmI3ZFwiLCBcIiNhNTQ1MDlcIiwgXCIjNmE5Mjc2XCIsIFwiI2E0Nzc3YVwiLCBcIiNmYzEyYzlcIixcbiAgICBcIiM2MDZmMTVcIiwgXCIjM2NjNGQ5XCIsIFwiI2YzMWM0ZVwiLCBcIiM3MzYxNmZcIiwgXCIjZjA5N2M2XCIsIFwiI2ZjODc3MlwiLCBcIiM5MmE2ZmVcIiwgXCIjODc1YjQ0XCIsXG4gICAgXCIjNjk5YWIzXCIsIFwiIzk0YmMxOVwiLCBcIiM3ZDViZjBcIiwgXCIjZDI0ZGZlXCIsIFwiI2M4NWI3NFwiLCBcIiM2OGZmNTdcIiwgXCIjYjYyMzQ3XCIsIFwiIzk5NGI5MVwiLFxuICAgIFwiIzY0NmI4Y1wiLCBcIiM5NzdhYjRcIiwgXCIjZDY5NGZkXCIsIFwiI2M0ZDViNVwiLCBcIiNmZGM0YmRcIiwgXCIjMWNhZTA1XCIsIFwiIzdiZDk3MlwiLCBcIiNlOTcwMGFcIixcbiAgICBcIiNkMDhmNWRcIiwgXCIjOGJiOWUxXCIsIFwiI2ZkZTk0NVwiLCBcIiNhMjlkOThcIiwgXCIjMTY4MmZiXCIsIFwiIzlhZDllMFwiLCBcIiNkNmNhZmVcIiwgXCIjOGQ4MzI4XCIsXG4gICAgXCIjYjA5MWE3XCIsIFwiIzY0NzU3OVwiLCBcIiMxZjhkMTFcIiwgXCIjZTdlYWZkXCIsIFwiI2I5NjYwYlwiLCBcIiNhNGE2NDRcIiwgXCIjZmVjMjRjXCIsIFwiI2IxMTY4Y1wiLFxuICAgIFwiIzE4OGNjMVwiLCBcIiM3YWIyOTdcIiwgXCIjNDQ2OGFlXCIsIFwiI2M5NDlhNlwiLCBcIiNkNDgyOTVcIiwgXCIjZWI2ZGMyXCIsIFwiI2Q1YjBjYlwiLCBcIiNmZjlmZmJcIixcbiAgICBcIiNmZGIwODJcIiwgXCIjYWY0ZDQ0XCIsIFwiI2E3NTljNFwiLCBcIiNhOWUwM2FcIiwgXCIjMGQ5MDZiXCIsIFwiIzllZTNiZFwiLCBcIiM1Yjg4NDZcIiwgXCIjMGQ4OTk1XCIsXG4gICAgXCIjZjI1YzU4XCIsIFwiIzcwYWU0ZlwiLCBcIiM4NDdmNzRcIiwgXCIjOTA5NGJiXCIsIFwiI2ZmZTJmMVwiLCBcIiNhNjcxNDlcIiwgXCIjOTM2YzhlXCIsIFwiI2QwNDkwN1wiLFxuICAgIFwiI2MzYjhhNlwiLCBcIiNjZWY4YzRcIiwgXCIjN2E5MjkzXCIsIFwiI2ZkYTJhYlwiLCBcIiMyZWY2YzVcIiwgXCIjODA3MjQyXCIsIFwiI2NiOTRjY1wiLCBcIiNiNmJkZDBcIixcbiAgICBcIiNiNWM3NWRcIiwgXCIjZmRlMTg5XCIsIFwiI2I3ZmY4MFwiLCBcIiNmYTJkOGVcIiwgXCIjODM5YTVmXCIsIFwiIzI4YzJiNVwiLCBcIiNlNWU5ZTFcIiwgXCIjYmM3OWQ4XCIsXG4gICAgXCIjN2VkOGZlXCIsIFwiIzlmMjBjM1wiLCBcIiM0ZjdhNWJcIiwgXCIjZjUxMWZkXCIsIFwiIzA5Yzk1OVwiLCBcIiNiY2QwY2VcIiwgXCIjODY4NWZkXCIsIFwiIzk4ZmNmZlwiLFxuICAgIFwiI2FmYmZmOVwiLCBcIiM2ZDY5YjRcIiwgXCIjNWY5OWZkXCIsIFwiI2FhYTg3ZVwiLCBcIiNiNTlkZmJcIiwgXCIjNWQ4MDlkXCIsIFwiI2Q5YTc0MlwiLCBcIiNhYzVjODZcIixcbiAgICBcIiM5NDY4ZDVcIiwgXCIjYTRhMmIyXCIsIFwiI2IxMzc2ZVwiLCBcIiNkNDNmM2RcIiwgXCIjMDVhOWQxXCIsIFwiI2MzODM3NVwiLCBcIiMyNGI1OGVcIiwgXCIjNmVhYmFmXCIsXG4gICAgXCIjNjZiZjdmXCIsIFwiIzkyY2JiYlwiLCBcIiNkZGIxZWVcIiwgXCIjMWJlODk1XCIsIFwiI2M3ZWNmOVwiLCBcIiNhNmJhYTZcIiwgXCIjODA0NWNkXCIsIFwiIzVmNzBmMVwiLFxuICAgIFwiI2E5ZDc5NlwiLCBcIiNjZTYyY2JcIiwgXCIjMGU5NTRkXCIsIFwiI2E5N2QyZlwiLCBcIiNmY2I4ZDNcIiwgXCIjOWJmZWUzXCIsIFwiIzRlOGQ4NFwiLCBcIiNmYzZkM2ZcIixcbiAgICBcIiM3YjlmZDRcIiwgXCIjOGM2MTY1XCIsIFwiIzcyODA1ZVwiLCBcIiNkNTM3NjJcIiwgXCIjZjAwYTFiXCIsIFwiI2RlNWM5N1wiLCBcIiM4ZWEyOGJcIiwgXCIjZmNjZDk1XCIsXG4gICAgXCIjYmE5YzU3XCIsIFwiI2I3OWE4MlwiLCBcIiM3YzVhODJcIiwgXCIjN2Q3Y2E0XCIsIFwiIzk1OGFkNlwiLCBcIiNjZDgxMjZcIiwgXCIjYmRiMGI3XCIsIFwiIzEwZTBmOFwiLFxuICAgIFwiI2RjY2M2OVwiLCBcIiNkNmRlMGZcIiwgXCIjNjE2ZDNkXCIsIFwiIzk4NWEyNVwiLCBcIiMzMGM3ZmRcIiwgXCIjMGFlYjY1XCIsIFwiI2UzY2RiNFwiLCBcIiNiZDFiZWVcIixcbiAgICBcIiNhZDY2NWRcIiwgXCIjZDc3MDcwXCIsIFwiIzhlYTViOFwiLCBcIiM1YjVhZDBcIiwgXCIjNzY2NTVlXCIsIFwiIzU5ODEwMFwiLCBcIiM4Njc1N2VcIiwgXCIjNWVhMDY4XCIsXG5dIiwiaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi9VdGlsXCJcblxuLyoqXG4gKiBBVFRFTlRJT04gUkVTUE9OU0VTIEZST00gQkFDS0VORFxuICpcbiAqIENvbnRhaW4gdGhlIGF0dGVudGlvbnMgYW5kIGVtYmVkZGluZ3MgZm9yIGFsbCBjb21iaW5hdGlvbnMgb2YgcmV0dXJucyBmcm9tIHRoZSBiYWNrZW5kXG4gKi9cblxuZXhwb3J0IHR5cGUgTW9kZWxJbmZvID0ge1xuICAgIG5sYXllcnM6IG51bWJlclxuICAgIG5oZWFkczogbnVtYmVyXG59XG5cbnR5cGUgQWJzdHJhY3RBdHRlbnRpb25SZXNwb25zZTxUPiA9IHtcbiAgICBhYTogVFxufVxuXG4vKipcbiAqIEFUVEVOVElPTiBSRVNVTFRTIEZST00gQkFDS0VORFxuICpcbiAqIFRoZXNlIGFyZSB0aGUgcmVzdWx0cyB0aGF0IGFyZSBlbmNhc2VkIGluIHRoZSAnYWEnIGFuZCAnYWInIGtleXMgcmV0dXJuZWRcbiAqL1xuZXhwb3J0IHR5cGUgQXR0ZW50aW9uUmVzcG9uc2UgPSBBYnN0cmFjdEF0dGVudGlvblJlc3BvbnNlPEF0dGVudGlvbk1ldGFSZXN1bHQ+XG5leHBvcnQgdHlwZSBBdHRlbnRpb25NZXRhUmVzdWx0ID0gQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8RnVsbFNpbmdsZVRva2VuSW5mb1tdPlxuXG5leHBvcnQgdHlwZSBGdWxsU2luZ2xlVG9rZW5JbmZvID0ge1xuICAgIHRleHQ6IHN0cmluZyxcbiAgICBlbWJlZGRpbmdzOiBudW1iZXJbXSxcbiAgICBjb250ZXh0czogbnVtYmVyW10sXG4gICAgYnBlX3Rva2VuOiBzdHJpbmcsXG4gICAgYnBlX3Bvczogc3RyaW5nLFxuICAgIGJwZV9kZXA6IHN0cmluZyxcbiAgICBicGVfaXNfZW50OiBib29sZWFuLFxufVxuXG5pbnRlcmZhY2UgQWJzdHJhY3RBdHRlbnRpb25SZXN1bHQ8VD4ge1xuICAgIGF0dDogbnVtYmVyW11bXVtdLFxuICAgIGxlZnQ6IFQsXG4gICAgcmlnaHQ6IFQsXG59XG5cbi8qKlxuICogU0VBUkNIIFJFU1VMVCBUWVBFU1xuICovXG5cbmludGVyZmFjZSBNYXRjaGVkVG9rQXR0IHtcbiAgICBhdHQ6IG51bWJlcltdXG4gICAgb2Zmc2V0X3RvX21heDogbnVtYmVyXG4gICAgbG9jX29mX21heDogbnVtYmVyXG59XG5cblxuaW50ZXJmYWNlIE1hdGNoZWRBdHRlbnRpb25zIHtcbiAgICBpbjogTWF0Y2hlZFRva0F0dCxcbiAgICBvdXQ6IE1hdGNoZWRUb2tBdHQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFpc3NTZWFyY2hSZXN1bHRzIHtcbiAgICBzZW50ZW5jZTogc3RyaW5nXG4gICAgaW5kZXg6IG51bWJlclxuICAgIG1hdGNoOiBzdHJpbmdcbiAgICBtYXRjaGVkX2F0dDogTWF0Y2hlZEF0dGVudGlvbnNcbiAgICB0b2tlbnM6IFRva2VuRmFpc3NNYXRjaFtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5GYWlzc01hdGNoIHtcbiAgICB0b2tlbjogc3RyaW5nXG4gICAgcG9zOiBzdHJpbmdcbiAgICBkZXA6IHN0cmluZ1xuICAgIGlzX2VudDogc3RyaW5nXG4gICAgaXNfbWF0Y2g6IGJvb2xlYW5cbiAgICBpbndhcmQ6IG51bWJlcltdXG4gICAgb3V0d2FyZDogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBFVkVOVCBUWVBFU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuRXZlbnQge1xuICAgIHNlbD86IEQzU2VsLFxuICAgIHNpZGU6IFNpZGVPcHRpb25zLFxuICAgIGluZDogbnVtYmVyIHwgXCJudWxsXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5FbWJlZGRpbmdFdmVudCBleHRlbmRzIFRva2VuRXZlbnQge1xuICAgIGVtYmVkZGluZ3M6IG51bWJlcltdXG59XG5cbmV4cG9ydCB0eXBlIEhlYWRCb3hFdmVudCA9IHtcbiAgICBzaWRlOiBTaWRlT3B0aW9ucyxcbiAgICBpbmQ6IG51bWJlcixcbiAgICBoZWFkOiBudW1iZXIsXG59XG5cbi8qKlxuICogTUlTQ0VMTEFORU9VUyBUWVBFU1xuICovXG5cbmV4cG9ydCB0eXBlIFNlbnRlbmNlT3B0aW9ucyA9IFwiYWJcIiB8IFwiYmFcIiB8IFwiYWFcIiB8IFwiYmJcIiB8IFwiYWxsXCI7XG5leHBvcnQgdHlwZSBTaWRlT3B0aW9ucyA9IFwibGVmdFwiIHwgXCJyaWdodFwiXG5leHBvcnQgdHlwZSBTaW1wbGVNZXRhID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImlzX2VudFwiXG5leHBvcnQgdHlwZSBUb2tlbk9wdGlvbnMgPSBcImFcIiB8IFwiYlwiIHwgXCJhbGxcIlxuXG5leHBvcnQgZW51bSBUb2dnbGVkIHtcbiAgICBBRERFRCA9IDAsXG4gICAgUkVNT1ZFRCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBwb3M6IHN0cmluZ1tdLFxuICAgIGRlcDogc3RyaW5nW10sXG4gICAgaXNfZW50OiBhbnksXG4gICAgZW50czogc3RyaW5nW10sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YU9wdGlvbnMgZXh0ZW5kcyBBYnN0cmFjdE1ldGFPcHRpb25zIHtcbiAgICBpc19lbnQ6IGJvb2xlYW5bXSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1ldGFPcHRpb25zIGV4dGVuZHMgQWJzdHJhY3RNZXRhT3B0aW9ucyB7XG4gICAgaXNfZW50OiBzdHJpbmdbXSAvLyBSZXByZXNlbnRpbmcgaGV4IGNvbG9yc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWV0YVNjYWxlIHtcbiAgICBwb3M6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBkZXA6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBpc19lbnQ6IChkOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgICBlbnRzOiAoZDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gICAgb2Zmc2V0PzogKGQ6IHN0cmluZykgPT4gc3RyaW5nLFxufVxuXG5leHBvcnQgZW51bSBNb2RlbEtpbmQge1xuICAgIEJpZGlyZWN0aW9uYWwgPSBcImJpZGlyZWN0aW9uYWxcIixcbiAgICBBdXRvcmVncmVzc2l2ZSA9IFwiYXV0b3JlZ3Jlc3NpdmVcIlxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7ICBcbiAgICB0aGlzLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lKSB7ICBcbiAgICB0aGlzLmNsYXNzZWQoY2xhc3NOYW1lLCAhdGhpcy5jbGFzc2VkKGNsYXNzTmFtZSkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnaW5pdGlhbCcpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHsgIFxuICAgIHRoaXMuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5kMy5zZWxlY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyAgXG4gICAgdmFyIGlzSGlkZGVuID0gdGhpcy5zdHlsZSgnZGlzcGxheScpID09ICdub25lJztcbiAgICByZXR1cm4gdGhpcy5zdHlsZSgnZGlzcGxheScsIGlzSGlkZGVuID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbn1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKHRhZ05hbWUpIHsgIFxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICBcbiAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgXG4gICAgcmV0dXJuIGQzLnNlbGVjdEFsbChlbGVtZW50cyk7XG4gIH1cblxuZDMuc2VsZWN0aW9uLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbih0YWdOYW1lKSB7ICBcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBkMy5zZWxlY3RBbGwoZWxlbWVudHMpO1xufSIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbi8qKlxuICogTWFwIGEgbGlzdCBhcyB2YWx1ZXMgdG8gYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBvcmlnaW5hbCBsaXN0XG4gKi9cbi8vIChTdHJpbmcgLT4gYikgIC0+IFtTdHJpbmddIC0+IHtTdHJpbmc6IGJ9XG5leHBvcnQgY29uc3Qgb2JqRnJvbUtleXMgPSBSLmN1cnJ5KChmbiwga2V5cykgPT4gUi56aXBPYmooa2V5cywgUi5tYXAoZm4sIGtleXMpKSkgXG5cbmV4cG9ydCBjb25zdCBhc3NpZ25aZXJvOiAoeDphbnkpID0+IG51bWJlciA9IHggPT4gMDtcblxuLyoqXG4gKiBHaXZlbiBhbiBsaXN0LCBjcmVhdGUgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWxsIDBcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRaZXJvID0gb2JqRnJvbUtleXMoYXNzaWduWmVybykiLCJpbXBvcnQgeyBNYWluR3JhcGhpYyB9IGZyb20gJy4vdmlzL215TWFpbidcbmltcG9ydCB7IEFQSSwgZW1wdHlUb2tlbkRpc3BsYXkgfSBmcm9tICcuL2FwaS9tYWluQXBpJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBUb2tlbldyYXBwZXIgfSBmcm9tICcuL2RhdGEvVG9rZW5XcmFwcGVyJ1xuLy8gaW1wb3J0IHsgVGVzdGVyIH0gZnJvbSBcIi4uL3RzL3Rlc3RcIlxuXG5pbXBvcnQgXCIhZmlsZS1sb2FkZXI/bmFtZT1leEJFUlQuaHRtbCEuLi9leEJFUlQuaHRtbFwiO1xuaW1wb3J0IFwiIWZpbGUtbG9hZGVyP25hbWU9aW5kZXguaHRtbCEuLi9pbmRleC5odG1sXCI7XG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCJcblxuXG5mdW5jdGlvbiBkb015U3ZnKCkge1xuICAgIHJldHVybiBuZXcgTWFpbkdyYXBoaWMoKVxufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHN0YXRpYyBmaWxlcyBuZWVkZWQgZm9yIHRoZSBkZW1vLiBTYXZlIHRoZSBrZXlzIGFuZCBmaWxlIHBhdGhzIHRvIGEganNvbiBvYmplY3QgdGhhdCBpcyB0aGVuIHdyaXR0ZW4gdG8gYSBmaWxlXG4gKlxuICogVGhpcyB3aWxsIHByaW50IHRoZSBvYmplY3QgYWZ0ZXIgZXZlcnkgY2FsbC4gV2hlbiB0aGUga2V5IGxlbmd0aCBpcyB0aGUgZXhwZWN0ZWQgbGVuZ3RoLCByaWdodCBjbGljayBpbiBjaHJvbWUgYW5kIHNlbGVjdCBcInNhdmUgYXMgZ2xvYmFsIHZhcmlhYmxlXCJcbiAqXG4gKiBUaGVuLCBpbiB0aGUgY29uc29sZSwgdHlwZSBcImNvcHkodGVtcDEpXCIuIFVzZSBzdWJsaW1lIHRleHQgKGl0IGlzIHRoZSBiZXN0IGZvciBoYW5kbGluZyBsYXJnZSBmaWxlcykgdG8gcGFzdGUgdGhpcyBpbnRvIHRoZSBjb2RlIGFuZCBzYXZlIGl0IGFzIF9fX18uanNvblxuICpcbiAqIEBwYXJhbSBzZW50ZW5jZSAtIFRoZSBzZW50ZW5jZSB0byBhbmFseXplXG4gKiBAcGFyYW0gbWFza0luZCAtIFdoaWNoIGluZGV4IHRvIG1hc2sgaW4gdGhlIHNlbnRlbmNlLiBBdG0sIGNhbiBvbmx5IHJlY29yZCBvbmUgbWFza2luZ1xuICogQHBhcmFtIG91dERpY3RQYXRoIC0gV2hlcmUgdG8gc2F2ZSB0aGUgb2JqZWN0IG9mIGhhc2hrZXk6IGZpbGVwYXRoXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlbW9zKHNlbnRlbmNlLCBtYXNrSW5kOiBudW1iZXIsIG1vZGVsTmFtZTogc3RyaW5nLCBjb3JwdXNOYW1lOiBzdHJpbmcsIG91dERpY3RQYXRoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFQSSgpXG4gICAgY29uc3QgbGF5ZXJzID0gXy5yYW5nZSgxMilcblxuICAgIGNvbnN0IEwgPSAwXG5cbiAgICBjb25zdCBjb250ZW50SGFzaCA9IHt9ICAgICAgICAgIC8vIE1hcCBoYXNoIC0+IGNvbnRlbnRzXG5cbiAgICAvLyBHZXQgdGhlIGJhc2UgcmV0dXJuIGZvciBhbGwgcGFnZSBpbml0aWFsaXphdGlvbnNcbiAgICBfLnJhbmdlKDEyKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMobW9kZWxOYW1lLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjAgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rQ2Fwc3VsZSA9IG5ldyBUb2tlbldyYXBwZXIocjApO1xuXG4gICAgICAgICAgICAvLyBVbm1hc2tlZCByZXNwb25zZTpcbiAgICAgICAgICAgIGFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKG1vZGVsTmFtZSwgdG9rQ2Fwc3VsZS5hLCBzZW50ZW5jZSwgTCwgY29udGVudEhhc2gpLnRoZW4ocjEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1hc2tlZCB3b3JkIGFuZCBzZWFyY2hpbmcgcmVzcG9uc2VzOlxuICAgICAgICAgICAgICAgIHRva0NhcHN1bGUuYS5tYXNrKG1hc2tJbmQpXG4gICAgICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBjb250ZW50SGFzaCkudGhlbihyMiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBzZWFyY2ggcmVzdWx0cyBieSBlbWJlZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1iZWRkaW5nID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5lbWJlZGRpbmdzXG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXROZWFyZXN0RW1iZWRkaW5ncyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGVtYmVkZGluZywgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcjJbJ2FhJ11bJ2xlZnQnXVttYXNrSW5kXS5jb250ZXh0c1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdENvbnRleHRzKG1vZGVsTmFtZSwgY29ycHVzTmFtZSwgY29udGV4dCwgTCwgXy5yYW5nZSgxMiksIDUwLCBjb250ZW50SGFzaCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGNvbnRlbnRIYXNoKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudEhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogXG4gKiBPYnNlcnZlIGhvdyB0aGUgZGVtbyBjcmVhdGlvbiBwcm9jZXNzIHdvcmtzLlxuICogXG4gKiBJZiBkZXNpcmVkIHRvIG1hc2sgbXVsdGlwbGUgd29yZHMgaW4gdGhlIGlucHV0IGZvciBkZW1vIHB1cnBvc2VzLCB0cnkgbG9vcGluZyBvdmVyIHRoZSBtYXNrIGluZHMgYW5kIG1hc2tpbmcgZWFjaCBvbmUgaW5kaXZpZHVhbGx5XG4gKiBcbiAqIEBwYXJhbSBzZW50ZW5jZSBUaGUgZGVtbyBzZW50ZW5jZVxuICogQHBhcmFtIG1hc2tJbmQgRGVzaXJlZCBpbmRleCB0byBtYXNrIChjYW4gY3VycmVudGx5IG9ubHkgYWNjZXB0IGEgc2luZ2xlIG1hc2sgaW5kZXgpXG4gKiBAcGFyYW0gb3V0RGljdFBhdGggXG4gKi9cbmZ1bmN0aW9uIGluc3BlY3REZW1vcyhzZW50ZW5jZSwgbWFza0luZDogbnVtYmVyLCBtb2RlbE5hbWU6IHN0cmluZywgY29ycHVzTmFtZTogc3RyaW5nLCBvdXREaWN0UGF0aCkge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoKVxuXG4gICAgY29uc3QgY29udGVudEhhc2ggPSB7fVxuXG4gICAgLy8gR2V0IHRoZSBiYXNlIHJldHVybiBmb3IgYWxsIHBhZ2UgaW5pdGlhbGl6YXRpb25zXG4gICAgXy5yYW5nZSgxKS5mb3JFYWNoKEwgPT4ge1xuICAgICAgICBhcGkuZ2V0TWV0YUF0dGVudGlvbnMobW9kZWxOYW1lLCBzZW50ZW5jZSwgTCwgXCJcIikudGhlbihyMCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tDYXBzdWxlID0gbmV3IFRva2VuV3JhcHBlcihyMCk7XG5cbiAgICAgICAgICAgIC8vIFVubWFza2VkIHJlc3BvbnNlOlxuICAgICAgICAgICAgYXBpLnVwZGF0ZU1hc2tlZEF0dGVudGlvbnMobW9kZWxOYW1lLCB0b2tDYXBzdWxlLmEsIHNlbnRlbmNlLCBMLCBlbXB0eVRva2VuRGlzcGxheSkudGhlbihyMSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTWFza2VkIHdvcmQgYW5kIHNlYXJjaGluZyByZXNwb25zZXM6XG4gICAgICAgICAgICAgICAgdG9rQ2Fwc3VsZS5hLm1hc2sobWFza0luZClcbiAgICAgICAgICAgICAgICBhcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyhtb2RlbE5hbWUsIHRva0NhcHN1bGUuYSwgc2VudGVuY2UsIEwsIGVtcHR5VG9rZW5EaXNwbGF5KS50aGVuKHIyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocjIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgc2VhcmNoIHJlc3VsdHMgYnkgZW1iZWRkaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYmVkZGluZyA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uZW1iZWRkaW5nc1xuICAgICAgICAgICAgICAgICAgICBhcGkuZ2V0TmVhcmVzdEVtYmVkZGluZ3MobW9kZWxOYW1lLCBjb3JwdXNOYW1lLCBlbWJlZGRpbmcsIEwsIF8ucmFuZ2UoMTIpLCA1MCwgY29udGVudEhhc2gpLnRoZW4oeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHNlYXJjaCByZXN1bHRzIGJ5IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHIyWydhYSddWydsZWZ0J11bbWFza0luZF0uY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldE5lYXJlc3RDb250ZXh0cyhtb2RlbE5hbWUsIGNvcnB1c05hbWUsIGNvbnRleHQsIEwsIF8ucmFuZ2UoMTIpLCA1MCkudGhlbih4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXBsVGVzdCgpIHtcbiAgICAvLyBUZXN0ZXIudGVzdEF0dFdyYXBwZXJDb25zdHJ1Y3RvcigpXG4gICAgLy8gVGVzdGVyLnRlc3RVcGRhdGVNYXNrZWRBdHRlbnRpb24oKVxuICAgIC8vIFRlc3Rlci50ZXN0TmpBcmF5KCk7XG4gICAgLy8gVGVzdGVyLnRlc3RSYW5kb21BcnJheUNyZWF0aW9uKCk7XG4gICAgLy8gVGVzdGVyLnRlc3RGYWlzc1dyYXBwZXIoKTtcbiAgICAvLyBUZXN0ZXIudGVzdEQzT3JkaW5hbCgpO1xuICAgIC8vIFRlc3Rlci50ZXN0RmFpc3NTZWFyY2hSZXN1bHRzSGlzdCgpO1xuICAgIC8vIFRlc3Rlci50ZXN0UmVhZGluZ0pTT04oKTtcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBkb015U3ZnKCk7XG4gICAgLy8gcmVwbFRlc3QoKTtcbiAgICAvLyBjcmVhdGVEZW1vcyhcIkNoaWNrZW4gdGFzdGVzIGFic29sdXRlbHkgZGVsaWNpb3VzIGlmIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXCIsIDQsIFwiXCIpXG4gICAgY29uc29sZS5sb2coXCJEb25lIGxvYWRpbmcgd2luZG93XCIpO1xufVxuIiwiaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4vZXRjL3R5cGVzXCJcbmltcG9ydCAqIGFzIHhfIGZyb20gXCIuL2V0Yy9fVG9vbHNcIlxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCJcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBVUkxIYW5kbGVyIH0gZnJvbSBcIi4vZXRjL1VSTEhhbmRsZXJcIjtcblxuY29uc3QgZmFsc2V5ID0gdmFsID0+IChuZXcgU2V0KFsnZmFsc2UnLCAwLCBcIm5vXCIsIGZhbHNlLCBudWxsLCBcIlwiXSkpLmhhcyh2YWwpXG5jb25zdCB0cnV0aHkgPSB2YWwgPT4gIWZhbHNleSh2YWwpXG5jb25zdCB0b051bWJlciA9IHggPT4gK3g7XG5cblxudHlwZSBJbnNwZWN0b3JPcHRpb25zID0gXCJjb250ZXh0XCIgfCBcImVtYmVkZGluZ3NcIiB8IG51bGxcblxuLy8gTXVzdCBiZSBvcHRpb25hbCBwYXJhbXMgZm9yIGluaXRpYWxpemF0aW9uc1xuaW50ZXJmYWNlIFVSTFBhcmFtZXRlcnMge1xuICAgIHNlbnRlbmNlPzogc3RyaW5nXG4gICAgbW9kZWw/OiBzdHJpbmdcbiAgICBtb2RlbEtpbmQ/OiBzdHJpbmdcbiAgICBjb3JwdXM/OiBzdHJpbmdcbiAgICBsYXllcj86IG51bWJlclxuICAgIGhlYWRzPzogbnVtYmVyW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICB0b2tlbkluZD86IG51bWJlciB8ICdudWxsJ1xuICAgIHRva2VuU2lkZT86IHRwLlNpZGVPcHRpb25zXG4gICAgbWV0YU1hdGNoPzogdHAuU2ltcGxlTWV0YSB8IG51bGxcbiAgICBtZXRhTWF4PzogdHAuU2ltcGxlTWV0YSB8IG51bGxcbiAgICBkaXNwbGF5SW5zcGVjdG9yPzogSW5zcGVjdG9yT3B0aW9uc1xuICAgIG9mZnNldElkeHM/OiBudW1iZXJbXVxuICAgIG1hc2tJbmRzPzogbnVtYmVyW11cbiAgICBoaWRlQ2xzU2VwPzogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgVUlDb25maWcge1xuXG4gICAgcHJpdmF0ZSBfY29uZjogVVJMUGFyYW1ldGVycyA9IHt9XG4gICAgcHJpdmF0ZSBfaGVhZFNldDogU2V0PG51bWJlcj47XG4gICAgYXR0VHlwZTogdHAuU2VudGVuY2VPcHRpb25zO1xuICAgIF9uSGVhZHM6IG51bWJlciB8IG51bGw7XG4gICAgX25MYXllcnM6IG51bWJlciB8IG51bGw7XG4gICAgcHJpdmF0ZSBfdG9rZW46IHRwLlRva2VuRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fbkhlYWRzID0gMTI7IC8vIEhvdyBkbyBJIGF1dG9tYXRlIHRoaXM/XG4gICAgICAgIHRoaXMuX25MYXllcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmF0dFR5cGUgPSAnYWEnOyAvLyBEb24ndCBhbGxvdyB0aGlzIHRvIGJlIG1vZGlmaWVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICB0aGlzLmZyb21VUkwoKVxuICAgICAgICB0aGlzLnRvVVJMKGZhbHNlKVxuICAgIH1cblxuXG4gICAgZnJvbVVSTCgpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gVVJMSGFuZGxlci5wYXJhbWV0ZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZiA9IHtcbiAgICAgICAgICAgIG1vZGVsOiBwYXJhbXNbJ21vZGVsJ10gfHwgJ2JlcnQtYmFzZS1jYXNlZCcsXG4gICAgICAgICAgICBtb2RlbEtpbmQ6IHBhcmFtc1snbW9kZWxLaW5kJ10gfHwgdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwsXG4gICAgICAgICAgICBzZW50ZW5jZTogcGFyYW1zWydzZW50ZW5jZSddIHx8IFwiVGhlIGdpcmwgcmFuIHRvIGEgbG9jYWwgcHViIHRvIGVzY2FwZSB0aGUgZGluIG9mIGhlciBjaXR5LlwiLFxuICAgICAgICAgICAgY29ycHVzOiBwYXJhbXNbJ2NvcnB1cyddIHx8ICd3b3onLFxuICAgICAgICAgICAgbGF5ZXI6IHBhcmFtc1snbGF5ZXInXSB8fCAxLFxuICAgICAgICAgICAgaGVhZHM6IHRoaXMuX2luaXRIZWFkcyhwYXJhbXNbJ2hlYWRzJ10pLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBwYXJhbXNbJ3RocmVzaG9sZCddIHx8IDAuNyxcbiAgICAgICAgICAgIHRva2VuSW5kOiBwYXJhbXNbJ3Rva2VuSW5kJ10gfHwgbnVsbCxcbiAgICAgICAgICAgIHRva2VuU2lkZTogcGFyYW1zWyd0b2tlblNpZGUnXSB8fCBudWxsLFxuICAgICAgICAgICAgbWFza0luZHM6IHBhcmFtc1snbWFza0luZHMnXSB8fCBbOV0sXG4gICAgICAgICAgICBtZXRhTWF0Y2g6IHBhcmFtc1snbWV0YU1hdGNoJ10gfHwgXCJwb3NcIixcbiAgICAgICAgICAgIG1ldGFNYXg6IHBhcmFtc1snbWV0YU1heCddIHx8IFwicG9zXCIsXG4gICAgICAgICAgICBkaXNwbGF5SW5zcGVjdG9yOiBwYXJhbXNbJ2Rpc3BsYXlJbnNwZWN0b3InXSB8fCBudWxsLFxuICAgICAgICAgICAgb2Zmc2V0SWR4czogdGhpcy5faW5pdE9mZnNldElkeHMocGFyYW1zWydvZmZzZXRJZHhzJ10pLFxuICAgICAgICAgICAgaGlkZUNsc1NlcDogdHJ1dGh5KHBhcmFtc1snaGlkZUNsc1NlcCddKSB8fCB0cnVlLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB7IHNpZGU6IHRoaXMuX2NvbmYudG9rZW5TaWRlLCBpbmQ6IHRoaXMuX2NvbmYudG9rZW5JbmQgfVxuXG4gICAgfVxuXG4gICAgdG9VUkwodXBkYXRlSGlzdG9yeSA9IGZhbHNlKSB7XG4gICAgICAgIFVSTEhhbmRsZXIudXBkYXRlVXJsKHRoaXMuX2NvbmYsIHVwZGF0ZUhpc3RvcnkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE9mZnNldElkeHModjogKHN0cmluZyB8IG51bWJlcilbXSB8IG51bGwpIHtcbiAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFstMSwgMCwgMV1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlckFyciA9IFIubWFwKHRvTnVtYmVyLCB2KTtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJBcnI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0SGVhZHModjogbnVtYmVyW10gfCBudWxsKSB7XG4gICAgICAgIGlmICh2ID09IG51bGwgfHwgdi5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbEhlYWRzKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZFNldChuZXcgU2V0KHYpKS5fY29uZi5oZWFkcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkcygpXG4gICAgfVxuXG4gICAgbkhlYWRzKCk6IG51bWJlclxuICAgIG5IZWFkcyh2YWw6IG51bWJlcik6IHRoaXNcbiAgICBuSGVhZHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uSGVhZHNcbiAgICAgICAgdGhpcy5fbkhlYWRzID0gdmFsXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgbkxheWVycygpOiBudW1iZXJcbiAgICBuTGF5ZXJzKHZhbDogbnVtYmVyKTogdGhpc1xuICAgIG5MYXllcnModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9uTGF5ZXJzXG4gICAgICAgIHRoaXMuX25MYXllcnMgPSB2YWxcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3RBbGxIZWFkcygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZHMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxIZWFkcygpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5vSGVhZHMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsSGVhZHMoKSB7XG4gICAgICAgIHRoaXMuaGVhZFNldChuZXcgU2V0KF8ucmFuZ2UoMCwgdGhpcy5fbkhlYWRzKSkpXG4gICAgfVxuXG4gICAgc2VsZWN0Tm9IZWFkcygpIHtcbiAgICAgICAgdGhpcy5oZWFkU2V0KG5ldyBTZXQoW10pKVxuICAgIH1cblxuICAgIHRvZ2dsZUhlYWQoaGVhZDogbnVtYmVyKTogdHAuVG9nZ2xlZCB7XG4gICAgICAgIGxldCBvdXQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWRTZXQoKS5oYXMoaGVhZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZFNldCgpLmRlbGV0ZShoZWFkKTtcbiAgICAgICAgICAgIG91dCA9IHRwLlRvZ2dsZWQuUkVNT1ZFRFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkU2V0KCkuYWRkKGhlYWQpO1xuICAgICAgICAgICAgb3V0ID0gdHAuVG9nZ2xlZC5BRERFRFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRocm91Z2ggc2V0dGVyIGZ1bmN0aW9uIHRvIGVuc3VyZSB1cmwgaXMgdXBkYXRlZFxuICAgICAgICB0aGlzLmhlYWRTZXQodGhpcy5oZWFkU2V0KCkpOyAvLyBJIGhhdGUgbXV0YWJsZSBkYXRhc3RydWN0dXJlcy4uLiBUaGlzIGlzIGNvbmZ1c2luZy5cblxuICAgICAgICByZXR1cm4gb3V0XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9rZW4oZTogdHAuVG9rZW5FdmVudCk6IHRoaXMge1xuICAgICAgICBjb25zdCBwaWNrZXIgPSBSLnBpY2soWydpbmQnLCAnc2lkZSddKVxuICAgICAgICBjb25zdCBjb21wYXJlRXZlbnQgPSBwaWNrZXIoZSlcbiAgICAgICAgY29uc3QgY29tcGFyZVRva2VuID0gcGlja2VyKHRoaXMudG9rZW4oKSlcblxuICAgICAgICBpZiAoUi5lcXVhbHMoY29tcGFyZVRva2VuLCBjb21wYXJlRXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnJtVG9rZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4oZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9rZW4oKTogdHAuVG9rZW5FdmVudDtcbiAgICB0b2tlbih2YWw6IHRwLlRva2VuRXZlbnQpOiB0aGlzO1xuICAgIHRva2VuKHZhbD86IHRwLlRva2VuRXZlbnQpIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuXG5cbiAgICAgICAgdGhpcy5fdG9rZW4gPSB2YWw7XG4gICAgICAgIHRoaXMuX2NvbmYudG9rZW5JbmQgPSB2YWwuaW5kO1xuICAgICAgICB0aGlzLl9jb25mLnRva2VuU2lkZSA9IHZhbC5zaWRlO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBybVRva2VuKCkge1xuICAgICAgICB0aGlzLnRva2VuKHsgaW5kOiBudWxsLCBzaWRlOiBudWxsIH0pO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHNlbnRlbmNlKCk6IHN0cmluZztcbiAgICBzZW50ZW5jZSh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgc2VudGVuY2UodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5zZW50ZW5jZVxuXG4gICAgICAgIHRoaXMuX2NvbmYuc2VudGVuY2UgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCh0cnVlKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHRocmVzaG9sZCgpOiBudW1iZXI7XG4gICAgdGhyZXNob2xkKHZhbDogbnVtYmVyKTogdGhpcztcbiAgICB0aHJlc2hvbGQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLnRocmVzaG9sZDtcblxuICAgICAgICB0aGlzLl9jb25mLnRocmVzaG9sZCA9IHZhbDtcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkcygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25mLmhlYWRzXG4gICAgfVxuXG4gICAgbGF5ZXIoKTogbnVtYmVyXG4gICAgbGF5ZXIodmFsOiBudW1iZXIpOiB0aGlzXG4gICAgbGF5ZXIodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZi5sYXllclxuXG4gICAgICAgIHRoaXMuX2NvbmYubGF5ZXIgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBoZWFkU2V0KCk6IFNldDxudW1iZXI+O1xuICAgIGhlYWRTZXQodmFsOiBTZXQ8bnVtYmVyPik6IHRoaXM7XG4gICAgaGVhZFNldCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRTZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oZWFkU2V0ID0gdmFsO1xuICAgICAgICB0aGlzLl9jb25mLmhlYWRzID0geF8uc2V0MlNvcnRlZEFycmF5KHRoaXMuX2hlYWRTZXQpXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBtZXRhTWF0Y2goKTogdHAuU2ltcGxlTWV0YTtcbiAgICBtZXRhTWF0Y2godmFsOiB0cC5TaW1wbGVNZXRhKTogdGhpcztcbiAgICBtZXRhTWF0Y2godmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1ldGFNYXg7XG5cbiAgICAgICAgdGhpcy5fY29uZi5tZXRhTWF4ID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ldGFNYXgoKTogdHAuU2ltcGxlTWV0YTtcbiAgICBtZXRhTWF4KHZhbDogdHAuU2ltcGxlTWV0YSk6IHRoaXM7XG4gICAgbWV0YU1heCh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYubWV0YU1hdGNoO1xuXG4gICAgICAgIHRoaXMuX2NvbmYubWV0YU1hdGNoID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1hc2tJbmRzKCk6IG51bWJlcltdO1xuICAgIG1hc2tJbmRzKHZhbDogbnVtYmVyW10pOiB0aGlzO1xuICAgIG1hc2tJbmRzKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5tYXNrSW5kcztcblxuICAgICAgICB0aGlzLl9jb25mLm1hc2tJbmRzID0gdmFsO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc3BsYXlJbnNwZWN0b3IoKTogSW5zcGVjdG9yT3B0aW9ucztcbiAgICBkaXNwbGF5SW5zcGVjdG9yKHZhbDogSW5zcGVjdG9yT3B0aW9ucyk6IHRoaXM7XG4gICAgZGlzcGxheUluc3BlY3Rvcih2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuZGlzcGxheUluc3BlY3RvcjtcblxuICAgICAgICB0aGlzLl9jb25mLmRpc3BsYXlJbnNwZWN0b3IgPSB2YWw7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb2Zmc2V0SWR4cygpOiBudW1iZXJbXTtcbiAgICBvZmZzZXRJZHhzKHZhbDogbnVtYmVyW10pOiB0aGlzO1xuICAgIG9mZnNldElkeHModmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm9mZnNldElkeHM7XG5cbiAgICAgICAgLy8gY29udmVydCB0byBudW1iZXJzXG5cbiAgICAgICAgdGhpcy5fY29uZi5vZmZzZXRJZHhzID0gUi5tYXAodG9OdW1iZXIsIHZhbCk7XG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZUNsc1NlcCgpOiBib29sZWFuO1xuICAgIGhpZGVDbHNTZXAodmFsOiBib29sZWFuKTogdGhpcztcbiAgICBoaWRlQ2xzU2VwKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSByZXR1cm4gdGhpcy5fY29uZi5oaWRlQ2xzU2VwO1xuXG4gICAgICAgIHRoaXMuX2NvbmYuaGlkZUNsc1NlcCA9IHRydXRoeSh2YWwpO1xuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1vZGVsKCk6IHN0cmluZztcbiAgICBtb2RlbCh2YWw6IHN0cmluZyk6IHRoaXM7XG4gICAgbW9kZWwodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsXG4gICAgICAgIHRoaXMuX2NvbmYubW9kZWwgPSB2YWxcbiAgICAgICAgdGhpcy50b1VSTCgpO1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIG1vZGVsS2luZCgpOiBzdHJpbmc7XG4gICAgbW9kZWxLaW5kKHZhbDogc3RyaW5nKTogdGhpcztcbiAgICBtb2RlbEtpbmQodmFsPykge1xuICAgICAgICBpZiAodmFsID09IG51bGwpIHJldHVybiB0aGlzLl9jb25mLm1vZGVsS2luZFxuICAgICAgICB0aGlzLl9jb25mLm1vZGVsS2luZCA9IHZhbFxuICAgICAgICB0aGlzLnRvVVJMKCk7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBvZmZzZXQgbmVlZGVkIGZvciB0aGUgbW9kZWxLaW5kIGluIHRoZSBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgZ2V0IG9mZnNldCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGVsS2luZCgpKSB7XG4gICAgICAgICAgICBjYXNlIHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29ycHVzKCk6IHN0cmluZztcbiAgICBjb3JwdXModmFsOiBzdHJpbmcpOiB0aGlzO1xuICAgIGNvcnB1cyh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkgcmV0dXJuIHRoaXMuX2NvbmYuY29ycHVzXG4gICAgICAgIHRoaXMuX2NvbmYuY29ycHVzID0gdmFsXG4gICAgICAgIHRoaXMudG9VUkwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAnZDMtc2VsZWN0aW9uLW11bHRpJ1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCB7IEVkZ2UsIEVkZ2VEYXRhIH0gZnJvbSBcIi4vRWRnZUNvbm5lY3RvclwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgc2NhbGVMaW5lYXJXaWR0aCB9IGZyb20gXCIuL0Zvcm1hdFV0aWxzXCJcblxuZXhwb3J0IHR5cGUgQXR0ZW50aW9uRGF0YSA9IG51bWJlcltdW11cblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbkdyYXBoIGV4dGVuZHMgVkNvbXBvbmVudDxBdHRlbnRpb25EYXRhPntcbiAgICBjc3NfbmFtZSA9ICcnO1xuICAgIF9jdXJyZW50OiB7fTtcblxuICAgIF9kYXRhOiBBdHRlbnRpb25EYXRhOyAvLyBUaGUgcGFzc2VkIGRhdGFcbiAgICBlZGdlRGF0YTogRWRnZURhdGE7IC8vIEEgd3JhcHBlciBhcm91bmQgX2RhdGEuIFVzZXIgc2hvdWxkIG5vdCBtaW5kXG4gICAgcGxvdERhdGE6IEVkZ2VbXTsgLy8gTmVlZGVkIGZvciBwbG90dGluZ1xuXG4gICAgLyoqIENPTVBPTkVOVFNcbiAgICAgKiBFeHBvc2UgdGhlIGNvbXBvbmVudHMgYmVsb25naW5nIHRvIHRoZSBjbGFzcyBhcyBwcm9wZXJ0aWVzIG9mIHRoZSBjbGFzcy4gXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY3JlYXRlIG1ldGhvZHMgdGhhdCBzcGVjaWZpY2FsbHkgbW9kaWZ5IGEgc2luZ2xlIHBhcnQgb3IgY29tcG9uZW50IHdpdGhvdXQgaGF2aW5nIHRvIHJlc2VsZWN0IGl0LiBcbiAgICAgKiBNYWtlcyBmb3IgbW9yZSByZXNwb25zaXZlIGFwcGxpY2F0aW9uc1xuICAgICAqICovXG4gICAgc3ZnOiBEM1NlbDtcbiAgICBncmFwaDogRDNTZWw7XG5cbiAgICAvLyBUaGUgYmVsb3cgY29tcG9uZW50cyByZXF1aXJlIGRhdGFcbiAgICBwYXRoczogRDNTZWw7XG4gICAgb3BhY2l0eVNjYWxlczogZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W107XG4gICAgbGlua0dlbjogZDMuTGluazxhbnksIGFueSwgYW55PlxuXG4gICAgLy8gT1BUSU9OUyBXSVRIIERFRkFVTFRTXG4gICAgX3RocmVzaG9sZCA9IDAuNzsgLy8gQWNjdW11bGF0aW9uIHRocmVzaG9sZC4gQmV0d2VlbiAwLTFcbiAgICBub3JtQnlHcm91cCA9IGZhbHNlOyAvLyBXaGV0aGVyIHRvIG5vcm1hbGl6ZSBjb25uZWN0aW9uIHdpZHRoIGJ5IHNyYy1ncm91cCBvciBub3RcblxuICAgIHN0YXRpYyBldmVudHMgPSB7fSAvLyBObyBldmVudHMgbmVlZGVkIGZvciB0aGlzIG9uZVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94aGVpZ2h0OiAyNiwgLy8gVGhlIGhlaWdodCBvZiB0aGUgZGl2IGJveGVzIGFyb3VuZCB0aGUgU1ZHIGVsZW1lbnRcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIG9mZnNldDogMCwgLy8gU2hvdWxkIEkgb2Zmc2V0IHRoZSBsZWZ0IHNpZGUgYnkgMSBvciBub3Q/XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcob3B0aW9ucylcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuZ3JhcGggPSB0aGlzLnN2Zy5zZWxlY3RBbGwoYC5hdG4tY3VydmVgKTtcbiAgICAgICAgdGhpcy5saW5rR2VuID0gZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgLngoZCA9PiBkWzBdKVxuICAgICAgICAgICAgLnkoZCA9PiBkWzFdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgY29ubmVjdGlvbnMgYmV0d2VlbiBsb2NhdGlvbnMgb2YgdGhlIFNWRyB1c2luZyBEMydzIGxpbmtHZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZUNvbm5lY3Rpb25zKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnBhdGhzKSB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzLmF0dHJzKHtcbiAgICAgICAgICAgICAgICAnZCc6IChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHsgc291cmNlOiBbbnVtYmVyLCBudW1iZXJdLCB0YXJnZXQ6IFtudW1iZXIsIG51bWJlcl0gfSA9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogWzAsIG9wLmJveGhlaWdodCAqIChkLmkgKyAwLjUgKyBvcC5vZmZzZXQpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogW29wLndpZHRoLCBvcC5ib3hoZWlnaHQgKiAoZC5qICsgMC41KV0gLy8gKyAyIGFsbG93cyBzbWFsbCBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0dlbihkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdjbGFzcyc6ICdhdG4tY3VydmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjLWlkeFwiLCAoZCwgaSkgPT4gZC5pKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidGFyZ2V0LWlkeFwiLCAoZCwgaSkgPT4gZC5qKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgaGVpZ2h0IG9mIHRoZSBTVkdcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnN2ZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN2Zy5hdHRyKFwiaGVpZ2h0XCIsIHRoaXMub3B0aW9ucy5oZWlnaHQgKyAob3Aub2Zmc2V0ICogdGhpcy5vcHRpb25zLmJveGhlaWdodCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSB3aWR0aCBvZiB0aGUgU1ZHXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ZnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZnLmF0dHIoXCJ3aWR0aFwiLCB0aGlzLm9wdGlvbnMud2lkdGgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBPcGFjaXR5IG9mIHRoZSBsaW5lcyBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlIG9mIHRoZSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVPcGFjaXR5KCkge1xuICAgICAgICBpZiAodGhpcy5wYXRocyAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBwYXRocy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKS5hdHRyKCdvcGFjaXR5JywgKGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGF0aHMuYXR0cignb3BhY2l0eScsIChkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5vcGFjaXR5U2NhbGVzW2QuaV0oZC52KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMucGF0aHMuYXR0cignc3Ryb2tlLXdpZHRoJywgKGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLm9wYWNpdHlTY2FsZXNbZC5pXShkLnYpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2FsZUxpbmVhcldpZHRoKHZhbCkgLy81ICogdmFsXjAuMzM7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcmVuZGVyIHRoZSBncmFwaCBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZGF0YSBjaGFuZ2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5ncmFwaCAhPSBudWxsKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIuYXRuLWN1cnZlXCIpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGhzID0gdGhpcy5ncmFwaFxuICAgICAgICAgICAgICAgIC5kYXRhKHRoaXMucGxvdERhdGEpXG4gICAgICAgICAgICAgICAgLmpvaW4oJ3BhdGgnKTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb25uZWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NhbGUgdGhlIG9wYWNpdHkgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZXMgb2YgdGhlIGRhdGEsIGZyb20gMCB0byBtYXggb2YgY29udGFpbmVkIGRhdGFcbiAgICAgKiBOb3JtYWxpemUgYnkgZWFjaCBzb3VyY2UgdGFyZ2V0LCBvciBhY3Jvc3MgdGhlIHdob2xlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTY2FsZXMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcyA9IFtdO1xuXG4gICAgICAgIC8vIEdyb3VwIG5vcm1hbGl6YXRpb25cbiAgICAgICAgaWYgKHRoaXMubm9ybUJ5R3JvdXApIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZWRnZURhdGEuZXh0ZW50KDEpO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGVzID0gW107XG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICh0aGlzLm9wYWNpdHlTY2FsZXMgYXMgZDMuU2NhbGVMaW5lYXI8YW55LCBhbnk+W10pLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kb21haW4oWzAsIHZbMV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCAwLjldKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3JtYWxpemF0aW9uIGFjcm9zcyB0aGUgd2hvbGVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYXhJbiA9IGQzLm1heCh0aGlzLnBsb3REYXRhLm1hcCgoZCkgPT4gZC52KSlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eVNjYWxlcy5wdXNoKGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4SW5dKVxuICAgICAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGRhdGEgaW4gYSBEMyBzdHlsZSB3YXkuIElmIG1vZGlmaWVkLCB0aGUgY29tcG9uZW50IHdpbGwgdXBkYXRlIGp1c3QgdGhlIHBhcnQgdGhhdCBpcyBuZWVkZWQgdG8gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIGRhdGEoKTogQXR0ZW50aW9uRGF0YVxuICAgIGRhdGEodmFsdWU6IEF0dGVudGlvbkRhdGEpOiB0aGlzXG4gICAgZGF0YSh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVkZ2VEYXRhID0gbmV3IEVkZ2VEYXRhKHZhbHVlKTtcbiAgICAgICAgdGhpcy5wbG90RGF0YSA9IHRoaXMuZWRnZURhdGEuZm9ybWF0KHRoaXMuX3RocmVzaG9sZCk7XG4gICAgICAgIHRoaXMuY3JlYXRlU2NhbGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIGhlaWdodCBpbiBhIEQzIHN0eWxlIHdheS4gSWYgbW9kaWZpZWQsIHRoZSBjb21wb25lbnQgd2lsbCB1cGRhdGUganVzdCB0aGUgcGFydCB0aGF0IGlzIG5lZWRlZCB0byBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgaGVpZ2h0KCk6IG51bWJlclxuICAgIGhlaWdodCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIGhlaWdodCh2YWx1ZT8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVpZ2h0ID0gdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2Nlc3MgLyBtb2RpZnkgdGhlIHdpZHRoIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB3aWR0aCgpOiBudW1iZXJcbiAgICB3aWR0aCh2YWx1ZTogbnVtYmVyKTogdGhpc1xuICAgIHdpZHRoKHZhbHVlPzogbnVtYmVyKTogdGhpcyB8IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VzcyAvIG1vZGlmeSB0aGUgdGhyZXNob2xkIGluIGEgRDMgc3R5bGUgd2F5LiBJZiBtb2RpZmllZCwgdGhlIGNvbXBvbmVudCB3aWxsIHVwZGF0ZSBqdXN0IHRoZSBwYXJ0IHRoYXQgaXMgbmVlZGVkIHRvIGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB0aHJlc2hvbGQoKTogbnVtYmVyXG4gICAgdGhyZXNob2xkKHZhbHVlOiBudW1iZXIpOiB0aGlzXG4gICAgdGhyZXNob2xkKHZhbHVlPykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RocmVzaG9sZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBsb3REYXRhID0gdGhpcy5lZGdlRGF0YS5mb3JtYXQodGhpcy5fdGhyZXNob2xkKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTY2FsZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IEF0dGVudGlvbkRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBBdHRlbnRpb25EYXRhKSB7XG4gICAgICAgIHRoaXMuc3ZnLmh0bWwoJycpXG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgVkNvbXBvbmVudCB9IGZyb20gXCIuL1Zpc0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2ltcGxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcblxuLy8gVGhlIGJlbG93IHR3byAoaW50ZXJmYWNlIGFuZCBmdW5jdGlvbikgY2FuIGJlY29tZSBhIGNsYXNzXG5leHBvcnQgdHlwZSBBdHRlbnRpb25IZWFkQm94SSA9IHtcbiAgICByb3dzOiBudW1iZXJbXVtdLFxuICAgIGxhYmVsczogbnVtYmVyW10sXG4gICAgbWF4OiBudW1iZXIsXG59XG5cbi8qKlxuICogRnJvbSBhbiBhdHRlbnRpb24gbWF0cml4IHNlbGVjdGVkIGJ5IGxheWVyLCBzaG93IGEgc3VtbWFyeSBvZiB0aGUgYXR0ZW50aW9ucyBiZWxvbmdpbmcgdG8gZWFjaCBoZWFkLlxuICogXG4gKiBAcGFyYW0gaGVhZE1hdCBUaGUgbWF0cml4IHJlcHJlc2VudGluZyBhbGwgdGhlIGF0dGVudGlvbnMgYnkgaGVhZCAobGF5ZXIgYWxyZWFkeSBzZWxlY3RlZClcbiAqIEBwYXJhbSBoZWFkTGlzdCBUaGUgaGVhZHMgdGhhdCBhcmUgc2VsZWN0ZWRcbiAqIEBwYXJhbSBzaWRlIElzIHRoaXMgdGhlIHJpZ2h0IG9yIHRoZSBsZWZ0IGRpc3BsYXk/XG4gKiBAcmV0dXJucyBJbmZvcm1hdGlvbiBuZWVkZWQgdG8gbGFiZWwgdGhlIGhlYWRib3hcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGVudGlvbkluZm8oaGVhZE1hdDogbnVtYmVyW11bXVtdLCBoZWFkTGlzdDogbnVtYmVyW10sIHNpZGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJsZWZ0XCIpOiBBdHRlbnRpb25IZWFkQm94SSB7XG4gICAgLy8gQ29sbGVjdCBvbmx5IGZyb20gaGVhZGxpc3QsIGF2ZXJhZ2UgZWFjaCBoZWFkLCB0cmFuc3Bvc2UgdG8gZWFzZSBpdGVyYXRpb25cbiAgICBpZiAoaGVhZExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd3M6IFtbXV0sXG4gICAgICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGF4aXM6IG51bWJlciA9IHNpZGUgPT0gXCJsZWZ0XCIgPyAyIDogMTtcblxuICAgIC8vIGF2ZXJhZ2UgYWNyb3NzIHRoZSBheGlzIHJlcHJlc2VudGluZyB0aGUgYXR0ZW50aW9ucy5cbiAgICBsZXQgZ2F0aGVyZWRNYXQgPSB0Zi50ZW5zb3IzZChoZWFkTWF0KS5nYXRoZXIoaGVhZExpc3QsIDApLm1lYW4oW2F4aXNdKS50cmFuc3Bvc2UoKTtcblxuICAgIGNvbnN0IHJvd0luZm8gPSA8bnVtYmVyW11bXT5nYXRoZXJlZE1hdC5hcnJheVN5bmMoKTtcblxuICAgIGNvbnN0IG91dDogQXR0ZW50aW9uSGVhZEJveEkgPSB7XG4gICAgICAgIHJvd3M6IHJvd0luZm8sXG4gICAgICAgIGxhYmVsczogaGVhZExpc3QsXG4gICAgICAgIG1heDogPG51bWJlcj5nYXRoZXJlZE1hdC5tYXgoKS5hcnJheVN5bmMoKSxcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0XG59XG5cbmludGVyZmFjZSBDdXJyZW50T3B0aW9ucyB7XG4gICAgaGVhZEhlaWdodDogbnVtYmVyXG4gICAgaGVhZFdpZHRoOiBudW1iZXJcbiAgICB4UGFkOiBudW1iZXJcbiAgICB5UGFkOiBudW1iZXJcbiAgICBib3hXaWR0aDogbnVtYmVyXG4gICAgdG90YWxXaWR0aDogbnVtYmVyXG4gICAgdG90YWxIZWlnaHQ6IG51bWJlclxufTtcblxuZXhwb3J0IGNsYXNzIEF0dGVudGlvbkhlYWRCb3ggZXh0ZW5kcyBWQ29tcG9uZW50PEF0dGVudGlvbkhlYWRCb3hJPntcbiAgICBjc3NfbmFtZSA9ICcnO1xuICAgIHJvd0Nzc05hbWUgPSAnYXR0LWhlYWQnO1xuICAgIGJveENzc05hbWUgPSAnYXR0LXJlY3QnO1xuXG4gICAgc3RhdGljIGV2ZW50cyA9IHtcbiAgICAgICAgcm93TW91c2VPdmVyOiBcIkF0dGVudGlvbkhlYWRCb3hfUm93TW91c2VPdmVyXCIsXG4gICAgICAgIHJvd01vdXNlT3V0OiBcIkF0dGVudGlvbkhlYWRCb3hfUm93TW91c2VPdXRcIixcbiAgICAgICAgYm94TW91c2VPdmVyOiBcIkF0dGVudGlvbkhlYWRCb3hfQm94TW91c2VPdmVyXCIsXG4gICAgICAgIGJveE1vdXNlT3V0OiBcIkF0dGVudGlvbkhlYWRCb3hfQm94TW91c2VPdXRcIixcbiAgICAgICAgYm94Q2xpY2s6IFwiQXR0ZW50aW9uSGVhZEJveF9Cb3hDbGlja1wiLFxuICAgIH07XG5cbiAgICBfZGF0YTogQXR0ZW50aW9uSGVhZEJveEk7XG5cbiAgICBfY3VycmVudDogUGFydGlhbDxDdXJyZW50T3B0aW9ucz4gPSB7fVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgYm94RGltOiAyNixcbiAgICAgICAgeXNjYWxlOiAxLCAvLyBBbW91bnQgdG8gc2NhbGUgYm94aGVpZ2h0IHRvIGdldCBpbmRpdmlkdWFsIGhlYWRzXG4gICAgICAgIHhzY2FsZTogMC41LCAvLyBBbW91bnQgdG8gc2NhbGUgYm94d2lkdGggdG8gZ2V0IGluZGl2aWR1YWwgaGVhZHNcbiAgICAgICAgc2lkZTogXCJsZWZ0XCIsXG4gICAgICAgIG1heFdpZHRoOiAyMDAsIC8vIE1heGltdW0gd2lkdGggb2YgU1ZHXG4gICAgICAgIG9mZnNldDogMCwgLy8gMSBpZiBmb3IgYXV0b3JlZ3Jlc3NpdmUgbW9kZWxzXG4gICAgfTtcblxuICAgIC8vIEQzIENvbXBvbmVudHNcbiAgICBoZWFkUm93czogRDNTZWw7XG4gICAgaGVhZENlbGxzOiBEM1NlbDtcbiAgICBvcGFjaXR5U2NhbGU6IGQzLlNjYWxlTGluZWFyPGFueSwgYW55PjtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnN1cGVySW5pdFNWRyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5faW5pdCgpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7XG4gICAgICAgIHRoaXMuaGVhZFJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuJHt0aGlzLnJvd0Nzc05hbWV9YClcbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzLnNlbGVjdEFsbChgJHt0aGlzLmJveENzc05hbWV9YClcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCAxXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50KCk6IFBhcnRpYWw8Q3VycmVudE9wdGlvbnM+IHtcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy5fY3VycmVudFxuXG4gICAgICAgIGNvbnN0IG5IZWFkcyA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGhcbiAgICAgICAgY29uc3QgYmFzZUhlYWRXaWR0aCA9IG9wLmJveERpbSAqIG9wLnhzY2FsZVxuXG4gICAgICAgIC8vIFNjYWxlIGhlYWR3aWR0aCBhY2NvcmRpbmcgdG8gbWF4aW11bSB3aWR0aFxuICAgICAgICBjb25zdCBnZXRIZWFkU2NhbGUgPSAobkgpID0+IChNYXRoLm1pbihvcC5tYXhXaWR0aCAvIG5ILCBiYXNlSGVhZFdpZHRoKSAvIGJhc2VIZWFkV2lkdGgpICogb3AueHNjYWxlO1xuXG4gICAgICAgIGN1ci5oZWFkSGVpZ2h0ID0gb3AuYm94RGltICogb3AueXNjYWxlO1xuICAgICAgICBjdXIuaGVhZFdpZHRoID0gZ2V0SGVhZFNjYWxlKG5IZWFkcykgKiBvcC5ib3hEaW07XG4gICAgICAgIGN1ci54UGFkID0gY3VyLmhlYWRXaWR0aDtcbiAgICAgICAgY3VyLnlQYWQgPSAob3AuYm94RGltIC0gY3VyLmhlYWRIZWlnaHQpIC8gMjtcblxuICAgICAgICBjb25zdCBnZXRCb3hXaWR0aCA9IChoZWFkV2lkdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1heEJ3aWR0aCA9IDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ3aWR0aCA9IHRoaXMuX2RhdGEucm93c1swXS5sZW5ndGggKiBjdXIuaGVhZFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IGQzLnNjYWxlTGluZWFyXG4gICAgICAgICAgICBpZiAoYndpZHRoID4gbWF4QndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1ci5ib3hXaWR0aCA9ICh0aGlzLl9kYXRhLnJvd3NbMF0ubGVuZ3RoICogY3VyLmhlYWRXaWR0aCk7XG4gICAgICAgIGN1ci50b3RhbFdpZHRoID0gKDIgKiBjdXIueFBhZCkgKyBjdXIuYm94V2lkdGg7XG4gICAgICAgIGN1ci50b3RhbEhlaWdodCA9IChvcC5ib3hEaW0gKiAodGhpcy5fZGF0YS5yb3dzLmxlbmd0aCArIG9wLm9mZnNldCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGJveEV2ZW50ID0gKGkpID0+IHsgcmV0dXJuIHsgaW5kOiBpLCBzaWRlOiBvcC5zaWRlLCBoZWFkOiBzZWxmLl9kYXRhLmxhYmVsc1tpXSB9IH1cbiAgICAgICAgY29uc3QgY3VyID0gdGhpcy51cGRhdGVDdXJyZW50KClcblxuICAgICAgICB0aGlzLmJhc2UuaHRtbCgnJyk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnRcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgY3VyLnRvdGFsV2lkdGgpXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBjdXIudG90YWxIZWlnaHQpXG5cbiAgICAgICAgdGhpcy5oZWFkUm93cyA9IHRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3NlbGYucm93Q3NzTmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoc2VsZi5fZGF0YS5yb3dzKVxuICAgICAgICAgICAgLmpvaW4oXCJnXCIpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIGNsYXNzOiAoZCwgaSkgPT4gYCR7c2VsZi5yb3dDc3NOYW1lfSAke3NlbGYucm93Q3NzTmFtZX0tJHtpfWAsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU1ZHLnRyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjdXIueFBhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAob3AuYm94RGltICogKGkgKyBvcC5vZmZzZXQpKSArIGN1ci55UGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdpZHRoOiBjdXIuYm94V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjdXIuaGVhZEhlaWdodCxcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdmVyLCB7IGluZDogaSwgc2lkZTogb3Auc2lkZSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5yb3dNb3VzZU91dCwgeyBpbmQ6IGksIHNpZGU6IG9wLnNpZGUgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5oZWFkQ2VsbHMgPSB0aGlzLmhlYWRSb3dzXG4gICAgICAgICAgICAuc2VsZWN0QWxsKGAke3RoaXMuYm94Q3NzTmFtZX1gKVxuICAgICAgICAgICAgLmRhdGEoZCA9PiBkKVxuICAgICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHJzKHtcbiAgICAgICAgICAgICAgICB4OiAoZCwgaSkgPT4gaSAqIGN1ci5oZWFkV2lkdGgsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBjbGFzczogdGhpcy5ib3hDc3NOYW1lLFxuICAgICAgICAgICAgICAgIGhlYWQ6IChkLCBpKSA9PiBzZWxmLl9kYXRhLmxhYmVsc1tpXSxcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VyLmhlYWRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGN1ci5oZWFkSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IChkOiBudW1iZXIpID0+IHRoaXMub3BhY2l0eVNjYWxlKGQpLFxuICAgICAgICAgICAgICAgIGZpbGw6IFwiYmx1ZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU92ZXIsIGJveEV2ZW50KGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihBdHRlbnRpb25IZWFkQm94LmV2ZW50cy5ib3hNb3VzZU91dCwgYm94RXZlbnQoaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKFwiY2xpY2tcIiwgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveENsaWNrLCBib3hFdmVudChpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXBwZW5kKFwic3ZnOnRpdGxlXCIpXG4gICAgICAgICAgICAudGV4dCgoZCwgaSkgPT4gXCJIZWFkIFwiICsgc2VsZi5fZGF0YS5sYWJlbHNbaV0pXG4gICAgfVxuXG5cbiAgICBfd3JhbmdsZShkYXRhOiBBdHRlbnRpb25IZWFkQm94SSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5vcGFjaXR5U2NhbGUgPSB0aGlzLm9wYWNpdHlTY2FsZS5kb21haW4oWzAsIGRhdGEubWF4XSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiBBdHRlbnRpb25IZWFkQm94SSkge1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtWQ29tcG9uZW50fSBmcm9tICcuL1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7c3BhY3lDb2xvcnN9IGZyb20gJy4uL2V0Yy9TcGFjeUluZm8nXG5pbXBvcnQge1NWR30gZnJvbSAnLi4vZXRjL1NWR3BsdXMnXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBEM1NlbCB9IGZyb20gJy4uL2V0Yy9VdGlsJztcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXInO1xuXG5pbnRlcmZhY2UgTWFyZ2luSW5mbyB7XG4gICAgdG9wOiBudW1iZXIsXG4gICAgYm90dG9tOiBudW1iZXIsXG4gICAgcmlnaHQ6IG51bWJlcixcbiAgICBsZWZ0OiBudW1iZXJcbn1cblxuLy8gRGVwZW5kZW50IG9uIHRoZSBvcHRpb25zIGluIHRoZSByZXNwb25zZVxudHlwZSBNYXRjaGVkTWV0YVNlbGVjdGlvbnMgPSBcInBvc1wiIHwgXCJkZXBcIiB8IFwiZW50XCJcblxuaW50ZXJmYWNlIE1hdGNoZWRNZXRhQ291bnQge1xuICAgIHBvczogbnVtYmVyXG4gICAgZGVwOiBudW1iZXJcbiAgICBpc19lbnQ6IG51bWJlclxufVxuXG5pbnRlcmZhY2UgTWF4QXR0TWV0YUNvdW50IHtcbiAgICBvZmZzZXQ6IG51bWJlclxufVxuXG50eXBlIE1hdGNoZWREYXRhSW50ZXJmYWNlID0gTWF0Y2hlZE1ldGFDb3VudFxudHlwZSBNYXhBdHREYXRhSW50ZXJmYWNlID0gTWF4QXR0TWV0YUNvdW50XG50eXBlIERhdGFJbnRlcmZhY2UgPSBNYXRjaGVkRGF0YUludGVyZmFjZSB8IE1heEF0dERhdGFJbnRlcmZhY2VcblxuaW50ZXJmYWNlIENvdW50ZWRIaXN0IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNvdW50OiBudW1iZXJcbn1cblxudHlwZSBSZW5kZXJEYXRhSW50ZXJmYWNlID0gQ291bnRlZEhpc3RbXVxuXG5cbi8qKlxuICogIERhdGEgZm9ybWF0dGluZyBmdW5jdGlvbnNcbiAqL1xuY29uc3QgdG9SZW5kZXJEYXRhID0gKG9iajoge1tzOiBzdHJpbmddOiBudW1iZXJ9KTogUmVuZGVyRGF0YUludGVyZmFjZSA9PiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaywgaSkgPT4ge1xuICAgIHJldHVybiB7bGFiZWw6IGssIGNvdW50OiBvYmpba119XG59KVxuXG5jb25zdCB0b1N0cmluZ09yTnVtID0gKGE6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmEgPSArYVxuICAgIGlmIChpc05hTihuYSkpIHtcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG4gICAgcmV0dXJuIG5hXG59XG5cbmNvbnN0IHNvcnRCeUxhYmVsID0gUi5zb3J0QnkoUi5jb21wb3NlKHRvU3RyaW5nT3JOdW0sIFIucHJvcCgnbGFiZWwnKSkpXG5jb25zdCBzb3J0QnlDb3VudCA9IFIuc29ydEJ5KFIucHJvcCgnY291bnQnKSlcblxuY29uc3QgdG9PcmRlcmVkUmVuZGVyID0gUi5jb21wb3NlKFxuICAgIFIucmV2ZXJzZSxcbiAgICAvLyBAdHMtaWdub3JlIC0tIFRPRE86IGZpeFxuICAgIHNvcnRCeUNvdW50LFxuICAgIHRvUmVuZGVyRGF0YVxuKVxuXG5leHBvcnQgY2xhc3MgQ29ycHVzSGlzdG9ncmFtPFQ+IGV4dGVuZHMgVkNvbXBvbmVudDxUPiB7XG5cbiAgICBjc3NfbmFtZSA9ICcnXG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge31cblxuICAgIF9jdXJyZW50ID0ge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgd2lkdGg6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEQzIENPTVBPTkVOVFNcbiAgICBzdmc6IEQzU2VsXG5cbiAgICBvcHRpb25zOiB7XG4gICAgICAgIG1hcmdpbjogTWFyZ2luSW5mb1xuICAgICAgICBiYXJXaWR0aDogbnVtYmVyXG4gICAgICAgIHdpZHRoOiBudW1iZXJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXJcbiAgICAgICAgdmFsOiBzdHJpbmdcbiAgICAgICAgeExhYmVsUm90OiBudW1iZXJcbiAgICAgICAgeExhYmVsT2Zmc2V0OiBudW1iZXJcbiAgICAgICAgeUxhYmVsT2Zmc2V0OiBudW1iZXJcbiAgICB9XG5cbiAgICBheGVzID0ge1xuICAgICAgICB4OiBkMy5zY2FsZUJhbmQoKSxcbiAgICAgICAgeTogZDMuc2NhbGVMaW5lYXIoKSxcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKGQzcGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zPXt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgICAgIHRvcDogMTAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgbGVmdDogNDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJXaWR0aDogMjUsXG4gICAgICAgICAgICB3aWR0aDogMTg1LFxuICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICB2YWw6IFwicG9zXCIsIC8vIENoYW5nZSBEZWZhdWx0LCBwYXNzIHRocm91Z2ggY29uc3RydWN0b3JcbiAgICAgICAgICAgIHhMYWJlbFJvdDogNDUsXG4gICAgICAgICAgICB4TGFiZWxPZmZzZXQ6IDE1LFxuICAgICAgICAgICAgeUxhYmVsT2Zmc2V0OiA1LFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdXBlckluaXRTVkcoKVxuICAgIH1cblxuICAgIG1ldGEoKTpNYXRjaGVkTWV0YVNlbGVjdGlvbnNcbiAgICBtZXRhKHZhbDpNYXRjaGVkTWV0YVNlbGVjdGlvbnMpOiB0aGlzXG4gICAgbWV0YSh2YWw/KSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52YWw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMudmFsID0gdmFsO1xuICAgICAgICB0aGlzLnVwZGF0ZSh0aGlzLl9kYXRhKVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9pbml0KCkge31cblxuICAgIHByaXZhdGUgY3JlYXRlWEF4aXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3Qgd2lkdGggPSBvcC53aWR0aCAtIG9wLm1hcmdpbi5sZWZ0IC0gb3AubWFyZ2luLnJpZ2h0XG5cbiAgICAgICAgdGhpcy5heGVzLnhcbiAgICAgICAgICAgIC5kb21haW4oUi5tYXAoUi5wcm9wKCdsYWJlbCcpLCBzZWxmLnJlbmRlckRhdGEpKVxuICAgICAgICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoXSlcbiAgICAgICAgICAgIC5wYWRkaW5nKDAuMSlcblxuICAgICAgICB0aGlzLl9jdXJyZW50LmNoYXJ0LndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVZQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBvcC5oZWlnaHQgLSBvcC5tYXJnaW4udG9wIC0gb3AubWFyZ2luLmJvdHRvbVxuXG4gICAgICAgIHRoaXMuYXhlcy55XG4gICAgICAgICAgICAuZG9tYWluKFswLCArZDMubWF4KFIubWFwKFIucHJvcCgnY291bnQnKSwgc2VsZi5yZW5kZXJEYXRhKSldKVxuICAgICAgICAgICAgLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pXG5cbiAgICAgICAgdGhpcy5fY3VycmVudC5jaGFydC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBeGVzKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVhBeGlzKClcbiAgICAgICAgdGhpcy5jcmVhdGVZQXhpcygpXG4gICAgfVxuXG4gICAgX3dyYW5nbGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBvdXQgPSBkYXRhW3RoaXMub3B0aW9ucy52YWxdXG4gICAgICAgIHJldHVybiB0b09yZGVyZWRSZW5kZXIob3V0KVxuICAgIH1cblxuICAgIHdpZHRoKCk6bnVtYmVyXG4gICAgd2lkdGgodmFsOm51bWJlcik6dGhpc1xuICAgIHdpZHRoKHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy53aWR0aCA9IHZhbDtcbiAgICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVhBeGlzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlaWdodCgpOm51bWJlclxuICAgIGhlaWdodCh2YWw6bnVtYmVyKTp0aGlzXG4gICAgaGVpZ2h0KHZhbD8pIHtcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWlnaHQgPSB2YWw7XG4gICAgICAgIHRoaXMudXBkYXRlSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlWUF4aXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpIHtcbiAgICAgICAgdGhpcy5zdmcuYXR0cignd2lkdGgnLCB0aGlzLm9wdGlvbnMud2lkdGgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIZWlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3ZnLmF0dHIoJ2hlaWdodCcsIHRoaXMub3B0aW9ucy5oZWlnaHQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWdXaWR0aChkYXRhOiBSZW5kZXJEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICByZXR1cm4gKGRhdGEubGVuZ3RoICogb3AuYmFyV2lkdGgpICsgb3AubWFyZ2luLmxlZnQgKyBvcC5tYXJnaW4ucmlnaHRcbiAgICB9XG5cbiAgICBfcmVuZGVyKGRhdGE6UmVuZGVyRGF0YUludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50O1xuXG4gICAgICAgIHRoaXMucGFyZW50Lmh0bWwoJycpXG4gICAgICAgIHRoaXMuc3ZnID0gdGhpcy5wYXJlbnRcblxuICAgICAgICB0aGlzLmNyZWF0ZUF4ZXMoKTtcbiAgICAgICAgdGhpcy53aWR0aCh0aGlzLmZpZ1dpZHRoKGRhdGEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGF4ZXNcbiAgICAgICAgY29uc3QgZyA9IHNlbGYuc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy50cmFuc2xhdGUoe3g6IG9wLm1hcmdpbi5sZWZ0LCB5Om9wLm1hcmdpbi50b3B9KSlcblxuICAgICAgICAvLyBIYWNrIHRvIGFsbG93IGNsZWFyaW5nIHRoaXMgaGlzdG9ncmFtcyB0byB3b3JrXG4gICAgICAgIHNlbGYuYmFzZSA9IGdcblxuICAgICAgICAvLyBGaXggYmVsb3cgZm9yIHBvc2l0aW9uYWwgY2hhbmdpbmdcbiAgICAgICAgICAgIGNvbnN0IGF4aXNCb3R0b20gPSBnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBTVkcudHJhbnNsYXRlKHt4OiAwLCB5OmN1cnIuY2hhcnQuaGVpZ2h0fSkpXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzZWxmLmF4ZXMueCkpXG5cbiAgICAgICAgICAgIGlmIChvcC52YWwgIT0gXCJvZmZzZXRcIikge1xuICAgICAgICAgICAgICAgIGF4aXNCb3R0b21cbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIG9wLnlMYWJlbE9mZnNldCkgICAvLyBNb3ZlIGJlbG93IHRoZSBheGlzXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCBvcC54TGFiZWxPZmZzZXQpICAvLyBPZmZzZXQgdG8gdGhlIHJpZ2h0IGEgYml0XG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFNWRy5yb3RhdGUob3AueExhYmVsUm90KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoc2VsZi5heGVzLnkpKVxuXG4gICAgICAgIGcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgLmpvaW4oJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuYXhlcy54KGQubGFiZWwpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuYXhlcy55KGQuY291bnQpOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCBzZWxmLmF4ZXMueC5iYW5kd2lkdGgoKSlcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGN1cnIuY2hhcnQuaGVpZ2h0IC0gc2VsZi5heGVzLnkoZC5jb3VudCk7IH0pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBrID0+IHNwYWN5Q29sb3JzLmNvbG9yU2NhbGVbb3AudmFsXShrLmxhYmVsKSlcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgJ2QzLXNlbGVjdGlvbi1tdWx0aSdcbmltcG9ydCB7ZDNTLCBEM1NlbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0ICogYXMgdHAgZnJvbSBcIi4uL2V0Yy90eXBlc1wiXG5pbXBvcnQgJy4uL2V0Yy94ZDMnXG5cbi8vIEhlbHBlcnNcbmNvbnN0IGN1cnJNYXRjaElkeCA9IChlbGVtKSA9PiArKDxFbGVtZW50PmVsZW0ucGFyZW50Tm9kZSkuZ2V0QXR0cmlidXRlKCdtYXRjaGlkeCcpXG5jb25zdCBjdXJyUm93TnVtID0gKGVsZW0pID0+ICsoPEVsZW1lbnQ+ZWxlbS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ3Jvd251bScpXG5jb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB4ID0+IGByZ2JhKDAsIDAsIDI1NSwgJHswLjYqeH0pYFxuXG5leHBvcnQgY2xhc3MgQ29ycHVzSW5zcGVjdG9yIGV4dGVuZHMgVkNvbXBvbmVudDx0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXT57XG4gICAgY3NzX25hbWUgPSAnY29ycHVzLWluc3BlY3Rvcic7XG4gICAgX2N1cnJlbnQ6IHt9O1xuXG4gICAgX2RhdGE6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdOyAvLyBUaGUgcGFzc2VkIGRhdGFcblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHJvd01vdXNlT3ZlcjogXCJDb3JwdXNJbnNwZWN0b3Jfcm93TW91c2VPdmVyXCIsXG4gICAgICAgIHJvd01vdXNlT3V0OiBcIkNvcnB1c0luc3BlY3Rvcl9yb3dNb3VzZU91dFwiLFxuICAgICAgICByb3dDbGljazogXCJDb3JwdXNJbnNwZWN0b3Jfcm93Q2xpY2tcIixcbiAgICAgICAgcm93RGJsQ2xpY2s6IFwiQ29ycHVzSW5zcGVjdG9yX3Jvd0RibENsaWNrXCIsXG4gICAgICAgIGNlbGxNb3VzZU92ZXI6IFwiQ29ycHVzSW5zcGVjdG9yX2NlbGxNb3VzZU92ZXJcIixcbiAgICAgICAgY2VsbE1vdXNlT3V0OiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsTW91c2VPdXRcIixcbiAgICAgICAgY2VsbENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsQ2xpY2tcIixcbiAgICAgICAgY2VsbERibENsaWNrOiBcIkNvcnB1c0luc3BlY3Rvcl9jZWxsRGJsQ2xpY2tcIixcbiAgICB9XG5cbiAgICBvcHRpb25zID0ge31cblxuICAgIC8vIENPTVBPTkVOVFNcbiAgICBpbnNwZWN0b3JSb3dzOiBEM1NlbFxuICAgIGluc3BlY3RvckNlbGxzOiBEM1NlbFxuICAgIHNjYWxlciA9IGQzLnNjYWxlUG93KCkucmFuZ2UoWzAsMC45XSkuZXhwb25lbnQoMilcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzpTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcilcbiAgICAgICAgdGhpcy5zdXBlckluaXRIVE1MKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUm93cygpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2RhdGFcblxuICAgICAgICB0aGlzLmluc3BlY3RvclJvd3MgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKFwiLmluc3BlY3Rvci1yb3dcIilcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbnNwZWN0b3Itcm93JywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgbWF0Y2hJZHg6IGQgPT4gZC5pbmRleCxcbiAgICAgICAgICAgICAgICByb3dOdW06IChkLCBpKSA9PiBpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c0luc3BlY3Rvci5ldmVudHMucm93TW91c2VPdmVyLCB7fSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb29sdGlwKCkge1xuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzID0gdGhpcy5pbnNwZWN0b3JDZWxsc1xuICAgICAgICAgICAgLmNsYXNzZWQoJ2NlbGx0b29sdGlwJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hcHBlbmQoJ3NwYW4nKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3Rvb2x0aXB0ZXh0JywgdHJ1ZSlcbiAgICAgICAgICAgIC5odG1sKChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50aXR5U3RyID0gZC5pc19lbnQgPyBcIjxicj5FbnRpdHlcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSAoPEVsZW1lbnQ+bltpXS5wYXJlbnROb2RlKS5nZXRBdHRyaWJ1dGUoJ2F0dCcpLnNsaWNlKDAsIDcpXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0U3RyID0gYDxicj5BdHRlbnRpb246ICR7YXR0fWBcblxuICAgICAgICAgICAgICAgIHJldHVybiBgUE9TOiAke2QucG9zLnRvTG93ZXJDYXNlKCl9PGJyPkRFUDogJHtkLmRlcC50b0xvd2VyQ2FzZSgpfWAgKyBlbnRpdHlTdHIgKyBhdHRTdHJcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDZWxscygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcblxuICAgICAgICB0aGlzLmluc3BlY3RvckNlbGxzID0gdGhpcy5pbnNwZWN0b3JSb3dzLnNlbGVjdEFsbCgnLmluc3BlY3Rvci1jZWxsJylcbiAgICAgICAgICAgIC5kYXRhKChkOnRwLkZhaXNzU2VhcmNoUmVzdWx0cykgPT4gZC50b2tlbnMpXG4gICAgICAgICAgICAuam9pbignZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbnNwZWN0b3ItY2VsbCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cignaW5kZXgtb2Zmc2V0JywgKGQsIGksIG46SFRNTEVsZW1lbnRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoSWR4ID0gY3Vyck1hdGNoSWR4KG5baV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgLSBtYXRjaElkeCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHBvczogZCA9PiBkLnBvcy50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIGRlcDogZCA9PiBkLmRlcC50b0xvd2VyQ2FzZSgpLCBcbiAgICAgICAgICAgICAgICBpc19lbnQ6IGQgPT4gZC5pc19lbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGV4dChkID0+IGQudG9rZW4ucmVwbGFjZShcIlxcdTAxMjBcIiwgXCIgXCIpKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ21hdGNoZWQtY2VsbCcsIGQgPT4gZC5pc19tYXRjaClcblxuICAgICAgICAvLyBIaWdobGlnaHQgdGhlIGNlbGxzIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgdGhpcy5pbnNwZWN0b3JDZWxscy5lYWNoKChkLGksbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gY3Vyck1hdGNoSWR4KG5baV0pXG4gICAgICAgICAgICBpZiAoaSA9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHQgPSBkLmlud2FyZFxuICAgICAgICAgICAgICAgIGNvbnN0IG1heEF0dCA9ICtkMy5tYXgoYXR0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJSb3cgPSBjdXJyUm93TnVtKG5baV0pXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGVyID0gc2VsZi5zY2FsZXIuZG9tYWluKFswLCBtYXhBdHRdKVxuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7Y3VyclJvd30nXWApXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoYC5pbnNwZWN0b3ItY2VsbGApXG4gICAgICAgICAgICAgICAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yKHNjYWxlcihhdHRbaV0pKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXR0JywgKGQsIGkpID0+IGF0dFtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzZWxmLmFkZFRvb2x0aXAoKVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVSb3dzKClcbiAgICAgICAgdGhpcy5jcmVhdGVDZWxscygpXG4gICAgfVxuXG4gICAgX2luaXQoKSB7fVxuXG4gICAgX3dyYW5nbGUoZGF0YTogdHAuRmFpc3NTZWFyY2hSZXN1bHRzW10pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGFcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuICAgICAgICAvLyBSZW1lbWJlciB0aGF0IHRoaXMuX2RhdGEgaXMgZGVmaW5lZCBpbiB3cmFuZ2xlIHdoaWNoIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIGJlZm9yZSByZW5kZXJcbiAgICAgICAgLy8gYXMgaXMgZGVmaW5lZCBpbiB0aGUgdXBkYXRlIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcydcbmltcG9ydCB7IEQzU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlzL1Zpc0NvbXBvbmVudCdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldGMvU2ltcGxlRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBTVkcgfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIlxuaW1wb3J0IHsgc3BhY3lDb2xvcnMgfSBmcm9tIFwiLi4vZXRjL1NwYWN5SW5mb1wiXG5pbXBvcnQgXCIuLi9ldGMveGQzXCJcblxuLy8gTmVlZCBhZGRpdG9pbmFsIGhlaWdodCBpbmZvcm1hdGlvbiB0byByZW5kZXIgYm94ZXNcbmludGVyZmFjZSBCYXNlRGF0YUludGVyZmFjZSBleHRlbmRzIHRwLkZhaXNzU2VhcmNoUmVzdWx0cyB7XG4gICAgaGVpZ2h0OiBudW1iZXJcbn1cbnR5cGUgRGF0YUludGVyZmFjZSA9IEJhc2VEYXRhSW50ZXJmYWNlW11cblxuaW50ZXJmYWNlIENvbG9yTWV0YUJhc2VEYXRhIHtcbiAgICBwb3M6IHN0cmluZ1xuICAgIGRlcDogc3RyaW5nXG4gICAgaXNfZW50OiBib29sZWFuXG4gICAgdG9rZW46IHN0cmluZ1xufVxuXG50eXBlIERpc3BsYXlPcHRpb25zID0gXCJwb3NcIiB8IFwiZGVwXCIgfCBcImVudFwiXG5cbmZ1bmN0aW9uIG1hbmFnZXJEYXRhMk1hdERhdGEoZGF0YUluOiBEYXRhSW50ZXJmYWNlLCBpbmRleE9mZnNldCA9IDAsIHRvUGljayA9IFsncG9zJ10pIHtcblxuICAgIGNvbnN0IG91dE9mUmFuZ2VPYmo6IENvbG9yTWV0YUJhc2VEYXRhID0ge1xuICAgICAgICBwb3M6IG51bGwsXG4gICAgICAgIGRlcDogbnVsbCxcbiAgICAgICAgaXNfZW50OiBudWxsLFxuICAgICAgICB0b2tlbjogbnVsbCxcbiAgICB9XG5cbiAgICBjb25zdCBjaG9vc2VQcm9wcyA9IFIucGljayh0b1BpY2spXG5cbiAgICBjb25zdCBkYXRhT3V0ID0gZGF0YUluLm1hcChkID0+IHtcbiAgICAgICAgY29uc3Qgd29yZElkeCA9IGQuaW5kZXggKyBpbmRleE9mZnNldDtcbiAgICAgICAgaWYgKCh3b3JkSWR4IDwgMCkgfHwgKHdvcmRJZHggPj0gZC50b2tlbnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBvdXRPZlJhbmdlT2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3T2JqID0gY2hvb3NlUHJvcHMoZC50b2tlbnNbd29yZElkeF0pXG5cbiAgICAgICAgcmV0dXJuIFIuYXNzb2MoJ2hlaWdodCcsIGQuaGVpZ2h0LCBuZXdPYmopXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhT3V0XG59XG5cblxuZXhwb3J0IGNsYXNzIENvcnB1c01hdE1hbmFnZXIgZXh0ZW5kcyBWQ29tcG9uZW50PERhdGFJbnRlcmZhY2U+e1xuICAgIGNzc19uYW1lID0gJ2NvcnB1cy1tYXQtY29udGFpbmVyJ1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGNlbGxXaWR0aDogMTAsXG4gICAgICAgIHRvUGljazogWydwb3MnXSxcbiAgICAgICAgaWR4czogWy0xLCAwLCAxXSxcbiAgICAgICAgZGl2SG92ZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgIGhlaWdodDogNDAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZXZlbnRzID0ge1xuICAgICAgICBtb3VzZU92ZXI6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU92ZXJcIixcbiAgICAgICAgbW91c2VPdXQ6IFwiQ29ycHVzTWF0TWFuYWdlcl9Nb3VzZU91dFwiLFxuICAgICAgICBjbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX0NsaWNrXCIsXG4gICAgICAgIGRibENsaWNrOiBcIkNvcnB1c01hdE1hbmFnZXJfRGJsQ2xpY2tcIixcbiAgICAgICAgcmVjdE1vdXNlT3ZlcjogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RNb3VzZU92ZXJcIixcbiAgICAgICAgcmVjdE1vdXNlT3V0OiBcIkNvcnB1c01hdE1hbmFnZXJfUmVjdE1vdXNlT3V0XCIsXG4gICAgICAgIHJlY3RDbGljazogXCJDb3JwdXNNYXRNYW5hZ2VyX1JlY3RDbGlja1wiLFxuICAgICAgICByZWN0RGJsQ2xpY2s6IFwiQ29ycHVzTWF0TWFuYWdlcl9SZWN0RGJsQ2xpY2tcIixcbiAgICB9XG5cbiAgICAvLyBUaGUgZDMgY29tcG9uZW50cyB0aGF0IGFyZSBzYXZlZCB0byBtYWtlIHJlbmRlcmluZyBmYXN0ZXJcbiAgICBjb3JwdXNNYXRzOiBEM1NlbFxuICAgIHJvd0dyb3VwczogRDNTZWxcbiAgICBkaXZIb3ZlcjogRDNTZWxcblxuICAgIF9jdXJyZW50ID0ge31cbiAgICByb3dDc3NOYW1lID0gJ2luZGV4LW1hdGNoLXJlc3VsdHMnXG4gICAgY2VsbENzc05hbWUgPSAnaW5kZXgtY2VsbC1yZXN1bHQnXG5cbiAgICBfZGF0YTogRGF0YUludGVyZmFjZVxuXG4gICAgc3RhdGljIGNvbG9yU2NhbGU6IHRwLkNvbG9yTWV0YVNjYWxlID0gc3BhY3lDb2xvcnMuY29sb3JTY2FsZTtcblxuICAgIC8vIFNlbGVjdGlvbnNcbiAgICBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzcGFyZW50LCBldmVudEhhbmRsZXIpXG4gICAgICAgIHRoaXMuaWR4cyA9IFstMSwgMCwgMV07XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKVxuICAgICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICBnZXQgaWR4cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pZHhzO1xuICAgIH1cblxuICAgIHNldCBpZHhzKHZhbDogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmlkeHMgPSB2YWxcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhdGljIGRvbSBlbGVtZW50c1xuICAgIF9pbml0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb3JwdXNNYXRzID0gdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKVxuICAgICAgICB0aGlzLnJvd0dyb3VwcyA9IHRoaXMuY29ycHVzTWF0cy5zZWxlY3RBbGwoYC4ke3RoaXMucm93Q3NzTmFtZX1gKVxuICAgICAgICB0aGlzLmRpdkhvdmVyID0gdGhpcy5iYXNlLmFwcGVuZCgnZGl2JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtYXQtaG92ZXItZGlzcGxheScsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZCgndGV4dC1jZW50ZXInLCB0cnVlKVxuICAgICAgICAgICAgLnN0eWxlKCd3aWR0aCcsIFN0cmluZyh0aGlzLm9wdGlvbnMuZGl2SG92ZXIud2lkdGgpICsgJ3B4JylcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0JywgU3RyaW5nKHRoaXMub3B0aW9ucy5kaXZIb3Zlci5oZWlnaHQpICsgJ3B4JylcblxuICAgICAgICB0aGlzLmRpdkhvdmVyLmFwcGVuZCgncCcpXG4gICAgfVxuXG4gICAgcGljayh2YWw6IERpc3BsYXlPcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b1BpY2sgPSBbdmFsXVxuICAgICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuXG4gICAgYWRkUmlnaHQoKSB7XG4gICAgICAgIGNvbnN0IGFkZGVkSWR4ID0gUi5sYXN0KHRoaXMuaWR4cykgKyAxO1xuICAgICAgICB0aGlzLmlkeHMucHVzaChhZGRlZElkeClcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwicmlnaHRcIilcbiAgICB9XG5cbiAgICBhZGRMZWZ0KCkge1xuICAgICAgICBjb25zdCBhZGRlZElkeCA9IHRoaXMuaWR4c1swXSAtIDE7XG4gICAgICAgIGNvbnN0IGFkZERlY3JlbWVudGVkSGVhZDogKHg6IG51bWJlcltdKSA9PiBudW1iZXJbXSA9IHggPT4gUi5pbnNlcnQoMCwgUi5oZWFkKHgpIC0gMSkoeClcbiAgICAgICAgdGhpcy5pZHhzID0gYWRkRGVjcmVtZW50ZWRIZWFkKHRoaXMuaWR4cylcbiAgICAgICAgdGhpcy5hZGRDb3JwdXNNYXQoYWRkZWRJZHgsIFwibGVmdFwiKVxuICAgIH1cblxuICAgIGtpbGxSaWdodCgpIHtcbiAgICAgICAgdGhpcy5raWxsKE1hdGgubWF4KC4uLnRoaXMuaWR4cykpXG4gICAgfVxuXG4gICAga2lsbExlZnQoKSB7XG4gICAgICAgIHRoaXMua2lsbChNYXRoLm1pbiguLi50aGlzLmlkeHMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlZGdlIHZhbHVlIGZyb20gY29udGFpbmVkIGluZGV4ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkIEluZGV4IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIGtpbGwoZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChkID09IE1hdGgubWluKC4uLnRoaXMuaWR4cykgfHwgZCA9PSBNYXRoLm1heCguLi50aGlzLmlkeHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZHhzID0gUi53aXRob3V0KFtkXSwgdGhpcy5pZHhzKVxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zZWxlY3RBbGwoYC5vZmZzZXQtJHtkfWApLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfd3JhbmdsZShkYXRhOiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZGF0YSh2YWw/OiBEYXRhSW50ZXJmYWNlKSB7XG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhID0gdmFsO1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWluIHJlbmRlcmluZyBjb2RlLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIGRhdGEgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlIF91cGRhdGVEYXRhKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5iYXNlLnNlbGVjdEFsbCgnLmNvcnB1cy1tYXQnKS5yZW1vdmUoKVxuXG4gICAgICAgIHRoaXMuaWR4cy5mb3JFYWNoKChpZHhPZmZzZXQsIGkpID0+IHtcbiAgICAgICAgICAgIHNlbGYuYWRkQ29ycHVzTWF0KGlkeE9mZnNldClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW5vdGhlciB3b3JkJ3MgbWV0YSBpbmZvcm1hdGlvbiBtYXRyaXggY29sdW1uIHRvIGVpdGhlciBzaWRlIG9mIHRoZSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIGlkeE9mZnNldCBEaXN0YW5jZSBvZiB3b3JkIGZyb20gbWF0Y2hlZCB3b3JkIGluIHRoZSBzZW50ZW5jZVxuICAgICAqIEBwYXJhbSB0b1RoZSBJbmRpY2F0ZXMgYWRkaW5nIHRvIHRoZSBcImxlZnRcIiBvciB0byB0aGUgXCJyaWdodFwiIG9mIHRoZSBpbmRleFxuICAgICAqL1xuICAgIGFkZENvcnB1c01hdChpZHhPZmZzZXQ6IG51bWJlciwgdG9UaGU6IFwicmlnaHRcIiB8IFwibGVmdFwiID0gXCJyaWdodFwiKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgYm94V2lkdGggPSBvcC5jZWxsV2lkdGggKiBvcC50b1BpY2subGVuZ3RoO1xuICAgICAgICBjb25zdCBib3hIZWlnaHQgPSBSLnN1bShSLm1hcChSLnByb3AoJ2hlaWdodCcpLCB0aGlzLl9kYXRhKSlcblxuICAgICAgICBsZXQgY29ycHVzTWF0O1xuXG4gICAgICAgIGlmICh0b1RoZSA9PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5hcHBlbmQoJ2RpdicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9UaGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIGNvcnB1c01hdCA9IHRoaXMuYmFzZS5pbnNlcnQoJ2RpdicsIFwiOmZpcnN0LWNoaWxkXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcInRvVGhlIG11c3QgaGF2ZSBhcmd1bWVudCBvZiAnbGVmdCcgb3IgJ3JpZ2h0J1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29ycHVzTWF0ID0gY29ycHVzTWF0XG4gICAgICAgICAgICAuZGF0YShbaWR4T2Zmc2V0XSlcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBjb3JwdXMtbWF0IG9mZnNldC0ke2lkeE9mZnNldH1gKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsIGlkeE9mZnNldClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cnMoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBib3hXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveEhlaWdodCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudEhhbmRsZXIudHJpZ2dlcihDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5tb3VzZU92ZXIsIHsgaWR4OiBpLCBvZmZzZXQ6IGQsIHZhbDogc2VsZi5vcHRpb25zLnRvUGlja1swXSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdXQsIHsgaWR4OiBpLCBvZmZzZXQ6IGQgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hZGRSb3dHcm91cChjb3JwdXNNYXQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWF0IFRoZSBiYXNlIGRpdiBvbiB3aGljaCB0byBhZGQgbWF0cmljZXMgYW5kIHJvd3NcbiAgICAgKi9cbiAgICBhZGRSb3dHcm91cChtYXQ6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvcCA9IHRoaXMub3B0aW9ucztcblxuICAgICAgICBjb25zdCBoZWlnaHRzID0gUi5tYXAoUi5wcm9wKCdoZWlnaHQnKSwgdGhpcy5fZGF0YSlcblxuICAgICAgICBjb25zdCBbaGVpZ2h0U3VtLCByYXdIZWlnaHRMaXN0XSA9IFIubWFwQWNjdW0oKHgsIHkpID0+IFtSLmFkZCh4LCB5KSwgUi5hZGQoeCwgeSldLCAwLCBoZWlnaHRzKVxuICAgICAgICBjb25zdCBmaXhMaXN0OiAoeDogbnVtYmVyW10pID0+IG51bWJlcltdID0gUi5jb21wb3NlKFIuZHJvcExhc3QoMSksXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBSLnByZXBlbmQoMClcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBoZWlnaHRMaXN0ID0gZml4TGlzdChyYXdIZWlnaHRMaXN0KVxuXG4gICAgICAgIGNvbnN0IHJvd0dyb3VwID0gbWF0LnNlbGVjdEFsbChgLiR7c2VsZi5yb3dDc3NOYW1lfWApXG4gICAgICAgICAgICAuZGF0YShkID0+IG1hbmFnZXJEYXRhMk1hdERhdGEoc2VsZi5fZGF0YSwgZCwgb3AudG9QaWNrKSlcbiAgICAgICAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtzZWxmLnJvd0Nzc05hbWV9ICR7c2VsZi5yb3dDc3NOYW1lfS0ke2l9YFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKFwicm93LW51bVwiLCAoZCxpKSA9PiBpKVxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgZCA9PiBkLmhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gU1ZHLnRyYW5zbGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IGhlaWdodExpc3RbaV0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIG9wLnRvUGljay5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgc2VsZi5hZGRSZWN0KHJvd0dyb3VwLCAwLCBwcm9wKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFJlY3QoZzogRDNTZWwsIHhTaGlmdDogbnVtYmVyLCBwcm9wOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgY29uc3Qgb3AgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgICBjb25zdCByZWN0cyA9IGcuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRycyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG9wLmNlbGxXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGQgPT4gZC5oZWlnaHQgLSAzLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNWRy50cmFuc2xhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogeFNoaWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMS41LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDb3JwdXNNYXRNYW5hZ2VyLmNvbG9yU2NhbGVbcHJvcF0oZFtwcm9wXSkpXG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGdldEJhc2VYID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgIGNvbnN0IGdldEJhc2VZID0gKCkgPT4gKDxIVE1MRWxlbWVudD5zZWxmLmJhc2Uubm9kZSgpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICBnLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLy8gR2V0IG9mZnNldFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IGQzLnNlbGVjdCh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZSkgLy8gQ29sdW1uXG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gK2NvbC5hdHRyKCdvZmZzZXQnKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMucmVjdE1vdXNlT3Zlciwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGl2SG92ZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkMy5zZWxlY3QodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUpIC8vIENvbHVtblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9ICtjb2wuYXR0cignb2Zmc2V0JylcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU91dCwge2lkeDogaSwgb2Zmc2V0OiBvZmZzZXR9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdXNlID0gZDMubW91c2Uoc2VsZi5iYXNlLm5vZGUoKSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZPZmZzZXQgPSBbMywgM11cbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gbW91c2VbMF0gKyBnZXRCYXNlWCgpIC0gKG9wLmRpdkhvdmVyLndpZHRoICsgZGl2T2Zmc2V0WzBdKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IG1vdXNlWzFdICsgZ2V0QmFzZVkoKSAtIChvcC5kaXZIb3Zlci5oZWlnaHQgKyBkaXZPZmZzZXRbMV0pXG4gICAgICAgICAgICAgICAgc2VsZi5kaXZIb3ZlclxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBTdHJpbmcobGVmdCkgKyAncHgnKVxuICAgICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIFN0cmluZyh0b3ApICsgJ3B4JylcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbCgncCcpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGRbcHJvcF0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIERhdGEgdG8gZGlzcGxheVxuICAgICAqL1xuICAgIF9yZW5kZXIoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl91cGRhdGVEYXRhKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCAnZDMtYXJyYXknXG5pbXBvcnQgKiBhcyBhdSBmcm9tICcuLi9ldGMvYXJyYXlVdGlscydcbmltcG9ydCAqIGFzIHRmIGZyb20gJ0B0ZW5zb3JmbG93L3RmanMnXG5pbXBvcnQgeyBUeXBlZEFycmF5IH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb3JlL2Rpc3QvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkZ2Uge1xuICAgIGk6IG51bWJlciwgLy8gU291cmNlIGluZGV4XG4gICAgajogbnVtYmVyLCAvLyBUYXJnZXQgaW5kZXhcbiAgICB2OiBudW1iZXIsIC8vIFZhbHVlXG59XG5cbi8qKlxuICogQ29udmVydCBkYXRhIG1hdHJpeCB0byBuZWNlc3NhcnkgZGF0YSBhcnJheSB0byBwYXNzIHRvIFNWRyBjb25uZWN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9FZGdlcyAoZGF0YTpudW1iZXJbXVtdLCBjdXRvZmZBbXQ9MSkgOiBFZGdlW10ge1xuICAgIGxldCBvdXRBcnI6IEVkZ2VbXSA9IFtdO1xuICAgIGxldCBjdXRvZmY6IG51bWJlcjtcbiAgICBkYXRhLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBjdXRvZmYgPSBjdXRvZmZBbXQgKiBkMy5zdW0ocm93KTtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBjb25zdCBzb3J0ZWRBcnI6YXUuU29ydEFycmF5ID0gYXUuc29ydFdpdGhJbmRpY2VzKHJvdyk7XG5cbiAgICAgICAgc29ydGVkQXJyLmFyci5mb3JFYWNoKCh2LGopID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyIDwgY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqOiBFZGdlID0ge1xuICAgICAgICAgICAgICAgICAgICBpOiBpLFxuICAgICAgICAgICAgICAgICAgICBqOiBzb3J0ZWRBcnIuc29ydEluZGljZXNbal0sXG4gICAgICAgICAgICAgICAgICAgIHY6IHYsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG91dEFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIHJldHVybiBvdXRBcnI7XG59XG4vKipcbiAqIENsYXNzIGZvciBpbXBsZW1lbnRpbmcgb3BlcmF0aW9ucyBvbiBBdHRlbnRpb25HcmFwaCBpbXBsZW1lbnRhdGlvbi4gXG4gKiBDbG9zZWx5IHRpZWQgdG8gW1tBdHRlbnRpb25Db25uZWN0b3JdXVxuICovXG5leHBvcnQgY2xhc3MgRWRnZURhdGEge1xuICAgIHJlYWRvbmx5IHRlbnNEYXRhOnRmLlRlbnNvcjtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgZGF0YTpudW1iZXJbXVtdKXtcbiAgICAgICAgdGhpcy50ZW5zRGF0YSA9IHRmLnRlbnNvcihkYXRhKTtcbiAgICB9XG5cbiAgICBtaW4oYXhpcz86bnVtYmVyKTpUeXBlZEFycmF5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWluKGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgbWF4KGF4aXM/Om51bWJlcik6VHlwZWRBcnJheXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuc0RhdGEubWF4KGF4aXMpLmRhdGFTeW5jKCk7XG4gICAgfVxuXG4gICAgZXh0ZW50KGF4aXM/Om51bWJlcik6bnVtYmVyW11bXSB7XG4gICAgICAgIHJldHVybiBkMy56aXAodGhpcy5taW4oYXhpcyksIHRoaXMubWF4KGF4aXMpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgZGF0YSB0byBzZW5kIHRvIFNWRyBjaGFydC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYWNjdW11bGF0ZVRocmVzaCAtIEEgZmxvYXQgYmV0d2VlbiAwIGFuZCAxLCBpbmRpY2F0aW5nIHRoZSBhbW91bnQgb2Ygd2VpZ2h0IHRvIGRpc3BsYXkuIERlZmF1bHRzIHRvIDAuNy5cbiAgICAgKi9cbiAgICBmb3JtYXQgKGFjY3VtdWxhdGVUaHJlc2g9MC43KTpFZGdlW10ge1xuICAgICAgICByZXR1cm4gdG9FZGdlcyh0aGlzLmRhdGEsIGFjY3VtdWxhdGVUaHJlc2gpO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3Qgc2NhbGVMaW5lYXJXaWR0aCA9IG9wYWNpdHkgPT4gNSAqIG9wYWNpdHleMC4zMzsiLCJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyBWQ29tcG9uZW50IH0gZnJvbSBcIi4vVmlzQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaW1wbGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXRjL1NpbXBsZUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgRDNTZWwgfSBmcm9tIFwiLi4vZXRjL1V0aWxcIjtcbmltcG9ydCAqIGFzIHRwIGZyb20gXCIuLi9ldGMvdHlwZXNcIlxuXG50eXBlIGluZm9FdmVudEZyb21JID0gKHNlbDogRDNTZWwsIGk6IG51bWJlcikgPT4gdHAuVG9rZW5FdmVudFxudHlwZSBpbmZvRW1iZWRkaW5nRXZlbnRGcm9tSSA9IChzZWw6IEQzU2VsLCBpOiBudW1iZXIsIGVtYmVkOiBudW1iZXJbXSkgPT4gdHAuVG9rZW5FbWJlZGRpbmdFdmVudFxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGV4dFRva2VucyBleHRlbmRzIFZDb21wb25lbnQ8dHAuRnVsbFNpbmdsZVRva2VuSW5mb1tdPntcblxuICAgIGFic3RyYWN0IGNzc19uYW1lOiBzdHJpbmdcbiAgICBhYnN0cmFjdCBzaWRlOiB0cC5TaWRlT3B0aW9uc1xuICAgIGVJbmZvOiBpbmZvRXZlbnRGcm9tSSA9IChzZWwsIGkpID0+IHsgcmV0dXJuIHsgc2VsOiBzZWwsIHNpZGU6IHRoaXMuc2lkZSwgaW5kOiBpIH0gfVxuICAgIGVFbWJlZGRpbmc6IGluZm9FbWJlZGRpbmdFdmVudEZyb21JID0gKHNlbCwgaSwgZW1iZWQpID0+IHsgcmV0dXJuIHsgc2VsOiBzZWwsIHNpZGU6IHRoaXMuc2lkZSwgaW5kOiBpLCBlbWJlZGRpbmdzOiBlbWJlZCB9IH1cblxuICAgIHN0YXRpYyBldmVudHMgPSB7XG4gICAgICAgIHRva2VuTW91c2VPdmVyOiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3ZlclwiLFxuICAgICAgICB0b2tlbk1vdXNlT3V0OiBcIlRleHRUb2tlbl9Ub2tlbk1vdXNlT3V0XCIsXG4gICAgICAgIHRva2VuQ2xpY2s6IFwiVGV4dFRva2VuX1Rva2VuQ2xpY2tcIixcbiAgICAgICAgdG9rZW5EYmxDbGljazogXCJUZXh0VG9rZW5fVG9rZW5EYmxDbGlja1wiLFxuICAgIH07XG5cbiAgICBkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW107XG5cbiAgICBfY3VycmVudDoge307XG5cbiAgICBvcHRpb25zID0ge1xuICAgICAgICBib3hoZWlnaHQ6IDI2LFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuc3VwZXJJbml0SFRNTChvcHRpb25zKTtcbiAgICB9XG5cbiAgICBtYXNrKG1hc2tJbmRzOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLnBhcmVudC5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5lYWNoKChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgICAgICAgc2VsLmNsYXNzZWQoXCJtYXNrZWQtdG9rZW5cIiwgXy5pbmNsdWRlcyhtYXNrSW5kcywgaSkpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEVtYmVkZGluZyhpbmQ6IG51bWJlcik6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm8ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtpbmRdXG4gICAgfVxuXG4gICAgX2luaXQoKSB7IH1cblxuICAgIF93cmFuZ2xlKGRhdGE6IHRwLkZ1bGxTaW5nbGVUb2tlbkluZm9bXSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgX3JlbmRlcihkYXRhOiB0cC5GdWxsU2luZ2xlVG9rZW5JbmZvW10pIHtcbiAgICAgICAgLy8gUmVzZXQgdG9rZW4gZGlzcGxheVxuICAgICAgICB0aGlzLmJhc2Uuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKVxuXG4gICAgICAgIGNvbnN0IG9wID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBBZGQgYmxhbmsgZGl2c1xuICAgICAgICBjb25zb2xlLmxvZyhgSW50ZXJuYWwgb2Zmc2V0ICgke3RoaXMuc2lkZX0pOiBgLCBvcC5vZmZzZXQpO1xuICAgICAgICBjb25zdCBibGFua0RpdnMgPSB0aGlzLmJhc2Uuc2VsZWN0QWxsKGAuYmxhbmstdGV4dC1ib3hgKVxuXG4gICAgICAgIGJsYW5rRGl2cy5kYXRhKFIucmFuZ2UoMCwgb3Aub2Zmc2V0KSlcbiAgICAgICAgICAgIC5qb2luKFwiZGl2XCIpXG4gICAgICAgICAgICAuY2xhc3NlZChcImJsYW5rLXRleHQtYm94XCIsIHRydWUpXG4gICAgICAgICAgICAuY2xhc3NlZChcInRva2VuXCIsIHRydWUpXG4gICAgICAgICAgICAuc3R5bGUoXCJoZWlnaHRcIiwgb3AuYm94aGVpZ2h0ICsgJ3B4JylcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiBcIiAgXCIpXG5cblxuICAgICAgICAvLyBSZW5kZXIgbm9ybWFsIHRleHQgYm94IGRhdGFcbiAgICAgICAgY29uc3QgdGV4dEJveGVzID0gPEQzU2VsPnRoaXMuYmFzZS5zZWxlY3RBbGwoYC4ke3RoaXMuY3NzX25hbWV9YClcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbihcImRpdlwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCAoZCwgaSkgPT4gYHRva2VuICR7dGhpcy5jc3NfbmFtZX0gdG9rZW4tJHtpfWApXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIChkLCBpKSA9PiBgJHt0aGlzLmNzc19uYW1lfS0ke2l9YClcbiAgICAgICAgICAgIC5zdHlsZSgnaGVpZ2h0Jywgb3AuYm94aGVpZ2h0ICsgJ3B4JylcbiAgICAgICAgICAgIC50ZXh0KChkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQudGV4dC5yZXBsYWNlKFwiXFx1MDEyMFwiLCBcIiBcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbC5zdHlsZSgnYmFja2dyb3VuZCcsICdsaWdodGJsdWUnKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuTW91c2VPdmVyLCBzZWxmLmVJbmZvKHNlbCwgaSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWwuc3R5bGUoJ2JhY2tncm91bmQnLCAwKVxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU91dCwgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbCA9IGQzLnNlbGVjdChuW2ldKTtcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50SGFuZGxlci50cmlnZ2VyKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuQ2xpY2ssIHNlbGYuZUVtYmVkZGluZyhzZWwsIGksIGQuZW1iZWRkaW5ncykpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdkYmxjbGljaycsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gZDMuc2VsZWN0KG5baV0pO1xuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRIYW5kbGVyLnRyaWdnZXIoVGV4dFRva2Vucy5ldmVudHMudG9rZW5EYmxDbGljaywgc2VsZi5lSW5mbyhzZWwsIGkpKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdFRleHRUb2tlbiBleHRlbmRzIFRleHRUb2tlbnMge1xuXG4gICAgY3NzX25hbWUgPSAnbGVmdC10b2tlbic7XG4gICAgc2lkZTogdHAuU2lkZU9wdGlvbnMgPSAnbGVmdCc7XG4gICAgb2Zmc2V0OiBudW1iZXIgPSAxO1xuXG4gICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIFJpZ2h0VGV4dFRva2VuIGV4dGVuZHMgVGV4dFRva2VucyB7XG4gICAgY3NzX25hbWUgPSAncmlnaHQtdG9rZW4nO1xuICAgIHNpZGU6IHRwLlNpZGVPcHRpb25zID0gJ3JpZ2h0J1xuICAgIG9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKGQzUGFyZW50OiBEM1NlbCwgZXZlbnRIYW5kbGVyPzogU2ltcGxlRXZlbnRIYW5kbGVyLCBvcHRpb25zOiB7fSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGQzUGFyZW50LCBldmVudEhhbmRsZXIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBIZW5kcmlrIFN0cm9iZWx0IChoZW5kcmlrLnN0cm9iZWx0LmNvbSkgb24gMTIvMy8xNi5cbiAqIE1vZGlmaWVkIGJ5IEJlbiBIb292ZXIgb24gNC8xNi8yMDE5XG4gKi9cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHtEM1NlbCwgVXRpbH0gZnJvbSBcIi4uL2V0Yy9VdGlsXCI7XG5pbXBvcnQge1NpbXBsZUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7U1ZHfSBmcm9tIFwiLi4vZXRjL1NWR3BsdXNcIjtcblxuLyoqXG4gKiBTaG91bGQgaGF2ZSBWQ29tcG9uZW50SFRNTCBhbmQgVkNvbXBvbmVudFNWR1xuICogXG4gKiBDb21tb24gUHJvcGVydGllczpcbiAqIC0gZXZlbnRzXG4gKiAtIGV2ZW50SGFuZGxlciAoViBpbXBvcnRhbnQpXG4gKiAtIG9wdGlvbnMgKE1haW50YWlucyBwdWJsaWMgc3RhdGUuIENhbiBleHBvc2UgdGhlc2Ugd2l0aCBnZXQvc2V0IGZ1bmN0aW9ucyB3aXRoIGF1dG8gdXBkYXRlKVxuICogLSBfY3VycmVudCAoTWFpbnRhaW5zIHByaXZhdGUgc3RhdGUpXG4gKiAtIGNzc05hbWUgKHN5bmNlZCB3aXRoIGNvcnJlc3BvbmRpbmcgQ1NTIGZpbGUpXG4gKiAtIHBhcmVudCAoSFRNTCBpcyBkaXYgY29udGFpbmluZyB0aGUgYmFzZSwgU1ZHIGlzIFNWRyBlbGVtZW50KVxuICogLSBiYXNlIChIVE1MIGlzIGRpdiB3aXRoIGNzc19uYW1lIGVzdGFibGlzaGVkKVxuICogLSBfZGF0YSAoRGF0YSB1c2VkIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBjb21wb25lbnQpXG4gKiAtIF9yZW5kZXJEYXRhIChEYXRhIG5lZWRlZCB0byBkaXNwbGF5LiBUaGlzIG1heSBub3QgYmUgbmVlZGVkLCBidXQgaXMgY3VycmVudGx5IHVzZWQgaW4gaGlzdG9ncmFtKVxuICogXG4gKiBDb21tb24gTWV0aG9kczpcbiAqIC0gY29uc3RydWN0b3JcbiAqIC0gX3JlbmRlcigpICAgICAgQ29uc2lkZXIgcmVwbGFjaW5nIHdpdGggYF91cGRhdGVEYXRhKClgIHRoYXQgdXBkYXRlcyBhbGwgZGF0YSBhdCBvbmNlXG4gKiAtIHVwZGF0ZSgpICAgICAgIENvbnNpZGVyIHJlcGxhY2luZyB0aGlzIHdpdGggYGRhdGEoKWAgdGhhdCBhdXRvIHVwZGF0ZXMgZGF0YVxuICogLSByZWRyYXcoKVxuICogLSBkZXN0cm95KClcbiAqL1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVkNvbXBvbmVudDxEYXRhSW50ZXJmYWNlPiB7XG5cbiAgICAvLyBTVEFUSUMgRklFTERTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRpYyBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIGFsbCBjbGFzcyByZWxhdGVkIGV2ZW50cy5cbiAgICAgKiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYW5kIGV2ZW50IHN0cmluZ3MgaGF2ZSB0byBiZSB1bmlxdWUhIVxuICAgICAqL1xuXG4gICAgc3RhdGljIGV2ZW50czoge30gPSB7bm9FdmVudDogJ1ZDb21wb25lbnRfbm9FdmVudCd9O1xuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGF5ZXJzIGluIFNWRyAgZm9yIGJnLG1haW4sZmcsLi4uXG4gICAgICovXG4gICAgLy8gcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IGxheW91dDogeyBuYW1lOiBzdHJpbmcsIHBvczogbnVtYmVyW10gfVtdID0gW3tuYW1lOiAnbWFpbicsIHBvczogWzAsIDBdfV07XG5cbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZzsgLy8gTW9zdGx5IG9ic29sZXRlLCBuaWNlIHRvIGhhdmUgc2ltcGxlIElEIHRvIGFzc2lnbiBpbiBDU1NcbiAgICBwcm90ZWN0ZWQgcGFyZW50OiBEM1NlbDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcm90ZWN0ZWQgYmFzZTogRDNTZWw7IC8vIE1vc3RseSBvYnNvbGV0ZSwgcmVwcmVzZW50cyA8Zz4gaW4gc3ZnXG4gICAgcHJvdGVjdGVkIGxheWVyczogeyBtYWluPzogRDNTZWwsIGZnPzogRDNTZWwsIGJnPzogRDNTZWwsIFtrZXk6IHN0cmluZ106IEQzU2VsIH07IC8vIFN0aWxsIHVzZWZ1bFxuICAgIHByb3RlY3RlZCBldmVudEhhbmRsZXI6IFNpbXBsZUV2ZW50SGFuZGxlcjtcbiAgICBwcm90ZWN0ZWQgX3Zpc2liaWxpdHk6IHsgaGlkZGVuOiBib29sZWFuLCBoaWRlRWxlbWVudD86IEQzU2VsIHwgbnVsbDsgW2tleTogc3RyaW5nXTogYW55IH07IC8vIEVuYWJsZXMgdHJhbnNpdGlvbnMgZnJvbSB2aXNpYmxlIHRvIGludmlzaWJsZS4gTW9zdGx5IG9ic29sZXRlLlxuICAgIHByb3RlY3RlZCBfZGF0YTogRGF0YUludGVyZmFjZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyRGF0YTogYW55OyAvLyBVbm5lY2Vzc2FyeVxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjc3NfbmFtZTogc3RyaW5nOyAvLyBNYWtlIHRoZSBzYW1lIGFzIHRoZSBjb3JyZXNwb25kaW5nIGNzcyBmaWxlXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9jdXJyZW50OiB7fTsgLy8gUHJpdmF0ZSBzdGF0ZSBpbmZvcm1hdGlvbiBjb250YWluZWQgaW4gdGhlIG9iamVjdCBpdHNlbGYuXG5cbiAgICAvLyBDT05TVFJVQ1RPUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpbXBsZSBjb25zdHJ1Y3Rvci4gU3ViY2xhc3NlcyBzaG91bGQgY2FsbCBAc3VwZXJJbml0KG9wdGlvbnMpIGFzIHdlbGwuXG4gICAgICogc2VlIHdoeSBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MzU5NTk0My93aHktYXJlLWRlcml2ZWQtY2xhc3MtcHJvcGVydHktdmFsdWVzLW5vdC1zZWVuLWluLXRoZS1iYXNlLWNsYXNzLWNvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiB0ZW1wbGF0ZTpcbiAgICAgY29uc3RydWN0b3IoZDNQYXJlbnQ6IEQzU2VsLCBldmVudEhhbmRsZXI/OiBTaW1wbGVFdmVudEhhbmRsZXIsIG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoZDNQYXJlbnQsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIC8vIC0tIGFjY2VzcyB0byBzdWJjbGFzcyBwYXJhbXM6XG4gICAgICAgIHRoaXMuc3VwZXJJbml0KG9wdGlvbnMpO1xuICAgICB9XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0QzU2VsfSBkM3BhcmVudCAgRDMgc2VsZWN0aW9uIG9mIHBhcmVudCBTVkcgRE9NIEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1NpbXBsZUV2ZW50SGFuZGxlcn0gZXZlbnRIYW5kbGVyIGEgZ2xvYmFsIGV2ZW50IGhhbmRsZXIgb2JqZWN0IG9yICdudWxsJyBmb3IgbG9jYWwgZXZlbnQgaGFuZGxlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkM3BhcmVudDogRDNTZWwsIGV2ZW50SGFuZGxlcj86IFNpbXBsZUV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLmlkID0gVXRpbC5zaW1wbGVVSWQoe30pO1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gZDNwYXJlbnQ7XG5cbiAgICAgICAgLy8gSWYgbm90IGZ1cnRoZXIgc3BlY2lmaWVkIC0gY3JlYXRlIGEgbG9jYWwgZXZlbnQgaGFuZGxlciBib3VuZCB0byB0aGUgYmFzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXIgfHxcbiAgICAgICAgICAgIG5ldyBTaW1wbGVFdmVudEhhbmRsZXIodGhpcy5wYXJlbnQubm9kZSgpKTtcblxuICAgICAgICAvLyBPYmplY3QgZm9yIHN0b3JpbmcgaW50ZXJuYWwgc3RhdGVzIGFuZCB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5fdmlzaWJpbGl0eSA9IHtoaWRkZW46IGZhbHNlfTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdXBlckluaXRIVE1MKG9wdGlvbnM6IHt9ID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV0pO1xuICAgICAgICB0aGlzLmJhc2UgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgICAgICAuY2xhc3NlZCh0aGlzLmNzc19uYW1lLCB0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyB0byBiZSBjYWxsZWQgYXMgbGFzdCBjYWxsIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7e319IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0gZGVmYXVsdExheWVycyAtLSBjcmVhdGUgdGhlIGRlZmF1bHQgPGc+IGxheWVyczogYmcgLT4gbWFpbiAtPiBmZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzdXBlckluaXRTVkcob3B0aW9uczoge30gPSB7fSwgZGVmYXVsdExheWVycyA9IFsnYmcnLCAnbWFpbicsICdmZyddKSB7XG4gICAgICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnMgaWYgbm90IHNwZWNpZmllZCBpbiBjb25zdHJ1Y3RvciBjYWxsXG4gICAgICAgIC8vIGNvbnN0IGRlZmF1bHRzID0gdGhpcy5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0ge307XG4gICAgICAgIC8vIGNvbnN0IGtleXMgPSBuZXcgU2V0KFsuLi5PYmplY3Qua2V5cyhkZWZhdWx0cyksIC4uLk9iamVjdC5rZXlzKG9wdGlvbnMpXSk7XG4gICAgICAgIC8vIGtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5vcHRpb25zW2tleV0gPSAoa2V5IGluIG9wdGlvbnMpID8gb3B0aW9uc1trZXldIDogZGVmYXVsdHNba2V5XSk7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHRoaXMub3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldKTtcblxuICAgICAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYmFzZSBncm91cCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMucGFyZW50O1xuICAgICAgICB0aGlzLmJhc2UgPSBTVkcuZ3JvdXAoc3ZnLFxuICAgICAgICAgICAgdGhpcy5jc3NfbmFtZSArICcgSUQnICsgdGhpcy5pZCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3MpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBkZWZhdWx0IGxheWVyczogYmFja2dyb3VuZCwgbWFpbiwgZm9yZWdyb3VuZFxuICAgICAgICBpZiAoZGVmYXVsdExheWVycykge1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIG9yZGVyIGlzIGltcG9ydGFudCAhXG4gICAgICAgICAgICBkZWZhdWx0TGF5ZXJzLmZvckVhY2gobGF5ZXIgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllcnNbbGF5ZXJdID0gU1ZHLmdyb3VwKHRoaXMuYmFzZSwgbGF5ZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBjcmVhdGUgdGhlIHN0YXRpYyBET00gZWxlbWVudHNcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2luaXQoKTtcblxuICAgIC8vIERBVEEgVVBEQVRFICYgUkVOREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgdGltZSBkYXRhIGhhcyBjaGFuZ2VkLCB1cGRhdGUgaXMgY2FsbGVkIGFuZFxuICAgICAqIHRyaWdnZXJzIHdyYW5nbGluZyBhbmQgcmUtcmVuZGVyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHsqfSAtLS1cbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YTogRGF0YUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSA9IHRoaXMuX3dyYW5nbGUoZGF0YSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERhdGEgd3JhbmdsaW5nIG1ldGhvZCAtLSBpbXBsZW1lbnQgaW4gc3ViY2xhc3MuIFJldHVybnMgdGhpcy5yZW5kZXJEYXRhLlxuICAgICAqIFNpbXBsZXN0IGltcGxlbWVudGF0aW9uOiBgcmV0dXJuIGRhdGE7YFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7Kn0gLS0gZGF0YSBpbiByZW5kZXIgZm9ybWF0XG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF93cmFuZ2xlKGRhdGEpO1xuXG5cbiAgICAvKipcbiAgICAgKiBJcyByZXNwb25zaWJsZSBmb3IgbWFwcGluZyBkYXRhIHRvIERPTSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW5kZXJEYXRhIHByZS1wcm9jZXNzZWQgKHdyYW5nbGVkKSBkYXRhXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfcmVuZGVyKHJlbmRlckRhdGEpOiB2b2lkO1xuXG5cbiAgICAvLyBVUERBVEUgT1BUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGluc3RhbmNlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBvbmx5IHRoZSBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlUmVuZGVyIGlmIG9wdGlvbiBjaGFuZ2UgcmVxdWlyZXMgYSByZS1yZW5kZXJpbmcgKGRlZmF1bHQ6ZmFsc2UpXG4gICAgICogQHJldHVybnMgeyp9IC0tLVxuICAgICAqL1xuICAgIHVwZGF0ZU9wdGlvbnMoe29wdGlvbnMsIHJlUmVuZGVyID0gZmFsc2V9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB0aGlzLm9wdGlvbnNba10gPSBvcHRpb25zW2tdKTtcbiAgICAgICAgaWYgKHJlUmVuZGVyKSB0aGlzLl9yZW5kZXIodGhpcy5yZW5kZXJEYXRhKTtcbiAgICB9XG5cblxuICAgIC8vID09PSBDT05WRU5JRU5DRSA9PT09XG4gICAgcmVkcmF3KCl7XG4gICAgICAgIHRoaXMuX3JlbmRlcih0aGlzLnJlbmRlckRhdGEpO1xuICAgIH1cblxuICAgIHNldEhpZGVFbGVtZW50KGhFOiBEM1NlbCkge1xuICAgICAgICB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50ID0gaEU7XG4gICAgfVxuXG4gICAgaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlzaWJpbGl0eS5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhFID0gdGhpcy5fdmlzaWJpbGl0eS5oaWRlRWxlbWVudCB8fCB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGhFLnRyYW5zaXRpb24oKS5zdHlsZXMoe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgICAgICAgICAgIH0pLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuaGlkZVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXNpYmlsaXR5LmhpZGRlbikge1xuICAgICAgICAgICAgY29uc3QgaEUgPSB0aGlzLl92aXNpYmlsaXR5LmhpZGVFbGVtZW50IHx8IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgaEUudHJhbnNpdGlvbigpLnN0eWxlcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6IG51bGwsXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3Zpc2liaWxpdHkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZSh0aGlzLmRhdGEpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2UucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYmFzZS5odG1sKCcnKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCAqIGFzIHRwIGZyb20gJy4uL2V0Yy90eXBlcyc7XG5pbXBvcnQgJy4uL2V0Yy94ZDMnXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9hcGkvbWFpbkFwaSdcbmltcG9ydCB7IFVJQ29uZmlnIH0gZnJvbSAnLi4vdWlDb25maWcnXG5pbXBvcnQgeyBUZXh0VG9rZW5zLCBMZWZ0VGV4dFRva2VuLCBSaWdodFRleHRUb2tlbiB9IGZyb20gJy4vVGV4dFRva2VuJ1xuaW1wb3J0IHsgQXR0ZW50aW9uSGVhZEJveCwgZ2V0QXR0ZW50aW9uSW5mbyB9IGZyb20gJy4vQXR0ZW50aW9uSGVhZEJveCdcbmltcG9ydCB7IEF0dGVudGlvbkdyYXBoIH0gZnJvbSAnLi9BdHRlbnRpb25Db25uZWN0b3InXG5pbXBvcnQgeyBDb3JwdXNJbnNwZWN0b3IgfSBmcm9tICcuL0NvcnB1c0luc3BlY3RvcidcbmltcG9ydCB7IFRva2VuV3JhcHBlciwgc2lkZVRvTGV0dGVyIH0gZnJvbSAnLi4vZGF0YS9Ub2tlbldyYXBwZXInXG5pbXBvcnQgeyBBdHRlbnRpb25XcmFwcGVyLCBtYWtlRnJvbU1ldGFSZXNwb25zZSB9IGZyb20gJy4uL2RhdGEvQXR0ZW50aW9uQ2Fwc3VsZSdcbmltcG9ydCB7IFNpbXBsZUV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2V0Yy9TaW1wbGVFdmVudEhhbmRsZXInXG5pbXBvcnQgeyBDb3JwdXNNYXRNYW5hZ2VyIH0gZnJvbSAnLi4vdmlzL0NvcnB1c01hdE1hbmFnZXInXG5pbXBvcnQgeyBDb3JwdXNIaXN0b2dyYW0gfSBmcm9tICcuLi92aXMvQ29ycHVzSGlzdG9ncmFtJ1xuaW1wb3J0IHsgRmFpc3NTZWFyY2hSZXN1bHRXcmFwcGVyIH0gZnJvbSAnLi4vZGF0YS9GYWlzc1NlYXJjaFdyYXBwZXInXG5pbXBvcnQgeyBEM1NlbCwgU2VsIH0gZnJvbSAnLi4vZXRjL1V0aWwnO1xuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBpbnRlcnZhbCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBCYXNlVHlwZSB9IGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgU2ltcGxlTWV0YSB9IGZyb20gXCIuLi9ldGMvdHlwZXNcIjtcbmltcG9ydCBDaGFuZ2VFdmVudCA9IEpRdWVyeS5DaGFuZ2VFdmVudDtcblxuXG5mdW5jdGlvbiBpc051bGxUb2tlbih0b2s6IHRwLlRva2VuRXZlbnQpIHtcbiAgICBjb25zdCBpc1NvbWVOdWxsID0geCA9PiB7XG4gICAgICAgIHJldHVybiAoeCA9PSBudWxsKSB8fCAoeCA9PSBcIm51bGxcIilcbiAgICB9XG4gICAgY29uc3QgdG9rSXNOdWxsID0gdG9rID09IG51bGw7XG4gICAgY29uc3QgdG9rSGFzTnVsbCA9IGlzU29tZU51bGwodG9rLnNpZGUpIHx8IGlzU29tZU51bGwodG9rLmluZClcbiAgICByZXR1cm4gdG9rSXNOdWxsIHx8IHRva0hhc051bGxcbn1cblxuZnVuY3Rpb24gc2hvd0J5U2lkZShlOiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgc2F2ZWQgdG9rZW4gaW4gdWlDb25mIGlzIG51bGxcbiAgICBpZiAoIWlzTnVsbFRva2VuKGUpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzU2VsZWN0b3IgPSBlLnNpZGUgPT0gXCJsZWZ0XCIgPyBcInNyYy1pZHhcIiA6IFwidGFyZ2V0LWlkeFwiO1xuXG4gICAgICAgIFNlbC5zZXRIaWRkZW4oXCIuYXRuLWN1cnZlXCIpXG4gICAgICAgIFNlbC5zZXRWaXNpYmxlKGAuYXRuLWN1cnZlWyR7Y2xhc3NTZWxlY3Rvcn09JyR7ZS5pbmR9J11gKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0J5U2lkZShzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50LCBuZXdFdmVudDogdHAuVG9rZW5FdmVudCkge1xuICAgIGlmIChpc051bGxUb2tlbihzYXZlZEV2ZW50KSkge1xuICAgICAgICBzaG93QnlTaWRlKG5ld0V2ZW50KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hvb3NlU2hvd0FsbChzYXZlZEV2ZW50OiB0cC5Ub2tlbkV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbFRva2VuKHNhdmVkRXZlbnQpKVxuICAgICAgICBTZWwuc2V0VmlzaWJsZShcIi5hdG4tY3VydmVcIilcbn1cblxuZnVuY3Rpb24gdW5zZWxlY3RIZWFkKGhlYWQ6IG51bWJlcikge1xuICAgIGNvbnN0IGFmZmVjdGVkSGVhZHMgPSBkMy5zZWxlY3RBbGwoYC5hdHQtcmVjdFtoZWFkPScke2hlYWR9J11gKTtcbiAgICBhZmZlY3RlZEhlYWRzLmNsYXNzZWQoXCJ1bnNlbGVjdGVkXCIsIHRydWUpXG59XG5cbmZ1bmN0aW9uIHNlbGVjdEhlYWQoaGVhZDogbnVtYmVyKSB7XG4gICAgY29uc3QgYWZmZWN0ZWRIZWFkcyA9IGQzLnNlbGVjdEFsbChgLmF0dC1yZWN0W2hlYWQ9JyR7aGVhZH0nXWApO1xuICAgIGFmZmVjdGVkSGVhZHMuY2xhc3NlZChcInVuc2VsZWN0ZWRcIiwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIHNldFNlbERpc2FibGVkKGF0dHI6IGJvb2xlYW4sIHNlbDogRDNTZWwpIHtcbiAgICBjb25zdCB2YWwgPSBhdHRyID8gdHJ1ZSA6IG51bGxcbiAgICBzZWwuYXR0cignZGlzYWJsZWQnLCB2YWwpXG59XG5cblxuZXhwb3J0IGNsYXNzIE1haW5HcmFwaGljIHtcbiAgICBhcGk6IEFQSVxuICAgIHVpQ29uZjogVUlDb25maWdcbiAgICBhdHRDYXBzdWxlOiBBdHRlbnRpb25XcmFwcGVyXG4gICAgdG9rQ2Fwc3VsZTogVG9rZW5XcmFwcGVyXG4gICAgc2VsczogYW55ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGFpbnMgaW5pdGlhbCBkMyBzZWxlY3Rpb25zIG9mIG9iamVjdHNcbiAgICB2aXpzOiBhbnkgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250YWlucyB2aXMgY29tcG9uZW50cyB3cmFwcGVkIGFyb3VuZCBwYXJlbnQgc2VsXG4gICAgZXZlbnRIYW5kbGVyOiBTaW1wbGVFdmVudEhhbmRsZXIgICAgLy8gT3JjaGVzdHJhdGVzIGV2ZW50cyByYWlzZWQgZnJvbSBjb21wb25lbnRzXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgQVBJKClcbiAgICAgICAgdGhpcy51aUNvbmYgPSBuZXcgVUlDb25maWcoKVxuICAgICAgICB0aGlzLnNrZWxldG9uSW5pdCgpXG4gICAgICAgIHRoaXMubWFpbkluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbnMgdGhhdCBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgYW55IGluZm9ybWF0aW9uIG9mIGEgcmVzcG9uc2UuXG4gICAgICogXG4gICAgICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIG9uY2UgYW5kIG9ubHkgb25jZVxuICAgICAqL1xuICAgIHNrZWxldG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWxzID0ge1xuICAgICAgICAgICAgYm9keTogZDMuc2VsZWN0KCdib2R5JyksXG4gICAgICAgICAgICBhdG5Db250YWluZXI6IGQzLnNlbGVjdCgnI2F0bi1jb250YWluZXInKSxcbiAgICAgICAgICAgIGF0bkRpc3BsYXk6IGQzLnNlbGVjdChcIiNhdG4tZGlzcGxheVwiKSxcbiAgICAgICAgICAgIG1vZGVsU2VsZWN0b3I6IGQzLnNlbGVjdChcIiNtb2RlbC1vcHRpb24tc2VsZWN0b3JcIiksXG4gICAgICAgICAgICBjb3JwdXNTZWxlY3RvcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1zZWxlY3RcIiksXG4gICAgICAgICAgICBhdG5IZWFkczoge1xuICAgICAgICAgICAgICAgIGxlZnQ6IGQzLnNlbGVjdChcIiNsZWZ0LWF0dC1oZWFkc1wiKSxcbiAgICAgICAgICAgICAgICByaWdodDogZDMuc2VsZWN0KFwiI3JpZ2h0LWF0dC1oZWFkc1wiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgc2VudGVuY2VBOiBkMy5zZWxlY3QoXCIjZm9ybS1zZW50ZW5jZS1hXCIpLFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZDMuc2VsZWN0KFwiI3VwZGF0ZS1zZW50ZW5jZVwiKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b2tlbnM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBkMy5zZWxlY3QoXCIjbGVmdC10b2tlbnNcIiksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGQzLnNlbGVjdChcIiNyaWdodC10b2tlbnNcIiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xzVG9nZ2xlOiBkMy5zZWxlY3QoXCIjY2xzLXRvZ2dsZVwiKS5zZWxlY3QoXCIuc3dpdGNoXCIpLFxuICAgICAgICAgICAgbGF5ZXJDaGVja2JveGVzOiBkMy5zZWxlY3QoXCIjbGF5ZXItc2VsZWN0XCIpLFxuICAgICAgICAgICAgaGVhZENoZWNrYm94ZXM6IGQzLnNlbGVjdChcIiNoZWFkLXNlbGVjdFwiKSxcbiAgICAgICAgICAgIGNvbnRleHRRdWVyeTogZDMuc2VsZWN0KFwiI3NlYXJjaC1jb250ZXh0c1wiKSxcbiAgICAgICAgICAgIGVtYmVkZGluZ1F1ZXJ5OiBkMy5zZWxlY3QoXCIjc2VhcmNoLWVtYmVkZGluZ3NcIiksXG4gICAgICAgICAgICBzZWxlY3RlZEhlYWRzOiBkMy5zZWxlY3QoXCIjc2VsZWN0ZWQtaGVhZHNcIiksXG4gICAgICAgICAgICBoZWFkU2VsZWN0QWxsOiBkMy5zZWxlY3QoXCIjc2VsZWN0LWFsbC1oZWFkc1wiKSxcbiAgICAgICAgICAgIGhlYWRTZWxlY3ROb25lOiBkMy5zZWxlY3QoXCIjc2VsZWN0LW5vLWhlYWRzXCIpLFxuICAgICAgICAgICAgdGVzdENoZWNrYm94OiBkMy5zZWxlY3QoXCIjc2ltcGxlLWVtYmVkLXF1ZXJ5XCIpLFxuICAgICAgICAgICAgdGhyZXNoU2xpZGVyOiBkMy5zZWxlY3QoXCIjbXktcmFuZ2VcIiksXG4gICAgICAgICAgICBjb3JwdXNJbnNwZWN0b3I6IGQzLnNlbGVjdChcIiNjb3JwdXMtc2ltaWxhci1zZW50ZW5jZXMtZGl2XCIpLFxuICAgICAgICAgICAgY29ycHVzTWF0TWFuYWdlcjogZDMuc2VsZWN0KFwiI2NvcnB1cy1tYXQtY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgY29ycHVzTXNnQm94OiBkMy5zZWxlY3QoXCIjY29ycHVzLW1zZy1ib3hcIiksXG4gICAgICAgICAgICBoaXN0b2dyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IGQzLnNlbGVjdChcIiNtYXRjaGVkLWhpc3RvZ3JhbS1jb250YWluZXJcIiksXG4gICAgICAgICAgICAgICAgbWF4QXR0OiBkMy5zZWxlY3QoXCIjbWF4LWF0dC1oaXN0b2dyYW0tY29udGFpbmVyXCIpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICBraWxsTGVmdDogZDMuc2VsZWN0KFwiI2tpbGwtbGVmdFwiKSxcbiAgICAgICAgICAgICAgICBhZGRMZWZ0OiBkMy5zZWxlY3QoXCIjbWludXMtbGVmdFwiKSxcbiAgICAgICAgICAgICAgICBhZGRSaWdodDogZDMuc2VsZWN0KFwiI3BsdXMtcmlnaHRcIiksXG4gICAgICAgICAgICAgICAga2lsbFJpZ2h0OiBkMy5zZWxlY3QoXCIja2lsbC1yaWdodFwiKSxcbiAgICAgICAgICAgICAgICByZWZyZXNoOiBkMy5zZWxlY3QoXCIjbWF0LXJlZnJlc2hcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRhU2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkV29yZDogZDMuc2VsZWN0KFwiI21hdGNoZWQtbWV0YS1zZWxlY3RcIiksXG4gICAgICAgICAgICAgICAgbWF4QXR0OiBkMy5zZWxlY3QoXCIjbWF4LWF0dC1tZXRhLXNlbGVjdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIgPSBuZXcgU2ltcGxlRXZlbnRIYW5kbGVyKDxFbGVtZW50PnRoaXMuc2Vscy5ib2R5Lm5vZGUoKSk7XG5cbiAgICAgICAgdGhpcy52aXpzID0ge1xuICAgICAgICAgICAgbGVmdEhlYWRzOiBuZXcgQXR0ZW50aW9uSGVhZEJveCh0aGlzLnNlbHMuYXRuSGVhZHMubGVmdCwgdGhpcy5ldmVudEhhbmRsZXIsIHsgc2lkZTogXCJsZWZ0XCIsIH0pLFxuICAgICAgICAgICAgcmlnaHRIZWFkczogbmV3IEF0dGVudGlvbkhlYWRCb3godGhpcy5zZWxzLmF0bkhlYWRzLnJpZ2h0LCB0aGlzLmV2ZW50SGFuZGxlciwgeyBzaWRlOiBcInJpZ2h0XCIgfSksXG4gICAgICAgICAgICB0b2tlbnM6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBuZXcgTGVmdFRleHRUb2tlbih0aGlzLnNlbHMudG9rZW5zLmxlZnQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgICAgICByaWdodDogbmV3IFJpZ2h0VGV4dFRva2VuKHRoaXMuc2Vscy50b2tlbnMucmlnaHQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRlbnRpb25Tdmc6IG5ldyBBdHRlbnRpb25HcmFwaCh0aGlzLnNlbHMuYXRuRGlzcGxheSwgdGhpcy5ldmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgY29ycHVzSW5zcGVjdG9yOiBuZXcgQ29ycHVzSW5zcGVjdG9yKHRoaXMuc2Vscy5jb3JwdXNJbnNwZWN0b3IsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIGNvcnB1c01hdE1hbmFnZXI6IG5ldyBDb3JwdXNNYXRNYW5hZ2VyKHRoaXMuc2Vscy5jb3JwdXNNYXRNYW5hZ2VyLCB0aGlzLmV2ZW50SGFuZGxlciwgeyBpZHhzOiB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKCkgfSksXG4gICAgICAgICAgICBoaXN0b2dyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFdvcmQ6IG5ldyBDb3JwdXNIaXN0b2dyYW0odGhpcy5zZWxzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQsIHRoaXMuZXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgICAgICBtYXhBdHQ6IG5ldyBDb3JwdXNIaXN0b2dyYW0odGhpcy5zZWxzLmhpc3RvZ3JhbXMubWF4QXR0LCB0aGlzLmV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYmluZEV2ZW50SGFuZGxlcigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtYWluSW5pdCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcbiAgICAgICAgdGhpcy5hcGkuZ2V0TW9kZWxEZXRhaWxzKHRoaXMudWlDb25mLm1vZGVsKCkpLnRoZW4obWQgPT4ge1xuICAgICAgICAgICAgdGhpcy51aUNvbmYubkxheWVycyhtZC5ubGF5ZXJzKS5uSGVhZHMobWQubmhlYWRzKVxuICAgICAgICAgICAgdGhpcy5pbml0TGF5ZXJzKHRoaXMudWlDb25mLm5MYXllcnMoKSlcblxuICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbihhdHRlbnRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZyb21SZXNwb25zZShhdHRlbnRpb24pXG5cbiAgICAgICAgICAgICAgICAvLyBXcmFwIHBvc3RJbml0IGludG8gZnVuY3Rpb24gc28gYXN5bmNocm9ub3VzIGNhbGwgZG9lcyBub3QgbWVzcyB3aXRoIG5lY2Vzc2FyeSBpbml0c1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RSZXNwb25zZURpc3BsYXlDbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9EaXNwbGF5ID0gdGhpcy51aUNvbmYuZGlzcGxheUluc3BlY3RvcigpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlYXJjaERpc2FibGVyKClcblxuICAgICAgICAgICAgICAgICAgICBpZiAodG9EaXNwbGF5ID09ICdjb250ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcXVlcnlDb250ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0Rpc3BsYXkgPT0gJ2VtYmVkZGluZ3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9xdWVyeUVtYmVkZGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlDb25mLm1hc2tJbmRzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva0NhcHN1bGUuYS5tYXNrSW5kcyA9IHRoaXMudWlDb25mLm1hc2tJbmRzKClcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHRoaXMudWlDb25mLm1vZGVsKCksIHRoaXMudG9rQ2Fwc3VsZS5hLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpLCB0aGlzLnVpQ29uZi5sYXllcigpKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS51cGRhdGVFbWJlZGRpbmdzKHIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCgpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICBwb3N0UmVzcG9uc2VEaXNwbGF5Q2xlYW51cCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGcm9tUmVzcG9uc2UoYXR0ZW50aW9uOiB0cC5BdHRlbnRpb25SZXNwb25zZSkge1xuICAgICAgICB0aGlzLmF0dENhcHN1bGUgPSBtYWtlRnJvbU1ldGFSZXNwb25zZShhdHRlbnRpb24sIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSlcbiAgICAgICAgdGhpcy50b2tDYXBzdWxlID0gbmV3IFRva2VuV3JhcHBlcihhdHRlbnRpb24pO1xuICAgICAgICB0aGlzLl9zdGF0aWNJbml0cygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsZWF2ZUNvcnB1c01zZyhtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzSW5zcGVjdG9yLmhpZGVWaWV3KClcbiAgICAgICAgdGhpcy52aXpzLmNvcnB1c01hdE1hbmFnZXIuaGlkZVZpZXcoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgbGVhdmUgbXNnXCIpO1xuICAgICAgICBTZWwudW5oaWRlRWxlbWVudCh0aGlzLnNlbHMuY29ycHVzTXNnQm94KVxuICAgICAgICB0aGlzLnNlbHMuY29ycHVzTXNnQm94LnRleHQobXNnKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2JpbmRFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKFRleHRUb2tlbnMuZXZlbnRzLnRva2VuRGJsQ2xpY2ssIChlKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNlbGYudWlDb25mLm1vZGVsS2luZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbDoge1xuICAgICAgICAgICAgICAgICAgICBlLnNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIsICFlLnNlbC5jbGFzc2VkKFwibWFza2VkLXRva2VuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gc2lkZVRvTGV0dGVyKGUuc2lkZSwgdGhpcy51aUNvbmYuYXR0VHlwZSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlW2xldHRlcl0udG9nZ2xlKGUuaW5kKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hcGkudXBkYXRlTWFza2VkQXR0ZW50aW9ucyh0aGlzLnVpQ29uZi5tb2RlbCgpLCB0aGlzLnRva0NhcHN1bGUuYSwgdGhpcy51aUNvbmYuc2VudGVuY2UoKSwgdGhpcy51aUNvbmYubGF5ZXIoKSkudGhlbigocjogdHAuQXR0ZW50aW9uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRva0NhcHN1bGUudXBkYXRlRW1iZWRkaW5ncyhyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHModGhpcy50b2tDYXBzdWxlLmEubWFza0luZHMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0b3JlZ3Jlc3NpdmUgbW9kZWwgZG9lc24ndCBkbyBtYXNraW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldoYXQga2luZCBvZiBtb2RlbCBpcyB0aGlzP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5Nb3VzZU92ZXIsIChlOiB0cC5Ub2tlbkV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjaG9vc2VTaG93QnlTaWRlKHRoaXMudWlDb25mLnRva2VuKCksIGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChUZXh0VG9rZW5zLmV2ZW50cy50b2tlbk1vdXNlT3V0LCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hvb3NlU2hvd0FsbCh0aGlzLnVpQ29uZi50b2tlbigpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoVGV4dFRva2Vucy5ldmVudHMudG9rZW5DbGljaywgKGU6IHRwLlRva2VuRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlDb25mLnRvZ2dsZVRva2VuKGUpXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpXG4gICAgICAgICAgICBzaG93QnlTaWRlKGUpXG4gICAgICAgICAgICBpZiAodGhpcy51aUNvbmYubW9kZWxLaW5kKCkgPT0gdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5hbWUgPSBgI3JpZ2h0LXRva2VuLSR7K2UuaW5kICsgMX1gXG4gICAgICAgICAgICAgICAgY29uc3QgdG9NYXNrU2VsID0gZDMuc2VsZWN0KGVuYW1lKVxuXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCcucmlnaHQtdG9rZW4nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcml0ID0gKHMubm9kZSgpID09IHRvTWFza1NlbC5ub2RlKCkgJiYgIXMuY2xhc3NlZCgnbWFza2VkLXRva2VuJykpXG4gICAgICAgICAgICAgICAgICAgIHMuY2xhc3NlZChcIm1hc2tlZC10b2tlblwiLCBjcml0KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLnJvd01vdXNlT3ZlciwgKGU6IHRwLkhlYWRCb3hFdmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgc3BlY2lhbCBvbiByb3cgbW91c2Ugb3ZlclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMucm93TW91c2VPdXQsICgpID0+IHtcbiAgICAgICAgICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHNwZWNpYWwgb24gcm93IG1vdXNlIG91dFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQXR0ZW50aW9uSGVhZEJveC5ldmVudHMuYm94TW91c2VPdmVyLCAoZTogdHAuSGVhZEJveEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVNYXQgPSB0aGlzLmF0dENhcHN1bGUuYnlIZWFkKGUuaGVhZClcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcuZGF0YSh1cGRhdGVNYXQpXG4gICAgICAgICAgICB0aGlzLnZpenMuYXR0ZW50aW9uU3ZnLnVwZGF0ZSh1cGRhdGVNYXQpXG5cbiAgICAgICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveE1vdXNlT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHQgPSB0aGlzLmF0dENhcHN1bGUuYnlIZWFkcyh0aGlzLnVpQ29uZi5oZWFkcygpKVxuICAgICAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dClcbiAgICAgICAgICAgIHRoaXMudml6cy5hdHRlbnRpb25TdmcudXBkYXRlKGF0dClcbiAgICAgICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKEF0dGVudGlvbkhlYWRCb3guZXZlbnRzLmJveENsaWNrLCAoZTogeyBoZWFkIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudWlDb25mLnRvZ2dsZUhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSB0cC5Ub2dnbGVkLkFEREVEKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChlLmhlYWQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSB0cC5Ub2dnbGVkLlJFTU9WRUQpIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoZS5oZWFkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJIZWFkU3VtbWFyeSgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLm1vdXNlT3ZlciwgKGU6IHsgdmFsOiBcInBvc1wiIHwgXCJkZXBcIiB8IFwiaXNfZW50XCIsIG9mZnNldDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFVuY29tbWVudCB0aGUgYmVsb3cgaWYgeW91IHdhbnQgdG8gbW9kaWZ5IHRoZSB3aG9sZSBjb2x1bW5cbiAgICAgICAgICAgIC8vIGNvbnN0IHNlbGVjdG9yID0gYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoc2VsZWN0b3IpLmNsYXNzZWQoXCJob3ZlcmVkLWNvbFwiLCB0cnVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyLmJpbmQoQ29ycHVzTWF0TWFuYWdlci5ldmVudHMubW91c2VPdXQsIChlOiB7IG9mZnNldDogbnVtYmVyLCBpZHg6IG51bWJlciB9KSA9PiB7XG4gICAgICAgICAgICAvLyBVbmNvbW1lbnQgdGhlIGJlbG93IGlmIHlvdSB3YW50IHRvIG1vZGlmeSB0aGUgd2hvbGUgY29sdW1uXG4gICAgICAgICAgICAvLyBjb25zdCBzZWxlY3RvciA9IGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYFxuICAgICAgICAgICAgLy8gZDMuc2VsZWN0QWxsKHNlbGVjdG9yKS5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgZmFsc2UpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIuYmluZChDb3JwdXNNYXRNYW5hZ2VyLmV2ZW50cy5yZWN0TW91c2VPdmVyLCAoZTogeyBvZmZzZXQ6IG51bWJlciwgaWR4OiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZDMuc2VsZWN0KGAuaW5zcGVjdG9yLXJvd1tyb3dudW09JyR7ZS5pZHh9J11gKVxuICAgICAgICAgICAgY29uc3Qgd29yZCA9IHJvdy5zZWxlY3QoYC5pbnNwZWN0b3ItY2VsbFtpbmRleC1vZmZzZXQ9JyR7ZS5vZmZzZXR9J11gKVxuICAgICAgICAgICAgd29yZC5jbGFzc2VkKFwiaG92ZXJlZC1jb2xcIiwgdHJ1ZSlcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlci5iaW5kKENvcnB1c01hdE1hbmFnZXIuZXZlbnRzLnJlY3RNb3VzZU91dCwgKGU6IHsgb2Zmc2V0OiBudW1iZXIsIGlkeDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGQzLnNlbGVjdChgLmluc3BlY3Rvci1yb3dbcm93bnVtPScke2UuaWR4fSddYClcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSByb3cuc2VsZWN0KGAuaW5zcGVjdG9yLWNlbGxbaW5kZXgtb2Zmc2V0PScke2Uub2Zmc2V0fSddYClcbiAgICAgICAgICAgIHdvcmQuY2xhc3NlZChcImhvdmVyZWQtY29sXCIsIGZhbHNlKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdG9nZ2xlVG9rZW5TZWwoKSB7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLnVpQ29uZi50b2tlbigpXG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWxlY3RlZCA9IGQzLnNlbGVjdCgnLnNlbGVjdGVkLXRva2VuJylcblxuICAgICAgICAvLyBJZiBubyB0b2tlbiBzaG91bGQgYmUgc2VsZWN0ZWQsIHVuc2VsZWN0IGFsbCB0b2tlbnNcbiAgICAgICAgaWYgKGlzTnVsbFRva2VuKGUpKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTZWw6IGQzLlNlbGVjdGlvbjxCYXNlVHlwZSwgYW55LCBCYXNlVHlwZSwgYW55PiA9IGQzLnNlbGVjdEFsbCgnLnNlbGVjdGVkLXRva2VuJylcbiAgICAgICAgICAgIGlmICghbmV3U2VsLmVtcHR5KCkpIG5ld1NlbC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZWxlY3QgdGhlIGluZGljYXRlZCB0b2tlblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuMlN0cmluZyA9IChlOiB0cC5Ub2tlbkV2ZW50KSA9PiBgIyR7ZS5zaWRlfS10b2tlbi0ke2UuaW5kfWBcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbCA9IGQzLnNlbGVjdCh0b2tlbjJTdHJpbmcoZSkpXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNlbGVjdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICghbmV3U2VsLmVtcHR5KCkpIG5ld1NlbC5jbGFzc2VkKCdzZWxlY3RlZC10b2tlbicsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXMgdG9rZW4gc2VsZWN0aW9uLCBpZiBhbnlcbiAgICAgICAgaWYgKCFhbHJlYWR5U2VsZWN0ZWQuZW1wdHkoKSkge1xuICAgICAgICAgICAgYWxyZWFkeVNlbGVjdGVkLmNsYXNzZWQoJ3NlbGVjdGVkLXRva2VuJywgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdE1vZGVsU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuXG4gICAgICAgIC8vIEJlbG93IGFyZSB0aGUgYXZhaWxhYmxlIG1vZGVscy4gV2lsbCBuZWVkIHRvIGNob29zZSAzIHRvIGJlIGF2YWlsYWJsZSBPTkxZXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLWNhc2VkXCIsIGtpbmQ6IHRwLk1vZGVsS2luZC5CaWRpcmVjdGlvbmFsIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiYmVydC1iYXNlLXVuY2FzZWRcIiwga2luZDogdHAuTW9kZWxLaW5kLkJpZGlyZWN0aW9uYWwgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJkaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZFwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImRpc3RpbHJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcInJvYmVydGEtYmFzZVwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQmlkaXJlY3Rpb25hbCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImdwdDJcIiwga2luZDogdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZ3B0Mi1tZWRpdW1cIiwga2luZDogdHAuTW9kZWxLaW5kLkF1dG9yZWdyZXNzaXZlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiZGlzdGlsZ3B0MlwiLCBraW5kOiB0cC5Nb2RlbEtpbmQuQXV0b3JlZ3Jlc3NpdmUgfSxcbiAgICAgICAgXVxuXG4gICAgICAgIGNvbnN0IG5hbWVzID0gUi5tYXAoUi5wcm9wKCduYW1lJykpKGRhdGEpXG4gICAgICAgIGNvbnN0IGtpbmRzID0gUi5tYXAoUi5wcm9wKCdraW5kJykpKGRhdGEpXG4gICAgICAgIGNvbnN0IGtpbmRtYXAgPSBSLnppcE9iaihuYW1lcywga2luZHMpXG5cbiAgICAgICAgdGhpcy5zZWxzLm1vZGVsU2VsZWN0b3Iuc2VsZWN0QWxsKCcubW9kZWwtb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdtb2RlbC1vcHRpb24nLCB0cnVlKVxuICAgICAgICAgICAgLnByb3BlcnR5KCd2YWx1ZScsIGQgPT4gZC5uYW1lKVxuICAgICAgICAgICAgLmF0dHIoXCJtb2RlbGtpbmRcIiwgZCA9PiBkLmtpbmQpXG4gICAgICAgICAgICAudGV4dChkID0+IGQubmFtZSlcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5wcm9wZXJ0eSgndmFsdWUnLCB0aGlzLnVpQ29uZi5tb2RlbCgpKTtcblxuICAgICAgICB0aGlzLnNlbHMubW9kZWxTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIGNvbnN0IG1uYW1lID0gbWUucHJvcGVydHkoJ3ZhbHVlJylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsKG1uYW1lKTtcbiAgICAgICAgICAgIHNlbGYudWlDb25mLm1vZGVsS2luZChraW5kbWFwW21uYW1lXSk7XG4gICAgICAgICAgICBzZWxmLm1haW5Jbml0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdENvcnB1c1NlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFtcbiAgICAgICAgICAgIHsgY29kZTogXCJ3b3pcIiwgZGlzcGxheTogXCJXaXphcmQgb2YgT3pcIiB9LFxuICAgICAgICAgICAgeyBjb2RlOiBcIndpa2lcIiwgZGlzcGxheTogXCJXaWtpcGVkaWFcIiB9LFxuICAgICAgICBdXG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICAgICAgc2VsZi5zZWxzLmNvcnB1c1NlbGVjdG9yLnNlbGVjdEFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgICAuam9pbignb3B0aW9uJylcbiAgICAgICAgICAgIC5wcm9wZXJ0eSgndmFsdWUnLCBkID0+IGQuY29kZSlcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kaXNwbGF5KVxuXG4gICAgICAgIHRoaXMuc2Vscy5jb3JwdXNTZWxlY3Rvci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIHNlbGYudWlDb25mLmNvcnB1cyhtZS5wcm9wZXJ0eSgndmFsdWUnKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYudWlDb25mLmNvcnB1cygpKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RhdGljSW5pdHMoKSB7XG4gICAgICAgIHRoaXMuX2luaXRTZW50ZW5jZUZvcm0oKTtcbiAgICAgICAgdGhpcy5faW5pdE1vZGVsU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuX2luaXRDb3JwdXNTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5faW5pdFF1ZXJ5Rm9ybSgpO1xuICAgICAgICB0aGlzLl9pbml0QWRkZXIoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVySGVhZFN1bW1hcnkoKTtcbiAgICAgICAgdGhpcy5faW5pdE1ldGFTZWxlY3RvcnMoKTtcbiAgICAgICAgdGhpcy5faW5pdFRvZ2dsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0QWRkZXIoKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVVybE9mZnNldElkeHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpQ29uZi5vZmZzZXRJZHhzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmlkeHMpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXhDb3JwdXNNYXRIZWlnaHRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3V3JhcHBlZCA9IHRoaXMuX3dyYXBSZXN1bHRzKHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEoKSlcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmRhdGEobmV3V3JhcHBlZC5kYXRhKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRSaWdodC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5hZGRSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5hZGRMZWZ0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmFkZExlZnQoKVxuICAgICAgICAgICAgdXBkYXRlVXJsT2Zmc2V0SWR4cygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmJ1dHRvbnMua2lsbFJpZ2h0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudml6cy5jb3JwdXNNYXRNYW5hZ2VyLmtpbGxSaWdodCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5raWxsTGVmdC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5raWxsTGVmdCgpXG4gICAgICAgICAgICB1cGRhdGVVcmxPZmZzZXRJZHhzKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNlbHMuYnV0dG9ucy5yZWZyZXNoLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZpeENvcnB1c01hdEhlaWdodHMoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbHMuY29ycHVzSW5zcGVjdG9yLnRleHQoKSAhPSAnJykgZml4Q29ycHVzTWF0SGVpZ2h0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gb25yZXNpemVcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWV0YVNlbGVjdG9ycygpIHtcbiAgICAgICAgdGhpcy5faW5pdE1hdGNoZWRXb3JkU2VsZWN0b3IodGhpcy5zZWxzLm1ldGFTZWxlY3Rvci5tYXRjaGVkV29yZClcbiAgICAgICAgdGhpcy5faW5pdE1heEF0dFNlbGVjdG9yKHRoaXMuc2Vscy5tZXRhU2VsZWN0b3IubWF4QXR0KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRNYXhBdHRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXgoKSlcblxuICAgICAgICBjb25zdCBlbCA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gPFNpbXBsZU1ldGE+ZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIC8vIERvIHRvZ2dsZVxuICAgICAgICAgICAgc2VsLnNlbGVjdEFsbCgnLmFjdGl2ZScpLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoJ2FjdGl2ZScsIHRydWUpXG4gICAgICAgICAgICBzZWxmLnVpQ29uZi5tZXRhTWF4KHZhbClcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1heEF0dC5tZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TWF0Y2hlZFdvcmRTZWxlY3RvcihzZWw6IEQzU2VsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGNob29zZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtcyA9IHNlbC5zZWxlY3RBbGwoJ2xhYmVsJylcbiAgICAgICAgICAgIG1zLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKVxuICAgICAgICAgICAgY29uc3QgZWwgPSBzZWwuc2VsZWN0QWxsKGBsYWJlbFt2YWx1ZT0ke3ZhbHVlfV1gKVxuICAgICAgICAgICAgZWwuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNob29zZVNlbGVjdGVkKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuXG4gICAgICAgIGNvbnN0IGVsID0gc2VsLnNlbGVjdEFsbCgnbGFiZWwnKVxuICAgICAgICBlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSA8U2ltcGxlTWV0YT5kMy5zZWxlY3QodGhpcykuYXR0cigndmFsdWUnKVxuXG4gICAgICAgICAgICAvLyBEbyB0b2dnbGVcbiAgICAgICAgICAgIHNlbC5zZWxlY3RBbGwoJy5hY3RpdmUnKS5jbGFzc2VkKCdhY3RpdmUnLCBmYWxzZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKCdhY3RpdmUnLCB0cnVlKVxuICAgICAgICAgICAgc2VsZi51aUNvbmYubWV0YU1hdGNoKHZhbClcbiAgICAgICAgICAgIHNlbGYuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXNhYmxlU2VhcmNoaW5nKGF0dHI6IGJvb2xlYW4pIHtcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmNvbnRleHRRdWVyeSlcbiAgICAgICAgc2V0U2VsRGlzYWJsZWQoYXR0ciwgdGhpcy5zZWxzLmVtYmVkZGluZ1F1ZXJ5KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHZhbDogdHAuU2ltcGxlTWV0YSkge1xuICAgICAgICB0aGlzLnZpenMuY29ycHVzTWF0TWFuYWdlci5waWNrKHZhbClcbiAgICAgICAgdGhpcy52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQubWV0YSh2YWwpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdFNlbnRlbmNlRm9ybSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLmF0dHIoJ3BsYWNlaG9sZGVyJywgXCJFbnRlciBuZXcgc2VudGVuY2UgdG8gYW5hbHl6ZVwiKVxuICAgICAgICB0aGlzLnNlbHMuZm9ybS5zZW50ZW5jZUEuYXR0cigndmFsdWUnLCB0aGlzLnVpQ29uZi5zZW50ZW5jZSgpKVxuXG4gICAgICAgIGNvbnN0IGNsZWFySW5zcGVjdG9yID0gKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IuY2xlYXIoKTtcbiAgICAgICAgICAgIHNlbGYudml6cy5oaXN0b2dyYW1zLm1hdGNoZWRXb3JkLmNsZWFyKCk7XG4gICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdE5ld1NlbnRlbmNlID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSBhbGwgb2NjdXJlbmNlcyBvZiAnIycgaW4gc2VudGVuY2UgYXMgdGhpcyBjYXVzZXMgdGhlIEFQSSB0byBicmVha1xuICAgICAgICAgICAgY29uc3Qgc2VudGVuY2VfYTogc3RyaW5nID0gdGhpcy5zZWxzLmZvcm0uc2VudGVuY2VBLnByb3BlcnR5KFwidmFsdWVcIikucmVwbGFjZSgvXFwjL2csICcnKVxuXG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgZm9ybSBpcyBmaWxsZWQgY29ycmVjdGx5XG4gICAgICAgICAgICBpZiAoc2VudGVuY2VfYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcInByb2dyZXNzXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0TWV0YUF0dGVudGlvbnModGhpcy51aUNvbmYubW9kZWwoKSwgc2VudGVuY2VfYSwgdGhpcy51aUNvbmYubGF5ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHI6IHRwLkF0dGVudGlvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpQ29uZi5zZW50ZW5jZShzZW50ZW5jZV9hKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aUNvbmYucm1Ub2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRDYXBzdWxlLnVwZGF0ZUZyb21Ob3JtYWwociwgdGhpcy51aUNvbmYuaGlkZUNsc1NlcCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rQ2Fwc3VsZS51cGRhdGVGcm9tUmVzcG9uc2Uocik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2dnbGVUb2tlblNlbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW5zcGVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uRW50ZXIgPSBSLmN1cnJ5KChrZXlDb2RlLCBmLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgIT09IGtleUNvZGUpIHJldHVybjtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGYoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBvbkVudGVyU3VibWl0ID0gb25FbnRlcigxMywgc3VibWl0TmV3U2VudGVuY2UpXG5cbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5zZWxzLmZvcm0uYnV0dG9uO1xuICAgICAgICBjb25zdCBpbnB1dEJveCA9IHRoaXMuc2Vscy5mb3JtLnNlbnRlbmNlQTtcblxuICAgICAgICBidG4ub24oXCJjbGlja1wiLCBzdWJtaXROZXdTZW50ZW5jZSlcbiAgICAgICAgaW5wdXRCb3gub24oJ2tleXByZXNzJywgb25FbnRlclN1Ym1pdClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTZWFyY2hFbWJlZHMoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9rZW4gPSB0aGlzLnVpQ29uZi50b2tlbigpO1xuICAgICAgICBjb25zdCBvdXQgPSB0aGlzLnZpenMudG9rZW5zW3NhdmVkVG9rZW4uc2lkZV0uZ2V0RW1iZWRkaW5nKHNhdmVkVG9rZW4uaW5kKVxuICAgICAgICByZXR1cm4gb3V0LmVtYmVkZGluZ3NcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRTZWFyY2hDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzYXZlZFRva2VuID0gdGhpcy51aUNvbmYudG9rZW4oKTtcbiAgICAgICAgY29uc3Qgb3V0ID0gdGhpcy52aXpzLnRva2Vuc1tzYXZlZFRva2VuLnNpZGVdLmdldEVtYmVkZGluZyhzYXZlZFRva2VuLmluZClcbiAgICAgICAgcmV0dXJuIG91dC5jb250ZXh0c1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaEVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNFQVJDSElORyBFTUJFRERJTkdTXCIpO1xuICAgICAgICBjb25zdCBlbWJlZCA9IHRoaXMuX2dldFNlYXJjaEVtYmVkcygpXG4gICAgICAgIGNvbnN0IGxheWVyID0gc2VsZi51aUNvbmYubGF5ZXIoKVxuICAgICAgICBjb25zdCBoZWFkcyA9IHNlbGYudWlDb25mLmhlYWRzKClcbiAgICAgICAgY29uc3QgayA9IDUwXG5cbiAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJwcm9ncmVzc1wiKVxuICAgICAgICBzZWxmLmFwaS5nZXROZWFyZXN0RW1iZWRkaW5ncyhzZWxmLnVpQ29uZi5tb2RlbCgpLCBzZWxmLnVpQ29uZi5jb3JwdXMoKSwgZW1iZWQsIGxheWVyLCBoZWFkcywgaylcbiAgICAgICAgICAgIC50aGVuKCh2YWw6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSA0MDYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbWJlZGRpbmdzIGFyZSBub3QgYXZhaWxhYmxlIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sZWF2ZUNvcnB1c01zZyhcIkVtYmVkZGluZ3MgYXJlIG5vdCBhdmFpbGFibGUgYXQgdGhpcyB0aW1lLlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IDx0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXT52YWxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNJbnNwZWN0b3IudW5oaWRlVmlldygpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudml6cy5jb3JwdXNNYXRNYW5hZ2VyLnVuaGlkZVZpZXcoKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBoZWlnaHRzIG9mIGNvcnB1cyBpbnNwZWN0b3Igcm93cy5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodilcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudGVkVmFscyA9IHdyYXBwZWRWYWxzLmdldE1hdGNoZWRIaXN0b2dyYW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuY29ycHVzTWF0TWFuYWdlci51cGRhdGUod3JhcHBlZFZhbHMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQudXBkYXRlKGNvdW50ZWRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG4gICAgICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLmRpc3BsYXlJbnNwZWN0b3IoJ2VtYmVkZGluZ3MnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3JwdXNJbnNwZWN0b3JGcm9tTWV0YSh0aGlzLnVpQ29uZi5tZXRhTWF0Y2goKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxzLmJvZHkuc3R5bGUoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaENvbnRleHQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNFQVJDSElORyBDT05URVhUU1wiKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2dldFNlYXJjaENvbnRleHQoKVxuICAgICAgICBjb25zdCBsYXllciA9IHNlbGYudWlDb25mLmxheWVyKClcbiAgICAgICAgY29uc3QgaGVhZHMgPSBzZWxmLnVpQ29uZi5oZWFkcygpXG4gICAgICAgIGNvbnN0IGsgPSA1MFxuXG4gICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIilcblxuICAgICAgICBzZWxmLmFwaS5nZXROZWFyZXN0Q29udGV4dHMoc2VsZi51aUNvbmYubW9kZWwoKSwgc2VsZi51aUNvbmYuY29ycHVzKCksIGNvbnRleHQsIGxheWVyLCBoZWFkcywgaylcbiAgICAgICAgICAgIC50aGVuKCh2YWw6IHRwLkZhaXNzU2VhcmNoUmVzdWx0c1tdIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodHMgb2YgY29ycHVzIGluc3BlY3RvciByb3dzLlxuICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxlYXZlQ29ycHVzTXNnKFwiQ29udGV4dHMgYXJlIG5vdCBhdmFpbGFibGUgYXQgdGhpcyB0aW1lLlwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IDx0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXT52YWxcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJISURJTkdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51cGRhdGUodilcblxuICAgICAgICAgICAgICAgICAgICBTZWwuaGlkZUVsZW1lbnQoc2VsZi5zZWxzLmNvcnB1c01zZ0JveClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c0luc3BlY3Rvci51bmhpZGVWaWV3KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudW5oaWRlVmlldygpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3JhcHBlZFZhbHMgPSBzZWxmLl93cmFwUmVzdWx0cyh2KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudGVkVmFscyA9IHdyYXBwZWRWYWxzLmdldE1hdGNoZWRIaXN0b2dyYW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXRWYWxzID0gd3JhcHBlZFZhbHMuZ2V0TWF4QXR0SGlzdG9ncmFtKClcbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmNvcnB1c01hdE1hbmFnZXIudXBkYXRlKHdyYXBwZWRWYWxzLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi52aXpzLmhpc3RvZ3JhbXMubWF0Y2hlZFdvcmQudXBkYXRlKGNvdW50ZWRWYWxzKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQudXBkYXRlKG9mZnNldFZhbHMpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi51aUNvbmYuZGlzcGxheUluc3BlY3RvcignY29udGV4dCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvcnB1c0luc3BlY3RvckZyb21NZXRhKHRoaXMudWlDb25mLm1ldGFNYXRjaCgpKVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnZpenMuaGlzdG9ncmFtcy5tYXhBdHQubWV0YShzZWxmLnVpQ29uZi5tZXRhTWF4KCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnlDb250ZXh0KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIWlzTnVsbFRva2VuKHRoaXMudWlDb25mLnRva2VuKCkpKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWFyY2hDb250ZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhcyB0b2xkIHRvIHNob3cgaW5zcGVjdG9yIGJ1dCB3YXMgbm90IGdpdmVuIGEgc2VsZWN0ZWQgdG9rZW4gZW1iZWRkaW5nXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9xdWVyeUVtYmVkZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaXNOdWxsVG9rZW4odGhpcy51aUNvbmYudG9rZW4oKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlYXJjaEVtYmVkZGluZ3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2FzIHRvbGQgdG8gc2hvdyBpbnNwZWN0b3IgYnV0IHdhcyBub3QgZ2l2ZW4gYSBzZWxlY3RlZCB0b2tlbiBlbWJlZGRpbmdcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlYXJjaGluZ0Rpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudWlDb25mLmhlYWRzKCkubGVuZ3RoID09IDApIHx8IChpc051bGxUb2tlbih0aGlzLnVpQ29uZi50b2tlbigpKSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZWFyY2hEaXNhYmxlcigpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZVNlYXJjaGluZyh0aGlzLl9zZWFyY2hpbmdEaXNhYmxlZCgpKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRRdWVyeUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zZWFyY2hEaXNhYmxlcigpXG5cbiAgICAgICAgdGhpcy5zZWxzLmNvbnRleHRRdWVyeS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX3F1ZXJ5Q29udGV4dCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZWxzLmVtYmVkZGluZ1F1ZXJ5Lm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fcXVlcnlFbWJlZGRpbmdzKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZW5kZXJIZWFkU3VtbWFyeSgpIHtcbiAgICAgICAgdGhpcy5zZWxzLnNlbGVjdGVkSGVhZHNcbiAgICAgICAgICAgIC5odG1sKFIuam9pbignLCAnLCB0aGlzLnVpQ29uZi5oZWFkcygpKSlcbiAgICB9XG5cbiAgICAvLyBNb2RpZnkgZmFpc3MgcmVzdWx0cyB3aXRoIGNvcnJlc3BvbmRpbmcgaGVpZ2h0c1xuICAgIHByaXZhdGUgX3dyYXBSZXN1bHRzKHJldHVybmVkRmFpc3NSZXN1bHRzOiB0cC5GYWlzc1NlYXJjaFJlc3VsdHNbXSkge1xuXG4gICAgICAgIGNvbnN0IHJvd3MgPSBkMy5zZWxlY3RBbGwoJy5pbnNwZWN0b3Itcm93JylcblxuICAgICAgICAvLyBEb24ndCBqdXN0IHVzZSBvZmZzZXRIZWlnaHQgc2luY2UgdGhhdCByb3VuZHMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAgICAgICBjb25zdCBoZWlnaHRzID0gcm93cy5ub2RlcygpLm1hcCgobjogSFRNTEVsZW1lbnQpID0+IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KVxuXG4gICAgICAgIGNvbnN0IG5ld1ZhbHMgPSByZXR1cm5lZEZhaXNzUmVzdWx0cy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBSLmFzc29jKCdoZWlnaHQnLCBoZWlnaHRzW2ldLCB2KVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3cmFwcGVkVmFscyA9IG5ldyBGYWlzc1NlYXJjaFJlc3VsdFdyYXBwZXIobmV3VmFscylcblxuICAgICAgICByZXR1cm4gd3JhcHBlZFZhbHNcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRMYXllcnMobkxheWVyczogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgaGFzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHNlbGYuc2Vscy5sYXllckNoZWNrYm94ZXMuc2VsZWN0QWxsKFwiLmxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgIC5kYXRhKF8ucmFuZ2UoMCwgbkxheWVycykpXG4gICAgICAgICAgICAuam9pbihcImxhYmVsXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYnRuIGJ1dHRvbiBsYXllckNoZWNrYm94XCIpXG4gICAgICAgICAgICAuY2xhc3NlZCgnYWN0aXZlJywgKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdG8gbGFyZ2VzdCBsYXllciBhdmFpbGFibGUgaWYgdWlDb25mLmxheWVyKCkgPiBuZXcgbkxheWVyc1xuICAgICAgICAgICAgICAgIGlmIChkID09IHNlbGYudWlDb25mLmxheWVyKCkgLSAxKSB7IC8vIEphdmFzY3JpcHQgaXMgMCBpbmRleGVkIVxuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzQWN0aXZlICYmIGQgPT0gbkxheWVycykge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVpQ29uZi5sYXllcihkKVxuICAgICAgICAgICAgICAgICAgICBoYXNBY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGV4dCgoZCkgPT4gZCArIDEpXG4gICAgICAgICAgICAuYXBwZW5kKFwiaW5wdXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcInJhZGlvXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hlY2tib3gtaW5saW5lXCIpXG4gICAgICAgICAgICAuYXR0cihcIm5hbWVcIiwgXCJsYXllcmJveFwiKVxuICAgICAgICAgICAgLy8gLmF0dHIoXCJoZWFkXCIsIGQgPT4gZClcbiAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgKGQsIGkpID0+IFwibGF5ZXJDaGVja2JveFwiICsgaSlcbiAgICAgICAgLy8gLnRleHQoKGQsIGkpID0+IGQgKyBcIiBcIilcblxuICAgICAgICBmcm9tRXZlbnQoY2hlY2tib3hlcy5ub2RlcygpLCAnY2hhbmdlJykucGlwZShcbiAgICAgICAgICAgIHRhcCgoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBteURhdGEgPSBkMy5zZWxlY3QoPEJhc2VUeXBlPmUudGFyZ2V0KS5kYXR1bSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15RGF0YSwgXCItLS0gbXlEYXRhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vscy5sYXllckNoZWNrYm94ZXMuc2VsZWN0QWxsKFwiLmxheWVyQ2hlY2tib3hcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2FjdGl2ZScsIGQgPT4gZCA9PT0gbXlEYXRhKVxuXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1hcCgodjogRXZlbnQpID0+ICtkMy5zZWxlY3QoPEJhc2VUeXBlPnYudGFyZ2V0KS5kYXR1bSgpKSxcbiAgICAgICAgICAgIHRhcCh2ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBsYXllcjogXCIsIHYpO1xuICAgICAgICAgICAgICAgIHNlbGYudWlDb25mLmxheWVyKHYpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Vscy5ib2R5LnN0eWxlKFwiY3Vyc29yXCIsIFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgodikgPT4gZnJvbShzZWxmLmFwaS51cGRhdGVNYXNrZWRBdHRlbnRpb25zKHNlbGYudWlDb25mLm1vZGVsKCksIHNlbGYudG9rQ2Fwc3VsZS5hLCBzZWxmLnVpQ29uZi5zZW50ZW5jZSgpLCB2KSkpIC8vIFVTRSBUSElTXG4gICAgICAgICkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChyOiB0cC5BdHRlbnRpb25SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0Q2Fwc3VsZS51cGRhdGVGcm9tTm9ybWFsKHIsIHRoaXMudWlDb25mLmhpZGVDbHNTZXAoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi50b2tDYXBzdWxlLnVwZGF0ZUVtYmVkZGluZ3Mocik7XG4gICAgICAgICAgICAgICAgc2VsZi51aUNvbmYubWFza0luZHMoc2VsZi50b2tDYXBzdWxlLmEubWFza0luZHMpXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbHMuYm9keS5zdHlsZShcImN1cnNvclwiLCBcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICBzZWxmLl90b2dnbGVUb2tlblNlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGxheWVySWQgPSBgI2xheWVyQ2hlY2tib3gke3RoaXMudWlDb25mLmxheWVyKCl9YFxuICAgICAgICBjb25zb2xlLmxvZyhcIkxheWVyIElEOiBcIiwgbGF5ZXJJZCk7XG4gICAgICAgIGQzLnNlbGVjdChsYXllcklkKS5hdHRyKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIilcblxuICAgICAgICAvLyBJbml0IHRocmVzaG9sZCBzdHVmZlxuICAgICAgICBjb25zdCBkaXNwVGhyZXNoID0gKHRocmVzaCkgPT4gTWF0aC5yb3VuZCh0aHJlc2ggKiAxMDApXG4gICAgICAgIGQzLnNlbGVjdCgnI215LXJhbmdlLXZhbHVlJykudGV4dChkaXNwVGhyZXNoKHNlbGYudWlDb25mLnRocmVzaG9sZCgpKSlcblxuICAgICAgICB0aGlzLnNlbHMudGhyZXNoU2xpZGVyLm9uKFwiaW5wdXRcIiwgXy50aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcztcbiAgICAgICAgICAgIHNlbGYudWlDb25mLnRocmVzaG9sZCgrbm9kZS52YWx1ZSAvIDEwMCk7XG4gICAgICAgICAgICBkMy5zZWxlY3QoJyNteS1yYW5nZS12YWx1ZScpLnRleHQoZGlzcFRocmVzaChzZWxmLnVpQ29uZi50aHJlc2hvbGQoKSkpXG4gICAgICAgICAgICBzZWxmLnZpenMuYXR0ZW50aW9uU3ZnLnRocmVzaG9sZChzZWxmLnVpQ29uZi50aHJlc2hvbGQoKSlcbiAgICAgICAgfSwgMTAwKSlcblxuICAgICAgICB0aGlzLnNlbHMuaGVhZFNlbGVjdEFsbC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudWlDb25mLnNlbGVjdEFsbEhlYWRzKCk7XG4gICAgICAgICAgICBzZWxmLl9zZWFyY2hEaXNhYmxlcigpXG4gICAgICAgICAgICBzZWxmLnJlbmRlclN2ZygpXG4gICAgICAgICAgICBzZWxmLnJlbmRlckF0dEhlYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2Vscy5oZWFkU2VsZWN0Tm9uZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudWlDb25mLnNlbGVjdE5vSGVhZHMoKTtcbiAgICAgICAgICAgIHNlbGYuX3NlYXJjaERpc2FibGVyKCk7XG4gICAgICAgICAgICBzZWxmLnJlbmRlclN2ZygpXG4gICAgICAgICAgICBzZWxmLnJlbmRlckF0dEhlYWQoKVxuICAgICAgICAgICAgU2VsLnNldEhpZGRlbihcIi5hdG4tY3VydmVcIilcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIF9pbml0VG9nZ2xlKCkge1xuICAgICAgICBmcm9tRXZlbnQodGhpcy5zZWxzLmNsc1RvZ2dsZS5ub2RlKCksICdpbnB1dCcpLnBpcGUoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIC0tIFRPRE86IEZJWCAhXG4gICAgICAgICAgICBtYXAoZSA9PiBlLnNyY0VsZW1lbnQuY2hlY2tlZCksXG4gICAgICAgICkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IHYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudWlDb25mLmhpZGVDbHNTZXAodilcbiAgICAgICAgICAgICAgICB0aGlzLmF0dENhcHN1bGUuemVyb2VkKHYpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJBdHRIZWFkKCkge1xuICAgICAgICBjb25zdCBoZWFkcyA9IF8ucmFuZ2UoMCwgdGhpcy51aUNvbmYuX25IZWFkcylcbiAgICAgICAgY29uc3QgZm9jdXNBdHQgPSB0aGlzLmF0dENhcHN1bGUuYXR0XG4gICAgICAgIGNvbnN0IGxlZnRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwibGVmdFwiKTtcbiAgICAgICAgY29uc3QgcmlnaHRBdHRJbmZvID0gZ2V0QXR0ZW50aW9uSW5mbyhmb2N1c0F0dCwgaGVhZHMsIFwicmlnaHRcIik7XG4gICAgICAgIHRoaXMudml6cy5sZWZ0SGVhZHMub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLmxlZnRIZWFkcy51cGRhdGUobGVmdEF0dEluZm8pXG4gICAgICAgIHRoaXMudml6cy5yaWdodEhlYWRzLnVwZGF0ZShyaWdodEF0dEluZm8pXG4gICAgICAgIHRoaXMuX3JlbmRlckhlYWRTdW1tYXJ5KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlXG4gICAgICAgIGhlYWRzLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpQ29uZi5oZWFkU2V0KCkuaGFzKGgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0SGVhZChoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNlbGVjdEhlYWQoaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMF1dXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b2tDYXBzdWxlW3RoaXMudWlDb25mLmF0dFR5cGVbMV1dXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJub3c6IFwiLCB0aGlzLnVpQ29uZi5vZmZzZXQpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLmxlZnQub3B0aW9ucy5vZmZzZXQgPSB0aGlzLnVpQ29uZi5vZmZzZXRcbiAgICAgICAgdGhpcy52aXpzLnRva2Vucy5sZWZ0LnVwZGF0ZShsZWZ0LnRva2VuRGF0YSk7XG4gICAgICAgIHRoaXMudml6cy50b2tlbnMubGVmdC5tYXNrKGxlZnQubWFza0luZHMpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0LnVwZGF0ZShyaWdodC50b2tlbkRhdGEpO1xuICAgICAgICB0aGlzLnZpenMudG9rZW5zLnJpZ2h0Lm1hc2socmlnaHQubWFza0luZHMpO1xuICAgICAgICAvLyBkaXNwbGF5U2VsZWN0ZWRUb2tlblxuICAgIH1cblxuICAgIHJlbmRlclN2ZygpIHtcbiAgICAgICAgY29uc3QgYXR0ID0gdGhpcy5hdHRDYXBzdWxlLmJ5SGVhZHModGhpcy51aUNvbmYuaGVhZHMoKSlcbiAgICAgICAgdGhpcy52aXpzLmF0dGVudGlvblN2Zy5vcHRpb25zLm9mZnNldCA9IHRoaXMudWlDb25mLm9mZnNldFxuICAgICAgICBjb25zdCBzdmcgPSA8QXR0ZW50aW9uR3JhcGg+dGhpcy52aXpzLmF0dGVudGlvblN2Zy5kYXRhKGF0dCk7XG4gICAgICAgIHN2Zy51cGRhdGUoYXR0KVxuICAgICAgICBjb25zdCBtYXhUb2tlbnMgPSBfLm1heChbdGhpcy50b2tDYXBzdWxlLmEubGVuZ3RoKCldKVxuICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBzdmcub3B0aW9ucy5ib3hoZWlnaHQgKiBtYXhUb2tlbnNcbiAgICAgICAgc3ZnLmhlaWdodChuZXdIZWlnaHQpXG5cbiAgICAgICAgLy8gRG9uJ3QgcmVkaXNwbGF5IGV2ZXJ5dGhpbmcgaWYgb25lIHRva2VuIGlzIHNlbGVjdGVkXG4gICAgICAgIHNob3dCeVNpZGUodGhpcy51aUNvbmYudG9rZW4oKSlcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgICAgICB0aGlzLnJlbmRlclN2ZygpO1xuICAgICAgICB0aGlzLnJlbmRlckF0dEhlYWQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==