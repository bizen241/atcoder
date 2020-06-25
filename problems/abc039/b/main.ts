import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = Number(input[0][0]);

  return Math.pow(X, 1 / 4);
};

console.log(main(read()));
