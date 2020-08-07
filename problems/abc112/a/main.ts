import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  if (N === 1) {
    return "Hello World";
  } else {
    const A = Number(input[1][0]);
    const B = Number(input[2][0]);

    return A + B;
  }
};

console.log(main(read()));
