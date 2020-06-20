import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const T = input.slice(1, -1).map(Number);

  return T.reduce((acc, cur) => Math.min(acc, cur));
};

console.log(main(read()));
