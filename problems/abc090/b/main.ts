import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const toPalindromicNumber = (target: number) => {
  const nums = target.toString().split("");

  return Number(
    `${nums.slice(0, 3).join("")}${nums.slice(0, 2).reverse().join("")}`
  );
};

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  let answer = Math.floor(B / 100) - Math.floor(A / 100) - 1;

  if (A <= toPalindromicNumber(A)) {
    answer += 1;
  }
  if (B >= toPalindromicNumber(B)) {
    answer += 1;
  }

  return answer;
};

console.log(main(read()));
