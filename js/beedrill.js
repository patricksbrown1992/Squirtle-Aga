class Beedrill{
    constructor(canvas, ctx,beedrillPhoto){
        this.beedrillPhoto = beedrillPhoto;
        this.height = 22;
        this.width = 20;
        this.canvas = canvas;
        this.ctx = ctx;
        this.beedrillPaddingBetween = 50;
        this.beedrillPaddingTop = 25;
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
                this.beedrills[c][r] = { x: 0, y: 0, health: 1 };
            }
        }
    }
  

    drawBeedrills() {
        for (var c = 0; c < this.beedrillColumnCount; c++) {
            for (var r = 0; r < this.beedrillRowCount; r++) {
                if (this.beedrills[c][r].health > 0) {
                    var beedrillX = (c * (this.width + this.beedrillPaddingBetween)) + this.beedrillOffsetLeft;
                    var beedrillY = (r * (this.height + this.beedrillPaddingTop)) + this.beedrillOffsetTop;
                    this.beedrills[c][r].x = beedrillX;
                    this.beedrills[c][r].y = beedrillY;
                    this.ctx.drawImage(this.beedrillPhoto, 0, 0, 70, 70, beedrillX, beedrillY, 50, 50)
                }
 
               
            }
        }
    }

    draw(){
        this.drawBeedrills();
    }


}

export default Beedrill;