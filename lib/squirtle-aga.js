import Game from '../js/game';
import SquirtleBullet from '../js/squirtleBullet';
import Beedrill from '../js/beedrill';
import Score from '../js/score';
import Dragonite from '../js/dragonite';
import Butterfree from '../js/butterfree';
import EnemyBullet from '../js/enemyBullet';
import Canvas from '../js/canvas';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const game = new Canvas(canvas, ctx, Game, SquirtleBullet, Beedrill, Score, Dragonite, Butterfree, EnemyBullet);

})