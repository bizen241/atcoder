import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  const sum = A + B;

  return sum >= 10 ? "error" : sum;
};

console.log(main(read()));
