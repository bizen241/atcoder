import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, A] = input[0].map(Number);

  return X < A ? 0 : 10;
};

console.log(main(read()));
