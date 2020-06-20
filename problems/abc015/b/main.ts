import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);

  let parameter = 0;

  const sum = A.reduce((acc, cur) => {
    if (cur !== 0) {
      parameter += 1;
    }

    return acc + cur;
  }, 0);

  return Math.ceil(sum / parameter);
};

console.log(main(read()));
