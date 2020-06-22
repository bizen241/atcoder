import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, D] = input[0].map(Number);

  return Math.max((A + 1) * D, A * (D + 1));
};

console.log(main(read()));
