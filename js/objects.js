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
        this.catX=300
        this.catY=100
        this.catStatus='cleaning'
        this.plants=[{spot:1, planted:false, day:0, posX:100, posY:186, type:'corn', daysToRipe:3},
                     {spot:2, planted:false, day:0, posX:164, posY:186, type:'corn', daysToRipe:3},
                     {spot:3, planted:false, day:0, posX:228, posY:186, type:'corn', daysToRipe:3},
                     {spot:4, planted:false, day:0, posX:100, posY:290, type:'melon', daysToRipe:4},
                     {spot:5, planted:false, day:0, posX:164, posY:290, type:'melon', daysToRipe:4},
                     {spot:6, planted:false, day:0, posX:228, posY:290, type:'melon', daysToRipe:4}]
    
    }
    
    draw(){
        //plants

        // checks if something was planted and if yes sorts the correct growing status picture
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
            if(game.day.squirrelActive===true && game.day.weather=='sunny'){
                this.catStatus='hunting'
                game.currentCatImage = game.catHuntingImage[this.i%game.catHuntingImage.length]
                game.currentSquirrelImage=game.squirrelImage[this.i%game.squirrelImage.length]
            }
            if(game.day.squirrelActive===false && game.day.weather=='sunny'){
                this.catStatus='cleaning'
                game.currentCatImage = game.catImage[this.i%game.catImage.length]
            }

            if(game.day.weather==='rainy'){
                this.catStatus='sleeping'
                game.currentCatImage = game.catSleepingImage[this.i%game.catSleepingImage.length]
            }
            this.i++
        
        }
        
        image(game.currentCowImage, this.cowX, this.cowY, this.cowWidth, this.cowHeight)
        
        //cat positioning and different animations
        if(game.day.squirrelActive===false && game.day.weather=='sunny'){
            image(game.currentCatImage, this.catX , this.catY , 16 , 16) //cat position on fallen tree
        }
        
        if(game.day.squirrelActive===true && game.day.weather=='sunny'){
            image(game.currentCatImage, this.catX-80, this.catY, 16, 16) //cat position next to squirrel
            image(game.currentSquirrelImage, 240, 70, 32, 16 )
        }
        
        if(game.day.weather==='rainy'){
            image(game.currentCatImage, 440, 430, 16, 16) //sleeping under cow
        }



        if(game.day.squidActive===true){
            image(game.squidImage, 700, 150, 25, 25)     
        }

        if(game.day.foxActive===true){
            game.currentFoxImage=game.foxImage[this.i%game.foxImage.length]
            image(game.currentFoxImage, 60, 20, 32, 16)     
        
        }

    }
}