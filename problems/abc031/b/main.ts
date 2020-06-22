import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [L, H] = input[0].map(Number);
  const N = Number(input[1][0]);

  const results: number[] = [];

  for (let i = 0; i < N; i++) {
    const A = Number(input[i + 2][0]);

    results[i] = A > H ? -1 : Math.max(0, L - A);
  }

  return results.join("\n");
};

console.log(main(read()));
