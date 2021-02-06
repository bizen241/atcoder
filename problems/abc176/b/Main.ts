import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = BigInt(input[0][0]);

  return N % 9n === 0n ? "Yes" : "No";
};

console.log(main(read()));
