import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = Number(input[0][0]);

  return Math.floor(X / 500) * 1000 + Math.floor((X % 500) / 5) * 5;
};

console.log(main(read()));
