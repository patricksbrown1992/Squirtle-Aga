import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle, Butterfrees, Beedrills){
        this.Beedrills = Beedrills;
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
        if(this.bullets.length > 0){
            this.bullets.forEach((bullet) => {
                let bulletX = Math.floor(bullet.x);
                let bulletY = Math.floor(bullet.y);
                let i = 0;
                let j = 0;
                while (i < 5){
                    while(j < 2){
                        if (this.Butterfrees.butterfrees[i][j]){
                            let butterfree = this.Butterfrees.butterfrees[i][j];
                            if(bulletX === butterfree.x && bulletY === butterfree.y){
                                butterfree.health = 0;
                                bullet.sBulletHealth = 0;
                            }
                        }
                        j += 1;
                    }
                    i+= 1;
                }
                // debugger
                let k = 0;
                let l = 0;
                while (k < 4) {
                    while (l < 2) {
                        if (this.Beedrills.beedrills[k][l]){
                            let beedrill = this.Beedrills.beedrills[k][l];
                            if (bulletX === beedrill.x && bulletY === beedrill.y) {
                                beedrill.health = 0;
                                bullet.sBulletHealth = 0;
                            }
                        }
                        l += 1;
                    }
                    k += 1;
                }
                
            })
        }
    }
}

export default SquirtleBulletShooter;