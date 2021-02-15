import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [Deg, Dis] = input[0].map(Number);

  const dirs = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];
  const scale = [
    32.7,
    28.5,
    24.5,
    20.8,
    17.2,
    13.9,
    10.8,
    8.0,
    5.5,
    3.4,
    1.6,
    0.3,
    0,
  ];

  const speed = Math.round((Dis / 60) * 10) / 10;
  const index = Math.floor((Deg + 3600 / 32) / (3600 / 16));

  const num = 12 - scale.findIndex((a) => a <= speed);
  const dir = num === 0 ? "C" : dirs[index];

  return `${dir} ${num}`;
};

console.log(main(read()));
