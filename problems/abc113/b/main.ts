import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [T, A] = input[1].map(Number);
  const candidates = input[2].map(Number);

  let answer = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;

  candidates.forEach((H, index) => {
    const diff = Math.abs(A - (T - H * 0.006));

    if (diff < minDiff) {
      answer = index + 1;
      minDiff = diff;
    }
  });

  return answer;
};

console.log(main(read()));
