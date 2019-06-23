class Squirtle{
    constructor(canvas, ctx, squirtlePhoto){
        this.squirtleWidth = 24;
        this.squirtlePhoto = squirtlePhoto;
        this.squirtleHeight = 31;
        this.canvas = canvas;
        this.squirtleX = (this.canvas.width - this.squirtleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.ctx = ctx;
        this.spacePressed = false;
        // this.bullets = [];
        this.squirtleSpeed = 5;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawSquirtle = this.drawSquirtle.bind(this);
        this.draw = this.draw.bind(this);
    }


        keyDownHandler(e) {
        if (e.keyCode === 39) {

            this.rightPressed = true;
        }
        else if (e.keyCode === 37) {

            this.leftPressed = true;
        }
      
    }

    
    keyUpHandler(e) {
        if (e.keyCode === 39) {

            this.rightPressed = false;

        }
        else if (e.keyCode === 37) {

            this.leftPressed = false;
        }
       
    }

    

    drawSquirtle() {
        // debugger
        // this.ctx.beginPath();
        this.ctx.drawImage(this.squirtlePhoto, 10, 10, 37, 37, this.squirtleX, this.canvas.height - 50, 50, 50);
        this.ctx.rect(this.squirtleX, this.canvas.height - this.squirtleHeight, this.squirtleHeight, this.squirtleWidth);
        // this.ctx.fillStyle = "orange";
        // this.ctx.fill();
        // this.ctx.closePath();
    }

    draw() {
        // debugger
        this.drawSquirtle();
        // this.ctx.fillText("GAME OVER", this.canvas.width / 2, 100);
        if (this.rightPressed && this.squirtleX < this.canvas.width - this.squirtleWidth) {
            this.squirtleX += this.squirtleSpeed;
        } else if (this.leftPressed && this.squirtleX > 0) {
            this.squirtleX -= this.squirtleSpeed;
       
        }
    }
    
}
export default Squirtle;
