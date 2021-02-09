import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0].split("");

  const odd = S.filter((_, i) => i % 2 === 0);
  const even = S.filter((_, i) => i % 2 === 1);

  return odd.includes("L") || even.includes("R") ? "No" : "Yes";
};

console.log(main(read()));
