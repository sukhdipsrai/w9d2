const MovingObject = function(obj){    
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
};

MovingObject.prototype.draw = function() {
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    debugger;
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI
    );
    ctx.stroke();

}
//   const canvas = document.getElementById("mycanvas");

const mo = new MovingObject({
	pos: [30, 30],
	vel: [10, 10],
	radius: 5,
	color: "#00FF00",
});



module.exports = MovingObject;