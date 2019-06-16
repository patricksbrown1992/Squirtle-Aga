import SquirtleBullet from './squirtleBullet';

class SquirtleBulletShooter{
    constructor(ctx, canvas, Squirtle, enemy){
        this.Squirtle = Squirtle;
        this.canvas = canvas;
        this.ctx = ctx;
        this.enemy = enemy;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
    }

    keyDownHandler(e){
        if (e.keyDownHandler === 32){
            this.bullets.push(new SquirtleBullet(this.canvas, this.ctx, this.Squirtle))
        }
    }

    collisionDetection(){
        this.bullets.forEach((bullet) => {
            let bulletX = Math.floor(bullet.x);
            let bulletY = bullet.y
            if (bulletX > this.Squirtle.squirtleX && ){
                this.enemy.status -= 1;
                sBulletHealth.health = 0;
            }
        })
    }
}

export default SquirtleBulletShooter;