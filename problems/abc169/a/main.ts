// multiplication

import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf8").split("\n");

const [a, b] = input[0].split(" ").map(Number);

const answer = a * b;

console.log(answer);
