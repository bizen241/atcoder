import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [Sx, Sy, Gx, Gy] = input[0].map(Number);

  const a = (Gy * -1 - Sy) / (Gx - Sx);
  const b = Sy - Sx * a;

  return (-1 * b) / a;
};

console.log(main(read()));
