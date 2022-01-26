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
   
    if (keyCode ===32 && game.loadingScreenState==true){
        game.loadingScreenState=false
    }
    if (keyCode ===32 && game.fishingResultScreen==true){
        game.fishingResultScreen=false
    }
    
    if(keyCode===69 && dist(game.player.playerCenterX, game.player.playerCenterY, 400, 120)<25){
        game.day.currentDay+=1
        console.log('i pressed the key close to the door')
    } 
    
    for(plantSpot in game.objects.plants){
        if(keyCode===69 && dist(game.player.playerCenterX, game.player.playerCenterY, game.objects.plants[plantSpot].posX, game.objects.plants[plantSpot].posY)<50){
            
            console.log(`i pressed the use key close to spot ${game.objects.plants[plantSpot].spot}`)
        }
    }
}