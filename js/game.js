class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, SquirtleBulletHandler ){

        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        this.dragonitePhoto = dragonitePhoto;
        this.Squirtle = new Squirtle(canvas, ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(canvas, ctx, this.butterfreePhoto);
        this.Beedrill = new Beedrill(canvas, ctx, this.beedrillPhoto);
        this.Dragonite = new Dragonite(canvas, ctx, this.dragonitePhoto);
        this.SquirtleBulletHandler = new SquirtleBulletHandler(ctx, canvas, this.Squirtle);
        this.lives = 3;

        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        document.addEventListener("keydown", this.SquirtleBulletHandler.keyDownHandler, false);
    }

}
export default Game;
