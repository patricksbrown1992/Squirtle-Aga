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
        // else if (e.keyCode === 32) {
        //     // debugger
        //     spacePressed = true;
        // }
    }

    // updateBullets(bullets) {
    //     for (let i = 0; i < bullets.length; i++) {
    //         bullet = bullets[i];
    //         bullet.y -= bullet.speed * bullet.dy;
    //     }
    // }

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
        // else if (e.keyCode === 32) {
        //     // debugger
        //     spacePressed = false;
        // }
    }

    // shoot() {
    //     if (spacePressed) {
    //         addBullet();
    //     }
    // }

    drawSquirtle() {
        this.ctx.drawSquirtle(this.squirtlePhoto, this.squirtleX, this.canvas-height - this.squirtleHeight, this.squirtleHeight, this.squirtleWidth)
    }

    draw() {
        drawSquirtle()

        if (this.rightPressed && this.squirtleX < this.canvas.width - this.squirtleWidth) {
            squirtleX += this.squirtleSpeed;
        } else if (leftPressed && squirtleX > 0) {
            squirtleX -= this.squirtleSpeed;
        // } else if (spacePressed) {
        //     shoot();
        //     // squirtleX -= 5;
        // }
        }
    }
    
}

export default Squirtle;