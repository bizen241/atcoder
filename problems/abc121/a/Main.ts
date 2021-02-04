import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [H, W] = input[0].map(Number);
  const [h, w] = input[1].map(Number);

  return (H - h) * (W - w);
};

console.log(main(read()));
