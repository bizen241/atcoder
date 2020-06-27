import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  let blackboard = input[1].map(Number);

  let answer = 0;

  while (true) {
    if (blackboard.some((A) => A % 2 !== 0)) {
      break;
    }

    blackboard = blackboard.map((A) => A / 2);

    answer += 1;
  }

  return answer;
};

console.log(main(read()));
