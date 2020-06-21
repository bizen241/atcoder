import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, S, T] = input[0].map(Number);
  const W = Number(input[1][0]);

  let weight = W;
  let answer = W >= S && W <= T ? 1 : 0;

  for (let i = 2; i <= N; i++) {
    const A = Number(input[i][0]);
    weight += A;

    if (weight >= S && weight <= T) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
