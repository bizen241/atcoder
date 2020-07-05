import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return (S.match(/\+/g) || []).length - (S.match(/\-/g) || []).length;
};

console.log(main(read()));
