import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [W, a, b] = input[0].map(Number);

  if (Math.abs(a - b) <= W) {
    return 0;
  }

  return Math.abs(a - b) - W;
};

console.log(main(read()));
