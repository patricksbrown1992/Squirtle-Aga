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
                let bulletX = Math.floor(bullet.x);

                // if (bulletX > this.Squirtle.squirtleX ){
                //     sBulletHealth.health = 0;
                // }
            })
        }
    }
}

export default EnemyBulletShooter;