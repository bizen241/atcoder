import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let sum = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(main(read()));
