import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, P] = input[0].map(Number);

  return Math.floor((A * 3 + P) / 2);
};

console.log(main(read()));
