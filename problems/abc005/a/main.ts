import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [x, y] = input[0].map(Number);

  return Math.floor(y / x);
};

console.log(main(read()));
