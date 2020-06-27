import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const K = Number(input[1][0]);

  let answer = 1;

  for (let i = 0; i < N; i++) {
    answer = Math.min(answer * 2, answer + K);
  }

  return answer;
};

console.log(main(read()));
