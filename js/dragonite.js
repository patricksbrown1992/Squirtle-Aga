class Dragonite{
    constructor(canvas, ctx){
        // this.dragonitePhoto = dragonitePhoto;
        this.health = 2;
        this.height = 31;
        this.width = 24;
        this.canvas = canvas;
        this.ctx = ctx;
        this.dragonitePadding = 40;
        this.dragoniteRowCount = 1;
        this.drawDragonites = this.drawDragonites.bind(this);
        this.draw = this.draw.bind(this);
        this.dragoniteColumnCount = 4;
        this.dragoniteOffsetLeft = 135;
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
                var dragoniteX = (c * (this.width + this.dragonitePadding)) + this.dragoniteOffsetLeft;
                var dragoniteY = (r * (this.height + this.dragonitePadding));
                this.dragonites[c][r].x = dragoniteX;
                this.dragonites[c][r].y = dragoniteY;
                ctx.beginPath();
                ctx.rect(dragoniteX, dragoniteY, this.width, this.height);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    draw(){
        this.drawDragonites()
    }
}

export default Dragonite;