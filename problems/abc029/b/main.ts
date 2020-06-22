import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input.slice(0, -1).map((line) => line[0]);

  let answer = 0;

  S.forEach((s) => {
    if (s.includes("r")) {
      answer += 1;
    }
  });

  return answer;
};

console.log(main(read()));
