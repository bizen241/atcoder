import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0]
    .split("")
    .sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
    .join("");
  const t = input[1][0]
    .split("")
    .sort((a, b) => (a === b ? 0 : a > b ? -1 : 1))
    .join("");

  return s < t ? "Yes" : "No";
};

console.log(main(read()));
