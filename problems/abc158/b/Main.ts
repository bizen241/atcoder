import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, A, B] = input[0].map(BigInt);

  const remain = N % (A + B);

  return ((N / (A + B)) * A + (remain > A ? A : remain)).toString();
};

console.log(main(read()));
