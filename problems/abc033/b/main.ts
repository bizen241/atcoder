import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let totalPopulation = 0;

  const largestCity = {
    name: "",
    population: 0,
  };

  for (let i = 1; i <= N; i++) {
    const S = input[i][0];
    const P = Number(input[i][1]);

    totalPopulation += P;

    if (P > largestCity.population) {
      largestCity.name = S;
      largestCity.population = P;
    }
  }

  return largestCity.population > totalPopulation / 2
    ? largestCity.name
    : "atcoder";
};

console.log(main(read()));
