const Asteroid = require("./asteroid");

const Game = function(){
    this.DEFAULTS = {
        DIM_X:0,
        DIM_Y:0,
        NUM_ASTEROIDS: 0
    };
    this.asterooids = [];
    this.addAsteroids();
};

Game.prototype.addAsteroids = function(){
    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++){
        asteroids.push( new Asteroid( this.randomPos ));
    }
};

Game.prototype.randomPos= function(){
    const canvas = document.getElementById("game-canvas");
    const x = Math.random() * canvas.height;
    const y = Math.random() * canvas.width;
    return {pos:[x,y]}
};

Game.prototype.draw = function(ctx) {
    ctx.clearRect();
    // asteroids.forEach( function(asteroidObject){asteroidObject.draw();} );

    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++)
        asteroids[i].draw(ctx);
};

Game.prototype.movingObjects = function(){
    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++)
        asteroids[i].move();
}