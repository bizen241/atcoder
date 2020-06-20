import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = input[0][0];

  return /^(ch|[oku])+$/.test(X) ? "YES" : "NO";
};

console.log(main(read()));
