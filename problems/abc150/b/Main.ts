import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[1][0];

  return (S.match(/ABC/g) || []).length;
};

console.log(main(read()));
