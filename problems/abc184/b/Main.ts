import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, X] = input[0].map(Number);
  const S = input[1][0];

  let score = X;

  S.split("").forEach((result) => {
    if (result === "o") {
      score += 1;
    } else {
      score = Math.max(0, score - 1);
    }
  });

  return score;
};

console.log(main(read()));
