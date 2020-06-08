import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const primeFactorize = (target: bigint) => {
  let n = target;
  const res = new Map<bigint, bigint>();

  for (let i = 2n; i * i <= n; i++) {
    if (n % i !== 0n) {
      continue;
    }

    let ex = 0n;
    while (n % i === 0n) {
      ex += 1n;
      n /= i;
    }

    res.set(i, ex);
  }

  if (n !== 1n) {
    res.set(n, 1n);
  }

  return res;
};

const main = (input: string[][]) => {
  const N = BigInt(input[0][0]);

  const pf = primeFactorize(N);

  let answer = 0;

  pf.forEach((ex) => {
    let usedEx = 1;
    let usedCount = 0;

    while (usedEx <= ex) {
      usedCount += 1;
      usedEx += usedCount + 1;
    }

    answer += usedCount;
  });

  return answer;
};

console.log(main(read()));
