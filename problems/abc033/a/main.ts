import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = input[0][0];

  return /^(.)\1{3}$/.test(N) ? "SAME" : "DIFFERENT";
};

console.log(main(read()));
