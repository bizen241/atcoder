import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [x, a, b] = input[0].map(Number);

  return Math.abs(x - a) < Math.abs(x - b) ? "A" : "B";
};

console.log(main(read()));
