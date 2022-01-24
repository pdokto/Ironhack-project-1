const game = new Game();

function preload() {
    game.preload()
}

function setup() {
    createCanvas(800,450)
}

function draw() {
    game.draw()
}

function keyPressed() {
   
    if (keyCode === 69){
        console.log('interact')
        game.player.interact()
    }
    if (keyCode ===32 && game.loadingScreenState==true){
        game.loadingScreenState=false
    }
    if (keyCode ===32 && game.fishingResultScreen==true){
        game.fishingResultScreen=false
    }
}