import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, X] = input[0].map(Number);

  return A <= X && A + B >= X ? "YES" : "NO";
};

console.log(main(read()));
