class Objects {
    constructor(){
        this.i=0
        this.cowX=400
        this.cowY=400
        this.cowWidth=80
        this.cowHeight=44
        this.cowCenterX=this.cowX +this.cowWidth/2
        this.cowCenterY=this.cowY + this.cowHeight/2
        this.alreadyMilked=false
        this.catRng
        this.catX=300
        this.catY=100
        this.plants=[{spot:1, planted:false, day:0, posX:100, posY:186, type:'corn', daysToRipe:3},
                     {spot:2, planted:false, day:0, posX:164, posY:186, type:'corn', daysToRipe:3},
                     {spot:3, planted:false, day:0, posX:228, posY:186, type:'corn', daysToRipe:3},
                     {spot:4, planted:false, day:0, posX:100, posY:290, type:'melon', daysToRipe:4},
                     {spot:5, planted:false, day:0, posX:164, posY:290, type:'melon', daysToRipe:4},
                     {spot:6, planted:false, day:0, posX:228, posY:290, type:'melon', daysToRipe:4}]
    
    }
    
    draw(){
        //this.catRng=(Math.floor(Math.random()*11))
        
        //cow
        //animation
        if (frameCount %30 ==0){ //modulo 60 >> do it every one second
            game.currentCowImage = game.cowImage[this.i%game.cowImage.length]
            if(game.day.squirrelActive===true){

            }
            game.currentCatImage = game.catImage[this.i%game.catImage.length]
            this.i++
        
        }
        
        circle(100,186, 50)
        circle(164,186, 50)
        circle(228,186, 50)
        circle(100,290, 50)
        circle(164,290, 50)
        circle(228,290, 50)
        circle(400,120, 20)


        //distance calc for interaction menu
        image(game.currentCowImage, this.cowX, this.cowY, this.cowWidth, this.cowHeight)
        image(game.currentCatImage, this.catX, this.catY, 16, 16) //cat position on fallen tree
        if(game.day.squidActive===true){
            image(game.squidImage, 700, 150, 25, 25)     
        }
    }
}