import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const K = Number(input[1][0]);
  const X = Number(input[2][0]);
  const Y = Number(input[3][0]);

  return Math.min(N, K) * X + Math.max(0, N - K) * Y;
};

console.log(main(read()));
