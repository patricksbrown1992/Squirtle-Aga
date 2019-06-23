class Beedrill{
    constructor(canvas, ctx,beedrillPhoto){
        this.beedrillPhoto =beedrillPhoto;
        this.health = 1;
        this.height = 22;
        this.width = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPadding = 50;
        this.beedrillOffsetLeft = 100;
        this.beedrillOffsetTop = 130
        this.beedrillRowCount = 2;
        this.beedrillColumnCount = 5;
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
                
                this.ctx.drawImage(this.beedrillPhoto, 0, 0, 70, 70, beedrillX, beedrillY, 50, 50)
                // ctx.rect(beedrillX, beedrillY, this.width, this.height);
               
            }
        }
    }

    draw(){
        this.drawBeedrills();
    }


}

export default Beedrill;