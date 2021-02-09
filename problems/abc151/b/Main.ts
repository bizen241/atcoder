import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, K, M] = input[0].map(Number);
  const A = input[1].map(Number);

  const total = A.reduce((sum, a) => sum + a);
  const last = Math.max(0, N * M - total);

  return last > K ? -1 : last;
};

console.log(main(read()));
