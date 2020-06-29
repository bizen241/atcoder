import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  return Math.max(A + B, A - B, A * B) + 0;
};

console.log(main(read()));
