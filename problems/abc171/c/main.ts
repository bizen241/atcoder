import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = BigInt(input[0][0]);

  const name: string[] = [];
  let n = N;

  while (n > 0) {
    const num = n % 26n === 0n ? 26n : n % 26n;

    name.unshift(String.fromCodePoint(96 + Number(num)));

    n = (n - num) / 26n;
  }

  return name.join("");
};

console.log(main(read()));
