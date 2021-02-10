import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const X = input[1].map(Number).map(Math.abs);

  const manhattan = X.reduce((sum, x) => sum + x);
  const euclidean = Math.sqrt(X.reduce((sum, x) => sum + x ** 2, 0));
  const chebyshev = Math.max(...X);

  return [manhattan, euclidean, chebyshev].join("\n");
};

console.log(main(read()));
