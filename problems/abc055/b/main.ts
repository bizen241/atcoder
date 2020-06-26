import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const M = 10 ** 9 + 7;

  let power = 1;

  for (let i = 1; i <= N; i++) {
    power = (power * i) % M;
  }

  return power;
};

console.log(main(read()));
