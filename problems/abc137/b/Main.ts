import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [K, X] = input[0].map(Number);

  const min = Math.max(-1000000, X - K + 1);
  const max = Math.min(1000000, X + K - 1);

  return [...Array(max - min + 1).keys()].map((x) => x + min).join(" ");
};

console.log(main(read()));
