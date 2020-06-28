import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);
  const S = input[1][0];

  return new RegExp(`^[0-9]{${A}}\-[0-9]{${B}}$`).test(S) ? "Yes" : "No";
};

console.log(main(read()));
