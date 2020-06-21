import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b] = input[1].map(Number);
  const P = input[3].map(Number);

  return !P.includes(a) && !P.includes(b) && new Set(P).size === P.length
    ? "YES"
    : "NO";
};

console.log(main(read()));
