import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const O = input[0][0];
  const E = input[1][0];

  const password: string[] = [];

  for (let i = 0; i < E.length; i++) {
    password.push(O[i]);
    password.push(E[i]);
  }

  if (O.length !== E.length) {
    password.push(O[O.length - 1]);
  }

  return password.join("");
};

console.log(main(read()));
