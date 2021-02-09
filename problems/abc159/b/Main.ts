import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const S = input[0][0].split("");
  const N = S.length;

  const isPalindrome = (array: string[]) =>
    array.join("") === array.reverse().join("");

  return isPalindrome(S) &&
    isPalindrome(S.slice(0, (N - 1) / 2)) &&
    isPalindrome(S.slice((N + 3) / 2 - 1))
    ? "Yes"
    : "No";
};

console.log(main(read()));
