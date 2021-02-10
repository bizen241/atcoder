import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let count = 0;

  for (let i = 1; i <= N; i++) {
    const [xi, yi] = input[i].map(Number);

    for (let j = i + 1; j <= N; j++) {
      const [xj, yj] = input[j].map(Number);

      const abs = Math.abs((yj - yi) / (xj - xi));

      if (abs <= 1) {
        count += 1;
      }
    }
  }

  return count;
};

console.log(main(read()));
