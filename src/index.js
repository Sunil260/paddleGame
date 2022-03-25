import Paddle from "./paddle";
import InputHandler from "./input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaT = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaT);
  paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
