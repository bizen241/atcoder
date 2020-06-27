import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C, D] = input[0].map(Number);

  if (C > B || A > D) {
    return 0;
  }

  return Math.min(B, D) - Math.max(A, C);
};

console.log(main(read()));
