import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[0][0];
  const B = input[1][0];

  return A.length > B.length ? A : B;
};

console.log(main(read()));
