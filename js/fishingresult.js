class FishingResult{
        constructor(){
            this.success=false
        }
        draw(){
            background(51);
            textAlign(CENTER);
            text('you caught a fish!', 400, 100);
            text('press <space> to continue', 400, 20);
            
        }
    }