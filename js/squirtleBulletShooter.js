import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle, Butterfrees, Beedrills, musicObject){

        this.Beedrills = Beedrills
        this.musicObject = musicObject;
        this.Butterfrees = Butterfrees;
        this.Squirtle = Squirtle;
        this.canvas = canvas;
        this.ctx = ctx;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
    }

    keyDownHandler(e){
        // debugger
        if (e.keyCode === 90 && this.bullets.length < 3) {
            if(this.Squirtle.mutePressed){
                this.musicObject.watergun.pause();
            } else {
                this.musicObject.watergun.play();
            }
            // debugger
          
                // setTimeout(() => this.bullets.push(new SquirtleBullet(this.canvas, this.ctx, this.Squirtle)), 500)
            this.bullets.push(new SquirtleBullet(this.canvas, this.ctx, this.Squirtle))
            
        }
    }

    collisionDetection(){
        // debugger
        if(this.bullets.length > 0){
            this.bullets.forEach((bullet) => {
                if(bullet.health > 0){
                    for(let i = 0; i < 6; i++){
                        for(let j = 0; j < 2; j++){
                            if (this.Butterfrees.butterfrees[i][j].health > 0){
                                let butterfree = this.Butterfrees.butterfrees[i][j];
                                if (bullet.x > butterfree.x - 25 && bullet.x < butterfree.x + 35 && bullet.y > butterfree.y - 15 && bullet.y < butterfree.y + 15){
                                    butterfree.health -= 1;
                                    bullet.health -= 1;
                                    this.Squirtle.score += 25;
                                }
                            }
                        }
                    }

                    for(let k = 0; k < 5; k++){
                        for(let l = 0; l < 2; l++){
                            if (this.Beedrills.beedrills[k][l].health > 0){
                                let beedrill = this.Beedrills.beedrills[k][l];
                                if (bullet.x > beedrill.x - 25 && bullet.x < beedrill.x + 15 && bullet.y > beedrill.y - 15 && bullet.y < beedrill.y + 15) {
                                    beedrill.health -= 1;
                                    bullet.health -= 1;
                                    this.Squirtle.score += 25;
                                }
                            }

                        }
                    }

                    
                                

                        
                    

                }
            })
        }
    }
}

export default SquirtleBulletShooter;