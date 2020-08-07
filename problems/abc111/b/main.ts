import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  for (let i = 1; i <= 9; i++) {
    const x = i * 100 + i * 10 + i;

    if (N <= x) {
      return x;
    }
  }

  return 0;
};

console.log(main(read()));
