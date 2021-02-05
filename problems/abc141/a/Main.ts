import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  const order = ["Sunny", "Cloudy", "Rainy"];

  return order[(order.indexOf(S) + 1) % order.length];
};

console.log(main(read()));
