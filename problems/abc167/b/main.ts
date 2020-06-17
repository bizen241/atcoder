// sum, max

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, , K] = input[0].map(Number);

  return Math.min(A, K) - Math.max(K - (A + B), 0);
};

console.log(main(read()));
