import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);
  const B = input[2].map(Number);

  return A.reduce((sum, a, i) => sum + a * B[i], 0) === 0 ? "Yes" : "No";
};

console.log(main(read()));
