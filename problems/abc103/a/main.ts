import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[0].map(Number);

  return Math.max(...A) - Math.min(...A);
};

console.log(main(read()));
