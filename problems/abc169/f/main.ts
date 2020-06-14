// dp
// knapsack
// formal power series

import { readFileSync } from "fs";

const read = () =>
  readFileSync(0, "utf8")
    .split("\n")
    .map((line) => line.split(" "));

const main = (input: string[][]) => {
  const N = Number(input[0][0]);
  const S = Number(input[0][1]);
  const A = input[1].map(Number);
  const MOD = 998244353;

  const dp = [...Array(N + 1)].map(() => Array(S + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= S; j++) {
      dp[i + 1][j] += dp[i][j] * 2;
      dp[i + 1][j] %= MOD;

      if (A[i] + j <= S) {
        dp[i + 1][A[i] + j] += dp[i][j];
        dp[i + 1][A[i] + j] %= MOD;
      }
    }
  }

  return dp[N][S];
};

console.log(main(read()));
