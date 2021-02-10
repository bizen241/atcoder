import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const r = Number(input[0][0]);

  return 3 * r ** 2;
};

console.log(main(read()));
