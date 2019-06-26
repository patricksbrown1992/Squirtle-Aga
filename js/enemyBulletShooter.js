import EnemyBullet from './enemyBullet';

class EnemyBulletShooter {
    constructor(ctx, canvas, enemy, Squirtle) {
        this.Squirtle = Squirtle;
        this.enemy = enemy;
        this.canvas = canvas;
        this.ctx = ctx;
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
    }


    collisionDetection() {
        if (this.bullets.length > 0) {
            this.bullets.forEach((bullet) => {
                if(bullet.health > 0){
                    if (bullet.x > this.Squirtle.squirtleX - 5 && bullet.x < this.Squirtle.squirtleX + 35 && bullet.y > this.Squirtle.squirtleHeight - 15 && bullet.y < this.Squirtle.squirtleHeight + 15){
                        bullet.health -=1;
                        this.Squirtle.health -=1;
                    }
                }
            })
        }
    }
}

export default EnemyBulletShooter;