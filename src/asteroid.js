const MovingObject = require("./moving_object");
const Util = require("./utils");

const Asteroid = function(posInput, gameObject){
    this.gameObject = gameObject;
    this.COLOR = "#505050";
    this.RADIUS = 25;
    const obj = {
        pos: posInput.pos,
        vel: Util.randomVec(4),
        radius: this.RADIUS,
        color: this.COLOR
    }
    MovingObject.call(this, obj, gameObject)
    // how to call super
};
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;