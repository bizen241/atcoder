import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const D = Number(input[0][0]);

  const T = [...Array(D)].map((_, i) => (i % 26) + 1);

  return T.join("\n");
};

console.log(main(read()));
