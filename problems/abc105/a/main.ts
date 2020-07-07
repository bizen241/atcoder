import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, K] = input[0].map(Number);

  return N % K === 0 ? 0 : 1;
};

console.log(main(read()));
