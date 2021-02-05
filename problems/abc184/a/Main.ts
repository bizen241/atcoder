import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b] = input[0].map(Number);
  const [c, d] = input[1].map(Number);

  return a * d - b * c;
};

console.log(main(read()));
