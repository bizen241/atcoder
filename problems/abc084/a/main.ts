import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const M = Number(input[0][0]);

  return 24 - M + 24;
};

console.log(main(read()));
