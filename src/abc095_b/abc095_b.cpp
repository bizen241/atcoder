/**
 * keywords:
 * url: https://atcoder.jp/contests/abc095/tasks/abc095_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, X;
  cin >> N >> X;

  int sum = 0;
  int minimum = 1000;
  for (int i = 0; i < N; i++) {
    int m;
    cin >> m;

    sum += m;
    minimum = min(minimum, m);
  }

  int answer = (X - sum) / minimum + N;

  cout << answer << endl;
}
