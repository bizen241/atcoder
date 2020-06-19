import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const W = input[0][0];

  return W.replace(/[aiueo]/g, "");
};

console.log(main(read()));
