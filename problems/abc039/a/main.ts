import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(Number);

  return (A * B + B * C + C * A) * 2;
};

console.log(main(read()));
