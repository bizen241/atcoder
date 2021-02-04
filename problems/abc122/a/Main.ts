import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const b = input[0][0] as keyof typeof pairs;

  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  return pairs[b];
};

console.log(main(read()));
