import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const n = Number(input[0][0]);
  const P = input[1].map(Number);

  let answer = 0;

  for (let i = 1; i < n - 1; i++) {
    const p = P[i];
    const part = P.slice(i - 1, i + 2);

    if (Math.max(...part) !== p && Math.min(...part) !== p) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
