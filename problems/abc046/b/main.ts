import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, K] = input[0].map(BigInt);

  return (K * (K - 1n) ** (N - 1n)).toString();
};

console.log(main(read()));
