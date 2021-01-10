import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = Number(input[0][0]);

  return X === 7 || X === 5 || X === 3 ? "YES" : "NO";
};

console.log(main(read()));
