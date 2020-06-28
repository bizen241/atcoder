import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b, c, d] = input[0].map(Number);

  return Math.abs(a - c) <= d || (Math.abs(a - b) <= d && Math.abs(b - c) <= d)
    ? "Yes"
    : "No";
};

console.log(main(read()));
