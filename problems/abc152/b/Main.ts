import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b] = input[0].map(Number);

  const max = Math.max(a, b);
  const min = Math.min(a, b);

  return "".padEnd(max, min.toString());
};

console.log(main(read()));
