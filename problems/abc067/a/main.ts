import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  return A % 3 === 0 || B % 3 === 0 || (A + B) % 3 === 0
    ? "Possible"
    : "Impossible";
};

console.log(main(read()));
