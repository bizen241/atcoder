import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M, T] = input[0].map(Number);

  let remain = N;
  let last = 0;

  for (let i = 0; i < M; i++) {
    const [A, B] = input[i + 1].map(Number);

    remain = Math.max(0, remain - (A - last));
    if (remain === 0) {
      return "No";
    }

    remain = Math.min(N, remain + (B - A));
    last = B;
  }

  return Math.max(0, remain - (T - last)) > 0 ? "Yes" : "No";
};

console.log(main(read()));
