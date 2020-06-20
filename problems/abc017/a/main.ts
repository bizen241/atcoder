import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  return input.slice(0, 3).reduce((sum, line) => {
    const [s, e] = line.map(Number);

    return sum + (s / 10) * e;
  }, 0);
};

console.log(main(read()));
