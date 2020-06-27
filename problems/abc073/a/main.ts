import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = input[0][0];

  return N.includes("9") ? "Yes" : "No";
};

console.log(main(read()));
