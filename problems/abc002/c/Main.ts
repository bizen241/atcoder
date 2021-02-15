import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [xa, ya, xb, yb, xc, yc] = input[0].map(Number);

  const ab = Math.sqrt((xb - xa) ** 2 + (yb - ya) ** 2);
  const bc = Math.sqrt((xc - xb) ** 2 + (yc - yb) ** 2);
  const ca = Math.sqrt((xa - xc) ** 2 + (ya - yc) ** 2);

  const s = (ab + bc + ca) / 2;

  return Math.sqrt(s * (s - ab) * (s - bc) * (s - ca));
};

console.log(main(read()));
