const Asteroid = require("./asteroid");

const Game = function(){
    this.DEFAULTS = {
        DIM_X:0,
        DIM_Y:0,
        NUM_ASTEROIDS: 25
    };
    this.asteroids = [];
    this.addAsteroids();
};

Game.prototype.addAsteroids = function(){
    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++){
        let rp = this.randomPos();
        // debugger;
        this.asteroids.push( new Asteroid( rp, this ));
        console.log(this.asteroids[i].pos);
    }
};

Game.prototype.randomPos= function(){
    const canvas = document.getElementById("game-canvas");
    const x = Math.random() * canvas.height;
    const y = Math.random() * canvas.width;
    // debugger
    return {pos:[x,y]}
};

Game.prototype.draw = function(ctx) {
    const canvas = document.getElementById("game-canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // asteroids.forEach( function(asteroidObject){asteroidObject.draw();} );

    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++)
        this.asteroids[i].draw(ctx);
};

Game.prototype.movingObjects = function(){
    for(let i = 0; i < this.DEFAULTS.NUM_ASTEROIDS; i++)
        this.asteroids[i].move();
}


Game.prototype.wrap = function(pos) {
    // debugger;
    let x = pos[0];
    let y = pos[1];
    // debugger;
    if (x < 0) {x = 800};
    if (x > 800) {x = 0};
    if (y < 0) {y = 500};
    if (y > 500) {y = 0};
    // debugger;
    return [x, y];
}





module.exports = Game;