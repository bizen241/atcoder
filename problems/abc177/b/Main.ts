import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const T = input[1][0].split("");

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= S.length - T.length; i++) {
    const count = T.filter((char, index) => char !== S[i + index]).length;

    min = Math.min(count, min);
  }

  return min;
};

console.log(main(read()));
