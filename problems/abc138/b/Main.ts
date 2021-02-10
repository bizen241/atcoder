import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);

  return 1 / A.reduce((sum, a) => sum + 1 / a, 0);
};

console.log(main(read()));
