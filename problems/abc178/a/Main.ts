import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const x = Number(input[0][0]);

  return x === 0 ? 1 : 0;
};

console.log(main(read()));
