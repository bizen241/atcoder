import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];

  const chars: string[] = [];

  for (let i = 0; i < s.length; i += 2) {
    chars.push(s[i]);
  }

  return chars.join("");
};

console.log(main(read()));
