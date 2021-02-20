import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0].split("");

  let answer = "Yes";

  S.forEach((char, index) => {
    if (index % 2 === 0 && char.toLowerCase() !== char) {
      answer = "No";
    }
    if (index % 2 === 1 && char.toUpperCase() !== char) {
      answer = "No";
    }
  });

  return answer;
};

console.log(main(read()));
