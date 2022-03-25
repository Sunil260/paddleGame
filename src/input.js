export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        default:
          break;
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        default:
          break;
        case 37:
          if (paddle.currV < 0) paddle.stop();
          break;
        case 39:
          if (paddle.currV > 0) paddle.stop();
          break;
      }
    });
  }
}
