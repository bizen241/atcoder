import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const W = input[1].map(Number);

  const S1: number[] = [];
  const S2: number[] = [];

  for (let i = 0; i < N - 1; i++) {
    S1[i] = (S1[i - 1] || 0) + W[i];
    S2[i] = (S2[i - 1] || 0) + W[N - i - 1];
  }

  const diffs = S1.map((s1, i) => Math.abs(s1 - S2[N - i - 2]));

  return Math.min(...diffs);
};

console.log(main(read()));
