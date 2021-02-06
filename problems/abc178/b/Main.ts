import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b, c, d] = input[0].map(BigInt);

  return [a * c, a * d, b * c, b * d]
    .sort((x, y) => (x < y ? -1 : x > y ? 1 : 0))
    .pop()!
    .toString();
};

console.log(main(read()));
