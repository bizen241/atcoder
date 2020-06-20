import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [n, X] = input[0].map(Number);
  const prices = input[1].map(Number);

  const bits = X.toString(2).padStart(n, "0").split("").reverse().map(Number);

  return prices.reduce(
    (sum, price, index) => (bits[index] ? sum + price : sum),
    0
  );
};

console.log(main(read()));
