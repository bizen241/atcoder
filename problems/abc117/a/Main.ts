import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [T, X] = input[0].map(Number);

  return T / X;
};

console.log(main(read()));
