import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const w = input[0][0];

  const chars = new Set<string>();

  w.split("").forEach((char) => {
    if (chars.has(char)) {
      chars.delete(char);
    } else {
      chars.add(char);
    }
  });

  return chars.size === 0 ? "Yes" : "No";
};

console.log(main(read()));
