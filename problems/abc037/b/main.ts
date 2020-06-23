import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, Q] = input[0].map(Number);

  const A = Array(N).fill(0);

  for (let i = 1; i <= Q; i++) {
    const [L, R, T] = input[i].map(Number);

    const replaceCount = R - L + 1;

    A.splice(L - 1, replaceCount, ...Array(replaceCount).fill(T));
  }

  return A.join("\n");
};

console.log(main(read()));
