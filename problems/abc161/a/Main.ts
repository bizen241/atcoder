import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, Y, Z] = input[0].map(Number);

  return [Z, X, Y].join(" ");
};

console.log(main(read()));
