import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const N = Number(input[1][0]);

  let chars = S.split("");

  for (let i = 0; i < N; i++) {
    const [l, r] = input[i + 2].map(Number);

    chars = [
      ...chars.slice(0, l - 1),
      ...chars.slice(l - 1, r).reverse(),
      ...chars.slice(r),
    ];
  }

  return chars.join("");
};

console.log(main(read()));
