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
        this.beedrillPhoto = beedrillPhoto;
        this.height = 22;
        this.width = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPaddingBetween = 50;
        this.beedrillPaddingTop = 25;
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
                this.beedrills[c][r] = { x: 0, y: 0, health: 1 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            for (var r = 0; r < this.beedrillRowCount; r++) {
                if (this.beedrills[c][r].health > 0) {
                    var beedrillX = (c * (this.width + this.beedrillPaddingBetween)) + this.beedrillOffsetLeft;
                    var beedrillY = (r * (this.height + this.beedrillPaddingTop)) + this.beedrillOffsetTop;
                    this.beedrills[c][r].x = beedrillX;
                    this.beedrills[c][r].y = beedrillY;
                    this.ctx.drawImage(this.beedrillPhoto, 0, 0, 70, 70, beedrillX, beedrillY, 50, 50)
                }
 
               
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
        this.height = 17;
        this.width = 21;
        this.canvas = canvas;
        this.ctx = ctx;
        this.butterfreePaddingBetween = 50;
        this.butterfreePaddingTop = 27;
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
                this.butterfrees[c][r] = { x: 0, y: 0, health: 1};
            }
        }
       
    }


    drawButterfrees() {
        // debugger
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                if (this.butterfrees[c][r].health > 0){

                    var butterfreeX = (c * (this.width + this.butterfreePaddingBetween)) + this.butterfreeOffsetLeft;
                    var butterfreeY = (r * (this.height + this.butterfreePaddingTop)) + this.butterfreeOffsetTop;
                    this.butterfrees[c][r].x = butterfreeX;
                    this.butterfrees[c][r].y = butterfreeY;
                    this.ctx.drawImage(this.butterfreePhoto, 0, 0, 70, 70, butterfreeX, butterfreeY, 50, 50)
                    

                }

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

/***/ "./js/enemies.js":
/*!***********************!*\
  !*** ./js/enemies.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _butterfree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butterfree */ "./js/butterfree.js");
/* harmony import */ var _beedrill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beedrill */ "./js/beedrill.js");



class Enemies{
    // constructor(canvas, ctx, beedrillPhoto, butterfreePhoto){
    //     this.butterfreePhoto = butterfreePhoto;
    //     this.beedrillPhoto = beedrillPhoto;
    //     this.enemies = [];
    //     this.canvas = canvas;
    //     this.ctx = ctx;
    //     this.beedrillPaddingBetween = 50;
    //     this.beedrillPaddingTop = 25;
    //     this.beedrillOffsetLeft = 100;
    //     this.beedrillOffsetTop = 130
    //     this.beedrillRowCount = 2;
    //     this.beedrillColumnCount = 5;
    //     this.butterfreePaddingBetween = 50;
    //     this.butterfreePaddingTop = 27;
    //     this.butterfreeRowCount = 2;
    //     this.butterfreeColumnCount = 6;
    //     this.butterfreeOffsetTop = 20;
    //     this.butterfreeOffsetLeft = 75;
    //     this.drawEnemies = this.drawEnemies.bind(this);
    //     this.draw = this.draw.bind(this);

    //     for (var c = 0; c < this.beedrillColumnCount; c++) {
    //         this.enemies[c] = [];
    //         for (var r = 0; r < this.beedrillRowCount; r++) {
    //             this.enemies[c][r] = { x: 0, y: 0 };
    //         }
    //     }

    //     for (var c = 0; c < this.butterfreeColumnCount; c++) {
    //         this.enemies[c + this.beedrillColumnCount - 1] = [];
    //         for (var r = 0; r < this.butterfreeRowCount; r++) {
    //             this.enemies[c][r + this.beedrillRowCount - 1] = { x: 0, y: 0 };
    //         }
    //     }
    // }

    // drawEnemies(){


    //     for (var c = 0; c < this.beedrillColumnCount; c++) {
    //         for (var r = 0; r < this.beedrillRowCount; r++) {
    //             var beedrillX = (c * (this.width + this.beedrillPaddingBetween)) + this.beedrillOffsetLeft;
    //             var beedrillY = (r * (this.height + this.beedrillPaddingTop)) + this.beedrillOffsetTop;
    //             this.enemies[c][r].x = beedrillX;
    //             this.enemies[c][r].y = beedrillY;

    //             this.ctx.drawImage(this.beedrillPhoto, 0, 0, 70, 70, beedrillX, beedrillY, 50, 50)
    //         }
    //     }

    //     for (var c = 0; c < this.butterfreeColumnCount; c++) {
    //         for (var r = 0; r < this.butterfreeRowCount; r++) {
    //             var butterfreeX = (c * (this.width + this.butterfreePaddingBetween)) + this.butterfreeOffsetLeft;
    //             var butterfreeY = (r * (this.height + this.butterfreePaddingTop)) + this.butterfreeOffsetTop;
    //             this.butterfrees[c + this.beedrillColumnCount - 1][r + this.beedrillRowCount - 1].x = butterfreeX;
    //             this.butterfrees[c + this.beedrillColumnCount - 1][r + this.beedrillRowCount - 1].y = butterfreeY;
    //             this.ctx.drawImage(this.butterfreePhoto, 0, 0, 70, 70, butterfreeX, butterfreeY, 50, 50)

    //         }
    //     }
    // }

    // draw(){
    //     this.drawEnemies();
    // }
    
}


/* harmony default export */ __webpack_exports__["default"] = (Enemies);

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




class EnemyBullet{
    constructor(canvas, ctx, x, y){
        this.canvas = canvas;
        this.ctx = ctx;
        this.ButterFree = _butterfree__WEBPACK_IMPORTED_MODULE_0__["default"]; 
        this.Beedrill = _beedrill__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.eBulletWidth = 3;
        this.eBulletHeight = 25;
        this.health = 1;
        this.draw = this.draw.bind(this);
        this.drawEnemyBullet = this.drawEnemyBullet.bind(this);
        this.speed = 3;
        this.y = y;
        this.x = x;
        
    }

    drawEnemyBullet(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.eBulletWidth, this.eBulletHeight);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw(){
        this.drawEnemyBullet();
        this.y += this.speed;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EnemyBullet);

/***/ }),

/***/ "./js/enemyBulletShooter.js":
/*!**********************************!*\
  !*** ./js/enemyBulletShooter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemyBullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemyBullet */ "./js/enemyBullet.js");


class EnemyBulletShooter {
    constructor(ctx, canvas, Beedrill, Butterfree, Squirtle) {
        this.Squirtle = Squirtle;
        this.Beedrill = Beedrill;
        this.Butterfree = Butterfree;
        this.canvas = canvas;
        this.ctx = ctx;
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
        this.shooterCheck = this.shooterCheck.bind(this);
        this.gameOver = false;

    }

    shooterCheck(){
        let i = Math.floor(Math.random() * this.Butterfree.butterfreeColumnCount);
        let j = Math.floor(Math.random() * 2);
        let k = this.Butterfree.butterfrees[i][j];
        let num = Math.floor(Math.random() * 30);

        if (k.health > 0 && num == 5){
            // debugger
            this.bullets.push(new _enemyBullet__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, k.x + 15, k.y + 17))
        }

        let l = Math.floor(Math.random() * this.Beedrill.beedrillColumnCount);
        let m = Math.floor(Math.random() * 2);
        let n = this.Beedrill.beedrills[l][m];
        if (n.health > 0 && num == 7) {
            // debugger
            this.bullets.push(new _enemyBullet__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, n.x + 15, n.y))
        }
     
    };

    collisionDetection() {
        // debugger
        if (this.bullets.length > 0) {
            this.bullets.forEach((bullet) => {
                if(bullet.health > 0){
                    // debugger
                    if (Math.floor(bullet.x) > this.Squirtle.squirtleX && Math.floor(bullet.x) < this.Squirtle.squirtleX + 25 && bullet.y > 475) {
                        bullet.health -=1;
                        this.Squirtle.health -=1;
                        this.gameOver = true;
                   
                    }
                }
            })
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (EnemyBulletShooter);

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
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, SquirtleBulletShooter, EnemyBulletShooter, gameOverPhoto){
        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.gameOverPhoto = gameOverPhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        this.Squirtle = new Squirtle(this.canvas, this.ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(this.canvas, this.ctx, this.butterfreePhoto);
        this.Beedrill = new Beedrill(this.canvas, this.ctx, this.beedrillPhoto);
        this.SquirtleBulletShooter = new SquirtleBulletShooter(this.ctx, this.canvas, this.Squirtle, this.Butterfree, this.Beedrill);
        this.EnemyBulletShooter = new EnemyBulletShooter(this.ctx, this.canvas, this.Beedrill, this.Butterfree, this.Squirtle);
        this.gameOver = false;
        // this.SquirtleBulletShooter = new SquirtleBulletShooter(ctx, canvas, this.Squirtle);
        // this.enemies = new Enemies(canvas, ctx, this.beedrillPhoto, this.butterfreePhoto);
        this.begin = this.begin.bind(this);
        this.life = this.life.bind(this);
        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
    }

    start(){

    }
    life(){
        // debugger
        if(this.Squirtle.health <= 0){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.gameOverPhoto, 0, 0, 500, 200)
        } else {

            requestAnimationFrame(this.life)
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.Squirtle.draw();
            this.Butterfree.draw();
            this.Beedrill.draw();
            this.SquirtleBulletShooter.bullets.forEach((bullet) => {
                bullet.draw();
                this.SquirtleBulletShooter.collisionDetection();
                this.SquirtleBulletShooter.bullets = this.SquirtleBulletShooter.bullets.filter(bullet => bullet.y > 0);
            });
            // debugger
            setInterval(this.EnemyBulletShooter.shooterCheck(), 2000);
            this.EnemyBulletShooter.bullets.forEach((bullet) => {
                bullet.draw();
              
                
                this.EnemyBulletShooter.collisionDetection();
                this.EnemyBulletShooter.bullets = this.EnemyBulletShooter.bullets.filter(bullet => bullet.y < 540)
            });
        }

 
      
    }


    begin(){
 
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.Beedrill.draw();
        // this.enemies.draw();
        // debugger
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
        this.zPressed = false;
        // this.bullets = [];
        this.squirtleSpeed = 5;
        this.health = 3;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawSquirtle = this.drawSquirtle.bind(this);
        this.draw = this.draw.bind(this);
    }


        keyDownHandler(e) {
            // debugger
        if (e.keyCode === 39) {

            this.rightPressed = true;
        }
        else if (e.keyCode === 37) {

            this.leftPressed = true;
        } else if (e.keyCode === 90){
            this.zPressed = true;
        }
      
    }

    
    keyUpHandler(e) {
        if (e.keyCode === 39) {

            this.rightPressed = false;

        }
        else if (e.keyCode === 37) {

            this.leftPressed = false;
        } else if (e.keyCode === 90) {
            this.zPressed = false;
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
        this.health = 1;
        this.draw = this.draw.bind(this);
        this.drawSquirtleBullet = this.drawSquirtleBullet.bind(this);
        this.x = this.Squirtle.squirtleX;
        this.y = 480;
        this.speed = 3;
    }

    drawSquirtleBullet(){
        this.ctx.beginPath();
        this.ctx.rect(this.x + 15, this.y, this.sBulletWidth, this.sBulletHeight);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw(){
        // debugger
        if(this.health > 0){
            this.drawSquirtleBullet();
            this.y -= this.speed;
        }
       
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
    constructor(ctx, canvas, Squirtle, Butterfrees, Beedrills){
        // this.Beedrills = Beedrills;
        this.Beedrills = Beedrills
        this.Butterfrees = Butterfrees;
        this.Squirtle = Squirtle;
        this.canvas = canvas;
        this.ctx = ctx;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
    }

    keyDownHandler(e){
        // debugger
        if (e.keyCode === 90){
            this.bullets.push(new _squirtleBullet__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, this.Squirtle))
        }
    }

    collisionDetection(){
        // debugger
        if(this.bullets.length > 0){
            this.bullets.forEach((bullet) => {
                if(bullet.health > 0){
                    for(let i = 0; i < 6; i++){
                        for(let j = 0; j < 2; j++){
                            if (this.Butterfrees.butterfrees[i][j].health > 0){
                                let butterfree = this.Butterfrees.butterfrees[i][j];
                                if (bullet.x > butterfree.x - 5 && bullet.x < butterfree.x + 35 && bullet.y > butterfree.y - 15 && bullet.y < butterfree.y + 15){
                                    butterfree.health -= 1;
                                    bullet.health -= 1;
                                }
                            }
                        }
                    }

                    for(let k = 0; k < 5; k++){
                        for(let l = 0; l < 2; l++){
                            if (this.Beedrills.beedrills[k][l].health > 0){
                                let beedrill = this.Beedrills.beedrills[k][l];
                                if (bullet.x > beedrill.x - 5 && bullet.x < beedrill.x + 35 && bullet.y > beedrill.y - 15 && bullet.y < beedrill.y + 15) {
                                    beedrill.health -= 1;
                                    bullet.health -= 1;
                                }
                            }

                        }
                    }

                    
                                

                        
                    

                }
            })
        }
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
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/score */ "./js/score.js");
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_score__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_dragonite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/dragonite */ "./js/dragonite.js");
/* harmony import */ var _js_butterfree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/butterfree */ "./js/butterfree.js");
/* harmony import */ var _js_beedrill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/beedrill */ "./js/beedrill.js");
/* harmony import */ var _js_enemyBullet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/enemyBullet */ "./js/enemyBullet.js");
/* harmony import */ var _js_squirtle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/squirtle */ "./js/squirtle.js");
/* harmony import */ var _js_squirtleBulletShooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../js/squirtleBulletShooter */ "./js/squirtleBulletShooter.js");
/* harmony import */ var _js_enemies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/enemies */ "./js/enemies.js");
/* harmony import */ var _js_enemyBulletShooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../js/enemyBulletShooter */ "./js/enemyBulletShooter.js");


// import Beedrill from '../js/beedrill';










document.addEventListener('DOMContentLoaded', () => {
    const squirtlePhoto = new Image();
    squirtlePhoto.src = './assets/squirtle.png';
    const beedrillPhoto = new Image();
    beedrillPhoto.src = './assets/beedrill.png';
    
    const butterfreePhoto = new Image();
    butterfreePhoto.src = './assets/butterfree.png';
    // const dragonitePhoto = new Image();
    // dragonitePhoto.src = './assets/dragonite.png';
    const gameOverPhoto = new Image();
    gameOverPhoto.src = './assets/squirtle-fainted.png';
    const music = document.createElement("audio");
    music.src = "./assets/pokemon-trainer-battle-music.mp3";
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const game = new _js_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, _js_squirtle__WEBPACK_IMPORTED_MODULE_7__["default"], squirtlePhoto, _js_butterfree__WEBPACK_IMPORTED_MODULE_4__["default"], butterfreePhoto, _js_beedrill__WEBPACK_IMPORTED_MODULE_5__["default"], beedrillPhoto, _js_squirtleBulletShooter__WEBPACK_IMPORTED_MODULE_8__["default"], _js_enemyBulletShooter__WEBPACK_IMPORTED_MODULE_10__["default"], gameOverPhoto)
    // debugger
    game.begin()
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map