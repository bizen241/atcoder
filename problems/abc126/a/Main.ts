import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const K = Number(input[0][1]);
  const S = input[1][0];

  return `${S.slice(0, K - 1)}${S[K - 1].toLowerCase()}${S.slice(K)}`;
};

console.log(main(read()));
