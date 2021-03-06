// string

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const T = input[1][0];

  return T.slice(0, -1) === S ? "Yes" : "No";
};

console.log(main(read()));
