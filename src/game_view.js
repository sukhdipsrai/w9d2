const GameView = function(gameObject){
    this.currentGame = gameObject
    const canvas = document.getElementById("game-canvas")
    this.ctx = canvas.getContext("2d");
    this.start();
};

GameView.prototype.start = function(){
    let that = this;
    let fps = function(){
        // debugger;
        that.currentGame.draw(that.ctx);
        that.currentGame.movingObjects(that.ctx);
        // console.log("inside fps");
    }

    window.setInterval(fps, 30);
    
}

module.exports = GameView;