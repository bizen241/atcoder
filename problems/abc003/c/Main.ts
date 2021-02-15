import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, K] = input[0].map(Number);
  const R = input[1]
    .map(Number)
    .sort((a, b) => b - a)
    .slice(0, K)
    .sort((a, b) => a - b);

  return R.reduce((rate, r) => (rate + r) / 2, 0);
};

console.log(main(read()));
