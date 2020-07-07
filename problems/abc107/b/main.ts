import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const [, W] = input[0].map(Number);

  let field = input.slice(1, -1).map((line) => line[0]);

  field = field.filter((row) => !/^\.+$/.test(row));

  let count = 0;

  for (let j = 0; j < W; j++) {
    const cursor = j - count;

    if (field.every((row) => row[cursor] === ".")) {
      field = field.map(
        (row) => `${row.slice(0, cursor)}${row.slice(cursor + 1)}`
      );

      count += 1;
    }
  }

  return field.join("\n");
};

console.log(main(read()));
