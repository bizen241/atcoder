import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const L = [2n, 1n];

  for (let i = 2; i <= N; i++) {
    L[i] = L[i - 1] + L[i - 2];
  }

  return L[N].toString();
};

console.log(main(read()));
