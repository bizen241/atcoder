import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = Number(input[0][0]);

  return (A / 2) ** 2;
};

console.log(main(read()));
