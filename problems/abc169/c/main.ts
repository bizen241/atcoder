// error

import { readFileSync } from "fs";

const main = (input: string[][]) => {
  const A = BigInt(input[0][0]);
  const B = BigInt(Math.round(Number(input[0][1]) * 100));

  const prod = (A * B) / 100n;

  return prod.toString();
};

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

console.log(main(read()));
