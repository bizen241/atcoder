import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, K] = input[0].map(Number);
  const P = input[1].map(Number);

  return P.sort((a, b) => a - b)
    .slice(0, K)
    .reduce((sum, p) => sum + p);
};

console.log(main(read()));
