import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C, K] = input[0].map(Number);
  const [S, T] = input[1].map(Number);

  const price = A * S + B * T;
  const discount = S + T >= K ? (S + T) * C : 0;

  return price - discount;
};

console.log(main(read()));
