import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, K] = input[0].map(Number);

  let count = 0;

  for (let i = Math.min(A, B); i > 0; i--) {
    if (A % i === 0 && B % i === 0) {
      count += 1;

      if (count === K) {
        return i;
      }
    }
  }

  return 0;
};

console.log(main(read()));
