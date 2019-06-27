import ButterFree from './butterfree';
import Beedrill from './beedrill';


class EnemyBullet{
    constructor(canvas, ctx, x, y){
        this.canvas = canvas;
        this.ctx = ctx;
        this.ButterFree = ButterFree; 
        this.Beedrill = Beedrill;
        this.eBulletWidth = 3;
        this.eBulletHeight = 25;
        this.health = 1;
        this.draw = this.draw.bind(this);
        this.drawEnemyBullet = this.drawEnemyBullet.bind(this);
        this.speed = 3;
        this.y = y;
        this.x = x;
        
    }

    drawEnemyBullet(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.eBulletWidth, this.eBulletHeight);
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