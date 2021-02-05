import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = Number(input[0][0]);
  const B = Number(input[1][0]);

  return A + B === 3 ? 3 : A + B === 4 ? 2 : 1;
};

console.log(main(read()));
