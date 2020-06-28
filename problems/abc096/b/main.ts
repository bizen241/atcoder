import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(Number);
  const K = Number(input[1][0]);

  const max = Math.max(A, B, C);

  return max * 2 ** K + A + B + C - max;
};

console.log(main(read()));
