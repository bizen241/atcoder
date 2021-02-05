import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return week.length - week.indexOf(S);
};

console.log(main(read()));
