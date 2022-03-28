import { detectCollison } from "./colisionDetect";
export default class Block {
  constructor(game, position) {
    this.image = document.getElementById("block");
    this.game = game;
    this.position = position;
    this.width = 100;
    this.height = 30;
    this.markedForDeletion = false;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update(deltaT) {
    if (detectCollison(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }
  }
}
