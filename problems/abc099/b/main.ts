import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b] = input[0].map(Number);

  return ((b - a) * (b - a + 1)) / 2 - b;
};

console.log(main(read()));
