import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [L, R, d] = input[0].map(Number);

  let answer = 0;

  for (let i = L; i <= R; i++) {
    if (i % d === 0) {
      answer += 1;
    }
  }

  return answer;
};

console.log(main(read()));
