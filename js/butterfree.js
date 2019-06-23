class Butterfree{
    constructor(canvas, ctx, butterfreePhoto){
        this.butterfreePhoto = butterfreePhoto;
        this.health = 1;
        this.height = 17;
        this.width = 21;
        this.canvas = canvas;
        this.ctx = ctx;
        this.butterfreePadding = 20;
        this.butterfrees = [];
        this.butterfreeRowCount = 2;
        this.butterfreeColumnCount = 8;
        this.butterfreeOffsetTop = 50;
        this.butterfreeOffsetLeft = 85;
        this.drawButterfrees = this.drawButterfrees.bind(this);
        this.draw = this.draw.bind(this);
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            this.butterfrees[c] = [];
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                this.butterfrees[c][r] = { x: 0, y: 0 };
            }
        }
       
    }


    drawButterfrees() {
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                var butterfreeX = (c * (this.width + this.butterfreePadding)) + this.butterfreeOffsetLeft;
                var butterfreeY = (r * (this.height + this.butterfreePadding)) + this.butterfreeOffsetTop;
                this.butterfrees[c][r].x = butterfreeX;
                this.butterfrees[c][r].y = butterfreeY;
                ctx.beginPath();
                ctx.rect(butterfreeX, butterfreeY, this.width, this.height);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    draw(){
        this.drawButterfrees();
    }


}

export default Butterfree;