class Game {
    constructor(){
        this.background = new Background()
        this.player = new Player()
        this.fishing = new Fishing()
        this.loadingScreen= new LoadingScreen()
        this.fishingResult = new FishingResult() 
        this.loadingScreenState=false
        this.backgroundImage
        this.fishingState = true // extra interface while fishing
        this.fishingSuccess = false
        this.fishingResult=false //Result screen after fishing
        
    }
    preload(){
        this.backgroundImage =[
            {src: loadImage('assets/background/placeholder.png')}
        
        ]
        this.playerImage= loadImage('assets/player/idle/idledown1.png')
        this.fishImage= loadImage('assets/fish/fishA.png')
    }
    
    
    draw(){
        
        if(this.loadingScreenState){
            this.loadingScreen.draw()

        }else if(this.fishingResult){
            this.fishingResult.draw()
        }
        else
        {
        
            this.background.draw()
            this.player.draw()
            if (this.fishingState===true){
                game.fishing.draw()
            }
         }
        
    }
}
