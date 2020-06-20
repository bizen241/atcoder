import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  return input
    .slice(0, 4)
    .reverse()
    .map((row) => row.reverse().join(" "))
    .join("\n");
};

console.log(main(read()));
