import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle, Butterfrees){
        // this.Beedrills = Beedrills;
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
                    for(let i = 0; i < 5; i++){
                        for(let j = 0; j < 2; j++){
                            let butterfree = this.Butterfrees.butterfrees[i][j];
                            debugger
                            if (bullet.x > butterfree.x - 15 && bullet.x < butterfree.x + 15 && bullet.y > butterfree.y - 15 && bullet.y < butterfree.y + 15){
                                butterfree.health -= 1;
                                bullet.health -= 1;
                            }
                            
                            
                        }
                    }

                }
            })
        }
    }
}

export default SquirtleBulletShooter;