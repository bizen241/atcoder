import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let count = 0;

  for (let i = 0; i < N; i++) {
    const [D1, D2] = input[i + 1].map(Number);

    if (D1 === D2) {
      count += 1;

      if (count === 3) {
        return "Yes";
      }
    } else {
      count = 0;
    }
  }

  return "No";
};

console.log(main(read()));
