import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B] = input[0].map(Number);

  if (A === B) {
    return "Draw";
  } else if ((A > B && B !== 1) || A === 1) {
    return "Alice";
  } else {
    return "Bob";
  }
};

console.log(main(read()));
