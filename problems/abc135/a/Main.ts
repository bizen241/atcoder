import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  return (A + B) % 2 === 0 ? (A + B) / 2 : "IMPOSSIBLE";
};

console.log(main(read()));
