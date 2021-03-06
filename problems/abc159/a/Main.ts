import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M] = input[0].map(Number);

  return (N * (N - 1) + M * (M - 1)) / 2;
};

console.log(main(read()));
