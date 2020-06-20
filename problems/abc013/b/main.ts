import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const a = Number(input[0][0]);
  const b = Number(input[1][0]);

  const diff = Math.abs(a - b);

  return Math.min(diff, 10 - diff);
};

console.log(main(read()));
