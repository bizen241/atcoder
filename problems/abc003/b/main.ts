import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0];
  const T = input[1][0];

  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    const t = T[i];

    if (
      (s === "@" && !"@atcoder".includes(t)) ||
      (t === "@" && !"@atcoder".includes(s)) ||
      (s !== "@" && t !== "@" && s !== t)
    ) {
      return "You will lose";
    }
  }

  return "You can win";
};

console.log(main(read()));
