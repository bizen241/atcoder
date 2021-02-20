import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, K] = input[0].map(Number);

  let a = N;

  for (let i = 0; i < K; i++) {
    const nums = a.toString().split("").map(Number);

    const g1 = nums.sort((a, b) => b - a).join("");
    const g2 = nums
      .filter((num) => num !== 0)
      .sort((a, b) => a - b)
      .join("");

    a = Number(g1) - Number(g2);
  }

  return a;
};

console.log(main(read()));
