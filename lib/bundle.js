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
    constructor(canvas, ctx,beedrillPhoto){
        this.beedrillPhoto =beedrillPhoto;
        this.health = 1;
        this.height = 22;
        this.width = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPadding = 50;
        this.beedrillOffsetLeft = 100;
        this.beedrillOffsetTop = 130
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 5;
        this.drawBeedrills = this.drawBeedrills.bind(this);
        this.draw = this.draw.bind(this);
        this.beedrills = [];
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            this.beedrills[c] = [];
            for (var r = 0; r < this.beedrillRowCount; r++) {
                this.beedrills[c][r] = { x: 0, y: 0 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            for (var r = 0; r < this.beedrillRowCount; r++) {
                var beedrillX = (c * (this.width + this.beedrillPadding)) + this.beedrillOffsetLeft;
                var beedrillY = (r * (this.height + this.beedrillPadding)) + this.beedrillOffsetTop;
                this.beedrills[c][r].x = beedrillX;
                this.beedrills[c][r].y = beedrillY;
                
                this.ctx.drawImage(this.beedrillPhoto, 0, 0, 70, 70, beedrillX, beedrillY, 50, 50)
                // ctx.rect(beedrillX, beedrillY, this.width, this.height);
               
            }
        }
    }

    draw(){
        this.drawBeedrills();
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
        this.butterfreePadding = 50;
        this.butterfrees = [];
        this.butterfreeRowCount = 2;
        this.butterfreeColumnCount = 6;
        this.butterfreeOffsetTop = 20;
        this.butterfreeOffsetLeft = 75;
        this.drawButterfrees = this.drawButterfrees.bind(this);
        this.draw = this.draw.bind(this);
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            this.butterfrees[c] = [];
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                this.butterfrees[c][r] = { x: 0, y: 0 };
            }
        }
       
    }


    drawButterfrees() {
        debugger
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                var butterfreeX = (c * (this.width + this.butterfreePadding)) + this.butterfreeOffsetLeft;
                var butterfreeY = (r * (this.height + this.butterfreePadding)) + this.butterfreeOffsetTop;
                this.butterfrees[c][r].x = butterfreeX;
                this.butterfrees[c][r].y = butterfreeY;
                this.ctx.drawImage(this.butterfreePhoto, 0, 0, 70, 70, butterfreeX, butterfreeY, 50, 50)

            }
        }
    }

    draw(){
        this.drawButterfrees();
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
        this.drawDragonites = this.drawDragonites.bind(this);
        this.draw = this.draw.bind(this);
        this.dragoniteColumnCount = 4;
        this.dragoniteOffsetLeft = 135;
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
                var dragoniteX = (c * (this.width + this.dragonitePadding)) + this.dragoniteOffsetLeft;
                var dragoniteY = (r * (this.height + this.dragonitePadding));
                this.dragonites[c][r].x = dragoniteX;
                this.dragonites[c][r].y = dragoniteY;
                // ctx.beginPath();
                this.ctx.drawImage(this.dragonitePhoto, 0, 0, 50, 50, dragoniteX, dragoniteY, 50, 50)

                // ctx.rect(dragoniteX, dragoniteY, this.width, this.height);
                // ctx.fillStyle = "red";
                // ctx.fill();
                // ctx.closePath();
            }
        }
    }

    draw(){
        this.drawDragonites()
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
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, BeeDrill, beedrillPhoto,
        //  Dragonite, dragonitePhoto
        // squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, SquirtleBulletShooter ){
        ){
        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        // this.dragonitePhoto = dragonitePhoto;
        this.Squirtle = new Squirtle(canvas, ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        this.BeeDrill = new BeeDrill(canvas, ctx, this.beedrillPhoto);

        // this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        // this.Beedrill = new Beedrill(canvas, ctx, this.beedrillPhoto);
        // this.Dragonite = new Dragonite(canvas, ctx, this.dragonitePhoto);
        // this.SquirtleBulletShooter = new SquirtleBulletShooter(ctx, canvas, this.Squirtle);
        this.lives = 3;
        this.begin = this.begin.bind(this);
        this.life = this.life.bind(this);
        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        // document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
    }

    start(){

    }
    life(){
        requestAnimationFrame(this.life)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        // this.Dragonite.draw();
      
    }

    begin(){
        // debugger
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        // this.Dragonite.draw();
        this.life();
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
        // this.bullets = [];
        this.squirtleSpeed = 5;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawSquirtle = this.drawSquirtle.bind(this);
        this.draw = this.draw.bind(this);
    }


        keyDownHandler(e) {
        if (e.keyCode === 39) {

            this.rightPressed = true;
        }
        else if (e.keyCode === 37) {

            this.leftPressed = true;
        }
      
    }

    
    keyUpHandler(e) {
        if (e.keyCode === 39) {

            this.rightPressed = false;

        }
        else if (e.keyCode === 37) {

            this.leftPressed = false;
        }
       
    }

    

    drawSquirtle() {
        // debugger
        // this.ctx.beginPath();
        this.ctx.drawImage(this.squirtlePhoto, 10, 10, 37, 37, this.squirtleX, this.canvas.height - 50, 50, 50);
        this.ctx.rect(this.squirtleX, this.canvas.height - this.squirtleHeight, this.squirtleHeight, this.squirtleWidth);
        // this.ctx.fillStyle = "orange";
        // this.ctx.fill();
        // this.ctx.closePath();
    }

    draw() {
        // debugger
        this.drawSquirtle();
        // this.ctx.fillText("GAME OVER", this.canvas.width / 2, 100);
        if (this.rightPressed && this.squirtleX < this.canvas.width - this.squirtleWidth) {
            this.squirtleX += this.squirtleSpeed;
        } else if (this.leftPressed && this.squirtleX > 0) {
            this.squirtleX -= this.squirtleSpeed;
       
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
    const game = new _js_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, _js_squirtle__WEBPACK_IMPORTED_MODULE_7__["default"], squirtlePhoto, _js_butterfree__WEBPACK_IMPORTED_MODULE_5__["default"], butterfreePhoto, _js_beedrill__WEBPACK_IMPORTED_MODULE_2__["default"], beedrillPhoto, _js_dragonite__WEBPACK_IMPORTED_MODULE_4__["default"], dragonitePhoto
        // , squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, SquirtleBulletShooter)
    )

    setTimeout(() => { game.begin() }, 1000)
 
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map