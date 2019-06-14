class Beedrill{
    constructor(x, y, health){
        this.x = x;
        this.y = y;
        this.health = health;
        this.height = 22;
        this.width = 20;
        this.beedrillPadding = 20;
        this.beedrillOffsetLeft = 140;
        this.beedrillOffsetTop = 100
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 8;
        this.beedrills = [];
    }
    
    beedrills(){
        for (var c = 0; c < beedrillColumnCount; c++) {
            beedrills[c] = [];
            for (var r = 0; r < beedrillRowCount; r++) {
                beedrills[c][r] = { x: 0, y: 0 };
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