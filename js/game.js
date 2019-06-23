

class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, BeeDrill, beedrillPhoto,
        //  Dragonite, dragonitePhoto
        // squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, SquirtleBulletShooter ){
        ){
        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        // this.dragonitePhoto = dragonitePhoto;
        this.Squirtle = new Squirtle(canvas, ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        this.BeeDrill = new BeeDrill(canvas, ctx, this.beedrillPhoto);

        // this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        // this.Beedrill = new Beedrill(canvas, ctx, this.beedrillPhoto);
        // this.Dragonite = new Dragonite(canvas, ctx, this.dragonitePhoto);
        // this.SquirtleBulletShooter = new SquirtleBulletShooter(ctx, canvas, this.Squirtle);
        this.lives = 3;
        this.begin = this.begin.bind(this);
        this.life = this.life.bind(this);
        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        // document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
    }

    start(){

    }
    life(){
        requestAnimationFrame(this.life)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        // this.Dragonite.draw();
      
    }

    begin(){
        // debugger
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        // this.Dragonite.draw();
        this.life();
    }

    
}
export default Game;
