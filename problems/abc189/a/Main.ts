import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const C = input[0][0];

  return /(.)\1\1/.test(C) ? "Won" : "Lost";
};

console.log(main(read()));
