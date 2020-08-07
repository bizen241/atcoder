import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const n = input[0][0];

  return Number(
    n
      .split("")
      .map((char) => (char === "1" ? "9" : "1"))
      .join("")
  );
};

console.log(main(read()));
