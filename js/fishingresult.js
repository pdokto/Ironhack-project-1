class FishingResult{
        constructor(){
            this.success=false
            this.fishMessage= ['message a',
                                'message b',
                                'message c']
                               
        }
        draw(){
            background(51);
            textAlign(CENTER);
            // text(this.fishMessage[randomize()], 400, 100);
            text('press <space> to continue', 400, 20);
            
        }
        
        randomize(){
            return random (0, this.fishMessage.length)
        }
    }