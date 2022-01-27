class FishingResult{
        constructor(){
            this.success=false
            this.fishMessagesArr= ['message a',
                                'message b',
                                'message c']
            this.fishMessage='placeholder'
                               
        }
        draw(){
            background(51);
            textAlign(CENTER);
            text(`${this.fishMessage}`, 400, 100);
            text('press <space> to continue', 400, 20);
            
        }
        
        randomize(){
            this.fishMessage =this.fishMessagesArr[Math.floor(Math.random()*(this.fishMessagesArr.length+1))]
            
        }
    }