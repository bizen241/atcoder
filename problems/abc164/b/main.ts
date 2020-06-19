import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C, D] = input[0].map(Number);

  return Math.ceil(A / D) >= Math.ceil(C / B) ? "Yes" : "No";
};

console.log(main(read()));
