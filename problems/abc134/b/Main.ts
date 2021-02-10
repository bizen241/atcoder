import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, D] = input[0].map(Number);

  return Math.ceil(N / (D * 2 + 1));
};

console.log(main(read()));
