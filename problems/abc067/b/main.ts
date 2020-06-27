import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, K] = input[0].map(Number);
  const L = input[1].map(Number);

  L.sort((a, b) => b - a);

  return L.slice(0, K).reduce((sum, l) => sum + l);
};

console.log(main(read()));
