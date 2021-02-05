import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [A, B, C] = input[0].map(Number);

  return (A === B && C === 1) || A > B ? "Takahashi" : "Aoki";
};

console.log(main(read()));
