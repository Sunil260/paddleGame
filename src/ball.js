import { detectCollison } from "./colisionDetect";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("ball");
    this.reset();
    this.size = 16;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaT) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //Walls On Screen
    if (this.position.x > this.gameWidth - this.size || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives -= 1;
      this.reset();
    }

    //collide paddle
    if (detectCollison(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
  reset() {
    this.speed = { x: 4, y: -2 };
    this.position = { x: 10, y: 400 };
  }
}
