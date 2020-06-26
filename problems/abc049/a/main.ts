import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const c = input[0][0];

  return "aiueo".includes(c) ? "vowel" : "consonant";
};

console.log(main(read()));
