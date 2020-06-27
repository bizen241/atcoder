import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, A, B] = input[0].map(Number);

  let answer = 0;

  for (let i = 1; i <= N; i++) {
    const digitSum = Number(
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((sum, cur) => sum + cur)
    );

    if (digitSum >= A && digitSum <= B) {
      answer += i;
    }
  }

  return answer;
};

console.log(main(read()));
