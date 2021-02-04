import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [P, Q, R] = input[0].map(Number);

  return P + Q + R - Math.max(P, Q, R);
};

console.log(main(read()));
