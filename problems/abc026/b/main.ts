import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const R = input.slice(1, N + 1).map((line) => Number(line[0]));

  return R.sort((a, b) => a - b).reduce((sum, r, i) => {
    const S = Math.PI * r ** 2;

    if (N % 2 === (i + 1) % 2) {
      return sum + S;
    } else {
      return sum - S;
    }
  }, 0);
};

console.log(main(read()));
