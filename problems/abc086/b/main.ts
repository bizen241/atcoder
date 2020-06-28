import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [a, b] = input[0];

  const ab = Number(`${a}${b}`);

  return Math.round(Math.sqrt(ab)) ** 2 === ab ? "Yes" : "No";
};

console.log(main(read()));
