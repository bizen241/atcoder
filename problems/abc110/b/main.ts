import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, , X, Y] = input[0].map(Number);
  const x = input[1].map(Number);
  const y = input[2].map(Number);

  const maxX = Math.max(...x);
  const minY = Math.min(...y);

  if (maxX >= Y || minY <= X || maxX >= minY) {
    return "War";
  } else {
    return "No War";
  }
};

console.log(main(read()));
