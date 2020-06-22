import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [n, m] = input[0].map(Number);

  const nAngle = (((n % 12) * 60 + m) / (60 * 12)) * 360;
  const mAngle = (m / 60) * 360;

  const diffAngle = Math.abs(nAngle - mAngle);

  return Math.min(diffAngle, 360 - diffAngle);
};

console.log(main(read()));
