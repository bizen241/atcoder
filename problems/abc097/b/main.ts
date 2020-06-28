import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = Number(input[0][0]);

  let answer = 1;

  for (let i = 2; i <= Math.sqrt(X); i++) {
    let power = i ** 2;

    while (power * i <= X) {
      power *= i;
    }

    answer = Math.max(answer, power);
  }

  return answer;
};

console.log(main(read()));
