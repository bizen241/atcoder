import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input.slice(1, -1).flat().map(Number);

  const min = Math.min(...A);

  return A.reduce((sum, a) => sum + (a - min), 0);
};

console.log(main(read()));
