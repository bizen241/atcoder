import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, M] = input[0].map(Number);
  const A = input[1].map(Number);

  const total = A.reduce((sum, a) => sum + a);

  return A.filter((a) => a >= total / (4 * M)).length >= M ? "Yes" : "No";
};

console.log(main(read()));
