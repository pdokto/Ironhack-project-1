class Player {
    constructor(){
        this.x = 350
        this.y = 50
        this.width =16
        this.height =36
        this.speed =2
        this.facing = 'down'
        this.i=0

        this.inventory = [
                            {name: 'fish', imgSRC:'this.fishImage', amount: 0, posX: 0 , posY:0 , imgHeight:0 ,imgWidth:0},
                            {name: 'milk', imgSRC:'', amount: 0}
     ]
    }

    draw(){
        //movement only when not fishing
        //movedown
        if(keyIsDown(83) && this.y <=(450-this.height) && game.fishingState===false){
            this.y +=this.speed
            this.facing='down'
            if (frameCount %10 ==0){ //modulo 60 >> to it every one second
            
            
                game.playerImage = game.playerImageWalkDown[this.i%4]
                this.i++
            }

        }
        
        //moveup
        if(keyIsDown(87) && this.y >=0 && game.fishingState===false){
            this.y -=this.speed
            this.facing= 'up'
        }

        //moveleft
        if (keyIsDown(65) && this.x >=0 && game.fishingState===false){
            this.x -=this.speed
            this.facing='left'
        }

        //moveright
        if(keyIsDown(68) && this.x <=(800-this.width) && game.fishingState===false){
            this.x +=this.speed
            this.facing='right'
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)
        
        // if (frameCount %30 ==0){ //modulo 60 >> to it every one second
            
            
        //     game.playerImage = game.playerImageIdle[this.i%4]
        //     this.i++
        // }

        if(this.x >500 && keyIsDown(69)){
            game.fishingState=true
            game.fishing.hookBarPosition = 275  //set these to default again
            game.fishing.progress=-200
            game.fishing.progressBarY=400
        }
    }

    
}