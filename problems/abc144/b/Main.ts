import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j === N) {
        return "Yes";
      }
    }
  }

  return "No";
};

console.log(main(read()));
