import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import { buildLevel, level1, level2 } from "./levels";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLVL: 4
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameState = GAMESTATE.MENU;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.gameObjects = [];
    this.blocks = [];
    this.lives = 1;
    this.levels = [level1, level2];
    this.currLevel = 0;
    new InputHandler(this.paddle, this);
  }

  start() {
    if (
      this.gameState !== GAMESTATE.MENU &&
      this.gameState !== GAMESTATE.NEWLVL
    ) {
      return;
    }
    this.blocks = buildLevel(this, this.levels[this.currLevel]);
    this.ball.reset();
    this.gameObjects = [this.ball, this.paddle];
    this.gameState = GAMESTATE.RUNNING;
  }
  draw(ctx) {
    [...this.gameObjects, ...this.blocks].forEach((object) => object.draw(ctx));

    if (this.gameState === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font = "50px serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }
    if (this.gameState === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "50px serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(
        "Press SPACEBAR to start",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }
    if (this.gameState === GAMESTATE.GAMEOVER) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();

      ctx.font = "50px serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAMEOVER", this.gameWidth / 2, this.gameHeight / 2);
    }
  }
  update(deltaT) {
    if (this.lives === 0) {
      this.gameState = GAMESTATE.GAMEOVER;
    }
    if (
      this.gameState === GAMESTATE.PAUSED ||
      this.gameState === GAMESTATE.MENU ||
      this.gameState === GAMESTATE.GAMEOVER
    )
      return;

    if (this.blocks.length === 0) {
      //loading new level
      this.currLevel++;
      this.gameState = GAMESTATE.NEWLVL;
      this.start();
    }

    [...this.gameObjects, ...this.blocks].forEach((object) =>
      object.update(deltaT)
    );

    this.blocks = this.blocks.filter((block) => !block.markedForDeletion);
  }
  togglePause() {
    if (this.gameState === GAMESTATE.PAUSED) {
      this.gameState = GAMESTATE.RUNNING;
    } else {
      this.gameState = GAMESTATE.PAUSED;
    }
    //game state
  }
}
