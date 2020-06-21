import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const S = input[1][0];

  if (S.length % 2 === 0) {
    return -1;
  } else if (S === "b") {
    return 0;
  } else if (/^(abc)+$|^c(abc)+a$|^bc(abc)+ab$/.test(S)) {
    return (N - 1) / 2;
  } else {
    return -1;
  }
};

console.log(main(read()));
