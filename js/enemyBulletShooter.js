import EnemyBullet from "./enemyBullet";

class EnemyBulletShooter {
  constructor(ctx, canvas, Beedrill, Butterfree, Squirtle, musicObject) {
    this.Squirtle = Squirtle;
    this.Beedrill = Beedrill;
    this.Butterfree = Butterfree;
    this.musicObject = musicObject;
    this.canvas = canvas;
    this.ctx = ctx;
    this.collisionDetection = this.collisionDetection.bind(this);
    this.bullets = [];
    this.shooterCheck = this.shooterCheck.bind(this);
    this.gameOver = false;
    this.randNumFloor = 30;
  }

  shooterCheck() {
    let i = Math.floor(Math.random() * this.Butterfree.butterfreeColumnCount);
    let j = Math.floor(Math.random() * 2);
    let k = this.Butterfree.butterfrees[i][j];
    let num = Math.floor(
      Math.random() * (this.randNumFloor / this.Squirtle.level)
    );

    if (k.health > 0 && num == 1) {
      this.bullets.push(
        new EnemyBullet(this.canvas, this.ctx, k.x + 15, k.y + 17)
      );
    }

    let l = Math.floor(Math.random() * this.Beedrill.beedrillColumnCount);
    let m = Math.floor(Math.random() * 2);
    let n = this.Beedrill.beedrills[l][m];
    if (n.health > 0 && num == 2) {
      this.bullets.push(new EnemyBullet(this.canvas, this.ctx, n.x + 15, n.y));
    }
  }

  collisionDetection() {
    if (this.bullets.length > 0) {
      this.bullets.forEach((bullet) => {
        if (bullet.health > 0) {
          if (
            Math.floor(bullet.x) > this.Squirtle.squirtleX &&
            Math.floor(bullet.x) < this.Squirtle.squirtleX + 25 &&
            bullet.y > 475
          ) {
            bullet.health -= 1;
            this.Squirtle.health -= 1;
            if (this.Squirtle.mutePressed) {
              this.musicObject.hit.pause();
            } else {
              this.musicObject.hit.play();
            }
          }
        }
      });
    }
  }
}

export default EnemyBulletShooter;
