import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A1, A2, A3, A4] = input[0].map(Number);

  return Math.min(A1, A2, A3, A4);
};

console.log(main(read()));
