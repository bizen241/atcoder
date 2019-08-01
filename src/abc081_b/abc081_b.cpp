/**
 * keywords:
 * url: https://atcoder.jp/contests/abc081/tasks/abc081_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int answer = 1000000000;
  for (int i = 0; i < N; i++) {
    int A;
    cin >> A;

    int count = 0;
    while (A % 2 == 0) {
      A /= 2;
      count += 1;
    }

    answer = min(answer, count);
  }

  cout << answer << endl;
}
