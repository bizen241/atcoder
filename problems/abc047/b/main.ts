import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [W, H, N] = input[0].map(Number);

  let top = H;
  let bottom = 0;
  let left = 0;
  let right = W;

  for (let i = 1; i <= N; i++) {
    const [x, y, a] = input[i].map(Number);

    switch (a) {
      case 1: {
        left = Math.max(x, left);
        break;
      }
      case 2: {
        right = Math.min(x, right);
        break;
      }
      case 3: {
        bottom = Math.max(y, bottom);
        break;
      }
      case 4: {
        top = Math.min(y, top);
        break;
      }
    }
  }

  const height = Math.max(0, top - bottom);
  const width = Math.max(0, right - left);

  return height * width;
};

console.log(main(read()));
