class Game{
    constructor(canvas, ctx, Squirtle, Butterfree, BeeDrill, Dragonite
        // squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, SquirtleBulletShooter ){
        ){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.squirtlePhoto = squirtlePhoto;
        // this.butterfreePhoto = butterfreePhoto;
        // this.beedrillPhoto = beedrillPhoto;
        // this.dragonitePhoto = dragonitePhoto;
        this.Squirtle = new Squirtle(canvas, ctx);
        this.Butterfree = new Butterfree(canvas, ctx);
        this.BeeDrill = new BeeDrill(canvas, ctx);

        // this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        // this.Beedrill = new Beedrill(canvas, ctx, this.beedrillPhoto);
        this.Dragonite = new Dragonite(canvas, ctx);
        // this.SquirtleBulletShooter = new SquirtleBulletShooter(ctx, canvas, this.Squirtle);
        this.lives = 3;
        this.begin = this.begin.bind(this);

        // document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        // document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        // document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
    }

    start(){

    }

    begin(){
        // debugger
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.BeeDrill.draw();
        this.Dragonite.draw();
    }

    
}
export default Game;
