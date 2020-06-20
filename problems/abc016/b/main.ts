import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(Number);

  const sum = A + B;
  const diff = A - B;

  if (C === sum && C === diff) {
    return "?";
  } else if (C !== sum && C !== diff) {
    return "!";
  } else if (C === sum) {
    return "+";
  } else {
    return "-";
  }
};

console.log(main(read()));
