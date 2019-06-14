class Squirtle{
    constructor(x, lives){
        this.x = x;
        this.squirtleWidth = 24;
        this.squirtleHeight = 31;
        this.squirtleX = (canvas.width - squirtleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        this.bullets = [];
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
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
        else if (e.keyCode === 32) {
            // debugger
            spacePressed = true;
        }
    }

    updateBullets(bullets) {
        for (let i = 0; i < bullets.length; i++) {
            bullet = bullets[i];
            bullet.y -= bullet.speed * bullet.dy;
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
        else if (e.keyCode === 32) {
            // debugger
            spacePressed = false;
        }
    }

    shoot() {
        if (spacePressed) {
            addBullet();
        }
    }

    drawSquirtle() {
        ctx.beginPath();
        ctx.rect(squirtleX, canvas.height - squirtleHeight, squirtleWidth, squirtleHeight);

        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath()
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (rightPressed && squirtleX < canvas.width - squirtleWidth) {
            squirtleX += 5;
        } else if (leftPressed && squirtleX > 0) {
            squirtleX -= 5;
        } else if (spacePressed) {
            shoot();
            // squirtleX -= 5;
        }
    }
    setInterval(){
        setInterval(draw, 20);
    }
}