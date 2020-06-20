import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [M, D] = input[0].map(Number);

  return M % D === 0 ? "YES" : "NO";
};

console.log(main(read()));
