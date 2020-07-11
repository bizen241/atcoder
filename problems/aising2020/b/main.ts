import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const A = input[1].map(Number);

  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0 && A[i - 1] % 2 !== 0) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
