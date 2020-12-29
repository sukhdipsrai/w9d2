const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById("game-canvas");
	const ctx = canvas.getContext("2d");
})




console.log("Webpack is working!");