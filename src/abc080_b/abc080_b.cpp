/**
 * keywords:
 * url: https://atcoder.jp/contests/abc080/tasks/abc080_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int sum = 0;
  int n = N;
  while (n > 0) {
    sum += n % 10;
    n /= 10;
  }

  string answer = N % sum == 0 ? "Yes" : "No";

  cout << answer << endl;
}
