import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [r, g, b] = input[0];

  return Number(`${r}${g}${b}`) % 4 === 0 ? "YES" : "NO";
};

console.log(main(read()));
