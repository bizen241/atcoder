import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const S = input[1][0];

  let answer = 0;

  for (let i = 2; i < N; i++) {
    const X = S.slice(0, i);
    const Y = S.slice(i);

    let count = 0;

    new Set(X.split("")).forEach((char) => {
      if (Y.includes(char)) {
        count += 1;
      }
    });

    answer = Math.max(count, answer);
  }

  return answer;
};

console.log(main(read()));
