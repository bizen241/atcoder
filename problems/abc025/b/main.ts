import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, A, B] = input[0].map(Number);

  let position = 0;

  for (let i = 1; i <= N; i++) {
    const s = input[i][0];
    const d = Number(input[i][1]);

    const distance = Math.min(B, Math.max(A, d));

    if (s === "West") {
      position += distance;
    } else {
      position -= distance;
    }
  }

  if (position === 0) {
    return 0;
  } else if (position > 0) {
    return `West ${position}`;
  } else {
    return `East ${position * -1}`;
  }
};

console.log(main(read()));
