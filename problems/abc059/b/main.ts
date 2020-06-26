import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const A = BigInt(input[0][0]);
  const B = BigInt(input[1][0]);

  if (A === B) {
    return "EQUAL";
  } else if (A > B) {
    return "GREATER";
  } else {
    return "LESS";
  }
};

console.log(main(read()));
