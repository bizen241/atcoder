import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const image = input.slice(1, -1);

  return image.map(([line]) => `${line}\n${line}`).join("\n");
};

console.log(main(read()));
