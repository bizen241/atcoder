import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const guidebook = input.slice(1, -1).map((entry, index) => ({
    index,
    location: entry[0],
    score: Number(entry[1]),
  }));

  guidebook.sort((a, b) => {
    if (a.location === b.location) {
      return b.score - a.score;
    } else {
      return a.location > b.location ? 1 : -1;
    }
  });

  return guidebook.map((entry) => entry.index + 1).join("\n");
};

console.log(main(read()));
