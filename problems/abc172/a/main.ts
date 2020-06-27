import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const a = Number(input[0][0]);

  return a + a ** 2 + a ** 3;
};

console.log(main(read()));
