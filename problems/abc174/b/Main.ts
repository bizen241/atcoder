import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, D] = input[0].map(Number);

  let answer = 0;

  for (let i = 0; i < N; i++) {
    const [X, Y] = input[i + 1].map(Number);

    if (X ** 2 + Y ** 2 <= D ** 2) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
