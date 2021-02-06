import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N] = input[0].map(Number);

  const counts: number[] = [];

  for (let i = 0; i < N; i++) {
    const [, ...A] = input[i + 1].map(Number);

    A.forEach((a) => {
      counts[a] = (counts[a] || 0) + 1;
    });
  }

  return counts.filter((count) => count === N).length;
};

console.log(main(read()));
