import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, S, D] = input[0].map(Number);

  for (let i = 0; i < N; i++) {
    const [X, Y] = input[i + 1].map(Number);

    if (X < S && Y > D) {
      return "Yes";
    }
  }

  return "No";
};

console.log(main(read()));
