import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const R = Number(input[0][0]);

  return 2 * Math.PI * R;
};

console.log(main(read()));
