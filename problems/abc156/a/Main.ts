import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, R] = input[0].map(Number);

  return N >= 10 ? R : R + 100 * (10 - N);
};

console.log(main(read()));
