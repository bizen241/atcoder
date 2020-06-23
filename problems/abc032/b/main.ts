import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];
  const k = Number(input[1][0]);

  if (s.length < k) {
    return 0;
  }

  const candidates = new Set<string>();

  for (let i = 0; i <= s.length - k; i++) {
    candidates.add(s.slice(i, i + k));
  }

  return candidates.size;
};

console.log(main(read()));
