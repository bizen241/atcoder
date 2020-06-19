import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [S, W] = input[0].map(Number);

  return S > W ? "safe" : "unsafe";
};

console.log(main(read()));
