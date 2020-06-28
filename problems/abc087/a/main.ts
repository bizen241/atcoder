import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = Number(input[0][0]);
  const A = Number(input[1][0]);
  const B = Number(input[2][0]);

  return (X - A) % B;
};

console.log(main(read()));
