class Fishing{
    constructor(){
       
        //this.fishCoughtTotal = 0
        this.fishingBarX = 700
        this.fishingBarY = 50
        this.fishingBarWidth = 50
        this.fishingBarHeight = 350 
        //hookbar
        this.hookBarPosition = 275//relative to left top corner of fishing bar
        this.hookBarHeight = 75
        this.gravity = 0.09
        this.velocity = 0
        //progressbar starting bottom left corner of rectangle
        this.progressBarX = 770
        this.progressBarY = 400
        this.progressBarWidth = 10
        this.progressBarHeight = this.fishingBarHeight
        this.timer=0
        this.progress=-200
        this.color=''

        //fish
        this.fishY =275 //starting position
        this.newFishY = (Math.floor(Math.random() *326) +50) // randomized movement position 
    }
    
    draw(){
        //fishingbar
        fill(51)
        rect(this.fishingBarX, this.fishingBarY, this.fishingBarWidth, this.fishingBarHeight)

        //part that hooks the fish
        fill('rgb(0,255,0)')
        rect(this.fishingBarX + 10, (this.fishingBarY + this.hookBarPosition), (this.fishingBarWidth-20), this.hookBarHeight)
        
        this.velocity += this.gravity
        this.hookBarPosition += this.velocity
        
        if(keyIsDown(32)){
            this.velocity -=0.2
            
        }
        //upper border of the fishing bar
        if(this.hookBarPosition<=0){
            this.hookBarPosition=0
            this.velocity= -this.velocity/3 //dampend bump on top
        }
        //lower border
        if(this.hookBarPosition >= 275){
            this.hookBarPosition = 274.8 //bugfix hookbar stuck to bottom when it was 275
            this.velocity =- this.velocity*0.7 //damped bump on bottom
        }
        //the fish
        //randomnizing fish type
        //randomizing fishs movement (direction and speed). Later iteration= fish movement over attributes from different fish types
        this.fishSpeed=4
        this.fishIntervall=4
       
        //counting frames for seconds based mechanic
        if (frameCount %60 ==0){
            this.timer++
        }
        //create a new position for fish to swim to after x seconds
        if ( this.timer % this.fishIntervall==0){
            this.newFishY = Math.floor(Math.random() *(326)) +50
        }
        
        if (this.newFishY >= this.fishY){
            this.fishY +=this.fishSpeed
        }

        if (this.newFishY < this.fishY){
            this.fishY -=this.fishSpeed
        }
        image(game.fishImage, this.fishingBarX, this.fishY, 50, 25)
        
        //progressbar 
        if(this.progress<-275) this.color='RED'  //there is also ja p5 function for color grading
         else if(this.progress<-200 ) this.color='ORANGE'
         else if(this.progress<-125 ) this.color='YELLOW'
         else if(this.progress>-50) this.color='GREEN'
        
        
        fill(this.color)
        rect (this.progressBarX, this.progressBarY, this.progressBarWidth, -(this.progressBarHeight+this.progress))
        //check if fish is inside hookbar and change progressbar height
        if (this.fishY > (this.fishingBarY + this.hookBarPosition) && this.fishY < (this.hookBarPosition +50 + this.hookBarHeight)){
            this.progress +=1.0 //filling rate 
        } else {
            this.progress --
        }
        
        //end fishing of progress bar reaches zero
        if (this.progressBarHeight+this.progress<=0){
            game.fishingState=false
            
            
        }
        // end fishing if fish is being cought
        if ((this.progressBarHeight+this.progress)>=350){
           // this.fishCoughtTotal ++
           game.player.inventory[0].amount+=1
            game.fishingResult.success=true
            game.fishingResultScreen=true
           game.fishingState=false //disables fishing ui
            
            
        }
    }
       
}