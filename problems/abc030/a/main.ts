import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C, D] = input[0].map(Number);

  if (B * C === A * D) {
    return "DRAW";
  } else if (B * C > A * D) {
    return "TAKAHASHI";
  } else {
    return "AOKI";
  }
};

console.log(main(read()));
