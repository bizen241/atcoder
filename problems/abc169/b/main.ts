import { readFileSync } from "fs";

const main = (input: string[]) => {
  const nums = input[1].split(" ").map(BigInt);
  const max = 10n ** 18n;

  if (nums.includes(0n)) {
    return 0;
  }

  let prod = 1n;

  for (const num of nums) {
    if (prod * num > max) {
      return -1;
    }

    prod *= num;
  }

  return prod.toString();
};

console.log(main(readFileSync("/dev/stdin", "utf8").split("\n")));
