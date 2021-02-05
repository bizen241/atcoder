import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, W] = input[0].map(Number);

  return Math.floor(N / W);
};

console.log(main(read()));
