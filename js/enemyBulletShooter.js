import EnemyBullet from './enemyBullet';

class EnemyBulletShooter {
    constructor(ctx, canvas, Beedrill, Butterfree, Squirtle) {
        this.Squirtle = Squirtle;
        this.Beedrill = Beedrill;
        this.Butterfree = Butterfree;
        this.canvas = canvas;
        this.ctx = ctx;
        this.collisionDetection = this.collisionDetection.bind(this);
        this.bullets = [];
        this.shooterCheck = this.shooterCheck.bind(this);
        
    }

    shooterCheck(){
        let i = Math.floor(Math.random() * this.Butterfree.butterfreeColumnCount);
        let j = Math.floor(Math.random() * 2);
        let k = this.Butterfree.butterfrees[i][j];
        if (k.health > 1){
            this.bullets.push(new EnemyBullet(this.canvas, this.ctx, this.ButterFree, this.Beedrill))
        }

        let i = Math.floor(Math.random() * this.Beedrill.beedrillColumnCount);
        let j = Math.floor(Math.random() * 2);
        let k = this.Beedrill.beedrills[i][j];
        if (k.health > 1) {
            this.bullets.push(new EnemyBullet(this.canvas, this.ctx, this.ButterFree, this.Beedrill))
        }
        debugger
    };

    collisionDetection() {
        debugger
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