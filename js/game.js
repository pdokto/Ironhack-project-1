class Game {
    constructor(){
        this.fishingResult = new FishingResult()
        this.background = new Background()
        this.player = new Player()
        this.fishing = new Fishing()
        this.loadingScreen= new LoadingScreen()
        this.objects = new Objects()
        this.day= new Day()
         
        this.loadingScreenState=true
        this.backgroundImage
        this.fishingState = false // extra interface while fishing
        this.fishingResultScreen=false //Result screen after fishing
        this.playerImageIdle=[]
        this.playerImageWalkDown=[]
        this.playerImageWalkUp=[]
        this.playerImageWalkLeft =[]
        this.playerImageWalkRight =[]

        this.cowImage=[]
        this.currentCowImage
        this.squirrelImage=[]
        this.currentSquirrelImage
        this.foxImage=[]
        this.currentFoxImage

        this.catImage=[]
        this.catHuntingImage=[]
        this.catSleepingImage=[]
        
        this.melonImage=[]
        this.currentPlantImage=[]
        this.cornImage=[]

        this.rainDarkness
        this.rainDrops
        this.rainDropHit
        
    }
    preload(){
        this.rainSound= loadSound('./assets/rain.mp3')
       
        this.backgroundImage =[
            {src: loadImage('./assets/background/map.png')}
        ]
        this.rainDarkness =loadImage('./assets/background/rain_overlay.png')
        this.rainDrops=loadImage('./assets/background/rain.png')
        this.rainDropHit=loadImage('./assets/background/rain_floor.png')

        this.playerImage = loadImage('./assets/player/down_walk1.png')

        this.fishingPole = loadImage('./assets/fish/fishingPole.png')
        this.squidImage = loadImage('./assets/fish/Squid.gif') 

        this.playerImageWalkDown[0]=loadImage('./assets/player/down_walk1.png')
        this.playerImageWalkDown[1]=loadImage('./assets/player/down_walk2.png')
        this.playerImageWalkDown[2]=loadImage('./assets/player/down_walk3.png')
        this.playerImageWalkDown[3]=loadImage('./assets/player/down_walk4.png')
        this.playerImageWalkDown[4]=loadImage('./assets/player/down_walk5.png')

        this.playerImageWalkLeft[0]=loadImage('./assets/player/side_walk_left1.png')
        this.playerImageWalkLeft[1]=loadImage('./assets/player/side_walk_left2.png')
        this.playerImageWalkLeft[2]=loadImage('./assets/player/side_walk_left3.png')
        this.playerImageWalkLeft[3]=loadImage('./assets/player/side_walk_left4.png')
        this.playerImageWalkLeft[4]=loadImage('./assets/player/side_walk_left5.png')
        this.playerImageWalkLeft[5]=loadImage('./assets/player/side_walk_left6.png')

        this.playerImageWalkRight[0]=loadImage('./assets/player/side_walk_right1.png')
        this.playerImageWalkRight[1]=loadImage('./assets/player/side_walk_right2.png')
        this.playerImageWalkRight[2]=loadImage('./assets/player/side_walk_right3.png')
        this.playerImageWalkRight[3]=loadImage('./assets/player/side_walk_right4.png')
        this.playerImageWalkRight[4]=loadImage('./assets/player/side_walk_right5.png')
        this.playerImageWalkRight[5]=loadImage('./assets/player/side_walk_right6.png')
        
        this.playerImageWalkUp[0]=loadImage('./assets/player/up_walk1.png')
        this.playerImageWalkUp[1]=loadImage('./assets/player/up_walk2.png')
        this.playerImageWalkUp[2]=loadImage('./assets/player/up_walk3.png')
        this.playerImageWalkUp[3]=loadImage('./assets/player/up_walk4.png')
        this.playerImageWalkUp[4]=loadImage('./assets/player/up_walk5.png')
        this.playerImageWalkUp[5]=loadImage('./assets/player/up_walk6.png')
        
        this.cowImage[0]=loadImage('./assets/objects/cow_eat1.png')
        this.cowImage[1]=loadImage('./assets/objects/cow_eat2.png')
        this.cowImage[2]=loadImage('./assets/objects/cow_eat3.png')
        this.cowImage[3]=loadImage('./assets/objects/cow_eat4.png')
        this.cowImage[4]=loadImage('./assets/objects/cow_eat3.png')
        this.cowImage[5]=loadImage('./assets/objects/cow_eat4.png')
        this.cowImage[6]=loadImage('./assets/objects/cow_eat3.png')
        this.cowImage[7]=loadImage('./assets/objects/cow_eat4.png')
        this.cowImage[8]=loadImage('./assets/objects/cow_eat3.png')
        this.cowImage[9]=loadImage('./assets/objects/cow_eat4.png')
        this.cowImage[10]=loadImage('./assets/objects/cow_eat2.png')

        this.catImage[0]=loadImage('./assets/objects/cat_clean1.png')
        this.catImage[1]=loadImage('./assets/objects/cat_clean2.png')
        this.catImage[2]=loadImage('./assets/objects/cat_clean3.png')
        this.catImage[3]=loadImage('./assets/objects/cat_clean4.png')

        this.catHuntingImage[0]=loadImage('./assets/objects/cat_touch1.png')
        this.catHuntingImage[1]=loadImage('./assets/objects/cat_touch2.png')
        this.catHuntingImage[2]=loadImage('./assets/objects/cat_touch3.png')
        this.catHuntingImage[3]=loadImage('./assets/objects/cat_touch4.png')
        this.catHuntingImage[4]=loadImage('./assets/objects/cat_touch5.png')
        this.catHuntingImage[5]=loadImage('./assets/objects/cat_touch6.png')

        this.catSleepingImage[0]=loadImage('./assets/objects/cat_sleep1.png')
        this.catSleepingImage[1]=loadImage('./assets/objects/cat_sleep2.png')
        this.catSleepingImage[2]=loadImage('./assets/objects/cat_sleep3.png')
        this.catSleepingImage[3]=loadImage('./assets/objects/cat_sleep4.png')

        this.currentCatImage=loadImage('./assets/objects/cat_clean1.png')
        this.currentCowImage=loadImage('./assets/objects/cow_eat1.png')

        this.fishImage= loadImage('./assets/fish/fishA.png')
        this.milkBottleImage=loadImage('./assets/objects/MilkPot.png')
        this.cornInventoryImage=loadImage('./assets/objects/corn_inv.png')
        this.melonIventoryImage=loadImage('./assets/objects/melon_inv.png')

        this.cornImage[0]=loadImage('./assets/objects/corn_state1.png')
        this.cornImage[1]=loadImage('./assets/objects/corn_state2.png')
        this.cornImage[2]=loadImage('./assets/objects/corn_state4.png')
        this.cornImage[3]=loadImage('./assets/objects/corn_state4.png')
        this.cornImage[4]=loadImage('./assets/objects/corn_state4.png')
        this.cornImage[5]=loadImage('./assets/objects/corn_state4.png')

        this.melonImage[0]=loadImage('./assets/objects/melon_state1.png')
        this.melonImage[1]=loadImage('./assets/objects/melon_state2.png')
        this.melonImage[2]=loadImage('./assets/objects/melon_state3.png')
        this.melonImage[3]=loadImage('./assets/objects/melon_state4.png')
        this.melonImage[4]=loadImage('./assets/objects/melon_state4.png')
        this.melonImage[5]=loadImage('./assets/objects/melon_state4.png')

        this.currentPlantImage[0]=loadImage('./assets/objects/corn_state1.png')
        this.currentPlantImage[1]=loadImage('./assets/objects/corn_state1.png')
        this.currentPlantImage[2]=loadImage('./assets/objects/corn_state1.png')
        this.currentPlantImage[3]=loadImage('./assets/objects/melon_state1.png')
        this.currentPlantImage[4]=loadImage('./assets/objects/melon_state1.png')
        this.currentPlantImage[5]=loadImage('./assets/objects/melon_state1.png')
        
        this.squirrelImage[0]=loadImage('./assets/objects/squirrel_eat1.png')
        this.squirrelImage[1]=loadImage('./assets/objects/squirrel_eat2.png')
        this.currentSquirrelImage=loadImage('./assets/objects/squirrel_eat1.png')

        this.foxImage[0]=loadImage('./assets/objects/fox_sleep1.png')
        this.foxImage[1]=loadImage('./assets/objects/fox_sleep2.png')
        this.foxImage[2]=loadImage('./assets/objects/fox_sleep3.png')
        this.foxImage[3]=loadImage('./assets/objects/fox_sleep4.png')
        this.foxImage[4]=loadImage('./assets/objects/fox_sleep5.png')
        this.foxImage[5]=loadImage('./assets/objects/fox_sleep6.png')

        this.currentFoxImage=loadImage('./assets/objects/fox_sleep1.png')
    }
    
    
    draw(){
        
        if(this.loadingScreenState){
            this.loadingScreen.draw()

        }else if(this.fishingResultScreen){
            game.fishingResult.draw()
        }
        else
        {
            
            this.background.draw()
            this.player.draw()
            this.objects.draw()
            if (this.fishingState===true){
                game.fishing.draw()
            }
            //inventory display
            textSize(20)
            stroke(5)
            fill('BLACK')
            text(`Day: ${game.day.currentDay}`, 30, 15)
            let localX=5, localY=50
            
            if (game.player.inventory[0].amount >0){
                image(this.fishImage, localX, localY, 50, 25)
                fill('BLACK')
                text(`${game.player.inventory[0].amount}`, (localX +40), (localY + 30))
                
            }
            
            if (game.player.inventory[1].amount >0){
                image(this.milkBottleImage, localX+20, localY+50, 16, 16)
                fill('BLACK')
                text(`${game.player.inventory[1].amount}`, (localX +40), (localY + 80))
            }
            
            if (game.player.inventory[2].amount >0){
                image(this.cornInventoryImage, localX+20, localY+90, 16, 16)
                text(`${game.player.inventory[2].amount}`, (localX +40), (localY + 120))
            }
            
            if (game.player.inventory[3].amount >0){
                image(this.melonIventoryImage, localX+20, localY+130, 16, 16)
                text(`${game.player.inventory[3].amount}`, (localX +40), (localY + 160))
            }
            if(this.day.weather==='rainy') {
                if (!this.rainSound.isPlaying()){
                    this.rainSound.play()
                }
                this.day.draw()}
            if(this.day.weather==='sunny') {
                this.rainSound.stop()
            }    
         }
        
    }
    
}
