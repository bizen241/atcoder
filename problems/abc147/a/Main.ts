import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A1, A2, A3] = input[0].map(Number);

  return A1 + A2 + A3 >= 22 ? "bust" : "win";
};

console.log(main(read()));
