import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const nameToVotes: { [name: string]: number } = {};

  input.slice(1).forEach(([vote]) => {
    nameToVotes[vote] = (nameToVotes[vote] || 0) + 1;
  });

  const [winner] = Object.entries(nameToVotes).reduce((acc, cur) =>
    cur[1] > acc[1] ? cur : acc
  );

  return winner;
};

console.log(main(read()));
