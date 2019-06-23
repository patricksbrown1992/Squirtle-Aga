import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle){
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
             
                // if (bulletX > this.Squirtle.squirtleX ){
                //     sBulletHealth.health = 0;
                // }
            })
        }
    }
}

export default SquirtleBulletShooter;