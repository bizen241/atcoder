import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = Number(input[0][0]);
  const B = Number(input[0][2]);
  const op = input[0][1];

  return op === "+" ? A + B : A - B;
};

console.log(main(read()));
