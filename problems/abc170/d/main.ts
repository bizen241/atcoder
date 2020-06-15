// divisor

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);
  const MAX = 10 ** 6;

  const divisorCounts: Array<number | undefined> = [];

  A.forEach((a) => {
    if (divisorCounts[a] !== undefined) {
      divisorCounts[a] = 2;

      return;
    }

    for (let i = a; i <= MAX; i += a) {
      divisorCounts[i] = (divisorCounts[i] || 0) + 1;
    }
  });

  let answer = 0;
  A.forEach((a) => {
    if (divisorCounts[a] === 1) {
      answer += 1;
    }
  });

  return answer;
};

console.log(main(read()));
