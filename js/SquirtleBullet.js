import Squirtle from './squirtle';

class SquirtleBullet{
    constructor(canvas, ctx, Squirtle){
        this.Squirtle = Squirtle;
        this.sBulletWidth = 3;
        this.sBulletHeight = 25;
        this.canvas = canvas;
        this.ctx = ctx;
        this.sBulletHealth = 1;
        this.draw = this.draw.bind(this);
        this.drawSquirtleBullet = this.drawSquirtleBullet.bind(this);
        this.x = Squirtle.squirtleX;
        this.y = 480;
        this.speed = 3;
    }

    drawSquirtleBullet(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.sBulletWidth, this.sBulletHeight);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw(){
        // debugger
        this.drawSquirtleBullet();
        this.y -= this.speed;
    }


}

export default SquirtleBullet;