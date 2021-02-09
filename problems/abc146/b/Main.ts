import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const S = input[1][0].split("");

  const Z = "Z".codePointAt(0)!;

  return S.map((char) => {
    const codePoint = char.codePointAt(0)! + N;

    return String.fromCodePoint(codePoint <= Z ? codePoint : codePoint - 26);
  }).join("");
};

console.log(main(read()));
