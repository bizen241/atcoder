import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const field = input.slice(0, -1).map((line) => line[0]);

  return field.join("") ===
    field
      .reverse()
      .map((row) => row.split("").reverse().join(""))
      .join("")
    ? "YES"
    : "NO";
};

console.log(main(read()));
