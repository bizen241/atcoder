import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, X] = input[0].map(Number);
  const A = input[1].map(Number);

  return A.filter((a) => a !== X).join(" ");
};

console.log(main(read()));
