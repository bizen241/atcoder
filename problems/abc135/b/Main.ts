import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const P = input[1].map(Number);

  return P.filter((p, i) => p !== i + 1).length <= 2 ? "YES" : "NO";
};

console.log(main(read()));
