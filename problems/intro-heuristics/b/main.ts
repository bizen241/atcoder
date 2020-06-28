import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const D = Number(input[0][0]);
  const C = input[1].map(Number);
  const S = input.slice(2, 2 + D).map((line) => line.map(Number));
  const T = input.slice(2 + D, -1).map((line) => Number(line[0]));

  let score = 0;

  const V: number[] = [];
  const L = Array(26).fill(0);

  T.forEach((t, i) => {
    L[t - 1] = i + 1;

    score += S[i][t - 1];
    score -= C.reduce((sum, c, j) => sum + c * (i + 1 - L[j]), 0);

    V.push(score);
  });

  return V.join("\n");
};

console.log(main(read()));
