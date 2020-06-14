// conditional

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = input[0].map(Number);

  let answer = 0;

  X.forEach((x, index) => {
    if (x === 0) {
      answer = index + 1;
    }
  });

  return answer;
};

console.log(main(read()));
