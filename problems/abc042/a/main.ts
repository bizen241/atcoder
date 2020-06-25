import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const ABC = input[0].map(Number);

  ABC.sort();

  return ABC[0] === 5 && ABC[1] === 5 && ABC[2] === 7 ? "YES" : "NO";
};

console.log(main(read()));
