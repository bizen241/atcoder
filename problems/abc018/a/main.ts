import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = Number(input[0][0]);
  const B = Number(input[1][0]);
  const C = Number(input[2][0]);

  const sortedPoints = [A, B, C].sort((a, b) => b - a);

  return [
    sortedPoints.indexOf(A) + 1,
    sortedPoints.indexOf(B) + 1,
    sortedPoints.indexOf(C) + 1,
  ].join("\n");
};

console.log(main(read()));
