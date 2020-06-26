import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const x = Number(input[0][0]);

  return x < 1200 ? "ABC" : "ARC";
};

console.log(main(read()));
