import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const V = input[1].map(Number);
  const C = input[2].map(Number);

  return V.map((v, i) => (v > C[i] ? v - C[i] : 0)).reduce(
    (sum, cur) => sum + cur
  );
};

console.log(main(read()));
