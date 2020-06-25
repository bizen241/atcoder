import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const n = Number(input[0][0]);

  let answer = Number.MAX_SAFE_INTEGER;

  for (let width = 1; width <= Math.sqrt(n); width++) {
    const height = Math.floor(n / width);
    const remainder = n - width * height;

    const sum = Math.abs(width - height) + remainder;

    if (sum < answer) {
      answer = sum;
    }
  }

  return answer;
};

console.log(main(read()));
