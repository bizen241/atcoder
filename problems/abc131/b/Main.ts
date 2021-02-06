import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, L] = input[0].map(Number);

  const tastes: number[] = [];
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= N; i++) {
    const taste = L + i - 1;

    tastes[i] = taste;
    min = Math.abs(taste) < Math.abs(min) ? taste : min;
  }

  const total = tastes.reduce((sum, taste) => sum + taste);

  return total - min;
};

console.log(main(read()));
