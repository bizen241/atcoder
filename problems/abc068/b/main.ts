import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let exponent = 0;

  for (let i = 2; i <= N; i *= 2) {
    exponent += 1;
  }

  return 2 ** exponent;
};

console.log(main(read()));
