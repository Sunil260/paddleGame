export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.image = document.getElementById("ball");
    this.speed = { x: 4, y: 4 };
    this.position = { x: 10, y: 10 };
    this.size = 16;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
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
    if (this.position.x > this.gameWidth - this.size) {
      this.position.x = this.gameWidth - this.size;
    }
    if (this.position.y > this.gameHeight - this.size)
      this.position.y = this.gameHeight - this.size;
  }
}
