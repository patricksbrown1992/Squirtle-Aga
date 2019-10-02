const STATUS = {
    PLAYING: 0,
    GAMEOVER: 1,
    MENU: 2,
    PAUSED: 3
}

class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, SquirtleBulletShooter, EnemyBulletShooter, gameOverPhoto, dealWithItPhoto, musicObject){
        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.musicObject = musicObject;
        this.state = STATUS.MENU;
        this.gameOverPhoto = gameOverPhoto;
        this.butterfreePhoto = butterfreePhoto;
        this.beedrillPhoto = beedrillPhoto;
        this.dealWithItPhoto = dealWithItPhoto;
        this.Squirtle = new Squirtle(this.canvas, this.ctx, this.squirtlePhoto);
        this.Butterfree = new Butterfree(this.canvas, this.ctx, this.butterfreePhoto);
        this.Beedrill = new Beedrill(this.canvas, this.ctx, this.beedrillPhoto);
        this.SquirtleBulletShooter = new SquirtleBulletShooter(this.ctx, this.canvas, this.Squirtle, this.Butterfree, this.Beedrill, this.musicObject);
        this.EnemyBulletShooter = new EnemyBulletShooter(this.ctx, this.canvas, this.Beedrill, this.Butterfree, this.Squirtle, this.musicObject);
        this.gameOver = false;
        this.begin = this.begin.bind(this);
        this.life = this.life.bind(this);
        this.keyHandler = this.keyHandler.bind(this);
        this.drawPause = this.drawPause.bind(this);
        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
        document.addEventListener('keypress', this.Squirtle.handleMute, false)
        document.addEventListener("keyup", this.keyHandler, false);
        this.menuDraw = this.menuDraw.bind(this);
        this.fainted = this.fainted.bind(this);
        this.newSquirtle = Squirtle;
        this.newBeedrill = Beedrill;
        this.newButterfree = Butterfree;
        this.newSquirtleBulletShooter = SquirtleBulletShooter;
        this.newEnemyBulletShooter = EnemyBulletShooter;


        // document.addEventListener('keypress', this.Squirtle.handlePause, false)
    }

    start(){

    }

    keyHandler(e){
        // debugger
        if (e.keyCode === 80){
            // debugger
            if (this.state !== STATUS.PAUSED) {
 
                this.drawPause()
                this.state = STATUS.PAUSED
            } else {

                this.state = STATUS.PLAYING
                this.life()
            }
            
        }

         if (e.keyCode === 13) {
             if (this.state !== STATUS.PLAYING) {

                 this.state = STATUS.PLAYING
                 this.life()
             }

         }

         if (e.keyCode === 72) {
            this.Squirtle = new this.newSquirtle(this.canvas, this.ctx, this.squirtlePhoto);
            this.Beedrill = new this.newBeedrill(this.canvas, this.ctx, this.beedrillPhoto);
            this.Butterfree = new this.newButterfree(this.canvas, this.ctx, this.butterfreePhoto);
            this.SquirtleBulletShooter = new this.newSquirtleBulletShooter(this.ctx, this.canvas, this.Squirtle, this.Butterfree, this.Beedrill, this.musicObject);
            this.EnemyBulletShooter = new this.newEnemyBulletShooter(this.ctx, this.canvas, this.Beedrill, this.Butterfree, this.Squirtle, this.musicObject);


             document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
             document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
             document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
             document.addEventListener('keypress', this.Squirtle.handleMute, false)
             document.addEventListener("keyup", this.keyHandler, false);
             this.state = STATUS.MENU
             this.menuDraw();
             
         }
    }

    drawPause(){
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.font = "50px Arial";
        this.ctx.fillText("Squirtle's Resting", this.canvas.width / 2, this.canvas.height / 3);
    }

    life(){

        if (this.state == STATUS.PAUSED || this.state == STATUS.MENU) {

            return
        
        } else {

            if(this.Squirtle.health <= 0){

                if (!this.Squirtle.mutePressed){
                    this.musicObject.music.pause();
                    this.musicObject.heal.play();
                }
                this.state = STATUS.GAMEOVER
                this.fainted()
                
            } else {

                if (!this.Squirtle.mutePressed) {
                    this.musicObject.music.play();
                } else {
                    this.musicObject.music.pause();
                }
                let count = 0;
                this.Beedrill.beedrills.forEach( (beedrill) => {
                    if(beedrill[0].health > 0){
                        count += 1 ;
                    }
                    if (beedrill[1].health > 0) {
                        count += 1;
                    }
                })
        
                this.Butterfree.butterfrees.forEach( (butterfree) => {
                
                    if(butterfree[0].health > 0){
                        count += 1;
                    }
                    if (butterfree[1].health > 0) {
                        count += 1;
                    }
                }) 
                // debugger
                if( count == 0){
                    // debugger
                    if (!this.Squirtle.mutePressed) {
                        this.musicObject.music.pause();
                        this.musicObject.victory.play();
                    }
                    const image = new Image()
                    image.src = './assets/deal-with-it.jpg';
    
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
                    image.onload = () => {
                        this.ctx.drawImage(image, 0, 0, 500, 339, 0, 0, this.canvas.width, this.canvas.height);
                    }
                    
                    
                } else {
        
                    requestAnimationFrame(this.life)
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    this.Squirtle.draw();
                    this.Butterfree.draw();
                    this.Beedrill.draw();
                    this.SquirtleBulletShooter.bullets.forEach((bullet) => {
                        bullet.draw();
                        this.SquirtleBulletShooter.collisionDetection();
                        this.SquirtleBulletShooter.bullets = this.SquirtleBulletShooter.bullets.filter(bullet => bullet.y > 0);
                    });
                    // debugger
                    setInterval(this.EnemyBulletShooter.shooterCheck(), 2000);
                    this.EnemyBulletShooter.bullets.forEach((bullet) => {
                        bullet.draw();
                      
                        
                        this.EnemyBulletShooter.collisionDetection();
                        this.EnemyBulletShooter.bullets = this.EnemyBulletShooter.bullets.filter(bullet => bullet.y < 540)
                    });
                }
            }
    
     
        }
      
    }


    begin(){
        // debugger
        this.menuDraw();
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.Beedrill.draw();
        this.STATUS = 0;
        this.life();
    }

    menuDraw() {
        this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Press Enter to begin", this.canvas.width / 2, 100);
        this.ctx.fillText("Press P to pause", this.canvas.width / 2, 175);
        this.ctx.fillText("Press M to mute", this.canvas.width / 2, 255);
        this.ctx.fillText("You have 3 lives", this.canvas.width / 2, 325);
        this.ctx.fillText("I choose you Squirtle!", this.canvas.width / 2, 400);
        
    }
    fainted(){
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.gameOverPhoto, 0, 0, 500, 200)
        this.ctx.font = "40px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Press H to heal", this.canvas.width / 2, 250);
    }


    
}
export default Game;
