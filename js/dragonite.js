class Dragonite{
    constructor(canvas, ctx, dragonitePhoto){
        this.dragonitePhoto = dragonitePhoto;
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
        for (var c = 0; c < this.dragoniteColumnCount; c++) {
            this.dragonites[c] = [];
            for (var r = 0; r < this.dragoniteRowCount; r++) {
                this.dragonites[c][r] = { x: 0, y: 0 };
            }
        }
    }
    

    drawDragonites() {
        for (var c = 0; c < this.dragoniteColumnCount; c++) {
            for (var r = 0; r < this.dragoniteRowCount; r++) {
                var dragoniteX = (c * (this.dragoniteWidth + this.dragonitePadding)) + this.dragoniteOffsetLeft;
                var dragoniteY = (r * (this.dragoniteHeight + this.dragonitePadding));
                dragonites[c][r].x = dragoniteX;
                dragonites[c][r].y = dragoniteY;
                ctx.beginPath();
                ctx.rect(dragoniteX, dragoniteY, this.dragoniteWidth, this.dragoniteHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

export default Dragonite;