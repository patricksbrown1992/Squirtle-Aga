

class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, BeeDrill, beedrillPhoto, SquirtleBulletShooter){
        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        this.Squirtle = new Squirtle(canvas, ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        this.BeeDrill = new BeeDrill(canvas, ctx, this.beedrillPhoto);
        this.SquirtleBulletShooter = new SquirtleBulletShooter(this.ctx, this.canvas, this.Squirtle)
        // this.SquirtleBulletShooter = new SquirtleBulletShooter(ctx, canvas, this.Squirtle);
        this.lives = 3;
        this.begin = this.begin.bind(this);
        this.life = this.life.bind(this);
        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
    }

    start(){

    }
    life(){
        requestAnimationFrame(this.life)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        // debugger
        this.SquirtleBulletShooter.bullets.forEach((bullet) => {
            bullet.draw();
            this.SquirtleBulletShooter.collisionDetection();
        })
        this.SquirtleBulletShooter.bullets = this.SquirtleBulletShooter.bullets.filter(bullet => bullet.sBulletHealth !== 0);
 
      
    }

    begin(){
 
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        this.life();
    }

    
}
export default Game;
