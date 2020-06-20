import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const prices = new Set<number>();

  for (let i = 1; i <= N; i++) {
    prices.add(Number(input[i][0]));
  }

  return [...prices].sort((a, b) => b - a)[1];
};

console.log(main(read()));
