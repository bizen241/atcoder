import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [H] = input[0].map(Number);
  const A = input[1].map(Number);

  return H <= A.reduce((sum, a) => sum + a) ? "Yes" : "No";
};

console.log(main(read()));
