import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N] = input[0].map(Number);
  const A = input[1].map(Number);

  const remainingDays = N - A.reduce((acc, cur) => acc + cur);

  return remainingDays < 0 ? -1 : remainingDays;
};

console.log(main(read()));
