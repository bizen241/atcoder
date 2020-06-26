import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  for (let i = 2; i < S.length; i += 2) {
    const firstHalf = S.slice(0, (S.length - i) / 2);
    const secondHalf = S.slice((S.length - i) / 2, i * -1);

    if (firstHalf === secondHalf) {
      return S.length - i;
    }
  }

  return 0;
};

console.log(main(read()));
