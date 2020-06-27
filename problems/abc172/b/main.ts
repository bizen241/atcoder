import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const T = input[1][0];

  let answer = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
