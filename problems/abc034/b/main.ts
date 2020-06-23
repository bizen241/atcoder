import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const n = Number(input[0][0]);

  return n % 2 === 0 ? n - 1 : n + 1;
};

console.log(main(read()));
