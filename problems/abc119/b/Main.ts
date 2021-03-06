import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let sum = 0;

  for (let i = 1; i <= N; i++) {
    const x = Number(input[i][0]);
    const u = input[i][1];

    sum += u === "JPY" ? x : 380000 * x;
  }

  return sum;
};

console.log(main(read()));
