import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const T = input[1][0];

  for (let i = 0; i <= S.length; i++) {
    if (`${S.slice(i)}${S.slice(0, i)}` === T) {
      return "Yes";
    }
  }

  return "No";
};

console.log(main(read()));
