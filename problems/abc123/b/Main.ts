import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const times = input.map((line) => Number(line[0]));

  const remains = times.map((time) => (time % 10 === 0 ? 10 : time % 10));

  return (
    times.reduce(
      (sum, time) => sum + (time % 10 === 0 ? time : time + 10 - (time % 10)),
      0
    ) -
    (10 - Math.min(...remains))
  );
};

console.log(main(read()));
