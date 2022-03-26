import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);
new InputHandler(paddle);

let lastTime = 0;

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(timeStamp) {
  let deltaT = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(deltaT);
  paddle.draw(ctx);

  ball.draw(ctx);
  ball.update();

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
