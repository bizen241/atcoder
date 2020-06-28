import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const bag = input[1];

  return new Set(bag).size === 3 ? "Three" : "Four";
};

console.log(main(read()));
