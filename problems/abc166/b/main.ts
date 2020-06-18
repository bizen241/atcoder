import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, K] = input[0].map(Number);

  const sunukes: boolean[] = [];
  let answer = N;

  for (let i = 1; i <= K * 2; i += 2) {
    const A = input[i + 1].map(Number);

    A.forEach((a) => {
      if (!sunukes[a]) {
        sunukes[a] = true;
        answer -= 1;
      }
    });
  }

  return answer;
};

console.log(main(read()));
