import ButterFree from './butterfree';
import Beedrill from './beedrill';
import Dragonite from './dragonite';

class EnemyBullet{
    constructor(canvas, ctx, ButterFree, Beedrill, Dragonite){
        this.canvas = canvas;
        this.ctx = ctx;
        this.ButterFree = ButterFree; 
        this.Beedrill = Beedrill;
        this.Dragonite = Dragonite;
        this.eBulletWidth = 3;
        this.eBulletHeight = 25;
        this.eBulletHealth = 1;
        this.draw = this.draw.bind(this);
        this.drawEnemyBullet = this.drawEnemyBullet.bind(this);
        this.Enemies = [];
        // Loop through all three to get enemies
        this.speed = 3;
    }

    drawEnemyBullet(){

    }

    draw(){
        this.drawEnemyBullet();
        this.y += this.speed;
    }
}

export default EnemyBullet;