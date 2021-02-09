import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [S, T] = input[1];

  return S.split("")
    .map((s, i) => `${s}${T[i]}`)
    .join("");
};

console.log(main(read()));
