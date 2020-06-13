import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const num = Number(input[0][0].slice(-1));
  const hon = [2, 4, 5, 7, 9];
  const pon = [0, 1, 6, 8];

  if (hon.includes(num)) {
    return "hon";
  }

  if (pon.includes(num)) {
    return "pon";
  }

  return "bon";
};

console.log(main(read()));
