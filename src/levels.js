import Block from "./block";

export function buildLevel(game, level) {
  let blocks = [];
  level.forEach((row, index) => {
    row.forEach((block, blockIndex) => {
      if (block === 1) {
        let position = {
          x: 80 * blockIndex,
          y: 50 + 20 * index
        };
        blocks.push(new Block(game, position));
      }
    });
  });
  return blocks;
}

export const level1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
];
export const level2 = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
export const level3 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0]
];
