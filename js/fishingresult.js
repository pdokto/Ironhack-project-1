class FishingResult{
        constructor(){
            this.success=false
            this.fishMessagesArr= ['Oh boy, is it huge!',
                                'Wow, so slimy!',
                                'The cat would love it',
                                'A slight disappointment compared to how hard it was to reel in.',
                                'Your mom would love it.',
                                'Is this even fish?',
                                'How much is the fish?']

            this.fishMessage='placeholder'
            this.size
            this.weight  //every fish species has a size-weight ratio
                               
        }
        draw(){
            background(51);
            fill ('WHITE');

            textAlign(CENTER);
            textSize(20)
            stroke(5)
            text(`${this.fishMessage}`, 400, 100);
            text(`Size: ${this.size}cm`, 400, 130)
            text(`Weight: ${this.weight}kg`, 400, 150)
            text('press <space> to continue', 400, 400);
            
        }
        
        randomize(){
            this.fishMessage =this.fishMessagesArr[Math.floor(Math.random()*(this.fishMessagesArr.length))]
            this.size=Math.floor(Math.random()*120)+30
            this.weight=Math.floor(this.size/(Math.floor(Math.random()*40)+20))
        }
    }