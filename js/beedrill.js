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
        for (var c = 0; c < beedrillColumnCount; c++) {
            this.beedrills[c] = [];
            for (var r = 0; r < beedrillRowCount; r++) {
                this.beedrills[c][r] = { x: 0, y: 0 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < butterfreeColumnCount; c++) {
            for (var r = 0; r < butterfreeRowCount; r++) {
                var beedrillX = (c * (beedrillWidth + beedrillPadding)) + beedrillOffsetLeft;
                var beedrillY = (r * (beedrillHeight + beedrillPadding)) + beedrillOffsetTop;
                beedrills[c][r].x = beedrillX;
                beedrills[c][r].y = beedrillY;
                ctx.beginPath();
                ctx.rect(beedrillX, beedrillY, beedrillWidth, beedrillHeight);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

export default Beedrill;