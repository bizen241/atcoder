import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [S, T] = input[0];
  const [A, B] = input[1].map(Number);
  const U = input[2][0];

  return `${U === S ? A - 1 : A} ${U === T ? B - 1 : B}`;
};

console.log(main(read()));
