import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);

  A.sort((a, b) => a - b);

  return A[A.length - 1] - A[0];
};

console.log(main(read()));
