import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [H, W] = input[0].map(Number);

  const empty = ".";
  const bomb = "#";

  const field = input.slice(1, -1).map((line) => line[0].split(""));

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (field[i][j] !== empty) {
        continue;
      }

      let bombs = 0;

      for (let ii = i - 1; ii <= i + 1; ii++) {
        for (let jj = j - 1; jj <= j + 1; jj++) {
          if (ii === i && jj === j) {
            continue;
          }
          if (ii < 0 || ii >= H || jj < 0 || jj >= W) {
            continue;
          }

          if (field[ii][jj] === bomb) {
            bombs += 1;
          }
        }
      }

      field[i][j] = bombs.toString();
    }
  }

  return field.map((row) => row.join("")).join("\n");
};

console.log(main(read()));
