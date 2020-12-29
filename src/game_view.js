const GameView = function(gameObject){
    this.currentGame = gameObject
    const canvas = document.getElementById("game-canvas")
    this.ctx = canvas.getContext("2d");
    this.start();
};

GameView.prototype.start = function(){
    let fps = function(){
        this.currentGame.draw(this.ctx);
        this.currentGame.moveObjects(this.ctx)
    }

    setInterval( fps() ,20);
}