import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const x = input[0][1][0];

  return `A${x}C`;
};

console.log(main(read()));
