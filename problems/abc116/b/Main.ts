import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = Number(input[0][0]);

  const flags: boolean[] = [];
  flags[s] = true;

  let m = 1;
  let n = s;

  while (true) {
    m += 1;
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;

    if (flags[n]) {
      break;
    }

    flags[n] = true;
  }

  return m;
};

console.log(main(read()));
