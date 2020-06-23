import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const result = [...Array(N)].map(() => Array<string>());

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      result[j][N - i - 1] = input[i + 1][0][j];
    }
  }

  return result.map((row) => row.join("")).join("\n");
};

console.log(main(read()));
