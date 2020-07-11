import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const T: { [key: number]: number | undefined } = {};

  for (let x = 1; x * x <= N; x++) {
    for (let y = 1; y * y <= N; y++) {
      for (let z = 1; z * z <= N; z++) {
        const n = x ** 2 + y ** 2 + z ** 2 + x * y + y * z + z * x;

        T[n] = (T[n] || 0) + 1;
      }
    }
  }

  const F: number[] = [];

  for (let i = 1; i <= N; i++) {
    F.push(T[i] || 0);
  }

  return F.join("\n");
};

console.log(main(read()));
