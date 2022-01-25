class Objects {
    constructor(){
        this.i=0
        this.cowX=400
        this.cowY=400
        this.cowWidth=80
        this.cowHeight=44
        this.cowCenterX=this.cowX +this.cowWidth/2
        this.cowCenterY=this.cowY + this.cowHeight/2
        this.milkPerDay=1
        this.alreadyMilked=false
    }
    
    draw(){
        //cow
        //animation
        if (frameCount %30 ==0){ //modulo 60 >> do it every one second
            game.currentCowImage = game.cowImage[this.i%game.cowImage.length]
            this.i++
        }

        //distance calc for interaction menu
        image(game.currentCowImage, this.cowX, this.cowY, this.cowWidth, this.cowHeight)
    }
}