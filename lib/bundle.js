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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Beedrill{
    constructor(canvas, ctx, beedrillPhoto){
        this.beedrillPhoto = beedrillPhoto;
        this.health = 1;
        this.height = 22;
        this.width = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPadding = 20;
        this.beedrillOffsetLeft = 140;
        this.beedrillOffsetTop = 100
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 8;
        this.beedrills = [];
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            this.beedrills[c] = [];
            for (var r = 0; r < this.beedrillRowCount; r++) {
                this.beedrills[c][r] = { x: 0, y: 0 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                var beedrillX = (c * (this.beedrillWidth + this.beedrillPadding)) + this.beedrillOffsetLeft;
                var beedrillY = (r * (this.beedrillHeight + this.beedrillPadding)) + this.beedrillOffsetTop;
                beedrills[c][r].x = beedrillX;
                beedrills[c][r].y = beedrillY;
                ctx.beginPath();
                ctx.rect(beedrillX, beedrillY, this.beedrillWidth, this.beedrillHeight);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

/* harmony default export */ __webpack_exports__["default"] = (Beedrill);

/***/ }),

/***/ "./js/butterfree.js":
/*!**************************!*\
  !*** ./js/butterfree.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Butterfree{
    constructor(canvas, ctx, butterfreePhoto){
        this.butterfreePhoto = butterfreePhoto;
        this.health = 1;
        this.height = 17;
        this.width = 21;
        this.canvas = canvas;
        this.ctx = ctx;
        this.butterfreePadding = 20;
        this.butterfrees = [];
        this.butterfreeRowCount = 2;
        this.butterfreeColumnCount = 8;
        this.butterfreeOffsetTop = 50;
        this.butterfreeOffsetLeft = 138;
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            this.butterfrees[c] = [];
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                this.butterfrees[c][r] = { x: 0, y: 0 };
            }
        }
       
    }


    drawButterfrees() {
        
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.beedrillRowCount; r++) {
                var butterfreeX = (c * (this.butterfreeWidth + this.butterfreePadding)) + this.butterfreeOffsetLeft;
                var butterfreeY = (r * (this.butterfreeHeight + this.butterfreePadding)) + this.butterfreeOffsetTop;
                butterfrees[c][r].x = butterfreeX;
                butterfrees[c][r].y = butterfreeY;
                ctx.beginPath();
                ctx.rect(butterfreeX, butterfreeY, this.butterfreeWidth, this.butterfreeHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

/* harmony default export */ __webpack_exports__["default"] = (Butterfree);

/***/ }),

/***/ "./js/dragonite.js":
/*!*************************!*\
  !*** ./js/dragonite.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Dragonite{
    constructor(canvas, ctx, dragonitePhoto){
        this.dragonitePhoto = dragonitePhoto;
        this.health = 2;
        this.height = 31;
        this.width = 24;
        this.canvas = canvas;
        this.ctx = ctx;
        this.dragonitePadding = 40;
        this.dragoniteRowCount = 1;
        this.dragoniteColumnCount = 4;
        this.dragoniteOffsetLeft = 170;
        this.dragonites = [];
        for (var c = 0; c < this.dragoniteColumnCount; c++) {
            this.dragonites[c] = [];
            for (var r = 0; r < this.dragoniteRowCount; r++) {
                this.dragonites[c][r] = { x: 0, y: 0 };
            }
        }
    }
    

    drawDragonites() {
        for (var c = 0; c < this.dragoniteColumnCount; c++) {
            for (var r = 0; r < this.dragoniteRowCount; r++) {
                var dragoniteX = (c * (this.dragoniteWidth + this.dragonitePadding)) + this.dragoniteOffsetLeft;
                var dragoniteY = (r * (this.dragoniteHeight + this.dragonitePadding));
                dragonites[c][r].x = dragoniteX;
                dragonites[c][r].y = dragoniteY;
                ctx.beginPath();
                ctx.rect(dragoniteX, dragoniteY, this.dragoniteWidth, this.dragoniteHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Dragonite);

/***/ }),

/***/ "./js/enemyBullet.js":
/*!***************************!*\
  !*** ./js/enemyBullet.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _butterfree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butterfree */ "./js/butterfree.js");
/* harmony import */ var _beedrill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beedrill */ "./js/beedrill.js");
/* harmony import */ var _dragonite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragonite */ "./js/dragonite.js");




class EnemyBullet{
    constructor(canvas, ctx, ButterFree, Beedrill, Dragonite){
        this.canvas = canvas;
        this.ctx = ctx;
        this.ButterFree = ButterFree; 
        this.Beedrill = Beedrill;
        this.Dragonite = Dragonite;
        this.eBulletWidth = 3;
        this.eBulletHeight = 25;
        this.eBulletHealth = 1;
        this.draw = this.draw.bind(this);
        this.drawEnemyBullet = this.drawEnemyBullet.bind(this);
        this.Enemies = [];
        // Loop through all three to get enemies
        this.speed = 3;
    }

    drawEnemyBullet(){

    }

    draw(){
        this.drawEnemyBullet();
        this.y += this.speed;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EnemyBullet);

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, SquirtleBulletHandler ){

        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        this.dragonitePhoto = dragonitePhoto;
        this.Squirtle = new Squirtle(canvas, ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        this.Beedrill = new Beedrill(canvas, ctx, this.beedrillPhoto);
        this.Dragonite = new Dragonite(canvas, ctx, this.dragonitePhoto);
        this.SquirtleBulletHandler = new SquirtleBulletHandler(ctx, canvas, this.Squirtle);
        this.lives = 3;

        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        document.addEventListener("keydown", this.SquirtleBulletHandler.keyDownHandler, false);
    }

}
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./js/score.js":
/*!*********************!*\
  !*** ./js/score.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {


class Score {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.score = 0;
    }
//     resetGame(){
//         this.score = 0;
//     }
//     addPoints(points){
//         this.score += points;
//     }
}
// export default Score;

/***/ }),

/***/ "./js/squirtle.js":
/*!************************!*\
  !*** ./js/squirtle.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Squirtle{
    constructor(canvas, ctx, squirtlePhoto){
        this.squirtleWidth = 24;
        this.squirtlePhoto = squirtlePhoto;
        this.squirtleHeight = 31;
        this.canvas = canvas;
        this.squirtleX = (this.canvas.width - this.squirtleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.ctx = ctx;
        this.spacePressed = false;
        this.bullets = [];
        this.squirtleSpeed = 3
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawSquirtle = this.drawSquirtle.bind(this);
    }



        keyDownHandler(e) {
    // debugger
        if (e.keyCode === 39) {
            // debugger
            rightPressed = true;
        }
        else if (e.keyCode === 37) {
            // debugger
            leftPressed = true;
        }
        // else if (e.keyCode === 32) {
        //     // debugger
        //     spacePressed = true;
        // }
    }

    // updateBullets(bullets) {
    //     for (let i = 0; i < bullets.length; i++) {
    //         bullet = bullets[i];
    //         bullet.y -= bullet.speed * bullet.dy;
    //     }
    // }

    keyUpHandler(e) {
        if (e.keyCode === 39) {
            // debugger
            rightPressed = false;
            // debugger
        }
        else if (e.keyCode === 37) {
            // debugger
            leftPressed = false;
        }
        // else if (e.keyCode === 32) {
        //     // debugger
        //     spacePressed = false;
        // }
    }

    // shoot() {
    //     if (spacePressed) {
    //         addBullet();
    //     }
    // }

    drawSquirtle() {
        this.ctx.drawSquirtle(this.squirtlePhoto, this.squirtleX, this.canvas-height - this.squirtleHeight, this.squirtleHeight, this.squirtleWidth)
    }

    draw() {
        drawSquirtle()

        if (this.rightPressed && this.squirtleX < this.canvas.width - this.squirtleWidth) {
            squirtleX += this.squirtleSpeed;
        } else if (leftPressed && squirtleX > 0) {
            squirtleX -= this.squirtleSpeed;
        // } else if (spacePressed) {
        //     shoot();
        //     // squirtleX -= 5;
        // }
        }
    }
    
}

/* harmony default export */ __webpack_exports__["default"] = (Squirtle);

/***/ }),

/***/ "./js/squirtleBullet.js":
/*!******************************!*\
  !*** ./js/squirtleBullet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _squirtle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squirtle */ "./js/squirtle.js");


class SquirtleBullet{
    constructor(canvas, ctx, Squirtle){
        this.Squirtle = Squirtle;
        this.sBulletWidth = 3;
        this.sBulletHeight = 25;
        this.canvas = canvas;
        this.ctx = ctx;
        this.sBulletHealth = 1;
        this.draw = this.draw.bind(this);
        this.drawSquirtleBullet = this.drawSquirtleBullet.bind(this);
        this.x = Squirtle.squirtleX;
        this.y = this.Squirtle.y - 10;
        this.speed = 3;
    }

    drawSquirtleBullet(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.sBulletWidth, this.sBulletHeight);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw(){
        this.drawSquirtleBullet();
        this.y -= this.speed;
    }


}

/* harmony default export */ __webpack_exports__["default"] = (SquirtleBullet);

/***/ }),

/***/ "./js/squirtleBulletShooter.js":
/*!*************************************!*\
  !*** ./js/squirtleBulletShooter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _squirtleBullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squirtleBullet */ "./js/squirtleBullet.js");


class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle, enemy){
        this.Squirtle = Squirtle;
        this.canvas = canvas;
        this.ctx = ctx;
        this.enemy = enemy;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
    }

    keyDownHandler(e){
        if (e.keyDownHandler === 32){
            this.bullets.push(new _squirtleBullet__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, this.Squirtle))
        }
    }

    collisionDetection(){
        this.bullets.forEach((bullet) => {
            let bulletX = Math.floor(bullet.x);
         
            if (bulletX > this.Squirtle.squirtleX ){
                this.enemy.status -= 1;
                sBulletHealth.health = 0;
            }
        })
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SquirtleBulletShooter);

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
/* harmony import */ var _js_squirtleBullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/squirtleBullet */ "./js/squirtleBullet.js");
/* harmony import */ var _js_beedrill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/beedrill */ "./js/beedrill.js");
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/score */ "./js/score.js");
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_score__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_dragonite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/dragonite */ "./js/dragonite.js");
/* harmony import */ var _js_butterfree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/butterfree */ "./js/butterfree.js");
/* harmony import */ var _js_enemyBullet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/enemyBullet */ "./js/enemyBullet.js");
/* harmony import */ var _js_squirtle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/squirtle */ "./js/squirtle.js");
/* harmony import */ var _js_squirtleBulletShooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/squirtleBulletShooter */ "./js/squirtleBulletShooter.js");










document.addEventListener('DOMContentLoaded', () => {
    const squirtlePhoto = new Image();
    squirtlePhoto.src = './assets/squirtle.png';
    const beedrillPhoto = new Image();
    beedrillPhoto.src = './assets/beedrill.png';
    const butterfreePhoto = new Image();
    butterfreePhoto.src = './assets/butterfree.png';
    const dragonitePhoto = new Image();
    dragonitePhoto.src = './assets/dragonite.png';
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const game = new _js_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, _js_squirtle__WEBPACK_IMPORTED_MODULE_7__["default"], squirtlePhoto, _js_butterfree__WEBPACK_IMPORTED_MODULE_5__["default"], butterfreePhoto, _js_beedrill__WEBPACK_IMPORTED_MODULE_2__["default"], beedrillPhoto, _js_dragonite__WEBPACK_IMPORTED_MODULE_4__["default"], dragonitePhoto, _js_squirtleBulletShooter__WEBPACK_IMPORTED_MODULE_8__["default"])
    return game;
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map