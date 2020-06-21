import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const Q = Number(input[0][0]);

  return Q === 1 ? "ABC" : "chokudai";
};

console.log(main(read()));
