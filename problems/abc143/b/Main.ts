import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const D = input[1].map(Number);

  let sum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === j) {
        continue;
      }

      sum += D[i] * D[j];
    }
  }

  return sum / 2;
};

console.log(main(read()));
