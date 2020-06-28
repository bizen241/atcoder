import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const [D, X] = input[1].map(Number);

  let answer = X;

  for (let i = 2; i < N + 2; i++) {
    const A = Number(input[i][0]);

    let count = 0;

    for (let j = 0; A * j + 1 <= D; j++) {
      count += 1;
    }

    answer += count;
  }

  return answer;
};

console.log(main(read()));
