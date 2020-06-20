import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const padZero = (num: number) => num.toString().padStart(2, "0");

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const date = new Date(N * 1000);
  const hh = padZero(date.getUTCHours());
  const mm = padZero(date.getUTCMinutes());
  const ss = padZero(date.getUTCSeconds());

  return `${hh}:${mm}:${ss}`;
};

console.log(main(read()));
