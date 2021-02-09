import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = input[1].map(Number);

  return A.filter((a) => a % 2 === 0 && a % 3 !== 0 && a % 5 !== 0).length > 0
    ? "DENIED"
    : "APPROVED";
};

console.log(main(read()));
