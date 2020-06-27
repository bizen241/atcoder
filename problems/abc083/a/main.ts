import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C, D] = input[0].map(Number);

  const L = A + B;
  const R = C + D;

  return L === R ? "Balanced" : L > R ? "Left" : "Right";
};

console.log(main(read()));
