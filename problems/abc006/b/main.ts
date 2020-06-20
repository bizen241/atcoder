import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const n = Number(input[0][0]);

  if (n <= 2) {
    return 0;
  }
  if (n === 3) {
    return 1;
  }

  let a1 = 0;
  let a2 = 0;
  let a3 = 1;
  for (let i = 4; i <= n; i++) {
    const next = (a1 + a2 + a3) % 10007;

    a1 = a2;
    a2 = a3;
    a3 = next;
  }

  return a3;
};

console.log(main(read()));
