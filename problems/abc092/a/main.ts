import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = Number(input[0][0]);
  const B = Number(input[1][0]);
  const C = Number(input[2][0]);
  const D = Number(input[3][0]);

  return Math.min(A, B) + Math.min(C, D);
};

console.log(main(read()));
