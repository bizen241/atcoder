import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const A = input[1].map(Number);

  const sum = A.reduce((acc, cur) => acc + cur);
  if (sum % N !== 0) {
    return -1;
  }

  const target = sum / N;
  let remainder = 0;
  let answer = 0;

  A.forEach((a) => {
    if (remainder !== 0) {
      answer += 1;
    }

    if (remainder < 0) {
      const toLeft = Math.min(a, Math.abs(remainder));

      remainder += toLeft;
      a -= toLeft;
    }

    if (a > target) {
      remainder += a - target;
    } else {
      remainder -= target - a;
    }
  });

  return answer;
};

console.log(main(read()));
