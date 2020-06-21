import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  if (N === 100) {
    return "Perfect";
  } else if (N >= 90) {
    return "Great";
  } else if (N >= 60) {
    return "Good";
  } else {
    return "Bad";
  }
};

console.log(main(read()));
