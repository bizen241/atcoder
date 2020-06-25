import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];
  const i = Number(input[1][0]);

  return s[i - 1];
};

console.log(main(read()));
