import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [s1, s2, s3] = input[0];

  return `${s1[0]}${s2[0]}${s3[0]}`.toUpperCase();
};

console.log(main(read()));
