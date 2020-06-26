import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M] = input[0].map(Number);
  const A = input.slice(1, N + 1).map((line) => line[0]);
  const B = input.slice(N + 1, -1).map((line) => line[0]);

  for (let x = 0; x <= N - M; x++) {
    for (let y = 0; y <= N - M; y++) {
      let isMatched = true;

      for (let i = 0; i < M; i++) {
        if (B[i] !== A[y + i].slice(x, x + M)) {
          isMatched = false;
        }
      }

      if (isMatched) {
        return "Yes";
      }
    }
  }

  return "No";
};

console.log(main(read()));
