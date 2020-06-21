import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const AB = Number(input[0].join(""));

  return AB * 2;
};

console.log(main(read()));
