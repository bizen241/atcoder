/**
 * keywords:
 * url: https://atcoder.jp/contests/agc025/tasks/agc025_a
 */
#include <bits/stdc++.h>

using namespace std;

int getSumOfDigits(int n) {
  int sum = 0;

  while (n > 0) {
    sum += n % 10;
    n /= 10;
  }

  return sum;
}

int main() {
  int N;
  cin >> N;

  int minimum = 1 << 30;
  for (int a = 1; a < N; a++) {
    minimum = min(minimum, getSumOfDigits(a) + getSumOfDigits(N - a));
  }

  cout << minimum << endl;
}
