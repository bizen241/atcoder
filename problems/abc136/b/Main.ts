import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let answer = 0;

  for (let i = 1; i <= N; i++) {
    if (i.toString().length % 2 !== 0) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
