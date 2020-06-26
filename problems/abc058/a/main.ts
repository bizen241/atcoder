import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b, c] = input[0].map(Number);

  return b - a === c - b ? "YES" : "NO";
};

console.log(main(read()));
