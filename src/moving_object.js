const MovingObject = function(obj, gameObject){    
    this.pos = obj.pos; // pos{ pos: [x,y] }
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.gameObject = gameObject;
};

//TODO: add ctx parameter
MovingObject.prototype.draw = function(ctx) {
    // const canvas = document.getElementById("game-canvas")
    // const ctx = canvas.getContext("2d");

    ctx.beginPath();
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
// used for testing
// const mo = new MovingObject({
// 	pos: [30, 30],
// 	vel: [10, 10],
// 	radius: 5,
// 	color: "#00FF00",
// });

MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.gameObject.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let x1 = otherObject.pos[0];
    let y1 = otherObject.pos[1];
    let x2 = this.pos[0];
    let y2 = this.pos[1];
    let dx = x2-x1; 
    let dy = y2-y1;
    let adx = (Math.pow(dx,2));
    let ady = (Math.pow(dy,2));
    let distance = Math.sqrt(adx + ady);

    return distance <= (this.radius + otherObject.radius);
}


module.exports = MovingObject;