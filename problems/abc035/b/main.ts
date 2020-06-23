import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const T = Number(input[1][0]);

  let x = 0;
  let y = 0;

  let brokenCount = 0;

  for (let i = 0; i < S.length; i++) {
    const instruction = S[i];

    switch (instruction) {
      case "L": {
        x -= 1;
        break;
      }
      case "R": {
        x += 1;
        break;
      }
      case "U": {
        y += 1;
        break;
      }
      case "D": {
        y -= 1;
        break;
      }
      case "?": {
        brokenCount += 1;
        break;
      }
    }
  }

  for (let i = 0; i < brokenCount; i++) {
    if (T === 1) {
      if (x > 0) {
        x += 1;
      } else {
        x -= 1;
      }
    } else {
      if (x > 0) {
        x -= 1;
      } else if (x < 0) {
        x += 1;
      } else if (y > 0) {
        y -= 1;
      } else if (y < 0) {
        y += 1;
      } else {
        x += 1;
      }
    }
  }

  return Math.abs(x) + Math.abs(y);
};

console.log(main(read()));
