import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const N = Number(input[1][0]);

  const chars = S.split("");
  const candidates: string[] = [];

  chars.forEach((first) => {
    chars.forEach((second) => {
      candidates.push(`${first}${second}`);
    });
  });

  return candidates[N - 1];
};

console.log(main(read()));
