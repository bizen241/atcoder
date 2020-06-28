import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const A = Number(input[1][0]);

  return N % 500 <= A ? "Yes" : "No";
};

console.log(main(read()));
