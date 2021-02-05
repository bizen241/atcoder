import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return !S.includes("R")
    ? 0
    : Math.max(...S.match(/R+/g)!.map((value) => value.length));
};

console.log(main(read()));
