import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const a = Number(input[0][0]);
  const s = input[1][0];

  return a >= 3200 ? s : "red";
};

console.log(main(read()));
