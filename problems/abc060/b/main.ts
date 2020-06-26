import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(Number);

  for (let i = A; i < A * B; i += A) {
    if (i % B === C) {
      return "YES";
    }
  }

  return "NO";
};

console.log(main(read()));
