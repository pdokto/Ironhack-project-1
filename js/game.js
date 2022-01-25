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
    }
    preload(){
        this.backgroundImage =[
            {src: loadImage('assets/background/map.png')}
        
        ]
        this.playerImage= loadImage('assets/player/_down_idle1.png')

        this.playerImageIdle[0]=loadImage('assets/player/_down_idle1.png')
        this.playerImageIdle[1]=loadImage('assets/player/_down_idle2.png')
        this.playerImageIdle[2]=loadImage('assets/player/_down_idle3.png')
        this.playerImageIdle[3]=loadImage('assets/player/_down_idle4.png')

        this.playerImageWalkDown[0]=loadImage('assets/player/_down_walk1.png')
        this.playerImageWalkDown[1]=loadImage('assets/player/_down_walk2.png')
        this.playerImageWalkDown[2]=loadImage('assets/player/_down_walk3.png')
        this.playerImageWalkDown[3]=loadImage('assets/player/_down_walk4.png')
        this.playerImageWalkDown[4]=loadImage('assets/player/_down_walk5.png')

        
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
