import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, X] = input[0].map(Number);

  let answer = -1;
  let sum = 0;

  for (let i = 0; i < N; i++) {
    const [V, P] = input[i + 1].map(Number);

    sum += V * P;

    if (sum > X * 100) {
      answer = i + 1;

      break;
    }
  }

  return answer;
};

console.log(main(read()));
