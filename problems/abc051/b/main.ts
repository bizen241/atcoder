import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [K, S] = input[0].map(Number);

  let count = 0;

  for (let X = 0; X <= K; X++) {
    for (let Y = 0; Y <= K; Y++) {
      const Z = S - (X + Y);

      if (Z >= 0 && Z <= K) {
        count += 1;
      }
    }
  }

  return count;
};

console.log(main(read()));
