class Day {
    constructor(){
        this.squirrelActive=false
        this.currentDay=1
        this.squidActive=true
        this.foxActive=true
        this.weather='sunny'
        this.randomNumber
    }

    randomiseNewDay(){
        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=50) this.squirrelActive=true
        else this.squirrelActive=false
        // generating new number for every event to make them unrelated
        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=20) this.squidActive=true
        else this.squidActive=false

        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=20) this.foxActive=true
        else this.foxActive=false
        
        this.randomNumber=Math.floor(Math.random()*99)+1
        if (this.randomNumber<=66) this.weather='sunny'
        else this.weather='rainy'
    }
}