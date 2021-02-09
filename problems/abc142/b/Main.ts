import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, K] = input[0].map(Number);
  const H = input[1].map(Number);

  return H.filter((h) => h >= K).length;
};

console.log(main(read()));
