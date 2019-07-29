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
        this.zPressed = false;
        this.mutePressed = false;
        this.squirtleSpeed = 3;
        this.health = 3;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.drawSquirtle = this.drawSquirtle.bind(this);
        this.handleMute = this.handleMute.bind(this);
        this.draw = this.draw.bind(this);
    }


    keyDownHandler(e) {
        if (e.keyCode === 39) {   
            this.rightPressed = true;
        } else if (e.keyCode === 37) {
            this.leftPressed = true;
        } else if (e.keyCode === 90){
            this.zPressed = true;
        } 
    }

    handleMute(e){
        // debugger
        if(e.keyCode === 109) {
            this.mutePressed = !this.mutePressed;
        }
    }

    
    keyUpHandler(e) {
        if (e.keyCode === 39) {

            this.rightPressed = false;
        }
        else if (e.keyCode === 37) {

            this.leftPressed = false;
        } else if (e.keyCode === 90) {
            this.zPressed = false;
        } 

       
    }

    

    drawSquirtle() {
        this.ctx.drawImage(this.squirtlePhoto, 10, 10, 37, 37, this.squirtleX, this.canvas.height - 50, 50, 50);
        this.ctx.rect(this.squirtleX, this.canvas.height - this.squirtleHeight, this.squirtleHeight, this.squirtleWidth);
    }

    draw() {
        this.drawSquirtle();
        if (this.rightPressed && this.squirtleX < this.canvas.width - this.squirtleWidth) {
            this.squirtleX += this.squirtleSpeed;
        } else if (this.leftPressed && this.squirtleX > 0) {
            this.squirtleX -= this.squirtleSpeed;
        }
    }
    
}
export default Squirtle;
