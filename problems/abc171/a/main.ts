import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const alpha = input[0][0];

  return alpha !== alpha.toLowerCase() ? "A" : "a";
};

console.log(main(read()));
