class FishingResult{
        constructor(){
            this.success=false
            this.fishMessagesArr= ['Oh boy, is it huge!',
                                'Wow, so slimy!',
                                'The cat would love it',
                                'A slight disappointment compared to how hard it was to reel in.',
                                'Your mom would love it.',
                                'Is this even fish?']
                                
            this.fishMessage='placeholder'
            this.size
            this.weight  //every fish species has a size-weight ratio
                               
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