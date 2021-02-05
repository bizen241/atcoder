import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0].split("");
  const T = input[1][0].split("");

  return T.filter((t, i) => t === S[i]).length;
};

console.log(main(read()));
