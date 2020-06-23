import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const calcGCD = (a: number, b: number) => {
  let m = Math.max(a, b);
  let n = Math.min(a, b);

  while (n !== 0) {
    const remainder = m % n;

    m = n;
    n = remainder;
  }

  return m;
};

const calcLCM = (a: number, b: number) => (a * b) / calcGCD(a, b);

const main = (input: string[][]) => {
  const a = Number(input[0][0]);
  const b = Number(input[1][0]);
  const n = Number(input[2][0]);

  const lcm = calcLCM(a, b);

  return lcm * Math.ceil(n / lcm);
};

console.log(main(read()));
