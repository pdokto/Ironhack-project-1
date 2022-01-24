class Player {
    constructor(){
        this.x = 350
        this.y = 50
        this.width =200
        this.height =200
        this.speed =5
        this.facing = 'down'
        this.activeItem ='fishingpole'
    }

    draw(){
        //movement only when not fishing
        //movedown
        if(keyIsDown(83) && this.y <=(450-this.height) && game.fishingState===false){
            this.y +=this.speed
        }
        
        //moveup
        if(keyIsDown(87) && this.y >=0 && game.fishingState===false){
            this.y -=this.speed
        }

        //moveleft
        if (keyIsDown(65) && this.x >=0 && game.fishingState===false){
            this.x -=this.speed
        }

        //moveright
        if(keyIsDown(68) && this.x <=(800-this.width) && game.fishingState===false){
            this.x +=this.speed
        }

        image(game.playerImage, this.x, this.y, this.width, this.height)
    }

    interact(){
        console.log('player interacts')
    }
}