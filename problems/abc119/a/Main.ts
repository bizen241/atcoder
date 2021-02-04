import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  const [y, m, d] = S.split("/").map(Number);

  return y <= 2019 && m <= 4 && d <= 30 ? "Heisei" : "TBD";
};

console.log(main(read()));
