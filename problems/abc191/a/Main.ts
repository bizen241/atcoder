import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [V, T, S, D] = input[0].map(Number);

  return V * T <= D && V * S >= D ? "No" : "Yes";
};

console.log(main(read()));
