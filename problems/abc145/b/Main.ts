import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const S = input[1][0];

  return N % 2 === 0 && S.slice(0, N / 2) === S.slice(N / 2) ? "Yes" : "No";
};

console.log(main(read()));
