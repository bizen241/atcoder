import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M] = input[0].map(Number);

  for (let i = 0; i <= N && i * 2 <= M; i++) {
    const a = i * 2;

    if ((M - a) / 4 === N - i) {
      return `${i} 0 ${N - i}`;
    }
    if ((M - a - 3) / 4 === N - (i + 1)) {
      return `${i} 1 ${N - (i + 1)}`;
    }
  }

  return "-1 -1 -1";
};

console.log(main(read()));
