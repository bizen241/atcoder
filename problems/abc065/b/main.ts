import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const buttons = input.slice(1, -1).map((line) => Number(line[0]));

  let count = 0;
  let next = 1;

  while (true) {
    const button = buttons[next - 1];
    buttons[next - 1] = -1;

    count += 1;

    if (button === -1) {
      return -1;
    }

    if (button === 2) {
      break;
    }

    next = button;
  }

  return count;
};

console.log(main(read()));
