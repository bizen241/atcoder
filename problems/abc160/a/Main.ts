import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return /.{2}(.)\1(.)\2/.test(S) ? "Yes" : "No";
};

console.log(main(read()));
