import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [W, H] = input[0].map(Number);

  return H * 4 === 3 * W ? "4:3" : "16:9";
};

console.log(main(read()));
