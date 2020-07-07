import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return /^A[a-z]+C[a-z]+$/.test(S) ? "AC" : "WA";
};

console.log(main(read()));
