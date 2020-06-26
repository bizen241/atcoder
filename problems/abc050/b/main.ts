import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const T = input[1].map(Number);
  const M = Number(input[2][0]);

  const total = T.reduce((acc, cur) => acc + cur);
  const answer: number[] = [];

  for (let i = 3; i < M + 3; i++) {
    const [P, X] = input[i].map(Number);

    answer.push(total - (T[P - 1] - X));
  }

  return answer.join("\n");
};

console.log(main(read()));
