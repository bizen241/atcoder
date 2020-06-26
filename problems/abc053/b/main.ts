import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const s = input[0][0];

  const head = s.indexOf("A");
  const tail = s.lastIndexOf("Z");

  return tail - head + 1;
};

console.log(main(read()));
