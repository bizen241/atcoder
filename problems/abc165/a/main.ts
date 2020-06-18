import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const K = Number(input[0][0]);
  const [A, B] = input[1].map(Number);

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      return "OK";
    }
  }

  return "NG";
};

console.log(main(read()));
