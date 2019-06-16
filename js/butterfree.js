class Butterfree{
    constructor(canvas, ctx){
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
        this.butterfreeOffsetLeft = 138;
        for (var c = 0; c < butterfreeColumnCount; c++) {
            butterfrees[c] = [];
            for (var r = 0; r < butterfreeRowCount; r++) {
                butterfrees[c][r] = { x: 0, y: 0 };
            }
        }
       
    }


    drawButterfrees() {
        
        for (var c = 0; c < butterfreeColumnCount; c++) {
            for (var r = 0; r < beedrillRowCount; r++) {
                var butterfreeX = (c * (butterfreeWidth + butterfreePadding)) + butterfreeOffsetLeft;
                var butterfreeY = (r * (butterfreeHeight + butterfreePadding)) + butterfreeOffsetTop;
                butterfrees[c][r].x = butterfreeX;
                butterfrees[c][r].y = butterfreeY;
                ctx.beginPath();
                ctx.rect(butterfreeX, butterfreeY, butterfreeWidth, butterfreeHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }


}

export default Butterfree;