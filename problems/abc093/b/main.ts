import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const range = (start: number, stop: number) =>
  [...Array(stop - start + 1)].map((_, i) => start + i);

const main = (input: string[][]) => {
  const [A, B, K] = input[0].map(Number);

  if (A + K - 1 >= B - K + 1) {
    return range(A, B).join("\n");
  }

  return [...range(A, A + K - 1), ...range(B - K + 1, B)].join("\n");
};

console.log(main(read()));
