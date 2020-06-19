import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const m = Number(input[0][0]);

  if (m < 100) {
    return "00";
  }
  if (m <= 5000) {
    return (m / 100).toString().padStart(2, "0");
  }
  if (m <= 30000) {
    return (m / 1000 + 50).toString();
  }
  if (m <= 70000) {
    return ((m / 1000 - 30) / 5 + 80).toString();
  }

  return "89";
};

console.log(main(read()));
