import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M] = input[0].map(Number);

  const answer = Array(N).fill(0);

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].map(Number);

    answer[a - 1] += 1;
    answer[b - 1] += 1;
  }

  return answer.join("\n");
};

console.log(main(read()));
