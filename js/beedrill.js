class Beedrill{
    constructor(canvas, ctx){
     
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
        this.drawBeedrills = this.drawBeedrills.bind(this);
        this.draw = this.draw.bind(this);
        this.beedrills = [];
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            this.beedrills[c] = [];
            for (var r = 0; r < this.beedrillRowCount; r++) {
                this.beedrills[c][r] = { x: 0, y: 0 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            for (var r = 0; r < this.beedrillRowCount; r++) {
                var beedrillX = (c * (this.width + this.beedrillPadding)) + this.beedrillOffsetLeft;
                var beedrillY = (r * (this.height + this.beedrillPadding)) + this.beedrillOffsetTop;
                this.beedrills[c][r].x = beedrillX;
                this.beedrills[c][r].y = beedrillY;
                ctx.beginPath();
                ctx.rect(beedrillX, beedrillY, this.width, this.height);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    draw(){
        this.drawBeedrills();
    }


}

export default Beedrill;