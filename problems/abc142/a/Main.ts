import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  return N % 2 === 0 ? 0.5 : ((N - 1) / 2 + 1) / N;
};

console.log(main(read()));
