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
    //what needs to be done for a newly generated day
    if(keyCode===69 && dist(game.player.playerCenterX, game.player.playerCenterY, 400, 120)<25){
        game.day.currentDay+=1
        game.objects.alreadyMilked=false
        //console.log('i pressed the key close to the door')
    } 
    
    if(keyCode===69 && dist(game.player.playerCenterX, game.player.playerCenterY, game.objects.catX, game.objects.catY)<40){
        if(game.player.inventory[0].amount>0 && game.day.weather=='sunny'){
            game.player.inventory[0].amount-= 1
        }
        console.log('i played with the cat')
    } 

    for(plantSpot in game.objects.plants){
        if(keyCode===69 && dist(game.player.playerCenterX, game.player.playerCenterY, game.objects.plants[plantSpot].posX, game.objects.plants[plantSpot].posY)<30){
            //planting
            if(game.objects.plants[plantSpot].planted==false){
                game.objects.plants[plantSpot].planted=true
                game.objects.plants[plantSpot].day=game.day.currentDay //save planting day for ripeness
                console.log('i planted')

            }
            //harvest when ripe
            if(game.objects.plants[plantSpot].planted==true && game.day.currentDay-game.objects.plants[plantSpot].day >=game.objects.plants[plantSpot].daysToRipe -1){
                console.log('harvested!!!!')
                game.objects.plants[plantSpot].planted=false
                if(game.objects.plants[plantSpot].type=='corn'){
                   game.player.inventory[2].amount+=1 
                }
                if(game.objects.plants[plantSpot].type=='melon'){
                    game.player.inventory[3].amount+=1 
                 //console.log(game.player.inventory[3].amount)
                }
            }
            //console.log(`i pressed the use key close to spot ${game.objects.plants[plantSpot].spot}`)
        
        
        }
    }
}