import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  const cards = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < N % 30; i++) {
    const left = i % 5;
    const right = left + 1;

    [cards[right], cards[left]] = [cards[left], cards[right]];
  }

  return cards.join("");
};

console.log(main(read()));
