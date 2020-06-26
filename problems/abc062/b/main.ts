import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, W] = input[0].map(Number);
  const image = input.slice(1, -1).map((line) => line[0]);

  return [
    "#".repeat(W + 2),
    ...image.map((line) => `#${line}#`),
    "#".repeat(W + 2),
  ].join("\n");
};

console.log(main(read()));
