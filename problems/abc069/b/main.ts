import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];

  return `${s[0]}${s.length - 2}${s[s.length - 1]}`;
};

console.log(main(read()));
