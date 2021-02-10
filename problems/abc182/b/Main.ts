import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);

  let max = 0;
  let answer = 0;

  for (let i = 2; i <= Math.max(...A); i++) {
    const count = A.filter((a) => a % i === 0).length;

    if (count >= max) {
      max = count;
      answer = i;
    }
  }

  return answer;
};

console.log(main(read()));
