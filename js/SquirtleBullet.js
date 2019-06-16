import Squirtle from './squirtle';

class SquirtleBullet{
    constructor(canvas, ctx, Squirtle){
        
        this.sBulletWidth = 3;
        this.sBulletHeight = 25;
        this.canvas = canvas;
        this.ctx = ctx;
        this.sBulletHealth = 1;
        this.color = "green";
        this. draw = this.draw.bind(this);
        this.drawBullet = this.draw.bind(this);
        this.x = Squirtle.squirtleX;
        this.y = this.canvas.height - (Squirtle.squirtleHeight * 2);
        this.speed = 3;
    }



}