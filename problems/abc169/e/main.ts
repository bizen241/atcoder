import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const A: number[] = [];
  const B: number[] = [];
  for (let i = 0; i < N; i++) {
    A[i] = Number(input[i + 1][0]);
    B[i] = Number(input[i + 1][1]);
  }

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  if (N % 2 === 0) {
    const minMedian = A[N / 2 - 1] + A[N / 2];
    const maxMedian = B[N / 2 - 1] + B[N / 2];

    return maxMedian - minMedian + 1;
  } else {
    const minMedian = A[(N + 1) / 2 - 1];
    const maxMedian = B[(N + 1) / 2 - 1];

    return maxMedian - minMedian + 1;
  }
};

console.log(main(read()));
