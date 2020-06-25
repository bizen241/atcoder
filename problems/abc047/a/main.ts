import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const packs = input[0].map(Number);

  packs.sort((a, b) => a - b);

  return packs[0] + packs[1] === packs[2] ? "Yes" : "No";
};

console.log(main(read()));
