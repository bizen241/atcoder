import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  for (let i = 97; i <= 122; i++) {
    const char = String.fromCodePoint(i);

    if (!S.includes(char)) {
      return char;
    }
  }

  return "None";
};

console.log(main(read()));
