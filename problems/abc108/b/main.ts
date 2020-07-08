// TODO

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [x1, y1, x2, y2] = input[0].map(Number);

  const diffX = x2 - x1;
  const diffY = y2 - y1;

  return [x2 - diffY, y2 + diffX, x1 - diffY, y1 + diffX].join(" ");
};

console.log(main(read()));
