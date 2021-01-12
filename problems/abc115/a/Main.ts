import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const D = Number(input[0][0]);

  return `Christmas ${Array(25 - D).fill("Eve").join(" ")}`.trim()
};

console.log(main(read()));
