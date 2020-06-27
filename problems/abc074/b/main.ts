import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const K = Number(input[1][0]);
  const X = input[2].map(Number);

  let answer = 0;

  X.forEach((x) => {
    answer += Math.min(x, K - x) * 2;
  });

  return answer;
};

console.log(main(read()));
