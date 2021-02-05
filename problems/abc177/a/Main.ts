import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [D, T, S] = input[0].map(Number);

  return D / S <= T ? "Yes" : "No";
};

console.log(main(read()));
