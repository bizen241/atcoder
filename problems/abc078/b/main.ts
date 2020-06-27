import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, Y, Z] = input[0].map(Number);

  const width = X - Z;

  return Math.floor(width / (Y + Z));
};

console.log(main(read()));
