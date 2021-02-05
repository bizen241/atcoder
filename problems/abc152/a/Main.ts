import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M] = input[0].map(Number);

  return N === M ? "Yes" : "No";
};

console.log(main(read()));
