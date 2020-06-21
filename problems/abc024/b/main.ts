import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, T] = input[0].map(Number);

  let openedAt = Number(input[1][0]);
  let duration = T;

  for (let i = 2; i <= N; i++) {
    const A = Number(input[i][0]);

    if (A - openedAt < T) {
      duration -= T - (A - openedAt);
    }

    openedAt = A;
    duration += T;
  }

  return duration;
};

console.log(main(read()));
