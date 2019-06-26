import ButterFree from './butterfree';
import Beedrill from './beedrill';


class EnemyBullet{
    constructor(canvas, ctx, ButterFree, Beedrill){
        this.canvas = canvas;
        this.ctx = ctx;
        this.ButterFree = ButterFree; 
        this.Beedrill = Beedrill;
        this.eBulletWidth = 3;
        this.eBulletHeight = 25;
        this.health = 1;
        this.draw = this.draw.bind(this);
        this.drawEnemyBullet = this.drawEnemyBullet.bind(this);
        this.Enemies = [];
        this.speed = 3;
        this.y = 220;
    }

    drawEnemyBullet(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.sBulletWidth, this.sBulletHeight);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw(){
        this.drawEnemyBullet();
        this.y += this.speed;
    }
}

export default EnemyBullet;