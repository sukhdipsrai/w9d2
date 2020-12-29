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

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("const MovingObject = function(obj){    \n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n};\n\nMovingObject.prototype.draw = function() {\n    const canvas = document.getElementById(\"game-canvas\")\n    const ctx = canvas.getContext(\"2d\");\n\n    ctx.beginPath();\n    debugger;\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI\n    );\n    ctx.stroke();\n\n}\n//   const canvas = document.getElementById(\"mycanvas\");\n\nconst mo = new MovingObject({\n\tpos: [30, 30],\n\tvel: [10, 10],\n\tradius: 5,\n\tcolor: \"#00FF00\",\n});\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById(\"game-canvas\");\n\tconst ctx = canvas.getContext(\"2d\");\n})\n\n\n\n\nconsole.log(\"Webpack is working!\");\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;