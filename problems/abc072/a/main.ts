import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, t] = input[0].map(Number);

  return Math.max(0, X - t);
};

console.log(main(read()));
