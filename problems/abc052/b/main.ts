import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[1][0];

  let x = 0;
  let max = 0;

  S.split("").forEach((char) => {
    x = char === "I" ? x + 1 : x - 1;

    if (x > max) {
      max = x;
    }
  });

  return max;
};

console.log(main(read()));
