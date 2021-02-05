import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, X, T] = input[0].map(Number);

  return Math.ceil(N / X) * T;
};

console.log(main(read()));
