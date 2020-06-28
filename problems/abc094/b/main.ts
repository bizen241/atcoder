import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, , X] = input[0].map(Number);
  const A = input[1].map(Number);

  const right = A.findIndex((num) => num > X);

  if (right === -1) {
    return 0;
  }

  return Math.min(right, A.length - right);
};

console.log(main(read()));
