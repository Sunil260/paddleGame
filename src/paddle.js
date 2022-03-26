export default class Paddle {
  //Basic constructor for the paddle
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 150;
    this.height = 30;

    this.maxV = 4;
    this.currV = 0;

    this.position = {
      //move box to the left by half of itself
      x: gameWidth / 2 - this.width / 2,

      //Adds a little buffer of 10px
      y: gameHeight - this.height - 10
    };
  }

  //Drawing function puts it into where is called
  draw(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaT) {
    this.position.x += this.currV;

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
  moveLeft() {
    this.currV = -this.maxV;
  }
  moveRight() {
    this.currV = this.maxV;
  }
  stop() {
    this.currV = 0;
  }
}
