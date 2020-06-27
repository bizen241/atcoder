import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0].split("").map(Number);

  return s.reduce((sum, cur) => sum + cur);
};

console.log(main(read()));
