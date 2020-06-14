// absolute value

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X] = input[0].map(Number);
  const P = input[1].map(Number);

  let num = 0;
  let min = 1000;
  for (let i = 0; i <= 101; i++) {
    if (P.includes(i)) {
      continue;
    }

    const diff = Math.abs(X - i);

    if (diff < min || (diff === min && i < num)) {
      num = i;
      min = diff;
    }
  }

  return num;
};

console.log(main(read()));
