import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const L = input[1].map(Number);

  const sum = L.reduce((sum, l) => sum + l, 0);
  const max = Math.max(...L);

  return max < sum - max ? "Yes" : "No";
};

console.log(main(read()));
