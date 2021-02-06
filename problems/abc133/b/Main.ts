import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N] = input[0].map(Number);

  let answer = 0;

  for (let i = 0; i < N; i++) {
    const X = input[i + 1].map(Number);

    for (let j = i + 1; j < N; j++) {
      const Y = input[j + 1].map(Number);

      const distance = Math.sqrt(
        X.map((x, index) => (x - Y[index]) ** 2).reduce(
          (sum, value) => sum + value
        )
      );

      if (Number.isInteger(distance)) {
        answer += 1;
      }
    }
  }

  return answer;
};

console.log(main(read()));
