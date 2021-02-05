import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [H, A] = input[0].map(Number);

  return Math.ceil(H / A);
};

console.log(main(read()));
