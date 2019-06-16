class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, Dragonite, dragonitePhoto, ){

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
        this.audio = new Audio("assets/pokemon-trainer-battle-music.mp3");
        this.audio.loop = true;
        this.audio.volume = .25;
        this.auto.load();
        this.lives = 3;

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
    }

}
export default Game;
