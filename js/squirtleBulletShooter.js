import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle){
        this.Squirtle = Squirtle;
        this.canvas = canvas;
        this.ctx = ctx;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
        this.dummy = 6;
    }

    keyDownHandler(e){
        // debugger
        if (e.keyCode === 90){
            this.bullets.push(new SquirtleBullet(this.canvas, this.ctx, this.Squirtle))
        }
    }

    collisionDetection(){
        this.bullets.forEach((bullet) => {
            let bulletX = Math.floor(bullet.x);
         
            if (bulletX > this.Squirtle.squirtleX ){
                this.enemy.status -= 1;
                sBulletHealth.health = 0;
            }
        })
    }
}

export default SquirtleBulletShooter;