import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  if (/^(0[1-9]|1[0-2])(0[1-9]|1[0-2])$/.test(S)) {
    return "AMBIGUOUS";
  } else if (/(0[1-9]|1[0-2])$/.test(S)) {
    return "YYMM";
  } else if (/^(0[1-9]|1[0-2])/.test(S)) {
    return "MMYY";
  } else {
    return "NA";
  }
};

console.log(main(read()));
