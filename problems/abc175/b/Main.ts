import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const L = input[1].map(Number);

  let answer = 0;

  for (let i = 0; i < N - 2; i++) {
    const Li = L[i];

    for (let j = i + 1; j < N - 1; j++) {
      const Lj = L[j];
      if (Lj === Li) {
        continue;
      }

      for (let k = j + 1; k < N; k++) {
        const Lk = L[k];
        if (Lk === Li || Lk === Lj) {
          continue;
        }

        const total = Li + Lj + Lk;
        const max = Math.max(Li, Lj, Lk);

        if (total - max > max) {
          answer += 1;
        }
      }
    }
  }

  return answer;
};

console.log(main(read()));
