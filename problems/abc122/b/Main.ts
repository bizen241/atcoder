import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return Math.max(
    ...(S.match(/[ACGT]+/g) || [""]).map((match) => match.length)
  );
};

console.log(main(read()));
