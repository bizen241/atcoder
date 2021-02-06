import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, , C] = input[0].map(Number);
  const B = input[1].map(Number);

  let count = 0;

  for (let i = 0; i < N; i++) {
    const A = input[i + 2].map(Number);

    const value =
      A.map((a, index) => a * B[index]).reduce(
        (sum, current) => sum + current
      ) + C;

    if (value > 0) {
      count += 1;
    }
  }

  return count;
};

console.log(main(read()));
