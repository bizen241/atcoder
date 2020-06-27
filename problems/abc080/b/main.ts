import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const digitSum = Number(
    N.toString()
      .split("")
      .map(Number)
      .reduce((sum, cur) => sum + cur)
  );

  return N % digitSum === 0 ? "Yes" : "No";
};

console.log(main(read()));
