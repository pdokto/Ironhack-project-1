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
    // if (keyCode ===32){
    //     game.loadingScreenState=false
    //     game.fishingResult=false
    // }
}