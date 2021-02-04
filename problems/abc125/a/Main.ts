import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, T] = input[0].map(Number);

  return Math.floor(T / A) * B;
};

console.log(main(read()));
