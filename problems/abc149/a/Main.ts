import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [S, T] = input[0];

  return `${T}${S}`;
};

console.log(main(read()));
