import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, A, B] = input[0].map(Number);

  if (B <= A) {
    return "delicious";
  } else if (B <= A + X) {
    return "safe";
  } else {
    return "dangerous";
  }
};

console.log(main(read()));
