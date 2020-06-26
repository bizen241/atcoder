import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0];

  return A[A.length - 1] === B[0] && B[B.length - 1] === C[0] ? "YES" : "NO";
};

console.log(main(read()));
