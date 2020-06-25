import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const a = Number(input[0][0]);
  const b = Number(input[1][0]);
  const h = Number(input[2][0]);

  return ((a + b) * h) / 2;
};

console.log(main(read()));
