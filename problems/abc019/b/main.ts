import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];

  return s
    .match(/(.)\1*/g)!
    .map((part) => `${part[0]}${part.length}`)
    .join("");
};

console.log(main(read()));
