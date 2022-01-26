class Game {
    constructor(){
        this.fishingResult = new FishingResult()
        this.background = new Background()
        this.player = new Player()
        this.fishing = new Fishing()
        this.loadingScreen= new LoadingScreen()
        this.objects = new Objects()
        this.day= new Day()
         
        this.loadingScreenState=false
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

        this.catImage=[]
        
        this.melonImage=[]
        this.currentPlantImage=[]
        this.cornImage=[]
        
    }
    preload(){
        this.backgroundImage =[
            {src: loadImage('assets/background/map.png')}
        ]

        this.playerImage = loadImage('assets/player/_down_walk1.png')

        this.fishingPole = loadImage('assets/fish/fishingPole.png')
        this.squidImage = loadImage('assets/fish/Squid.gif') 

        this.playerImageWalkDown[0]=loadImage('assets/player/_down_walk1.png')
        this.playerImageWalkDown[1]=loadImage('assets/player/_down_walk2.png')
        this.playerImageWalkDown[2]=loadImage('assets/player/_down_walk3.png')
        this.playerImageWalkDown[3]=loadImage('assets/player/_down_walk4.png')
        this.playerImageWalkDown[4]=loadImage('assets/player/_down_walk5.png')

        this.playerImageWalkLeft[0]=loadImage('assets/player/_side_walk_left1.png')
        this.playerImageWalkLeft[1]=loadImage('assets/player/_side_walk_left2.png')
        this.playerImageWalkLeft[2]=loadImage('assets/player/_side_walk_left3.png')
        this.playerImageWalkLeft[3]=loadImage('assets/player/_side_walk_left4.png')
        this.playerImageWalkLeft[4]=loadImage('assets/player/_side_walk_left5.png')
        this.playerImageWalkLeft[5]=loadImage('assets/player/_side_walk_left6.png')

        this.playerImageWalkRight[0]=loadImage('assets/player/_side_walk_right1.png')
        this.playerImageWalkRight[1]=loadImage('assets/player/_side_walk_right2.png')
        this.playerImageWalkRight[2]=loadImage('assets/player/_side_walk_right3.png')
        this.playerImageWalkRight[3]=loadImage('assets/player/_side_walk_right4.png')
        this.playerImageWalkRight[4]=loadImage('assets/player/_side_walk_right5.png')
        this.playerImageWalkRight[5]=loadImage('assets/player/_side_walk_right6.png')
        
        this.playerImageWalkUp[0]=loadImage('assets/player/_up_walk1.png')
        this.playerImageWalkUp[1]=loadImage('assets/player/_up_walk2.png')
        this.playerImageWalkUp[2]=loadImage('assets/player/_up_walk3.png')
        this.playerImageWalkUp[3]=loadImage('assets/player/_up_walk4.png')
        this.playerImageWalkUp[4]=loadImage('assets/player/_up_walk5.png')
        this.playerImageWalkUp[5]=loadImage('assets/player/_up_walk6.png')
        
        this.cowImage[0]=loadImage('assets/objects/cow_eat1.png')
        this.cowImage[1]=loadImage('assets/objects/cow_eat2.png')
        this.cowImage[2]=loadImage('assets/objects/cow_eat3.png')
        this.cowImage[3]=loadImage('assets/objects/cow_eat4.png')
        this.cowImage[4]=loadImage('assets/objects/cow_eat3.png')
        this.cowImage[5]=loadImage('assets/objects/cow_eat4.png')
        this.cowImage[6]=loadImage('assets/objects/cow_eat3.png')
        this.cowImage[7]=loadImage('assets/objects/cow_eat4.png')
        this.cowImage[8]=loadImage('assets/objects/cow_eat3.png')
        this.cowImage[9]=loadImage('assets/objects/cow_eat4.png')
        this.cowImage[10]=loadImage('assets/objects/cow_eat2.png')

        this.catImage[0]=loadImage('assets/objects/cat_clean1.png')
        this.catImage[1]=loadImage('assets/objects/cat_clean2.png')
        this.catImage[2]=loadImage('assets/objects/cat_clean3.png')
        this.catImage[3]=loadImage('assets/objects/cat_clean4.png')

        this.currentCatImage=loadImage('assets/objects/cat_clean1.png')
        this.currentCowImage=loadImage('assets/objects/cow_eat1.png')
        this.fishImage= loadImage('assets/fish/fishA.png')
        this.milkBottleImage=loadImage('assets/objects/MilkPot.png')

        this.cornImage[0]=loadImage('assets/objects/corn_state1.png')
        this.cornImage[1]=loadImage('assets/objects/corn_state2.png')
        this.cornImage[2]=loadImage('assets/objects/corn_state4.png')
        this.cornImage[3]=loadImage('assets/objects/corn_state4.png')
        this.cornImage[4]=loadImage('assets/objects/corn_state4.png')
        this.cornImage[5]=loadImage('assets/objects/corn_state4.png')

        this.melonImage[0]=loadImage('assets/objects/melon_state1.png')
        this.melonImage[1]=loadImage('assets/objects/melon_state2.png')
        this.melonImage[2]=loadImage('assets/objects/melon_state3.png')
        this.melonImage[3]=loadImage('assets/objects/melon_state4.png')
        this.melonImage[4]=loadImage('assets/objects/melon_state4.png')
        this.melonImage[5]=loadImage('assets/objects/melon_state4.png')

        this.currentPlantImage[0]=loadImage('assets/objects/corn_state1.png')
        this.currentPlantImage[1]=loadImage('assets/objects/corn_state1.png')
        this.currentPlantImage[2]=loadImage('assets/objects/corn_state1.png')
        this.currentPlantImage[3]=loadImage('assets/objects/melon_state1.png')
        this.currentPlantImage[4]=loadImage('assets/objects/melon_state1.png')
        this.currentPlantImage[5]=loadImage('assets/objects/melon_state1.png')
        

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
            
            text(`Day: ${game.day.currentDay}`, 15, 15)
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
         }
        
    }
    
}
