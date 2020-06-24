import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [H1, W1] = input[0].map(Number);
  const [H2, W2] = input[1].map(Number);

  return H1 === H2 || H1 === W2 || W1 === H2 || W1 === W2 ? "YES" : "NO";
};

console.log(main(read()));
