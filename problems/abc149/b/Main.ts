import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, K] = input[0].map(Number);

  return `${Math.max(0, A - K)} ${Math.max(0, B - Math.max(0, K - A))}`;
};

console.log(main(read()));
