/**
 * keywords:
 * url: https://atcoder.jp/contests/abc102/tasks/abc102_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int maximum = 1;
  int minimum = 1000000000;

  for (int i = 0; i < N; i++) {
    int A;
    cin >> A;

    maximum = max(maximum, A);
    minimum = min(minimum, A);
  }

  int answer = maximum - minimum;

  cout << answer << endl;
}
