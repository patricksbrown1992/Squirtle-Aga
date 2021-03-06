class Score {
  constructor(canvas, ctx, Squirtle) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.Squirtle = Squirtle;
    this.drawScore = this.drawScore.bind(this);
  }
  //     resetGame(){
  //         this.score = 0;
  //     }
  //     addPoints(points){
  //         this.score += points;
  //     }
  drawScore() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0)";
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "skyblue";
    this.ctx.textAlign = "top";
    this.ctx.fillText(
      `Lives: ${this.Squirtle.health}`,
      this.canvas.width - 100,
      15
    );
    this.ctx.fillText(`Score: ${this.Squirtle.score}`, 100, 15);
    this.ctx.fillText(`Level: ${this.Squirtle.level}`, 200, 15);
  }
}
export default Score;
