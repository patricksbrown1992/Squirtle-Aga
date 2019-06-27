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
        let num = Math.floor(Math.random() * 35);

        if (k.health > 0 && num == 5){
            debugger
            this.bullets.push(new EnemyBullet(this.canvas, this.ctx, k.x + 15, k.y + 17))
        }

        let l = Math.floor(Math.random() * this.Beedrill.beedrillColumnCount);
        let m = Math.floor(Math.random() * 2);
        let n = this.Beedrill.beedrills[l][m];
        if (n.health > 0 && num == 7) {
            this.bullets.push(new EnemyBullet(this.canvas, this.ctx, n.x + 15, n.y))
        }
     
    };

    collisionDetection() {
        debugger
        if (this.bullets.length > 0) {
            this.bullets.forEach((bullet) => {
                if(bullet.health > 0){
                    if (bullet.x > this.Squirtle.squirtleX - 5 && bullet.x < this.Squirtle.squirtleX + 35 && bullet.y > this.Squirtle.squirtleHeight - 15 && bullet.y < this.Squirtle.squirtleHeight + 15){
                        bullet.health -=1;
                        this.Squirtle.health -=1;
                        // if (this.Squirtle.health <= 0){

                        // }
                    }
                }
            })
        }
    }
}

export default EnemyBulletShooter;