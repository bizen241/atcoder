import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N] = input[0].map(Number);
  const students = input.slice(1, N + 1).map((line) => line.map(Number));
  const checkpoints = input.slice(N + 1, -1).map((line) => line.map(Number));

  const answer: number[] = [];

  students.forEach(([a, b]) => {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let checkpoint = 0;

    checkpoints.forEach(([c, d], index) => {
      const currentDistance = Math.abs(c - a) + Math.abs(d - b);

      if (currentDistance < minDistance) {
        minDistance = currentDistance;
        checkpoint = index + 1;
      }
    });

    answer.push(checkpoint);
  });

  return answer.join("\n");
};

console.log(main(read()));
