import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(Number);

  return Math.min(Math.floor(B / A), C);
};

console.log(main(read()));
