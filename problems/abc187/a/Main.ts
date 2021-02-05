import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  const digitSum = (n: number) =>
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);

  return Math.max(digitSum(A), digitSum(B));
};

console.log(main(read()));
