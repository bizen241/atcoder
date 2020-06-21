import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const nums = input[0][0].split("").map(Number);

  return nums.reduce((sum, num) => sum + num);
};

console.log(main(read()));
