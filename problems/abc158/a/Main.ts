import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return new Set(S.split("")).size === 2 ? "Yes" : "No";
};

console.log(main(read()));
