import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(BigInt);
  const M = BigInt(10 ** 9 + 7);

  const X = A * B * C;

  return (X % M).toString();
};

console.log(main(read()));
