import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let total = 0;
  let max = 0;

  for (let i = 1; i <= N; i++) {
    const p = Number(input[i][0]);

    total += p;
    max = Math.max(max, p);
  }

  return total - max / 2;
};

console.log(main(read()));
