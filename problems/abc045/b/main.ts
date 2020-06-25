import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = {
    A: input[0][0].split(""),
    B: input[1][0].split(""),
    C: input[2][0].split(""),
  };

  let current: keyof typeof S = "A";

  while (S[current].length !== 0) {
    current = S[current].shift()!.toUpperCase() as keyof typeof S;
  }

  return current;
};

console.log(main(read()));
