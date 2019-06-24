import ButterFree from './butterfree';
import Beedrill from './beedrill';

class Enemies{
    constructor(canvas, ctx, beedrillPhoto, butterfreePhoto){
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        this.enemies = [];
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPaddingBetween = 50;
        this.beedrillPaddingTop = 25;
        this.beedrillOffsetLeft = 100;
        this.beedrillOffsetTop = 130
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 5;
        this.butterfreePaddingBetween = 50;
        this.butterfreePaddingTop = 27;
        this.butterfreeRowCount = 2;
        this.butterfreeColumnCount = 6;
        this.butterfreeOffsetTop = 20;
        this.butterfreeOffsetLeft = 75;
        this.drawEnemies = this.drawEnemies.bind(this);
        this.draw = this.draw.bind(this);

        for (var c = 0; c < this.beedrillColumnCount; c++) {
            this.enemies[c] = [];
            for (var r = 0; r < this.beedrillRowCount; r++) {
                this.enemies[c][r] = { x: 0, y: 0 };
            }
        }

        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            this.enemies[c + this.beedrillColumnCount - 1] = [];
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                this.enemies[c][r + this.beedrillRowCount - 1] = { x: 0, y: 0 };
            }
        }
    }

    drawEnemies(){


        for (var c = 0; c < this.beedrillColumnCount; c++) {
            for (var r = 0; r < this.beedrillRowCount; r++) {
                var beedrillX = (c * (this.width + this.beedrillPaddingBetween)) + this.beedrillOffsetLeft;
                var beedrillY = (r * (this.height + this.beedrillPaddingTop)) + this.beedrillOffsetTop;
                this.enemies[c][r].x = beedrillX;
                this.enemies[c][r].y = beedrillY;

                this.ctx.drawImage(this.beedrillPhoto, 0, 0, 70, 70, beedrillX, beedrillY, 50, 50)
            }
        }

        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                var butterfreeX = (c * (this.width + this.butterfreePaddingBetween)) + this.butterfreeOffsetLeft;
                var butterfreeY = (r * (this.height + this.butterfreePaddingTop)) + this.butterfreeOffsetTop;
                this.butterfrees[c + this.beedrillColumnCount - 1][r + this.beedrillRowCount - 1].x = butterfreeX;
                this.butterfrees[c + this.beedrillColumnCount - 1][r + this.beedrillRowCount - 1].y = butterfreeY;
                this.ctx.drawImage(this.butterfreePhoto, 0, 0, 70, 70, butterfreeX, butterfreeY, 50, 50)

            }
        }
    }

    draw(){
        this.drawEnemies();
    }
    
}


export default Enemies;