class Score{
    constructor(){
        this.score = 0;
    }

    resetGame(){
        this.score = 0;
    }

    addPoints(points){
        this.score += points;
    }
}