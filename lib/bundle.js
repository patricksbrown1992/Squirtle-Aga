/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/squirtle-aga.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/beedrill.js":
/*!************************!*\
  !*** ./js/beedrill.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Beedrill{
    constructor(x, y, health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.height = 22;
        this.width = 20;
        this.beedrillPadding = 20;
        this.beedrillOffsetLeft = 140;
        this.beedrillOffsetTop = 100
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 8;
        this.beedrills = [];
    }
    
    beedrills(){
        for (var c = 0; c < beedrillColumnCount; c++) {
            beedrills[c] = [];
            for (var r = 0; r < beedrillRowCount; r++) {
                beedrills[c][r] = { x: 0, y: 0 };
            }
        }
    }

    drawBeedrills() {
        for (var c = 0; c < butterfreeColumnCount; c++) {
            for (var r = 0; r < butterfreeRowCount; r++) {
                var beedrillX = (c * (beedrillWidth + beedrillPadding)) + beedrillOffsetLeft;
                var beedrillY = (r * (beedrillHeight + beedrillPadding)) + beedrillOffsetTop;
                beedrills[c][r].x = beedrillX;
                beedrills[c][r].y = beedrillY;
                ctx.beginPath();
                ctx.rect(beedrillX, beedrillY, beedrillWidth, beedrillHeight);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

/***/ }),

/***/ "./js/butterfree.js":
/*!**************************!*\
  !*** ./js/butterfree.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Butterfree{
    constructor(x, y, health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.height = 17;
        this.width = 21;
        this.butterfreePadding = 20;
        this.butterfrees = [];
        this.butterfreeRowCount = 2;
        this.butterfreeColumnCount = 8;
        this.butterfreeOffsetTop = 50;
        this.butterfreeOffsetLeft = 138;
        
       
    }

    butterfrees(){
         for (var c = 0; c < butterfreeColumnCount; c++) {
            butterfrees[c] = [];
            for (var r = 0; r < butterfreeRowCount; r++) {
                butterfrees[c][r] = { x: 0, y: 0 };
            }
        }
    }

    drawButterfrees() {
        
        for (var c = 0; c < butterfreeColumnCount; c++) {
            for (var r = 0; r < beedrillRowCount; r++) {
                var butterfreeX = (c * (butterfreeWidth + butterfreePadding)) + butterfreeOffsetLeft;
                var butterfreeY = (r * (butterfreeHeight + butterfreePadding)) + butterfreeOffsetTop;
                butterfrees[c][r].x = butterfreeX;
                butterfrees[c][r].y = butterfreeY;
                ctx.beginPath();
                ctx.rect(butterfreeX, butterfreeY, butterfreeWidth, butterfreeHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

/***/ }),

/***/ "./js/canvas.js":
/*!**********************!*\
  !*** ./js/canvas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Canvas{
    constructor(canvas, ctx, game, squirtleBullet, beedrill, score, dragonite, butterfree, enemyBullet){
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.squirtleBullet = squirtleBullet;
        this.beedrill = beedrill;
        this.score = score;
        this.dragonite = dragonite;
        this.butterfree = butterfree;
        this.enemyBullet = enemyBullet;
    }

    
}

/***/ }),

/***/ "./js/dragonite.js":
/*!*************************!*\
  !*** ./js/dragonite.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Dragonite{
    constructor(x, y, health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.height = 31;
        this.width = 24;
        this.dragonitePadding = 40;
        this.dragoniteRowCount = 1;
        this.dragoniteColumnCount = 4;
        this.dragoniteOffsetLeft = 170;
        this.dragonites = [];
    }
    
    dragonite(){
        for (var c = 0; c < dragoniteColumnCount; c++) {
            dragonites[c] = [];
            for (var r = 0; r < dragoniteRowCount; r++) {
                dragonites[c][r] = { x: 0, y: 0 };
            }
        }
    }

    drawDragonites() {
        for (var c = 0; c < dragoniteColumnCount; c++) {
            for (var r = 0; r < dragoniteRowCount; r++) {
                var dragoniteX = (c * (dragoniteWidth + dragonitePadding)) + dragoniteOffsetLeft;
                var dragoniteY = (r * (dragoniteHeight + dragonitePadding));
                dragonites[c][r].x = dragoniteX;
                dragonites[c][r].y = dragoniteY;
                ctx.beginPath();
                ctx.rect(dragoniteX, dragoniteY, dragoniteWidth, dragoniteHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

/***/ }),

/***/ "./js/enemyBullet.js":
/*!***************************!*\
  !*** ./js/enemyBullet.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Game{
    constructor(){

        this.audio = new Audio("assets/pokemon-trainer-battle-music.mp3");
        this.audio.loop = true;
        this.audio.volume = .25;
        this.auto.load();
        var lives = 3;
        
    }

}



/***/ }),

/***/ "./js/score.js":
/*!*********************!*\
  !*** ./js/score.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Score{
    constructor(){
        this.score = 0;
    }

    resetGame(){
        this.score = 0;
    }

    addPoints(points){
        this.score += points;
    }
}

/***/ }),

/***/ "./js/squirtleBullet.js":
/*!******************************!*\
  !*** ./js/squirtleBullet.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SquirtleBullet{
    constructor(x,y, dy){
        this.x = x;
        this.y = y;
        this.width = 12;
        this.height = 25;
        this.dy = dy;
        this.speed = 25;
        this.color = "green";
    }
}

/***/ }),

/***/ "./lib/squirtle-aga.js":
/*!*****************************!*\
  !*** ./lib/squirtle-aga.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/game */ "./js/game.js");
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_game__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_squirtleBullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/squirtleBullet */ "./js/squirtleBullet.js");
/* harmony import */ var _js_squirtleBullet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_squirtleBullet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_beedrill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/beedrill */ "./js/beedrill.js");
/* harmony import */ var _js_beedrill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_beedrill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/score */ "./js/score.js");
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_score__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_dragonite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/dragonite */ "./js/dragonite.js");
/* harmony import */ var _js_dragonite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_dragonite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_butterfree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/butterfree */ "./js/butterfree.js");
/* harmony import */ var _js_butterfree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_butterfree__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_enemyBullet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/enemyBullet */ "./js/enemyBullet.js");
/* harmony import */ var _js_enemyBullet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_enemyBullet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_canvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/canvas */ "./js/canvas.js");
/* harmony import */ var _js_canvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_canvas__WEBPACK_IMPORTED_MODULE_7__);









document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const game = new _js_canvas__WEBPACK_IMPORTED_MODULE_7___default.a(canvas, ctx, _js_game__WEBPACK_IMPORTED_MODULE_0___default.a, _js_squirtleBullet__WEBPACK_IMPORTED_MODULE_1___default.a, _js_beedrill__WEBPACK_IMPORTED_MODULE_2___default.a, _js_score__WEBPACK_IMPORTED_MODULE_3___default.a, _js_dragonite__WEBPACK_IMPORTED_MODULE_4___default.a, _js_butterfree__WEBPACK_IMPORTED_MODULE_5___default.a, _js_enemyBullet__WEBPACK_IMPORTED_MODULE_6___default.a);

})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map