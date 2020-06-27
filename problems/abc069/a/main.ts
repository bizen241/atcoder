import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [n, m] = input[0].map(Number);

  return (n - 1) * (m - 1);
};

console.log(main(read()));
