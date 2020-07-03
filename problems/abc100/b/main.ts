import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [D, N] = input[0].map(Number);

  return 100 ** D * (N === 100 ? N + 1 : N);
};

console.log(main(read()));
