import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  return A <= 5 ? 0 : A <= 12 ? B / 2 : B;
};

console.log(main(read()));
