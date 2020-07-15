import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const W = input.slice(1, -1).map((line) => line[0]);

  const first = W[0];
  const used = new Set([first]);
  let tail = first[first.length - 1];

  for (let i = 1; i < W.length; i++) {
    const current = W[i];
    const top = current[0];

    if (top !== tail || used.has(current)) {
      return "No";
    }

    used.add(current);
    tail = current[current.length - 1];
  }

  return "Yes";
};

console.log(main(read()));
