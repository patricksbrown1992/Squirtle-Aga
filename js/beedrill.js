class Beedrill{
    constructor(canvas, ctx, beedrillPhoto){
        this.beedrillPhoto = beedrillPhoto;
        this.health = 1;
        this.height = 22;
        this.width = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPadding = 20;
        this.beedrillOffsetLeft = 140;
        this.beedrillOffsetTop = 100
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 8;
        this.beedrills = [];
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            this.beedrills[c] = [];
            for (var r = 0; r < this.beedrillRowCount; r++) {
                this.beedrills[c][r] = { x: 0, y: 0 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < this.butterfreeColumnCount; c++) {
            for (var r = 0; r < this.butterfreeRowCount; r++) {
                var beedrillX = (c * (this.beedrillWidth + this.beedrillPadding)) + this.beedrillOffsetLeft;
                var beedrillY = (r * (this.beedrillHeight + this.beedrillPadding)) + this.beedrillOffsetTop;
                beedrills[c][r].x = beedrillX;
                beedrills[c][r].y = beedrillY;
                ctx.beginPath();
                ctx.rect(beedrillX, beedrillY, this.beedrillWidth, this.beedrillHeight);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

export default Beedrill;