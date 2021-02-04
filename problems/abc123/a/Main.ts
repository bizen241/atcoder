import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const a = Number(input[0][0]);
  const e = Number(input[4][0]);
  const k = Number(input[5][0]);

  return Math.abs(a - e) > k ? ":(" : "Yay!";
};

console.log(main(read()));
