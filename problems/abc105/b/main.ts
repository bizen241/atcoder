import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  for (let i = 0; i <= N; i += 4) {
    if ((N - i) % 7 === 0) {
      return "Yes";
    }
  }

  return "No";
};

console.log(main(read()));
