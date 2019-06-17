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
        this.bullets = [];
        this.squirtleSpeed = 3
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawSquirtle = this.drawSquirtle.bind(this);
    }



        keyDownHandler(e) {
    // debugger
        if (e.keyCode === 39) {
            // debugger
            rightPressed = true;
        }
        else if (e.keyCode === 37) {
            // debugger
            leftPressed = true;
        }
      
    }

    
    keyUpHandler(e) {
        if (e.keyCode === 39) {
            // debugger
            rightPressed = false;
            // debugger
        }
        else if (e.keyCode === 37) {
            // debugger
            leftPressed = false;
        }
       
    }

    

    drawSquirtle() {
        this.ctx.drawSquirtle(this.squirtlePhoto, this.squirtleX, this.canvas-height - this.squirtleHeight, this.squirtleHeight, this.squirtleWidth)
    }

    draw() {
        drawSquirtle()

        if (this.rightPressed && this.squirtleX < this.canvas.width - this.squirtleWidth) {
            squirtleX += this.squirtleSpeed;
        } else if (leftPressed && squirtleX > 0) {
            squirtleX -= this.squirtleSpeed;
       
        }
    }
    
}

export default Squirtle;