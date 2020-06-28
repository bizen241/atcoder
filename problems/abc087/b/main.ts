import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = Number(input[0][0]);
  const B = Number(input[1][0]);
  const C = Number(input[2][0]);
  const X = Number(input[3][0]);

  let answer = 0;

  for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++) {
      const c = (X - (a * 500 + b * 100)) / 50;

      if (c >= 0 && c <= C) {
        answer += 1;
      }
    }
  }

  return answer;
};

console.log(main(read()));
