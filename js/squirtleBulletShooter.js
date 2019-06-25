import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle, Butterfrees, Beedrills){
        // this.Beedrills = Beedrills;
        this.Beedrills = Beedrills
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
        if (e.keyCode === 90){
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
                                if (bullet.x > butterfree.x - 5 && bullet.x < butterfree.x + 35 && bullet.y > butterfree.y - 15 && bullet.y < butterfree.y + 15){
                                    butterfree.health -= 1;
                                    bullet.health -= 1;
                                }
                            }
                        }
                    }
                            debugger
                    for(let k = 0; k < 5; k++){
                        for(let l = 0; l < 2; l++){
                            if (this.Beedrills.beedrills[k][l].health > 0){
                                let beedrill = this.Beedrills.beedrills[k][l];
                                if (bullet.x > beedrill.x - 5 && bullet.x < beedrill.x + 35 && bullet.y > beedrill.y - 15 && bullet.y < beedrill.y + 15) {
                                    beedrill.health -= 1;
                                    bullet.health -= 1;
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