import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [l1, l2, l3] = input[0].map(Number);

  return l1 === l2 ? l3 : l2 === l3 ? l1 : l2;
};

console.log(main(read()));
