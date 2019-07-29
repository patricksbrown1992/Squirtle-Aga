const STATUS = {
    PLAYING: 0,
    GAMOVER: 1,
    MENU: 2,
    PAUSED: 3
}

class Game{
    constructor(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, SquirtleBulletShooter, EnemyBulletShooter, gameOverPhoto, dealWithItPhoto, musicObject){
        this.canvas = canvas;
        this.ctx = ctx;
        this.squirtlePhoto = squirtlePhoto;
        this.musicObject = musicObject;
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
        document.addEventListener("keydown", this.Squirtle.keyDownHandler, false);
        document.addEventListener("keyup", this.Squirtle.keyUpHandler, false);
        document.addEventListener("keydown", this.SquirtleBulletShooter.keyDownHandler, false);
        document.addEventListener('keypress', this.Squirtle.handleMute, false)
        // document.addEventListener('keypress', this.Squirtle.handlePause, false)
    }

    start(){

    }

    life(){
        // debugger
        if (this.Squirtle.paused){
            debugger
        }
        if(this.Squirtle.health <= 0){
            // debugger
            if (!this.Squirtle.mutePressed){
                this.musicObject.music.pause();
                this.musicObject.heal.play();
            }
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.gameOverPhoto, 0, 0, 500, 200)
        } else {
            // debugger
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


    begin(){
        // debugger
        this.Squirtle.draw();
        this.Butterfree.draw();
        this.Beedrill.draw();
        this.life();
    }

    // muteToggle(ele){
    //     if (ele.muted) {
    //         ele.muted = false;
    //     } else {
    //         ele.muted = true;
    //     }
    // }

    
}
export default Game;
