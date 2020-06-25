import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input.slice(1, -1).map((line) => line[0]);

  S.sort();

  return S.join("");
};

console.log(main(read()));
