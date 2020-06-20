import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [S, T] = input[0].map(Number);

  return T - S + 1;
};

console.log(main(read()));
