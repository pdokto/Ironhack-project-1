class Game {
    constructor(){
        this.fishingResult = new FishingResult()
        this.background = new Background()
        this.player = new Player()
        this.fishing = new Fishing()
        this.loadingScreen= new LoadingScreen()
        this.objects = new Objects()
         
        this.loadingScreenState=false
        this.backgroundImage
        this.fishingState = false // extra interface while fishing
        this.fishingResultScreen=false //Result screen after fishing
        this.playerImageIdle=[]
        this.playerImageWalkDown=[]
        this.playerImageWalkUp=[]
        this.playerImageWalkLeft =[]
        this.playerImageWalkRight =[]
    }
    preload(){
        this.backgroundImage =[
            {src: loadImage('assets/background/map.png')}
        ]

        this.playerImage= loadImage('assets/player/_down_walk1.png')

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
        
        
        
        this.fishImage= loadImage('assets/fish/fishA.png')
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
            for (let i=0; i<game.player.inventory.length; i++){
                let localX=50, localY=50
                if (game.player.inventory[i].amount >0){
                    image(this.fishImage, localX, localY, 50, 25)
                    fill(255)
                    text(`${game.player.inventory[i].amount}`, (localX +25), (localY + 30))
                }
            }
         }
        
    }
}
