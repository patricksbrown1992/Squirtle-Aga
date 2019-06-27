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
        this.gameOver = false;

    }

    shooterCheck(){
        let i = Math.floor(Math.random() * this.Butterfree.butterfreeColumnCount);
        let j = Math.floor(Math.random() * 2);
        let k = this.Butterfree.butterfrees[i][j];
        let num = Math.floor(Math.random() * 30);

        if (k.health > 0 && num == 5){
            // debugger
            this.bullets.push(new EnemyBullet(this.canvas, this.ctx, k.x + 15, k.y + 17))
        }

        let l = Math.floor(Math.random() * this.Beedrill.beedrillColumnCount);
        let m = Math.floor(Math.random() * 2);
        let n = this.Beedrill.beedrills[l][m];
        if (n.health > 0 && num == 7) {
            // debugger
            this.bullets.push(new EnemyBullet(this.canvas, this.ctx, n.x + 15, n.y))
        }
     
    };

    collisionDetection() {
        // debugger
        if (this.bullets.length > 0) {
            this.bullets.forEach((bullet) => {
                if(bullet.health > 0){
                    // debugger
                    if (Math.floor(bullet.x) > this.Squirtle.squirtleX && Math.floor(bullet.x) < this.Squirtle.squirtleX + 25 && bullet.y > 475) {
                        bullet.health -=1;
                        this.Squirtle.health -=1;
                        this.gameOver = true;
                   
                    }
                }
            })
        }
    }
}

export default EnemyBulletShooter;