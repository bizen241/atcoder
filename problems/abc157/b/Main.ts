import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const B = input.slice(4, -1).map((line) => line[0]);
  const A = input
    .slice(0, 3)
    .map((line) => line.map((item) => B.includes(item)));

  const isBingo = (array: boolean[]) => !array.includes(false);

  return isBingo(A[0]) ||
    isBingo(A[1]) ||
    isBingo(A[2]) ||
    isBingo(A.map((line) => line[0])) ||
    isBingo(A.map((line) => line[1])) ||
    isBingo(A.map((line) => line[2])) ||
    isBingo(A.map((line, i) => line[i])) ||
    isBingo(A.map((line, i) => line[2 - i]))
    ? "Yes"
    : "No";
};

console.log(main(read()));
