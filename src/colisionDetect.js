export function detectCollison(ball, gameObject) {
  // Ball paddle
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObj = gameObject.position.y;
  let leftObj = gameObject.position.x;
  let rightobj = gameObject.position.x + gameObject.width;
  let bottomOfObj = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObj &&
    topOfBall <= bottomOfObj &&
    ball.position.x >= leftObj &&
    ball.position.x + ball.size <= rightobj
  ) {
    return true;
  } else {
    return false;
  }
}
