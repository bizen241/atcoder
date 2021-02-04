import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  return B % A === 0 ? A + B : B - A;
};

console.log(main(read()));
