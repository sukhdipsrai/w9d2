/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nconst Asteroid = function(posInput, gameObject){\n    this.gameObject = gameObject;\n    this.COLOR = \"#505050\";\n    this.RADIUS = 25;\n    const obj = {\n        pos: posInput.pos,\n        vel: Util.randomVec(4),\n        radius: this.RADIUS,\n        color: this.COLOR\n    }\n    MovingObject.call(this, obj, gameObject)\n    // how to call super\n};\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst Game = function(){\n    this.DEFAULTS = {\n        DIM_X:0,\n        DIM_Y:0,\n        NUM_ASTEROIDS: 25\n    };\n    this.asteroids = [];\n    this.addAsteroids();\n};\n\nGame.prototype.addAsteroids = function(){\n    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++){\n        let rp = this.randomPos();\n        // debugger;\n        this.asteroids.push( new Asteroid( rp, this ));\n        console.log(this.asteroids[i].pos);\n    }\n};\n\nGame.prototype.randomPos= function(){\n    const canvas = document.getElementById(\"game-canvas\");\n    const x = Math.random() * canvas.height;\n    const y = Math.random() * canvas.width;\n    // debugger\n    return {pos:[x,y]}\n};\n\nGame.prototype.draw = function(ctx) {\n    const canvas = document.getElementById(\"game-canvas\");\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    // asteroids.forEach( function(asteroidObject){asteroidObject.draw();} );\n\n    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++)\n        this.asteroids[i].draw(ctx);\n};\n\nGame.prototype.movingObjects = function(){\n    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++)\n        this.asteroids[i].move();\n}\n\n\nGame.prototype.wrap = function(pos) {\n    // debugger;\n    let x = pos[0];\n    let y = pos[1];\n    // debugger;\n    if (x < 0) {x = 800};\n    if (x > 800) {x = 0};\n    if (y < 0) {y = 500};\n    if (y > 500) {y = 0};\n    // debugger;\n    return [x, y];\n}\n\n\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("const GameView = function(gameObject){\n    this.currentGame = gameObject\n    const canvas = document.getElementById(\"game-canvas\")\n    this.ctx = canvas.getContext(\"2d\");\n    this.start();\n};\n\nGameView.prototype.start = function(){\n    let that = this;\n    let fps = function(){\n        // debugger;\n        that.currentGame.draw(that.ctx);\n        that.currentGame.movingObjects(that.ctx);\n        // console.log(\"inside fps\");\n    }\n\n    window.setInterval(fps, 30);\n    \n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("const MovingObject = function(obj, gameObject){    \n    this.pos = obj.pos; // pos{ pos: [x,y] }\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n    this.gameObject = gameObject;\n};\n\n//TODO: add ctx parameter\nMovingObject.prototype.draw = function(ctx) {\n    // const canvas = document.getElementById(\"game-canvas\")\n    // const ctx = canvas.getContext(\"2d\");\n\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI\n    );\n    ctx.stroke();\n\n}\n//   const canvas = document.getElementById(\"mycanvas\");\n// used for testing\n// const mo = new MovingObject({\n// \tpos: [30, 30],\n// \tvel: [10, 10],\n// \tradius: 5,\n// \tcolor: \"#00FF00\",\n// });\n\nMovingObject.prototype.move = function(){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.pos = this.gameObject.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    let x1 = otherObject.pos[0];\n    let y1 = otherObject.pos[1];\n    let x2 = this.pos[0];\n    let y2 = this.pos[1];\n    let dx = x2-x1; \n    let dy = y2-y1;\n    let adx = (Math.pow(dx,2));\n    let ady = (Math.pow(dy,2));\n    let distance = Math.sqrt(adx + ady);\n\n    return distance <= (this.radius + otherObject.radius);\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("Function.prototype.inherits = function (ParentClass) { \n    // this.context = ParentClass;\n};\n\n\nconst Util = {\n\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n      // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.GameView = GameView;\nwindow.Game = Game;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  let myGame = new Game();\n  let myGameView = new GameView(myGame);\n})\n\n\n\n\n\nconsole.log(\"Webpack is working!\");\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;