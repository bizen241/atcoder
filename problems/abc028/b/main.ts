import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];

  return [
    (S.match(/A/g) || []).length,
    (S.match(/B/g) || []).length,
    (S.match(/C/g) || []).length,
    (S.match(/D/g) || []).length,
    (S.match(/E/g) || []).length,
    (S.match(/F/g) || []).length,
  ].join(" ");
};

console.log(main(read()));
