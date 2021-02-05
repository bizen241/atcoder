import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [K, X] = input[0].map(Number);

  return 500 * K >= X ? "Yes" : "No";
};

console.log(main(read()));
