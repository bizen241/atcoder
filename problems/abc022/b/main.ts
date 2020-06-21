import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const flowerNumbers = new Set(input.slice(1, N + 1).map((line) => line[0]));

  return N - flowerNumbers.size;
};

console.log(main(read()));
