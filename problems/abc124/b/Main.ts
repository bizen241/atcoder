import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const H = input[1].map(Number);

  let max = 0;
  let count = 0;

  H.forEach((h) => {
    if (h >= max) {
      count += 1;
      max = h;
    }
  });

  return count;
};

console.log(main(read()));
