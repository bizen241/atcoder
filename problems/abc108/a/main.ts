import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const K = Number(input[0][0]);

  return K % 2 === 0 ? (K / 2) ** 2 : ((K - 1) / 2) ** 2 + (K - 1) / 2;
};

console.log(main(read()));
