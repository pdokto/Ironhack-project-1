class Player {
    constructor(){
        this.x = 350
        this.y = 250
        this.width =16
        this.height =36
        this.speed =2
        this.i=0
        this.facing='south'

        this.inventory = [
                            {name: 'fish', amount: 0, posX: 0 , posY:0 , imgHeight:0 ,imgWidth:0},
                            {name: 'milk', amount: 0}
     ]
    }

    draw(){
        //movement only when not fishing
        //movedown
        if(keyIsDown(83) && this.y <=(450-this.height) && game.fishingState===false){
            this.y +=this.speed
            
            if (frameCount %5 ==0){ //modulo 60 >> do it every one second
                game.playerImage = game.playerImageWalkDown[this.i%game.playerImageWalkDown.length]
                this.i++
            }
            this.facing='south'
        }
        
        //moveup
        if(keyIsDown(87) && this.y >=120 && game.fishingState===false){
            this.y -=this.speed

            if (frameCount %5 ==0){ //modulo 60 >> do it every one second
                game.playerImage = game.playerImageWalkUp[this.i%game.playerImageWalkUp.length]
                this.i++
            }
            this.facing='north'
        }

        //moveleft
        if (keyIsDown(65) && this.x >=64 && game.fishingState===false){
            this.x -=this.speed
            
            if (frameCount %5 ==0){ //modulo 60 >> do it every one second
                game.playerImage = game.playerImageWalkLeft[this.i%game.playerImageWalkLeft.length]
                this.i++
            }
            this.facing='west'
        }

        //moveright
        if(keyIsDown(68) && this.x <=(688-this.width) && game.fishingState===false){
            this.x +=this.speed
            
            if (frameCount %5 ==0){ //modulo 60 >> do it every one second
                game.playerImage = game.playerImageWalkRight[this.i%game.playerImageWalkRight.length]
                this.i++
            }
            this.facing='east'
        }
        
        image(game.playerImage, this.x, this.y, this.width, this.height)
       

        if(this.x >600 && keyIsDown(69) && this.facing==='east'){
            game.fishingState=true
            game.fishing.hookBarPosition = 275  //set these to default again so it doesn't feel like  player is continuing his former fishing
            game.fishing.progress=-200
            game.fishing.progressBarY=400
        }
        this.playerCenterX = this.x + this.width/2             //want to use center for distance calc 
        this.playerCenterY = this.y + this.height/2             //when used in constructor values wont change
        
        console.log(dist(this.playerCenterX, this.playerCenterY, game.objects.cowCenterX, game.objects.cowCenterY))

         
        if(dist(this.playerCenterX, this.playerCenterY, game.objects.cowCenterX, game.objects.cowCenterY) <(this.height + game.objects.cowWidth) && keyIsDown(69) && game.objects.alreadyMilked===false) { 
            game.player.inventory[1].amount+=1
            game.objects.alreadyMilked=true
            console.log(game.player.inventory[1].amount)
        }
            
     }

    
}