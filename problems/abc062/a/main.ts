import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [x, y] = input[0].map(Number);

  const groups = [[1, 3, 5, 7, 8, 10, 12], [4, 6, 9, 11], [2]];

  for (const group of groups) {
    if (group.includes(x) && group.includes(y)) {
      return "Yes";
    }
  }

  return "No";
};

console.log(main(read()));
