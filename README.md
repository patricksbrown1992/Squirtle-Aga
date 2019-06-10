## Overview

Squirtle-Aga follows Bushnell's Law - easy to learn, hard to master. The player presses left or right to dodge attacks from the Beedrills, Butterfrees and Dragonites. 

This game is inspired by [Galaga](https://en.wikipedia.org/wiki/Galaga)

## Functionality

* Player presses left/right arrows to move and space bar to shoot. The players starts off with three lives
* Enemy Pokemon will generate and then fly into formation. After every pokemon alive has gone into formation, two at a time will fly down and try to attack squirtle with their attacks as well as their bodies. 
* If Squirtle gets hit by an enemy attack or body, the player will lose one life
* If the player is out of lives, the game is over
* Beedrills and Butterfrees are worth 50 points. Dragonites are worth 400 points and must be hit twice to be destroyed


## Wireframes



## Technology 
* HTML5 Canvas for game space
* Webpack to bundle everything into one source
* JavaScript for game logic

## File structure
* **squirtle.js** - handles the Squirtle element of the game
* **player.js** - input affect the gameplay
* **scoreboard.js** - saves current score and high score
* **instructions.js** - shows keys so new players know the rules and buttons
* **enemies.js** - handles the Butterfree, Beedrill and Dragonite elements of the game


## MVPs
* Pokemon Sprites and instructions
* Player can start, pause, restart and reset game
* Game saves high scores
* Player can move squirtle left, right and shoot
* Congratulations and game over modal

