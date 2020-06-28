import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const cards = input[1].map(Number);

  cards.sort((a, b) => b - a);

  let Alice = 0;
  let Bob = 0;

  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      Alice += card;
    } else {
      Bob += card;
    }
  });

  return Alice - Bob;
};

console.log(main(read()));
