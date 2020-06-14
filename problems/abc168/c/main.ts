import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, H, M] = input[0].map(Number);

  const hAngle = ((H * 60 + M) / 720) * Math.PI * 2;
  const mAngle = (M / 60) * Math.PI * 2;

  const hX = A * Math.cos(hAngle);
  const hY = A * Math.sin(hAngle);
  const mX = B * Math.cos(mAngle);
  const mY = B * Math.sin(mAngle);

  const dX = mX - hX;
  const dY = mY - hY;

  return Math.sqrt(dX ** 2 + dY ** 2);
};

console.log(main(read()));
