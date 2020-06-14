// leg, linear equation

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, Y] = input[0].map(Number);

  for (let i = 0; i <= X; i++) {
    const legCount = i * 2 + (X - i) * 4;

    if (legCount === Y) {
      return "Yes";
    }
  }

  return "No";
};

console.log(main(read()));
