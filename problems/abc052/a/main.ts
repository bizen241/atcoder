import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C, D] = input[0].map(Number);

  return Math.max(A * B, C * D);
};

console.log(main(read()));
