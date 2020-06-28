import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, X] = input[0].map(Number);
  const M = input.slice(1, -1).map((line) => Number(line[0]));

  const sum = M.reduce((acc, cur) => acc + cur);

  return N + Math.floor((X - sum) / Math.min(...M));
};

console.log(main(read()));
