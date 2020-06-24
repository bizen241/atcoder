import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return S[S.length - 1] === "T" ? "YES" : "NO";
};

console.log(main(read()));
