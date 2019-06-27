import Game from '../js/game';
import SquirtleBullet from '../js/squirtleBullet';
// import Beedrill from '../js/beedrill';
import Score from '../js/score';
import Dragonite from '../js/dragonite';
import Butterfree from '../js/butterfree';
import Beedrill from '../js/beedrill';
import EnemyBullet from '../js/enemyBullet';
import Squirtle from '../js/squirtle';
import SquirtleBulletShooter from '../js/squirtleBulletShooter';
import Enemies from '../js/enemies';
import EnemyBulletShooter from '../js/enemyBulletShooter';

document.addEventListener('DOMContentLoaded', () => {
    const squirtlePhoto = new Image();
    squirtlePhoto.src = './assets/squirtle.png';
    const beedrillPhoto = new Image();
    beedrillPhoto.src = './assets/beedrill.png';
    const butterfreePhoto = new Image();
    butterfreePhoto.src = './assets/butterfree.png';
    // const dragonitePhoto = new Image();
    // dragonitePhoto.src = './assets/dragonite.png';
    const music = document.createElement("audio");
    music.src = "./assets/pokemon-trainer-battle-music.mp3";
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const game = new Game(canvas, ctx, Squirtle, squirtlePhoto, Butterfree, butterfreePhoto, Beedrill, beedrillPhoto, SquirtleBulletShooter, EnemyBulletShooter)

    setTimeout(() => { game.begin() }, 1000)
 
})