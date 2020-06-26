import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const prices = input[0].map(Number);

  prices.sort((a, b) => a - b);

  return prices[0] + prices[1];
};

console.log(main(read()));
