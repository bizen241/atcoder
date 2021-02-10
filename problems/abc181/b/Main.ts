import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let answer = 0;

  for (let i = 0; i < N; i++) {
    const [A, B] = input[i + 1].map(Number);

    answer += (B * (B + 1)) / 2 - ((A - 1) * A) / 2;
  }

  return answer;
};

console.log(main(read()));
