import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const T = Number(input[0][0]);
  const A = input[2].map(Number);
  const M = Number(input[3][0]);
  const B = input[4].map(Number);

  let cursor = 0;

  for (let i = 0; i < M; i++) {
    const b = B[i];

    const index = A.slice(cursor).findIndex((a) => a <= b && a >= b - T);
    if (index === -1) {
      return "no";
    }

    cursor += index + 1;
  }

  return "yes";
};

console.log(main(read()));
