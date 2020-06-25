import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b, x] = input[0].map(BigInt);

  if (a === 0n) {
    return (b / x + 1n).toString();
  } else {
    return (b / x - (a - 1n) / x).toString();
  }
};

console.log(main(read()));
