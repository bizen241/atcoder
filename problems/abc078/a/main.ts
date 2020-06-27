import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [X, Y] = input[0].map((str) => parseInt(str, 16));

  return X === Y ? "=" : X > Y ? ">" : "<";
};

console.log(main(read()));
