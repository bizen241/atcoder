import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const field = input.slice(0, -1).map((line) => line[0]);

  let answer: string[] = [];

  field.forEach((row, index) => {
    answer.push(row[index]);
  });

  return answer.join("");
};

console.log(main(read()));
