import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, X] = input[0].map(Number);
  const L = input[1].map(Number);

  let D = 0;
  let answer = 1;

  for (let i = 0; i < N; i++) {
    D = D + L[i];

    if (D <= X) {
      answer += 1;
    } else {
      break;
    }
  }

  return answer;
};

console.log(main(read()));
