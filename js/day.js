class Day {
    constructor(){
        this.squirrelActive=false
        this.currentDay=1
        this.squidActive=false
        this.foxActive=false
        this.weather='sunny'
        this.randomNumber
        this.rainHitCoordinates=[]
        this.rainCoordinates=[]
        this.rainIntensity=10
        
    }

    randomiseNewDay(){
        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=50) this.squirrelActive=true
        else this.squirrelActive=false
        // generating new number for every event to make them unrelated
        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=10) this.squidActive=true
        else this.squidActive=false

        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=20) this.foxActive=true
        else this.foxActive=false
        
        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=66) this.weather='sunny'
        else this.weather='rainy'
        
    }

    //draw function for weather effect
    draw(){
        image(game.rainDarkness, 0, 0, 800, 450)
        //will fill an array with coordinates to display 
        if(frameCount % 60===0){
            for (let i=0; i<10; i++){
                let tempObj={x:'' ,
                    y: ''}
               
                tempObj.x= Math.floor(Math.random()*800)
                
                tempObj.y= Math.floor(Math.random()*450)
                
                this.rainCoordinates.push(tempObj)    
                if (this.rainCoordinates.length > 20) this.rainCoordinates.shift()     
            }
        }
        for (let rainDrop in this.rainCoordinates){
            image(game.rainDrops, this.rainCoordinates[rainDrop].x, this.rainCoordinates[rainDrop].y, 23, 7)
        }
        
        if(frameCount % 10===0){
            for (let i=0; i<3; i++){
                let tempObj={x:'' ,
                    y: ''}
               
                tempObj.x= Math.floor(Math.random()*800)
                
                tempObj.y= Math.floor(Math.random()*450)
                
                this.rainHitCoordinates.push(tempObj)    
                if (this.rainHitCoordinates.length > 6) this.rainHitCoordinates.shift()     
            }
        }
        for (let rainDrop in this.rainHitCoordinates){
            image(game.rainDropHit, this.rainHitCoordinates[rainDrop].x, this.rainHitCoordinates[rainDrop].y, 23, 7)
        }
    }
}