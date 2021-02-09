import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const A = input[1].map(Number);
  const B = input[2].map(Number);
  const C = input[3].map(Number);

  let answer = 0;

  A.forEach((a, i) => {
    answer += B[a - 1];

    if (a !== N && A[i + 1] === a + 1) {
      answer += C[a - 1];
    }
  });

  return answer;
};

console.log(main(read()));
