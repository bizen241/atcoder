import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);

  let answer = 0;

  A.forEach((a) => {
    while (a % 2 === 0 || (a + 1) % 3 === 0) {
      a -= 1;
      answer += 1;
    }
  });

  return answer;
};

console.log(main(read()));
