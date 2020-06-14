// bfs

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [N, M] = input[0].map(Number);

  const adjacencies = [...Array(N + 1)].map(() => Array<number>());
  for (let i = 1; i <= M; i++) {
    const [A, B] = input[i].map(Number);

    adjacencies[A].unshift(B);
    adjacencies[B].unshift(A);
  }

  const distances: number[] = [];
  const parents: number[] = [];

  distances[1] = 0;

  const queue = [1];
  while (true) {
    const current = queue.pop();
    if (current === undefined) {
      break;
    }

    adjacencies[current].forEach((adjacency) => {
      if (distances[adjacency] !== undefined) {
        return;
      }

      distances[adjacency] = distances[current] + 1;
      parents[adjacency] = current;

      queue.unshift(adjacency);
    });
  }

  return `Yes\n${parents.slice(2).join("\n")}`;
};

console.log(main(read()));
