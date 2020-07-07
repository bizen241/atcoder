import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const R = Number(input[0][0]);

  return R < 1200 ? "ABC" : R < 2800 ? "ARC" : "AGC";
};

console.log(main(read()));
