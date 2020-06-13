import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const K = Number(input[0][0]);
  const S = input[1][0];

  if (S.length <= K) {
    return S;
  }

  return `${S.slice(0, K)}...`;
};

console.log(main(read()));
