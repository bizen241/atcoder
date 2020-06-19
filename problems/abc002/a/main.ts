import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((str) => str.split(" "));

const main = (input: string[][]) => {
  const [X, Y] = input[0].map(Number);

  return X > Y ? X : Y;
};

console.log(main(read()));
