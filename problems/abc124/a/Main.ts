import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  return Math.max(A, B) + Math.max(Math.max(A, B) - 1, Math.min(A, B));
};

console.log(main(read()));
