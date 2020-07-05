import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);

  let AC = 0;
  let WA = 0;
  let TLE = 0;
  let RE = 0;

  for (let i = 1; i <= N; i++) {
    const S = input[i][0];

    switch (S) {
      case "AC": {
        AC += 1;
        break;
      }
      case "WA": {
        WA += 1;
        break;
      }
      case "TLE": {
        TLE += 1;
        break;
      }
      case "RE": {
        RE += 1;
        break;
      }
    }
  }

  return [`AC x ${AC}`, `WA x ${WA}`, `TLE x ${TLE}`, `RE x ${RE}`].join("\n");
};

console.log(main(read()));
