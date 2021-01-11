import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const nums = input[0][0].split("").map(Number);

  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length - 2; i++) {
    const X = nums[i] * 100 + nums[i + 1] * 10 + nums[i + 2];
    const diff = Math.abs(753 - X);

    if (diff < answer) {
      answer = diff;
    }
  }

  return answer;
};

console.log(main(read()));
