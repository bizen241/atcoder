import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const x = N * 800;
  const y = Math.floor(N / 15) * 200;

  return x - y;
};

console.log(main(read()));
