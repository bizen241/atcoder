import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  let tapCount = 0;
  let unusedSocketCount = 1;

  while (unusedSocketCount < B) {
    tapCount += 1;
    unusedSocketCount += A - 1;
  }

  return tapCount;
};

console.log(main(read()));
