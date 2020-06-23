import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [x, y] = input[0].map(Number);

  return y > x ? "Better" : "Worse";
};

console.log(main(read()));
