class Butterfree{
    constructor(canvas, ctx, butterfreePhoto){
        this.butterfreePhoto = butterfreePhoto;
        this.health = 1;
        this.height = 17;
        this.width = 21;
        this.canvas = canvas;
        this.ctx = ctx;
        this.butterfreePadding = 50;
        this.butterfrees = [];
        this.butterfreeRowCount = 2;
        this.butterfreeColumnCount = 6;
        this.butterfreeOffsetTop = 20;
        this.butterfreeOffsetLeft = 75;
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
        // debugger
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                var butterfreeX = (c * (this.width + this.butterfreePadding)) + this.butterfreeOffsetLeft;
                var butterfreeY = (r * (this.height + this.butterfreePadding)) + this.butterfreeOffsetTop;
                this.butterfrees[c][r].x = butterfreeX;
                this.butterfrees[c][r].y = butterfreeY;
                this.ctx.drawImage(this.butterfreePhoto, 0, 0, 70, 70, butterfreeX, butterfreeY, 50, 50)

            }
        }
    }

    draw(){
        this.drawButterfrees();
    }


}

export default Butterfree;