import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let answer = 0;

  for (let i = 1; i <= N; i += 2) {
    let count = 0;

    for (let j = 1; j <= i; j += 1) {
      if (i % j === 0) {
        count += 1;
      }
    }

    if (count === 8) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
