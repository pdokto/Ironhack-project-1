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
        //plants

        // && game.day.currentDay -this.plants[i].day <=this.plants[i].daysToRipe
        for (let i=0; i < this.plants.length;i++){
            if(this.plants[i].planted==true && game.day.currentDay -this.plants[i].day <=this.plants[i].daysToRipe){
                if(this.plants[i].type==='corn'){
                    game.currentPlantImage[i]=game.cornImage[game.day.currentDay-this.plants[i].day]                
                    
                }  
                if(this.plants[i].type==='melon'){
                    game.currentPlantImage[i]=game.melonImage[game.day.currentDay-this.plants[i].day]
                } 
                image(game.currentPlantImage[i], this.plants[i].posX, this.plants[i].posY-10, 16, 16)
            }
            if(this.plants[i].planted==true && game.day.currentDay -this.plants[i].day >this.plants[i].daysToRipe){
                if(this.plants[i].type==='corn'){
                    game.currentPlantImage[i]=game.cornImage[3]                
                    
                }  
                if(this.plants[i].type==='melon'){
                    game.currentPlantImage[i]=game.melonImage[4]
                } 
                image(game.currentPlantImage[i], this.plants[i].posX, this.plants[i].posY-10, 16, 16)
            }
        
        
        }
        
        //cow
        //animation
        if (frameCount %30 ==0){ //modulo 60 >> do it every one second
            game.currentCowImage = game.cowImage[this.i%game.cowImage.length]
            if(game.day.squirrelActive===true){

            }
            game.currentCatImage = game.catImage[this.i%game.catImage.length]
            this.i++
        
        }
        //image(game.currentCornImage, this.plants[0].posX, this.plants[0].posY-10, 16, 16)
        image(game.currentCowImage, this.cowX, this.cowY, this.cowWidth, this.cowHeight)
        image(game.currentCatImage, this.catX, this.catY, 16, 16) //cat position on fallen tree
        if(game.day.squidActive===true){
            image(game.squidImage, 700, 150, 25, 25)     
        }
    }
}