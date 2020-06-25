import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [n, x] = input[0].map(Number);

  return Math.min(x - 1, n - x);
};

console.log(main(read()));
