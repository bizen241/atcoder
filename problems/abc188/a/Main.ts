import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, Y] = input[0].map(Number);

  return Math.abs(X - Y) <= 2 ? "Yes" : "No";
};

console.log(main(read()));
