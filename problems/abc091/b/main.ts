import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const M = Number(input[N + 1][0]);

  const counts: { [key: string]: number } = {};

  for (let i = 1; i < N + 1; i++) {
    const s = input[i][0];

    counts[s] = (counts[s] || 0) + 1;
  }

  for (let i = N + 2; i < M + N + 2; i++) {
    const t = input[i][0];

    counts[t] = (counts[t] || 0) - 1;
  }

  return Math.max(0, ...Object.values(counts));
};

console.log(main(read()));
