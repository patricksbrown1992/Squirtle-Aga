class Dragonite{
    constructor(canvas, ctx){
        
        this.health = 2;
        this.height = 31;
        this.width = 24;
        this.canvas = canvas;
        this.ctx = ctx;
        this.dragonitePadding = 40;
        this.dragoniteRowCount = 1;
        this.dragoniteColumnCount = 4;
        this.dragoniteOffsetLeft = 170;
        this.dragonites = [];
        for (var c = 0; c < dragoniteColumnCount; c++) {
            dragonites[c] = [];
            for (var r = 0; r < dragoniteRowCount; r++) {
                dragonites[c][r] = { x: 0, y: 0 };
            }
        }
    }
    

    drawDragonites() {
        for (var c = 0; c < dragoniteColumnCount; c++) {
            for (var r = 0; r < dragoniteRowCount; r++) {
                var dragoniteX = (c * (dragoniteWidth + dragonitePadding)) + dragoniteOffsetLeft;
                var dragoniteY = (r * (dragoniteHeight + dragonitePadding));
                dragonites[c][r].x = dragoniteX;
                dragonites[c][r].y = dragoniteY;
                ctx.beginPath();
                ctx.rect(dragoniteX, dragoniteY, dragoniteWidth, dragoniteHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

export default Dragonite;