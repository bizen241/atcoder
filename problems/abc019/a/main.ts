import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  return input[0].map(Number).sort((a, b) => a - b)[1];
};

console.log(main(read()));
