import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [r, D, x] = input[0].map(Number);

  const X: number[] = [];

  for (let i = 0; i < 10; i++) {
    X[i] = r * (X[i - 1] || x) - D;
  }

  return X.join("\n");
};

console.log(main(read()));
