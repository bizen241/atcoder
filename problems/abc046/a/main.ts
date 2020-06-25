import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const colors = input[0].map(Number);

  return new Set(colors).size;
};

console.log(main(read()));
