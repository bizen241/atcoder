import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = BigInt(input[0][0]);

  let deposit = 100n;
  let years = 0;

  while (deposit < X) {
    deposit += deposit / 100n;
    years += 1;
  }

  return years;
};

console.log(main(read()));
