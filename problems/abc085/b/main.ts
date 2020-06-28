import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const D = input.slice(1, -1).map((line) => Number(line[0]));

  return new Set(D).size;
};

console.log(main(read()));
