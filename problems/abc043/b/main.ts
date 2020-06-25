import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];

  const display: string[] = [];

  s.split("").forEach((key) => {
    if (key === "B") {
      display.pop();
    } else {
      display.push(key);
    }
  });

  return display.join("");
};

console.log(main(read()));
