import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const H1 = Number(input[0][0]);
  const H2 = Number(input[1][0]);

  return H1 - H2;
};

console.log(main(read()));
